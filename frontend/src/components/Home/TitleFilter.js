import agent from "../../agent";
import { useState } from "react"

const TitleFilter = ({onChangeTitleFilter}) => {
  const [titleFilter, setTitleFilter] = useState()
  const handleSubmit = (event) => {
    event.preventDefault()
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group">
        <input 
          className="form-control border-end-0 border"
          onChange={(event) => {
            setTitleFilter(event.target.value)            
            if (titleFilter.length < 3) {
              onChangeTitleFilter(      
                (page) => agent.Items.byTitle("", page),
                agent.Items.byTitle(""),
              )
              return
            }
        
            onChangeTitleFilter(      
              (page) => agent.Items.byTitle(titleFilter, page),
              agent.Items.byTitle(titleFilter),
            )
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

export default TitleFilter