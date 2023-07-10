
import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/database'
import { Product } from '@/models'

// type Data = { message:  string }

export async function GET( request: NextRequest ) {
    
        let q = request.nextUrl.pathname.slice(12)
        console.log(q)

        q = q.toString().toLowerCase()

        if( q.length === 0 ){
            return NextResponse.json({message: 'Debe especificar el query de búsqueda'})
        }

        try {
            await db.connect();
            const product = await Product.find({
                $text: { $search: q}
                })
                .select('title images price inStock slug -_id')
                .lean();    
            await db.disconnect();            
            return NextResponse.json(product)   
            
        } catch (error) {
            
            await db.disconnect()
            console.log(error)
            return NextResponse.json({ message: 'Bad request' })
        }
}

