__d(
  "adsStoreToSelector",
  ["adsCreateStoreSelector"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.__selector;
      return (
        t ||
          ((t = r("adsCreateStoreSelector")(
            [e],
            function () {
              return e.getState();
            },
            { name: "toSelector(" + (e.__moduleID || "unknown") + ")" },
          )),
          (e.__selector = t)),
        t
      );
    }
    l.default = e;
  },
  98,
);
