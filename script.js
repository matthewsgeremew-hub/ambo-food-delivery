const roleButtons = document.querySelectorAll('.role-btn');
const screens = {
  student: document.getElementById('student-screen'),
  courier: document.getElementById('courier-screen'),
  admin: document.getElementById('admin-screen'),
};

roleButtons.forEach((button) => {
  button.addEventListener('click', () => {
    roleButtons.forEach((btn) => btn.classList.toggle('active', btn === button));

    Object.entries(screens).forEach(([role, node]) => {
      node.classList.toggle('active', role === button.dataset.role);
    });
  });
});

const paymentOptions = document.querySelectorAll('.payment-option');
paymentOptions.forEach((option) => {
  option.addEventListener('click', () => {
    paymentOptions.forEach((item) => item.classList.remove('active'));
    option.classList.add('active');
  });
});

const availabilityToggle = document.querySelector('.toggle-switch');
if (availabilityToggle) {
  availabilityToggle.addEventListener('click', () => {
    availabilityToggle.classList.toggle('on');
  });
}

const chips = document.querySelectorAll('.chip');
chips.forEach((chip) => {
  chip.addEventListener('click', () => {
    chips.forEach((item) => item.classList.remove('active'));
    chip.classList.add('active');
  });
});
