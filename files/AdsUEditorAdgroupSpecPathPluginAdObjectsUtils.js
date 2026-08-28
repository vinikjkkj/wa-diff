__d(
  "AdsUEditorAdgroupSpecPathPluginAdObjectsUtils",
  ["AdsAdgroupSpecPathPluginResolver", "AdsUEditorCampaignAdObjectsUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return r("AdsAdgroupSpecPathPluginResolver").resolve(s(e));
    }
    function s(e) {
      return o("AdsUEditorCampaignAdObjectsUtils").getCommonPivots(e);
    }
    ((l.getAdgroupSpecPathPlugin = e), (l.getAdgroupSpecPathPluginPivots = s));
  },
  98,
);
