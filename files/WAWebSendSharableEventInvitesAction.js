__d(
  "WAWebSendSharableEventInvitesAction",
  [
    "WAWebBroadcastListIdUtils",
    "WAWebBroadcastMsgDataUtils",
    "WAWebChatCollection",
    "WAWebSendBroadcastMsgAction",
    "WAWebSharableEventCollection",
    "WAWebSharableEventInviteMsg",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = "event_invitation",
      s = new Set();
    function u(e, t) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var r = o("WAWebSharableEventCollection").SharableEventCollection.get(
            t,
          );
          if (r == null || n.length === 0) return null;
          var a = o("WAWebBroadcastListIdUtils").createBroadcastListJid(
            function (e) {
              return (
                s.has(e) ||
                o("WAWebChatCollection").ChatCollection.get(
                  o("WAWebWidFactory").createWid(e),
                ) != null
              );
            },
          );
          s.add(a);
          var i = babelHelpers.extends(
            {},
            yield o("WAWebBroadcastMsgDataUtils").createBroadcastMsgDataBase(a),
            yield o(
              "WAWebSharableEventInviteMsg",
            ).buildSharableEventInviteMsgFields(r),
          );
          return o("WAWebSendBroadcastMsgAction").sendBroadcastMsgAction({
            contextSource: e,
            isParentHidden: !0,
            msgData: i,
            recipients: n,
          });
        })),
        c.apply(this, arguments)
      );
    }
    l.sendSharableEventInvites = u;
  },
  98,
);
