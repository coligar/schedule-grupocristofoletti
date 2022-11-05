import React, { useState, useEffect } from 'react'
import style from './Manager.module.css'
import SearchBar from '../../../components/forms/inputs/search/search'
import MenuSchedule from '../../../components/schedule/menu/menuschedule'
import CandidateCard from '../../../components/schedule/candidatecard/candidatecard'
import WarningCard from '../../../components/schedule/warningcard/warningcard'
import ResumeView from '../../../components/schedule/resumeview/resumeview'
import Log from '../../../components/logs/'
import ModernCalendar from '../../../components/calendar/moderncalendar'


const Manager = (props) =>
{

    const [listAreasOccuppation, SetListAreasOccuppation] = useState(
        [
            {
                id: 1,
                label: "Administrativo",
                quantity: 75,
                color: "#a39ffe"
            },
            {
                
                id: 2,
                label: "Comercial",
                quantity: 120,
                color: "#ffcb37"
            },
            {
                id: 3,
                label: "Representante",
                quantity: 48,
                color: "#f66a59"
            },
            {
                id: 4,
                label: "Produção",
                quantity: 525,
                color: "#ffa4c1"
            },
            {
                
                id: 5,
                label: "RH",
                quantity: 10,
                color: "#5cbd3a"
            }
        ]
    )

    const [menuInterviews, setMenuInterviews] = useState(
        [
            {
                id: 1,
                label: "Confirmadas",
                quantity: 15,
                type: "confirmados"
            },
            {
                id: 2,
                label: "Canceladas",
                quantity: 2,
                type: "cancelado"
            },
            {
                id: 3,
                label: "Reagendadas",
                quantity: 5,
                type: "reagendado"
            },
            {
                id: 4,
                label: "Realizadas",
                quantity: 45,
                type: "realizada"
            },
            {
                id: 5,
                label: "Cancel. Solicitados",
                quantity: 13,
                type: "cancelamentosolicitado"
            },
            {
                id: 6,
                label: "Reagen. Solicitados",
                quantity: 5,
                type: "reagendamentosolicitado"
            },
            {
                id: 7,
                label: "Agen. Solicitados",
                quantity: 5,
                type: "agendamentosolicitado"
            },
        ]
    )

    const [menuProfile, setMenuProfile] = useState(
        [
            {
                id: 1,
                label: "Contratados",
                quantity: 3,
                type: "contratado"
            },
            {
                id: 2,
                label: "Visualizados",
                quantity: 775,
                type: "visualizados"
            }
        ]
    )

    const [candidatesList, setCandidateList] = useState(
        [
            {
                id: 1,
                name: "Alexandre Bitencurt Albuquerque Batista Santos Nabucodonosor",
                border: "#a39efc",
                areas: 1,
                schedule: 1,
                profiles: 0,
                img: "https://heloisatolipan.com.br/imagens/2021/01/20210121-imagem.jpg",
                status: "confirmados",
                date: "22/10/2021 10:15",
                description: "aqui vai uma breve descrição sobre alguma quanlidade do candidato",
                resume:
                    {
                        name: "Alexandre Bitencurt Albuquerque Batista Santos Nabucodonosor",
                        avatar: "https://heloisatolipan.com.br/imagens/2021/01/20210121-imagem.jpg",
                        birthdate: "01/01/1850",
                        cpf: "111.111.111-11",
                        telephone: "(19) 99999-9999",
                        email: "agencia@skagion.com.br",
                        gender: "Masculino",
                        zipcode: "13501-601",
                        address: "Avenida 36A, 314",
                        district: "Vila Alemã",
                        city: "Rio Claro",
                        uf: "SP",
                        has_disability: "Não",
                        own_vehicle: "Sim",
                        summary: "Aqui vai um breve resumo do candidado. Aqui ele terá a oportunidade de falar sobre suas habilidades.",
                        area_of_interest: "Administrativo",
                        color: "#a39ffe",
                        status_resume: "confirmados",
                        date_status_resume:"26/10/2021 10:15",
                        academic_education: "Superior completo",
                        last_company: "Skagion",
                        last_adminission_date: "01/01/1900",
                        last_resignation_date: "01/01/1910",
                        last_performed_activities: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia, felis vel pretium porta, purus massa convallis leo, quis molestie sem turpis convallis massa. Fusce auctor ac libero ac consectetur. Pellentesque eu volutpat mauris, vitae varius velit. Aliquam nec ipsum vitae felis interdum faucibus gravida sit amet risus. Suspendisse potenti. Suspendisse aliquet nec ex nec pellentesque. Nullam bibendum in enim at sollicitudin. Vestibulum eu bibendum lectus. Nullam ornare dolor nulla, eu tincidunt odio consequat et. Donec posuere vel sapien et dictum. Nullam rutrum ipsum justo, aliquam euismod elit scelerisque quis. Ut vitae eros mi",
                        penultimate_company: "Atalaia Turismo",
                        penultimate_adminission_date: "01/01/1890",
                        penultimate_resignation_date: "01/01/1900",
                        penultimate_performed_activities: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia, felis vel pretium porta, purus massa convallis leo, quis molestie sem turpis convallis massa. Fusce auctor ac libero ac consectetur. Pellentesque eu volutpat mauris, vitae varius velit. Aliquam nec ipsum vitae felis interdum faucibus gravida sit amet risus. Suspendisse potenti. Suspendisse aliquet nec ex nec pellentesque. Nullam bibendum in enim at sollicitudin. Vestibulum eu bibendum lectus. Nullam ornare dolor nulla, eu tincidunt odio consequat et. Donec posuere vel sapien et dictum. Nullam rutrum ipsum justo, aliquam euismod elit scelerisque quis. Ut vitae eros mi"
                    }
            },
            {
                id: 2,
                name: "Pedro Pereira",
                areas:5,
                schedule: 6,
                profiles: 0,
                border: "#5cbd3a",
                img: "http://www.fundosanimais.com/Imagens/imagens-lobos.jpg",
                status: "reagendamentosolicitado",
                date: "22/10/2021 06:25",
                description: "aqui vai uma breve descrição sobre alguma quanlidade do candidato"
            },
            {
                id: 3,
                name: "Maria Tereza",
                areas: 4,
                schedule: 3,
                profiles: 0,
                border: "#fda9c3",
                img: "https://viverdeblog.com/wp-content/uploads/2014/02/imagens-para-blog.jpg",
                status: "reagendado",
                date: "22/10/2021 08:42",
                description: "aqui vai uma breve descrição sobre alguma quanlidade do candidato"
            },
            {
                id: 4,
                name: "Marcelo Bombom",
                areas: 3,
                schedule: 2,
                profiles: 0,
                border: "#ff5a59",
                img: "https://www.torredevigilancia.com/wp-content/uploads/2019/10/coringa-55.jpg",
                status: "cancelado",
                date: "22/10/2021 13:29",
                description: "aqui vai uma breve descrição sobre alguma quanlidade do candidato"
            },
            {
                id: 5,
                name: "Valquíria Barbiere",
                areas: 2,
                schedule: 0,
                profiles: 2,
                border: "#ffc72f",
                img: "https://static.remove.bg/remove-bg-web/99ab439c6e8e26adfd8c59cee4eb26f0376a9584/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png",
                status: "visualizados",
                date: "22/10/2021 12:10",
                description: "aqui vai uma breve descrição sobre alguma quanlidade do candidato"
            },
            {
                id: 6,
                name: "Alexandre Henrique da Silva Corrêa",
                areas: 1,
                schedule: 1,
                profiles: 0,
                border: "#a39efc",
                img: "https://heloisatolipan.com.br/imagens/2021/01/20210121-imagem.jpg",
                status: "confirmados",
                date: "22/10/2021 10:15",
                description: "aqui vai uma breve descrição sobre alguma quanlidade do candidato"
            },
            {
                id: 7,
                name: "Pedro Pereira",
                border: "#5cbd3a",
                areas: 5,
                schedule: 6,
                profiles: 0,
                img: "http://www.fundosanimais.com/Imagens/imagens-lobos.jpg",
                status: "reagendamentosolicitado",
                date: "22/10/2021 06:25",
                description: "aqui vai uma breve descrição sobre alguma quanlidade do candidato"
            },
            {
                id: 8,
                name: "Maria Tereza",
                areas: 1,
                schedule: 1,
                profiles: 0,
                border: "#a39efc",
                img: "https://viverdeblog.com/wp-content/uploads/2014/02/imagens-para-blog.jpg",
                status: "reagendado",
                date: "22/10/2021 08:42",
                description: "aqui vai uma breve descrição sobre alguma quanlidade do candidato"
            },
            {
                id: 9,
                name: "Marcelo Bombom",
                areas: 3,
                schedule: 2,
                profiles: 0,
                border: "#ff5a59",
                img: "https://www.torredevigilancia.com/wp-content/uploads/2019/10/coringa-55.jpg",
                status: "cancelado",
                date: "22/10/2021 13:29",
                description: "aqui vai uma breve descrição sobre alguma quanlidade do candidato"
            },
            {
                id: 10,
                name: "Valquíria Barbiere",
                areas: 2,
                schedule: 0,
                profiles: 2,
                border: "#ffc72f",
                img: "https://static.remove.bg/remove-bg-web/99ab439c6e8e26adfd8c59cee4eb26f0376a9584/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png",
                status: "visualizados",
                date: "22/10/2021 12:10",
                description: "aqui vai uma breve descrição sobre alguma quanlidade do candidato"
            }
            ,
            {
                id: 11,
                name: "Marcelo Bombom",
                areas: 3,
                schedule: 2,
                profiles: 0,
                border: "#ff5a59",
                img: "https://www.torredevigilancia.com/wp-content/uploads/2019/10/coringa-55.jpg",
                status: "cancelado",
                date: "22/10/2021 13:29",
                description: "aqui vai uma breve descrição sobre alguma quanlidade do candidato"
            },
            {
                id: 12,
                name: "Valquíria Barbiere",
                areas: 2,
                schedule: 0,
                profiles: 2,
                border: "#ffc72f",
                img: "https://static.remove.bg/remove-bg-web/99ab439c6e8e26adfd8c59cee4eb26f0376a9584/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png",
                status: "visualizados",
                date: "22/10/2021 12:10",
                description: "aqui vai uma breve descrição sobre alguma quanlidade do candidato"
            },
            ,
            {
                id: 13,
                name: "Marcelo Bombom",
                areas: 3,
                schedule: 2,
                profiles: 0,
                border: "#ff5a59",
                img: "https://www.torredevigilancia.com/wp-content/uploads/2019/10/coringa-55.jpg",
                status: "cancelado",
                date: "22/10/2021 13:29",
                description: "aqui vai uma breve descrição sobre alguma quanlidade do candidato"
            },
            {
                id: 14,
                name: "Valquíria Barbiere",
                areas: 2,
                schedule: 0,
                profiles: 2,
                border: "#ffc72f",
                img: "https://static.remove.bg/remove-bg-web/99ab439c6e8e26adfd8c59cee4eb26f0376a9584/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png",
                status: "visualizados",
                date: "22/10/2021 12:10",
                description: "aqui vai uma breve descrição sobre alguma quanlidade do candidato"
            }
        ]
    )

    const [searchTerm, setSearchTerm] = useState({type:'', term:''})

    const [resume, setResume] = useState()

    let areas_total = listAreasOccuppation.reduce((total, currentValue) => total = total + currentValue.quantity, 0)
    let total_interviews = menuInterviews.reduce((total, currentValue) => total = total + currentValue.quantity, 0)
    let total_profiles = menuProfile.reduce((total, currentValue) => total = total + currentValue.quantity, 0)
    

    const candidateList = candidatesList.filter((val) =>
    {
        if(searchTerm.type == '')
        {
            return val
        }
        else if(searchTerm.type === 'areas' && val.areas === searchTerm.term)
        {
            return val
        }
        else if(searchTerm.type === 'schedule' && val.schedule === searchTerm.term)
        {
            return val
        }
        else if(searchTerm.type === 'profiles' && val.profiles === searchTerm.term)
        {
            return val
        } 
        else if(searchTerm.type === 'search') 
        {
            return val.name.toLocaleLowerCase().includes(searchTerm.term.toLocaleLowerCase())
        }
    }).map((candidate) =>(
                       
            <CandidateCard 
                key = {candidate.id}
                name= {candidate.name}
                border= {candidate.border} 
                img= {candidate.img}
                status= {candidate.status}
                date= {candidate.date}
                description = {candidate.description}
                onClick = {() => getCandidateResume(candidate)}
            /> 
    ))

    const getCandidateResume = (data) => 
    {
        setResume(data['resume'])
    }


    //array para listagem de candidatos para alteração de agenda
    const schedule_changed = 
    [
        {
            id: 1,
            date: '09/09/2021 10:45',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia, felis vel pretium porta, purus massa convallis leo, quis molestie sem turpis convallis massa.',
            name: 'Valquíria Barbiere Barbosa',
            img: 'https://static.remove.bg/remove-bg-web/99ab439c6e8e26adfd8c59cee4eb26f0376a9584/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png',
            type: 'cancelamento',
            tel: '1935344470',
            whatsapp: '19999999999',
            mail: 'webmaster@webmaster',
            address: '122232323, -122122993939'
        },
        {
            id: 2,
            date: '09/09/2021 10:45',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia, felis vel pretium porta, purus massa convallis leo, quis molestie sem turpis convallis massa.',
            name: 'Marcelo Bombom',
            img: 'https://www.torredevigilancia.com/wp-content/uploads/2019/10/coringa-55.jpg',
            type: 'reagendamento',
            tel: '1935344470',
            whatsapp: '19999999999',
            mail: 'webmaster@webmaster',
            address: '122232323, -122122993939'
        },
        {
            id: 3,
            date: '09/09/2021 10:45',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia, felis vel pretium porta, purus massa convallis leo, quis molestie sem turpis convallis massa.',
            name: 'Maria Tereza',
            img: 'https://viverdeblog.com/wp-content/uploads/2014/02/imagens-para-blog.jpg',
            type: 'cancelamento',
            tel: '1935344470',
            whatsapp: '19999999999',
            mail: 'webmaster@webmaster',
            address: '122232323, -122122993939'
        },
        {
            id: 4,
            date: '09/09/2021 10:45',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia, felis vel pretium porta, purus massa convallis leo, quis molestie sem turpis convallis massa.',
            name: 'Pedro Pereira',
            img: 'http://www.fundosanimais.com/Imagens/imagens-lobos.jpg',
            type: 'reagendamento',
            tel: '1935344470',
            whatsapp: '19999999999',
            mail: 'webmaster@webmaster',
            address: '122232323, -122122993939'
        }
    ]

    const list_schedule_changed = schedule_changed.map((data, index) => (
        <>
            <WarningCard 
                key = {index }
                data = {data} 
            />
        </>
    ))

    
    return(
        
        <div className={style.container}>


            <ModernCalendar/>
            

            <div className={style.manager_schedule_area}>


                <div className={style.manager_resume_area}>

                    <div className={style.main_title}>

                        <h2><span className={style.feature}>| Candidatos</span> disponíveis</h2>
                        <p className={style.description}>Listagem de candidatos disponíveis para entrevista</p>

                    </div>

                    <div className={style.schedule}>

                        <div className={style.entrance}>

                            <div className={style.header}>
                                ENTRADAS
                            </div>

                            <div className={style.sidebar_left_menu}>

                                <div className={style.areas}>

                                    <div className={style.areas_title}><strong>Áreas de atuação</strong></div>

                                    <div className={style.itens}>

                                        {listAreasOccuppation.map((area) => (
                                            <MenuSchedule 
                                                key={area.id} 
                                                label={area.label} 
                                                quantity={area.quantity} 
                                                mr="2px" 
                                                color={area.color} 
                                                onClick={() => setSearchTerm({type:'areas', term: area.id})}
                                            />
                                        ))}

                                    </div>

                                    <div className={style.areas_total}>
                                        <div>Total</div>
                                        <div>{areas_total}</div>
                                    </div>

                                </div>


                                <div className={style.areas}>

                                    <div className={style.areas_title}><strong>Agendamentos</strong></div>

                                    <div className={style.itens}>

                                        {menuInterviews.map((interview) =>(
                                            <MenuSchedule 
                                                key={interview.id} 
                                                bullet="status" 
                                                label={interview.label} 
                                                quantity={interview.quantity} 
                                                mr="2px" 
                                                type={interview.type} 
                                                onClick={() => setSearchTerm({type:'schedule', term: interview.id})}
                                            />
                                        ))}
                                        
                                    </div>

                                    <div className={style.areas_total}>
                                        <div>Total</div>
                                        <div>{total_interviews}</div>
                                    </div>

                                </div>


                                <div className={style.areas}>

                                    <div className={style.areas_title}><strong>Perfis</strong></div>

                                    <div className={style.itens}>

                                        {menuProfile.map((profile) =>(
                                            <MenuSchedule 
                                                key={profile.id} 
                                                bullet="status" 
                                                label={profile.label} 
                                                quantity={profile.quantity} 
                                                mr="2px" 
                                                type={profile.type}
                                                onClick={() => setSearchTerm({type:'profiles', term: profile.id})}
                                            />
                                        ))}  

                                    </div>

                                    <div className={style.areas_total}>
                                        <div>Total</div>
                                        <div>{total_profiles}</div>
                                    </div>

                                </div>

                            </div>

                        </div>


                        <div className={style.candidate_list}>
                            
                            <div className={style.header_candidate_area}>
                                <SearchBar placeholder="Pesquisar candidato" onChange={(event) => setSearchTerm({type:'search', term: event.target.value})}/>
                            </div>

                            <div className={style.candidate}>
                                
                                {candidateList}

                            </div>

                        </div>


                        <div className={style.candidate_resume}>

                            {resume !== undefined &&
                                <ResumeView data={resume}/>
                            }
                            {resume === undefined &&
                                
                                <div className={style.noevent}>
                                    Por favor, escolha um candidato ao lado
                                </div>
                                
                            }
                            
                        </div>

                    </div>

                </div>


                <div className={style.manager_warning_area}>

                    <div className={style.main_title} style={{marginLeft: '25px'}}>
                        <h2><span className={style.feature}>| Alterações</span> de agenda</h2>
                        <p className={style.description}>Alterações de agendamento realizadas pelos candidatos </p>
                    </div>

                    <div className={style.warning_area}>
                                               
                        <div className={style.schedule_changes}>
                              
                            <div className={style.card}> 

                                {list_schedule_changed}
                                                          
                            </div>
                            
                        </div>

                    </div>
                   
                    <div className={style.main_title} style={{marginLeft: '25px', marginTop: '30px'}}>
                        <h2><span className={style.feature}>| Registro</span> de eventos</h2>
                        <p className={style.description}>Registros das alterações realizadas </p>
                    </div>
                    
                    <Log />

                </div>

            </div>

        </div>
    )
}

export default Manager