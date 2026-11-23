__d(
  "WAWebBizAdDraftMediaSettle",
  ["WAPromiseDelays", "justknobx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 3e4,
      s = 100;
    async function u(t) {
      var n = function () {
          var e;
          return (
            ((e = t.mediaRestorePendingRef) == null ? void 0 : e.current) === !0
          );
        },
        o = function () {
          var e;
          return (
            n() ||
            ((e = t.mediaSettlingRef) == null ? void 0 : e.current) === !0
          );
        };
      return o()
        ? r("justknobx")._("7627")
          ? c(o, Date.now() + e)
          : !n()
        : !0;
    }
    async function c(e, t) {
      return (
        await o("WAPromiseDelays").delayMs(s),
        e() ? (Date.now() < t ? c(e, t) : !1) : !0
      );
    }
    ((l.DRAFT_MEDIA_SETTLE_TIMEOUT_MS = e), (l.waitForDraftMediaToSettle = u));
  },
  98,
);
