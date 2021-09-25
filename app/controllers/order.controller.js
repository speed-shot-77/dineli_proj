const db = require('../models')
const sendEMail = require('./auth.controller').sendEmail;
const Order = db.order
const User = db.user

exports.getOrders = (req, res) => {
  const count = Number(req.query.count) ? Number(req.query.count) : 20
  Order.findAll({
    limit: count,
    order: ['createdAt'],
  })
    .then(result => {
      res.status(200).json(result)
    })
    .catch(err => {
      res.status(500).json({message: err.message})
    })
}

exports.getUserOrder = (req, res) => {
  // const count = Number(req.query.count) ? Number(req.query.count) : 20
  // console.log('order param',req.query);
  const id = req.query.ID;

  Order.findAll({
    where: {
      userId:id
    }
  })
    .then(result => {
      res.status(200).json(result)
    })
    .catch(err => {
      res.status(500).json({message: err.message})
    })
}

exports.createOrder = (req, res) => {
  console.log('[date]', req.body);
  Order.create({
    userId: req.body.userId,
    status: req.body.status,
    totalPrice: req.body.totalPrice,
    count: req.body.count,
    paymentMethod: req.body.paymentMethod,
    details: req.body.details,
    signatureId: req.body.signatureId
  }).then(result => {
    if (result) {
      res.status(200).send({
        message: 'Site setting created successfully',
      })
      console.log('order created', req.body.email);
      sendEmail(req.body.email, 'Order created', 'Your order created successfully.');
    } else {
      res.status(400).send({
        message: 'Please try again',
      })
      console.log('order created', req.body.email);
      sendEmail(req.body.email, 'Order approved', 'Order created failed');
    }
  }).catch(err => {
    console.log(err);
    res.status(500).send({message: 'Server error'})
  })
}

exports.saveOrder = (req, res) => {
  Order.findOne({
    where: {
      id: req.body.id,
    }
  }).then(order => {
    if (!order) {
      res.status(400).send({
        message: 'Order not found',
      })
    }

    order.userId = req.body.userId
    order.status = req.body.status
    order.totalPrice = req.body.totalPrice
    order.count = req.body.count
    order.paymentMethod = req.body.paymentMethod;
    order.details = req.body.details;
    order.signatureId = req.body.signatureId;
    order.save()
    res.status(200).send({
      message: 'Order approved successfully',
    })
    if(req.body.status==='complete'){
      User.findById(req.body.userId).then(user=>{
        console.log('token transfer', user.email);
        sendEmail(user.email, 'Token transfered', 'Your token transfered successfully');
      })      
    }
  })
}
