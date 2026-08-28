__d(
  "mcdsSelectTextRootElement",
  [],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      switch (e) {
        case "heading1":
          return "h1";
        case "heading2":
          return "h2";
        case "heading3":
          return "h3";
        case "heading4":
          return "h4";
        case "heading5":
          return "h5";
        case "heading6":
          return "h6";
        case "body":
          return t === "inline" ? "span" : n ? "p" : "div";
      }
    }
    l.default = e;
  },
  98,
);
