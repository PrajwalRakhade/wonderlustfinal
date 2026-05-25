# Wanderlust Deployment Setup Guide

## Status: Almost Ready ✅

Your project is ready to deploy! Follow these steps:

---

## Step 1: Set Up MongoDB Atlas (Required for Vercel)

Your current MongoDB is local (`127.0.0.1:27017`). Vercel can't access local databases.

1. **Create MongoDB Atlas Account:**
   - Go to: https://mongodb.com/cloud/atlas
   - Sign up (free account)
   
2. **Create a Cluster:**
   - Click "Create" → Choose FREE tier (M0)
   - Select region closest to you
   - Create deployment

3. **Create Database User:**
   - Username: `wanderlust` (or your choice)
   - Password: Create a strong one (save it!)
   - Click "Create User"

4. **Get Connection String:**
   - Click "Drivers" → "Node.js"
   - Copy the connection string
   - Example: `mongodb+srv://wanderlust:PASSWORD@cluster0.xxx.mongodb.net/wanderlust`
   - Replace `PASSWORD` with your actual password

5. **Update Your .env:**
   ```
   ATLASDB_URL=mongodb+srv://wanderlust:YOUR_PASSWORD@cluster0.xxx.mongodb.net/wanderlust
   ```

---

## Step 2: Verify Cloudinary Credentials ✅

Your Cloudinary is already configured:
```
CLOUD_NAME=dowgddmvy
CLOUD_API_KEY=366397987948877
CLOUD_API_SECRET=AGtou3PpUH51xsyF4fsvRYGS52s
```

---

## Step 3: Deploy to Vercel

1. **Go to:** https://vercel.com/dashboard
2. **Click:** "Add New" → "Project"
3. **Select:** Your GitHub repo `wonderlustfinal`
4. **In Environment Variables, add:**
   ```
   ATLASDB_URL=mongodb+srv://wanderlust:YOUR_PASSWORD@...
   CLOUD_NAME=dowgddmvy
   CLOUD_API_KEY=366397987948877
   CLOUD_API_SECRET=AGtou3PpUH51xsyF4fsvRYGS52s
   SECRET=wanderlust@2024$1234
   NODE_ENV=production
   ```
5. **Click "Deploy"** 🚀

---

## Your Current Credentials Summary

| Service | Status | Note |
|---------|--------|------|
| Cloudinary | ✅ Ready | Already configured |
| MongoDB | ⚠️ Needs Update | Switch to Atlas for cloud |
| Secret Key | ✅ Ready | Using: `wanderlust@2024$1234` |
| GitHub | ✅ Ready | Code pushed to `wonderlustfinal` |

---

## Questions?

- **MongoDB Atlas issues?** The setup is free and takes 5 minutes
- **Vercel deployment failing?** Check environment variables match exactly
