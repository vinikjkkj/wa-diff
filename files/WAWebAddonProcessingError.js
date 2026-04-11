__d(
  "WAWebAddonProcessingError",
  ["$InternalEnum", "WAWebHandleMsgError", "WAWebWamEnumE2eFailureReason"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = n("$InternalEnum")({
        MISSING_THREAD_MESSAGE_ID: "missing_thread_message_id",
        MISSING_THREAD_MESSAGE_SENDER_JID: "missing_thread_message_sender_jid",
      }),
      s = (function (e) {
        function t(t, n) {
          var r,
            a = "type: " + t + ", errorCode: " + String(n);
          return (
            (r =
              e.call(
                this,
                a,
                o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
                  .INVALID_MESSAGE,
              ) || this),
            (r.name = "PlaceholderValidationError"),
            r
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(o("WAWebHandleMsgError").MessageValidationError),
      u = function (n, r) {
        var t = n.threadMsgId,
          o = n.threadMsgSenderJid;
        if (t == null) throw new s(r, e.MISSING_THREAD_MESSAGE_ID);
        if (o == null) throw new s(r, e.MISSING_THREAD_MESSAGE_SENDER_JID);
        return { threadMsgId: t, threadMsgSenderJid: o };
      };
    l.validateMsgMeta = u;
  },
  98,
);
