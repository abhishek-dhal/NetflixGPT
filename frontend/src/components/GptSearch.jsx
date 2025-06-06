import { BG } from "../utils/constants"
import GptMovieSuggestions from "./GptMovieSuggestions"
import GptSearchBar from "./GptSearchBar"


const GptSearch = () => {
  return (
    <div>
        <div className="absolute -z-10">
            <img 
              src={BG}
              alt="background"
              />
        </div>
        <GptSearchBar/>
        <GptMovieSuggestions/>

    </div>
  )
}

export default GptSearch