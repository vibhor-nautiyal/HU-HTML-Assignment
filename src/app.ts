const container: HTMLElement | any = document.getElementById("app");
const user: number = 10;

interface IUser {
  id: number;
  name: string;
  type: string;
}

const fetchData = (): void => {
  for (let i = 1; i <= user; i++) {
    let user: IUser = {
      id: i,
      name: `User-${i}`,
      type: `Linker`
    }
    showUser(user);
  }
};

const showUser = (user: IUser): void => {
  let output: string = `
        <div key='${user.id}' class='item'>
          <p>Welcome to HU v19.1: ${user.name}, ${user.type}</p> 
        </div>
    `;
  container.innerHTML += output;
};

fetchData();