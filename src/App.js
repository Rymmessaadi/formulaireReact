import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useForm, Controller } from 'react-hook-form';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ErrorMessage } from '@hookform/error-message';

function App() {
  const { register, handleSubmit, formState: { errors }, control, trigger } = useForm({ mode: 'onTouched' })
  const onSubmit = data => {
    console.log(data);// recupérer la data lorsque on click sur le bouton 
  }

  return (

    <form onSubmit={handleSubmit(onSubmit)} style={{ width: 448, margin_left: 'auto', margin_right: 'auto', top: 12 }}>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">User Name</label>
        <input type="text" className="form-control" id="exampleInputUser2" name="UserName" {...register("UserName", { required: "This is required." })} />
        <ErrorMessage errors={errors} name="UserName" />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email"{...register("email", { required: "This is required." })} />

        <ErrorMessage errors={errors} name="email" />

      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
        <input type="password" className="form-control" id="exampleInputPassword1" name="password" {...register("password", { required: "This is required." })} />
        <ErrorMessage errors={errors} name="password" />
      </div>
      <div className="mb-3">
        <Controller
          control={control}
          name='date-input'
          render={({ field }) => (
            <DatePicker
              placeholderText='Select date'
              onChange={(date) => field.onChange(date)}
              selected={field.value}
            />
          )}
        />
      </div>
      <div className="mb-3">
        <select className="form-select" aria-label="Default select example" name="ville" {...register("ville")}>
          <option selected>Ville</option>
          <option value="Sousse">Sousse</option>
          <option value="Tunis">Tunis</option>
          <option value="Monastir">Monastir</option>
        </select>
      </div>

      <button type="submit" className="btn btn-primary" onClick={async () => {
        const result = await trigger("password");
      }}> Submit</button>

    </form >



  );
}

export default App;
