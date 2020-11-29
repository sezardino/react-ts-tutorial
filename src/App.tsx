import React, {Component} from 'react';

type Position = {
  id: string,
  value: string,
  title: string,
}

const POSITIONS: Array<Position> = [
  {
    id: 'fd',
    value: 'Front-end Developer',
    title: 'Front-end Developer',
  },
  {
    id: 'bd',
    value: 'Back-end Developer',
    title: 'Back-end Developer',
  }
]

type FormState = {
  inputText: string,
    textareaText: string,
    selectText: string,
    showData: {
      name: string,
      text: string,
      position: string,
    }
}

class Form extends Component <{}, FormState> {
  state ={
    inputText: '',
    textareaText: '',
    selectText: '',
    showData: {
      name: '',
      text: '',
      position: '',
    }
  }

  handleInputChange = (evt: React.ChangeEvent<HTMLInputElement>):void => {
    const { target: { value } } = evt
    this.setState({
      inputText: value,
    })
  }

  handleTextareaChange = (evt: React.ChangeEvent<HTMLTextAreaElement>):void => {
    const { target: { value } } = evt
    this.setState({
      textareaText: value,
    })
  }

  handleSelectChange = (evt: React.ChangeEvent<HTMLSelectElement>):void => {
    const { target: { value } } = evt
    this.setState({
      selectText: value,
    })
  }

  handleShow = (evt: React.MouseEvent<HTMLButtonElement>):void => {
    evt.preventDefault();
    const { inputText, textareaText, selectText } = this.state;
    this.setState({
      inputText: '',
      textareaText: '',
      selectText: '',
      showData: {
        name: inputText,
        text: textareaText,
        position: selectText,
      }
    })
  }

  private selectRef = React.createRef<HTMLSelectElement>()

  render() {
    const { inputText, textareaText, selectText, showData } = this.state;
    const { name, text, position } = showData;

    return (
      <>
        <form>
          <label>
            Name:
            <input type="text" name="name" value={inputText} onChange={this.handleInputChange} />
          </label>
          <br />
          <label htmlFor="text">Text:</label>
          <textarea id="text" value={textareaText} onChange={this.handleTextareaChange} />
          <select ref={this.selectRef} value={selectText} onChange={this.handleSelectChange}>
            {POSITIONS.map(({ id, value, title }) => (
              <option key={id} value={value}>{title}</option>
            ))}
          </select>
        <br />
        <button onClick={this.handleShow}>Show</button>
        </form>
        <h2>{name}</h2>
        <h3>{text}</h3>
        <h3>{position}</h3>
      </>
    );
  }
}

export default Form;
