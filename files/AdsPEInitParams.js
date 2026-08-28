__d(
  "AdsPEInitParams",
  ["Promise"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e,
      l,
      s = new (e || (e = n("Promise")))(function (e) {
        l = e;
      });
    function u(e) {
      l(e);
    }
    function c() {
      return s;
    }
    ((i.setInitParams = u), (i.getInitParamsPromise = c));
  },
  66,
);
