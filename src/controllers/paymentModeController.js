const Payment = require("../models/payment");

exports.getPaymentModes = async (req, res) => {
  try {
    const paymentModes = await Payment.find();

    res.status(200).json(paymentModes);
  } catch (e) {
    res.status(404).json({
      status: "Fail",
      message: err,
    });
  }
};

exports.createPaymentMode = async (req, res) => {
  try {
    const paymentMode = await Payment.create(req.body);

    res.status(201).json({
      status: "Success",
      data: {
        paymentMode,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "Fail",
      message: err,
    });
  }
};
