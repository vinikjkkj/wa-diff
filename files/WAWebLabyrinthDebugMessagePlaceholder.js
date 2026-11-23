__d(
  "WAWebLabyrinthDebugMessagePlaceholder",
  ["WAWebProtobufsWeb.pb"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = new Map([
        [
          (e = o("WAWebProtobufsWeb.pb")).WebMessageInfo$StubType.CIPHERTEXT,
          "waiting",
        ],
        [e.WebMessageInfo$StubType.PAYMENT_CIPHERTEXT, "waitingPayment"],
        [e.WebMessageInfo$StubType.FUTUREPROOF, "unsupported"],
        [e.WebMessageInfo$StubType.OVERSIZED, "oversized"],
        [e.WebMessageInfo$StubType.QUARANTINED_MESSAGE, "quarantined"],
        [e.WebMessageInfo$StubType.STATUS_MENTION, "statusMention"],
        [
          e.WebMessageInfo$StubType.PAYMENT_ACTION_REQUEST_DECLINED,
          "paymentDeclined",
        ],
        [
          e.WebMessageInfo$StubType.PAYMENT_ACTION_REQUEST_CANCELLED,
          "paymentCanceled",
        ],
        [e.WebMessageInfo$StubType.CHANGE_LIMIT_SHARING, "limitSharingChanged"],
      ]);
    function u(e) {
      var t,
        n = e.message,
        r = e.messageStubParameters,
        a = e.messageStubType,
        i = e.quarantinedMessage;
      if (a == null) return null;
      var l = s.get(a);
      if (l == null && n != null) return null;
      var u = o("WAWebProtobufsWeb.pb").WebMessageInfo$StubType.getName(a);
      return {
        facts: [{ kind: "placeholderType", parameters: r, value: u }],
        kind: l != null ? l : "placeholder",
        previewText:
          l == null
            ? u
            : (t = i == null ? void 0 : i.extractedText) != null
              ? t
              : null,
      };
    }
    l.summarizeLabyrinthDebugPlaceholder = u;
  },
  98,
);
