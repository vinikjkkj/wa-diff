__d(
  "WAWebHandleStreamError",
  [
    "WAComms",
    "WADeprecatedWapParser",
    "WALogger",
    "WAWebBackendEventBus",
    "WAWebCompanionRegUtils",
    "WAWebCoreActionsODS",
    "WAWebJestE2ELogUtils",
    "WAWebSocketModel",
    "WAWebStartBackend",
    "WAWebUserPrefsTabMutex",
    "WAWebWamDeviceLinkReporter",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p = new (r("WADeprecatedWapParser"))("streamErrorParser", function (t) {
        if ((t.assertTag("stream:error"), t.hasChild("conflict"))) {
          var n = t.child("conflict"),
            r = n.attrString("type");
          switch (r) {
            case "replaced":
              return { type: "replaced" };
            case "device_removed":
            default:
              return { type: "device_removed" };
          }
        } else
          return t.hasAttr("code")
            ? { type: "code", code: t.attrInt("code") }
            : t.hasChild("ack")
              ? {
                  type: "ack",
                  id: t.child("ack").hasAttr("id")
                    ? t.child("ack").attrString("id")
                    : null,
                }
              : t.hasChild("xml-not-well-formed")
                ? { type: "xml-not-well-formed" }
                : (o("WALogger").WARN(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "Unrecognized stream:error: ",
                        "",
                      ])),
                    t.toString(),
                  ),
                  { type: "other" });
      });
    async function _(e) {
      var t = p.parse(e);
      if (t.error)
        return (
          o("WALogger").ERROR(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "Parsing Error: ",
                "",
              ])),
            t.error.toString(),
          ),
          Promise.reject(t.error)
        );
      var n = t.success;
      if (n.type === "code" && n.code >= 500 && n.code < 600) {
        if (n.code === 515)
          return (
            o("WAComms").stopComms(),
            await o("WAWebCompanionRegUtils").startLogin(),
            o("WAWebStartBackend").startBackend(),
            Promise.resolve("NO_ACK")
          );
        if (n.code === 516)
          return (
            o("WAComms").stopComms(),
            o("WAWebCoreActionsODS").isPageLoadComplete() ||
              o("WAWebCoreActionsODS").logPageLoadErrorForcedLogout(),
            await o("WAWebWamDeviceLinkReporter").commitDeviceLinkEvent(516),
            await o("WAWebCompanionRegUtils").startLogout(),
            o("WAWebStartBackend").startBackend(),
            Promise.resolve("NO_ACK")
          );
        o("WAComms").onStreamErrorReceived();
      } else {
        if (n.type === "device_removed")
          return (
            o("WAWebBackendEventBus").BackendEventBus.triggerStartingLogout(),
            o("WAComms").stopComms(),
            o("WAWebCoreActionsODS").isPageLoadComplete() ||
              o("WAWebCoreActionsODS").logPageLoadErrorForcedLogout(),
            await o("WAWebSocketModel").Socket.clearCredentialsAndStoredData(),
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "stream error due to device removed, logging out",
                ])),
            ),
            o("WAWebJestE2ELogUtils").maybeLogToJestE2eJSConsole(
              "stream error due to device removed, logging out",
            ),
            o("WAWebBackendEventBus").BackendEventBus.triggerLogout(),
            Promise.resolve("NO_ACK")
          );
        if (n.type === "replaced")
          return (
            o("WAWebUserPrefsTabMutex").currentTabHasMutex() &&
              o("WALogger")
                .ERROR(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[handleStreamError] replaced with mutex, closing",
                    ])),
                )
                .sendLogs("invalid-session-replacement", { sampling: 0.01 }),
            o("WAComms").stopComms(),
            Promise.resolve("NO_ACK")
          );
        n.type === "xml-not-well-formed" &&
          (r("gkx")("26258")
            ? o("WALogger").WARN(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[handleStreamError] bad xml, closing socket",
                  ])),
              )
            : o("WALogger")
                .WARN(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "[handleStreamError] bad xml, closing socket",
                    ])),
                )
                .sendLogs("sent-xml-not-well-formed"));
      }
      return Promise.resolve("CLOSE_SOCKET");
    }
    l.default = _;
  },
  98,
);
