
import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/database'
import { Product } from '@/models'
import { NextApiRequestQuery } from 'next/dist/server/api-utils'
import { NextApiResponse } from 'next'

// type Data = { message:  string }

export async function GET( request: NextRequest) {
        
        return NextResponse.json({ message: 'Debe especificar el query de busqueda' })


}

