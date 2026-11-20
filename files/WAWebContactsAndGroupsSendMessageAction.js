__d(
  "WAWebContactsAndGroupsSendMessageAction",
  [
    "fbt",
    "WALogger",
    "WAWebBotBaseGating",
    "WAWebBotTos",
    "WAWebBotTypes",
    "WAWebBusinessProfileCollection",
    "WAWebBusinessProfileGetters",
    "WAWebComposeBoxActions",
    "WAWebContactGetters",
    "WAWebContactsAndGroupsNavigationAction",
    "WAWebFindChatAction",
    "WAWebFrontendContactGetters",
    "WAWebSendMsgResultAction",
    "WAWebSendTextMsgChatAction",
    "WDSToastImperativeHost",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e, u, c;
    function d(e, t, n) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, a) {
          if (o("WAWebFrontendContactGetters").getIsContactBlocked(t))
            return (C(n), "notSent");
          var i = yield o("WAWebFindChatAction")
            .findOrCreateLatestChat(t.id, "chatListUtils")
            .then(
              function (e) {
                return e.chat;
              },
              function (t) {
                return (
                  o("WALogger")
                    .WARN(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "sendMessageFromContactsAndGroups: finding the chat failed",
                        ])),
                    )
                    .catching(r("getErrorSafe")(t)),
                  null
                );
              },
            );
          if (i == null || !i.canSend) return (y(null), "notSent");
          var l = a.trim();
          if (yield p(i))
            return (yield o(
              "WAWebContactsAndGroupsNavigationAction",
            ).openChatFromContactsAndGroups(i))
              ? (o("WAWebComposeBoxActions").ComposeBoxActions.paste(i, l),
                "inComposer")
              : (y(null), "notSent");
          var s = yield f(i, l),
            u = s.reachedChat,
            c = s.result;
          return (c == null ? void 0 : c.messageSendResult) ===
            o("WAWebSendMsgResultAction").SendMsgResult.OK
            ? (h(n, i), "inChat")
            : u
              ? (y(i), "inChat")
              : (y(null), "notSent");
        })),
        m.apply(this, arguments)
      );
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = e.contact;
          if (
            n.businessProfile == null ||
            !o("WAWebBotBaseGating").isBizBot1pEnabled() ||
            o("WAWebBotTos").hasSeenBizBotTos(
              o("WAWebBotTypes").BizBotType.BIZ_1P,
            ) ||
            o("WAWebContactGetters").getIsMe(n)
          )
            return !1;
          var a =
            (t = yield o("WAWebBusinessProfileCollection")
              .BusinessProfileCollection.find(n.id)
              .catch(function (e) {
                return (
                  o("WALogger")
                    .WARN(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "sendMessageFromContactsAndGroups: loading the business profile failed",
                        ])),
                    )
                    .catching(r("getErrorSafe")(e)),
                  null
                );
              })) != null
              ? t
              : n.businessProfile;
          return a != null && o("WAWebBusinessProfileGetters").getIsBizBot1p(a);
        })),
        _.apply(this, arguments)
      );
    }
    function f(e, t) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = !1,
            a = function (r) {
              r.id.fromMe && r.body === t && (n = !0);
            };
          e.msgs.on("add", a);
          try {
            var i = yield o("WAWebSendTextMsgChatAction").sendTextMsgToChat(
              e,
              t,
            );
            return { reachedChat: n || i != null, result: i };
          } catch (e) {
            return (
              o("WALogger")
                .WARN(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "sendMessageFromContactsAndGroups: sending failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e)),
              { reachedChat: n, result: null }
            );
          } finally {
            e.msgs.off("add", a);
          }
        })),
        g.apply(this, arguments)
      );
    }
    function h(e, t) {
      o("WDSToastImperativeHost").showWDSToast({
        action: b(t),
        message: s._(/*BTDS*/ "Message sent to {name}", [s._param("name", e)]),
        testid: "contacts-and-groups-message-sent-toast",
      });
    }
    function y(e) {
      o("WDSToastImperativeHost").showWDSToast({
        action: e == null ? void 0 : b(e),
        message: s._(/*BTDS*/ "Couldn't send this message."),
        testid: "contacts-and-groups-message-not-sent-toast",
        type: "error",
      });
    }
    function C(e) {
      o("WDSToastImperativeHost").showWDSToast({
        message: s._(
          /*BTDS*/ "Can't send a message to blocked contact {contact}.",
          [s._param("contact", e)],
        ),
        testid: "contacts-and-groups-message-blocked-toast",
        type: "error",
      });
    }
    function b(e) {
      return {
        label: s._(/*BTDS*/ "Open chat"),
        onPress: function () {
          o(
            "WAWebContactsAndGroupsNavigationAction",
          ).openChatFromContactsAndGroups(e);
        },
        testid: "contacts-and-groups-message-open-chat",
      };
    }
    l.sendMessageFromContactsAndGroups = d;
  },
  226,
);
