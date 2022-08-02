
// variables
let clientId = "xxxxxx";
let clientSecret = "xxxxxx";


const gettoken = () => {
    // this is easy into to API consumtion than actual twitch API documentation
    // ref : https://api-docs.igdb.com/#about
    // token API URL ro get oAuth token using clent cedentials
    let token_api = `https://id.twitch.tv/oauth2/token?client_id=${clientId}&client_secret=${clientSecret}&grant_type=client_credentials`;
    
    return fetch(token_api,{
        method: "POST",
    })
    .then((res) => res.json())
    .then((data) =>  data);
}



const getlivegames = async() =>{
    //return token info
    let auth_token = await gettoken();
    let {access_token,expires_in,token_type} = auth_token;
    
    let live_stream_api = 'https://api.twitch.tv/helix/games/top';

    token_type =
    token_type.substring(0, 1).toUpperCase() +
    token_type.substring(1, token_type.length);
    

    let authorization = `${token_type} ${access_token}`;

    let headers = {
    authorization,
    "Client-Id": clientId,
    };

    fetch(live_stream_api, {headers})
    .then((res) => res.json())
    .then((data) => renderStreams(data));

}



function renderStreams(data) {
    let { data: streams } = data;
    let streamsContainer = document.querySelector(".streams");

    streams.forEach((stream) => {
    let { box_art_url: thumbnail, name, id } = stream;
    let hdThumbnail = thumbnail.replace("{width}", "1280").replace("{height}", "720");

    streamsContainer.innerHTML += `    
   <div class="stream-container">
        <img src="${hdThumbnail}" />
        <h2>${name}</h2>
        <p>
        
            ID : ${id.toString()}
          
        </p>
    </div>
 

    `;
    });
}


getlivegames();

