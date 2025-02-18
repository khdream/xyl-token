# XYL Token Pre-Order Registration

A web application for registering interest in the upcoming XYL token launch on the Polygon network.

---

## Setup

### Prerequisites
Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)
- A wallet like [MetaMask](https://metamask.io/) configured for the Polygon network

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/xyl-token-registration.git
cd xyl-token-registration
```

### 2. Environment Setup
Create a `.env.local` file in the root directory with:
```env
NEXT_PUBLIC_PROJECT_ID=your_walletconnect_project_id
```
- Get your WalletConnect Project ID from [WalletConnect Cloud](https://cloud.walletconnect.com/)

### 3. Install Dependencies
```bash
npm install
# or
yarn install
```

### 4. Start the Development Server
```bash
npm run dev
# or
yarn dev
```
The app will be available at [http://localhost:3000](http://localhost:3000)

---

## Features

- Secure registration form for XYL token pre-orders
- Web3Modal wallet connection integration
- Automatic wallet address detection
- Mobile-responsive design
- Investment amount specification
- User information collection (name, email)

---

## Usage

1. **Access the Registration Form**
   - Visit the registration page
   - Fill in your personal details:
     - Full Name
     - Email Address
     - Investment Amount

2. **Connect Your Wallet**
   - Click the "Connect Wallet" button
   - Select your preferred wallet (MetaMask, WalletConnect, etc.)
   - Your wallet address will be automatically populated

3. **Submit Registration**
   - Review your information
   - Click "Submit" to register your interest
   - Receive confirmation of your registration

---
## How to Set Up MongoDB

This project uses MongoDB to store form submissions. Follow the steps below to set up MongoDB for this repository.

### 1. Create a MongoDB Atlas Database
MongoDB Atlas is a cloud-based database service. To set it up:

- Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- Sign up or log in
- Create a new **Cluster**
- Choose a **Shared Cluster (Free Tier)**
- Select a cloud provider and region
- Click **Create Cluster** and wait for deployment

### 2. Get the Connection String
Once the cluster is ready:

- Navigate to **Database Deployments**
- Click **Connect** → **Drivers**
- Select **Node.js** and **Version 4.0 or later**
- Copy the **Connection String**, which will look like this:

```bash
mongodb+srv://<username>:<password>@cluster0.mongodb.net/?retryWrites=true&w=majority
```
- Replace `<username>` and `<password>` with your database credentials.

### 3. Configure Environment Variables
In the root directory, create or update your `.env.local` file:

```env
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/xyl-token?retryWrites=true&w=majority
MONGODB_DB=xyl-token
```
- Replace <username> and <password> with your actual MongoDB credentials.

With that done, you can now read and write data to your new MongoDB cluster.

---

## Technical Stack

- Next.js 14 (App Router)
- TypeScript
- Ethers.js
- Web3Modal
- Tailwind CSS

---

## Security & Privacy

- All form submissions are securely processed
- Wallet connections are handled through Web3Modal's secure infrastructure
- Personal information is handled according to privacy best practices

---

## Development Status

🚧 **Under Construction** 🚧

The XYL token registration system is currently in development. Features and functionality may be added or modified.

---
