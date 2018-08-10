import React from 'react';

class ConfigForm extends React.Component {
  render() {
    // Any where else
    return (
      <form className="config-selector">
        <h2>Enter configuration variables</h2>
        <input type="text" required placeholder="mysql_ip" /><br/>
        <input type="text" required placeholder="mysql_port" /><br/>
        <input type="text" required placeholder="mysql_user" /><br/>
        <input type="text" required placeholder="mysql_pass" /><br/>
        <input type="text" required placeholder="mysql_database" /><br/>
        <input type="text" required placeholder="mysql_engine" /><br/>
        <input type="text" required placeholder="node_cerftificates" /><br/>
        <input type="text" required placeholder="node_port" /><br/>
        <button type="submit">Create config →</button>
      </form>
    )
  }
}

export default ConfigForm;
