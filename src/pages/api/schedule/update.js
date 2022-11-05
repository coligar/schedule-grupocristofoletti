import prisma from '../../../../db'

export default async function handler(req, res)
{
    
   if(req.method === "PUT" || req.method === "PATCH")
   {
        const { id } = req.query;
        
        const {order, name, interviewer, day, starttime, endtime, area, type, avatar} = req.body;
        
        const schedule = await prisma.schedule.update({
            select:{
                order: true,
                name: true,
            },
            where:{
                id: String(id)
            },
            data:{
                order: order,
                name,
                interviewer,
                day,
                starttime,
                endtime,
                area,
                type,
                avatar
            }
            
        });
       
        res.status(200).json(schedule);
    }
    else
    {
        res.status(500).json(schedule);
    }
    
}

