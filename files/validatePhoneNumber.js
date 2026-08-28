__d(
  "validatePhoneNumber",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      var n = t != null ? t : 7;
      return (
        /^[+]?[0-9()\s-.#]{7,25}$/.test(e) &&
        e.replace(/[^0-9]/g, "").length >= n
      );
    }
    i.default = e;
  },
  66,
);
