# avengers


---

### Deployment Test

###### Author: Ibrahem Alomari

- ##### [Pull Request](https://github.com/ibrahemomari/avengers/pull/1)
- ##### [Heroku](https://ibrahem-avengers.herokuapp.com/)
- ##### [Test](https://javascript-401.netlify.app/bearer-auth)

---

###### Setup

### `.env`

> PORT=
> NODE_ENV=
> DATABASE_URL=

---

###### Running the app:

- #### `npm start` , `nodemon`

- #### Endpoint: _/signin_
  - **Returns Object**

```javascript
{
    "username":"test",
    "password":"test"
}
```

- #### Endpoint: _/signup_
- **Returns Object**

```javascript
{
    "username":"test",
    "password":"test",
    "token":"123456789abcd"
}
```

- #### Endpoint: _/avengers_
- **Returns Object**

```javascript
{
    favHero: "",
    favValin: "",
    favMovie: "" ,
}
```

- #### Endpoint: _/users_
- **Returns Object**

```javascript
{
    {
        id:"",
        token:"",
        username:"",
        password:"",
    },
    {
        id:"",
        token:"",
        username:"",
        password:"",
    }
}
```

---

#### Tests

Unit Tests: `npm run test`
Lint Tests: `npm run lint`

---

#### UML

<img src="https://raw.githubusercontent.com/ibrahemomari/bearer-auth/main/bearer.jpg" alt="drawing" style="width:500px;"/>
