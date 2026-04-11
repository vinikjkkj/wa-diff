__d(
  "WAWebHandleStreamError",
  [
    "Promise",
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
    "asyncToGeneratorRuntime",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _ = new (r("WADeprecatedWapParser"))("streamErrorParser", function (t) {
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
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = _.parse(e);
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
              (p || (p = n("Promise"))).reject(t.error)
            );
          var a = t.success;
          if (a.type === "code" && a.code >= 500 && a.code < 600) {
            if (a.code === 515) {
              o("WAComms").stopComms();
              var i = yield o("WAWebCompanionRegUtils").startLogin();
              return (
                i || o("WAWebStartBackend").startBackend(),
                (p || (p = n("Promise"))).resolve("NO_ACK")
              );
            } else if (a.code === 516)
              return (
                o("WAComms").stopComms(),
                o("WAWebCoreActionsODS").isPageLoadComplete() ||
                  o("WAWebCoreActionsODS").logPageLoadErrorForcedLogout(),
                yield o("WAWebWamDeviceLinkReporter").commitDeviceLinkEvent(
                  516,
                ),
                yield o("WAWebCompanionRegUtils").startLogout(),
                o("WAWebStartBackend").startBackend(),
                (p || (p = n("Promise"))).resolve("NO_ACK")
              );
            o("WAComms").onStreamErrorReceived();
          } else {
            if (a.type === "device_removed")
              return (
                o(
                  "WAWebBackendEventBus",
                ).BackendEventBus.triggerStartingLogout(),
                o("WAComms").stopComms(),
                o("WAWebCoreActionsODS").isPageLoadComplete() ||
                  o("WAWebCoreActionsODS").logPageLoadErrorForcedLogout(),
                yield o(
                  "WAWebSocketModel",
                ).Socket.clearCredentialsAndStoredData(),
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
                (p || (p = n("Promise"))).resolve("NO_ACK")
              );
            if (a.type === "replaced")
              return (
                o("WAWebUserPrefsTabMutex").currentTabHasMutex() &&
                  o("WALogger")
                    .ERROR(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "[handleStreamError] replaced with mutex, closing",
                        ])),
                    )
                    .sendLogs("invalid-session-replacement", {
                      sampling: 0.01,
                    }),
                o("WAComms").stopComms(),
                (p || (p = n("Promise"))).resolve("NO_ACK")
              );
            a.type === "xml-not-well-formed" &&
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
          return (p || (p = n("Promise"))).resolve("CLOSE_SOCKET");
        })),
        g.apply(this, arguments)
      );
    }
    l.default = f;
  },
  98,
);
