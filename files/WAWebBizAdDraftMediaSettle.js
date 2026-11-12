__d(
  "WAWebBizAdDraftMediaSettle",
  ["WAPromiseDelays", "asyncToGeneratorRuntime", "justknobx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 3e4,
      s = 100;
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = function () {
              var e;
              return (
                ((e = t.mediaRestorePendingRef) == null
                  ? void 0
                  : e.current) === !0
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
              ? d(o, Date.now() + e)
              : !n()
            : !0;
        })),
        c.apply(this, arguments)
      );
    }
    function d(e, t) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return (
            yield o("WAPromiseDelays").delayMs(s),
            e() ? (Date.now() < t ? d(e, t) : !1) : !0
          );
        })),
        m.apply(this, arguments)
      );
    }
    ((l.DRAFT_MEDIA_SETTLE_TIMEOUT_MS = e), (l.waitForDraftMediaToSettle = u));
  },
  98,
);
