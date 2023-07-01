import { NextResponse } from 'next/server'
import { db, seedDatabase } from '@/database'
import { Product } from '@/models'

type Data = { message: string }

export async function GET( request: Request ) {
    
    if( process.env.NODE_ENV === 'production'){
        return NextResponse.json({ message: 'No tiene acceso a esta API' })
    }
    try {
        await db.connect();
    
        await Product.deleteMany();
        await Product.insertMany( seedDatabase.initialData.products )
        
        await db.disconnect();
    
        return NextResponse.json({ message: 'Proceso realizado correctamente' })
        
    } catch (error) {
        return error
    }
}


/* export async function POST(request: Request) {

    return new Response('Hello, Next js con POST' )
}

export async function PUT(request: Request) {
    return new Response('Hello, Next js con put' )
}
 */

