// import morgan from "morgan";

const timeCheck = async (req, res, next) => {
  const currentDate = new Date();
  const currentDay = currentDate.getDay();
  const currentHour = currentDate.getHours();

  // Defining the allowed time for handling requests.

  const startHour = 9;
  const endHour = 17;

  if (
    currentDay >= 1 &&
    currentDay <= 5 &&
    currentHour >= startHour &&
    currentHour < endHour
  ) {
    next();
  } else res.status(403).send("We are only open between 9am - 5pm");
};

export default timeCheck;
