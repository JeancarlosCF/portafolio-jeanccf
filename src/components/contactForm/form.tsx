import { Button, TextField } from "@mui/material"

const Form = () => {
  return (
    <div className="flex flex-col gap-8 w-full">
        <TextField color="primary" label="Nombre" />
        <TextField color="primary" label="Email" />
        <TextField color="primary" label="Sitio web (Si existe)" />
        <TextField color="primary" label="¿Cómo puedo ayudar?" multiline minRows={3} />
        <div className="flex">
            <Button variant="contained" size="large">Envíar</Button>
        </div>
    </div>
  )
}

export default Form