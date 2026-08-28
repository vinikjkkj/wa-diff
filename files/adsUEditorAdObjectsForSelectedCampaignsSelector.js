__d(
  "adsUEditorAdObjectsForSelectedCampaignsSelector",
  [
    "adsCreateSelector",
    "adsUEditorAdObjectsLoadObjectForSelectedCampaignsSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [r("adsUEditorAdObjectsLoadObjectForSelectedCampaignsSelector")],
        function (t) {
          return t.isDone() && t.hasValue() ? t.getValueEnforcing() : [];
        },
        { name: i.id + ".adsUEditorAdObjectsForSelectedCampaignsSelector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
