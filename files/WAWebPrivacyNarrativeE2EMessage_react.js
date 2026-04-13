__d(
  "WAWebPrivacyNarrativeE2EMessage.react",
  [
    "fbt",
    "WAWebClickableLink.react",
    "WAWebDailyAggregatedStats",
    "WAWebE2EInfoModalV2.react",
    "WAWebLockOutlineIcon.react",
    "WAWebModalManager",
    "WAWebPrinaUtils",
    "WAWebPrivacyHighlightDailyUtils",
    "WAWebTabOrder",
    "WAWebWamEnumPrivacyHighlightSurfaceEnum",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u.useEffect,
      m = {
        container: {
          boxSizing: "x9f619",
          display: "x78zum5",
          alignItems: "x6s0dn4",
          justifyContent: "xl56j7k",
          marginTop: "xcxhlts",
          marginInlineEnd: "x1ys307a",
          marginBottom: "x1fqp7bg",
          marginInlineStart: "xyqm7xq",
          paddingTop: "x889kno",
          $$css: !0,
        },
        chatListContainer: {
          borderTopWidth: "x178xt8z",
          borderTopStyle: "x13fuv20",
          borderTopColor: "xx42vgk",
          color: "x14ug900",
          $$css: !0,
        },
        chatListIcon: { fill: "x1h227xn", $$css: !0 },
        statusListContainer: { color: "x88nbbm", $$css: !0 },
        statusListIcon: { fill: "xn91bti", $$css: !0 },
        secondaryColors: { color: "xhslqc4", fill: "xvt3oi1", $$css: !0 },
        icon: {
          marginTop: "xvijh9v",
          marginInlineEnd: "x1p8j9ns",
          display: "x1rg5ohu",
          $$css: !0,
        },
      };
    function p(e) {
      var t = o("react-compiler-runtime").c(2),
        n = e.tabOrder,
        a = _,
        i;
      if (t[0] !== n) {
        var l = s._(/*BTDS*/ "Your personal messages are {=m2}", [
          s._implicitParam(
            "=m2",
            c.jsx(r("WAWebClickableLink.react"), {
              testid: void 0,
              onClick: a,
              tabIndex: 0,
              "data-tab":
                n != null ? n : o("WAWebTabOrder").TAB_ORDER.E2E_MESSAGE_BTN,
              children: s._(/*BTDS*/ "end-to-end encrypted"),
            }),
          ),
        ]);
        ((i = c.jsx(C, {
          testid: void 0,
          iconXstyle: m.chatListIcon,
          text: l,
          xstyle: m.chatListContainer,
          highlightSurface: o("WAWebWamEnumPrivacyHighlightSurfaceEnum")
            .PRIVACY_HIGHLIGHT_SURFACE_ENUM.CHATS_LIST,
        })),
          (t[0] = n),
          (t[1] = i));
      } else i = t[1];
      return i;
    }
    function _() {
      o("WAWebModalManager").ModalManager.open(
        c.jsx(o("WAWebE2EInfoModalV2.react").E2eInfoModalV2, {
          highlightSurface: o("WAWebWamEnumPrivacyHighlightSurfaceEnum")
            .PRIVACY_HIGHLIGHT_SURFACE_ENUM.CHATS_LIST,
          url: o("WAWebPrinaUtils").securityUrl(),
        }),
      );
    }
    function f() {
      var e = o("react-compiler-runtime").c(3),
        t = g,
        n;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = s._(/*BTDS*/ "Your status updates are {=m2}", [
            s._implicitParam(
              "=m2",
              c.jsx(r("WAWebClickableLink.react"), {
                tabIndex: 0,
                testid: void 0,
                onClick: t,
                children: s._(/*BTDS*/ "end-to-end encrypted"),
              }),
            ),
          ])),
          (e[0] = n))
        : (n = e[0]);
      var a = n,
        i;
      e[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = [m.statusListIcon, m.secondaryColors]), (e[1] = i))
        : (i = e[1]);
      var l;
      return (
        e[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = c.jsx(C, {
              testid: void 0,
              iconXstyle: i,
              text: a,
              xstyle: [m.statusListContainer, m.secondaryColors],
              highlightSurface: o("WAWebWamEnumPrivacyHighlightSurfaceEnum")
                .PRIVACY_HIGHLIGHT_SURFACE_ENUM.STATUS_LIST,
            })),
            (e[2] = l))
          : (l = e[2]),
        l
      );
    }
    function g() {
      o("WAWebModalManager").ModalManager.open(
        c.jsx(o("WAWebE2EInfoModalV2.react").E2eInfoModalStatus, {
          highlightSurface: o("WAWebWamEnumPrivacyHighlightSurfaceEnum")
            .PRIVACY_HIGHLIGHT_SURFACE_ENUM.STATUS_LIST,
          url: o("WAWebPrinaUtils").securityUrl(),
        }),
      );
    }
    function h() {
      var e = o("react-compiler-runtime").c(3),
        t = y,
        n;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = s._(/*BTDS*/ "Your personal calls are {=m2}", [
            s._implicitParam(
              "=m2",
              c.jsx(r("WAWebClickableLink.react"), {
                tabIndex: 0,
                testid: void 0,
                onClick: t,
                children: s._(/*BTDS*/ "end-to-end encrypted"),
              }),
            ),
          ])),
          (e[0] = n))
        : (n = e[0]);
      var a = n,
        i;
      e[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = [m.chatListIcon, m.secondaryColors]), (e[1] = i))
        : (i = e[1]);
      var l;
      return (
        e[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = c.jsx(C, {
              testid: void 0,
              iconXstyle: i,
              text: a,
              xstyle: [m.chatListContainer, m.secondaryColors],
              highlightSurface: o("WAWebWamEnumPrivacyHighlightSurfaceEnum")
                .PRIVACY_HIGHLIGHT_SURFACE_ENUM.CALLS_LIST,
            })),
            (e[2] = l))
          : (l = e[2]),
        l
      );
    }
    function y() {
      o("WAWebModalManager").ModalManager.open(
        c.jsx(o("WAWebE2EInfoModalV2.react").E2eInfoModalV2, {
          highlightSurface: o("WAWebWamEnumPrivacyHighlightSurfaceEnum")
            .PRIVACY_HIGHLIGHT_SURFACE_ENUM.CALLS_LIST,
          url: o("WAWebPrinaUtils").securityUrl(),
        }),
      );
    }
    function C(t) {
      var n = t.highlightSurface,
        a = t.iconXstyle,
        i = t.testid,
        l = t.text,
        s = t.xstyle;
      d(function () {
        o("WAWebPrivacyHighlightDailyUtils").incrementPrinaDailyCount(
          n,
          o("WAWebDailyAggregatedStats").PrinaDailyActionType.NARRATIVE_APPEAR,
        );
      }, []);
      var u = { xstyle: [m.icon, a], height: 12, width: 13 },
        p = o("WAWebLockOutlineIcon.react").LockOutlineIcon;
      return c.jsx(
        "div",
        babelHelpers.extends(
          {},
          (e || (e = r("stylex"))).props(m.container, s),
          {
            "data-testid": void 0,
            children: c.jsx("div", {
              className: "x2b8uid xl56j7k x78zum5",
              children: c.jsxs("div", {
                className: "x1pg5gke x1fcty0u xvq8zen x1mzt3pk xeaf4i8",
                children: [c.jsx(p, babelHelpers.extends({}, u)), l],
              }),
            }),
          },
        ),
      );
    }
    ((C.displayName = C.name + " [from " + i.id + "]"),
      (l.E2eMessageChatList = p),
      (l.E2eMessageStatusList = f),
      (l.E2eMessageCallsList = h),
      (l.E2eMessage = C));
  },
  226,
);
