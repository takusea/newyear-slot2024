const rollSpeed = 30;

const roll = (slot, rollY) => {
  const slotImage = slot.querySelector(".slot-image");

  if (slot.dataset.stop === "true") {
    slotImage.style.transform = `translateY(${
      (Math.round(rollY / (slotImage.height / 5)) * slotImage.height) / 5
    }px)`;
    return;
  }

  slotImage.style.transform = `translateY(${rollY}px)`;

  if (-rollY < slotImage.height - slot.clientHeight) {
    rollY -= rollSpeed;
  } else {
    rollY = 0;
  }

  requestAnimationFrame(() => roll(slot, rollY));
};

const slot1 = document.querySelector("#slot-1");
const slot2 = document.querySelector("#slot-2");
const slot3 = document.querySelector("#slot-3");
requestAnimationFrame(() => roll(slot1, -Math.random() * 1000));
requestAnimationFrame(() => roll(slot2, -Math.random() * 1000));
requestAnimationFrame(() => roll(slot3, -Math.random() * 1000));

const stop = (slot) => {
  slot.dataset.stop = "true";
};
slot1.addEventListener("click", (e) => stop(e.currentTarget));
slot2.addEventListener("click", (e) => stop(e.currentTarget));
slot3.addEventListener("click", (e) => stop(e.currentTarget));

const onemoreButton = document.querySelector("#button-onemore");
onemoreButton.addEventListener("click", () => {
  slot1.dataset.stop = "false";
  slot2.dataset.stop = "false";
  slot3.dataset.stop = "false";
  requestAnimationFrame(() => roll(slot1, -Math.random() * 1000));
  requestAnimationFrame(() => roll(slot2, -Math.random() * 1000));
  requestAnimationFrame(() => roll(slot3, -Math.random() * 1000));
});
