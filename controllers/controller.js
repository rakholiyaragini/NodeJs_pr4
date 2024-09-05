const transactionModel = require('../models/transaction');

const storage = [];
const defaultController = async (req, res) => {

    const transactions = await transactionModel.find({});

    console.log("default", transactions);

    res.render('index.ejs', { add : storage, transactions: transactions });
}

const addController = async (req, res) => {

    const transactions = new transactionModel({

        type: req.body.type,

        category: req.body.category,
        
        amount: req.body.amount,

        description: req.body.description,

        date: req.body.date
    })

    await transactions.save();

    console.log(transactions);

    res.redirect('/');
}

const editController = async (req, res) => {

    const { id } = req.params;

    const editTransaction = await transactionModel.findOne({ _id: id });

    console.log("edit", editTransaction);

    res.render('edit.ejs', { transactions: editTransaction });
}

const updateController = async (req, res) => {

        const { id } = req.params;
        
        const updateTransaction = await transactionModel.findByIdAndUpdate(id, req.body, { new: true });

        console.log("update", updateTransaction);

        res.redirect('/');

};
const deleteController = async (req, res) => {
    
    const { id } = req.params;

    const deleteTransaction = await transactionModel.findByIdAndDelete(req.params.id);

    console.log("delete", deleteTransaction);

    res.redirect('/');
}

module.exports = { defaultController, addController, editController, updateController, deleteController };