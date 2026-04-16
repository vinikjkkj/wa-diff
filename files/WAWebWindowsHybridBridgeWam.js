__d(
  "WAWebWindowsHybridBridgeWam",
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
                            "[WindowsHybridBridgeWam] missing globals: ",
                            "",
                          ])),
                        _.join(", "),
                      ));
                }
                (d || (d = n("Promise"))).all(
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
                    }
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
          (this.$1 = r));
      };
    l.WindowsHybridBridgeWam = m;
  },
  98,
);
