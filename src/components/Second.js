import React, { Component } from 'react';
import {Stats} from "./Stats";
import TextField from '@material-ui/core/TextField';

export default class Second extends Component {

    
    handleChange = name => event => {
      this.setState({
        [name]: event.target.value,
      });
    };
    
  render() {
      return (
          <div>
              <form className="config-selector" noValidate autoComplete="off">
      <h2>Enter configuration variables</h2>
      <TextField label="MySQL hostname" value={this.props.form.mysql_ip} placeholder="localhost" required id="mysql_ip" onChange={(e)=>this.props.update('mysql_ip',e)} /><br/>
      <TextField label="MySQL port" value={this.props.form.mysql_port} placeholder="3306" required id="mysql_port" onChange={(e)=>this.props.update('mysql_port',e)} /><br/>
      <TextField label="MySQL user" value={this.props.form.mysql_user} placeholder="" required id="mysql_user" onChange={(e)=>this.props.update('mysql_user',e)} /><br/>
      <TextField label="MySQL password" value={this.props.form.mysql_pass} placeholder="" required id="mysql_pass" onChange={(e)=>this.props.update('mysql_pass',e)} /><br/>
      <TextField label="MySQL database" value={this.props.form.mysql_database} placeholder="" required id="mysql_database" onChange={(e)=>this.props.update('mysql_database',e)} /><br/>
      <TextField label="Node.js port" value={this.props.form.node_port} placeholder="3000" required id="node_port" onChange={(e)=>this.props.update('node_port',e)} /><br/>

      <TextField
        id="mysql_engine"
        select
        value={this.props.form.mysql_engine}
        onChange={(e)=>this.props.update('mysql_engine',e)}
        SelectProps={{
          native: true,
        }}
        helperText="MySQL engine"
        margin="normal"
      >
      <option key="innodb" value="innodb">
            InnoDB
      </option>
      <option key="ndb" value="ndb">
            NDB
      </option>
      </TextField>
      <br/>
      <TextField
        id="node_cerftificates"
        select
        value={this.props.form.node_cerftificates}
        onChange={(e)=>this.props.update('node_cerftificates',e)}
        SelectProps={{
          native: true,
        }}
        helperText="Certificates"
        margin="normal"
      >
      <option key="true" value="true">
            Yes
      </option>
      <option key="false" value="false">
            No
      </option>
      </TextField>




      
    </form>
              <Stats {...this.props} />
          </div>
      );
  }
}