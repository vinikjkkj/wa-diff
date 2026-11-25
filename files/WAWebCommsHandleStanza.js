__d(
  "WAWebCommsHandleStanza",
  [
    "WALogger",
    "WAWebCommsHandleLoggedInStanzaDeferred",
    "WAWebCommsHandleWorkerCompatibleStanza",
    "WAWebHandleStanzaCommon",
    "WAWebOfflineHandler",
    "WAWebOneQueue",
    "WAWebVoipBackendEnqueueCallOfferPlaceholder",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    async function u(t, n, a) {
      a === void 0 && (a = 0);
      var i = c(t, n, a),
        l = o("WAWebOneQueue").countOfflineStanzaForPullMode(t),
        u = o("WAWebOfflineHandler").OfflineMessageHandler.countOfflineEnvelope(
          t,
        );
      try {
        var d = await i;
        if (d != null) return d;
      } catch (n) {
        var m, p;
        (o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[handleStanza] exception for tag:",
              " type:",
              " id:",
              "",
            ])),
          t.tag,
          (m = t.attrs) == null ? void 0 : m.type,
          (p = t.attrs) == null ? void 0 : p.id,
        ),
          o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[handleStanza] ",
                  "",
                ])),
              r("getErrorSafe")(n).stack,
            )
            .sendLogs("handle-stanza"));
      } finally {
        (l(), u());
      }
      return "NO_ACK";
    }
    async function c(e, t, n) {
      var r = e.attrs;
      if (r.offline) {
        var a = parseInt(String(r.t), 10),
          i = parseInt(String(r.offline), 10);
        o("WAWebOfflineHandler").OfflineMessageHandler.newOfflineStanza(
          a,
          n,
          i,
        );
      }
      if (e.tag === "iq") return o("WAWebHandleStanzaCommon").handleIq(e);
      var l = o(
        "WAWebCommsHandleWorkerCompatibleStanza",
      ).handleWorkerCompatibleStanza(e);
      return l != null
        ? l
        : (o(
            "WAWebVoipBackendEnqueueCallOfferPlaceholder",
          ).maybeEnqueueCallOfferPlaceholderFromStanza(e),
          o("WAWebCommsHandleLoggedInStanzaDeferred").handleLoggedInStanza(
            e,
            t,
          ));
    }
    l.default = u;
  },
  98,
);
