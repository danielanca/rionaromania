import building from "./fakeDataImg/building.png";
import ddk from "./fakeDataImg/ddk.png";
import hyprio from "./fakeDataImg/hyperio.png";
import illumines from "./fakeDataImg/ilumines.png";
import logofolio from "./fakeDataImg/logofolio.png";
import photonic from "./fakeDataImg/photonic.png";
import selectione from "./fakeDataImg/selecione.png";
import yuva from "./fakeDataImg/yuva.png";
export const fakeDataObject = [
  {
    id: "Photonic",
    Image: photonic,
    type: "Branding",
    title: 'Photonic "Branding"',
    projectLink: "proasdsdjectThree"
  },
  {
    id: "Illumines",
    Image: illumines,
    type: "Branding",
    title: "Illumines Branding",
    projectLink: "prsddojectThree"
  },
  {
    id: "Building",
    Image: building,
    type: "Service Design",
    title: "Building Branding",
    projectLink: "projecsdstThree"
  },
  {
    id: "Ddk",
    Image: ddk,
    type: "Design Logo",
    title: "Ddk Branding",
    projectLink: "projectThreeDaniel"
  },
  {
    id: "Logofolio",
    Image: logofolio,
    type: "Designe Product",
    title: "Logofiolio Branding",
    projectLink: "salcmf"
  },
  {
    id: "Hyperio",
    Image: hyprio,
    type: "UX Design",
    title: "Hyperio Design",
    projectLink: "blabla"
  },
  {
    id: "Selectione",
    Image: selectione,
    type: "UI Design",
    title: "Selectione Design",
    projectLink: "projectTwo"
  },
  {
    id: "Yuva",
    Image: yuva,
    type: "Web Design",
    title: "Yuva Design",
    projectLink: "projectThree"
  }
];

export const fakedata = JSON.stringify(fakeDataObject);
