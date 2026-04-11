__d(
  "isPromise",
  ["Promise"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e;
    function l(t) {
      return (
        t instanceof (e || (e = n("Promise"))) ||
        typeof (t == null ? void 0 : t.then) == "function"
      );
    }
    i.default = l;
  },
  66,
);
