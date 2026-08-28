__d(
  "adsUEditorAccountSelector",
  ["adsCreateStoreSelector"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateStoreSelector")(
        function (e) {
          var t = e.selectedAdAccountSelector;
          return t.getStores();
        },
        function (t) {
          var e = t.selectedAdAccountSelector;
          return e();
        },
        { isGetStoresPure: !0, name: i.id + ".selector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
