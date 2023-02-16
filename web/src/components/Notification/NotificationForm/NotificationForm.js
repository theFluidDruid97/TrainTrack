import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'

import {
  Form,
  FormError,
  FieldError,
  Label,
  NumberField,
  TextField,
  Submit,
} from '@redwoodjs/forms'
import { useQuery } from '@redwoodjs/web'
export const QUERY = gql`
  query FindAirmen {
    airmen {
      id
      email
      rank
      firstName
      middleName
      lastName
      organization
      officeSymbol
      dodId
      roles
      afsc
      supervisorId
    }
  }
`

const NotificationForm = (props) => {
  const { loading, error, data } = useQuery(QUERY)
  const { airman, setAirman } = React.useState('')
  const onSubmit = (data) => {
    props.onSave(data, props?.notification?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <InputLabel id="demo-simple-select-label">Airmen</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={airman}
          label="recipent"
        >
          {data?.airmen?.map((airman) => (
            <MenuItem
              key={airman.id}
              value={airman}
            >{`${airman.rank} ${airman.lastName}, ${airman.firstName}`}</MenuItem>
          ))}
        </Select>

        <Label
          name="airmanId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Airman id
        </Label>

        <NumberField
          name="airmanId"
          defaultValue={props.notification?.airmanId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="airmanId" className="rw-field-error" />

        <Label
          name="message"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Message
        </Label>

        <TextField
          name="message"
          defaultValue={props.notification?.message}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="message" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default NotificationForm
