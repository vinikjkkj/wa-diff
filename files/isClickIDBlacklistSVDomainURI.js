__d(
  "isClickIDBlacklistSVDomainURI",
  ["ClickIDDomainBlacklistSVConfig.experimental"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["http", "https"];
    function s(t) {
      return e.includes(t.getProtocol())
        ? r("ClickIDDomainBlacklistSVConfig.experimental").domains.some(
            function (e) {
              if (t.isSubdomainOfDomain(e)) return !0;
              if (!e.includes(".")) {
                var n = t.getDomain().split(".");
                return n.includes(e);
              }
              return !1;
            },
          )
        : !1;
    }
    i.exports = s;
  },
  34,
);
