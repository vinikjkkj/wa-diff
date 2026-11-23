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
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e, u, c;
    async function d(t, n, a) {
      if (o("WAWebFrontendContactGetters").getIsContactBlocked(t))
        return (g(n), "notSent");
      var i = await o("WAWebFindChatAction")
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
      if (i == null || !i.canSend) return (f(null), "notSent");
      var l = a.trim();
      if (await m(i))
        return (await o(
          "WAWebContactsAndGroupsNavigationAction",
        ).openChatFromContactsAndGroups(i))
          ? (o("WAWebComposeBoxActions").ComposeBoxActions.paste(i, l),
            "inComposer")
          : (f(null), "notSent");
      var s = await p(i, l),
        u = s.reachedChat,
        c = s.result;
      return (c == null ? void 0 : c.messageSendResult) ===
        o("WAWebSendMsgResultAction").SendMsgResult.OK
        ? (_(n, i), "inChat")
        : u
          ? (f(i), "inChat")
          : (f(null), "notSent");
    }
    async function m(e) {
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
        (t = await o("WAWebBusinessProfileCollection")
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
    }
    async function p(e, t) {
      var n = !1,
        a = function (r) {
          r.id.fromMe && r.body === t && (n = !0);
        };
      e.msgs.on("add", a);
      try {
        var i = await o("WAWebSendTextMsgChatAction").sendTextMsgToChat(e, t);
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
    }
    function _(e, t) {
      o("WDSToastImperativeHost").showWDSToast({
        action: h(t),
        message: s._(/*BTDS*/ "", [s._param("name", e)]),
        testid: "contacts-and-groups-message-sent-toast",
      });
    }
    function f(e) {
      o("WDSToastImperativeHost").showWDSToast({
        action: e == null ? void 0 : h(e),
        message: s._(/*BTDS*/ ""),
        testid: "contacts-and-groups-message-not-sent-toast",
        type: "error",
      });
    }
    function g(e) {
      o("WDSToastImperativeHost").showWDSToast({
        message: s._(/*BTDS*/ "", [s._param("contact", e)]),
        testid: "contacts-and-groups-message-blocked-toast",
        type: "error",
      });
    }
    function h(e) {
      return {
        label: s._(/*BTDS*/ ""),
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
