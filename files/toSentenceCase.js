__d(
  "toSentenceCase",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      if (e == null) return "";
      var t = e.split(" "),
        n = "" + t[0].charAt(0).toUpperCase() + t[0].substring(1).toLowerCase();
      return t.length === 1
        ? n
        : n.concat(
            " ",
            t
              .slice(1)
              .map(function (e) {
                return e.toLowerCase();
              })
              .join(" "),
          );
    }
    i.default = e;
  },
  66,
);
