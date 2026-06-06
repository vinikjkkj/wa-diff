__d(
  "WAWebWindowsHybridBridgeWam",
  [
    "WALogger",
    "WAWebAppTracker",
    "WAWebBrowserApi",
    "WAWebCrashContextUtils",
    "WAWebCrashLogWamEvent",
    "WAWebMemoryStatWamEvent",
    "WAWebWam",
    "WAWebWamCodegenUtils",
    "WAWebWamCodegenWamEvent",
    "WAWebWamEnumCrashApplicationState",
    "WAWebWamEnumCrashType",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["4", "11", "31"],
      s,
      u,
      c,
      d = function (n) {
        var t = this;
        ((this.$2 = !1),
          (this.initialize = function () {
            var e, n;
            t.$2 ||
              ((e = t.$1) == null ||
                e.addEventListener("eventsSaved", t.handleEvents),
              (n = t.$1) == null || n.subscribe(null),
              (t.$2 = !0));
          }),
          (this.handleEvents = async function (n) {
            if (!t.$2) {
              o("WALogger").ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
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
                d = [],
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
                    d.push(_.webGlobalName + "=" + g));
                } else m.push(_.webGlobalName);
              }
              (await Promise.all(l),
                d.length > 0,
                m.length > 0 &&
                  o("WALogger").ERROR(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
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
                    d = i[24],
                    m = i[2],
                    p = o("WAWebCrashContextUtils").cleanLegacyAppContext(
                      i[32],
                    ),
                    _ = o("WAWebCrashContextUtils").getCrashEventAppContext(
                      l,
                      m,
                    ),
                    f = o("WAWebCrashContextUtils").mergeAppContexts(p, _);
                  if (
                    ((i[32] = f),
                    l ===
                      o("WAWebWamEnumCrashType").CRASH_TYPE
                        .DISPATCHER_NOT_RESPONDING &&
                      s ===
                        o("WAWebWamEnumCrashApplicationState")
                          .CRASH_APPLICATION_STATE.FOREGROUND)
                  ) {
                    var g = d != null ? d : "unknown";
                    o("WALogger")
                      .ERROR(
                        c ||
                          (c = babelHelpers.taggedTemplateLiteralLoose([
                            "Native ",
                            "s ANR detected: ",
                            "",
                          ])),
                        g,
                        u,
                      )
                      .sendLogs("hybrid-native-anr-" + g + "s", {
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
    l.WindowsHybridBridgeWam = d;
  },
  98,
);
