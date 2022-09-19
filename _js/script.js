function tratarKey() {
    let chaveNfe = document.getElementById('keyNfe').value
    document.getElementById('keyNfe').value = chaveNfe.replace(/\s/g, '')
}

function clearInput() {
    document.getElementById('keyNfe').value = ''
}