import { Field, Form, Formik } from "formik";
import React from "react";
import css from "./SearchBar.module.css";

const SearchBar = ({ setQuery }) => {
  // return (
  //   <div>
  //     <form>
  //       <input
  //         type="text"
  //         autoComplete="off"
  //         autoFocus
  //         placeholder="Search images and photos"
  //       />

  //       <button type="submit" onSubmit={onSubmit}>
  //         Search
  //       </button>
  //     </form>
  //   </div>
  // );

  const initialValue = {
    query: "",
  };

  const handleSubmit = (values) => {
    setQuery(values.query);
  };

  return (
    <div>
      <Formik initialValues={initialValue} onSubmit={handleSubmit}>
        <Form className={css.form}>
          <Field
            className={css.input}
            name="query"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button className={css.btn} type="submit">
            Submit
            {/* <span className={css.span}>Search</span> */}
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default SearchBar;
