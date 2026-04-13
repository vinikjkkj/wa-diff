__d(
  "WAWebKicNux.react",
  [
    "fbt",
    "Promise",
    "WAWebCalendarEmptyIcon.react",
    "WAWebChatEphemerality",
    "WAWebChatThreadLogging",
    "WAWebConfirmPopup.react",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFlex.react",
    "WAWebFlexItem.react",
    "WAWebKeepInChatNuxWamEvent",
    "WAWebModalManager",
    "WAWebNux",
    "WAWebPeopleIcon.react",
    "WAWebText_DONOTUSE.react",
    "WAWebUndoKeepInChatIcon.react",
    "WAWebUserPrefsNuxPreferences",
    "WAWebWamEnumKicNuxActionNameType",
    "WAWebWamEnumTriggerType",
    "WAWebWdsPictoSaveIcon.react",
    "WDSIconWdsIcDisappearingMessages.react",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
    "useWAWebListener",
    "useWAWebNux",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u.useEffect,
      m = {
        badge: {
          backgroundColor: "xfn3atn",
          borderStartStartRadius: "x1fqc64z",
          borderStartEndRadius: "xs83zq4",
          borderEndEndRadius: "xt6ovg4",
          borderEndStartRadius: "x1ru8ea5",
          color: "xzqyxu6",
          fontSize: "x1f6kntn",
          marginTop: "x1aawmmo",
          paddingTop: "x1iorvi4",
          paddingInlineEnd: "x1icxu4v",
          paddingBottom: "xjkvuk6",
          paddingInlineStart: "x25sj25",
          textTransform: "xtvhhri",
          $$css: !0,
        },
        header: {
          fontSize: "x1603h9y",
          fontWeight: "xk50ysn",
          lineHeight: "x1u7k74",
          marginTop: "x1anpbxc",
          textAlign: "x2b8uid",
          color: "x14ug900",
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
          color: "xhslqc4",
          fontSize: "x1nxh6w3",
          $$css: !0,
        },
      };
    function p(e) {
      return (
        o("WAWebUserPrefsNuxPreferences").shouldShowNUX(
          o("WAWebNux").NUX.KEEP_IN_CHAT,
        ) && o("WAWebChatEphemerality").isEphemeralSettingOn(e)
      );
    }
    function _(t, r) {
      return new (e || (e = n("Promise")))(function (e) {
        o("WAWebModalManager").ModalManager.open(
          c.jsx(g, {
            chat: t,
            entryPoint: o("WAWebWamEnumKicNuxActionNameType")
              .KIC_NUX_ACTION_NAME_TYPE.KIC_NUX_IMPRESSION,
            trigger: r,
            onClose: e,
          }),
        );
      });
    }
    function f(e) {
      var t = o("react-compiler-runtime").c(7),
        n;
      t[0] !== e ? ((n = p(e)), (t[0] = e), (t[1] = n)) : (n = t[1]);
      var r;
      t[2] !== e
        ? ((r = function (n) {
            return _(e, n);
          }),
          (t[2] = e),
          (t[3] = r))
        : (r = t[3]);
      var a;
      return (
        t[4] !== n || t[5] !== r
          ? ((a = [n, r]), (t[4] = n), (t[5] = r), (t[6] = a))
          : (a = t[6]),
        a
      );
    }
    function g(e) {
      var t = e.chat,
        a = e.entryPoint,
        i = e.onClose,
        l = e.trigger,
        u = r("useWAWebNux")(o("WAWebNux").NUX.KEEP_IN_CHAT),
        p = u[1];
      o("useWAWebListener").useListener(
        o("WAWebModalManager").ModalManager,
        "close_modal",
        function () {
          (p(), i == null || i());
        },
      );
      var _ = function () {
          o("WAWebModalManager").ModalManager.close();
        },
        f = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e = new (o(
              "WAWebKeepInChatNuxWamEvent",
            ).KeepInChatNuxWamEvent)();
            (e.set({
              chatEphemeralityDuration: t.ephemeralDuration,
              kicNuxActionName: o("WAWebWamEnumKicNuxActionNameType")
                .KIC_NUX_ACTION_NAME_TYPE.KIC_NUX_LEARN_MORE_TAP,
              threadId: yield o("WAWebChatThreadLogging").getChatThreadID(
                t.id.toJid(),
              ),
              trigger: l,
            }),
              e.commit(),
              o("WAWebExternalLink.react").openExternalLink(
                o("WAWebFaqUrl").getKICFaqUrl(),
              ),
              o("WAWebModalManager").ModalManager.close());
          });
          return function () {
            return e.apply(this, arguments);
          };
        })();
      d(function () {
        var e = new (o("WAWebKeepInChatNuxWamEvent").KeepInChatNuxWamEvent)();
        o("WAWebChatThreadLogging")
          .getChatThreadID(t.id.toJid())
          .then(function (t) {
            t != null && e.set({ threadId: t });
          })
          .finally(function () {
            (e.set({
              chatEphemeralityDuration: t.ephemeralDuration,
              kicNuxActionName: a,
              trigger: l,
            }),
              e.commit());
          });
      }, []);
      var g,
        y,
        C,
        b,
        v = o("WAWebPeopleIcon.react").PeopleIcon,
        S = r("WDSIconWdsIcDisappearingMessages.react");
      l === o("WAWebWamEnumTriggerType").TRIGGER_TYPE.USER_MESSAGE_KEPT
        ? ((b = o("WAWebUndoKeepInChatIcon.react").UndoKeepInChatIcon),
          (g = s._(
            /*BTDS*/ "Someone kept your message so they can refer back to it",
          )),
          (y = s._(
            /*BTDS*/ "You can control if you want your messages kept in the chat by selecting the bookmark icon.",
          )),
          (C = s._(
            /*BTDS*/ "If you unkeep your message, no one can keep it again.",
          )))
        : ((b = o("WAWebCalendarEmptyIcon.react").CalendarEmptyIcon),
          (g = s._(
            /*BTDS*/ "You can now keep messages in the chat from disappearing",
          )),
          (y = s._(
            /*BTDS*/ "Keep messages you want to refer back to by selecting the bookmark icon.",
          )),
          (C = s._(
            /*BTDS*/ "Anyone can keep messages in the chat, but you have the final say if your messages are kept or not.",
          )));
      var R = s._(
        /*BTDS*/ "Kept messages will not disappear from the chat, and everyone can see them.",
      );
      return c.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
        tsNavigationData: { surface: "unknown", viewName: "keep-in-chat-nux" },
        testid: void 0,
        onOK: _,
        onCancel: f,
        cancelText: s._(/*BTDS*/ "Learn more"),
        children: [
          c.jsx(o("WAWebFlex.react").FlexColumn, {
            align: "center",
            justify: "center",
            children: c.jsx(r("WAWebFlexItem.react"), {
              children: c.jsx(
                o("WAWebWdsPictoSaveIcon.react").WdsPictoSaveIcon,
                {},
              ),
            }),
          }),
          c.jsx(o("WAWebFlex.react").FlexRow, {
            align: "center",
            justify: "center",
            children: c.jsx(r("WAWebFlexItem.react"), {
              xstyle: m.badge,
              children: s._(/*BTDS*/ "New"),
            }),
          }),
          c.jsx(o("WAWebText_DONOTUSE.react").TextHeader, {
            xstyle: m.header,
            children: g,
          }),
          c.jsx(h, { Icon: b, children: y }),
          c.jsx(h, { Icon: v, children: C }),
          c.jsx(h, { Icon: S, children: R }),
        ],
      });
    }
    g.displayName = g.name + " [from " + i.id + "]";
    function h(e) {
      var t = o("react-compiler-runtime").c(7),
        n = e.Icon,
        r = e.children,
        a;
      t[0] !== n
        ? ((a = c.jsx(n, {
            "aria-hidden": !0,
            displayInline: !0,
            width: 24,
            height: 24,
            xstyle: m.icon,
          })),
          (t[0] = n),
          (t[1] = a))
        : (a = t[1]);
      var i;
      t[2] !== r
        ? ((i = c.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
            xstyle: m.body,
            children: c.jsx(o("WAWebText_DONOTUSE.react").TextSpan, {
              children: r,
            }),
          })),
          (t[2] = r),
          (t[3] = i))
        : (i = t[3]);
      var l;
      return (
        t[4] !== a || t[5] !== i
          ? ((l = c.jsxs(o("WAWebText_DONOTUSE.react").TextDiv, {
              xstyle: m.container,
              children: [a, i],
            })),
            (t[4] = a),
            (t[5] = i),
            (t[6] = l))
          : (l = t[6]),
        l
      );
    }
    ((l.shouldShowKicNux = p), (l.openKicNux = _), (l.useKicNux = f));
  },
  226,
);
