__d(
  "WAWebHandleStreamError",
  [
    "WAComms",
    "WADeprecatedWapParser",
    "WALogger",
    "WAWebABPropsUpdateFromStorage",
    "WAWebAppCommsCloseReason",
    "WAWebBackendEventBus",
    "WAWebCanonicalGating",
    "WAWebCompanionRegUtils",
    "WAWebCoreActionsODS",
    "WAWebInboundMsgPersistedQueueAdapter",
    "WAWebInitializeCryptoLibrary",
    "WAWebJestE2ELogUtils",
    "WAWebSocketModel",
    "WAWebStartBackend",
    "WAWebUserPrefsTabMutex",
    "WAWebWamDeviceLinkReporter",
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
      p = 515,
      _ = 516,
      f = new (r("WADeprecatedWapParser"))("streamErrorParser", function (t) {
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
    async function g(e) {
      var t = f.parse(e);
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
      var n = t.success,
        a = n.type === "code" ? y(n.code) : C(n.type);
      if (n.type === "code" && n.code >= 500 && n.code < 600) {
        if (n.code === p) return h(a);
        if (n.code === _)
          return (
            o("WAComms").stopComms(a),
            o("WAWebCoreActionsODS").isPageLoadComplete() ||
              o("WAWebCoreActionsODS").logPageLoadErrorForcedLogout(),
            await o("WAWebWamDeviceLinkReporter").commitDeviceLinkEvent(516),
            await o("WAWebCompanionRegUtils").startLogout(),
            r("justknobx")._("3462") || o("WAWebStartBackend").startBackend(),
            Promise.resolve("NO_ACK")
          );
        o("WAComms").onStreamErrorReceived();
      } else {
        if (n.type === "device_removed")
          return (
            o("WAWebBackendEventBus").BackendEventBus.triggerStartingLogout(),
            o("WAComms").stopComms(a),
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
            o("WAWebUserPrefsTabMutex").currentTabHasMutex()
              ? o("WALogger")
                  .ERROR(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "[handleStreamError] replaced with mutex, closing",
                      ])),
                  )
                  .sendLogs("invalid-session-replacement", { sampling: 0.01 })
              : o("WAWebInboundMsgPersistedQueueAdapter").stopInboundMsgQueue(),
            o("WAComms").stopComms(a),
            Promise.resolve("NO_ACK")
          );
        n.type === "xml-not-well-formed" &&
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
      return Promise.resolve("CLOSE_SOCKET");
    }
    async function h(e) {
      return (
        o("WAComms").stopComms(e),
        n("cr:18918") != null &&
          o("WAWebCanonicalGating").isCanonicalAuthV2Enabled() &&
          (await n("cr:18918").waitForCanonicalAuthV2Registration(
            "continue_in_place",
          )),
        await o("WAWebCompanionRegUtils").startLogin(),
        await o("WAWebABPropsUpdateFromStorage").updateABPropsFromStorage(),
        o("WAWebInitializeCryptoLibrary").initializeCryptoLibrary(),
        o("WAWebStartBackend").startBackend(),
        "NO_ACK"
      );
    }
    function y(e) {
      return e === p
        ? o("WAWebAppCommsCloseReason").AppCommsCloseReason.StreamErrorCode515
        : e === _
          ? o("WAWebAppCommsCloseReason").AppCommsCloseReason.StreamErrorCode516
          : o("WAWebAppCommsCloseReason").AppCommsCloseReason
              .StreamErrorCodeOther;
    }
    function C(e) {
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
    l.default = g;
  },
  98,
);
