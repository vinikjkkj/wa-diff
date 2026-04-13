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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(17),
        a = e.chat,
        i = e.onNotifyForClick,
        l;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = s._(/*BTDS*/ "Messages")), (t[0] = l))
        : (l = t[0]);
      var d, m;
      t[1] !== a
        ? ((d = u.jsx(r("WAWebMuteRow.react"), {
            chat: a,
            mute: a.mute,
            showIcon: !1,
            containerXstyle: c.row,
          })),
          (m =
            o("WAWebABProps").getABPropConfigValue(
              "enable_mention_everyone_receiver_web",
            ) &&
            u.jsx(r("WAWebMuteAllMentionsRow.react"), {
              chat: a,
              mute: a.mute,
              containerXstyle: c.row,
            })),
          (t[1] = a),
          (t[2] = d),
          (t[3] = m))
        : ((d = t[2]), (m = t[3]));
      var p;
      t[4] !== a || t[5] !== i
        ? ((p =
            o("WAWebABProps").getABPropConfigValue("wa_web_notify_for") &&
            u.jsx(r("WAWebNotifyForRow.react"), {
              chat: a,
              onNotifyForClick: i,
              containerXstyle: c.row,
            })),
          (t[4] = a),
          (t[5] = i),
          (t[6] = p))
        : (p = t[6]);
      var _;
      t[7] !== a
        ? ((_ =
            n("cr:7288") &&
            n("cr:7899") &&
            n("cr:7288").isCustomNotificationTonesEnabled() &&
            u.jsx(n("cr:7899"), { chat: a })),
          (t[7] = a),
          (t[8] = _))
        : (_ = t[8]);
      var f;
      t[9] !== a
        ? ((f =
            n("cr:34985") != null &&
            r("WAWebAuraGating").isRingtonesBenefitActive() &&
            (a.id.isGroup()
              ? o("WAWebVoipGatingUtils").isGroupCallingEnabled()
              : o("WAWebVoipGatingUtils").isCallingEnabled()) &&
            u.jsx(n("cr:34985"), { chat: a })),
          (t[9] = a),
          (t[10] = f))
        : (f = t[10]);
      var g;
      return (
        t[11] !== d || t[12] !== m || t[13] !== p || t[14] !== _ || t[15] !== f
          ? ((g = u.jsxs(r("WAWebDrawerSection.react"), {
              animation: !1,
              title: l,
              titleXStyle: c.sectionTitle,
              theme: "padding-no-vertical",
              children: [d, m, p, _, f],
            })),
            (t[11] = d),
            (t[12] = m),
            (t[13] = p),
            (t[14] = _),
            (t[15] = f),
            (t[16] = g))
          : (g = t[16]),
        g
      );
    }
    function p(e) {
      var t = o("react-compiler-runtime").c(11),
        n = e.chat,
        a = e.onClose,
        i = e.onNotifyForClick,
        l = e.ref,
        s;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((s = { surface: "unknown", viewName: "chat-notification-settings" }),
          (t[0] = s))
        : (s = t[0]);
      var c;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = d()), (t[1] = c))
        : (c = t[1]);
      var p;
      t[2] !== a
        ? ((p = u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            testid: void 0,
            title: c,
            onBack: a,
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
            focusBackOrCancel: !0,
          })),
          (t[2] = a),
          (t[3] = p))
        : (p = t[3]);
      var _;
      t[4] !== n || t[5] !== i
        ? ((_ = u.jsx(r("WAWebDrawerBody.react"), {
            children: u.jsx(m, { chat: n, onNotifyForClick: i }),
          })),
          (t[4] = n),
          (t[5] = i),
          (t[6] = _))
        : (_ = t[6]);
      var f;
      return (
        t[7] !== l || t[8] !== p || t[9] !== _
          ? ((f = u.jsxs(r("WAWebDrawer.react"), {
              ref: l,
              tsNavigationData: s,
              children: [p, _],
            })),
            (t[7] = l),
            (t[8] = p),
            (t[9] = _),
            (t[10] = f))
          : (f = t[10]),
        f
      );
    }
    l.default = p;
  },
  226,
);
