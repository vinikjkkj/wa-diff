__d(
  "WAWebABPropsGlobals",
  [
    "WAWebABProps",
    "WAWebABPropsExpoKeyUtils",
    "WAWebCanonicalUtils",
    "WAWebDebounce",
    "WAWebNetworkStatus",
    "WAWebWamGlobals",
    "WAWebWefrClientExposureWamEvent",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 1e3,
      s = new Set(),
      u = new Set(),
      c = "";
    function d() {
      if (
        o("WAWebABProps").getABPropConfigValue("wam_disable_expokey_attribute")
      )
        o("WAWebWamGlobals").Global.set({ expoKey: null });
      else {
        var e = o("WAWebABPropsExpoKeyUtils").combineExposuresIntoExpoKey(u);
        (c !== e && (f(e), (c = e)),
          o("WAWebWamGlobals").Global.set({ expoKey: e }));
      }
    }
    function m(e) {
      e != null && o("WAWebWamGlobals").Global.set({ abKey2: e });
    }
    function p(e) {
      r("justknobx")._("1964")
        ? r("WAWebNetworkStatus")
            .waitIfOffline()
            .then(function () {
              new (o(
                "WAWebWefrClientExposureWamEvent",
              ).WefrClientExposureWamEvent)(e).commit();
            })
        : new (o("WAWebWefrClientExposureWamEvent").WefrClientExposureWamEvent)(
            e,
          ).commit();
    }
    function _() {
      var e = o("WAWebABPropsExpoKeyUtils").combineExposuresIntoExpoKey(u);
      p({
        exposureKey: e,
        sentWithDaily: !0,
        isCanonicalEntPresent: o("WAWebCanonicalUtils").isCanonicalPresent(),
      });
    }
    var f = r("WAWebDebounce")(function (e) {
      p({
        exposureKey: e,
        sentWithDaily: !1,
        isCanonicalEntPresent: o("WAWebCanonicalUtils").isCanonicalPresent(),
      });
    }, e);
    ((l.CLIENT_EXPOSURE_PULSE_DEBOUNCE_MS = e),
      (l.accessedConfigs = s),
      (l.exposureKeys = u),
      (l.updateGlobalExpoKey = d),
      (l.updateGlobalABKey = m),
      (l.logClientExposurePulseEventFromDailyStatsTask = _));
  },
  98,
);
