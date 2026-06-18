__d(
  "WAWebLabyrinthDebugStateCache",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = null;
    function l(t) {
      e = t;
    }
    function s(t) {
      var n, r, o;
      e != null &&
        (e = babelHelpers.extends({}, e, {
          backupId: (n = t.backupId) != null ? n : e.backupId,
          ebDeviceId: (r = t.ebDeviceId) != null ? r : e.ebDeviceId,
          epochId: (o = t.epochId) != null ? o : e.epochId,
        }));
    }
    function u() {
      return e;
    }
    function c() {
      e = null;
    }
    ((i.setLabyrinthDebugKeyMaterialCache = l),
      (i.updateLabyrinthDebugKeyMaterialCacheIds = s),
      (i.getLabyrinthDebugKeyMaterialCache = u),
      (i.clearLabyrinthDebugKeyMaterialCache = c));
  },
  66,
);
