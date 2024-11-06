import { StaticImageData } from "next/image";

import causeThumb_1 from "@/assets/img/causes/cause1.jpg";
import causeThumb_2 from "@/assets/img/causes/cause2.jpg";
import causeThumb_3 from "@/assets/img/causes/cause3.jpg";

import cause2Thumb_1 from "@/assets/img/causes/cause-two1.jpg";
import cause2Thumb_2 from "@/assets/img/causes/cause-two2.jpg";
import cause2Thumb_3 from "@/assets/img/causes/cause-two3.jpg";
import cause2Thumb_4 from "@/assets/img/causes/cause-two4.jpg";
import cause2Thumb_5 from "@/assets/img/causes/cause-two5.jpg";
import cause2Thumb_6 from "@/assets/img/causes/cause-two6.jpg";
import cause2Thumb_7 from "@/assets/img/causes/cause-two7.jpg";
import cause2Thumb_8 from "@/assets/img/causes/cause-two8.jpg";
import cause2Thumb_9 from "@/assets/img/causes/cause-two9.jpg";

import cause3Thumb_1 from "@/assets/img/causes/cause-three1.jpg";
import cause3Thumb_2 from "@/assets/img/causes/cause-three2.jpg";
import cause3Thumb_3 from "@/assets/img/causes/cause-three3.jpg";

import recentCauseThumb_1 from "@/assets/img/widgets/cause1.jpg";
import recentCauseThumb_2 from "@/assets/img/widgets/cause2.jpg";
import recentCauseThumb_3 from "@/assets/img/widgets/cause3.jpg";

interface DataType {
  id: number;
  page: string;
  img: StaticImageData;
  title: string;
  desc?: string;
  raised: number;
  goal: number;
  progress_width?: string | number;
  progress_bg?: string;
  btn_bg?: string;
  price_color?: string;
  item_bg?: string;
  percentage?: number;
}

const cause_data: DataType[] = [
  {
    id: 1,
    page: "home_1",
    img: causeThumb_1,
    title: "Water For All Children",
    desc: "You believe, as we do, that every child deserves a future. Every last child.",
    raised: 87689,
    goal: 87689,
    progress_width: "75%",
  },
  {
    id: 2,
    page: "home_1",
    img: causeThumb_2,
    title: "Protecting Children",
    desc: "You believe, as we do, that every child deserves a future. Every last child.",
    raised: 89679,
    goal: 89286,
    progress_width: "60%",
    progress_bg: "progress-bar--yellow",
    btn_bg: "btn--yellow",
  },
  {
    id: 3,
    page: "home_1",
    img: causeThumb_3,
    title: "The Rights of Children",
    desc: "You believe, as we do, that every child deserves a future. Every last child.",
    raised: 97679,
    goal: 97679,
    progress_width: "70%",
    progress_bg: "progress-bar--green",
    btn_bg: "btn--green",
  },
  {
    id: 4,
    page: "home_1",
    img: causeThumb_1,
    title: "Water For All Children",
    desc: "You believe, as we do, that every child deserves a future. Every last child.",
    raised: 87689,
    goal: 87689,
    progress_width: "75%",
  },

  // home two

  {
    id: 1,
    page: "home_2",
    img: cause2Thumb_1,
    title: "Mission",
    desc: "To bring together all American Tamil physicians and allied healthcare professionals, fostering collaboration, sharing knowledge.",
    raised: 100587,
    goal: 200587,
    percentage: 90,
    progress_bg: "one",
  },
  {
    id: 2,
    page: "home_2",
    img: cause2Thumb_2,
    title: "Vision",
    desc: "ATMA is as an organization formed to promote charitable work through their foundation (ATMA-CF) nationally and internationally.",
    raised: 95752,
    goal: 100752,
    percentage: 85,
    progress_bg: "two",
    btn_bg: "btn--yellow",
    price_color: "cause-price--yellow",
    item_bg: "cause-yellow",
  },
  {
    id: 3,
    page: "home_2",
    img: cause2Thumb_3,
    title: "Donate",
    desc: "ATMA is as an organization formed to promote charitable work through their foundation (ATMA-CF) nationally and internationally.",
    raised: 97152,
    goal: 200752,
    percentage: 55,
    progress_bg: "three",
    btn_bg: "btn--green",
    price_color: "cause-price--green",
    item_bg: "cause-green",
  },
  {
    id: 4,
    page: "home_2",
    img: cause2Thumb_4,
    title: "The Right of Childen",
    desc: "There are many variations of passages of orem Ipsum available, but the majority have",
    raised: 97152,
    goal: 200752,
    percentage: 55,
    progress_bg: "three",
    btn_bg: "btn--green",
    price_color: "cause-price--green",
    item_bg: "cause-green",
  },

  // home three

  {
    id: 1,
    page: "home_3",
    img: cause3Thumb_1,
    title: "Water For All Children",
    desc: "You believe, as we do, that every chideserves avery last child. t was popularised in the 1960s with the release charity help for childen.",
    raised: 23785,
    goal: 87563,
    percentage: 80,
  },
  {
    id: 2,
    page: "home_3",
    img: cause3Thumb_2,
    title: "Education For All Childen",
    desc: "You believe, as we do, that every chideserves avery last child. t was popularised in the 1960s with the release charity help for childen.",
    raised: 29785,
    goal: 80563,
    percentage: 50,
    item_bg: "item--green",
  },
  {
    id: 3,
    page: "home_3",
    img: cause3Thumb_3,
    title: "Homeless African People",
    desc: "You believe, as we do, that every chideserves avery last child. t was popularised in the 1960s with the release charity help for childen.",
    raised: 39785,
    goal: 86563,
    percentage: 70,
    item_bg: "item--yellow",
  },

  // Inner Page

  {
    id: 1,
    page: "inner_page",
    img: cause2Thumb_1,
    title: "Mission",
    desc: "To bring together all American Tamil physicians and allied healthcare professionals, fostering collaboration, sharing knowledge.",
    raised: 100587,
    goal: 200587,
    percentage: 90,
    progress_bg: "one",
  },
  {
    id: 2,
    page: "inner_page",
    img: cause2Thumb_2,
    title: "Vision",
    desc: "ATMA is as an organization formed to promote charitable work through their foundation (ATMA-CF) nationally and internationally.",
    raised: 95752,
    goal: 100752,
    percentage: 85,
    progress_bg: "two",
    btn_bg: "btn--yellow",
    price_color: "cause-price--yellow",
    item_bg: "cause-yellow",
  },
  {
    id: 3,
    page: "inner_page",
    img: cause2Thumb_3,
    title: "Donate",
    desc: "ATMA is as an organization formed to promote charitable work through their foundation (ATMA-CF) nationally and internationally.",
    raised: 97152,
    goal: 200752,
    percentage: 55,
    progress_bg: "three",
    btn_bg: "btn--green",
    price_color: "cause-price--green",
    item_bg: "cause-green",
  },
  {
    id: 4,
    page: "inner_page",
    img: cause2Thumb_4,
    title: "Mission",
    desc: "To bring together all American Tamil physicians and allied healthcare professionals, fostering collaboration, sharing knowledge.",
    raised: 784689,
    goal: 1547689,
    percentage: 90,
    progress_bg: "one",
  },
  {
    id: 5,
    page: "inner_page",
    img: cause2Thumb_5,
    title: "Vision",
    desc: "ATMA is as an organization formed to promote charitable work through their foundation (ATMA-CF) nationally and internationally.",
    raised: 60000,
    goal: 100752,
    percentage: 85,
    progress_bg: "two",
    btn_bg: "btn--yellow",
    price_color: "cause-price--yellow",
    item_bg: "cause-yellow",
  },
  {
    id: 6,
    page: "inner_page",
    img: cause2Thumb_6,
    title: "Donate",
    desc: "ATMA is as an organization formed to promote charitable work through their foundation (ATMA-CF) nationally and internationally.",
    raised: 50650,
    goal: 3578358,
    percentage: 55,
    progress_bg: "three",
    btn_bg: "btn--green",
    price_color: "cause-price--green",
    item_bg: "cause-green",
  },
  {
    id: 7,
    page: "inner_page",
    img: cause2Thumb_7,
    title: "Mission",
    desc: "To bring together all American Tamil physicians and allied healthcare professionals, fostering collaboration, sharing knowledge.",
    raised: 120245,
    goal: 247874,
    percentage: 90,
    progress_bg: "one",
  },
  {
    id: 8,
    page: "inner_page",
    img: cause2Thumb_8,
    title: "Vision",
    desc: "ATMA is as an organization formed to promote charitable work through their foundation (ATMA-CF) nationally and internationally.",
    raised: 547245,
    goal: 721578,
    percentage: 85,
    progress_bg: "two",
    btn_bg: "btn--yellow",
    price_color: "cause-price--yellow",
    item_bg: "cause-yellow",
  },
  {
    id: 9,
    page: "inner_page",
    img: cause2Thumb_9,
    title: "Donate",
    desc: "ATMA is as an organization formed to promote charitable work through their foundation (ATMA-CF) nationally and internationally.",
    raised: 357250,
    goal: 478147,
    percentage: 55,
    progress_bg: "three",
    btn_bg: "btn--green",
    price_color: "cause-price--green",
    item_bg: "cause-green",
  },

  // recent cause

  {
    id: 1,
    page: "inner_page_details",
    img: recentCauseThumb_1,
    title: "Clothes For Everyone",
    raised: 23785,
    goal: 87563,
  },
  {
    id: 2,
    page: "inner_page_details",
    img: recentCauseThumb_2,
    title: "New Kindergarten",
    raised: 17568,
    goal: 20898,
  },
  {
    id: 3,
    page: "inner_page_details",
    img: recentCauseThumb_3,
    title: "Food for childen",
    raised: 30635,
    goal: 50658,
  },
];

export default cause_data;
