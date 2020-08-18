const BASE_URL = 'https://thinkful-list-api.herokuapp.com/ian';


function updateItem(id, updateData) {
    return fetch(`${BASE_URL}/items/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updateData),
    })

}

function getItems() {
  return fetch(`${BASE_URL}/items`);

}

function createItem(name) {
  const newItem = JSON.stringify({
    name,
  });

  return fetch(`${BASE_URL}/items`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: newItem
  });
}



export default {
  updateItem,
  createItem,
  getItems
};
