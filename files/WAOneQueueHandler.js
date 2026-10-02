__d(
  "WAOneQueueHandler",
  ["WAGlobals", "WAHandleDecisionTreeResult", "WATimeUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return function (t, n) {
        var r = {
          offline: t.attrs.offline ? parseInt(t.attrs.offline, 10) : null,
          serverTs: t.attrs.t
            ? o("WATimeUtils").castToUnixTime(parseInt(t.attrs.t, 10))
            : null,
          tag: t.tag,
        };
        return o("WAGlobals")
          .getWaOneQueue()
          .handleStanza(function (r) {
            return o("WAHandleDecisionTreeResult").handleDecisionTreeResult(
              t,
              e(t, n, r),
            );
          }, r);
      };
    }
    l.handleWithOneQueue = e;
  },
  98,
);
