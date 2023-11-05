import React from "react";
import { HiOutlineBars3 } from "react-icons/hi2";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  platform: string;
  Link: string;
};

const Addlink = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  return (
    <div>
      <div className="flex">
        {" "}
        <HiOutlineBars3 />
        Link 1
      </div>
      <div>Remove</div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
          {/* register your input into the hook by invoking the "register" function */}
          <label className="block text-gray-700 text-sm font-bold mb-2">Platform</label>
          <select {...register("platform")} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
        <option value="github">Github</option>
        <option value="linkedin">Linkedin</option>
        <option value="twitter">Twitter</option>
      </select>

          {/* include validation with required or other standard HTML validation rules */}
          <label className="block text-gray-700 text-sm font-bold mb-2">Link</label>
          <input {...register("Link", { required: true })}  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
          {/* errors will return when field validation fails  */}
          {errors.Link && <span>This field is required</span>}

          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Addlink;
