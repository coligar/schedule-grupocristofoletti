import prisma from '../../../../db'

export default async function handler(req, res)
{

    if(req.method === "GET")
    {
        const schedule = await prisma.schedule.findMany();
        res.json(schedule);
    }
    
}

