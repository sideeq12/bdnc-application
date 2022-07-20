import type { NextPage } from 'next'
import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Form , FormData, ListData} from './styled-components/styled'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const Home: NextPage = () => {
  const [startDate, setDate] = useState(new Date())
  const today = new Date()

  const selectDateHandler = (d: any) => {
    setDate(d)
  }


  return (
    <div className={styles.container}>
   <Form>
    <FormData>
      <label htmlFor="fullname">Your full givem name : </label>
      <input type="text" name='fullname' id='fullname'/>
    </FormData>
    <ListData>
    <FormData>
      <label htmlFor="school">Date of birth</label>
      <DatePicker
        dateFormat="yyyy/MM/dd"
        selected={startDate}
        onChange={selectDateHandler} 
        minDate={today}
        todayButton={"Today"}/>
 
    </FormData>
    <FormData>
      <label htmlFor="school">Country of birth or citizenship:</label>
      <input type="text" name='country' id='country'/>
    </FormData>
    </ListData>
    <FormData>
      <label htmlFor="school">What school do you plan to study? </label>
      <input type="text" name='school' id='school'/>
    </FormData>
    <FormData>
      <label htmlFor="intent">Please take a moment to describe your intended area of study :</label>
      <textarea id='intent' placeholder='Enter details here'/>
    </FormData>
   </Form>
    </div>
  )
}

export default Home
