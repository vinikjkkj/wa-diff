__d(
  "adsUEditorBlockListAccountListSelector",
  [
    "AdsAccountStore",
    "AdsAdAccountPublisherBlockListsProvider",
    "adsCreateSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [],
      s = r("adsCreateSelector")(
        [
          r("AdsAccountStore").getSelectedAccountID,
          r("AdsAdAccountPublisherBlockListsProvider").toFluxSelector(),
        ],
        function (n, r) {
          var t;
          return n != null && (t = r.get(n).getValue()) != null ? t : e;
        },
        { name: i.id + ".adsUEditorBlockListAccountListSelector" },
      ),
      u = s;
    l.default = u;
  },
  98,
);
