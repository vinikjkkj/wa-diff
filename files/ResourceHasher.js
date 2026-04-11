__d(
  "ResourceHasher",
  ["invariant"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = "placeholder",
      u = 0;
    function c(e) {
      return "async:" + e;
    }
    function d() {
      return "ejs:" + u++;
    }
    function m(e) {
      return (typeof e == "string" || s(0, 19551, e), e);
    }
    ((l.PLACEHOLDER = e),
      (l.getAsyncHash = c),
      (l.createExternalJSHash = d),
      (l.getValidResourceHash = m));
  },
  98,
);
