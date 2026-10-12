__d(
  "WAWebWindowsHybridBridgeWam.v2641",
  [
    "WALogger",
    "WAWebAppTracker",
    "WAWebCrashContextUtils",
    "WAWebCrashLogWamEvent",
    "WAWebMemoryStatWamEvent",
    "WAWebODS",
    "WAWebWamCodegenUtils",
    "WAWebWamCodegenWamEvent",
    "WAWebWamEnumCrashApplicationState",
    "WAWebWamEnumCrashType",
    "WAWebWamGlobals",
    "WAWebWindowsHybridBridgeTrace",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g,
      h,
      y,
      C,
      b = function (n) {
        var t = this;
        ((this.$2 = !1),
          (this.$3 = null),
          (this.initialize = function () {
            var e, n, r, a;
            t.$2 ||
              ((t.$2 = !0),
              (e = t.$1) == null || e.addEventListener("globalsChanged", t.$4),
              (n = t.$1) == null ||
                n.addEventListener("eventsSaved", t.handleEvents),
              (r = t.$1) == null || r.subscribe(null),
              ((a = t.$1) == null ? void 0 : a.setWebAppContext) != null &&
                (o("WAWebAppTracker").AppTracker.subscribe(t.$5), t.$5()));
          }),
          (this.$5 = function () {
            var n = o("WAWebAppTracker").AppTracker.getAppContext();
            if (n !== t.$3) {
              r("WAWebODS").incr(
                "web.hybrid.bridge.wam.send.set_web_app_context",
              );
              try {
                o("WAWebWindowsHybridBridgeTrace").traceBridgeCall(
                  { bridge: "wam", method: "setWebAppContext", type: "async" },
                  function () {
                    var e;
                    return (e = t.$1) == null || e.setWebAppContext == null
                      ? void 0
                      : e.setWebAppContext(n);
                  },
                );
              } catch (t) {
                o("WALogger")
                  .ERROR(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[WindowsHybridBridgeWam] setWebAppContext failed",
                      ])),
                  )
                  .catching(r("getErrorSafe")(t));
                return;
              }
              t.$3 = n;
            }
          }),
          (this.handleEvents = function (e) {
            if (!t.$2) {
              o("WALogger").ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[WindowsHybridBridgeWam] handleWamEvent: not init",
                  ])),
              );
              return;
            }
            var n;
            try {
              n = JSON.parse(e);
            } catch (e) {
              o("WALogger")
                .ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[WindowsHybridBridgeWam] malformed eventsSaved payload",
                    ])),
                )
                .catching(r("getErrorSafe")(e));
              return;
            }
            if (!Array.isArray(n)) {
              o("WALogger").ERROR(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[WindowsHybridBridgeWam] eventsSaved payload is not an array",
                  ])),
              );
              return;
            }
            var a = [];
            n.forEach(function (e) {
              try {
                if (
                  e.id ===
                  o("WAWebCrashLogWamEvent").CrashLogWamEvent.prototype.id
                ) {
                  var t = e[6],
                    n = e[23],
                    i = e[3],
                    l = e[24],
                    s = e[2],
                    u = o("WAWebCrashContextUtils").cleanLegacyAppContext(
                      e[32],
                    ),
                    c = o("WAWebCrashContextUtils").isPreviousSessionCrash(i)
                      ? u
                      : o("WAWebCrashContextUtils").mergeAppContexts(
                          u,
                          o("WAWebCrashContextUtils").getCrashEventAppContext(
                            t,
                            s,
                          ),
                        );
                  if (
                    ((e[32] = c),
                    t ===
                      o("WAWebWamEnumCrashType").CRASH_TYPE
                        .DISPATCHER_NOT_RESPONDING &&
                      n ===
                        o("WAWebWamEnumCrashApplicationState")
                          .CRASH_APPLICATION_STATE.FOREGROUND)
                  ) {
                    var p = l != null ? l : "unknown";
                    o("WALogger")
                      .ERROR(
                        d ||
                          (d = babelHelpers.taggedTemplateLiteralLoose([
                            "Native ",
                            "s ANR detected: ",
                            "",
                          ])),
                        p,
                        i,
                      )
                      .sendLogs("hybrid-native-anr-" + p + "s", {
                        sampling: 0.01,
                      });
                  }
                } else
                  e.id ===
                    o("WAWebMemoryStatWamEvent").MemoryStatWamEvent.prototype
                      .id &&
                    (e[14] = o("WAWebAppTracker").AppTracker.getAppContext());
                a.push(new (o("WAWebWamCodegenWamEvent").RawWamEvent)(e));
              } catch (t) {
                o("WALogger")
                  .ERROR(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "[WindowsHybridBridgeWam] dropped malformed event ",
                        "",
                      ])),
                    e == null ? void 0 : e.id,
                  )
                  .catching(r("getErrorSafe")(t));
              }
            });
            var i = a.pop();
            (a.forEach(v), i != null && S(i));
          }),
          (this.$4 = function (e) {
            var t;
            try {
              t = JSON.parse(e);
            } catch (e) {
              o("WALogger")
                .ERROR(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "[WindowsHybridBridgeWam] malformed globalsChanged payload",
                    ])),
                )
                .catching(r("getErrorSafe")(e));
              return;
            }
            if (typeof t != "object" || t == null || Array.isArray(t)) {
              o("WALogger").ERROR(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "[WindowsHybridBridgeWam] globalsChanged payload is not an object",
                  ])),
              );
              return;
            }
            for (var n of Object.keys(t)) R(n, t[n]);
          }),
          (this.$1 = n));
      };
    function v(e) {
      try {
        e.commit();
      } catch (t) {
        o("WALogger")
          .ERROR(
            f ||
              (f = babelHelpers.taggedTemplateLiteralLoose([
                "[WindowsHybridBridgeWam] failed to commit event ",
                "",
              ])),
            e.id,
          )
          .catching(r("getErrorSafe")(t));
      }
    }
    function S(e) {
      var t;
      try {
        t = e.commitAndWaitForFlush(!0);
      } catch (t) {
        o("WALogger")
          .ERROR(
            g ||
              (g = babelHelpers.taggedTemplateLiteralLoose([
                "[WindowsHybridBridgeWam] failed to commit event ",
                "",
              ])),
            e.id,
          )
          .catching(r("getErrorSafe")(t));
        return;
      }
      t.catch(function (e) {
        o("WALogger")
          .ERROR(
            h ||
              (h = babelHelpers.taggedTemplateLiteralLoose([
                "[WindowsHybridBridgeWam] forced flush failed",
              ])),
          )
          .catching(r("getErrorSafe")(e));
      });
    }
    function R(e, t) {
      if (!o("WAWebWamCodegenUtils").metrics.hasGlobal(e)) {
        o("WALogger").ERROR(
          y ||
            (y = babelHelpers.taggedTemplateLiteralLoose([
              "[WindowsHybridBridgeWam] unknown global: ",
              "",
            ])),
          e,
        );
        return;
      }
      try {
        var n;
        o("WAWebWamGlobals").Global.set(((n = {}), (n[e] = t), n));
      } catch (t) {
        o("WALogger")
          .ERROR(
            C ||
              (C = babelHelpers.taggedTemplateLiteralLoose([
                "[WindowsHybridBridgeWam] invalid value for global ",
                "",
              ])),
            e,
          )
          .catching(r("getErrorSafe")(t));
      }
    }
    l.WindowsHybridBridgeWam_v2641 = b;
  },
  98,
);
