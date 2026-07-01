__d(
  "WAWebWamFalcoLogger",
  [
    "WALogger",
    "WAWebCanonicalWamFalcoBuffer",
    "WAWebFalcoEventQueue",
    "WAWebODS",
    "WAWebWamFalcoABProps",
    "WAWebWamFalcoGlobalFields",
    "WAWebWamFalcoModes",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = !1;
    function c() {
      u ||
        ((u = !0),
        o("WAWebFalcoEventQueue").setCanonicalFieldsProvider(
          o("WAWebWamFalcoGlobalFields").getCanonicalFieldsForFalco,
        ));
    }
    function d(e) {
      return (
        e === o("WAWebWamFalcoModes").FALCO_MODE_SHADOW_LOGGING ||
        e === o("WAWebWamFalcoModes").FALCO_MODE_SHADOW_LOGGING_SAMPLED ||
        e === o("WAWebWamFalcoModes").FALCO_MODE_SHADOW_LOGGING_FULL
      );
    }
    function m(e) {
      return (
        e === o("WAWebWamFalcoModes").FALCO_MODE_DOUBLE_LOGGING_WAM_SAMPLING ||
        e === o("WAWebWamFalcoModes").FALCO_MODE_SHADOW_LOGGING
      );
    }
    function p(e) {
      if (
        (o("WAWebWamFalcoABProps").getWamFalcoMode() ===
          o("WAWebWamFalcoModes").FALCO_MODE_SHADOW_LOGGING &&
          (r("WAWebODS").incr("web.falco.shadow.commit"),
          r("WAWebODS").incr("web.falco.shadow." + e.name + ".commit")),
        o("WAWebWamFalcoABProps").shouldBufferFalcoEvent())
      ) {
        o("WAWebCanonicalWamFalcoBuffer").bufferCanonicalFalcoEvent(e);
        return;
      }
      if (e.critical === !0) {
        o("WAWebFalcoEventQueue").sendFalcoEventsNow([e]);
        return;
      }
      o("WAWebFalcoEventQueue").enqueueFalcoEvent(e);
    }
    function _(e) {
      return e.getFieldsMapForFalco();
    }
    function f(e) {
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
    function g(e, t, n, r) {
      var a = Date.now();
      e: {
        if (
          e === o("WAWebWamFalcoModes").FALCO_MODE_DOUBLE_LOGGING_WAM_SAMPLING
        ) {
          p({ name: "_test$" + t, fields: n, timestamp: a, critical: r });
          break e;
        }
        if (e === o("WAWebWamFalcoModes").FALCO_MODE_SHADOW_LOGGING) {
          p({ name: t + "_shadow", fields: n, timestamp: a, critical: r });
          break e;
        }
        if (e === o("WAWebWamFalcoModes").FALCO_MODE_SHADOW_LOGGING_SAMPLED) {
          p({
            name: t + "_shadow_sampled",
            fields: n,
            timestamp: a,
            critical: r,
          });
          break e;
        }
        if (e === o("WAWebWamFalcoModes").FALCO_MODE_SHADOW_LOGGING_FULL) {
          (p({
            name: t + "_shadow_sampled",
            fields: n,
            timestamp: a,
            critical: r,
          }),
            p({ name: t + "_shadow", fields: n, timestamp: a, critical: r }));
          break e;
        }
        if (e === o("WAWebWamFalcoModes").FALCO_MODE_FALCO_ONLY) {
          p({ name: t, fields: n, timestamp: a, critical: r });
          break e;
        }
        return;
      }
    }
    function h(t, n) {
      try {
        (c(), f(t));
        var a = o("WAWebWamFalcoABProps").getWamFalcoMode();
        if (
          (m(a) && n) ||
          (d(a) &&
            !o("WAWebWamFalcoABProps").getShadowLoggingEventIds().has(t.id))
        )
          return;
        var i = t.getEventNameForFalco(),
          l = _(t);
        if (i == null || l == null) {
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[falco] bridge: missing event name or fields for id: ",
                  " class: ",
                  ", dropping",
                ])),
              t.id,
              t.$className,
            )
            .sendLogs("wam_falco_bridge_missing_fields", { sampling: 0.1 });
          return;
        }
        g(a, i, l, o("WAWebWamFalcoABProps").isCriticalEvent(t.id));
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
    function y() {
      (c(),
        o("WAWebCanonicalWamFalcoBuffer").flushCanonicalWamFalcoBuffer(),
        o("WAWebFalcoEventQueue").drainFalcoQueue());
    }
    ((l.maybeSetTraceIdForShadowLogging = f),
      (l.logEventToFalcoBridge = h),
      (l.flushFalcoForLogout = y));
  },
  98,
);
