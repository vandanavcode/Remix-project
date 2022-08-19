import React from 'react'
import Form from 'react-bootstrap/Form'

interface Props {
  url: string
  setUrl: (url: string) => void,
  environment: 'remote' | 'local'
}

function LocalUrlInput({ url, setUrl, environment }: Props) {

  if (environment === 'remote') {
    return <></>
  }

  function updateUrl(event: React.FocusEvent<HTMLInputElement>) {
    setUrl(event.target.value)
  }

  return (
  <Form id="local-url">
    <Form.Group controlId="localUrl">
      <Form.Label>Local Compiler Url</Form.Label>
      <Form.Control onBlur={updateUrl}
        defaultValue={url}
        type="email"
        placeholder="eg http://localhost:8000/compile" />
      <Form.Text className="text-muted">
      </Form.Text>
    </Form.Group>
  </Form>
  )
}

export default LocalUrlInput;
