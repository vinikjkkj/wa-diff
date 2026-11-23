__d(
  "WAWebLogStatusRevoke",
  [
    "WAWebStatusLoggingUtils",
    "WAWebStatusRevokeWamEvent",
    "WAWebUnifiedSession",
    "WAWebWamMsgUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    async function e(e) {
      var t,
        n = await o("WAWebStatusLoggingUtils").statusIdForLogging(e),
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
    }
    l.logStatusRevoke = e;
  },
  98,
);
