const UserProfile = (props) => {
   return (
     <div style={{ border:'1px solide #ccc', padding:'10px', margin:'10px', textAlign:'center'}}>
       <h2 style={{color:'blue'}}>{props.name}</h2>
       <p><span style={{fontWeight:'bold', }}>{props.age}</span> </p>
       <p> {props.bio}</p>
     </div>
   );
 };

 export default UserProfile;