export default {
  imageShow(state,show){
    state.fullImageShow=show
  },

  pelexImageGetSearch(state,get){
   state.searchGetImage=get
  },

  fullImags(state,payload){
    state.fullImage=payload
  },
  menuShows(state,payload){
    state.menuShow=payload
  },
  pageNext(state,next){
    state.nextPageState=next
  }
}
