export default {
  imageShow(state,show){
    state.fullImageShow=show
  },
 pelexImageGetSearch(state,get){
    console.log('mutasions',get)
   state.searchGetImage=get
  },
  fullImags(state,paylod){
    state.fullImage=paylod
  },
  menuShows(state,paylod){
    state.menuShow=paylod
  },
  pageNext(state,next){
    state.nextPageState=next
  }
}
