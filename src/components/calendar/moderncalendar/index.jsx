import React, { useState, useEffect, useCallback } from 'react'
import style from './Moderncalendar.module.css'
import SearchBar from '../../forms/inputs/search/search'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import Pin from './pin/pin'
import Calendar from './calendar'

import Person from '@mui/icons-material/Person'
import CalendarIcon from '@mui/icons-material/Today'



const ModernCalendar = (props) => 
{
    const [searchTerm, setSearchTerm] = useState({type:'', term:''})
    const [scheduleList, setScheduleList] = useState([])
    
    var current = new Date()

    /*let last_day = new Date(current.getTime() - 86400000).toLocaleDateString()
    let current_day = new Date().toLocaleDateString()
    let next_day = new Date(current.getTime() + 86400000).toLocaleDateString()*/

    let last_day = new Date('2022/01/01').toLocaleDateString()
    let current_day = new Date('2022/01/02').toLocaleDateString()
    let next_day = new Date('2022/01/03').toLocaleDateString()

    console.log('dias oroginal :',last_day, current_day, next_day)

    const getData = useCallback(async () =>
    {
        try 
        {
          let res = fetch('http://localhost:3000/api/schedule/get')
          .then((response) => {
            return response.json()
          }) 
          .then((json) => {
            console.log(json)
            const yesterday = json.filter((element, index) => new Date(element.day).toLocaleDateString('pt-BR') === last_day)
            const current = json.filter((element, index) => new Date(element.day).toLocaleDateString('pt-BR') === current_day)
            const tomorrow = json.filter((element, index) => new Date(element.day).toLocaleDateString('pt-BR') === next_day)
            console.log('dias retorno :',yesterday, current, tomorrow)
            const schedule =[
                {
                    date_id: 1,
                    date: last_day,
                    data: yesterday,
                },
                {
                    date_id: 2,
                    date: current_day,
                    data: current,
                },
                {
                    date_id: 3,
                    date: next_day,
                    data: tomorrow,
                },
            ]
            setScheduleList(schedule)

          });
        } 
        catch (error) 
        {
            console.log(error)
        }
    },[])


    const doSchedule = useCallback(async () =>
    {
        try 
        {
            const response = await fetch('http://localhost:3000/api/schedule/create',
            {
                method: 'POST',
                body: JSON.stringify({
                    order: '5',
                    name: 'Marcelo Bombonato',
                    interviewer: 'Representante | Elisângela',
                    day: new Date(current.getTime()),
                    starttime: '14:00',
                    endtime: '15:00',
                    area: 'representante',
                    type: '',
                    avatar: 'https://www.thewrap.com/wp-content/uploads/2016/05/Top-Gun-Tom-Cruise.png'
                }),
                headers:
                {
                    'Content-Type': 'application/json; charset=UTF-8'
                }
            })
            console.log('passou aqui', response)
            if(!response.ok)
            {
                throw new Error(response.statusText)
            }
        } 
        catch (error) 
        {
            console.log(error)
        }
    },[current_day])


    useEffect(() => 
    {
        //doSchedule()
        getData()
    },[doSchedule, getData])

    /**Array com o resultado da consulta ao banco de dados para agenda
     * Todas as formas de pesquisa (dia, semana, mês e intervalo de datas)
     * passam por essa consulta e o resultado formatar igual array abaixo. 
     * Implementar método
     */
    const schedule =[
        {
            date_id: 1,
            date: last_day,
            data: [],
        },
        {
            date_id: 2,
            date: current_day,
            data:[ 
                {
                    id: '7',
                    order: '1',
                    name: 'Alexandre Henrique',
                    interviewer: 'TI | Diego Camargo',
                    day: current_day,
                    starttime: '08:00',
                    endtime: '09:00',
                    area: 'rh',
                    type: 'agendamentosolicitado',
                    avatar: 'https://observatoriodocinema.uol.com.br/wp-content/uploads/2018/08/cropped-exterminador-do-futuro-6-arnold-schwarzenegger-prepara-novo-ator-3.jpg'
                },
                {
                    id: '8',
                    order: '2',
                    name: 'José Maria',
                    interviewer: 'Administrativo | Elisângela',
                    day: current_day,
                    starttime: '09:30',
                    endtime: '10:30',
                    area: 'administrativo',
                    type: 'reagendamentosolicitado',
                    avatar: 'https://spinoff.com.br/wp-content/uploads/o-exterminador-do-futuro-1.jpg'
                }, 
                {
                    id: '9',
                    order: '3',
                    name: 'Andréia Marques',
                    interviewer: 'Comercial | Elisângela',
                    day: current_day,
                    starttime: '11:00',
                    endtime: '12:30',
                    area: 'comercial',
                    type: '',
                    avatar: 'https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_750,h_375/https://poltronanerd.com.br/wp-content/uploads/2020/05/jake-neyriti-james-cameron-avatar-2-capa-minhaseriefavorita-1280x720-1-750x375.jpg'
                },
                {
                    id: '10',
                    order: '4',
                    name: 'Marcelo Bombonato',
                    interviewer: 'Representante | Elisângela',
                    day: current_day,
                    starttime: '13:00',
                    endtime: '15:00',
                    area: 'representante',
                    type: '',
                    avatar: 'https://www.thewrap.com/wp-content/uploads/2016/05/Top-Gun-Tom-Cruise.png'
                },
                {
                    id: '11',
                    order: '5',
                    name: 'Zélia Cardoso',
                    interviewer: 'Produção | Elisângela',
                    day: current_day,
                    starttime: '15:15',
                    endtime: '16:30',
                    area: 'produção',
                    type: '',
                    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZOg5mRt2Y77bTrMb6iyUhBbXY5ErS_QOL5Q&usqp=CAU'
                },
                {
                    id: '12',
                    order: '6',
                    name: 'Luis Skagion',
                    interviewer: 'Comercial | Elisângela',
                    day: current_day,
                    starttime: '17:00',
                    endtime: '18:30',
                    area: 'comercial',
                    type: '',
                    avatar: 'https://tm.ibxk.com.br/2014/06/24/24104456847152.jpg?ims=1120x420'
                }
            ],
        },
        {
            date_id: 3,
            date: next_day,
            data:[ 
                {
                    id: '13',
                    order: '1',
                    name: 'José Maciel',
                    interviewer: 'TI | Diego Camargo',
                    day: next_day,
                    starttime: '08:00',
                    endtime: '09:00',
                    area: 'rh',
                    type: 'agendamentosolicitado',
                    avatar: 'https://smartgreen.net/wp-content/uploads/2021/01/person.jpg'
                },
                {
                    id: '14',
                    order: '2',
                    name: 'Kátia Maria',
                    interviewer: 'Administrativo | Elisângela',
                    day: next_day,
                    starttime: '09:30',
                    endtime: '10:30',
                    area: 'administrativo',
                    type: 'reagendamentosolicitado',
                    avatar: 'https://portal-assets.icnetworks.org/uploads/picture/file/104874/resized_045.DomingasPerson_Oc.Person_IC_FotoAndreSeiti3.jpg'
                }, 
                {
                    id: '15',
                    order: '3',
                    name: 'Marina Silva',
                    interviewer: 'Comercial | Elisângela',
                    day: next_day,
                    starttime: '11:00',
                    endtime: '12:30',
                    area: 'comercial',
                    type: '',
                    avatar: 'https://br.web.img3.acsta.net/pictures/15/09/01/18/54/060755.jpg'
                },
                {
                    id: '16',
                    order: '4',
                    name: 'Flávio Zanão',
                    interviewer: 'Representante | Elisângela',
                    day: next_day,
                    starttime: '13:00',
                    endtime: '14:00',
                    area: 'representante',
                    type: '',
                    avatar: 'https://m0.her.ie/wp-content/uploads/2018/01/07093633/GettyImages-887815620.jpg'
                },
                {
                    id: '17',
                    order: '5',
                    name: 'Oliver Bituso',
                    interviewer: 'Produção | Elisângela',
                    day: next_day,
                    starttime: '14:55',
                    endtime: '16:30',
                    area: 'produção',
                    type: '',
                    avatar: 'https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F61688aa1d4a8658c3f4d8640%2FAntonio-Juliano%2F0x0.jpg%3Ffit%3Dscale'
                },
                {
                    id: '18',
                    order: '6',
                    name: 'Maiara Azevedo',
                    interviewer: 'Comercial | Elisângela',
                    day: next_day,
                    starttime: '17:00',
                    endtime: '18:00',
                    area: 'comercial',
                    type: '',
                    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_ocW9x-t2gGJPKg3iqvoEfm7qJSB9ujqnqA&usqp=CAU'
                }
            ],
        }
    ]

    const schedule_future = [
       
        {
            id: '1',
            name: 'Alexandre Henrique',
            interviewer: 'TI | Diego Camargo',
            day: '03/11/2021',
            time: '08:00 - 09:00',
            area: 'rh',
            type: 'agendamentosolicitado',
            avatar: 'https://observatoriodocinema.uol.com.br/wp-content/uploads/2018/08/cropped-exterminador-do-futuro-6-arnold-schwarzenegger-prepara-novo-ator-3.jpg'
        },
        {
            id: '2',
            name: 'José Maria',
            interviewer: 'Administrativo | Elisângela',
            day: '03/11/2021',
            time: '09:30 - 10:30',
            area: 'administrativo',
            type: 'reagendamentosolicitado',
            avatar: 'https://spinoff.com.br/wp-content/uploads/o-exterminador-do-futuro-1.jpg'
        }, 
        {
            id: '3',
            name: 'Andréia Marques',
            interviewer: 'Comercial | Elisângela',
            day: '03/11/2021',
            time: '11:00 - 12:30',
            area: 'comercial',
            type: '',
            avatar: 'https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_750,h_375/https://poltronanerd.com.br/wp-content/uploads/2020/05/jake-neyriti-james-cameron-avatar-2-capa-minhaseriefavorita-1280x720-1-750x375.jpg'
        },
        {
            id: '4',
            name: 'Marcelo Bombonato',
            interviewer: 'Representante | Elisângela',
            day: '03/11/2021',
            time: '13:00 - 14:00',
            area: 'representante',
            type: '',
            avatar: 'https://www.thewrap.com/wp-content/uploads/2016/05/Top-Gun-Tom-Cruise.png'
        },
        {
            id: '5',
            name: 'Zélia Cardoso',
            interviewer: 'Produção | Elisângela',
            day: '03/11/2021',
            time: '15:30 - 16:30',
            area: 'produção',
            type: '',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZOg5mRt2Y77bTrMb6iyUhBbXY5ErS_QOL5Q&usqp=CAU'
        },
        {
            id: '6',
            name: 'Luis Skagion',
            interviewer: 'Comercial | Elisângela',
            day: '03/11/2021',
            time: '17:00 - 18:00',
            area: 'comercial',
            type: '',
            avatar: 'https://tm.ibxk.com.br/2014/06/24/24104456847152.jpg?ims=1120x420'
        },
        {
            id: '7',
            name: 'José Maciel',
            interviewer: 'TI | Diego Camargo',
            day: '03/11/2021',
            time: '08:00 - 09:00',
            area: 'rh',
            type: 'agendamentosolicitado',
            avatar: 'https://smartgreen.net/wp-content/uploads/2021/01/person.jpg'
        },
        {
            id: '8',
            name: 'Kátia Maria',
            interviewer: 'Administrativo | Elisângela',
            day: '03/11/2021',
            time: '09:30 - 10:30',
            area: 'administrativo',
            type: 'reagendamentosolicitado',
            avatar: 'https://portal-assets.icnetworks.org/uploads/picture/file/104874/resized_045.DomingasPerson_Oc.Person_IC_FotoAndreSeiti3.jpg'
        }, 
        {
            id: '9',
            name: 'Marina Silva',
            interviewer: 'Comercial | Elisângela',
            day: '03/11/2021',
            time: '11:00 - 12:30',
            area: 'comercial',
            type: '',
            avatar: 'https://br.web.img3.acsta.net/pictures/15/09/01/18/54/060755.jpg'
        },
        {
            id: '10',
            name: 'Flávio Zanão',
            interviewer: 'Representante | Elisângela',
            day: '03/11/2021',
            time: '13:00 - 14:00',
            area: 'representante',
            type: '',
            avatar: 'https://m0.her.ie/wp-content/uploads/2018/01/07093633/GettyImages-887815620.jpg'
        },
        {
            id: '11',
            name: 'Oliver Bituso',
            interviewer: 'Produção | Elisângela',
            day: '03/11/2021',
            time: '15:30 - 16:30',
            area: 'produção',
            type: '',
            avatar: 'https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F61688aa1d4a8658c3f4d8640%2FAntonio-Juliano%2F0x0.jpg%3Ffit%3Dscale'
        },
        {
            id: '12',
            name: 'Maiara Azevedo',
            interviewer: 'Comercial | Elisângela',
            day: '03/11/2021',
            time: '17:00 - 18:00',
            area: 'comercial',
            type: '',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_ocW9x-t2gGJPKg3iqvoEfm7qJSB9ujqnqA&usqp=CAU'
        }
     
    ]
    

    const schedule_list = scheduleList.map((data, index) => 
    (                           
        <>
            <div key={Math.random()} className={style.schedule_area_candidate_content_line_header}>
                
                <div className={style.column_a}>

                    <Person style={{ marginLeft: '4px' }} />

                </div>

                <div className={style.column_x} style={{ width: '100%', padding: '8px 0 8px 0', fontSize: '16px', fontWeight: '500' }}>

                    Agenda do dia {data.date}

                </div>
                
            </div>

            
                {

                    data.data.filter((val, index) => {

                    if(searchTerm.type == '')
                    {
                        return val
                    }               
                    else if(searchTerm.type === 'search') 
                    {
                        return val.name.toLocaleLowerCase().includes(searchTerm.term.toLocaleLowerCase())
                    }

                }).map((item, index) => (

                    <div key={item.id} className={style.schedule_area_candidate_content_line}>

                        <div className={style.column_a}>

                            {item.order}º

                        </div>

                        <Pin name={item.name} interviewer={item.interviewer} starttime={item.starttime} endtime={item.endtime} area={item.area} type={item.type} avatar={item.avatar} day={data.date}/>

                    </div>
                ))}   

        </>
    ))
    
    return(
        <>
            <div className={style.schedule_area_header}>

                <div className={style.schedule_area_header_title}>
                    <h2><span className={style.feature}>| Agenda</span> de entrevistas</h2>
                    <p className={style.description}>Aqui ficam os agendamentos para entrevistas dos candidatos</p>
                </div>

            </div>

            <div className={style.schedule_content}>
            
                <div className={style.schedule_area}>
                        
                    <div className={style.schedule_area_header_filter}>

                        <SearchBar elevation={1} placeholder="Pesquisar na agenda" onChange={(event) => setSearchTerm({type:'search', term: event.target.value})}/>

                        <div className={style.schedule_area_header_filter_date}>

                            <Paper
                                component="form"
                                sx={{ p: '4px', display: 'flex', alignItems: 'center', width: '48px', color: 'white', backgroundColor: '#1592E6', fontWeight: '500', textAlign: 'center', justifyContent: 'center', margin:'0 1px 0 0'}}
                                elevation= {1}
                            >
                                dia
                            </Paper>

                            <Paper
                                component="form"
                                sx={{ p: '4px', display: 'flex', alignItems: 'center', width: '76px', color: 'black', backgroundColor: 'white', fontWeight: '500', textAlign: 'center', justifyContent: 'center', margin:'0 1px 0 0'}}
                                elevation= {1}
                            >
                                semana
                            </Paper>

                            <Paper
                                component="form"
                                sx={{ p: '4px', display: 'flex', alignItems: 'center', width: '51px', color: 'black', backgroundColor: 'white', fontWeight: '500', textAlign: 'center', justifyContent: 'center', margin:'0 15px 0 0'}}
                                elevation= {1}
                            >
                                mês
                            </Paper>

                            <Paper
                                component="form"
                                sx={{ p: '4px', display: 'flex', alignItems: 'center', width: '191px', color: '#5A607F', backgroundColor: 'white', fontWeight: '400', textAlign: 'center', justifyContent: 'center',  margin:'0'}}
                                elevation= {1}
                            >
                                <CalendarIcon/> Jan, 2021 - Dez, 2021
                            </Paper>

                        </div>
                        
                        <Button variant="outlined" sx={{border: '2px solid #1592E6', borderRadius:'51px', lineHeight: '12px', fontSize: '12px', padding:'7px',
                            '&:hover': {
                                border: '2px solid currentColor',
                                backgroundColor:'#1592E6',
                                color: 'white'
                            }, margin:'10px 0 0 0'}}>
                                ver agenda
                        </Button>

                    </div>

                    <div className={style.schedule_area_candidate}>
                        
                        <div className={style.schedule_area_candidate_content}>

                            {
                                schedule_list
                            }

                        </div>

                    </div>

                </div>


                <div className={style.schedule_minimal}>

                    <h3>Próximas entrevistas</h3>

                    <Paper elevation={2} style={{padding: '10px', marginBottom:'25px'}}>
                        <h4>Entrevistas para a semana</h4>
                        <div className={style.counter_area}>
                            <span className={style.number}>14</span> 
                            <span className={style.description}>entrevisas agendadas para essa semana</span>
                        </div>
                        <div className={style.calendar_future}>
                            <Calendar data={schedule_future}/>
                        </div>
                        <div className={style.calendar_action}>ver todas as entrevistas</div>
                    </Paper>

                    <Paper elevation={2} style={{padding: '10px', marginBottom:'25px'}}>
                        <h4>Entrevistas para o mês</h4>
                        <div className={style.counter_area}>
                            <span className={style.number}>25</span> 
                            <span className={style.description}>entrevisas agendadas para esse mês</span>
                        </div>
                        <div className={style.calendar_future}>
                            <Calendar data={schedule_future}/>
                        </div>
                        <div className={style.calendar_action}>ver todas as entrevistas</div>
                    </Paper>
                                     
                </div>

            </div>
        </>
    )
}

export default ModernCalendar