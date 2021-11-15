import react,{useState} from 'react'
function Form(){

  
    const [title,setTitle]=useState("");
    const [journal,setJournal]=useState("");
    const [publisher,setPublisher]=useState("");
    const [issueNo,setIssueNo]=useState("");
    const [volumeNo,setVolumeNo]=useState("");
    const [PPNumber,setPPNumber]=useState("");
    const [year,setYear]=useState("");
    const [DOI,setDOI]=useState("");
    const [SCIScopus,setSCISCOPUS]=useState("");
    const [impactFactor,setImpactFactor]=useState("");
    const titleChangeHandler = (event) => {
        console.log(event.target.value)
        setTitle(event.target.value)      
    }
    const journalChangeHandler = (event) => {
        console.log(event.target.value)
        setJournal(event.target.value)      
    }
    const publisherChangeHandler = (event) => {
        console.log(event.target.value)
        setPublisher(event.target.value)      
    }
    const issueNoChangeHandler = (event) => {
        console.log(event.target.value)
        setIssueNo(event.target.value)      
    }
    const volumeNoChangeHandler = (event) => {
        console.log(event.target.value)
        setVolumeNo(event.target.value)      
    }

    const PPNumberChangeHandler = (event) => {
        console.log(event.target.value)
        setPPNumber(event.target.value)      
    }
    const yearChangeHandler = (event) => {
        console.log(event.target.value)
        setYear(event.target.value)      
    }
    const DOIChangeHandler = (event) => {
        console.log(event.target.value)
        setDOI(event.target.value)      
    }
    const SCIScopusChangeHandler = (event) => {
        console.log(event.target.value)
        setSCISCOPUS(event.target.value)      
    }
    const impactFactorChangeHandler = (event) => {
        console.log(event.target.value)
        setImpactFactor(event.target.value)      
    }

    function submitForm(e){
      e.preventDefault()
      fetch("/",{
        method:"post",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            title,
            journal,
            publisher,
            issueNo,
            volumeNo,
            PPNumber,
            year,
            DOI,
            SCIScopus,
            impactFactor
        })
      })
      .then((res)=>res.json()).then((data)=>console.log(data.msg))
    }
    
    const styles={
      form:
      {
        borderRadius:"20px",
        margin:"30px 250px 30px 280px",
        display:'flex',
        flexDirection:"column",
        height:"100vh",
        alignItems:"center",
        justifyContent:"center",
        flexWrap:"wrap",
        backgroundColor: "#ffff66",
        "&.input":{
          borderRadius:"5px"
        }
      },
      label:{
        float: "left",
        textAlign: "right",
        marginRight: "10px",
        width: "120px"
      },
      button:{
        margin:"30px",
        padding:"10px 20px 10px 20px",
        borderRadius:"5px",
        backgroundColor:"white",
        "&:hover": {
          color: "pink",
        },
      },
      element:{
        margin:"10px"
      },
      input:{
        padding:"5px",
        borderRadius:"5px",
        border:"2px solid #B22222"
      }
    }

    return (
      <form style={styles.form}>
        <div>
          <div style={styles.element}>
            <label style={styles.label}>Title</label>
            <input type="text" value={title} onChange={titleChangeHandler} style={styles.input}></input>
          </div>
          <div style={styles.element}>
            <label style={styles.label}>Journal Name</label>
            <input type="text" value={journal} onChange={journalChangeHandler} style={styles.input}></input>
          </div>
          <div style={styles.element}>
            <label style={styles.label}>Publisher Name</label>
            <input type="text" value={publisher} onChange={publisherChangeHandler} style={styles.input}></input>
          </div>
          <div style={styles.element}>
            <label style={styles.label}>Volume No</label>
            <input type="number" value={volumeNo} onChange={volumeNoChangeHandler} style={styles.input}></input>
          </div>
          <div style={styles.element}>
            <label style={styles.label}>Issue No</label>
            <input type="number" value={issueNo} onChange={issueNoChangeHandler} style={styles.input}></input>
          </div>
          <div style={styles.element}>
            <label style={styles.label}>PP No</label>
            <input type="number" value={PPNumber} onChange={PPNumberChangeHandler} style={styles.input}></input>
          </div>
          <div style={styles.element}>
            <label style={styles.label}>Year</label>
            <input type="number" value={year} onChange={yearChangeHandler} style={styles.input}></input>
          </div>
          <div style={styles.element}>
            <label style={styles.label}>Date Of Issue</label>
            <input type="date" value={DOI} onChange={DOIChangeHandler} style={styles.input}></input>
          </div>
          <div style={styles.element}>
            <label style={styles.label}>SCI/Scopus</label>
            <input type="text" value={SCIScopus} onChange={SCIScopusChangeHandler} style={styles.input}></input>
          </div>
          <div style={styles.element}>
            <label style={styles.label}>Impact factor</label>
            <input type="text" value={impactFactor} onChange={impactFactorChangeHandler} style={styles.input}></input>
          </div>
        </div>
        <div>
          <button type="submit"  style={styles.button} onClick={submitForm}>Submit</button>
        </div>
      </form>
    );
}
export default Form