__d(
  "getMDSIconColorCometFallback",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      "mds-accent": "primaryAccent",
      "mds-destructive": "negative",
      "mds-inactive": "disabled",
      "mds-nux": "tertiary",
      "mds-selected": "primary",
      primary: "primary",
      secondary: "secondary",
      tertiary: "tertiary",
      white: "white",
    };
    function l(t) {
      switch (t) {
        case "active-tab":
          return "primaryAccent";
        case "inactive-tab":
          return "secondary";
        case "none":
          return;
        case "mds-accent":
        case "mds-destructive":
        case "mds-inactive":
        case "mds-nux":
        case "mds-selected":
          return e[t];
        default:
          return t;
      }
    }
    ((i.MDSFallbackTypes = e), (i.getMDSIconColorCometFallback = l));
  },
  66,
);
