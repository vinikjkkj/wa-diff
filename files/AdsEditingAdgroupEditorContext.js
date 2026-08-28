__d(
  "AdsEditingAdgroupEditorContext",
  [
    "AdsEditingAdgroupContext",
    "AdsUEditorContextFactory",
    "adsMgmtAdgroupSelectedIdsSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = o("AdsUEditorContextFactory").getForIDsSelector(
        r("AdsEditingAdgroupContext"),
        o("adsMgmtAdgroupSelectedIdsSelector")
          .adsMgmtAdgroupSelectedIdsSelector,
        i.id,
      ),
      s = e;
    l.default = s;
  },
  98,
);
