import { StaticImageData } from "next/image";

import features3Bg_1 from "@/assets/img/features/feature-bg-red.jpg";
import features3Bg_2 from "@/assets/img/features/feature-bg-green.jpg";
import features3Bg_3 from "@/assets/img/features/feature-bg-yellow.jpg";
import { Url } from "url";

interface DataType {
  id: number;
  page: string;
  icon_bg?: string;
  icon_name?: string;
  title: string;
  desc: string;
  btn_bg?: string;
  bg_img?: StaticImageData;
  item_bg?: string;
  link?: string;
  button_text?: string;
  subtitle?: string;
  year?: number;
}

const features_data: DataType[] = [
  {
    id: 1,
    page: "home_1",
    icon_name: "flaticon-help",
    subtitle: "Our History",
    title: "The origin of the ATMA",
    desc: "In January, 2005, a group of ten Tamil physicians in the United States established the American Tamil Medical Association (ATMA). Now there are more than 800 physicians and allied healthcare professionals as members and the membership is growing.",
    year: 2005,
  },
  {
    id: 2,
    page: "home_1",
    icon_name: "flaticon-solidarity",
    icon_bg: "feature-item__icon--green",
    subtitle: "Our History",
    title: "The origin of the ATMA",
    desc: "In January, 2005, a group of ten Tamil physicians in the United States established the American Tamil Medical Association (ATMA). Now there are more than 800 physicians and allied healthcare professionals as members and the membership is growing.",
    year: 2005,
  },
  {
    id: 3,
    page: "home_1",
    icon_name: "flaticon-donation",
    icon_bg: "feature-item__icon--yellow",
    subtitle: "Our History",
    title: "The origin of the ATMA",
    desc: "In January, 2005, a group of ten Tamil physicians in the United States established the American Tamil Medical Association (ATMA). Now there are more than 800 physicians and allied healthcare professionals as members and the membership is growing.",
    year: 2005,
  },
  {
    id: 4,
    page: "home_1",
    icon_name: "flaticon-solidarity",
    icon_bg: "feature-item__icon--green",
    subtitle: "Our History",
    title: "The origin of the ATMA",
    desc: "In January, 2005, a group of ten Tamil physicians in the United States established the American Tamil Medical Association (ATMA). Now there are more than 800 physicians and allied healthcare professionals as members and the membership is growing.",
    year: 2005,
  },

  // home one single features
  {
    id: 1,
    page: "single_features",
    title: "Child Education Help",
    desc: "Your little help can make milion childrean smile model sentence structures",
  },
  {
    id: 2,
    page: "single_features",
    title: "Child Education Help",
    desc: "Your little help can make milion childrean smile model sentence structures",
    btn_bg: "btn--yellow",
  },
  {
    id: 3,
    page: "single_features",
    title: "Child Education Help",
    desc: "Your little help can make milion childrean smile model sentence structures",
    btn_bg: "btn--green",
  },

  // home two

  {
    id: 1,
    page: "home_2",
    icon_name: "flaticon-help",
    title: "Become a volunteer",
    desc: "To bring together all American Tamil Physicians and allied healthcare professionals.",
    link: "#",
    button_text: "Join Us Now",
  },
  {
    id: 2,
    page: "home_2",
    icon_name: "flaticon-donation",
    title: "Charitable Activities",
    desc: "To bring together all American Tamil Physicians and allied healthcare professionals.",
    item_bg: "feature-item--green",
    link: "#",
    button_text: "Donate Now",
  },
  {
    id: 3,
    page: "home_2",
    icon_name: "flaticon-solidarity",
    title: "Annual Convention",
    desc: "To bring together all American Tamil Physicians and allied healthcare professionals.",
    item_bg: "feature-item--yellow",
    link: "#",
    button_text: "Know More",
  },

  // home three

  {
    id: 1,
    page: "home_3",
    bg_img: features3Bg_1,
    icon_name: "flaticon-solidarity",
    title: "Get Inspire And Help",
    desc: "Maximus a augue. Nullam ante nunc poraretra are oullam fringill sem ealiquam suscipit.......",
  },
  {
    id: 2,
    page: "home_3",
    bg_img: features3Bg_2,
    icon_name: "flaticon-heart",
    title: "Send Us Donations",
    desc: "Maximus a augue. Nullam ante nunc poraretra are oullam fringill sem ealiquam suscipit.......",
  },
  {
    id: 3,
    page: "home_3",
    bg_img: features3Bg_3,
    icon_name: "flaticon-help",
    title: "Become a volunteer",
    desc: "Maximus a augue. Nullam ante nunc poraretra are oullam fringill sem ealiquam suscipit.......",
  },
];

export default features_data;
