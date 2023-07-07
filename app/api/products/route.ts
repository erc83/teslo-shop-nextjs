
import { NextRequest, NextResponse } from 'next/server'
import { db, SHOP_CONSTANTS } from '@/database'
import { Product } from '@/models'

type Data = { message: string }

export async function GET( request: NextRequest ) {
        const { value = 'all' } = request.nextUrl.searchParams.values().next()
        let condition  = {};   //  { gender: 'kid' }
        // if( value !== 'all' && ['kid', 'men', 'women', 'unisex'].includes( value )   
        if( value !== 'all' && SHOP_CONSTANTS.validGenders.includes(value)) {
            condition = { gender:value }
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

