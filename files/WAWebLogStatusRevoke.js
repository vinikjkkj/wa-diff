__d(
  "WAWebLogStatusRevoke",
  [
    "WAWebStatusLoggingUtils",
    "WAWebStatusRevokeWamEvent",
    "WAWebUnifiedSession",
    "WAWebWamMsgUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = yield o("WAWebStatusLoggingUtils").statusIdForLogging(e),
            r = Date.now() - e.t * 1e3,
            a = new (o("WAWebStatusRevokeWamEvent").StatusRevokeWamEvent)({
              mediaType: o("WAWebWamMsgUtils").getWamMediaType(e),
              statusId: n,
              statusLifeT: r,
              unifiedSessionId:
                (t = o(
                  "WAWebUnifiedSession",
                ).UnifiedSessionManager.getSessionId()) != null
                  ? t
                  : void 0,
            });
          a.commit();
        })),
        s.apply(this, arguments)
      );
    }
    l.logStatusRevoke = e;
  },
  98,
);
