__d(
  "WAWebEphemeralKicNux.react",
  [
    "fbt",
    "WAWebChatThreadLogging",
    "WAWebConfirmPopup.react",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFlex.react",
    "WAWebFlexItem.react",
    "WAWebHandIcon.react",
    "WAWebKeepInChatIcon.react",
    "WAWebKeepInChatNuxWamEvent",
    "WAWebModalManager",
    "WAWebNux",
    "WAWebText_DONOTUSE.react",
    "WAWebTimerIcon.react",
    "WAWebWamEnumKicNuxActionNameType",
    "WAWebWamEnumTriggerType",
    "WAWebWdsPictoDisappearingMessagesIcon.react",
    "asyncToGeneratorRuntime",
    "react",
    "useWAWebNux",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useEffect,
      d = {
        header: {
          fontSize: "x1603h9y",
          fontWeight: "xk50ysn",
          lineHeight: "x1u7k74",
          marginTop: "x9u28bd",
          textAlign: "x2b8uid",
          color: "x14ug900",
          $$css: !0,
        },
        subtitle: {
          marginTop: "x98l61r",
          fontSize: "x1f6kntn",
          textAlign: "x2b8uid",
          marginBottom: "xvl6max",
          $$css: !0,
        },
        icon: { marginInlineEnd: "xviac27", color: "xhslqc4", $$css: !0 },
        container: {
          position: "x1n2onr6",
          display: "x78zum5",
          alignItems: "x6s0dn4",
          marginTop: "x1nmyh1g",
          color: "xhslqc4",
          fontSize: "x1nxh6w3",
          $$css: !0,
        },
        body: {
          marginTop: "x1rdy4ex",
          fontSize: "x1nxh6w3",
          color: "xhslqc4",
          $$css: !0,
        },
      };
    function m(e) {
      var t = e.chat,
        a = e.fromMe,
        i = e.onOk,
        l = r("useWAWebNux")(o("WAWebNux").NUX.EPHEMERAL),
        m = l[1],
        _ = r("useWAWebNux")(o("WAWebNux").NUX.KEEP_IN_CHAT),
        f = _[1],
        g = function () {
          (m(),
            f(),
            o("WAWebModalManager").ModalManager.closeSupportOrModal(),
            i && i());
        },
        h = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            (m(), f());
            var e = new (o("WAWebKeepInChatNuxWamEvent").KeepInChatNuxWamEvent)(
              {
                kicNuxActionName: o("WAWebWamEnumKicNuxActionNameType")
                  .KIC_NUX_ACTION_NAME_TYPE.KIC_NUX_LEARN_MORE_TAP,
                trigger: o("WAWebWamEnumTriggerType").TRIGGER_TYPE.CHAT_ENTRY,
              },
            );
            (t &&
              e.set({
                chatEphemeralityDuration: t.ephemeralDuration,
                threadId: yield o("WAWebChatThreadLogging").getChatThreadID(
                  t.id.toJid(),
                ),
              }),
              e.commit(),
              o("WAWebExternalLink.react").openExternalLink(
                o("WAWebFaqUrl").getEphemeralFaqUrl(),
              ));
          });
          return function () {
            return e.apply(this, arguments);
          };
        })();
      c(function () {
        var e = new (o("WAWebKeepInChatNuxWamEvent").KeepInChatNuxWamEvent)({
          kicNuxActionName: o("WAWebWamEnumKicNuxActionNameType")
            .KIC_NUX_ACTION_NAME_TYPE.FIRST_DM_NUX_IMPRESSION,
          trigger: o("WAWebWamEnumTriggerType").TRIGGER_TYPE.CHAT_ENTRY,
        });
        if (t == null) {
          e.commit();
          return;
        }
        o("WAWebChatThreadLogging")
          .getChatThreadID(t.id.toJid())
          .then(function (n) {
            e.set({
              chatEphemeralityDuration: t.ephemeralDuration,
              threadId: n,
            });
          })
          .finally(function () {
            e.commit();
          });
      }, []);
      var y = a
        ? s._(/*BTDS*/ "Get started with disappearing messages")
        : s._(/*BTDS*/ "Disappearing messages are on in this chat");
      return u.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
        tsNavigationData: { surface: "unknown", viewName: "ephemeral-kic-nux" },
        testid: void 0,
        onOK: g,
        onCancel: h,
        cancelText: s._(/*BTDS*/ "Learn more"),
        children: [
          u.jsx(o("WAWebFlex.react").FlexColumn, {
            align: "center",
            justify: "center",
            children: u.jsx(r("WAWebFlexItem.react"), {
              children: u.jsx(
                o("WAWebWdsPictoDisappearingMessagesIcon.react")
                  .WdsPictoDisappearingMessagesIcon,
                { height: 88 },
              ),
            }),
          }),
          u.jsx(o("WAWebText_DONOTUSE.react").TextHeader, {
            xstyle: d.header,
            children: y,
          }),
          u.jsx(o("WAWebText_DONOTUSE.react").TextParagraph, {
            xstyle: d.subtitle,
            children: s._(
              /*BTDS*/ "This increases your privacy and can improve storage on your device.",
            ),
          }),
          u.jsx(p, {
            Icon: o("WAWebTimerIcon.react").TimerIcon,
            size: 18,
            children: s._(
              /*BTDS*/ "New messages disappear for everyone after the selected duration.",
            ),
          }),
          u.jsx(p, {
            Icon: o("WAWebKeepInChatIcon.react").KeepInChatIcon,
            children: s._(
              /*BTDS*/ "Anyone can keep or unkeep messages in the chat. Group admins can limit this.",
            ),
          }),
          u.jsx(p, {
            Icon: o("WAWebHandIcon.react").HandIcon,
            children: s._(
              /*BTDS*/ "People may find other ways to save messages.",
            ),
          }),
        ],
      });
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p(e) {
      var t = e.Icon,
        n = e.children,
        r = e.size;
      return u.jsxs(o("WAWebText_DONOTUSE.react").TextDiv, {
        xstyle: d.container,
        children: [
          u.jsx(t, {
            "aria-hidden": !0,
            displayInline: !0,
            width: r != null ? r : 24,
            height: r != null ? r : 24,
            xstyle: d.icon,
          }),
          u.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
            xstyle: d.body,
            children: u.jsx(o("WAWebText_DONOTUSE.react").TextSpan, {
              children: n,
            }),
          }),
        ],
      });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);
