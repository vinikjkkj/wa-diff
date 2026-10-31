__d(
  "WAWebVoipLastCallLogging",
  [
    "WALogger",
    "WAWebEnvironment",
    "WAWebVoipGatingUtils",
    "WAWebVoipLastCallODS",
    "WAWebVoipLastCallRecorder",
    "WAWebVoipLastCallStore",
    "WAWebVoipQplHelpers",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = !1;
    function u(t) {
      if (
        !(
          r("WAWebEnvironment").isWindows ||
          o("WAWebVoipGatingUtils").isGuestViewer()
        ) &&
        (o("WAWebVoipQplHelpers").voipInitQplAnnotateLastCall(t), !s)
      ) {
        if (((s = !0), t == null)) {
          o("WAWebVoipLastCallODS").logLastCallPageUnreadable();
          return;
        }
        (o("WAWebVoipLastCallRecorder").startLastCallHistory(),
          o("WAWebVoipLastCallODS").logLastCallPage(
            o("WAWebVoipLastCallStore").getLastCallDays(t),
            t.historyDays,
          ),
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "voip: last call at page load placed_days=",
                " connected_days=",
                " history_days=",
                "",
              ])),
            String(t.placedDays),
            String(t.connectedDays),
            String(t.historyDays),
          ),
          o("WAWebVoipLastCallRecorder").setOnConnectedCallRecorded(
            function () {
              return c(t);
            },
          ));
      }
    }
    function c(e) {
      (o("WAWebVoipLastCallRecorder").setOnConnectedCallRecorded(null),
        o("WAWebVoipLastCallODS").logLastCallFirstConnectedCall(
          o("WAWebVoipLastCallStore").getLastCallDays(e),
        ));
    }
    l.logVoipLastCallAtInit = u;
  },
  98,
);
