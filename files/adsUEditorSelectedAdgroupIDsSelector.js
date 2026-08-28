__d(
  "adsUEditorSelectedAdgroupIDsSelector",
  ["adsCreateStoreSelector"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateStoreSelector")(
        function (e) {
          var t = e.selectedAdgroupIDsSelector;
          return t.getStores();
        },
        function (t) {
          var e = t.selectedAdgroupIDsSelector;
          return e();
        },
        { isGetStoresPure: !0, name: i.id + ".selector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
