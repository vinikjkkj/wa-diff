__d(
  "WAWebHatchMetadataBotCopy",
  [
    "WAWebGenerateHatchProtocolMessage",
    "WAWebMsgType",
    "WAWebWasaHatchOutboundWrapper",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.innerMessage,
        n = e.msg;
      return o("WAWebWasaHatchOutboundWrapper").wrapHatchOutboundMessage({
        currentStanzaId: n.id.id,
        innerMessage: s(n, t),
      });
    }
    function s(e, t) {
      var n = e.hatchMetadataSync;
      return !u(e, t) || (n == null ? void 0 : n.type) !== "req"
        ? t
        : babelHelpers.extends(
            {},
            o("WAWebGenerateHatchProtocolMessage").generateHatchProtocolMessage(
              n,
            ),
            { messageContextInfo: t.messageContextInfo },
          );
    }
    function u(e, t) {
      return (
        e.type === o("WAWebMsgType").MSG_TYPE.CHAT &&
        t.protocolMessage == null &&
        t.editedMessage == null
      );
    }
    l.genHatchOutboundCopy = e;
  },
  98,
);
