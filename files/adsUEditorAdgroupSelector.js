__d(
  "adsUEditorAdgroupSelector",
  ["adsCreateStoreSelector"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateStoreSelector")(
        function (e) {
          return e.adgroupSelector.getStores();
        },
        function (t) {
          var e = t.adgroupID,
            n = t.adgroupSelector;
          return n(e);
        },
        { isGetStoresPure: !0, name: i.id + ".adsUeditorAdgroupSelector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
