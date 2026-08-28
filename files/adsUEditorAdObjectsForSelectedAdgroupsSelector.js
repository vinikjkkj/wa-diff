__d(
  "adsUEditorAdObjectsForSelectedAdgroupsSelector",
  [
    "adsCreateSelector",
    "adsUEditorAdObjectsLoadObjectForSelectedAdgroupsSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [r("adsUEditorAdObjectsLoadObjectForSelectedAdgroupsSelector")],
        function (t) {
          return t.isDone() && t.hasValue() ? t.getValueEnforcing() : [];
        },
        { name: i.id + ".adsUEditorAdObjectsForSelectedAdgroupsSelector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
