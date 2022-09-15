const header = document.getElementById('header');
const title = document.getElementById('title');
const exerpt = document.getElementById('exerpt');
const profileImg = document.getElementById('profile_img');
const name = document.getElementById('name');
const date = document.getElementById('date');

const animatedBgs = document.querySelectorAll('.animated-bg');
const animatedBgTexts = document.querySelectorAll('.animated-bg-text');

setTimeout(getData, 2500);

function getData() {
  header.innerHTML =
    '<img src="https://images.unsplash.com/photo-1509281373149-e957c6296406?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bW92aWV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60" alt="" />';
  title.innerHTML = 'Lorem ipsum dolor sit amet.';
  exerpt.innerHTML =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, ex.';
  profileImg.innerHTML =
    '<img src="https://randomuser.me/api/portraits/men/44.jpg" alt="" />';
  name.innerHTML = 'John Doe';
  date.innerHTML = 'Oct 08, 2022';

  animatedBgs.forEach((bg) => bg.classList.remove('animated-bg'));
  animatedBgTexts.forEach((bg) => bg.classList.remove('animated-bg-text'));
}
