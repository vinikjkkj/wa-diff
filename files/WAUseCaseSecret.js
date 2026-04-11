__d(
  "WAUseCaseSecret",
  ["$InternalEnum", "WABinary", "WACryptoHkdf"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = n("$InternalEnum")({
        POLL_VOTE: "Poll Vote",
        ENC_REACTION: "Enc Reaction",
        ENC_COMMENT: "Enc Comment",
        REPORT_TOKEN: "Report Token",
        EVENT_RESPONSE: "Event Response",
        EVENT_EDIT_ENCRYPTED: "Event Edit",
        POLL_EDIT_ENCRYPTED: "Poll Edit",
        POLL_ADD_OPTION: "Poll Add Option",
        MESSAGE_EDIT: "Message Edit",
      }),
      s = 32;
    function u(e) {
      var t = e.messageSecret,
        n = e.modificationSender,
        r = e.modificationType,
        a = e.parentMsgOriginalSender,
        i = e.stanzaId,
        l = o("WABinary").Binary.build(i, a, n, r).readBuffer();
      return o("WACryptoHkdf").extractAndExpand(
        t instanceof ArrayBuffer ? new Uint8Array(t) : t,
        l,
        s,
      );
    }
    ((l.UseCaseSecretModificationType = e), (l.createUseCaseSecret = u));
  },
  98,
);
