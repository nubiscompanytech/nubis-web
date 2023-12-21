import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import useFormControl from "hooks/useFormControl";
import { Button } from "antd";
import Link from "next/link";

type FormFields = {
  fullname: string;
  email: string;
  phone: string;
  title: string;
  message: string;
};

function Support() {
  const socialMediaLink =
    "https://instagram.com/nubis_logistics?igshid=YTQwZjQ0NmI0OA==";

  const [modalVisible, setModalVisible] = React.useState(false);

  const {
    FormControl,
    formState: { errors },
    handleSubmit,
    reset,
    watch,
  } = useFormControl<FormFields>({});

  const formData = watch();

  const onSubmit = (data: FormFields) => {
    console.log(data);
    reset();
  };

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const phoneRegex = /^(\+?234|0)[789]\d{9}$/;

  return (
    <div className={`pb-10`}>
      <form
        className="formContainer max-w-4xl mx-auto mt-5 shadow-xl p-10 bg-white"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h3 className="font-bold text-3xl mb-4">Send us a message</h3>
        <div className="form flex flex-col gap-4">
          {FormControl({ name: "fullName" })}
          {FormControl({ name: "email" })}
          {FormControl({ name: "title" })}
          {FormControl({
            name: "message",
            type: "textarea",
            label: "Message",
          })}

          <Button size="large" type="primary" className="">
            Submit
          </Button>
        </div>

        {/* <div className="flex items-center justify-between mt-10">
          <div className="wrap">
            <div className="font-bold text-lg">
              Have Any Questions <br />
            </div>
            <div className="flex items-center gap-2">
              <FontAwesomeIcon fontSize={18} icon={faPhone} className="call" />
              <p className="SubText">+234 906 416 3807</p>
            </div>
          </div>
          <div className="">
            <Link href={socialMediaLink}>
              <FontAwesomeIcon icon={faInstagram} className="" />
            </Link>
          </div>
        </div> */}
      </form>
    </div>
  );
}

export default Support;
