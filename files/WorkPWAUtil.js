__d(
  "WorkPWAUtil",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = function () {
      return (
        typeof window.matchMedia == "function" &&
        window.matchMedia("(display-mode: minimal-ui)").matches
      );
    };
    i.isBrowserPWA = e;
  },
  66,
);
