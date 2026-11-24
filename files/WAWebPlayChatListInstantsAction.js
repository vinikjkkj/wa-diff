__d(
  "WAWebPlayChatListInstantsAction",
  [
    "WALogger",
    "WAWebChatCollection",
    "WAWebChatInstantCountsReader",
    "WAWebInstantsConsumption",
    "WAWebMsgCollection",
    "WAWebOpenInstantViewerAction",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = new WeakSet();
    async function m(t) {
      var n = o("WAWebChatCollection").ChatCollection.get(t);
      if (n == null) {
        o("WALogger")
          .WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "instants: the chat-list Zap pill was pressed for a chat that is not loaded",
              ])),
          )
          .sendLogs("instants-chat-list-play-no-chat");
        return;
      }
      var a;
      try {
        a = await p(n);
      } catch (e) {
        o("WALogger")
          .WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "instants: playing a chat's Zaps from the chat list failed",
              ])),
          )
          .catching(r("getErrorSafe")(e))
          .sendLogs("instants-chat-list-play-failed");
        return;
      }
      if (a != null) {
        var i = a.filter(function (e) {
          return o("WAWebInstantsConsumption").canConsumeInstant(e);
        });
        if (i.length === 0) {
          o("WALogger")
            .WARN(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "instants: the chat-list Zap pill was pressed with no playable Zap",
                ])),
            )
            .sendLogs("instants-chat-list-play-nothing-playable");
          return;
        }
        (i
          .filter(function (e) {
            return !d.has(e);
          })
          .forEach(function (e) {
            (d.add(e),
              e.once("change:ack", function () {
                (d.delete(e),
                  o("WAWebChatInstantCountsReader").recountChatInstants(n, !0));
              }));
          }),
          o("WAWebOpenInstantViewerAction").openInstantViewerOn(i));
      }
    }
    async function p(e) {
      var t = await o("WAWebChatInstantCountsReader").readUnplayedInstantKeys(
        e,
      );
      if (t.length === 0)
        return (
          o("WALogger")
            .WARN(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "instants: the chat-list Zap pill was pressed with no unplayed Zap stored",
                ])),
            )
            .sendLogs("instants-chat-list-play-nothing-stored"),
          null
        );
      var n = new Map(
          t.map(function (e, t) {
            return [e, t];
          }),
        ),
        r = await o("WAWebMsgCollection").MsgCollection.getMessagesById(t),
        a = r.messages;
      return a.sort(function (e, t) {
        var r, o;
        return (
          ((r = n.get(e.id.toString())) != null ? r : 0) -
          ((o = n.get(t.id.toString())) != null ? o : 0)
        );
      });
    }
    l.playChatListInstants = m;
  },
  98,
);
