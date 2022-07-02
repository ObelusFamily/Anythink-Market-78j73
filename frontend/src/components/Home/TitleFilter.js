import agent from "../../agent";
import { useState, useEffect } from "react"
import { connect } from "react-redux";

const mapDispatchToProps = (dispatch) => ({
  onChangeTitleFilter: (pager, payload) =>
    dispatch({ type: "APPLY_TITLE_FILTER", pager, payload}),  
});


const TitleFilter = ({onChangeTitleFilter}) => {
  const [titleFilter, setTitleFilter] = useState("")
  const handleSubmit = (event) => {
    event.preventDefault()
  }

  useEffect(() => {
    let isMounted = true
    if (isMounted) {
      if (titleFilter.length < 3) {
        onChangeTitleFilter(      
          (page) => agent.Items.byTitle("", page),
          agent.Items.byTitle(""),
        )
      } else {
        onChangeTitleFilter(      
          (page) => agent.Items.byTitle(titleFilter, page),
          agent.Items.byTitle(titleFilter),
        )
      }
    }
    return () => {
      isMounted = false
    }
  }, [titleFilter, onChangeTitleFilter])

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group">
        <input 
          className="form-control border-end-0 border"
          onChange={(event) => {
            setTitleFilter(event.target.value)                        
          }} 
          value={titleFilter}
          id="search-box" 
          name="title" 
          type="text" 
          placeholder="What is it that you truly desire?"
        />        
      </div>
    </form>
  )
}

export default connect(null, mapDispatchToProps)(TitleFilter);