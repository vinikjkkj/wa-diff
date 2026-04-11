__d(
  "WAWebHandleGrowthNotification",
  [
    "WADeprecatedWapParser",
    "WALogger",
    "WATimeUtils",
    "WAWap",
    "WAWebChatFindBridge",
    "WAWebChatMessageCountsWamEvent",
    "WAWebChatThreadLogging",
    "WAWebCreateChat",
    "WAWebHandleSingleMsgFactory",
    "WAWebJidToWid",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebNotificationDeliveryWamEvent",
    "WAWebUserPrefsMeUser",
    "WAWebViewMode.flow",
    "WAWebWamEnumNotificationTypeEnum",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = { contacts: "contacts", "w:growth": "w:growth" },
      d = new (r("WADeprecatedWapParser"))(
        "incomingGrowthNotificationParser",
        function (e) {
          e.assertTag("notification");
          var t = e.attrString("id"),
            n = e.attrWapJid("from"),
            r = e.attrEnum("type", c),
            o = { stanzaId: t, from: n, type: r };
          if (e.hasChild("invite")) {
            var a = e.child("invite");
            if (a.hasChild("receiver")) {
              var i = a.child("receiver");
              return babelHelpers.extends(
                {
                  receiverId: i.hasAttr("user") ? i.attrUserJid("user") : null,
                  reason: i.hasAttr("reason") ? i.attrString("reason") : "",
                },
                o,
              );
            }
          }
          return o;
        },
      );
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = d.parse(t);
          if (n.error)
            throw (
              o("WALogger").ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "Parsing Error: ",
                    "",
                  ])),
                n.error.toString(),
              ),
              n.error
            );
          var r = n.success,
            a = r.type;
          if (a === "contacts") {
            if (!("receiverId" in r) || r.receiverId == null) {
              o("WALogger").ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "Invalid receiver id",
                  ])),
              );
              return;
            }
            var i = o("WAWebJidToWid").userJidToUserWid(r.receiverId),
              l = "reason" in r && r.reason === "clicked_invite_link";
            yield _(i, l);
          }
          return o("WAWap").wap("ack", {
            id: o("WAWap").CUSTOM_STRING(r.stanzaId),
            class: "notification",
            type: a,
            to: r.from,
          });
        })),
        p.apply(this, arguments)
      );
    }
    function _(e, t) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield o("WAWebChatFindBridge").findLocal(e.toString());
          if (n == null) {
            yield o("WAWebCreateChat").createChat(
              { chatId: e },
              "createChatOnInviteAccept",
            );
            var r = yield o("WAWebChatFindBridge").findLocal(e.toString());
            if (r == null) {
              o("WALogger").ERROR(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "Unable to create new chat thread with receiver - {receiverId}",
                  ])),
              );
              return;
            }
            var a = r.id,
              i = yield g(a, t),
              l = yield o("WAWebChatThreadLogging").getChatThreadID(
                r.id.toJid(),
              );
            (new (o(
              "WAWebNotificationDeliveryWamEvent",
            ).NotificationDeliveryWamEvent)({
              threadId: l,
              uiNotificationType: o("WAWebWamEnumNotificationTypeEnum")
                .NOTIFICATION_TYPE_ENUM.INVITE_JOINED,
            }).commit(),
              yield o("WAWebHandleSingleMsgFactory").handleSingleMsg({
                chatId: a,
                newMsg: i,
                handleSingleMsgOrigin:
                  "processInviteDeepLinkSenderNotification",
              }),
              new (o(
                "WAWebChatMessageCountsWamEvent",
              ).ChatMessageCountsWamEvent)({
                isInviteCreatedThread: !0,
              }).commit());
          }
        })),
        f.apply(this, arguments)
      );
    }
    function g(e, t) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return {
            id: new (r("WAWebMsgKey"))({
              remote: e,
              fromMe: !1,
              id: yield r("WAWebMsgKey").newId(),
            }),
            from: e,
            subtype: "sender_invite",
            to: o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
            type: "notification_template",
            kind: o("WAWebMsgType").MsgKind.NotificationTemplate,
            viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
            t: o("WATimeUtils").unixTime(),
            templateParams: [t.toString()],
          };
        })),
        h.apply(this, arguments)
      );
    }
    l.default = m;
  },
  98,
);
