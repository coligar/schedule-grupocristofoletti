import React, {useState, useEffect} from 'react'
import Style from './scheduleinterview.module.css'

import DateRangeIcon from '@mui/icons-material/DateRange'
import PersonIcon from '@mui/icons-material/Person'

import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import InputAdornment from '@mui/material/InputAdornment'
import Tooltip from '@mui/material/Tooltip'
import Button from '@mui/material/Button'


const ScheduleInterview = (props) => 
{
    const [interviewer, setInterviewer] = useState('')

    const handleInterviewerClick = (event) => 
    {
        setInterviewer(event.target.value);
    }
    
    return(

        <>
            
            <div className={Style.container}>

                <div className={Style.colicon}>

                    <DateRangeIcon fontSize='large' sx={{fontSize:'55px'}}/>

                </div>

                <div className={Style.colform}>
                    
                    <div className={Style.form_lines}>

                        Agendamento de entrevista para<br/>

                        <strong>{props.data.name}</strong> - Área: <strong>{props.data.area_of_interest}</strong>
                        
                    </div>

                    <div className={Style.form_lines}>

                        Entrevistador<br/>

                        <Tooltip title="Escolha o entrevistador" placement="top-start">
                            <TextField 
                                id="Entrevistador" 
                                required
                                fullWidth
                                select
                                //label="Entrevistador" 
                                variant="outlined" 
                                size="small"
                                margin="dense"
                                value= {interviewer}
                                onChange= {handleInterviewerClick}
                                InputProps={{
                                    startAdornment: (
                                    <InputAdornment position="start">
                                        <PersonIcon />
                                    </InputAdornment>
                                    ),
                                    style:{fontSize:14},
                                }}
                                InputLabelProps={{
                                    style:{fontSize:14},
                                }}
                                sx={{marginTop:'5px'}}
                            >
                                <MenuItem value="Elisângela - Administrativo">Elisângela - Administrativo</MenuItem>
                                <MenuItem value="Elisângela - Comercial">Elisângela - Comercial</MenuItem>
                                <MenuItem value="Elisângela - Representante">Elisângela - Representante</MenuItem>
                                <MenuItem value="Elisângela - Produção">Elisângela - Produção</MenuItem>
                                <MenuItem value="Diego - TI">Diego - TI</MenuItem>
                            </TextField>
                        </Tooltip>

                    </div>

                    <div className={Style.form_lines}>

                        Escolher data da entrevista<br/>

                        <Tooltip title="Informe a data da entrevista. Utilizar o formato: dd/mm/aaaa. Exemplo: 01/01/1900" placement="top-start">
                            <TextField 
                                id="interview_date" 
                                required
                                fullWidth
                                //label="Data da entrevista" 
                                variant="outlined" 
                                size="small"
                                margin="dense"
                                placeholder='Escolher data da entrevista'
                                InputProps={{
                                    startAdornment: (
                                    <InputAdornment position="start">
                                        <DateRangeIcon />
                                    </InputAdornment>
                                    ),
                                    style:{fontSize:14},
                                }}
                                InputLabelProps={{
                                    style:{fontSize:14},
                                }}
                                sx={{marginTop:'5px', width:'100%'}}
                            />
                        </Tooltip>

                    </div>

                    <div className={Style.form_lines}>

                        Observação<br/>

                        <Tooltip title="Digite aqui alguma observação" placement="top-start">
                            <TextField
                                id="interview_note"
                                required
                                fullWidth
                                size="small"
                                margin="dense"
                                rows={5}
                                label="Digite alguma observação aqui"
                                placeholder="Descreva aqui alguma nota que você deseja deixar ao candidato"
                                multiline
                                variant="outlined" 
                                InputProps={{
                                    style:{fontSize:14},
                                }}
                                InputLabelProps={{
                                    style:{fontSize:14},
                                }}
                            />
                        </Tooltip>

                    </div>

                </div>

            </div>

            <div className={Style.footer}>

                <Button 
                    variant="outlined"
                    size="small"
                    sx={{marginRight:'5px', color:'#A7A7A7', border:'solid 1px #A7A7A7'}}
                    onClick = {() => props.closeWindow()}
                >
                    cancelar
                </Button> 
                
                <Button
                    variant="outlined"
                    size="small"
                    onClick=
                        {
                            () => 
                            props.dialog({
                                isOpen:true,
                                maintitle: 'Confirmar Agendamento',
                                title: 'Tem certeza que deseja marcar o agendamento?',
                                subTitle: 'Você não será capaz de desfazer esta operação',
                                type: 'confirm',
                                onConfirm: () => {props.callback(1)}
                            })
                        } 
                >
                    agendar entrevista
                </Button>

            </div>

        </>

    )
}

export default ScheduleInterview