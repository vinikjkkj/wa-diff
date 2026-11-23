__d(
  "SYDNUOTaskSelector",
  [
    "AdsAccountStore",
    "AdsDMLQueryHandler_DerivedDataBase",
    "AdsSYDNUOProvider",
    "LoadObject",
    "adsCreateSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [
          r("AdsAccountStore").getSelectedAccountID,
          r("AdsSYDNUOProvider").toFluxSelector(),
        ],
        function (t, n) {
          if (t != null) {
            var e = n.get(t);
            if (e.hasValueWithoutError()) return e;
          }
          return r("LoadObject").loading({ creatorModuleID: i.id });
        },
        { name: i.id + ".SYDNUOTaskSelector" },
      ),
      s = o("AdsDMLQueryHandler_DerivedDataBase").modularLoader(function (t) {
        return e.getStores(t);
      }, e);
    ((l.SYDNUOTaskSelector = e), (l.dmlSYDNUOTaskSelector = s));
  },
  98,
);
