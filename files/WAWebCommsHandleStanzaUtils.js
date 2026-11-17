__d(
  "WAWebCommsHandleStanzaUtils",
  [
    "WAJids",
    "WALogger",
    "WAParsableWapNode",
    "WAWeb-dexie",
    "WAWebBrokerGlobalAppState",
    "WAWebCreateNackFromStanza",
    "WAWebPostIncomingMessageDropMetric",
    "WAWebPostUnknownStanzaMetric",
    "WAWebWid",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m;
    function p(t, n) {
      if (r("WAWebBrokerGlobalAppState").isLogoutInProgress) {
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "handleMsg: msg not processed, logout in progress: ",
              "",
            ])),
          n.name,
        );
        return;
      }
      if (_(t)) {
        var a;
        o("WALogger")
          .ERROR(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "handleMsg: drop msg with username field",
              ])),
          )
          .catching(n)
          .tags("messaging", "username")
          .sendLogs(
            r("WAWebWid").isGroup(
              (a = t.attrs.from) == null ? void 0 : a.toString(),
            )
              ? "incoming-message-drop-internal-error-username-group"
              : "incoming-message-drop-internal-error-username",
          );
      }
      if (n instanceof o("WAParsableWapNode").XmppParsingFailure)
        return (
          o("WAWebPostUnknownStanzaMetric").postUnknownStanzaMetric(t),
          o(
            "WAWebPostIncomingMessageDropMetric",
          ).postIncomingMessageDropInvalidStanza(t),
          o("WALogger")
            .LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "handleMsg: error while parsing message: ",
                  "",
                ])),
              n,
            )
            .tags("messaging")
            .sendLogs("failedParsingMessageStanza", { sampling: 0.01 }),
          o("WAWebCreateNackFromStanza").createNackFromStanza(
            t,
            o("WAWebCreateNackFromStanza").NackReason.ParsingError,
          )
        );
      if (n instanceof r("WAWeb-dexie").DexieError) {
        (o(
          "WAWebPostIncomingMessageDropMetric",
        ).postIncomingMessageDropDBOperationFailed(t),
          o("WALogger")
            .ERROR(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "handleMsg: drop msg",
                ])),
            )
            .catching(n)
            .sendLogs("incoming-message-drop-db-operation-failed", {
              sampling: 0.01,
            }));
        return;
      }
      return (
        o("WALogger")
          .ERROR(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "handleMsg: drop msg, node: ",
                "",
              ])),
            o("WAJids").maybeSanitizeLogLineText(t.toString()),
          )
          .verbose(),
        o("WALogger")
          .ERROR(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "handleMsg: drop msg",
              ])),
          )
          .catching(n)
          .sendLogs("incoming-message-drop-internal-error", { sampling: 0.01 }),
        o(
          "WAWebPostIncomingMessageDropMetric",
        ).postIncomingMessageDropInternalError(t),
        o("WAWebCreateNackFromStanza").createNackFromStanza(
          t,
          o("WAWebCreateNackFromStanza").NackReason.UnhandledError,
        )
      );
    }
    function _(e) {
      var t = e.attrs;
      if (
        t.username != null ||
        t.participant_username != null ||
        t.peer_recipient_username != null ||
        t.recipient_username != null
      )
        return !0;
      var n = e.content;
      return (
        Array.isArray(n) &&
        n.some(function (e) {
          return _(e);
        })
      );
    }
    function f(e) {
      if (Array.isArray(e.content) && e.content.length > 0) {
        var t = e.content[0].tag;
        return t === "offer" || t === "accept" || t === "reject";
      }
      return !1;
    }
    ((l.handleMessageParsingFailure = p), (l.isCallReceipt = f));
  },
  98,
);
