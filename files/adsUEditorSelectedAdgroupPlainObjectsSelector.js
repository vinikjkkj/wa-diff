__d(
  "adsUEditorSelectedAdgroupPlainObjectsSelector",
  ["adsCreateStoreSelector"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateStoreSelector")(
        function (e) {
          var t = e.selectedAdgroupPlainObjectsSelector;
          return t.getStores();
        },
        function (t) {
          var e = t.selectedAdgroupPlainObjectsSelector;
          return e();
        },
        {
          isGetStoresPure: !0,
          name: i.id + ".adsUEditorSelectedAdgroupPlainObjectsSelector",
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
