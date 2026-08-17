__d(
  "WAWebWindowsHybridBridgeWam",
  [
    "Promise",
    "WALogger",
    "WAWebAppTracker",
    "WAWebBrowserApi",
    "WAWebCrashContextUtils",
    "WAWebCrashLogWamEvent",
    "WAWebMemoryStatWamEvent",
    "WAWebODS",
    "WAWebWam",
    "WAWebWamCodegenUtils",
    "WAWebWamCodegenWamEvent",
    "WAWebWamEnumCrashApplicationState",
    "WAWebWamEnumCrashType",
    "WAWebWindowsHybridBridgeTrace",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["4", "11", "31"],
      s,
      u,
      c,
      d,
      m,
      p = function (a) {
        var t = this;
        ((this.$2 = !1),
          (this.$3 = null),
          (this.initialize = function () {
            var e, n, r;
            t.$2 ||
              ((t.$2 = !0),
              (e = t.$1) == null ||
                e.addEventListener("eventsSaved", t.handleEvents),
              (n = t.$1) == null || n.subscribe(null),
              ((r = t.$1) == null ? void 0 : r.setWebAppContext) != null &&
                (o("WAWebAppTracker").AppTracker.subscribe(t.$4), t.$4()));
          }),
          (this.$4 = function () {
            var e = o("WAWebAppTracker").AppTracker.getAppContext();
            if (e !== t.$3) {
              r("WAWebODS").incr(
                "web.hybrid.bridge.wam.send.set_web_app_context",
              );
              try {
                o("WAWebWindowsHybridBridgeTrace").traceBridgeCall(
                  { bridge: "wam", method: "setWebAppContext", type: "async" },
                  function () {
                    var n;
                    return (n = t.$1) == null || n.setWebAppContext == null
                      ? void 0
                      : n.setWebAppContext(e);
                  },
                );
              } catch (e) {
                o("WALogger")
                  .ERROR(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[WindowsHybridBridgeWam] setWebAppContext failed",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e));
                return;
              }
              t.$3 = e;
            }
          }),
          (this.handleEvents = (function () {
            var r = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (r) {
                if (!t.$2) {
                  o("WALogger").ERROR(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[WindowsHybridBridgeWam] handleWamEvent: not init",
                      ])),
                  );
                  return;
                }
                var a = JSON.parse(r),
                  i = {
                    4: {
                      webGlobalName: "osVersion",
                      webFieldId: 15,
                      type: "string",
                    },
                    11: {
                      webGlobalName: "memClass",
                      webFieldId: 655,
                      type: "number",
                    },
                    31: {
                      webGlobalName: "numCpu",
                      webFieldId: 10317,
                      type: "number",
                    },
                  };
                if (a.length > 0) {
                  var l = a[0],
                    s = [],
                    p = [],
                    _ = [];
                  for (var f of Object.keys(i)) {
                    var g = i[f],
                      h = l[f];
                    if (h != null) {
                      var y = g.type === "string" ? String(h) : Number(h);
                      (s.push(
                        o("WAWebWam").Wam.set(
                          o("WAWebWamCodegenUtils").metrics.getGlobal(
                            g.webGlobalName,
                          ),
                          y,
                        ),
                      ),
                        g.webGlobalName === "memClass" &&
                          o("WAWebBrowserApi").setMemClassOverride(Number(y)),
                        p.push(g.webGlobalName + "=" + y));
                    } else _.push(g.webGlobalName);
                  }
                  (yield (m || (m = n("Promise"))).all(s),
                    p.length > 0,
                    _.length > 0 &&
                      o("WALogger").ERROR(
                        c ||
                          (c = babelHelpers.taggedTemplateLiteralLoose([
                            "[WindowsHybridBridgeWam] missing globals: ",
                            "",
                          ])),
                        _.join(", "),
                      ));
                }
                (m || (m = n("Promise"))).all(
                  a.map(function (t) {
                    var n = t[4],
                      r = t[11],
                      a = t[31],
                      i = babelHelpers.objectWithoutPropertiesLoose(t, e);
                    if (
                      t.id ===
                      o("WAWebCrashLogWamEvent").CrashLogWamEvent.prototype.id
                    ) {
                      var l = i[6],
                        s = i[23],
                        u = i[3],
                        c = i[24],
                        m = i[2],
                        p = o("WAWebCrashContextUtils").cleanLegacyAppContext(
                          i[32],
                        ),
                        _ = o("WAWebCrashContextUtils").isPreviousSessionCrash(
                          u,
                        )
                          ? p
                          : o("WAWebCrashContextUtils").mergeAppContexts(
                              p,
                              o(
                                "WAWebCrashContextUtils",
                              ).getCrashEventAppContext(l, m),
                            );
                      if (
                        ((i[32] = _),
                        l ===
                          o("WAWebWamEnumCrashType").CRASH_TYPE
                            .DISPATCHER_NOT_RESPONDING &&
                          s ===
                            o("WAWebWamEnumCrashApplicationState")
                              .CRASH_APPLICATION_STATE.FOREGROUND)
                      ) {
                        var f = c != null ? c : "unknown";
                        o("WALogger")
                          .ERROR(
                            d ||
                              (d = babelHelpers.taggedTemplateLiteralLoose([
                                "Native ",
                                "s ANR detected: ",
                                "",
                              ])),
                            f,
                            u,
                          )
                          .sendLogs("hybrid-native-anr-" + f + "s", {
                            sampling: 0.01,
                          });
                      }
                    } else
                      t.id ===
                        o("WAWebMemoryStatWamEvent").MemoryStatWamEvent
                          .prototype.id &&
                        (i[14] =
                          o("WAWebAppTracker").AppTracker.getAppContext());
                    return new (o("WAWebWamCodegenWamEvent").RawWamEvent)(
                      i,
                    ).commitAndWaitForFlush(!0);
                  }),
                );
              },
            );
            return function (e) {
              return r.apply(this, arguments);
            };
          })()),
          (this.$1 = a));
      };
    l.WindowsHybridBridgeWam = p;
  },
  98,
);
