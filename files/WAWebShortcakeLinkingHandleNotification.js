__d(
  "WAWebShortcakeLinkingHandleNotification",
  [
    "WALogger",
    "WASmaxMdSetPrimaryEphemeralIdentityNotificationRPC",
    "WASmaxOutMessageFallbackDeliverResponseBadStanza",
    "WAWebCreateNackFromStanza",
    "WAWebNoop",
    "WAWebShortcakeLinkingApi",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = null;
    function d(t) {
      var n = t.content;
      if (!Array.isArray(n) || n.length === 0)
        return o(
          "WASmaxOutMessageFallbackDeliverResponseBadStanza",
        ).makeDeliverResponseBadStanza(
          { ackError: o("WAWebCreateNackFromStanza").NackReason.ParsingError },
          t,
        );
      var r = n[0].tag;
      return r === "primary_ephemeral_identity"
        ? m(t)
        : (o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "Shortcake: unhandled crsc_continuation child tag: ",
                "",
              ])),
            r,
          ),
          o(
            "WASmaxOutMessageFallbackDeliverResponseBadStanza",
          ).makeDeliverResponseBadStanza(
            {
              ackError: o("WAWebCreateNackFromStanza").NackReason.ParsingError,
            },
            t,
          ));
    }
    function m(e) {
      var t = o(
          "WASmaxMdSetPrimaryEphemeralIdentityNotificationRPC",
        ).receiveSetPrimaryEphemeralIdentityNotificationRPC(e),
        n = t.makeSetPrimaryEphemeralIdentityNotificationResponseAck,
        a = t.parsedRequest;
      if (!a)
        return (
          o("WALogger").ERROR(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "Shortcake: parse PrimaryEphemeralIdentity failed",
              ])),
          ),
          o(
            "WASmaxOutMessageFallbackDeliverResponseBadStanza",
          ).makeDeliverResponseBadStanza(
            {
              ackError: o("WAWebCreateNackFromStanza").NackReason.ParsingError,
            },
            e,
          )
        );
      var i = o("WAWebShortcakeLinkingApi")
        .handlePrimaryEphemeralIdentity(a.primaryEphemeralIdentityElementValue)
        .then(r("WAWebNoop"))
        .catch(function (e) {
          o("WALogger").ERROR(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "Shortcake: error handling PrimaryEphemeralIdentity: ",
                "",
              ])),
            r("getErrorSafe")(e).message,
          );
        })
        .finally(function () {
          c === i && (c = null);
        });
      return ((c = i), n());
    }
    l.handleShortcakeLinkingNotification = d;
  },
  98,
);
