function SearchForm(props) {
    return (
      <form className="search">
        <div className="form-group">
            <div className="input-group mb-3">
                <input value={props.name} onChange={props.handleInputChange} name="name" type="text" className="form-control" placeholder="Name" aria-label="Name"/>
            </div>

            <div className="input-group mb-3">
                <input value={props.email} onChange={props.handleInputChange} name="email" type="text" className="form-control" placeholder="Email" aria-label="Email"/>
            </div>

            <div className="input-group">
                <textarea value={props.message} onChange={props.handleInputChange} name="message" className="form-control" placeholder="Message" aria-label="With textarea"></textarea>
            </div>
          <button type="submit" onClick={props.handleFormSubmit} className="btn btn-dark" style={{margin: "10px 0 0 0"}}>
            Submit
          </button>
        </div>
      </form>
    );
  }
  
  export default SearchForm;