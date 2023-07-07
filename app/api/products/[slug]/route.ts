
import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/database'
import { Product } from '@/models'

// type Data = { message: string }

export async function GET( request: NextRequest ) {
        const slug  = request.nextUrl.pathname.slice(14)
        
        let condition = {};

        if( slug.includes(slug ) ){
            condition = { slug }
        }
        try {            
            await db.connect();
            const products = await Product.find(condition) 
                                            .select('title images price inStock slug -_id')
                                            .lean();
            await db.disconnect();
            return NextResponse.json(products)   
        } catch (error) {
            await db.disconnect()
            console.log(error)
        }
}

