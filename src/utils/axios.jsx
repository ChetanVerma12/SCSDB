import axios from 'axios';

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers: {
        accept: "application/json",
        // Authorization:"Bearer eyJhbGci0iJIUzI1NiJ9.eyJhdWQiOiIyMjM2NjdkNTIzOTg3MWZjNGI2ZWVlZjhkMGQ2ZGVmOCIsInN1YiI6IjYxZmQyNWFjZWV1MT g2MDA5MTFKOTZjNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uPjuX67gkt1PrFCrV6ZuR7Xm5bZESAcyqvSu8swmOLI",
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNmQ0ZTk4Y2ZiN2I4NzFhZDc1ZTY0ZTEzOGY3OTIyMCIsIm5iZiI6MTc0MjM2OTYxOS45NDgsInN1YiI6IjY3ZGE3MzUzYWU0YThkMWIwZmE2ZDFjMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uh95vAvLt8DmbztJuLvFFocTZzg488WmzN18jKqi6J4"
    }
});

export default instance;

//c6d4e98cfb7b871ad75e64e138f79220