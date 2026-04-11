__d(
  "isMailToUrl",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = new RegExp("mailto:.*@.*");
    function l(t) {
      return e.test(t);
    }
    i.default = l;
  },
  66,
);
