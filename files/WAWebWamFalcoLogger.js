__d(
  "WAWebWamFalcoLogger",
  [
    "WALogger",
    "WAWebCanonicalWamFalcoBuffer",
    "WAWebFalcoEventQueue",
    "WAWebWamFalcoABProps",
    "WAWebWamFalcoGlobalFields",
    "WAWebWamFalcoModes",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      return (
        e === o("WAWebWamFalcoModes").FALCO_MODE_SHADOW_LOGGING ||
        e === o("WAWebWamFalcoModes").FALCO_MODE_SHADOW_LOGGING_SAMPLED ||
        e === o("WAWebWamFalcoModes").FALCO_MODE_SHADOW_LOGGING_FULL
      );
    }
    function u(e) {
      return (
        e === o("WAWebWamFalcoModes").FALCO_MODE_DOUBLE_LOGGING_WAM_SAMPLING ||
        e === o("WAWebWamFalcoModes").FALCO_MODE_SHADOW_LOGGING
      );
    }
    function c(e) {
      if (o("WAWebWamFalcoABProps").shouldBufferFalcoEvent()) {
        o("WAWebCanonicalWamFalcoBuffer").bufferCanonicalFalcoEvent(e);
        return;
      }
      o("WAWebFalcoEventQueue").enqueueFalcoEvent(e);
    }
    function d(e) {
      var t = e.getFieldsMapForFalco();
      return t == null
        ? null
        : babelHelpers.extends(
            {},
            o("WAWebWamFalcoGlobalFields").getCanonicalFieldsForFalco(),
            t,
          );
    }
    function m(e) {
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
    function p(e, t, n) {
      var r = Date.now();
      e: {
        if (
          e === o("WAWebWamFalcoModes").FALCO_MODE_DOUBLE_LOGGING_WAM_SAMPLING
        ) {
          c({ name: "_test$" + t, fields: n, timestamp: r });
          break e;
        }
        if (e === o("WAWebWamFalcoModes").FALCO_MODE_SHADOW_LOGGING) {
          c({ name: t + "_shadow", fields: n, timestamp: r });
          break e;
        }
        if (e === o("WAWebWamFalcoModes").FALCO_MODE_SHADOW_LOGGING_SAMPLED) {
          c({ name: t + "_shadow_sampled", fields: n, timestamp: r });
          break e;
        }
        if (e === o("WAWebWamFalcoModes").FALCO_MODE_SHADOW_LOGGING_FULL) {
          (c({ name: t + "_shadow_sampled", fields: n, timestamp: r }),
            c({ name: t + "_shadow", fields: n, timestamp: r }));
          break e;
        }
        if (e === o("WAWebWamFalcoModes").FALCO_MODE_FALCO_ONLY) {
          c({ name: t, fields: n, timestamp: r });
          break e;
        }
        return;
      }
    }
    function _(t, n) {
      try {
        m(t);
        var r = o("WAWebWamFalcoABProps").getWamFalcoMode();
        if (
          (u(r) && n) ||
          (s(r) &&
            !o("WAWebWamFalcoABProps").getShadowLoggingEventIds().has(t.id))
        )
          return;
        var a = t.getEventNameForFalco(),
          i = d(t);
        if (a == null || i == null) return;
        p(r, a, i);
      } catch (t) {
        o("WALogger")
          .WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[falco] bridge: failed to log event",
              ])),
          )
          .sendLogs("wam_falco_bridge_error", { sampling: 0.1 });
      }
    }
    ((l.maybeSetTraceIdForShadowLogging = m), (l.logEventToFalcoBridge = _));
  },
  98,
);
