__d(
  "adsUEditorSelectedAdgroupsSelector",
  ["adsCreateStoreSelector"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateStoreSelector")(
        function (e) {
          var t = e.selectedAdgroupsSelector;
          return t.getStores();
        },
        function (t) {
          var e = t.selectedAdgroupsSelector;
          return e();
        },
        {
          isGetStoresPure: !0,
          name: i.id + ".adsUEditorSelectedAdgroupsSelector",
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
