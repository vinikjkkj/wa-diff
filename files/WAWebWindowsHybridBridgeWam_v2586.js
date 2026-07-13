__d(
  "WAWebWindowsHybridBridgeWam.v2586",
  [
    "Promise",
    "WALogger",
    "WAWebCrashContextUtils",
    "WAWebCrashLogWamEvent",
    "WAWebWamCodegenWamEvent",
    "WAWebWamEnumCrashApplicationState",
    "WAWebWamEnumCrashType",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = function (r) {
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
          (this.handleEvents = function (r) {
            if (!t.$2) {
              o("WALogger").ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "VoipWinRTBridge: received handleWamEvent while bridge is not initialized",
                  ])),
              );
              return;
            }
            var a = JSON.parse(r);
            (u || (u = n("Promise"))).all(
              a.map(function (e) {
                if (
                  e.id ===
                  o("WAWebCrashLogWamEvent").CrashLogWamEvent.prototype.id
                ) {
                  var t = e[6],
                    n = e[23],
                    r = e[3],
                    a = e[24],
                    i = e[2];
                  if (
                    ((e[3] = o(
                      "WAWebCrashContextUtils",
                    ).getCrashEventAppContext(t, i)),
                    t ===
                      o("WAWebWamEnumCrashType").CRASH_TYPE
                        .DISPATCHER_NOT_RESPONDING &&
                      n ===
                        o("WAWebWamEnumCrashApplicationState")
                          .CRASH_APPLICATION_STATE.FOREGROUND)
                  ) {
                    var l = a != null ? a : "unknown";
                    o("WALogger")
                      .ERROR(
                        s ||
                          (s = babelHelpers.taggedTemplateLiteralLoose([
                            "Native ",
                            "s ANR detected: ",
                            "",
                          ])),
                        l,
                        r,
                      )
                      .sendLogs("hybrid-native-anr-" + l + "s", {
                        sampling: 0.01,
                      });
                  }
                }
                return new (o("WAWebWamCodegenWamEvent").RawWamEvent)(
                  e,
                ).commitAndWaitForFlush(!0);
              }),
            );
          }),
          (this.$1 = r));
      };
    l.WindowsHybridBridgeWam_v2586 = c;
  },
  98,
);
