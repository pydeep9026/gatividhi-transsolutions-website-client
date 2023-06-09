import React, { useState } from "react";
import {
  CtaContainer,
  CtaWrap,
  CtaSubHeader,
  CtaHeader,
  Form,
  FormInputWrap,
  EmailInput,
  EmailError,
  FormButtonWrap,
} from "./CtaSectionStyles";
import { validEmail } from "../../helpers/Config";
import Button from "../Button/Button";

const CtaSection = ({ ctaData, ctaFormData }) => {
  const [input, setInput] = useState({});
  const [error, setError] = useState(true);
  const [email, setEmail] = useState("");

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput({ [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const emailValid = validEmail.test(
        input.email
    );

    if (!emailValid) {
      setError(false);
    } else {
      setError(true);
      setEmail(input);
      document.getElementById("email").value = " ";
    }
  };

  return (
    <>
      <CtaContainer>
        <CtaWrap>
          <CtaSubHeader>{ctaData.subHeading}</CtaSubHeader>
          <CtaHeader>{ctaData.heading}</CtaHeader>
          <Form>
            <FormInputWrap>
              <EmailInput
                type="email"
                name="email"
                id="email"
                placeholder={ctaFormData.placeholder}
                onChange={handleInputChange}
                error={error}
                email={email}
              />
              <EmailError error={error}>{ctaFormData.errorMessage}</EmailError>
            </FormInputWrap>
            <FormButtonWrap>
              <Button
                primary
                hoverPrimary
                blocked
                type="submit"
                event={handleFormSubmit}
              >
                {ctaFormData.buttonText}
              </Button>
            </FormButtonWrap>
          </Form>
        </CtaWrap>
      </CtaContainer>
    </>
  );
};

export default CtaSection;
