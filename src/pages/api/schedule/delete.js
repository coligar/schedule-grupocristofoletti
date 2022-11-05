import prisma from '../../../../db'

export default async function handler(req, res)
{
   if(req.method === "DELETE")
   {
        const { id } = req.query;

        const schedule = await prisma.schedule.delete({
            where:{
                id: id
            }
        });

        res.status(200).json(schedule);
    }
    
}

