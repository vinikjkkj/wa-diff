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
          var r = new Uint32Array(2);
          self.crypto.getRandomValues(r);
          var a = (r[1] % 2097152) * 4294967296 + r[0];
          e.set({ traceIdInt: a });
        }
      }
    }
    function u(e) {
      return e === 0 ? 1 : Math.abs(e);
    }
    function c(t, n) {
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
          c = babelHelpers.extends({}, s, l),
          d =
            r === o("WAWebWamFalcoModes").FALCO_MODE_SHADOW_LOGGING
              ? i + "_shadow"
              : "_test$" + i,
          m = o("FalcoLoggerInternal").create(d, { r: 1, w: u(n) });
        m.log(function () {
          return c;
        });
      } catch (t) {
        o("WALogger")
          .WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[wam] Failed to log to Falco",
              ])),
          )
          .sendLogs("wam_falco_bridge_error", { sampling: 0.1 });
      }
    }
    ((l.maybeSetTraceIdForShadowLogging = s),
      (l.getFalcoServerWeight = u),
      (l.logEventToFalcoBridge = c));
  },
  98,
);
