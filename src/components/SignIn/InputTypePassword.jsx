import {React, useState} from 'react'
import { Controller, useFormContext } from 'react-hook-form';
import eyeicon from "..//..//assets/eyeiconforsignin.svg";
import hideeyeicon from "..//..//assets/hideeyeicon.png";
export default function InputTypePassword() {
    const [showPassword, setShowPassword] = useState(false);
    const methods = useFormContext();

  return (
    <>
      <div className="input">
          <div className="label">
            <label htmlFor="">Password</label>
          </div>
          <div className="eye">
            <Controller 
              name="password"
              control={methods.control}
              rules={{
                required: "This field is required",
                minLength:{ value: 8, message: "Password must be at least 8 characters" }
              }}
              render={({ field }) => 
                (<input {...field}  type={showPassword ? "text" : "password"}  className="password" placeholder="********"/>)
              }
            /> 
            <img src={showPassword ? eyeicon : hideeyeicon} alt="eyeicon" onClick={(e) => setShowPassword(!showPassword)}/>
          </div>
      </div>
      {methods.formState.errors?.password && <p className='error-text'>{ methods.formState.errors?.password?.message }</p>}
    </>
  )
}
