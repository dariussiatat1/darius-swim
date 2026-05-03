const filme = [
    // --- SERIA AVATAR ---
    {
        id: "Avatar (2009)",
        titlu: "Avatar (2009)",
        poster: "https://m.media-amazon.com/images/M/MV5BMDEzMmQwZjctZWU2My00MWNlLWE0NjItMDJlYTRlNGJiZjcyXkEyXkFqcGc@._V1_.jpg",
        codEmbed: '<iframe src="https://vidsrc.net/embed/movie?imdb=tt0499549" scrolling="no" frameborder="0" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" height="500px" width="100%"></iframe>'
    },
    {
        id: "Avatar: The Way of Water (2022)",
        titlu: "Avatar: The Way of Water (2022)",
        poster: "https://m.media-amazon.com/images/M/MV5BNWI0Y2NkOWEtMmM2OC00MjQ3LWI1YzItZGQxYzQ3NzI4NWZmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        codEmbed: '<iframe src="https://vidsrc.net/embed/movie?imdb=tt1630029" scrolling="no" frameborder="0" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" height="500px" width="100%"></iframe>'
    },
    {
        id: "Avatar: Fire and Ash (2025)",
        titlu: "Avatar: Fire and Ash (2025)",
        poster: "https://m.media-amazon.com/images/M/MV5BZDYxY2I1OGMtN2Y4MS00ZmU1LTgyNDAtODA0MzAyYjI0N2Y2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        codEmbed: '<iframe src="https://vidsrc.net/embed/movie?imdb=tt1757678" scrolling="no" frameborder="0" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" height="500px" width="100%"></iframe>'
    },

    // --- SERIA SPIDER-MAN (Sam Raimi) ---
    {
        id: "Spider-Man (2002)",
        titlu: "Spider-Man (2002)",
        poster: "https://m.media-amazon.com/images/M/MV5BZWM0OWVmNTEtNWVkOS00MzgyLTkyMzgtMmE2ZTZiNjY4MmFiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        codEmbed: '<iframe src="https://vidsrc.net/embed/movie?imdb=tt0145487" scrolling="no" frameborder="0" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" height="500px" width="100%"></iframe>'
    },
    {
        id: "Spider-Man 2 (2004)",
        titlu: "Spider-Man 2 (2004)",
        poster: "https://m.media-amazon.com/images/M/MV5BNGQ0YTQyYTgtNWI2YS00NTE2LWJmNDItNTFlMTUwNmFlZTM0XkEyXkFqcGc@._V1_.jpg",
        codEmbed: '<iframe src="https://vidsrc.net/embed/movie?imdb=tt0316654" scrolling="no" frameborder="0" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" height="500px" width="100%"></iframe>'
    },
    {
        id: "Spider-Man 3 (2007)",
        titlu: "Spider-Man 3 (2007)",
        poster: "https://m.media-amazon.com/images/M/MV5BODE2NzNhMDctYjUzMC00Y2M5LWI2Y2EtODJkZTFjN2Y5ODlmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        codEmbed: '<iframe src="https://vidsrc.net/embed/movie?imdb=tt0413300" scrolling="no" frameborder="0" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" height="500px" width="100%"></iframe>'
    },

    // --- SERIA SPIDER-VERSE ---
    {
        id: "Spider-Man: Into the Spider-Verse (2018)",
        titlu: "Spider-Man: Into the Spider-Verse (2018)",
        poster: "https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_FMjpg_UX1000_.jpg",
        codEmbed: '<iframe src="https://vidsrc.net/embed/movie?imdb=tt4633694" scrolling="no" frameborder="0" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" height="500px" width="100%"></iframe>'
    },
    {
        id: "Spider-Man: Across the Spider-Verse (2023)",
        titlu: "Spider-Man: Across the Spider-Verse (2023)",
        poster: "https://m.media-amazon.com/images/M/MV5BNThiZjA3MjItZGY5Ni00ZmJhLWEwN2EtOTBlYTA4Y2E0M2ZmXkEyXkFqcGc@._V1_.jpg",
        codEmbed: '<iframe src="https://vidsrc.net/embed/movie?imdb=tt9362722" scrolling="no" frameborder="0" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" height="500px" width="100%"></iframe>'
    },

    // --- SERIA BACK TO THE FUTURE ---
    {
        id: "Back to the Future (1985)",
        titlu: "Back to the Future (1985)",
        poster: "https://m.media-amazon.com/images/M/MV5BZmM3ZjE0NzctNjBiOC00MDZmLTgzMTUtNGVlOWFlOTNiZDJiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        codEmbed: '<iframe src="https://vidsrc.net/embed/movie?imdb=tt0088763" scrolling="no" frameborder="0" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" height="500px" width="100%"></iframe>'
    },
    {
        id: "Back to the Future Part II (1989)",
        titlu: "Back to the Future Part II (1989)",
        poster: "https://m.media-amazon.com/images/M/MV5BMTNlOTRmOTEtMTAyMi00NjFiLTk3NDMtNWI0YzA3ZTZlYjZiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        codEmbed: '<iframe src="https://vidsrc.net/embed/movie?imdb=tt0096874" scrolling="no" frameborder="0" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" height="500px" width="100%"></iframe>'
    },
    {
        id: "Back to the Future Part III (1990)",
        titlu: "Back to the Future Part III (1990)",
        poster: "https://m.media-amazon.com/images/M/MV5BNTNkNzJmY2MtOGNjYi00NDJmLWIyZTQtNmFmMGQ5M2VlOTI0XkEyXkFqcGc@._V1_.jpg",
        codEmbed: '<iframe src="https://vidsrc.net/embed/movie?imdb=tt0099088" scrolling="no" frameborder="0" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" height="500px" width="100%"></iframe>'
    },

    // --- SERIA BATMAN (Nolan) ---
    {
        id: "Batman Begins (2005)",
        titlu: "Batman Begins (2005)",
        poster: "https://m.media-amazon.com/images/M/MV5BMzA2NDQzZDEtNDU5Ni00YTlkLTg2OWEtYmQwM2Y1YTBjMjFjXkEyXkFqcGc@._V1_.jpg",
        codEmbed: '<iframe src="https://vidsrc.net/embed/movie?imdb=tt0372784" scrolling="no" frameborder="0" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" height="500px" width="100%"></iframe>'
    },
    {
        id: "The Dark Knight (2008)",
        titlu: "The Dark Knight (2008)",
        poster: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UX1000_.jpg",
        codEmbed: '<iframe src="https://vidsrc.net/embed/movie?imdb=tt0468569" scrolling="no" frameborder="0" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" height="500px" width="100%"></iframe>'
    },
    {
        id: "The Dark Knight Rises (2012)",
        titlu: "The Dark Knight Rises (2012)",
        poster: "https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_FMjpg_UX1000_.jpg",
        codEmbed: '<iframe src="https://vidsrc.net/embed/movie?imdb=tt1345836" scrolling="no" frameborder="0" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" height="500px" width="100%"></iframe>'
    },

    // --- SERIA THE GODFATHER ---
    {
        id: "The Godfather (1972)",
        titlu: "The Godfather (1972)",
        poster: "https://m.media-amazon.com/images/M/MV5BNGEwYjgwOGQtYjg5ZS00Njc1LTk2ZGEtM2QwZWQ2NjdhZTE5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        codEmbed: '<iframe src="https://vidsrc.net/embed/movie?imdb=tt0068646" scrolling="no" frameborder="0" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" height="500px" width="100%"></iframe>'
    },
    {
        id: "The Godfather Part II (1974)",
        titlu: "The Godfather Part II (1974)",
        poster: "https://m.media-amazon.com/images/M/MV5BMDIxMzBlZDktZjMxNy00ZGI4LTgxNDEtYWRlNzRjMjJmOGQ1XkEyXkFqcGc@._V1_.jpg",
        codEmbed: '<iframe src="https://vidsrc.net/embed/movie?imdb=tt0071562" scrolling="no" frameborder="0" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" height="500px" width="100%"></iframe>'
    },

    // --- SERIA FIVE NIGHTS AT FREDDY'S ---
    {
        id: "Five Nights at Freddy's (2023)",
        titlu: "Five Nights at Freddy's (2023)",
        poster: "https://m.media-amazon.com/images/M/MV5BNzFkMDE2ZmEtOWMwNy00MWM2LThlNjMtZWQzNWY5MTJjZjcxXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        codEmbed: '<iframe src="https://vidsrc.net/embed/movie?imdb=tt4589218" scrolling="no" frameborder="0" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe>'
    },
    {
        id: "Five Nights at Freddy's 2 (2025)",
        titlu: "Five Nights at Freddy's 2 (2025)",
        poster: "https://m.media-amazon.com/images/M/MV5BZmQ3NmIxNTgtYjFiNS00NzliLWI0YzAtZDkxY2E0YWIxZDEwXkEyXkFqcGc@._V1_.jpg",
        codEmbed: '<iframe src="https://vidsrc.net/embed/movie?imdb=tt30274401" scrolling="no" frameborder="0" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" height="500px" width="100%"></iframe>'
    },

    // --- SERIA MARIO ---
    {
        id: "The Super Mario Bros. Movie (2023)",
        titlu: "The Super Mario Bros. Movie (2023)",
        poster: "https://m.media-amazon.com/images/M/MV5BMzc2NTE1ZTktZTE4ZS00OGRlLWFlMGQtMjJjNzJkZTQwNzFiXkEyXkFqcGc@._V1_.jpg",
        codEmbed: '<iframe src="https://vidsrc.net/embed/movie?imdb=tt6718170" scrolling="no" frameborder="0" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" height="500px" width="100%"></iframe>'
    },
    {
        id: "The Super Mario Galaxy Movie (2026)",
        titlu: "The Super Mario Galaxy Movie (2026)",
        poster: "https://m.media-amazon.com/images/M/MV5BMDg5MjRkNWEtYmU1Mi00MTExLTk5MDQtY2RiMWVkZWNiOThjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        codEmbed: '<iframe src="https://vidsrc.net/embed/movie?imdb=tt28650488" scrolling="no" frameborder="0" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" height="500px" width="100%"></iframe>'
    },

    // --- SERIA SIRENELE ---
    {
        id: "Sirenele: Secretul medalionului (2025)",
        titlu: "Sirenele: Secretul medalionului (2025)",
        poster: "https://m.media-amazon.com/images/M/MV5BMzJkYjE2ZTItYzY5Zi00ZWU4LThiOTMtYjQ5YTAwZWIxNTIzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        codEmbed: '<iframe src="https://vidsrc.net/embed/movie?imdb=tt36415115" scrolling="no" frameborder="0" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" height="500px" width="100%"></iframe>'
    },
    {
        id: "Sirenele 2: Insula misterioasa (2025)",
        titlu: "Sirenele 2: Insula misterioasa (2025)",
        poster: "https://m.media-amazon.com/images/M/MV5BYjU0YzY3ODEtYTE0NS00Y2Q5LTkxYmUtODFjZWIzMDg5NGRkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        codEmbed: '<iframe src="https://vidsrc.net/embed/movie?imdb=tt37252720" scrolling="no" frameborder="0" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" height="500px" width="100%"></iframe>'
    },

    // --- ALTE FILME (A-Z sau Tematic) ---
    {
        id: "12 Angry Men (1957)",
        titlu: "12 Angry Men (1957)",
        poster: "https://m.media-amazon.com/images/M/MV5BYjE4NzdmOTYtYjc5Yi00YzBiLWEzNDEtNTgxZGQ2MWVkN2NiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        codEmbed: '<iframe src="https://vidsrc.net/embed/movie?imdb=tt0050083" scrolling="no" frameborder="0" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" height="500px" width="100%"></iframe>'
    },
    {
        id: "2001: A Space Odyssey (1968)",
        titlu: "2001: A Space Odyssey (1968)",
        poster: "https://m.media-amazon.com/images/M/MV5BNjU0NDFkMTQtZWY5OS00MmZhLTg3Y2QtZmJhMzMzMWYyYjc2XkEyXkFqcGc@._V1_.jpg",
        codEmbed: '<iframe src="https://vidsrc.net/embed/movie?imdb=tt0062622" scrolling="no" frameborder="0" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" height="500px" width="100%"></iframe>'
    },
    {
        id: "Fight Club (1999)",
        titlu: "Fight Club (1999)",
        poster: "https://m.media-amazon.com/images/M/MV5BOTgyOGQ1NDItNGU3Ny00MjU3LTg2YWEtNmEyYjBiMjI1Y2M5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        codEmbed: '<iframe src="https://vidsrc.net/embed/movie?imdb=tt0137523" scrolling="no" frameborder="0" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" height="500px" width="100%"></iframe>'
    },
    {
        id: "Forrest Gump (1994)",
        titlu: "Forrest Gump (1994)",
        poster: "https://m.media-amazon.com/images/M/MV5BNDYwNzVjMTItZmU5YS00YjQ5LTljYjgtMjY2NDVmYWMyNWFmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        codEmbed: '<iframe src="https://vidsrc.net/embed/movie?imdb=tt0109830" scrolling="no" frameborder="0" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" height="500px" width="100%"></iframe>'
    },
    {
        id: "Good Will Hunting (1997)",
        titlu: "Good Will Hunting (1997)",
        poster: "https://m.media-amazon.com/images/M/MV5BNDdjZGQ5YzEtNTc2My00Mjc0LWFlMTctYzkwMzZlNzdiZWYzXkEyXkFqcGc@._V1_.jpg",
        codEmbed: '<iframe src="https://vidsrc.net/embed/movie?imdb=tt0119217" scrolling="no" frameborder="0" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" height="500px" width="100%"></iframe>'
    },
    {
        id: "Inception (2010)",
        titlu: "Inception (2010)",
        poster: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX1000_.jpg",
        codEmbed: '<iframe src="https://vidsrc.net/embed/movie?imdb=tt1375666" scrolling="no" frameborder="0" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" height="500px" width="100%"></iframe>'
    },
    {
        id: "Interstellar (2014)",
        titlu: "Interstellar (2014)",
        poster: "https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_.jpg",
        codEmbed: '<iframe src="https://vidsrc.net/embed/movie?imdb=tt0816692" scrolling="no" frameborder="0" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" height="500px" width="100%"></iframe>'
    },
    {
        id: "Knives Out (2019)",
        titlu: "Knives Out (2019)",
        poster: "https://m.media-amazon.com/images/M/MV5BZDU5ZTRkYmItZjg0Mi00ZTQwLThjMWItNWM3MTMxMzVjZmVjXkEyXkFqcGc@._V1_.jpg",
        codEmbed: ' <video controls src="https://sod1.antenaplay.ro/antena1/2025/10/17/f96d69b7e159f09916f55cadc69d6220c859e1a8b8c8b8905df56a562036db11_,480p-wide,720p-wide,1080p,.mp4.urlset/master.m3u8?version=1&session=f5318acd40b4df16512f&starttime=1771278974&endtime=1771286174&source=web&guid=2kbfb4UrtDB&token=HRYK2KCtLSRjMpIz6wKjVbuUP0U=" width="80%"></video>'
    },
    {
        id: "La La Land (2016)",
        titlu: "La La Land (2016)",
        poster: "https://m.media-amazon.com/images/M/MV5BMzUzNDM2NzM2MV5BMl5BanBnXkFtZTgwNTM3NTg4OTE@._V1_.jpg",
        codEmbed: '<video controls src="https://sod1.antenaplay.ro/antena1/2026/03/25/9d5d0ecec89c7df3c0a5ae7750d7afed39bf2f4dc10e0aa2593523b24fb86fcb_,480p-wide,720p-wide,1080p,.mp4.urlset/master.m3u8?version=1&session=6af6c42226e3a919c53c&starttime=1777817093&endtime=1777824293&source=web&guid=qITzS6RL7fX&token=caEcRxP6P_jIAdfvKwMC5ZfyG-I=" width="80%"></video>'
    },
    {
        id: "Michael (2026)",
        titlu: "Michael (2026)",
        poster: "https://m.media-amazon.com/images/M/MV5BNzllNmRlN2EtMDQyOC00ODJjLTg4OWQtZDNmNGU3YzlkNjc1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        codEmbed: '<iframe src="https://vidsrc.net/embed/movie?imdb=tt11378946" scrolling="no" frameborder="0" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" height="500px" width="100%"></iframe>'
    },
    {
        id: "Parasite (2019)",
        titlu: "Parasite (2019)",
        poster: "https://m.media-amazon.com/images/M/MV5BYjk1Y2U4MjQtY2ZiNS00OWQyLWI3MmYtZWUwNmRjYWRiNWNhXkEyXkFqcGc@._V1_.jpg",
        codEmbed: '<iframe src="https://vidsrc.net/embed/movie?imdb=tt6751668" scrolling="no" frameborder="0" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" height="500px" width="100%"></iframe>'
    },
    {
        id: "Project Hail Mary (2026)",
        titlu: "Project Hail Mary (2026)",
        poster: "https://m.media-amazon.com/images/M/MV5BNTkwNzJiYTctNzI3NC00NjE1LTlhYjktY2Q5MTdmMWFmNzcxXkEyXkFqcGc@._V1_.jpg",
        codEmbed: '<iframe src="https://vidsrc.net/embed/movie?imdb=tt12042730" scrolling="no" frameborder="0" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" height="500px" width="100%"></iframe>'
    },
    {
        id: "Pulp Fiction (1994)",
        titlu: "Pulp Fiction (1994)",
        poster: "https://m.media-amazon.com/images/M/MV5BYTViYTE3ZGQtNDBlMC00ZTAyLTkyODMtZGRiZDg0MjA2YThkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        codEmbed: '<iframe src="https://vidsrc.net/embed/movie?imdb=tt0110912" scrolling="no" frameborder="0" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" height="500px" width="100%"></iframe>'
    },
    {
        id: "Scarface (1983)",
        titlu: "Scarface (1983)",
        poster: "https://m.media-amazon.com/images/M/MV5BNDUzYjY0NmUtMDM4OS00Y2Q5LWJiODYtNTk0ZTk0YjZhMTg1XkEyXkFqcGc@._V1_.jpg",
        codEmbed: '<iframe src="https://vidsrc.net/embed/movie?imdb=tt0086250" scrolling="no" frameborder="0" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" height="500px" width="100%"></iframe>'
    },
    {
        id: "Seven (1995)",
        titlu: "Seven (1995)",
        poster: "https://m.media-amazon.com/images/M/MV5BY2IzNzMxZjctZjUxZi00YzAxLTk3ZjMtODFjODdhMDU5NDM1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        codEmbed: '<iframe src="https://vidsrc.net/embed/movie?imdb=tt0114369" scrolling="no" frameborder="0" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" height="500px" width="100%"></iframe>'
    },
    {
        id: "Shutter Island (2010)",
        titlu: "Shutter Island (2010)",
        poster: "https://m.media-amazon.com/images/M/MV5BN2FjNWExYzEtY2YzOC00YjNlLTllMTQtNmIwM2Q1YzBhOWM1XkEyXkFqcGc@._V1_.jpg",
        codEmbed: '<iframe src="https://vidsrc.net/embed/movie?imdb=tt1130884" scrolling="no" frameborder="0" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" height="500px" width="100%"></iframe>'
    },
    {
        id: "Superman (2025)",
        titlu: "Superman (2025)",
        poster: "https://m.media-amazon.com/images/M/MV5BOGMwZGJiM2EtMzEwZC00YTYzLWIxNzYtMmJmZWNlZjgxZTMwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        codEmbed: '<iframe src="https://vidsrc.net/embed/movie?imdb=tt5950044" scrolling="no" frameborder="0" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" height="500px" width="100%"></iframe>'
    },
    {
        id: "The Fantastic Four: First Steps (2025)",
        titlu: "The Fantastic Four: First Steps (2025)",
        poster: "https://m.media-amazon.com/images/M/MV5BOGM5MzA3MDAtYmEwMi00ZDNiLTg4MDgtMTZjOTc0ZGMyNTIwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        codEmbed: '<iframe src="https://vidsrc.net/embed/movie?imdb=tt10676052" scrolling="no" frameborder="0" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" height="500px" width="100%"></iframe>'
    },
    {
        id: "The Good, the Bad and the Ugly (1966)",
        titlu: "The Good, the Bad and the Ugly (1966)",
        poster: "https://m.media-amazon.com/images/M/MV5BMWM5ZjQxM2YtNDlmYi00ZDNhLWI4MWUtN2VkYjBlMTY1ZTkwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        codEmbed: '<iframe src="https://vidsrc.net/embed/movie?imdb=tt28650488" scrolling="no" frameborder="0" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" height="500px" width="100%"></iframe>'
    },
    {
        id: "The Matrix (1999)",
        titlu: "The Matrix (1999)",
        poster: "https://m.media-amazon.com/images/M/MV5BN2NmN2VhMTQtMDNiOS00NDlhLTliMjgtODE2ZTY0ODQyNDRhXkEyXkFqcGc@._V1_.jpg",
        codEmbed: '<iframe src="https://vidsrc.net/embed/movie?imdb=tt0133093" scrolling="no" frameborder="0" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" height="500px" width="100%"></iframe>'
    },
    {
        id: "The Phantom of the Opera (2004)",
        titlu: "The Phantom of the Opera (2004)",
        poster: "https://m.media-amazon.com/images/M/MV5BNDczNzg4OTM3MV5BMl5BanBnXkFtZTcwOTQzMTEzMw@@._V1_FMjpg_UX1000_.jpg",
        codEmbed: '<iframe src="https://vidsrc.net/embed/movie?imdb=tt0293508" scrolling="no" frameborder="0" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" height="500px" width="100%"></iframe>'
    },
    {
        id: "The Pianist (2002)",
        titlu: "The Pianist (2002)",
        poster: "https://m.media-amazon.com/images/M/MV5BMjEwNmEwYjgtNTk3ZC00NjljLTg5ZDctZTY3ZGQwZjRkZmQxXkEyXkFqcGc@._V1_.jpg",
        codEmbed: '<iframe src="https://vidsrc.net/embed/movie?imdb=tt0253474" scrolling="no" frameborder="0" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" height="500px" width="100%"></iframe>'
    },
    {
        id: "The Shawshank Redemption (1994)",
        titlu: "The Shawshank Redemption (1994)",
        poster: "https://m.media-amazon.com/images/M/MV5BMDAyY2FhYjctNDc5OS00MDNlLThiMGUtY2UxYWVkNGY2ZjljXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        codEmbed: '<iframe src="https://vidsrc.net/embed/movie?imdb=tt0111161" scrolling="no" frameborder="0" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" height="500px" width="100%"></iframe>'
    },
    {
        id: "The Sixth Sense (1999)",
        titlu: "The Sixth Sense (1999)",
        poster: "https://m.media-amazon.com/images/M/MV5BZWQ2OTY0M2UtMTQxNC00MmIzLTllNDQtNDQ0MTQyYzI2M2ZiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        codEmbed: '<iframe src="https://vidsrc.net/embed/movie?imdb=tt0167404" scrolling="no" frameborder="0" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" height="500px" width="100%"></iframe>'
    },
    {
        id: "The Whale (2022)",
        titlu: "The Whale (2022)",
        poster: "https://m.media-amazon.com/images/M/MV5BYmNhOWMyNTYtNTljNC00NTU3LWFiYmQtMDBhOGU5NWFhNGU5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        codEmbed: '<video controls src="https://vod4ro.antenaplay.ro/antena1/2026/04/30/11fd1c00b90bbea32aab0593025e0497f6e3b325602b47684498fa4443fd4157_,480p-wide,720p-wide,1080p,.mp4.urlset/master.m3u8?version=1&session=ed74f5134f5323989c9e&starttime=1777816733&endtime=1777823933&source=web&guid=F5irCvmp3B3&token=WEtnGo4AKidvwII96JVcwBS2h9o=" width="80%"></video>'
    },
    {
        id: "Whiplash (2014)",
        titlu: "Whiplash (2014)",
        poster: "https://m.media-amazon.com/images/M/MV5BMDFjOWFkYzktYzhhMC00NmYyLTkwY2EtYjViMDhmNzg0OGFkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        codEmbed: '<iframe src="https://vidsrc.net/embed/movie?imdb=tt2582802" scrolling="no" frameborder="0" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" height="500px" width="100%"></iframe>'
    },

    // --- ANIME & ANIMATIE (Filme) ---
    {
        id: "Spirited Away (2001)",
        titlu: "Spirited Away (2001)",
        poster: "https://m.media-amazon.com/images/M/MV5BNTEyNmEwOWUtYzkyOC00ZTQ4LTllZmUtMjk0Y2YwOGUzYjRiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        codEmbed: '<iframe src="https://vidsrc.net/embed/movie?imdb=tt0245429" scrolling="no" frameborder="0" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" height="500px" width="100%"></iframe>'
    },
    {
        id: "Your Name. (2016)",
        titlu: "Your Name. (2016)",
        poster: "https://m.media-amazon.com/images/M/MV5BMjI1ODZkYTgtYTY3Yy00ZTJkLWFkOTgtZDUyYWM4MzQwNjk0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        codEmbed: '<iframe width="640" height="360" data-src="https://playhydrax.com/?v=0j2zWJR0Q" frameborder="0" scrolling="0" allowfullscreen="" src="https://playhydrax.com/?v=0j2zWJR0Q" class="view-iframe"></iframe>'
    },

    // --- SERIALE TV ---
    {
        id: "Breaking Bad",
        titlu: "Breaking Bad",
        poster: "https://m.media-amazon.com/images/M/MV5BMzU5ZGYzNmQtMTdhYy00OGRiLTg0NmQtYjVjNzliZTg1ZGE4XkEyXkFqcGc@._V1_.jpg",
        codEmbed: '<iframe src="https://streamimdb.ru/embed/tv/tt0903747" scrolling="no" frameborder="0" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" height="500px" width="100%"></iframe>'
    },
    {
        id: "Dexter",
        titlu: "Dexter",
        poster: "https://m.media-amazon.com/images/M/MV5BNWYyYTk0MDEtMjU3OS00MzIyLTkxMGItNzc3NDdlNjAyM2U2XkEyXkFqcGc@._V1_.jpg",
        codEmbed: '<iframe src="https://streamimdb.ru/embed/tv/tt0773262" scrolling="no" frameborder="0" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" height="500px" width="100%"></iframe>'
    },
    {
        id: "Avatar: The Last Airbender",
        titlu: "Avatar: The Last Airbender",
        poster: "https://m.media-amazon.com/images/M/MV5BMDMwMThjYWYtY2Q2OS00OGM2LTlkODQtNDJlZTZmMjAyYmFhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        codEmbed: '<iframe src="https://streamimdb.ru/embed/tv/tt0417299" scrolling="no" frameborder="0" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" height="500px" width="100%"></iframe>'
    },
    {
        id: "Attack on Titan",
        titlu: "Attack on Titan",
        poster: "https://m.media-amazon.com/images/M/MV5BZjliODY5MzQtMmViZC00MTZmLWFhMWMtMjMwM2I3OGY1MTRiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        codEmbed: '<iframe src="https://streamimdb.ru/embed/tv/tt2560140" scrolling="no" frameborder="0" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" height="500px" width="100%"></iframe>'
    },
    {
        id: "Death Note",
        titlu: "Death Note",
        poster: "https://m.media-amazon.com/images/M/MV5BYTgyZDhmMTEtZDFhNi00MTc4LTg3NjUtYWJlNGE5Mzk2NzMxXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        codEmbed: '<iframe src="https://streamimdb.ru/embed/tv/tt0877057" scrolling="no" frameborder="0" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" height="500px" width="100%"></iframe>'
    },
    {
        id: "Rick and Morty",
        titlu: "Rick and Morty",
        poster: "https://m.media-amazon.com/images/M/MV5BZGQyZjk2MzMtMTcyNC00NGU3LTlmNjItNDExMWM4ZDFhYmQ2XkEyXkFqcGc@._V1_.jpg",
        codEmbed: '<iframe src="https://streamimdb.ru/embed/tv/tt2861424" scrolling="no" frameborder="0" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" height="500px" width="100%"></iframe>'
    },
    {
        id: "Family Guy",
        titlu: "Family Guy",
        poster: "https://m.media-amazon.com/images/M/MV5BNTZlMGQ1YjEtMzVlNC00ZmMxLTk0MzgtZjdkYTU1NmUxNTQ0XkEyXkFqcGc@._V1_.jpg",
        codEmbed: '<iframe src="https://streamimdb.ru/embed/tv/tt0182576" scrolling="no" frameborder="0" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" height="500px" width="100%"></iframe>'
    },
    {
        id: "Bluey",
        titlu: "Bluey",
        poster: "https://m.media-amazon.com/images/M/MV5BYWU1YmQzMjEtMDNjOS00MGIyLWExY2ItZDAzNmU5NWViMGZmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        codEmbed: '<iframe src="https://streamimdb.ru/embed/tv/tt7678620" scrolling="no" frameborder="0" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" height="500px" width="100%"></iframe>'
    }
];