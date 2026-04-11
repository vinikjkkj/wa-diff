__d(
  "WAWebGroupABPropsGlobals",
  [
    "WAWebABPropsExpoKeyUtils",
    "WAWebClientExposureGatingUtils",
    "WAWebDebounce",
    "WAWebNetworkStatus",
    "WAWebWefrGroupClientExposureWamEvent",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 1e3,
      s = new Map(),
      u = new Map();
    function c(e) {
      if (
        o("WAWebClientExposureGatingUtils").clientExposurePulseLoggingEnabled()
      ) {
        var t = s.get(e);
        if (!(t == null || t.size === 0)) {
          var n = o("WAWebABPropsExpoKeyUtils").combineExposuresIntoExpoKey(t),
            r = u.get(e);
          r !== n && (f(e, n), u.set(e, n));
        }
      }
    }
    function d(e) {
      r("justknobx")._("1964")
        ? r("WAWebNetworkStatus")
            .waitIfOffline()
            .then(function () {
              new (o(
                "WAWebWefrGroupClientExposureWamEvent",
              ).WefrGroupClientExposureWamEvent)(e).commit();
            })
        : new (o(
            "WAWebWefrGroupClientExposureWamEvent",
          ).WefrGroupClientExposureWamEvent)(e).commit();
    }
    function m() {
      if (
        o("WAWebClientExposureGatingUtils").clientExposurePulseLoggingEnabled()
      )
        for (var e of s) {
          var t = e[0],
            n = e[1];
          if (n.size !== 0) {
            var r = o("WAWebABPropsExpoKeyUtils").combineExposuresIntoExpoKey(
              n,
            );
            d({ exposureKey: r, groupJid: t, sentWithDaily: !0 });
          }
        }
    }
    var p = new Map();
    function _(t) {
      var n = p.get(t);
      return (
        n == null &&
          ((n = r("WAWebDebounce")(function (e, t) {
            d({ exposureKey: t, groupJid: e, sentWithDaily: !1 });
          }, e)),
          p.set(t, n)),
        n
      );
    }
    function f(e, t) {
      var n = _(e);
      n(e, t);
    }
    ((l.GROUP_EXPOSURE_PULSE_DEBOUNCE_MS = e),
      (l.groupExposureKeys = s),
      (l.updateGroupExpoKey = c),
      (l.logGroupExposurePulseEventFromDailyStatsTask = m));
  },
  98,
);
