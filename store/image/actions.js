
export default {
  async pelexImageGetSearchs({commit,state},get){
    const apiKey='563492ad6f91700001000001c274acf928a140efb99b7f5a4c54dd6c'
    const data =await  fetch(`https://api.pexels.com/v1/search?query=${get}`,{method:"GET",
      headers:{
        Accept:"application/json",
        Authorization:apiKey
      }
    })
    const res=await data.json()
    console.log(res)
    commit("pelexImageGetSearch",res.photos)

  },


  async pelexImage({commit,state},get){
    const apiKey='563492ad6f91700001000001c274acf928a140efb99b7f5a4c54dd6c'
    const data =await  fetch(`https://api.pexels.com/v1/curated?page=${get}`,{method:"GET",
      headers:{
        Accept:"application/json",
        Authorization:apiKey
      }
    })
    const res=await data.json()
    console.log(res)
    commit("pageNext",res.photos)

  }

}
