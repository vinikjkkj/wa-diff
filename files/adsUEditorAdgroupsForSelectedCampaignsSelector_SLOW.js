__d(
  "adsUEditorAdgroupsForSelectedCampaignsSelector_SLOW",
  [
    "LoadObject",
    "adsCreateSelector",
    "adsCreateStoreSelector",
    "adsUEditorSlowSelectorsLogging",
    "shallowArrayEqual",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateStoreSelector")(
        function (e) {
          var t = e.adgroupsForSelectedCampaignsSelector;
          return t.getStores();
        },
        function (t) {
          var e = t.adgroupsForSelectedCampaignsSelector;
          return o(
            "adsUEditorSlowSelectorsLogging",
          ).checkAndLogAdgroupLoadObject(e());
        },
        {
          name:
            i.id +
            ".adsUEditorAdgroupsForSelectedCampaignsSelector_SLOWUncached",
        },
      ),
      s = r("adsCreateSelector")(
        [e],
        function (t) {
          return t;
        },
        {
          equal: function (t, n) {
            return r("LoadObject").equals(t, n, r("shallowArrayEqual"));
          },
          name: i.id + ".adsUEditorAdgroupsForSelectedCampaignsSelector_SLOW",
        },
      ),
      u = s;
    l.default = u;
  },
  98,
);
