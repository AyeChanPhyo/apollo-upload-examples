import {Component} from 'react'
import {graphql, gql} from 'react-apollo'

class MultiUploader extends Component {
  handleChange = ({target}) => {
    if (target.validity.valid) {
      this.props
        .mutate({
          variables: {
            files: target.files
          }
        })
        .then(({data}) => console.log('Mutation response:', data))
    }
  }

  render () {
    return <input type='file' accept={'image/jpeg,image/png'} multiple required onChange={this.handleChange} />
  }
}

export default graphql(gql`
  mutation multiUpload ($files: [Upload!]!) {
    multiUpload (files: $files) {
      name
      type
      size
      path
    }
  }
`)(MultiUploader)
