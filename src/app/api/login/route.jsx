import connectToDatabase from '@/dbConfig/dbConnection';
import User from '@/models/userModel';
import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';

connectToDatabase();

export async function POST(request) {
  try {

    

    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json({ message: 'Email and password are required' }, { status: 400 });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }
    const ismatch = await bcrypt.compare(password, user.password);
    

    if (!ismatch) { 
      return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
    }

    return NextResponse.json(
      {
        message: 'Login successful',
        user: {
          id: user._id,
          username: user.username,
          email: user.email,
        }
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json({ message: 'Server error' }, { status: 500 });
  }
}
