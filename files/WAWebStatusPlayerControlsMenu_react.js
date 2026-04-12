__d(
  "WAWebStatusPlayerControlsMenu.react",
  [
    "fbt",
    "WAWebChannelStatusPlayerOverflowMenu.react",
    "WAWebFlex.react",
    "WAWebMsgGetters",
    "WAWebStatusMediaControlsNoSoundIcon.react",
    "WAWebStatusPlayerOverflowMenu.react",
    "WAWebStopEvent",
    "WAWebTabOrder",
    "WDSButton.react",
    "WDSIconIcPauseFilled.react",
    "WDSIconIcPlayArrowFilled.react",
    "WDSIconIcVolumeOffFilled.react",
    "WDSIconIcVolumeUp.react",
    "WDSTooltip.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useId,
      d = {
        controlsContainer: {
          rowGap: "x1qvou4u",
          columnGap: "x1s70e7g",
          $$css: !0,
        },
      };
    function m(e) {
      var t = e.handlePlayPauseButton,
        n = e.isPaused,
        a = c(),
        i = n ? s._(/*BTDS*/ "Play") : s._(/*BTDS*/ "Pause");
      return u.jsx("div", {
        className: "x78zum5 x6s0dn4 xl56j7k xsdox4t",
        children: u.jsx(r("WDSTooltip.react"), {
          id: a,
          label: i,
          children: u.jsx(r("WDSButton.react"), {
            Icon: r(
              n
                ? "WDSIconIcPlayArrowFilled.react"
                : "WDSIconIcPauseFilled.react",
            ),
            variant: "borderless",
            type: "media",
            size: "medium",
            onPress: t,
            testid: void 0,
            tabOrder: o("WAWebTabOrder").TAB_ORDER.STATUS_HEADER_SECTION,
            "aria-describedby": a,
            "aria-label": i,
          }),
        }),
      });
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p(e) {
      var t = e.handleMuteButton,
        n = e.hasAudio,
        a = e.isMuted,
        i = c(),
        l = a ? s._(/*BTDS*/ "Unmute") : s._(/*BTDS*/ "Mute");
      return n
        ? u.jsx("div", {
            className: "x78zum5 x6s0dn4 xl56j7k xsdox4t",
            children: u.jsx(r("WDSTooltip.react"), {
              id: i,
              label: l,
              children: u.jsx(r("WDSButton.react"), {
                Icon: r(
                  a
                    ? "WDSIconIcVolumeOffFilled.react"
                    : "WDSIconIcVolumeUp.react",
                ),
                variant: "borderless",
                type: "media",
                size: "medium",
                onPress: t,
                testid: void 0,
                tabOrder: o("WAWebTabOrder").TAB_ORDER.STATUS_HEADER_SECTION,
                "aria-describedby": i,
                "aria-label": l,
              }),
            }),
          })
        : u.jsx("div", {
            className:
              "x78zum5 x6s0dn4 xl56j7k x100vrsf x1vqgdyp x1ks1olk x17t9dm2",
            children: u.jsx(
              o("WAWebStatusMediaControlsNoSoundIcon.react")
                .StatusMediaControlsNoSoundIcon,
              {},
            ),
          });
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _(e) {
      var t = e.contact,
        n = e.crosspostingInfo,
        a = e.msg,
        i = e.onAddPaidPartnershipLabel,
        l = e.onCrosspost,
        s = e.onDelete,
        c = e.onDownload,
        d = e.onMuteOrUnmute,
        m = e.onOverflowMenuDismissed,
        p = e.onOverflowMenuShown,
        _ = e.onReport;
      return o("WAWebMsgGetters").getIsNewsletterStatus(a)
        ? u.jsx(r("WAWebChannelStatusPlayerOverflowMenu.react"), {
            onOverflowMenuShown: p,
            onOverflowMenuDismissed: m,
            msg: a,
            onDelete: s,
            onReport: _,
            onAddPaidPartnershipLabel: i,
          })
        : u.jsx(r("WAWebStatusPlayerOverflowMenu.react"), {
            onOverflowMenuShown: p,
            onOverflowMenuDismissed: m,
            contact: t,
            msg: a,
            onReport: _,
            onDelete: s,
            onDownload: c,
            onCrosspost: l,
            onMuteOrUnmute: d,
            crosspostingInfo: n,
          });
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f(e) {
      var t = e.contact,
        n = e.crosspostingInfo,
        r = e.hasAudio,
        a = e.isMuted,
        i = e.isPaused,
        l = e.msg,
        s = e.onAddPaidPartnershipLabel,
        c = e.onCrosspost,
        f = e.onDelete,
        g = e.onDownload,
        h = e.onMute,
        y = e.onMuteOrUnmute,
        C = e.onOverflowMenuDismissed,
        b = e.onOverflowMenuShown,
        v = e.onPauseButtonClick,
        S = e.onPlay,
        R = e.onReport,
        L = e.onUnmute,
        E = function () {
          i ? S() : v();
        },
        k = function () {
          a ? L() : h();
        };
      return u.jsx("div", {
        onClick: o("WAWebStopEvent").stopPropagation,
        children: u.jsxs(o("WAWebFlex.react").FlexRow, {
          align: "center",
          xstyle: d.controlsContainer,
          children: [
            u.jsx(m, { isPaused: i, handlePlayPauseButton: E }),
            u.jsx(p, { hasAudio: r, isMuted: a, handleMuteButton: k }),
            u.jsx(_, {
              onOverflowMenuShown: b,
              onOverflowMenuDismissed: C,
              contact: t,
              msg: l,
              onReport: R,
              onDelete: f,
              onDownload: g,
              onCrosspost: c,
              onMuteOrUnmute: y,
              crosspostingInfo: n,
              onAddPaidPartnershipLabel: s,
            }),
          ],
        }),
      });
    }
    ((f.displayName = f.name + " [from " + i.id + "]"), (l.default = f));
  },
  226,
);
