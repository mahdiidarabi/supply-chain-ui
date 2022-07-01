export const SignUp =  async (username , email,password,name,familyname,type)=>{
  console.log(type)
        try {
    const response = await fetch(`https://iranscm.tk/api/general/register`, {
      method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password,
          email:email,
          name:name,
          familyname:familyname,
          userType:type
        }),
      });
  
    const responseJson = await response.json();
    // console.log("----------------------");
    // console.log(JSON.stringify(responseJson));
    return {
      status : response.status ,
      body : responseJson
    };
  } catch(error) {
    console.error(error);
    return {
      status : 0 ,
      body : {message : 'connection Problem'}
    };
  }};
 export const Logins = async(username,password ) =>{
    try {
const response = await fetch(`https://iranscm.tk/api/general/login`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    username: username,
    password: password
  }),
});
const responseJson = await response.json();
// console.log("----------------------");

return {
  status : response.status ,
  body : responseJson
};
} catch(error) {
console.error(error);
return {
  status : 0 ,
  body : {message : 'connection Problem'}
};
}};
export const findalluser=async(token) =>{
  const Token= "Bearer "+token;
  try {
    const response = await fetch("https://iranscm.tk/api/admin/findalluser", {
      
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        
        'Authorization':Token
        
        
      },
      body: JSON.stringify({
        // username: "stargh",
        // isConfirmed: "true",
        // userType:"source"
      }),

    });
    const responseJson = await response.json();
    return {
      status : response.status ,
      body : responseJson
    };
  } catch(error) {
    console.error(error);
    return {
      status : 0 ,
      body : {message : 'connection Problem'}
    };
  }
};

export const ConfirmUser=async(token,username,isConfirmed) =>{
  const Token= "Bearer "+token;
  try {
    const response = await fetch("https://iranscm.tk/api/admin/ConfirmUser", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        
        'Authorization': Token
        
      },
      body: JSON.stringify({
        username: username,
        isConfirmed: isConfirmed,
        userType:"source"
      }),

    });
    const responseJson = await response.json();
    return {
      status : response.status ,
      body : responseJson
    };
  } catch(error) {
    console.error(error);
    return {
      status : 0 ,
      body : {message : 'connection Problem'}
    };
  }
};

export const testToken=async(token) =>{
  const Token= "Bearer "+token;
  try {
    const response = await fetch("https://iranscm.tk/api/test", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        
        'Authorization': Token,
        
      },
      body: JSON.stringify({
      }),

    });
    const responseJson = await response.json();
    return {
      status : response.status ,
      body : responseJson
    };
  } catch(error) {
    console.error(error);
    return {
      status : 0 ,
      body : {message : 'connection Problem'}
    };
  }
};
////////////////////////////////////////////////////////////////////////
export const getBalance=async(token) =>{
  const Token= "Bearer "+token;
  try {
    const response = await fetch("https://iranscm.tk/api/user/getbalance", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        
        'Authorization': Token,
        
      },
      body: JSON.stringify({
      //   peer: "peer0.org1.example.com",
      //  fcn:"getBalance",
      //   args: localStorage.getItem('number')
      }),

    });
    const responseJson = await response.json();
    console.log(responseJson);
    return {
      status : response.status ,
      body : responseJson
    };
  } catch(error) {
    console.error(error);
    return {
      status : 0 ,
      body : {message : 'connection Problem'}
    };
  }
};
///////////////////////////////////////////
export const getAllAsset=async(token) =>{
  const Token= "Bearer "+token;
  try {
    const response = await fetch("https://iranscm.tk/api/admin/findallAssetRequest", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        
        'Authorization': Token,
        
      },
      body: JSON.stringify({
      //   peer: "peer0.org1.example.com",
      //  fcn:"getBalance",
      //   args: localStorage.getItem('number')
      }),

    });
    const responseJson = await response.json();
    console.log(responseJson);
    return {
      status : response.status ,
      body : responseJson
    };
  } catch(error) {
    console.error(error);
    return {
      status : 0 ,
      body : {message : 'connection Problem'}
    };
  }
};
////////////////////////////////////
export const addAsset=async(token,serialNumber,assetType,assetVar) =>{
  const Token= "Bearer "+token;
  try {
    const response = await fetch("https://iranscm.tk/api/user/confirmAsset", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        
        'Authorization': Token,
        
      },
      body: JSON.stringify({
        serialNumber:serialNumber,
        assetType:assetType,
        assetVar:assetVar
      }),

    });
    const responseJson = await response.json();
    console.log(responseJson);
    return {
      status : response.status ,
      body : responseJson
    };
  } catch(error) {
    console.error(error);
    return {
      status : 0 ,
      body : {message : 'connection Problem'}
    };
  }
};
////////////////////////////////////
export const RequestAsset=async(token,assetsCount,Micro) =>{
  const Token= "Bearer "+token;
  try {
    const response = await fetch("https://iranscm.tk/api/user/requestAssets", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        
        'Authorization': Token,
        
      },
      body: JSON.stringify({
        assetsCount:assetsCount,
        isMicroRequested:String(Micro)
       
      }),

    });
    const responseJson = await response.json();
    console.log(responseJson);
    return {
      status : response.status ,
      body : responseJson
    };
  } catch(error) {
    console.error(error);
    return {
      status : 0 ,
      body : {message : 'connection Problem'}
    };
  }
};
////////////////////////////////////////////////////////////////////////////////////
export const AllRequestAssets=async(token) =>{
  const Token= "Bearer "+token;
  try {
    const response = await fetch("https://iranscm.tk/api/admin/findallAssetRequest", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        
        'Authorization': Token,
        
      },
      body: JSON.stringify({
        
       
      }),

    });
    const responseJson = await response.json();
    
    return {
      status : response.status ,
      body : responseJson
    };
  } catch(error) {
    console.error(error);
    return {
      status : 0 ,
      body : {message : 'connection Problem'}
    };
  }
};
///////////////////////////////////////////////////////
export const AdminConfirmAsset=async(token,id,count) =>{
  const Token= "Bearer "+token;
  try {
    const response = await fetch("https://iranscm.tk/api/admin/ConfirmAndAddAssets", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        
        'Authorization': Token,
        
      },
      body: JSON.stringify({
        requestId:id,
        confirmAssetCount:count
      }),

    });
    const responseJson = await response.json();
    
    return {
      status : response.status ,
      body : responseJson
    };
  } catch(error) {
    console.error(error);
    return {
      status : 0 ,
      body : {message : 'connection Problem'}
    };
  }
};
//////////////////
export const AdminConfirmAssetMicro=async(token,id,count,micros) =>{
  const Token= "Bearer "+token;
  try {
    const response = await fetch("https://iranscm.tk/api/admin/ConfirmAndAddAssets", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        
        'Authorization': Token,
        
      },
      body: JSON.stringify({
        requestId:id,
        confirmAssetCount:count,
        microId:micros
      }),

    });
    const responseJson = await response.json();
    
    return {
      status : response.status ,
      body : responseJson
    };
  } catch(error) {
    console.error(error);
    return {
      status : 0 ,
      body : {message : 'connection Problem'}
    };
  }
};
////////////////////////////////
export const UserConfirmAsset=async(token,serialNumber,assetType,assetVar) =>{
  const Token= "Bearer "+token;
  try {
    const response = await fetch("https://iranscm.tk/api/user/confirmAsset", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        
        'Authorization': Token,
        
      },
      body: JSON.stringify({
        serialNumber:serialNumber,
        assetType:assetType,
        assetVar:assetVar
      }),

    });
    const responseJson = await response.json();
    
    return {
      status : response.status ,
      body : responseJson
    };
  } catch(error) {
    console.error(error);
    return {
      status : 0 ,
      body : {message : 'connection Problem'}
    };
  }
};
/////////////////////////////
export const UserChangeHolder=async(token,serialNumber,newHolder) =>{
  const Token= "Bearer "+token;
  try {
    const response = await fetch("https://iranscm.tk/api/user/changeHolder", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        
        'Authorization': Token,
        
      },
      body: JSON.stringify({
        serialNumber:serialNumber,
        newHolder:newHolder
      }),

    });
    const responseJson = await response.json();
    
    return {
      status : response.status ,
      body : responseJson
    };
  } catch(error) {
    console.error(error);
    return {
      status : 0 ,
      body : {message : 'connection Problem'}
    };
  }
};
/////////////////////////////
export const getAssetById=async(token,id) =>{
  const Token= "Bearer "+token;
  try {
    const response = await fetch("https://iranscm.tk/api/user/findRequestedAssetsById", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        
        'Authorization': Token,
        
      },
      body: JSON.stringify({
        requestId:id
      }),

    });
    const responseJson = await response.json();
    
    return {
      status : response.status ,
      body : responseJson
    };
  } catch(error) {
    console.error(error);
    return {
      status : 0 ,
      body : {message : 'connection Problem'}
    };
  }
};
//////////////////////////////////////////////////////
export const getbalanceAdmin=async(token,account) =>{
  const Token= "Bearer "+token;
  try {
    const response = await fetch("https://iranscm.tk/api/admin/getbalance", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        
        'Authorization': Token,
        
      },
      body: JSON.stringify({
        accountNumber:account
      }),

    });
    const responseJson = await response.json();
    
    return {
      status : response.status ,
      body : responseJson
    };
  } catch(error) {
    console.error(error);
    return {
      status : 0 ,
      body : {message : 'connection Problem'}
    };
  }
};
//////////////////////////////////////////////////////
export const IssueForUser=async(token,account,amount) =>{
  const Token= "Bearer "+token;
  try {
    const response = await fetch("https://iranscm.tk/api/admin/IssueForUser", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        
        'Authorization': Token,
        
      },
      body: JSON.stringify({
        accountNumber:account,
        amount:amount
      }),

    });
    const responseJson = await response.json();
    
    return {
      status : response.status ,
      body : responseJson
    };
  } catch(error) {
    console.error(error);
    return {
      status : 0 ,
      body : {message : 'connection Problem'}
    };
  }
};
//////////////////////////////////////////////////////
export const Transfers=async(token,receiver,amount) =>{
  const Token= "Bearer "+token;
  try {
    const response = await fetch("https://iranscm.tk/api/user/transfer", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        
        'Authorization': Token,
        
      },
      body: JSON.stringify({
        receiver:receiver,
        amount:amount
      }),

    });
    const responseJson = await response.json();
    
    return {
      status : response.status ,
      body : responseJson
    };
  } catch(error) {
    console.error(error);
    return {
      status : 0 ,
      body : {message : 'connection Problem'}
    };
  }
};
//////////////////////////////////////////////////////
export const MyAssets=async(token) =>{
  const Token= "Bearer "+token;
  try {
    const response = await fetch("https://iranscm.tk/api/user/findallAssetRequest", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        
        'Authorization': Token,
        
      },
      body: JSON.stringify({
      
      }),

    });
    const responseJson = await response.json();
    
    return {
      status : response.status ,
      body : responseJson
    };
  } catch(error) {
    console.error(error);
    return {
      status : 0 ,
      body : {message : 'connection Problem'}
    };
  }
};