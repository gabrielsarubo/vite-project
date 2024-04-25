import { TextInput, Button } from "../../components"

import style from './FormCreateTask.module.css'

const FormCreateTask = () => {
  return (
    <form className={style.FormCreateTask}>
      <TextInput />
      <Button text="+" />
    </form>
  )
}

export { FormCreateTask }
