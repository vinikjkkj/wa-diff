__d(
  "isFacebookSVDomainURI",
  ["FBDomainsSVConfig.experimental"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["http", "https"];
    function s(t) {
      if (e.indexOf(t.getProtocol()) === -1) return !1;
      var n = r("FBDomainsSVConfig.experimental").domains[t.getDomain()];
      return n != null;
    }
    l.default = s;
  },
  98,
);
