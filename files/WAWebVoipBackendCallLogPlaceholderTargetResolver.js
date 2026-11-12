__d(
  "WAWebVoipBackendCallLogPlaceholderTargetResolver",
  [
    "WALogger",
    "WAWebLidMigrationUtils",
    "WAWebMessageProcessUtils",
    "WAWebUserUtils",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.callCreatorWid,
            r = t.callId,
            a = t.groupJid,
            i = yield d(o("WAWebWidFactory").asUserWidOrThrow(n));
          if (i == null) return null;
          var l = o("WAWebUserUtils").isMeAccount(i),
            s,
            u;
          if (a != null) ((s = a), (u = i));
          else if (!l) s = i;
          else
            return (
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[voip:sw] outgoing/self call_log unsupported in SW; skip",
                  ])),
              ),
              null
            );
          return {
            msgKeyId: r,
            fromMe: l,
            callCreatorUserWid: i,
            chatId: s,
            participant: u,
          };
        })),
        c.apply(this, arguments)
      );
    }
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebLidMigrationUtils").toUserLid(e);
          if (t == null)
            return (
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[voip] placeholder target: no LID for the call creator",
                  ])),
              ),
              null
            );
          var n = yield o(
            "WAWebMessageProcessUtils",
          ).selectChatForOneOnOneMessage({ lid: t });
          return o("WAWebWidFactory").asUserWidOrThrow(n.chatId);
        })),
        m.apply(this, arguments)
      );
    }
    l.getCallLogPlaceholderTargetDetails = u;
  },
  98,
);
