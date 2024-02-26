import { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";

import { getExtension } from "../utils";
import { AddPropertyForm, Property } from "../types";
import { postProperty } from "../services/properties";

import Modal from "../uiComponents/modal";
import Input from "../uiComponents/input";
import ImageInput from "../uiComponents/imageInput";

import "./addPropertyModal.css";

interface AddPropertyModalProps {
  onClose: () => void;
  onFormSubmitted: (properties: Property[]) => void;
}

const AddPropertySchema: Yup.Schema<AddPropertyForm> = Yup.object().shape({
  address: Yup.string()
    .strict()
    .max(100, "Maximum length 100")
    .matches(/^\d*[\.a-zA-Z0-9, ]*$/i, "Invalid characters")
    .required("Address required"),
  price: Yup.number()
    .min(1000, "Must be more than 1000")
    .max(1000000000, "Must be less than 1000000000")
    .required("Price required"),
  image: Yup.mixed<File>()
    .test({
      message: "Please provide a supported file type, png, jpeg or svg",
      test: (file) => {
        const isValid = ["png", "jpeg", "svg"].includes(
          getExtension(file?.name)
        );

        return isValid;
      },
    })
    .test({
      message: `File can't exceed 1MB`,
      test: (file) => {
        const isValid = file?.size ? file?.size < 1000000 : false;
        return isValid;
      },
    })
    .required("Image is required"),
});

const AddPropertyModal = ({
  onClose,
  onFormSubmitted,
}: AddPropertyModalProps) => {
  const [errorMessage, setErrorMessage] = useState<string>("");

  return (
    <Modal onClose={() => onClose()}>
      <h2>Add Property Form</h2>
      <Formik
        initialValues={{ address: "", price: 0, image: undefined }}
        validationSchema={AddPropertySchema}
        onSubmit={async (values: AddPropertyForm, { setSubmitting }) => {
          setSubmitting(true);

          postProperty(values)
            .then((res) => {
              onFormSubmitted(res.data);
            })
            .catch((e) => {
              console.log(e);
              setErrorMessage("There was a problem submitting the form");
            });

          setSubmitting(false);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          setFieldValue,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form className="form-wrapper" onSubmit={handleSubmit}>
            <Input
              label="Address"
              inputName="address"
              handleChange={handleChange}
              handleBlur={handleBlur}
              value={values.address}
              placeholder="Eg. 1 Archway Road"
              errorMsg={errors.address && touched.address ? errors.address : ""}
            />
            <Input
              label="Price"
              inputName="price"
              inputType="number"
              handleChange={handleChange}
              handleBlur={handleBlur}
              value={values.price}
              placeholder="Eg. 500 000"
              errorMsg={errors.price && touched.price ? errors.price : ""}
            />
            <ImageInput
              inputName="image"
              errorMsg={errors.image && touched.image ? errors.image : ""}
              handleChange={(file) => setFieldValue("image", file)}
            />
            {errorMessage && <p>{errorMessage}</p>}
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      </Formik>
    </Modal>
  );
};

export default AddPropertyModal;
