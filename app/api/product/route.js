// app/api/product/route.js
import { connectToDatabase } from '@/lib/mongodb'; // Adjust path if different

export async function GET(request) {
  try {
    const { db } = await connectToDatabase();
    const products = await db.collection('students').find({}).toArray();

    return Response.json({ success: true, data: products });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ success: false, message: 'Server Error' }), {
      status: 500,
    });
  }
}
