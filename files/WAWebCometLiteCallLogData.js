__d(
  "WAWebCometLiteCallLogData",
  [
    "WALogger",
    "WAWebContactCollection",
    "WAWebFrontendMsgGetters",
    "WAWebMsgGetters",
    "WAWebMsgKey",
    "WAWebMsgQueryUtils",
    "WAWebWid",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 30;
    async function u() {
      try {
        return await o("WAWebMsgQueryUtils").getVoipCallLogMsgs(s, null);
      } catch (t) {
        return (
          o("WALogger").ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "WAWebCometLiteCallLogData: failed to read call log ",
                "",
              ])),
            t,
          ),
          []
        );
      }
    }
    function c(e) {
      var t = [];
      for (var n of e) {
        var a,
          i,
          l,
          s,
          u = r("WAWebMsgKey").from(n.id).remote;
        if (r("WAWebWid").isUser(u)) {
          var c = o("WAWebFrontendMsgGetters").getMaybeChat(n),
            d =
              (a =
                (i = c == null ? void 0 : c.contact) != null
                  ? i
                  : o("WAWebContactCollection").ContactCollection.get(u)) !=
              null
                ? a
                : null;
          t.push({
            key: n.id.toString(),
            msg: n,
            item: {
              wid:
                (l =
                  (s = c == null ? void 0 : c.id) != null
                    ? s
                    : d == null
                      ? void 0
                      : d.id) != null
                  ? l
                  : u,
              contact: d,
              chat: c != null ? c : null,
            },
            isVideo: o("WAWebMsgGetters").getIsVideoCall(n),
            isMissed: o("WAWebMsgGetters").getIsMissedCall(n),
            isOutgoing: o("WAWebMsgGetters").getIsSentByMe(n),
          });
        }
      }
      return t;
    }
    ((l.loadRecentCallLogMsgs = u), (l.deriveRecentCalls = c));
  },
  98,
);
