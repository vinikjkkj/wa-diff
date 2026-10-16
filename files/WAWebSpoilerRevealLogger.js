__d(
  "WAWebSpoilerRevealLogger",
  [
    "WALogger",
    "WAWebABProps",
    "WAWebGetMessageChatTypeFromWid",
    "WAWebMsgGetters",
    "WAWebSpoilerRevealWamEvent",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      return u(e.id.remote, o("WAWebMsgGetters").getIsSentByMe(e.unsafe()));
    }
    function u(e, t) {
      return { chatWid: e, isOwnMessage: t };
    }
    function c(t) {
      var n = t.chatWid,
        a = t.isOwnMessage;
      try {
        if (
          !o("WAWebABProps").getABPropConfigValue("rich_format_logging_enabled")
        )
          return;
        new (o("WAWebSpoilerRevealWamEvent").SpoilerRevealWamEvent)({
          chatType: o(
            "WAWebGetMessageChatTypeFromWid",
          ).getMessageChatTypeFromWid(n),
          isOwnMessage: a,
        }).commit();
      } catch (t) {
        o("WALogger")
          .WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[spoiler] Failed to log reveal",
              ])),
          )
          .catching(r("getErrorSafe")(t))
          .sendLogs("spoiler-reveal-log-failed", { sampling: 0.1 });
      }
    }
    ((l.getSpoilerRevealContext = s),
      (l.getSpoilerRevealContextFromValues = u),
      (l.logSpoilerReveal = c));
  },
  98,
);
