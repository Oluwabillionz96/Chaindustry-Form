export const info = {
  name: "",
  email: "",
  phone: "Yes",
  phoneNumber: "",
  whatsappNumber: "",
  telegram: "",
  laptop: "Yes",
  computerLiteracyLevel: "Basic Level",
  SocialMediaExposure: "Basic Level",
  site: "Onsite",
  classes: [],
  payment: "Yes",
  image: "",
};

const formReducer = (form, action) => {
  switch (action.type) {
    case "set_email": {
      return {
        ...form,
        email: action.email,
      };
    }
    case "set_name": {
      return {
        ...form,
        name: action.name,
      };
    }
    case "set_phone": {
      return {
        ...form,
        phone: action.phone,
      };
    }
    case "set_phone2": {
      return {
        ...form,
        phone: action.phone,
      };
    }
    case "set_phoneNumber": {
      return {
        ...form,
        phoneNumber: action.phoneNumber,
      };
    }
    case "set_whatsappNumber": {
      return {
        ...form,
        whatsappNumber: action.whatsappNumber,
      };
    }
    case "set_telegram": {
      return {
        ...form,
        telegram: action.telegram,
      };
    }
    case "set_laptop": {
      return {
        ...form,
        laptop: action.laptop,
      };
    }
    case "set_computerLiteracyLevel": {
      return {
        ...form,
        computerLiteracyLevel: action.computerLiteracyLevel,
      };
    }
    case "set_SocialMediaExposure": {
      return {
        ...form,
        SocialMediaExposure: action.SocialMediaExposure,
      };
    }
    case "set_site": {
      return {
        ...form,
        site: action.site,
      };
    }
    case "set_classes": {
      return {
        ...form,
        classes: action.classes,
      };
    }
    case "set_payment": {
      return {
        ...form,
        payment: action.payment,
      };
    }
    case "set_image": {
      return {
        ...form,
        image: action.image,
      };
    }
    case "reset": {
      return {
        info,
      };
    }

    default:
      break;
  }
};

export default formReducer;
