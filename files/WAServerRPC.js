__d(
  "WAServerRPC",
  [
    "Promise",
    "WACreateHandleAppdata",
    "WACreateHandleChatState",
    "WACreateHandleErrorStanza",
    "WACreateHandleFailure",
    "WACreateHandleInfoBulletin",
    "WACreateHandleIq",
    "WACreateHandleMessage",
    "WACreateHandleNotification",
    "WACreateHandleReceipt",
    "WACreateHandleStreamError",
    "WACreateHandleSuccess",
    "WAHandleDecisionTreeResult",
    "WAOneQueueHandler",
    "WAServerRPCLogger",
    "WAStanzaRootTag",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u;
    function c(t) {
      var r = o("WACreateHandleInfoBulletin").createHandleInfoBulletin(t),
        a = o("WACreateHandleStreamError").createHandleStreamError(t),
        i = o("WACreateHandleFailure").createHandleFailure(t),
        l = o("WACreateHandleSuccess").createHandleSuccess(t),
        c = o("WACreateHandleMessage").createHandleMessage(t),
        d = o("WACreateHandleIq").createHandleIq(t),
        m = o("WACreateHandleChatState").createHandleChatState(t),
        p = o("WACreateHandleErrorStanza").createHandleErrorStanza(t),
        _ = o("WACreateHandleNotification").createHandleNotification(t),
        f = o("WACreateHandleAppdata").createHandleAppdata(t),
        g = o("WACreateHandleReceipt").createHandleReceipt(t),
        h = function (h, y) {
          switch (h.tag) {
            case o("WAStanzaRootTag").STANZA_ROOT_TAG.MESSAGE:
              return o("WAOneQueueHandler").handleWithOneQueue(c)(h, y);
            case o("WAStanzaRootTag").STANZA_ROOT_TAG.NOTIFICATION:
              return o("WAOneQueueHandler").handleWithOneQueue(_)(h, y);
            case o("WAStanzaRootTag").STANZA_ROOT_TAG.RECEIPT:
              return o("WAOneQueueHandler").handleWithOneQueue(g)(h, y);
            case o("WAStanzaRootTag").STANZA_ROOT_TAG.CHATSTATE:
              return o("WAHandleDecisionTreeResult").handleDecisionTreeResult(
                h,
                m(h),
              );
            case o("WAStanzaRootTag").STANZA_ROOT_TAG.APPDATA:
              return o("WAOneQueueHandler").handleWithOneQueue(f)(h, y);
            case o("WAStanzaRootTag").STANZA_ROOT_TAG.FAILURE:
              return o("WAHandleDecisionTreeResult").handleDecisionTreeResult(
                h,
                i(h),
              );
            case o("WAStanzaRootTag").STANZA_ROOT_TAG.STREAM_ERROR:
              return o("WAHandleDecisionTreeResult").handleDecisionTreeResult(
                h,
                a(h),
              );
            case o("WAStanzaRootTag").STANZA_ROOT_TAG.IQ:
              return o("WAHandleDecisionTreeResult").handleDecisionTreeResult(
                h,
                d(h),
              );
            case o("WAStanzaRootTag").STANZA_ROOT_TAG.IB:
              return o("WAHandleDecisionTreeResult").handleDecisionTreeResult(
                h,
                r(h),
              );
            case o("WAStanzaRootTag").STANZA_ROOT_TAG.ERROR:
              return o("WAHandleDecisionTreeResult").handleDecisionTreeResult(
                h,
                p(h),
              );
            case o("WAStanzaRootTag").STANZA_ROOT_TAG.SUCCESS:
              return o("WAHandleDecisionTreeResult").handleDecisionTreeResult(
                h,
                l(h),
              );
            case o("WAStanzaRootTag").STANZA_ROOT_TAG.XML_STREAM_END:
              return (u || (u = n("Promise"))).resolve("NO_ACK");
            default:
              return (
                o("WAServerRPCLogger").logger.WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "Unsupported stanza: ",
                      "",
                    ])),
                  h,
                ),
                o("WAServerRPCLogger").logger.ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "Received unsupported stanza: ",
                      "",
                    ])),
                  h.tag,
                ),
                (u || (u = n("Promise"))).resolve("NO_ACK")
              );
          }
        };
      return { handleStanza: h };
    }
    l.makeServerRPC = c;
  },
  98,
);
