import axios from 'axios';

export class ExternalService {
  async getUsers() {
    // API de ejemplo para la prueba
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    return response.data.map((user: any) => ({
      id: user.id,
      fullName: user.name,
      email: user.email,
      city: user.address.city
    }));
  }
}