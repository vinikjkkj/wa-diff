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
      u,
      c,
      d = !1;
    function m() {
      d ||
        ((d = !0),
        o("WAWebFalcoEventQueue").setCanonicalFieldsProvider(
          o("WAWebWamFalcoGlobalFields").getCanonicalFieldsForFalco,
        ));
    }
    function p(e) {
      return (
        e === o("WAWebWamFalcoModes").FALCO_MODE_SHADOW_LOGGING ||
        e === o("WAWebWamFalcoModes").FALCO_MODE_SHADOW_LOGGING_SAMPLED ||
        e === o("WAWebWamFalcoModes").FALCO_MODE_SHADOW_LOGGING_FULL
      );
    }
    function _(e) {
      return (
        e === o("WAWebWamFalcoModes").FALCO_MODE_DOUBLE_LOGGING_WAM_SAMPLING ||
        e === o("WAWebWamFalcoModes").FALCO_MODE_SHADOW_LOGGING
      );
    }
    function f(e) {
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
    function g(e) {
      return e.getFieldsMapForFalco();
    }
    function h(t, n) {
      try {
        if (o("WAWebWamFalcoABProps").isCriticalEvent(t.id)) return !1;
        m();
        var a = g(t);
        return a == null
          ? (o("WALogger")
              .WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[falco] generated logger: missing fields for id: ",
                    " class: ",
                    ", falling back to WAM",
                  ])),
                t.id,
                t.$className,
              )
              .sendLogs("wam_falco_generated_logger_missing_fields", {
                sampling: 0.1,
              }),
            !1)
          : n.log(
              t.id,
              babelHelpers.extends(
                {},
                o("WAWebWamFalcoGlobalFields").getCanonicalFieldsForFalco(),
                a,
              ),
            );
      } catch (e) {
        return (
          o("WALogger")
            .WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[falco] generated logger: failed to log event, falling back to WAM",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("wam_falco_generated_logger_error", { sampling: 0.1 }),
          !1
        );
      }
    }
    function y(e) {
      if (
        o("WAWebWamFalcoABProps").getWamFalcoMode() ===
          o("WAWebWamFalcoModes").FALCO_MODE_SHADOW_LOGGING &&
        o("WAWebWamFalcoABProps").getShadowLoggingEventIds().has(e.id) &&
        e.hasFalcoField("traceIdInt")
      ) {
        var t = new Uint32Array(2);
        self.crypto.getRandomValues(t);
        var n = (t[1] % 2097152) * 4294967296 + t[0];
        e.setFalcoField("traceIdInt", n);
      }
    }
    function C(e, t, n, r) {
      var a = Date.now();
      e: {
        if (
          e === o("WAWebWamFalcoModes").FALCO_MODE_DOUBLE_LOGGING_WAM_SAMPLING
        ) {
          f({ name: "_test$" + t, fields: n, timestamp: a, critical: r });
          break e;
        }
        if (e === o("WAWebWamFalcoModes").FALCO_MODE_SHADOW_LOGGING) {
          f({ name: t + "_shadow", fields: n, timestamp: a, critical: r });
          break e;
        }
        if (e === o("WAWebWamFalcoModes").FALCO_MODE_SHADOW_LOGGING_SAMPLED) {
          f({
            name: t + "_shadow_sampled",
            fields: n,
            timestamp: a,
            critical: r,
          });
          break e;
        }
        if (e === o("WAWebWamFalcoModes").FALCO_MODE_SHADOW_LOGGING_FULL) {
          (f({
            name: t + "_shadow_sampled",
            fields: n,
            timestamp: a,
            critical: r,
          }),
            f({ name: t + "_shadow", fields: n, timestamp: a, critical: r }));
          break e;
        }
        if (e === o("WAWebWamFalcoModes").FALCO_MODE_FALCO_ONLY) {
          f({ name: t, fields: n, timestamp: a, critical: r });
          break e;
        }
        return;
      }
    }
    function b(e, t) {
      try {
        (m(), y(e));
        var n = o("WAWebWamFalcoABProps").getWamFalcoMode();
        if (
          (_(n) && t) ||
          (p(n) &&
            !o("WAWebWamFalcoABProps").getShadowLoggingEventIds().has(e.id))
        )
          return;
        var a = e.getEventNameForFalco(),
          i = g(e);
        if (a == null || i == null) {
          o("WALogger")
            .WARN(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[falco] bridge: missing event name or fields for id: ",
                  " class: ",
                  ", dropping",
                ])),
              e.id,
              e.$className,
            )
            .sendLogs("wam_falco_bridge_missing_fields", { sampling: 0.1 });
          return;
        }
        C(n, a, i, o("WAWebWamFalcoABProps").isCriticalEvent(e.id));
      } catch (e) {
        o("WALogger")
          .WARN(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "[falco] bridge: failed to log event",
              ])),
          )
          .catching(r("getErrorSafe")(e))
          .sendLogs("wam_falco_bridge_error", { sampling: 0.1 });
      }
    }
    function v() {
      (m(),
        o("WAWebCanonicalWamFalcoBuffer").flushCanonicalWamFalcoBuffer(),
        o("WAWebFalcoEventQueue").drainFalcoQueue());
    }
    ((l.logEventToGeneratedFalco = h),
      (l.maybeSetTraceIdForShadowLogging = y),
      (l.logEventToFalcoBridge = b),
      (l.flushFalcoForLogout = v));
  },
  98,
);
