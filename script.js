document.getElementById('generate-button').addEventListener('click', function() {  
    const mode = document.getElementById('hook-generator-mode').value;  
    const architecture = document.getElementById('architecture').value;  
    const targetLibrary = document.getElementById('target-library').value;  
    const hookType = document.getElementById('hook-type').value;  
    const dataType = document.getElementById('data-type').value;  
    const hookMode = document.getElementById('hook-mode').value;  
    const hackName = document.getElementById('hack-name').value;  

    const generatedCode = `Hook Configuration:\nMode: ${mode}\nArchitecture: ${architecture}\nTarget Library: ${targetLibrary}\nHook Type: ${hookType}\nData Type: ${dataType}\nHook Mode: ${hookMode}\nHack Name: ${hackName}`;  

    document.getElementById('output-code').value = generatedCode;  
});  

document.getElementById('copy-button').addEventListener('click', function() {  
    const outputCode = document.getElementById('output-code');  
    outputCode.select();  
    document.execCommand('copy');  
    alert('Kode telah disalin ke clipboard!');  
});  
