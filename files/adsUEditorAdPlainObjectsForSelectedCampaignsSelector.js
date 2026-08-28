__d(
  "adsUEditorAdPlainObjectsForSelectedCampaignsSelector",
  [
    "adsCreateSelector",
    "adsUEditorAdObjectsPlainLoadObjectForSelectedCampaignsSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [r("adsUEditorAdObjectsPlainLoadObjectForSelectedCampaignsSelector")],
        function (t) {
          return t.isDone() && t.hasValue() ? t.getValueEnforcing() : [];
        },
        {
          name: i.id + ".adsUEditorAdPlainObjectsForSelectedCampaignsSelector",
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
