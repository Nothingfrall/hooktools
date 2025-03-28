function generateCode() {
    const hookMode = document.querySelector('input[name="hookMode"]:checked').value;
    const architecture = document.getElementById('architecture').value;
    const targetLibrary = document.getElementById('targetLibrary').value;
    const hookType = document.querySelector('input[name="hookType"]:checked').value;

    const code = 
    // Generated Hook Configuration
    const hookConfig = {
        mode: '${hookMode}',
        architecture: '${architecture}',
        targetLibrary: '${targetLibrary}',
        hookType: '${hookType}',
    };
    ;
    document.getElementById('generatedCode').textContent = code;
}