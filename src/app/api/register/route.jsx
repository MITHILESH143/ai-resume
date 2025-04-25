import React from 'react';
import connectToDatabase from '@/dbConfig/dbConnection';
import User from '@/models/userModel';
import { NextRequest, NextResponse } from 'next/server';



// Connect to the database
connectToDatabase();

export async function POST(request) {
  try {
    const { username, email, password } = await request.json();

    if (!username || !email || !password) {
      return NextResponse.json({ message: 'Missing fields' }, { status: 400 });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ message: 'User already exists' }, { status: 409 });
    }

    const newUser = new User({ username, email, password });
    await newUser.save();

    return NextResponse.json({ message: 'user registered successfully' }, { status: 200 });
    
     

  } catch (error) {
    console.error('Error connecting to the database:', error);
    return NextResponse.json({ message: 'Database connection error' }, { status: 500 });
    
  }
}
