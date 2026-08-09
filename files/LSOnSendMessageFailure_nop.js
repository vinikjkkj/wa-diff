__d(
  "LSOnSendMessageFailure.nop",
  ["MWChatInteraction", "Promise", "err", "promiseDone", "requireDeferred"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = r("requireDeferred")("sendToSentQPLLogger").__setRef(
        "LSOnSendMessageFailure.nop",
      );
    function u(t, o, a, i) {
      if (a == null) return (e || (e = n("Promise"))).resolve();
      var l = c(a);
      return (
        l == null ||
          r("promiseDone")(
            s.load().then(function (e) {
              return e.markSendToSentFail(
                l,
                "send_message_server_error",
                r("err")("send_message_server_error: %s", i),
              );
            }),
          ),
        (e || (e = n("Promise"))).resolve()
      );
    }
    function c(e) {
      var t = o("MWChatInteraction").get(o("MWChatInteraction").s2sKey(e));
      return t == null ? null : Number(t);
    }
    ((u.__nop_name__ = "LSOnSendMessageFailure"), (l.default = u));
  },
  98,
);
