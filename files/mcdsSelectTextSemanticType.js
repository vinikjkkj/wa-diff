__d(
  "mcdsSelectTextSemanticType",
  [],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      if (e == null) return "body";
      switch (e) {
        case "inherit":
        case "title-large":
        case "title-large-emphasized":
        case "title-small":
        case "title-small-emphasized":
        case "mcds_title_large":
        case "mcds_title_large_emphasized":
        case "mcds_title_small":
        case "mcds_title_small_emphasized":
        case "mcds-large-body":
        case "mcds-large-body-emphasized":
        case "mcds-small-body":
        case "mcds-small-body-emphasized":
        case "mcds-label":
        case "mcds-label-emphasized":
        case "mcds-cta":
        case "mcds-micro-text":
        case "mcds-micro-text-emphasized":
        case "mcds-nav-link":
          return "body";
        case "heading1":
          return "heading1";
        case "heading2":
        case "heading2-emphasized":
          return "heading2";
        case "heading3":
          return "heading3";
        case "heading4":
          return "heading4";
        case "heading5":
        case "heading5-deemphasized":
        case "heading5-emphasized":
          return "heading5";
        case "heading6":
        case "heading6-emphasized":
          return "heading6";
        case "mcds_h1":
          return "heading1";
        case "mcds_h2":
          return "heading2";
        case "mcds_h3":
          return "heading3";
      }
    }
    l.default = e;
  },
  98,
);
