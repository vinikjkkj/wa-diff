__d(
  "WAWebViewOnceSunset.react",
  [
    "fbt",
    "WAWebChatGetters",
    "WAWebChatThreadLogging",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFbtCommon",
    "WAWebFrontendMsgGetters",
    "WAWebMessageSpacerText.react",
    "WAWebMessageTextBubble.react",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebStateUtils",
    "WAWebViewOnceScreenshotActionsWamEvent",
    "WAWebViewOnceSunsetIcon.react",
    "WAWebWamEnumVoMessageType",
    "WAWebWamEnumVoSsAction",
    "WDSTextualLink.react",
    "asyncToGeneratorRuntime",
    "react",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t,
        a = e.displayType,
        i = e.msg,
        l = o("useWAWebMsgValues").useMsgValues(e.msg.id, [
          (t = o("WAWebMsgGetters")).getIsSentByMe,
          t.getIsGroupMsg,
          o("WAWebFrontendMsgGetters").getSenderObj,
          t.getSubtype,
          t.getType,
        ]),
        c = l[0],
        d = l[1],
        m = l[2],
        p = l[3],
        _ = l[4],
        f = o("WAWebFrontendMsgGetters").getChat(i.unsafe()),
        g = function () {
          var e = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e = o("WAWebFaqUrl").getViewOnceScreenshotProtectionUrl(),
                t;
              switch (_) {
                case o("WAWebMsgType").MSG_TYPE.IMAGE:
                  t = o("WAWebWamEnumVoMessageType").VO_MESSAGE_TYPE.PHOTO;
                  break;
                case o("WAWebMsgType").MSG_TYPE.VIDEO:
                  t = o("WAWebWamEnumVoMessageType").VO_MESSAGE_TYPE.VIDEO;
                  break;
                case o("WAWebMsgType").MSG_TYPE.PTT:
                  t = o("WAWebWamEnumVoMessageType").VO_MESSAGE_TYPE.PTT;
                  break;
              }
              var n = o("WAWebChatGetters").getIsGroup(f),
                r = yield o("WAWebChatThreadLogging").getChatThreadID(
                  f.id.toJid(),
                ),
                a = new (o(
                  "WAWebViewOnceScreenshotActionsWamEvent",
                ).ViewOnceScreenshotActionsWamEvent)({
                  isAGroup: n,
                  threadId: r,
                  voMessageType: t,
                  voSsAction: o("WAWebWamEnumVoSsAction").VO_SS_ACTION
                    .PLACEHOLDER_MESSAGE_LEARN_MORE_TAP,
                });
              (a.commit(), o("WAWebExternalLink.react").openExternalLink(e));
            });
            return function () {
              return e.apply(this, arguments);
            };
          })();
          e();
        },
        h = u.jsx(r("WDSTextualLink.react"), {
          testid: void 0,
          onClick: g,
          children: r("WAWebFbtCommon")("Learn more"),
        }),
        y;
      switch (_) {
        case o("WAWebMsgType").MSG_TYPE.IMAGE:
          y = s._(
            /*BTDS*/ "You received a view once photo. For added privacy, you can only open it on your phone. {learn-more-link}",
            [s._param("learn-more-link", h)],
          );
          break;
        case o("WAWebMsgType").MSG_TYPE.VIDEO:
          y = s._(
            /*BTDS*/ "You received a view once video. For added privacy, you can only open it on your phone. {learn-more-link}",
            [s._param("learn-more-link", h)],
          );
          break;
        case o("WAWebMsgType").MSG_TYPE.PTT:
          y = s._(
            /*BTDS*/ "You received a view once voice message. For added privacy, you can only open it on your phone. {learn-more-link}",
            [s._param("learn-more-link", h)],
          );
          break;
      }
      return u.jsx(r("WAWebMessageTextBubble.react"), {
        msg: o("WAWebStateUtils").unproxy(i),
        displayAuthor: !0,
        displayType: a,
        children: u.jsxs("div", {
          className:
            "x78zum5 x1q0g3np x6s0dn4 x6ikm8r x10wlt62 x1wl59ut x1k4tb9n xd4r4e8 x1vvkbs x1n2onr6",
          children: [
            u.jsx("div", {
              className: "x1okw0bk x7r5mf7 x1xegmmw xjpr12u x1lziwak",
              children: u.jsx(
                o("WAWebViewOnceSunsetIcon.react").ViewOnceSunsetIcon,
                {},
              ),
            }),
            u.jsx("div", {
              className: "x7r5mf7 x13m54ha",
              children: u.jsx(r("WAWebMessageSpacerText.react"), {
                msg: i.unsafe(),
                theme: "placeholder",
                children: y,
              }),
            }),
          ],
        }),
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
