import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'

export default function InputTypeEmail() {
  const methods = useFormContext();
  return (
    <div className="input">
        <div className="label">
        <label htmlFor="">Email:</label>
        </div>
        <Controller 
          name="text"
          control={methods.control}
          rules={{
            required: "This field is required",
            validate: (value) => {
              return !value.includes("@") && `Please include an '@' in the email address, ${value} is misssing an '@'. `
            }
          }}
          render={({field}) =>(
            <input {...field} type="text"  className="text" placeholder="someone@example.com"/>
          )}
        />
        { methods.formState.errors?.text && <p className='error-text'> {methods.formState.errors?.text?.message} </p> }
    </div>
  )
}
