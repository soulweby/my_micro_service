import axios from "axios";

let token =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2Njg2ODAwOTgsImV4cCI6MTY2ODY4MzY5OCwicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoidXNlckByZXN0LmNvbSJ9.b91pfEPzyegYkW7ZtYZT8p6XexLdJ7x0FKWfOmyWWzkBmv9BTa3Dtr7GTeT8SsZz0u2kUUD38jWAJtCN883D2bjd95H0YiooHELwg6IB95XRB0w320R0XaVnM5J2UzZSx3El6bCGVw2usdbkK8CCzRizfRnEfwXdGU-8TyJdENl_JcDNR_12KPbJBQ7h8LI40h9i5sqHsANTnoNDpg1OhpudnlUMc36a_FWeXMsTUcBy5GSbYz2sluD-m5s9q7wHvekOZ7ROBplVUoDl48MfD9Z9vfk6RKQKsdZgkOloa-pzajWi0qlx-lma2wByhIYLHLwLKDkwVkJRicM9JZO5r-mDOVGjs1rrXfIix7V6E6Z1TrSQjOPh0EaDdpAvE1qaSzdr-z1O0cSxEE7ijxBmgs0gzw-CyvduUZGukbOhzyTJiHsnAJTkoQY0541K2Z3K6EH9LGhdqY0mSszBG_vRYkffSH4X3wvgiozv1v00E1mxA9tXjn19PVrrPGJJ82bg3sqecoo5DKPp1KLh4S0e6lZ0VMYfgPEpWerBrp3URbrbJrqG2jIKUirB-tIGIjTvBAOi-gGSTqn2LFyEoEW92YuyohSXhjo85VKDdFSQeQjZ2MeM6ovJGAlOtmKlZiFieOrQZOnqI_byN-hv-WKBvhrizpUVUMPuPDnKEs01Djo";

console.log(token);

let auth = axios.create({
  headers: {
    // "Content-Type": "application/json",
    // "Access-Control-Allow-Origin": "*",
    Authorization: `bearer ${token}`,
  },
});

export default auth;
