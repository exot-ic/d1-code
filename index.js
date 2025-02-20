addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const url = new URL(request.url);
  const path = url.pathname;

  if (path === "/") {
    return new Response(html, {
      headers: {
        'Content-Type': 'text/html',
      },
    });
  } else if (path === "/g") {
    return new Response(gamesHtml, {
      headers: {
        'Content-Type': 'text/html',
      },
    });
  } else if (path === "/a") {
    return new Response(appsHtml, {
      headers: {
        'Content-Type': 'text/html',
      },
    });
  } else if (path === "/!") {
      return new Response(searchHtml, {
          headers: {
              'Content-Type': 'text/html',
          },
      });
  } else if (path === "/s") {
      return new Response(settingsHtml, {
          headers: {
              'Content-Type': 'text/html',
          },
      });    
  } else if (path.startsWith("/static/")) { // Serve static files
    try {
      const response = await fetch(request); // Fetch from origin
      return response;
    } catch (error) {
      return new Response("Error fetching static file", { status: 500 });
    }
  } else {
    return new Response("Not Found", { status: 404 });
  }
}

const html = `
<!DOCTYPE html>
<html>
<head>
<title>stop tryna fw me</title>
<style>
  /* ... (Your CSS from the previous responses) ... */
</style>
</head>
<body>

<div id="particles-js"></div>

<nav class="navbar">
  <ul class="navbar-links left">
    <li>
      <a href="/" title="Velara - Play Unblocked Games" aria-label="Velara Home">
        <span class="material-icons"></span> VELARA
      </a>
    </li>
  </ul>
  <ul class="navbar-links right">
    <li>
      <a href="/g" title="Play Unblocked Games Online" aria-label="Games Section">
        <span class="material-icons">videogame_asset</span> GAMES
      </a>
    </li>
    <li>
      <a href="/a" title="Unblocked Apps Collection" aria-label="Apps Section">
        <span class="material-icons">apps</span> APPS
      </a>
    </li>
    <li>
      <a href="/!" title="Search Unblocked Games" aria-label="Search Page">
        <span class="material-icons">search</span> SEARCH
      </a>
    </li>
    <li>
      <a href="/s" title="User Settings &amp; Preferences" aria-label="Settings Page">
        <span class="material-icons">settings</span> SETTINGS
      </a>
    </li>
  </ul>
</nav>

<h1>Your Website Content Here</h1>

<script src="/static/particles.js"></script> <script>
  // ... (Your particles.js initialization code) ...
</script>

</body>
</html>
`;

const gamesHtml = `
<!DOCTYPE html>
<html>
<head><title>Games</title></head>
<body><h1>Games Section</h1></body>
</html>
`;

const appsHtml = `
<!DOCTYPE html>
<html><head><title>Apps</title></head>
<body><h1>Apps Section</h1></body>
</html>
`;

const searchHtml = `
<!DOCTYPE html>
<html><head><title>Search</title></head>
<body><h1>Search Page</h1></body>
</html>
`;

const settingsHtml = `
<!DOCTYPE html>
<html><head><title>Settings</title></head>
<body><h1>Settings</h1></body>
</html>
`;
