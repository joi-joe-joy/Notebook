const mongoose = require('mongoose')

const options = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
}

module.exports = {
	connect: (DB_HOST) => {
		mongoose
			.connect(DB_HOST, options)
			.then(() => mongoose.connection)
			.catch((err) => {
				console.error(err)
				console.log(
					'MongoDB connection error. Please make sure MongoDB is running.'
				)
				process.exit()
			})
	},
	close: () => {
		mongoose.connection.close()
	},
}
