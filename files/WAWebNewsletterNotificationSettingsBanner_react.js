__d(
  "WAWebNewsletterNotificationSettingsBanner.react",
  [
    "fbt",
    "WAWebAdaptiveLayoutGatingUtils",
    "WAWebConversationBanner.react",
    "WAWebDrawerManager",
    "WAWebFlex.react",
    "WAWebInfoFlowLoadable",
    "WAWebInfoFlowStep",
    "WAWebKeyboardTabUtils",
    "WAWebUimUie.react",
    "WAWebUnmuteNotificationsRefreshedIcon.react",
    "WDSText.react",
    "WDSTextualLink.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useCallback,
      d = {
        banner: { backgroundColor: "x1h3rtpe", $$css: !0 },
        icon: { color: "xhslqc4", marginInlineEnd: "xqf2s3x", $$css: !0 },
      };
    function m(e) {
      var t = o("react-compiler-runtime").c(12),
        n = e.chat,
        a = e.onClose,
        i = e.ref,
        l;
      t[0] !== n || t[1] !== a
        ? ((l = function () {
            (a(),
              o("WAWebDrawerManager").DrawerManager.openDrawerRight(
                o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor()
                  ? {
                      descriptorType: "info_flow",
                      chat: n,
                      initialStep:
                        o("WAWebInfoFlowStep").InfoFlowStep.Notifications,
                    }
                  : u.jsx(o("WAWebInfoFlowLoadable").InfoFlowLoadable, {
                      chat: n,
                      initialStep:
                        o("WAWebInfoFlowStep").InfoFlowStep.Notifications,
                    }),
                {
                  transition: "slide-left",
                  focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
                },
              ));
          }),
          (t[0] = n),
          (t[1] = a),
          (t[2] = l))
        : (l = t[2]);
      var c = l,
        m;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = u.jsx(
            o("WAWebUnmuteNotificationsRefreshedIcon.react")
              .UnmuteNotificationsRefreshedIcon,
            { iconXstyle: d.icon },
          )),
          (t[3] = m))
        : (m = t[3]);
      var p;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = s._(/*BTDS*/ "New notification settings available.")),
          (t[4] = p))
        : (p = t[4]);
      var _;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = s._(/*BTDS*/ "View settings")), (t[5] = _))
        : (_ = t[5]);
      var f;
      t[6] !== c
        ? ((f = u.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            children: [
              m,
              u.jsxs(r("WDSText.react"), {
                type: "Body2",
                colorName: "contentDefault",
                children: [
                  p,
                  "\xA0",
                  u.jsx(r("WDSTextualLink.react"), { onClick: c, children: _ }),
                ],
              }),
            ],
          })),
          (t[6] = c),
          (t[7] = f))
        : (f = t[7]);
      var g;
      return (
        t[8] !== a || t[9] !== i || t[10] !== f
          ? ((g = u.jsx(o("WAWebUimUie.react").UIE, {
              displayName: "NewsletterNotificationSettingsBanner",
              escapable: !0,
              children: u.jsx(r("WAWebConversationBanner.react"), {
                ref: i,
                xstyle: d.banner,
                onClose: a,
                children: f,
              }),
            })),
            (t[8] = a),
            (t[9] = i),
            (t[10] = f),
            (t[11] = g))
          : (g = t[11]),
        g
      );
    }
    l.default = m;
  },
  226,
);
