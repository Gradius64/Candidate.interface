// TODO: Create an interface for the Candidate objects returned by the API
function printLabel(Candidate: { label: string }) {
    console.log(Candidate.label);
  }


export interface Candidate {
    name: string;          // The name of the candidate
    username: string;      // The GitHub username of the candidate
    location: string;      // The location of the candidate
    avatar: string;        // URL to the candidate's avatar image
    email: string;         // The email address of the candidate
    
     
 


   // The company the candidate is associated with
    
}


    

    
    




 
 