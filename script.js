const supabaseUrl = "https://qweamfxmnavgxeshcuxg.supabase.co"

const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF3ZWFtZnhtbmF2Z3hlc2hjdXhnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMwMTg1MzAsImV4cCI6MjA4ODU5NDUzMH0.RHSglJLPkSgdUeYId3GfU6j7seywmIBfrCZnMroxyX8"

const { createClient } = supabase

const supabaseClient = createClient(supabaseUrl, supabaseKey)

document.getElementById("registrationForm").addEventListener("submit", async function(e){

e.preventDefault()

const name = document.getElementById("name").value
const email = document.getElementById("email").value
const mobile = document.getElementById("mobile").value
const gender = document.getElementById("gender").value

const { data, error } = await supabaseClient
.from("registrations")
.insert([
{
name: name,
email: email,
mobile: mobile,
gender: gender
}
])

if(error){
console.log(error)
alert("Error saving data")
}
else{
alert("Registration Successful")
document.getElementById("registrationForm").reset()
}

})