__d(
  "hasMultipleTabs",
  ["BrowserLockManager", "FBLogger", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "multiple_tab_lock";
    async function s(t) {
      t === void 0 && (t = !0);
      try {
        if (r("BrowserLockManager")) {
          var n = await r("BrowserLockManager").query(),
            o =
              n.held.filter(function (t) {
                return t.name === e;
              }).length +
              n.pending.filter(function (t) {
                return t.name === e;
              }).length;
          return (t || o++, o > 1);
        }
        return;
      } catch (e) {
        r("FBLogger")("messenger_web")
          .catching(r("getErrorSafe")(e))
          .warn("[MultipleTabsLogger] Fail to query lock manager");
        return;
      }
    }
    ((l.MULTIPLE_TAB_LOCK_NAME = e), (l.hasMultipleTabs = s));
  },
  98,
);
