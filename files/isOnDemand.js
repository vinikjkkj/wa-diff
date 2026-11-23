__d(
  "isOnDemand",
  ["URI"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = /(^|\.)(od[0-9]+\.\w{4}|\d{4,}\.od|my-od\.|my-od-[0-9]\.)/;
    function u() {
      var t = (e || (e = r("URI"))).getRequestURI().getDomain();
      return s.test(t);
    }
    l.isOnDemand = u;
  },
  98,
);
