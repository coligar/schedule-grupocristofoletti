import {useState} from 'react'
import style from "./ResumeView.module.css"

import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'

import Popup from "../../modalbox/popup"
import FlashMessage from "../../flashmessage"
import ConfirmaDialog from "../../notifications/confirmdialog"

import StatusResume from './status'
import Tag from './tag/tag'

import DoInterview from "../../actions/dointerview"
import GoMap from "../../actions/gomaps"
import DoCall from "../../actions/docall"
import CallWhatsapp from "../../actions/callwhatsapp"
import SendMail from "../../actions/sendmail"
import PrintContent from "../../actions/printcontent"
import DoComment from "../../actions/docomment"
import Comments from '../../forms/resumecomments'
import Avatar from "../../avatar"

import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import CommentIcon from '@mui/icons-material/Comment'
import ContratadoIcon from '@mui/icons-material/StarRate';

const Resumeview = (props) => 
{
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => 
    {
        setAnchorEl(event.currentTarget);
    }

    const handleClose = () => 
    {
        setAnchorEl(null)
    }

    const [notify, setNotify] = useState({isOpen: false, message:'', type:''})
    const [confirmDialog, setConfirmDialog] = useState({isOpen: false, maintitle:'', title: '', subTitle: '', type: ''})
    const [width, setWidth] = useState('md')

    const [openPopup, setOpenPopup] = useState(false)
    const [content, setContent] = useState()
    const [popuptitle, setPopupTitle] = useState()

    const closePopUp = () =>
    {
        setOpenPopup(false)
    }

    const doAnything = (cod) => 
    {
        setConfirmDialog({
            ...confirmDialog,
            isOpen: false,
        })

        if(cod === 1)
        {
           setNotify({
               isOpen: true,
               message: 'Cancelamento realizado com sucesso',
               type: 'success'
           })
        }
        else
        {
            setNotify(
            {
                isOpen: true,
                message: 'Erro ao cancelar reagendamento',
                type: 'error'
            })
        }

        closePopUp()
    }

    const openPopupWithContent = (content, title, width='md') =>
    {
        setWidth(width)
        setOpenPopup(true)
        setPopupTitle(title)
        setContent(content)
        setAnchorEl(null)
    }

    return(

        <div id="print">
            
            <div className={style.candidate_resume_header}>

                <div className={style.candidate_resume_title}>

                    <h2>Análise de currículo</h2>

                    <div style={{display: 'flex', flexDirection: 'column'}}>

                        <div>

                            <Button
                                id="basic-button"
                                aria-controls="basic-menu"
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                                sx={{textTransform: 'lowercase'}}
                            >
                                <ExpandMoreIcon /> opções
                            </Button>

                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                'aria-labelledby': 'basic-button',
                                }}
                                sx={{fontSize:"12px"}}
                                
                            >
                                
                                <MenuItem 
                                    onClick=
                                    { 
                                        () => openPopupWithContent(<Comments data={props.data} closeWindow={closePopUp} dialog={setConfirmDialog} callback={doAnything}/>, 'Comentários') 
                                    } 
                                    sx={{fontSize:"12px"}} 
                                    divider
                                >
                                    
                                    <CommentIcon sx={{fontSize:"16px", marginRight:"3px", color:"#c83f15"}} /> 
                                    Adicionar/ver comentários

                                </MenuItem>

                                <MenuItem onClick={handleClose} sx={{fontSize:"12px"}} divider><ContratadoIcon sx={{fontSize:"16px", marginRight:"3px", color:"#0176e7"}} /> Candidato contratado</MenuItem>

                            </Menu>
                            
                        </div>

                    </div>

                </div>

                <div className={style.candidate_resume_data}>

                    <div className={style.candidate_resume_avatar}>
                        <Avatar direction="row" name={props.data.name} width="52" avatar={props.data.avatar}/>
                    </div>

                    <div className={style.candidate_resume_name_area}>

                        <div className={style.candidate_resume_name}>
                            {props.data.name}
                        </div>

                        <div className={style.candidate_resume_area}>

                            <div className={style.candidate_resume_area_status}>
                                <Tag area={props.data.area_of_interest}/>
                                <StatusResume type={props.data.status_resume} time={props.data.date_status_resume}/>
                            </div>

                            <div className={style.candidate_resume_area_actions}>
                                <DoInterview 
                                    openWindow={openPopupWithContent} 
                                    closeWindow={closePopUp} 
                                    data={props.data} 
                                    dialog={setConfirmDialog} 
                                    callback={doAnything}
                                />
                                <GoMap openWindow = {openPopupWithContent}/>
                                <DoCall tel={props.data.telephone}/>
                                <CallWhatsapp tel={props.data.telephone}/>
                                <SendMail mail={props.data.email}/>
                                <PrintContent data={props.data} />
                                <DoComment 
                                    openWindow = {openPopupWithContent}
                                    closeWindow={closePopUp} 
                                    data={props.data} 
                                    dialog={setConfirmDialog} 
                                    callback={doAnything}
                                />
                            </div>

                        </div>

                    </div>
                    
                </div>

            </div>

            <div className={style.candidate_resume_content}>

                <div className={style.candidate_resume_body}>

                    <div className={style.candidate_resume_body_line}>
                        <div className={style.candidate_resume_body_line_title}>
                            Dados pessoais
                        </div>
                    </div>

                    <div className={style.candidate_resume_body_line}>
                        <div className={style.candidate_resume_body_line_itens}>
                            <strong>Data de nascimento:</strong> {props.data.birthdate}
                        </div>

                        <div className={style.candidate_resume_body_line_itens}>
                            <strong>CPF:</strong> {props.data.cpf}
                        </div>       
                    </div>

                    <div className={style.candidate_resume_body_line}>
                        <div className={style.candidate_resume_body_line_itens}>
                            <strong>Telefone:</strong> {props.data.telephone}
                        </div>

                        <div className={style.candidate_resume_body_line_itens}>
                            <strong>E-mail:</strong> {props.data.email}
                        </div>       
                    </div>

                    <div className={style.candidate_resume_body_line}>                                       
                        <div className={style.candidate_resume_body_line_itens}>
                            <strong>Sexo:</strong> {props.data.gender}
                        </div> 
                        <div className={style.candidate_resume_body_line_itens}>
                            <strong>CEP:</strong> {props.data.zipcode}
                        </div>
                    </div>

                    <div className={style.candidate_resume_body_line}>
                        <div className={style.candidate_resume_body_line_itens}>
                            <strong>Endereço:</strong> {props.data.address}
                        </div>

                        <div className={style.candidate_resume_body_line_itens}>
                            <strong>Bairro:</strong> {props.data.district}
                        </div>       
                    </div>

                    <div className={style.candidate_resume_body_line}>
                        <div className={style.candidate_resume_body_line_itens}>
                            <strong>Cidade:</strong> {props.data.city}
                        </div>

                        <div className={style.candidate_resume_body_line_itens}>
                            <strong>UF:</strong> {props.data.uf}
                        </div>       
                    </div>

                    <div className={style.candidate_resume_body_line}>

                        <div className={style.candidate_resume_body_line_itens}>
                            <strong>Possui deficiência:</strong> {props.data.has_disability}
                        </div>

                        <div className={style.candidate_resume_body_line_itens}>
                            <strong>Possui veículo próprio:</strong> {props.data.own_vehicle}
                        </div>

                    </div>
                    
                    <div className={style.candidate_resume_body_line} style={{flexDirection:"column"}}>
                        
                        <div className={style.candidate_resume_body_line_title} style={{marginTop: "40px"}}>
                            Breve resumo
                        </div>

                        <div className={style.candidate_resume_body_line} style={{flexDirection:"column"}}>
                            {props.data.summary}
                        </div>

                    </div>
                   
                    <div className={style.candidate_resume_body_line}>
                        <div className={style.candidate_resume_body_line_title} style={{marginTop: "40px"}}>
                            Área de interesse e formação
                        </div>
                    </div>

                    <div className={style.candidate_resume_body_line}>

                        <div className={style.candidate_resume_body_line_itens}>
                            <strong>Área de interesse:</strong> {props.data.area_of_interest}
                        </div>

                        <div className={style.candidate_resume_body_line_itens}>
                            <strong>Formação:</strong> {props.data.academic_education}
                        </div>

                    </div>

                    <div className={style.candidate_resume_body_line}>
                        <div className={style.candidate_resume_body_line_title} style={{marginTop: "40px"}}>
                            Experiência Profissional
                        </div>
                    </div>

                    <div className={style.candidate_resume_body_line}>

                        <div className={style.candidate_resume_body_line_itens} style={{width: "100%"}}>
                            <strong>Nome da última empresa:</strong> {props.data.last_company}
                        </div>

                    </div>

                    <div className={style.candidate_resume_body_line}>

                        <div className={style.candidate_resume_body_line_itens}>
                            <strong>Data de admissão:</strong> {props.data.last_adminission_date}
                        </div>

                        <div className={style.candidate_resume_body_line_itens}>
                            <strong>Data de demissão:</strong> {props.data.last_resignation_date}
                        </div>
                        
                    </div>

                    <div className={style.candidate_resume_body_line} style={{flexDirection:"column"}}>


                        <strong><p>Atividades realizadas:</p></strong>

                        {props.data.last_performed_activities}

                    </div>
                    
                    <div style={{marginTop:"25px", marginBottom:"25px", width: "100%", borderBottom: "1px solid #eee"}}></div>

                    <div className={style.candidate_resume_body_line}>

                        <div className={style.candidate_resume_body_line_itens} style={{width: "100%"}}>
                            <strong>Nome da penúltima empresa:</strong> {props.data.penultimate_company}
                        </div>

                    </div>

                    <div className={style.candidate_resume_body_line}>

                        <div className={style.candidate_resume_body_line_itens}>
                            <strong>Data de admissão:</strong> {props.data.penultimate_adminission_date}
                        </div>

                        <div className={style.candidate_resume_body_line_itens}>
                            <strong>Data de demissão:</strong> {props.data.penultimate_resignation_date}
                        </div>
                        
                    </div>

                    <div className={style.candidate_resume_body_line} style={{flexDirection:"column"}}>

                        <strong><p>Atividades realizadas:</p></strong>
                        {props.data.penultimate_performed_activities}

                    </div>

                </div>

                <div className={style.candidate_resume_footer}>

                    <div className={style.candidate_resume_footer_itens}>                      
                        <DoInterview 
                            openWindow = {openPopupWithContent} 
                            closeWindow={closePopUp} 
                            data={props.data} 
                            dialog={setConfirmDialog} 
                            callback={doAnything}
                        />
                        <GoMap openWindow = {openPopupWithContent}/>
                        <DoCall tel={props.data.telephone}/>
                        <CallWhatsapp tel={props.data.telephone}/>
                        <SendMail mail={props.data.email}/>
                        <PrintContent data={props.data}/>
                        <DoComment 
                            openWindow = {openPopupWithContent}
                            closeWindow={closePopUp} 
                            data={props.data} 
                            dialog={setConfirmDialog} 
                            callback={doAnything}
                        />
                    </div>

                    <div className={style.candidate_resume_footer_itens} style={{textAlign:"right"}}>
                        Visto em: 27/08/2021 | Expira em: 01/09/2021 - 09:00
                    </div>

                </div>

            </div>
            
            <Popup 
                openPopup = {openPopup}
                setOpenPopup = {setOpenPopup}
                title = {popuptitle}
                maxwidth={width}
            >

                {content}

            </Popup>

            <FlashMessage
                notify = {notify}
                setNotify = {setNotify}
            />

            <ConfirmaDialog
                confirmDialog = {confirmDialog}
                setConfirmDialog = {setConfirmDialog}
            />
            
        </div>
    )
}


export default Resumeview