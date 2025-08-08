document.getElementById('searchBtn').addEventListener('click', function() {
    let query = document.getElementById('searchInput').value.trim();
    if (!query) {
        alert('Please enter a valid search query.');
    } else {
        alert('Searching for: ' + query);
    }
});

document.getElementById('clearBtn').addEventListener('click', function() {
    document.getElementById('searchInput').value = '';
});
