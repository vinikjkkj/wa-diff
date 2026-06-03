__d(
  "WAWebHandleHistorySyncMessageAccessStatusChange",
  [
    "WALogger",
    "WAWebEnvironment",
    "WAWebUserPrefsHistorySync",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n;
          if (!r("WAWebEnvironment").isWindows) {
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] MESSAGE_ACCESS_STATUS notification received but not on Windows Hybrid",
                  ])),
              )
              .sendLogs("history-sync-message-access-status-change-not-hybrid");
            return;
          }
          var a =
            (n = t.messageAccessStatus) == null
              ? void 0
              : n.completeAccessGranted;
          if (a == null) {
            o("WALogger")
              .ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] MESSAGE_ACCESS_STATUS notification received but messageAccessStatus.completeAccessGranted is empty",
                  ])),
              )
              .sendLogs("history-sync-message-access-status-change-empty");
            return;
          }
          var i = a === !0;
          (o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[history sync] Setting history sync complete on demand access granted to: ",
                "",
              ])),
            i,
          ),
            yield o(
              "WAWebUserPrefsHistorySync",
            ).setHistorySyncCompleteOnDemandAccessGranted(i));
        })),
        d.apply(this, arguments)
      );
    }
    l.handleHistorySyncMessageAccessStatusChange = c;
  },
  98,
);
