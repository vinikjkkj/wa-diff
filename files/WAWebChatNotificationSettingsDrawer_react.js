__d(
  "WAWebChatNotificationSettingsDrawer.react",
  [
    "fbt",
    "WAWebABProps",
    "WAWebAuraGating",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerSection.react",
    "WAWebMuteAllMentionsRow.react",
    "WAWebMuteRow.react",
    "WAWebNotifyForRow.react",
    "WAWebVoipGatingUtils",
    "cr:34985",
    "cr:7288",
    "cr:7899",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = {
        row: {
          paddingInlineStart: "x106a9eq",
          paddingInlineEnd: "x1xnnf8n",
          paddingTop: "x889kno",
          paddingBottom: "x1a8lsjc",
          marginInlineStart: "x1lziwak",
          $$css: !0,
        },
        sectionTitle: {
          paddingTop: "x1cnzs8",
          paddingBottom: "xx6bls6",
          paddingInlineStart: "x1c1uobl",
          paddingInlineEnd: "xyri2b",
          paddingLeft: null,
          paddingRight: null,
          $$css: !0,
        },
      };
    function d() {
      return s._(/*BTDS*/ "Notifications");
    }
    function m(e) {
      var t = e.chat,
        a = e.onNotifyForClick;
      return u.jsxs(r("WAWebDrawerSection.react"), {
        animation: !1,
        title: s._(/*BTDS*/ "Messages"),
        titleXStyle: c.sectionTitle,
        theme: "padding-no-vertical",
        children: [
          u.jsx(r("WAWebMuteRow.react"), {
            chat: t,
            mute: t.mute,
            showIcon: !1,
            containerXstyle: c.row,
          }),
          o("WAWebABProps").getABPropConfigValue(
            "enable_mention_everyone_receiver_web",
          ) &&
            u.jsx(r("WAWebMuteAllMentionsRow.react"), {
              chat: t,
              mute: t.mute,
              containerXstyle: c.row,
            }),
          o("WAWebABProps").getABPropConfigValue("wa_web_notify_for") &&
            u.jsx(r("WAWebNotifyForRow.react"), {
              chat: t,
              onNotifyForClick: a,
              containerXstyle: c.row,
            }),
          n("cr:7288") &&
            n("cr:7899") &&
            n("cr:7288").isCustomNotificationTonesEnabled() &&
            u.jsx(n("cr:7899"), { chat: t }),
          n("cr:34985") != null &&
            r("WAWebAuraGating").isRingtonesBenefitActive() &&
            (t.id.isGroup()
              ? o("WAWebVoipGatingUtils").isGroupCallingEnabled()
              : o("WAWebVoipGatingUtils").isCallingEnabled()) &&
            u.jsx(n("cr:34985"), { chat: t }),
        ],
      });
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p(e) {
      var t = e.chat,
        n = e.onClose,
        a = e.onNotifyForClick,
        i = e.ref;
      return u.jsxs(r("WAWebDrawer.react"), {
        ref: i,
        tsNavigationData: {
          surface: "unknown",
          viewName: "chat-notification-settings",
        },
        children: [
          u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            testid: void 0,
            title: d(),
            onBack: n,
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
            focusBackOrCancel: !0,
          }),
          u.jsx(r("WAWebDrawerBody.react"), {
            children: u.jsx(m, { chat: t, onNotifyForClick: a }),
          }),
        ],
      });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  226,
);
