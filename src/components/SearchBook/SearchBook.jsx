import { Field, Form, Formik } from "formik";

const SearchBook = ({ onChangeQuery }) => {
  const initialValues = {
    query: "",
  };

  const handleSubmit = (values) => {
    // console.log(values);
    onChangeQuery(values.query);
  };

  return (
    <div>
      <p>SearchBook</p>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <Field name="query" placeholder="enter name" />
          <button type="submit">Search</button>
        </Form>
      </Formik>
    </div>
  );
};

export default SearchBook;
