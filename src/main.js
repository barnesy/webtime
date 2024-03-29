import NavList from "./components/NavList";
import Logo from "./components/Logo";
import FooterLogo from "./components/FooterLogo";
import FooterLeft from "./components/FooterLeft";
import FooterNavList from "./components/FooterNavList";
import CallToAction from "./components/CallToAction";
import Animation from "./components/Animation";

import {  Button,
          Card,
          CardGroup,
          Directory,
          Leaf,
          PageSection,
          Split,
          Header,
          PullQuote,
          Callout,
          GridItem,
          GridRow,
          Navigation,
          Footer,
          MultiColumn,
          Column,
          Table,
          Figure
}
// from '../../parts/lib';
from 'webtime-blocks';

import "~/assets/global.scss";

export default function(Vue, { router, head, isClient }) {
  Vue.component('Logo', Logo);
  Vue.component('NavList', NavList);
  Vue.component('FooterLogo', FooterLogo);
  Vue.component('FooterNavList', FooterNavList);
  Vue.component('FooterLeft', FooterLeft);
  Vue.component('CallToAction', CallToAction);
  Vue.component('Animation', Animation);
  Vue.component('Button', Button);
  Vue.component('Navigation', Navigation);
  Vue.component('Logo', Logo);
  Vue.component('Card', Card);
  Vue.component('CardGroup', CardGroup);
  Vue.component('Split', Split);
  Vue.component('Header', Header);
  Vue.component('PullQuote', PullQuote);
  Vue.component('Callout', Callout);
  Vue.component('GridItem', GridItem);
  Vue.component('GridRow', GridRow);
  Vue.component('Directory', Directory);
  Vue.component('Leaf', Leaf);
  Vue.component('PageSection', PageSection);
  Vue.component('Footer', Footer);
  Vue.component('MultiColumn', MultiColumn);
  Vue.component('Column', Column);
  Vue.component('Table', Table);
  Vue.component('Figure', Figure);
}