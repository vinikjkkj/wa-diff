__d(
  "WAWebSendSharableEventInvitesAction",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebAck",
    "WAWebBroadcastListIdUtils",
    "WAWebBroadcastMsgDataUtils",
    "WAWebChatCollection",
    "WAWebChatGetters",
    "WAWebDBSharableEvent",
    "WAWebGetEphemeralFieldsMsgActionsUtils",
    "WAWebLidMeUserForChat",
    "WAWebMsgKey",
    "WAWebMsgKeyUtils",
    "WAWebSendBroadcastMsgAction",
    "WAWebSendMsgChatAction",
    "WAWebSharableEventInviteMsg",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = "event_invitation",
      u = new Set();
    function c(e, t) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (t.length === 0) return null;
          var n = yield o("WAWebDBSharableEvent").getSharableEvent(e);
          if (n == null) return null;
          var r = o("WAWebBroadcastListIdUtils").createBroadcastListJid(
            function (e) {
              return (
                u.has(e) ||
                o("WAWebChatCollection").ChatCollection.get(
                  o("WAWebWidFactory").createWid(e),
                ) != null
              );
            },
          );
          u.add(r);
          var a = babelHelpers.extends(
            {},
            yield o("WAWebBroadcastMsgDataUtils").createBroadcastMsgDataBase(r),
            yield o(
              "WAWebSharableEventInviteMsg",
            ).buildSharableEventInviteMsgFields(n),
          );
          return o("WAWebSendBroadcastMsgAction").sendBroadcastMsgAction({
            contextSource: s,
            isParentHidden: !0,
            msgData: a,
            recipients: t,
          });
        })),
        d.apply(this, arguments)
      );
    }
    function m(e, t) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var a = yield o("WAWebDBSharableEvent").getSharableEvent(t);
          if (a == null)
            return (
              o("WALogger").WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[sharable_event][invite] chat invite not sent: no stored event eventId=",
                    "",
                  ])),
                t,
              ),
              null
            );
          var i = o("WAWebLidMeUserForChat").getMeUserLidOrJidForChat(
              n,
              o("WAWebMsgKeyUtils").TranslateMsgKeyType.Message,
            ),
            l = o("WAWebChatGetters").getIsGroup(n) ? i : void 0,
            s = babelHelpers.extends(
              {
                id: new (r("WAWebMsgKey"))({
                  fromMe: !0,
                  remote: n.id,
                  id: yield r("WAWebMsgKey").newId(),
                  participant: l,
                }),
                t: o("WATimeUtils").unixTime(),
                from: i,
                to: n.id,
                author: l,
                isNewMsg: !0,
                local: !0,
                ack: o("WAWebAck").ACK.CLOCK,
              },
              yield o(
                "WAWebSharableEventInviteMsg",
              ).buildSharableEventInviteMsgFields(a),
              o("WAWebGetEphemeralFieldsMsgActionsUtils").getEphemeralFields(n),
            ),
            u = o("WAWebSendMsgChatAction").addAndSendMsgToChat(n, s),
            c = u[1];
          return c;
        })),
        p.apply(this, arguments)
      );
    }
    ((l.sendSharableEventInvites = c), (l.sendSharableEventInviteToChat = m));
  },
  98,
);
