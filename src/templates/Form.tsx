import React from 'react'
import { Formik, Form, Field, ErrorMessage , useField} from 'formik';
import { useTranslation } from 'next-i18next';

import {AiOutlineClose} from 'react-icons/ai';
import * as Yup from 'yup';
import { SendMail } from '../api/Queries/Post';

type FormCommunicateProps = {
  show?: boolean,
  setShow?: any
}
type FormikValues = {
  name:string, 
  phone: string, 
  feedback: string, 
}

const  FormCommunicate = (props: FormCommunicateProps) => {
  const {show, setShow} = props

    const {t} = useTranslation()
    const MyTextArea = ({label, ...props}: any) => {
        const [field, meta] = useField(props);
        return (
            <>
                <label htmlFor={props.id || props.name}>{label}</label>
                <textarea className="text-area" {...field} {...props} />
                {meta.touched && meta.error ? (
                    <div className="error">{meta.error}</div>
                ) : null}
            </>
        );
      };
      
    const initialValues: FormikValues = {
        name: '',
        phone: '',
        feedback: ''
    }
    const validationSchema = Yup.object().shape({
        phone:  Yup.string().min(12, 'It short').required('Required'),
        name: Yup.string().min(3, 'It short').required('Required'),
        feedback: Yup.string().nullable(),
    })
    const onSubmit = async(values: FormikValues) => {
        const res:any = await SendMail(values)
        if(res.status === 200){
          setShow(false)
        }
    }


  return (
    <div className='w-80 flex flex-col rounded-lg for_communicate bg-white-500 p-5 space-y-4 shadow-2xl z-50'>
        <div className='flex justify-between items center gap-6 pb-4'>
            <h4 className='mx-auto font-bold text-lg'>{t('form_head')}</h4>
            <button className='hover:bg-slate rounded-full z-50 p-2' onClick={() => setShow(!show)} >
                <AiOutlineClose />
            </button>
        </div>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={() => {}}>
                {(props) => (
                    <Form className='flex flex-col gap-4'>
                        <div>
                            <h4 className='mb-2'>{t('phone')}</h4>
                            <Field
                                label='phone'
                                type='text'
                                name='phone'
                                value={props.values.phone}
                                onChange={props.handleChange}
                                className='w-full p-3 border border-gray rounded-lg focus:outline-none focus:ring-2 focus: ring-green-600 focus:ring-inset'
                            /> 
                            <ErrorMessage name='phone' />
                        </div>
                        <div>
                        <h4 className='mb-2'>{t('name')}</h4>
                            <Field
                                label='name'
                                type='text'
                                name='name' 
                                value={props.values.name}
                                onChange={props.handleChange}
                                className='w-full p-3 border border-gray rounded-lg focus:outline-none focus:ring-2 focus: ring-green-600 focus:ring-inset'
                                />
                            <ErrorMessage name='name' />
                        </div>
                        <div >
                            <h4 className='mb-2'>{t('faq')}</h4>
                            <MyTextArea
                                name="feedback"
                                rows="3"
                                className="w-full resize rounded-md border border-gray p-3 focus:outline-none focus:ring-2 focus: ring-green-600 focus:ring-inset" 
                            />
                            <ErrorMessage name='feedback' />
                        </div>
                        <button onClick={() => onSubmit(props.values)} type='submit' className='bg-green-600 text-white-500 p-2 rounded'>{t('confirm')}</button>
                  </Form>
                )}
            </Formik>
    </div>
  )
}

export {FormCommunicate}