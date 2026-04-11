__d(
  "WAWebWamFalcoLogger",
  [
    "FalcoLoggerInternal",
    "WALogger",
    "WAWebWamFalcoABProps",
    "WAWebWamFalcoGlobalFields",
    "WAWebWamFalcoModes",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      var t = o("WAWebWamFalcoABProps").getWamFalcoMode();
      if (t === o("WAWebWamFalcoModes").FALCO_MODE_SHADOW_LOGGING) {
        var n = o("WAWebWamFalcoABProps").getShadowLoggingEventIds();
        if (n.has(e.id) && "traceIdInt" in e) {
          var r = new Uint32Array(1);
          (self.crypto.getRandomValues(r), e.set({ traceIdInt: r[0] }));
        }
      }
    }
    function u(t, n) {
      try {
        var r = o("WAWebWamFalcoABProps").getWamFalcoMode();
        if (
          r !==
            o("WAWebWamFalcoModes").FALCO_MODE_DOUBLE_LOGGING_WAM_SAMPLING &&
          r !== o("WAWebWamFalcoModes").FALCO_MODE_SHADOW_LOGGING
        )
          return;
        if (r === o("WAWebWamFalcoModes").FALCO_MODE_SHADOW_LOGGING) {
          var a = o("WAWebWamFalcoABProps").getShadowLoggingEventIds();
          if (!a.has(t.id)) return;
        }
        var i = t.getEventNameForFalco(),
          l = t.getFieldsMapForFalco();
        if (i == null || l == null) return;
        var s = o("WAWebWamFalcoGlobalFields").getCanonicalFieldsForFalco(),
          u = babelHelpers.extends({}, s, l),
          c =
            r === o("WAWebWamFalcoModes").FALCO_MODE_SHADOW_LOGGING
              ? i + "_shadow"
              : "_test$" + i,
          d = o("FalcoLoggerInternal").create(c, { r: 1 });
        d.log(function () {
          return u;
        });
      } catch (t) {
        o("WALogger")
          .WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[wam] Failed to log to Falco",
              ])),
          )
          .sendLogs("wam_falco_bridge_error", { sampling: 0.001 });
      }
    }
    ((l.maybeSetTraceIdForShadowLogging = s), (l.logEventToFalcoBridge = u));
  },
  98,
);
