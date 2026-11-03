__d(
  "WAWebLoginHandleStanza",
  [
    "WAComms",
    "WADeprecatedWapParser",
    "WALogger",
    "WAWap",
    "WAWebAltDeviceLinkingHandleNotification",
    "WAWebHandleCompanionReqRefreshNotification",
    "WAWebHandleStanzaCommon",
    "WAWebShortcakeLinkingHandleNotification",
    "WAWebShortcakeLinkingHandlePasskeyPrologueRequest",
    "WAWebURLUtils",
    "WAWebWamDeviceLinkReporter",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f = new (r("WADeprecatedWapParser"))("loginStreamErrorParser", function (
        e,
      ) {
        return (
          e.assertTag("stream:error"),
          e.hasAttr("code")
            ? { type: "code", code: e.attrInt("code") }
            : { type: "other" }
        );
      });
    async function g(t) {
      var n = f.parse(t);
      if (n.error)
        return (
          o("WALogger").ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[loginStreamError] Parsing Error: ",
                "",
              ])),
            n.error.toString(),
          ),
          "CLOSE_SOCKET"
        );
      var a = n.success;
      return a.type === "code" && a.code === 515
        ? (o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[reload] received 515, navigating to main app",
              ])),
          ),
          o("WAComms").stopComms(),
          await o(
            "WAWebWamDeviceLinkReporter",
          ).waitForDeviceLinkEventPersistence(),
          (self.location.href = r("WAWebURLUtils").consumeLoginNextParam(
            self.location.search,
          )),
          "NO_ACK")
        : (o("WALogger").WARN(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[loginStreamError] unexpected stream:error, closing socket",
              ])),
          ),
          "CLOSE_SOCKET");
    }
    function h(e) {
      var t,
        n = (t = e.attrs) == null ? void 0 : t.type,
        r = n != null ? o("WAWap").decodeAsString(n) : null;
      switch (r) {
        case "link_code_companion_reg":
          return o(
            "WAWebAltDeviceLinkingHandleNotification",
          ).handleAltDeviceLinkingNotification(e);
        case "companion_reg_refresh":
          return o(
            "WAWebHandleCompanionReqRefreshNotification",
          ).handleCompanionReqRefreshNotification(e);
        case "crsc_continuation":
          return o(
            "WAWebShortcakeLinkingHandleNotification",
          ).handleShortcakeLinkingNotification(e);
        case "passkey_prologue_request":
          return o(
            "WAWebShortcakeLinkingHandlePasskeyPrologueRequest",
          ).handlePasskeyPrologueRequestNotification(e);
        default:
          return (
            o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[handleLoginStanza] unhandled notification type:",
                  "",
                ])),
              r,
            ),
            null
          );
      }
    }
    async function y(e, t, n) {
      var r;
      if (e.tag === "iq") return o("WAWebHandleStanzaCommon").handleIq(e);
      switch (e.tag) {
        case "stream:error":
          return g(e);
        case "failure":
          return (
            o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "[handleLoginStanza] received failure stanza, stopping comms",
                ])),
            ),
            o("WAComms").stopComms(),
            "NO_ACK"
          );
        case "notification":
          return h(e);
      }
      return (
        o("WALogger").LOG(
          m ||
            (m = babelHelpers.taggedTemplateLiteralLoose([
              "[handleLoginStanza] unhandled stanza tag:",
              " type:",
              "",
            ])),
          e.tag,
          (r = e.attrs) == null ? void 0 : r.type,
        ),
        null
      );
    }
    async function C(e, t, n) {
      n === void 0 && (n = 0);
      try {
        var a = await y(e, t, n);
        if (a != null) return a;
      } catch (t) {
        var i, l;
        (o("WALogger").LOG(
          p ||
            (p = babelHelpers.taggedTemplateLiteralLoose([
              "[handleStanza] exception for tag:",
              " type:",
              " id:",
              "",
            ])),
          e.tag,
          (i = e.attrs) == null ? void 0 : i.type,
          (l = e.attrs) == null ? void 0 : l.id,
        ),
          o("WALogger")
            .ERROR(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "[handleStanza] ",
                  "",
                ])),
              r("getErrorSafe")(t).stack,
            )
            .sendLogs("handle-stanza"));
      }
      return "NO_ACK";
    }
    l.default = C;
  },
  98,
);
