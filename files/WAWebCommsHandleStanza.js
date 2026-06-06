__d(
  "WAWebCommsHandleStanza",
  [
    "WALogger",
    "WAWebCommsHandleLoggedInStanzaDeferred",
    "WAWebCommsHandleWorkerCompatibleStanza",
    "WAWebHandleStanzaCommon",
    "WAWebOfflineHandler",
    "WAWebVoipBackendEnqueueCallOfferPlaceholder",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    async function u(e, t, n) {
      var r = e.attrs;
      if (r.offline) {
        var a = parseInt(r.t, 10),
          i = parseInt(r.offline, 10);
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
    async function c(t, n, a) {
      a === void 0 && (a = 0);
      try {
        var i = await u(t, n, a);
        if (i != null) return i;
      } catch (n) {
        var l, c;
        (o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[handleStanza] exception for tag:",
              " type:",
              " id:",
              "",
            ])),
          t.tag,
          (l = t.attrs) == null ? void 0 : l.type,
          (c = t.attrs) == null ? void 0 : c.id,
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
      }
      return "NO_ACK";
    }
    l.default = c;
  },
  98,
);
