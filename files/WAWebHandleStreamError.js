__d(
  "WAWebHandleStreamError",
  [
    "Promise",
    "WAComms",
    "WADeprecatedWapParser",
    "WALogger",
    "WAWebABPropsUpdateFromStorage",
    "WAWebAppCommsCloseReason",
    "WAWebBackendEventBus",
    "WAWebCanonicalGating",
    "WAWebCompanionRegUtils",
    "WAWebCoreActionsODS",
    "WAWebInitializeCryptoLibrary",
    "WAWebJestE2ELogUtils",
    "WAWebSocketModel",
    "WAWebStartBackend",
    "WAWebUserPrefsTabMutex",
    "WAWebWamDeviceLinkReporter",
    "asyncToGeneratorRuntime",
    "cr:18918",
    "gkx",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _ = 515,
      f = 516,
      g = new (r("WADeprecatedWapParser"))("streamErrorParser", function (t) {
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
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = g.parse(e);
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
          var a = t.success,
            i = a.type === "code" ? v(a.code) : S(a.type);
          if (a.type === "code" && a.code >= 500 && a.code < 600) {
            if (a.code === _) return C(i);
            if (a.code === f)
              return (
                o("WAComms").stopComms(i),
                o("WAWebCoreActionsODS").isPageLoadComplete() ||
                  o("WAWebCoreActionsODS").logPageLoadErrorForcedLogout(),
                yield o("WAWebWamDeviceLinkReporter").commitDeviceLinkEvent(
                  516,
                ),
                yield o("WAWebCompanionRegUtils").startLogout(),
                r("justknobx")._("3462") ||
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
                o("WAComms").stopComms(i),
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
                o("WAComms").stopComms(i),
                (p || (p = n("Promise"))).resolve("NO_ACK")
              );
            a.type === "xml-not-well-formed" &&
              (r("gkx")("9092")
                ? o("WALogger")
                    .WARN(
                      d ||
                        (d = babelHelpers.taggedTemplateLiteralLoose([
                          "[handleStreamError] bad xml, closing socket",
                        ])),
                    )
                    .sendLogs("sent-xml-not-well-formed")
                : o("WALogger").WARN(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "[handleStreamError] bad xml, closing socket",
                      ])),
                  ));
          }
          return (p || (p = n("Promise"))).resolve("CLOSE_SOCKET");
        })),
        y.apply(this, arguments)
      );
    }
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return (
            o("WAComms").stopComms(e),
            n("cr:18918") != null &&
              o("WAWebCanonicalGating").isCanonicalAuthV2Enabled() &&
              (yield n("cr:18918").waitForCanonicalAuthV2Registration(
                "continue_in_place",
              )),
            yield o("WAWebCompanionRegUtils").startLogin(),
            yield o("WAWebABPropsUpdateFromStorage").updateABPropsFromStorage(),
            o("WAWebInitializeCryptoLibrary").initializeCryptoLibrary(),
            o("WAWebStartBackend").startBackend(),
            "NO_ACK"
          );
        })),
        b.apply(this, arguments)
      );
    }
    function v(e) {
      return e === _
        ? o("WAWebAppCommsCloseReason").AppCommsCloseReason.StreamErrorCode515
        : e === f
          ? o("WAWebAppCommsCloseReason").AppCommsCloseReason.StreamErrorCode516
          : o("WAWebAppCommsCloseReason").AppCommsCloseReason
              .StreamErrorCodeOther;
    }
    function S(e) {
      return e === "replaced"
        ? o("WAWebAppCommsCloseReason").AppCommsCloseReason.StreamErrorReplaced
        : e === "device_removed"
          ? o("WAWebAppCommsCloseReason").AppCommsCloseReason
              .StreamErrorDeviceRemoved
          : e === "ack"
            ? o("WAWebAppCommsCloseReason").AppCommsCloseReason.StreamErrorAck
            : e === "xml-not-well-formed"
              ? o("WAWebAppCommsCloseReason").AppCommsCloseReason
                  .StreamErrorXmlNotWellFormed
              : o("WAWebAppCommsCloseReason").AppCommsCloseReason
                  .StreamErrorOther;
    }
    l.default = h;
  },
  98,
);
