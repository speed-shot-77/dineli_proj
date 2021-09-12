const db = require('../models')
const Order = db.order

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

exports.createOrder = (req, res) => {
  console.log('[date]', req.body);
  Order.create({
    userId: req.body.userId,
    status: req.body.status,
    totalPrice: req.body.totalPrice,
    count: req.body.count,
    paymentMethod: req.body.paymentMethod,
    details: req.body.details
  }).then(result => {
    if (result) {
      res.status(200).send({
        message: 'Site setting created successfully',
      })
    } else {
      res.status(400).send({
        message: 'Please try again',
      })
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
    order.save()
    res.status(200).send({
      message: 'Order approved successfully',
    })
  })
}