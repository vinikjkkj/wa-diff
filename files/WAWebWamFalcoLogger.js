__d(
  "WAWebWamFalcoLogger",
  [
    "WALogger",
    "WAWebCanonicalWamFalcoBuffer",
    "WAWebFalcoEventQueue",
    "WAWebWamFalcoABProps",
    "WAWebWamFalcoGlobalFields",
    "WAWebWamFalcoModes",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e) {
      return (
        e === o("WAWebWamFalcoModes").FALCO_MODE_SHADOW_LOGGING ||
        e === o("WAWebWamFalcoModes").FALCO_MODE_SHADOW_LOGGING_SAMPLED ||
        e === o("WAWebWamFalcoModes").FALCO_MODE_SHADOW_LOGGING_FULL
      );
    }
    function c(e) {
      return (
        e === o("WAWebWamFalcoModes").FALCO_MODE_DOUBLE_LOGGING_WAM_SAMPLING ||
        e === o("WAWebWamFalcoModes").FALCO_MODE_SHADOW_LOGGING
      );
    }
    function d(e) {
      if (o("WAWebWamFalcoABProps").shouldBufferFalcoEvent()) {
        o("WAWebCanonicalWamFalcoBuffer").bufferCanonicalFalcoEvent(e);
        return;
      }
      o("WAWebFalcoEventQueue").enqueueFalcoEvent(e);
    }
    function m(e) {
      var t = e.getFieldsMapForFalco();
      return t == null
        ? null
        : babelHelpers.extends(
            {},
            o("WAWebWamFalcoGlobalFields").getCanonicalFieldsForFalco(),
            t,
          );
    }
    function p(e) {
      if (
        o("WAWebWamFalcoABProps").getWamFalcoMode() ===
          o("WAWebWamFalcoModes").FALCO_MODE_SHADOW_LOGGING &&
        o("WAWebWamFalcoABProps").getShadowLoggingEventIds().has(e.id) &&
        "traceIdInt" in e
      ) {
        var t = new Uint32Array(2);
        self.crypto.getRandomValues(t);
        var n = (t[1] % 2097152) * 4294967296 + t[0];
        e.set({ traceIdInt: n });
      }
    }
    function _(e, t, n) {
      var r = Date.now();
      e: {
        if (
          e === o("WAWebWamFalcoModes").FALCO_MODE_DOUBLE_LOGGING_WAM_SAMPLING
        ) {
          d({ name: "_test$" + t, fields: n, timestamp: r });
          break e;
        }
        if (e === o("WAWebWamFalcoModes").FALCO_MODE_SHADOW_LOGGING) {
          d({ name: t + "_shadow", fields: n, timestamp: r });
          break e;
        }
        if (e === o("WAWebWamFalcoModes").FALCO_MODE_SHADOW_LOGGING_SAMPLED) {
          d({ name: t + "_shadow_sampled", fields: n, timestamp: r });
          break e;
        }
        if (e === o("WAWebWamFalcoModes").FALCO_MODE_SHADOW_LOGGING_FULL) {
          (d({ name: t + "_shadow_sampled", fields: n, timestamp: r }),
            d({ name: t + "_shadow", fields: n, timestamp: r }));
          break e;
        }
        if (e === o("WAWebWamFalcoModes").FALCO_MODE_FALCO_ONLY) {
          d({ name: t, fields: n, timestamp: r });
          break e;
        }
        return;
      }
    }
    function f(t, n) {
      try {
        p(t);
        var a = o("WAWebWamFalcoABProps").getWamFalcoMode();
        if (
          (c(a) && n) ||
          (u(a) &&
            !o("WAWebWamFalcoABProps").getShadowLoggingEventIds().has(t.id))
        )
          return;
        var i = t.getEventNameForFalco(),
          l = m(t);
        if (i == null || l == null) {
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[falco] bridge: missing event name or fields, dropping",
                ])),
            )
            .sendLogs("wam_falco_bridge_missing_fields", { sampling: 0.1 });
          return;
        }
        _(a, i, l);
      } catch (e) {
        o("WALogger")
          .WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[falco] bridge: failed to log event",
              ])),
          )
          .catching(r("getErrorSafe")(e))
          .sendLogs("wam_falco_bridge_error", { sampling: 0.1 });
      }
    }
    function g() {
      (o("WAWebCanonicalWamFalcoBuffer").flushCanonicalWamFalcoBuffer(),
        o("WAWebFalcoEventQueue").drainFalcoQueue());
    }
    ((l.maybeSetTraceIdForShadowLogging = p),
      (l.logEventToFalcoBridge = f),
      (l.flushFalcoForLogout = g));
  },
  98,
);
