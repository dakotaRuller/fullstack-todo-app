const APIURL = '/api/todos/';

export async function getTodos() {
  return fetch(APIURL)
    .then(res => {
      if(!res.ok) {
        if(res.status >= 400 && res.status < 500) {
          return res.json(data => {
            let err = {
              errorMessage: data.message,
              statusCode: res.status,
              callURL: res.url
            };
            throw err;
          })
        } else {
          let err = {
            errorMessage: "server not responding, please try again later",
            statusCode: res.status
          };
          throw err;
        }
      }
      console.log(res.url);
      return res.json();
    })
}
export async function addTodos(val) {
  return fetch(APIURL, {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/JSON"
    }),
    body: JSON.stringify({name: val})
  })
  .then(res => {
    if(!res.ok) {
      if(res.status >= 400 && res.status < 500) {
        return res.json(data => {
          let err = {
            errorMessage: data.message,
            statusCode: res.status
          };
          throw err;
        })
      } else {
        let err = {
          errorMessage: "server not responding, please try again later",
          statusCode: res.status
        };
        throw err;
      }
    }
    return res.json();
  })
}
export async function removeTodos(id) {
  const deleteURL = `${APIURL}${id}`;
  return fetch(deleteURL, {method: "DELETE"})
  .then(res => {
    if(!res.ok) {
      if(res.status >= 400 && res.status < 500) {
        return res.json(data => {
          let err = {
            errorMessage: data.message,
            statusCode: res.status
          };
          throw err;
        })
      } else {
        let err = {
          errorMessage: "server not responding, please try again later",
          statusCode: res.status
        };
        throw err;
      }
    }
  })
}
export async function updateTodo(todo) {
  const updateURL = `${APIURL}${todo._id}`;
  return fetch(updateURL, {
  method: "put",
  headers: new Headers({
    "Content-Type": "application/JSON"
  }),
  body: JSON.stringify({completed: !todo.completed})})
  .then(res => {
    if(!res.ok) {
      if(res.status >= 400 && res.status < 500) {
        return res.json(data => {
          let err = {
            errorMessage: data.message,
            statusCode: res.status
          };
          throw err;
        })
      } else {
        let err = {
          errorMessage: "server not responding, please try again later",
          statusCode: res.status
        };
        throw err;
      }
    }
    return res.json();
  })
}