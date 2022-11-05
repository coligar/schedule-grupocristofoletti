import prisma from '../../../../db'


export default async function handler(req, res)
{
    const {order, name, interviewer, day, starttime, endtime, area, type, avatar} = req.body;
    console.log('create')
    try
    {
        if(req.method === "POST")
        {
            const newEntry = await prisma.schedule.create({
                data:
                {
                    order,
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
            console.log(newEntry)
            return res.status(200).json(newEntry, {success: true});
        }
        else
        {
            res.status(200).json({error: error, success:false, message:'Method no allowed.'})
        }

    }
    catch (error)
    {
       console.log('error')
        res.status(500).json({error: error, success:false, message:error})
    }
    
}

