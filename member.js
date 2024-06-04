function skillsMember()
{
    var member = document.getElementById("member");
    if(member.value == "Select Member")
    {
        alert("Please select a member.");
        return false;
    }
    return true;
}
