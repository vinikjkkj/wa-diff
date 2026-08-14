__d(
  "hasMultipleTabs",
  ["BrowserLockManager", "FBLogger", "asyncToGeneratorRuntime", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "multiple_tab_lock";
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          t === void 0 && (t = !0);
          try {
            if (r("BrowserLockManager")) {
              var n = yield r("BrowserLockManager").query(),
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
        })),
        u.apply(this, arguments)
      );
    }
    ((l.MULTIPLE_TAB_LOCK_NAME = e), (l.hasMultipleTabs = s));
  },
  98,
);
