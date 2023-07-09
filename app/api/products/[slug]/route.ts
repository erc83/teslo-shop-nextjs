
import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/database'
import { Product } from '@/models'

// type Data = { message:  string }

export async function GET( request: NextRequest ) {
        const slug  = request.nextUrl.pathname.slice(14)
        
        let condition = {};

        if( slug.includes(slug ) ){
            condition = { slug }
        }
        try {            
            await db.connect();
            const product = await Product.findOne(condition) 
                                            //.select('title images price inStock slug -_id')
                                            .lean();
            await db.disconnect();

            if(!product ) {
                return NextResponse.json({
                  message: 'Producto no encontrado'
                })
            }
            
            return NextResponse.json(product)   
        } catch (error) {
            await db.disconnect()
                NextResponse.json({ message: 'Bad request' })
            console.log(error)
        }
}

