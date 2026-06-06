__d(
  "WAWebShortcakeLinkingHandlePasskeyPrologueRequest",
  [
    "WABase64",
    "WALogger",
    "WASmaxMdPasskeyPrologueRequestNotificationRPC",
    "WASmaxOutMessageFallbackDeliverResponseBadStanza",
    "WASmaxParsingFailure",
    "WAWebAdvSignatureApi",
    "WAWebBackendApi",
    "WAWebCreateNackFromStanza",
    "WAWebShortcakeLinkingApi",
    "WAWebShortcakeLinkingHandoffProof",
    "WAWebShortcakeLinkingRequestOptionsCache",
    "WAWebUserPrefsMultiDevice",
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
      f = 32;
    async function g() {
      o("WAWebShortcakeLinkingHandoffProof").getHandoffKeyHolder().clear();
      try {
        var t = o("WAWebUserPrefsMultiDevice").getADVSecretKey();
        if (t != null) {
          var n = o("WABase64").decodeB64(t);
          if (n.byteLength === f) {
            var a = await o(
              "WAWebShortcakeLinkingHandoffProof",
            ).derivePairingHandoffHmacKey(n);
            (o("WAWebShortcakeLinkingHandoffProof")
              .getHandoffKeyHolder()
              .stash(a),
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "Shortcake handoff: stashed handoff key",
                  ])),
              ));
          } else
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "Shortcake handoff: unexpected secret length ",
                  "",
                ])),
              n.byteLength,
            );
        } else
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "Shortcake handoff: no prior secret",
              ])),
          );
      } catch (e) {
        o("WALogger").ERROR(
          c ||
            (c = babelHelpers.taggedTemplateLiteralLoose([
              "Shortcake handoff: derivation failed: ",
              "",
            ])),
          r("getErrorSafe")(e).message,
        );
      }
      await o("WAWebAdvSignatureApi").generateADVSecretKey();
    }
    async function h(e) {
      var t;
      try {
        t = o(
          "WASmaxMdPasskeyPrologueRequestNotificationRPC",
        ).receivePasskeyPrologueRequestNotificationRPC(e);
      } catch (t) {
        if (t instanceof o("WASmaxParsingFailure").SmaxParsingFailure)
          return (
            o("WALogger").ERROR(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "[shortcake] parse passkey_prologue_request - ",
                  "",
                ])),
              r("getErrorSafe")(t).message,
            ),
            o(
              "WASmaxOutMessageFallbackDeliverResponseBadStanza",
            ).makeDeliverResponseBadStanza(
              {
                ackError: o("WAWebCreateNackFromStanza").NackReason
                  .ParsingError,
              },
              e,
            )
          );
        throw t;
      }
      var n = t,
        a = n.makePasskeyPrologueRequestNotificationResponseAck,
        i = n.parsedRequest,
        l = i.passkeyRequestOptions;
      return (
        l != null
          ? (o("WALogger").LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "[shortcake] caching embedded PasskeyRequestOptions",
                ])),
            ),
            o(
              "WAWebShortcakeLinkingRequestOptionsCache",
            ).setCachedRequestOptions(l.elementValue))
          : o("WALogger").LOG(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "[shortcake] passkey_prologue_request: no embedded options",
                ])),
            ),
        o("WAWebShortcakeLinkingApi").getShortcakeLinkingStage() ===
        o("WAWebShortcakeLinkingApi").ShortcakeLinkingStage.NotStarted
          ? await g()
          : o("WALogger").LOG(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "Shortcake handoff: in progress, skip stash + ADV rotate",
                ])),
            ),
        o("WAWebBackendApi").frontendFireAndForget(
          "passkeyPrologueRequest",
          {},
        ),
        a()
      );
    }
    l.handlePasskeyPrologueRequestNotification = h;
  },
  98,
);
