__d(
  "WAWebWindowsHybridBridgeWam.v2604",
  [
    "Promise",
    "WALogger",
    "WAWebCrashContextUtils",
    "WAWebCrashLogWamEvent",
    "WAWebWam",
    "WAWebWamCodegenUtils",
    "WAWebWamCodegenWamEvent",
    "WAWebWamEnumCrashApplicationState",
    "WAWebWamEnumCrashType",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["4", "11", "31"],
      s,
      u,
      c,
      d,
      m = function (r) {
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
          (this.handleEvents = (function () {
            var r = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (r) {
                if (!t.$2) {
                  o("WALogger").ERROR(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "WindowsHybridBridgeWam: received handleWamEvent while bridge is not initialized",
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
                    m = [],
                    p = [],
                    _ = [];
                  for (var f of Object.keys(i)) {
                    var g = i[f],
                      h = l[f];
                    if (h != null) {
                      var y = g.type === "string" ? String(h) : Number(h);
                      (m.push(
                        o("WAWebWam").Wam.set(
                          o("WAWebWamCodegenUtils").metrics.getGlobal(
                            g.webGlobalName,
                          ),
                          y,
                        ),
                      ),
                        p.push(g.webGlobalName + "=" + y));
                    } else _.push(g.webGlobalName);
                  }
                  (yield (d || (d = n("Promise"))).all(m),
                    p.length > 0,
                    _.length > 0 &&
                      o("WALogger").ERROR(
                        u ||
                          (u = babelHelpers.taggedTemplateLiteralLoose([
                            "WindowsHybridBridgeWam: Missing expected global attributes from native: ",
                            ". This may indicate a schema mismatch between native and web WAM implementations.",
                          ])),
                        _.join(", "),
                      ));
                }
                var C = [];
                if (
                  ((d || (d = n("Promise"))).all(
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
                          d = i[2],
                          m = o("WAWebCrashContextUtils").cleanLegacyAppContext(
                            i[32],
                          ),
                          p = o(
                            "WAWebCrashContextUtils",
                          ).getCrashEventAppContext(l, d),
                          _ = o("WAWebCrashContextUtils").mergeAppContexts(
                            m,
                            p,
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
                          C.push({ timeout: f, crashContext: u });
                        }
                      }
                      return new (o("WAWebWamCodegenWamEvent").RawWamEvent)(
                        i,
                      ).commitAndWaitForFlush(!0);
                    }),
                  ),
                  C.length > 0)
                ) {
                  var b = C.slice(0, 3).map(function (e) {
                    return e.timeout + "s: " + e.crashContext;
                  });
                  o("WALogger")
                    .ERROR(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "Native ANR detected: ",
                          " events => ",
                          "",
                        ])),
                      C.length,
                      b,
                    )
                    .sendLogs("hybrid-native-anr", { sampling: 0.01 });
                }
              },
            );
            return function (e) {
              return r.apply(this, arguments);
            };
          })()),
          (this.$1 = r));
      };
    l.WindowsHybridBridgeWam_v2604 = m;
  },
  98,
);
