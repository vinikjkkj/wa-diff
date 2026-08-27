__d(
  "LWICometClientSpecUtil",
  ["Base64"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e != null ? r("Base64").decode(e) : "{}";
      return JSON.parse(t);
    }
    l.getDecodedClientSpec = e;
  },
  98,
);
