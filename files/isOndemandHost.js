__d(
  "isOndemandHost",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = /(^|\.)(od[0-9]+\.\w{4}|\d{4,}\.od|my-od\.|my-od-[0-9]\.)/;
    function l(t) {
      return e.test(t);
    }
    i.default = l;
  },
  66,
);
