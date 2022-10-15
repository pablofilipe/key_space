function tratarKey() {
    let chaveNfe = document.getElementById('keyNfe').value
    // document.getElementById('keyNfe').value = chaveNfe.replace(/\s/g, '')
    document.getElementById('keyNfe').value = chaveNfe.replace(/[^a-z0-9]/gi, '')
}

function clearInput() {
    document.getElementById('keyNfe').value = ''
}