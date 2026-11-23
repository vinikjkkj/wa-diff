__d(
  "WAWebWindowsHybridBridgeWam.v2639",
  [
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
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["4", "11", "31"],
      s,
      u,
      c,
      d,
      m = function (n) {
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
          (this.handleEvents = async function (n) {
            if (!t.$2) {
              o("WALogger").ERROR(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[WindowsHybridBridgeWam] handleWamEvent: not init",
                  ])),
              );
              return;
            }
            var r = JSON.parse(n),
              a = {
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
            if (r.length > 0) {
              var i = r[0],
                l = [],
                s = [],
                m = [];
              for (var p of Object.keys(a)) {
                var _ = a[p],
                  f = i[p];
                if (f != null) {
                  var g = _.type === "string" ? String(f) : Number(f);
                  (l.push(
                    o("WAWebWam").Wam.set(
                      o("WAWebWamCodegenUtils").metrics.getGlobal(
                        _.webGlobalName,
                      ),
                      g,
                    ),
                  ),
                    _.webGlobalName === "memClass" &&
                      o("WAWebBrowserApi").setMemClassOverride(Number(g)),
                    s.push(_.webGlobalName + "=" + g));
                } else m.push(_.webGlobalName);
              }
              (await Promise.all(l),
                s.length > 0,
                m.length > 0 &&
                  o("WALogger").ERROR(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "[WindowsHybridBridgeWam] missing globals: ",
                        "",
                      ])),
                    m.join(", "),
                  ));
            }
            Promise.all(
              r.map(function (t) {
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
                    _ = o("WAWebCrashContextUtils").isPreviousSessionCrash(u)
                      ? p
                      : o("WAWebCrashContextUtils").mergeAppContexts(
                          p,
                          o("WAWebCrashContextUtils").getCrashEventAppContext(
                            l,
                            m,
                          ),
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
                    o("WAWebMemoryStatWamEvent").MemoryStatWamEvent.prototype
                      .id &&
                    (i[14] = o("WAWebAppTracker").AppTracker.getAppContext());
                return new (o("WAWebWamCodegenWamEvent").RawWamEvent)(
                  i,
                ).commitAndWaitForFlush(!0);
              }),
            );
          }),
          (this.$1 = n));
      };
    l.WindowsHybridBridgeWam_v2639 = m;
  },
  98,
);
