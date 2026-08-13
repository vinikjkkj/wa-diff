__d(
  "WAWebCoexV2SupportedMsgTypes",
  [],
  function (t, n, r, o, a, i) {
    var e = [
      "viewOnceMessage",
      "viewOnceMessageV2",
      "viewOnceMessageV2Extension",
      "liveLocationMessage",
      "sendPaymentMessage",
      "requestPaymentMessage",
      "declinePaymentRequestMessage",
      "cancelPaymentRequestMessage",
      "paymentInviteMessage",
      "paymentReminderMessage",
      "splitPaymentMessage",
      "splitPaymentUpdateMessage",
      "callLogMesssage",
      "bcallMessage",
      "scheduledCallCreationMessage",
      "scheduledCallEditMessage",
    ];
    function l(t) {
      var n,
        r,
        o,
        a,
        i,
        s,
        u =
          (n = (r = t.deviceSentMessage) == null ? void 0 : r.message) != null
            ? n
            : (o = t.ephemeralMessage) == null
              ? void 0
              : o.message;
      return u != null
        ? l(u)
        : ((a = t.locationMessage) == null ? void 0 : a.isLive) === !0 ||
            ((i = t.eventMessage) == null ? void 0 : i.isScheduleCall) === !0 ||
            ((s = t.protocolMessage) == null ? void 0 : s.botFeedbackMessage) !=
              null
          ? !1
          : !e.some(function (e) {
              return t[e] != null;
            });
    }
    i.isCoexV2SupportedProtobuf = l;
  },
  66,
);
