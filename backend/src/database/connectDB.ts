import mongoose from 'mongoose';

const connectDB = () => {
  mongoose
    .connect(
      `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@frequency.5inglbn.mongodb.net/?retryWrites=true&w=majority`
    )
    .then(() => console.log('Connected!'))
    .catch((e) => {
      console.log('Can not connect to the db: ', e);
    });
};

export default connectDB;
