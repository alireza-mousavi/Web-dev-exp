var GreeterMessage = React.createClass({
  render: function () {
    var name = this.props.name;
    var message = this.props.message;

    return (
      <div>
        <h1>Hello {name}!</h1>
        <p>{message}</p>
      </div>
    )
  },
});

var GreeterForm = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();

    var name = this.refs.name.value;
    var message = this.refs.LastName.value;
    var updates = {};

    if (name.length > 0 ) {
      this.refs.name.value = "";
      updates.name = name;
    }
    if ( message.length > 0) {
      this.refs.LastName.value ='';
      updates.message = message;
    }

    this.props.onNewData(updates);
  },
  render: function () {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <div>
            First Name:
            <input type="text" ref="name" placeholder='First Name'/>
          </div>
          <div>
            Last Name:
            <input type="text" ref="LastName" placeholder='Last Name'/>
          </div>
          <div>
            Email Address:
            <input type="text" ref="EmailAdd" placeholder='Email Address'/>
          </div>
          <div>
            Postcode:
            <input type="text" ref="Postcode" placeholder='Postcode'/>
          </div>
          <div>
            <button>Submit</button>
          </div>
        </form>
      </div>
    )
  },
});



var Greeter = React.createClass({
  getDefaultProps: function () {
    return {
      name: 'Alireza',
      message: 'This is the default message'
    };
  },
  getInitialState: function () {
    return {
      name: this.props.name,
      message: this.props.message
    }
  },
  handleNewData: function (updates) {
    this.setState(updates);
  },
  render: function () {
    //Getting the values passed from the component, if the values are null, the default values of these attributes
    //are used from the getDefaultProps function above.
    var name = this.state.name;
    var message = this.state.message;
    return (
      <div>
        <GreeterMessage name={name} message={message}/>
        <GreeterForm onNewData={this.handleNewData}/>
      </div>
    );
    }
});

var firstName = "Alireza";
// firstName can be used in the greeter component as follows:
//<Greeter name={firstName}/>
ReactDOM.render(
  <Greeter/>,
  document.getElementById('app')
);
