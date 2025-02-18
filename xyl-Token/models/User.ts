import mongoose, { Schema, Document } from "mongoose";

interface IUser extends Document {
  fullName: string;
  email: string;
  walletAddress: string;
  investmentAmount: number;
}

const UserSchema = new Schema<IUser>({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  walletAddress: { type: String, required: true },
  investmentAmount: { type: Number, required: true },
});

export default mongoose.models.User || mongoose.model<IUser>("User", UserSchema);
