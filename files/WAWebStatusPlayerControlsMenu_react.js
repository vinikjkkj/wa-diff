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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(13),
        n = e.handlePlayPauseButton,
        a = e.isPaused,
        i = c(),
        l;
      t[0] !== a
        ? ((l = a ? s._(/*BTDS*/ "Play") : s._(/*BTDS*/ "Pause")),
          (t[0] = a),
          (t[1] = l))
        : (l = t[1]);
      var d = l,
        m;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = { className: "x78zum5 x6s0dn4 xl56j7k xsdox4t" }), (t[2] = m))
        : (m = t[2]);
      var p = r(
          a ? "WDSIconIcPlayArrowFilled.react" : "WDSIconIcPauseFilled.react",
        ),
        _ = a ? "status-play" : "status-pause",
        f;
      t[3] !== n || t[4] !== d || t[5] !== p || t[6] !== _ || t[7] !== i
        ? ((f = u.jsx(r("WDSButton.react"), {
            Icon: p,
            variant: "borderless",
            type: "media",
            size: "medium",
            onPress: n,
            testid: void 0,
            tabOrder: o("WAWebTabOrder").TAB_ORDER.STATUS_HEADER_SECTION,
            "aria-describedby": i,
            "aria-label": d,
          })),
          (t[3] = n),
          (t[4] = d),
          (t[5] = p),
          (t[6] = _),
          (t[7] = i),
          (t[8] = f))
        : (f = t[8]);
      var g;
      return (
        t[9] !== d || t[10] !== f || t[11] !== i
          ? ((g = u.jsx(
              "div",
              babelHelpers.extends({}, m, {
                children: u.jsx(r("WDSTooltip.react"), {
                  id: i,
                  label: d,
                  children: f,
                }),
              }),
            )),
            (t[9] = d),
            (t[10] = f),
            (t[11] = i),
            (t[12] = g))
          : (g = t[12]),
        g
      );
    }
    function p(e) {
      var t = o("react-compiler-runtime").c(8),
        n = e.handleMuteButton,
        a = e.hasAudio,
        i = e.isMuted,
        l = c(),
        d;
      t[0] !== i
        ? ((d = i ? s._(/*BTDS*/ "Unmute") : s._(/*BTDS*/ "Mute")),
          (t[0] = i),
          (t[1] = d))
        : (d = t[1]);
      var m = d,
        p;
      return (
        t[2] !== n || t[3] !== a || t[4] !== i || t[5] !== m || t[6] !== l
          ? ((p = a
              ? u.jsx("div", {
                  className: "x78zum5 x6s0dn4 xl56j7k xsdox4t",
                  children: u.jsx(r("WDSTooltip.react"), {
                    id: l,
                    label: m,
                    children: u.jsx(r("WDSButton.react"), {
                      Icon: r(
                        i
                          ? "WDSIconIcVolumeOffFilled.react"
                          : "WDSIconIcVolumeUp.react",
                      ),
                      variant: "borderless",
                      type: "media",
                      size: "medium",
                      onPress: n,
                      testid: void 0,
                      tabOrder:
                        o("WAWebTabOrder").TAB_ORDER.STATUS_HEADER_SECTION,
                      "aria-describedby": l,
                      "aria-label": m,
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
                })),
            (t[2] = n),
            (t[3] = a),
            (t[4] = i),
            (t[5] = m),
            (t[6] = l),
            (t[7] = p))
          : (p = t[7]),
        p
      );
    }
    function _(e) {
      var t = o("react-compiler-runtime").c(18),
        n = e.contact,
        a = e.crosspostingInfo,
        i = e.msg,
        l = e.onAddPaidPartnershipLabel,
        s = e.onCrosspost,
        c = e.onDelete,
        d = e.onDownload,
        m = e.onMuteOrUnmute,
        p = e.onOverflowMenuDismissed,
        _ = e.onOverflowMenuShown,
        f = e.onReport;
      if (o("WAWebMsgGetters").getIsNewsletterStatus(i)) {
        var g;
        return (
          t[0] !== i ||
          t[1] !== l ||
          t[2] !== c ||
          t[3] !== p ||
          t[4] !== _ ||
          t[5] !== f
            ? ((g = u.jsx(r("WAWebChannelStatusPlayerOverflowMenu.react"), {
                onOverflowMenuShown: _,
                onOverflowMenuDismissed: p,
                msg: i,
                onDelete: c,
                onReport: f,
                onAddPaidPartnershipLabel: l,
              })),
              (t[0] = i),
              (t[1] = l),
              (t[2] = c),
              (t[3] = p),
              (t[4] = _),
              (t[5] = f),
              (t[6] = g))
            : (g = t[6]),
          g
        );
      }
      var h;
      return (
        t[7] !== n ||
        t[8] !== a ||
        t[9] !== i ||
        t[10] !== s ||
        t[11] !== c ||
        t[12] !== d ||
        t[13] !== m ||
        t[14] !== p ||
        t[15] !== _ ||
        t[16] !== f
          ? ((h = u.jsx(r("WAWebStatusPlayerOverflowMenu.react"), {
              onOverflowMenuShown: _,
              onOverflowMenuDismissed: p,
              contact: n,
              msg: i,
              onReport: f,
              onDelete: c,
              onDownload: d,
              onCrosspost: s,
              onMuteOrUnmute: m,
              crosspostingInfo: a,
            })),
            (t[7] = n),
            (t[8] = a),
            (t[9] = i),
            (t[10] = s),
            (t[11] = c),
            (t[12] = d),
            (t[13] = m),
            (t[14] = p),
            (t[15] = _),
            (t[16] = f),
            (t[17] = h))
          : (h = t[17]),
        h
      );
    }
    function f(e) {
      var t = o("react-compiler-runtime").c(31),
        n = e.contact,
        r = e.crosspostingInfo,
        a = e.hasAudio,
        i = e.isMuted,
        l = e.isPaused,
        s = e.msg,
        c = e.onAddPaidPartnershipLabel,
        f = e.onCrosspost,
        g = e.onDelete,
        h = e.onDownload,
        y = e.onMute,
        C = e.onMuteOrUnmute,
        b = e.onOverflowMenuDismissed,
        v = e.onOverflowMenuShown,
        S = e.onPauseButtonClick,
        R = e.onPlay,
        L = e.onReport,
        E = e.onUnmute,
        k;
      t[0] !== l || t[1] !== S || t[2] !== R
        ? ((k = function () {
            l ? R() : S();
          }),
          (t[0] = l),
          (t[1] = S),
          (t[2] = R),
          (t[3] = k))
        : (k = t[3]);
      var I = k,
        T;
      t[4] !== i || t[5] !== y || t[6] !== E
        ? ((T = function () {
            i ? E() : y();
          }),
          (t[4] = i),
          (t[5] = y),
          (t[6] = E),
          (t[7] = T))
        : (T = t[7]);
      var D = T,
        x;
      t[8] !== I || t[9] !== l
        ? ((x = u.jsx(m, { isPaused: l, handlePlayPauseButton: I })),
          (t[8] = I),
          (t[9] = l),
          (t[10] = x))
        : (x = t[10]);
      var $;
      t[11] !== D || t[12] !== a || t[13] !== i
        ? (($ = u.jsx(p, { hasAudio: a, isMuted: i, handleMuteButton: D })),
          (t[11] = D),
          (t[12] = a),
          (t[13] = i),
          (t[14] = $))
        : ($ = t[14]);
      var P;
      t[15] !== n ||
      t[16] !== r ||
      t[17] !== s ||
      t[18] !== c ||
      t[19] !== f ||
      t[20] !== g ||
      t[21] !== h ||
      t[22] !== C ||
      t[23] !== b ||
      t[24] !== v ||
      t[25] !== L
        ? ((P = u.jsx(_, {
            onOverflowMenuShown: v,
            onOverflowMenuDismissed: b,
            contact: n,
            msg: s,
            onReport: L,
            onDelete: g,
            onDownload: h,
            onCrosspost: f,
            onMuteOrUnmute: C,
            crosspostingInfo: r,
            onAddPaidPartnershipLabel: c,
          })),
          (t[15] = n),
          (t[16] = r),
          (t[17] = s),
          (t[18] = c),
          (t[19] = f),
          (t[20] = g),
          (t[21] = h),
          (t[22] = C),
          (t[23] = b),
          (t[24] = v),
          (t[25] = L),
          (t[26] = P))
        : (P = t[26]);
      var N;
      return (
        t[27] !== x || t[28] !== $ || t[29] !== P
          ? ((N = u.jsx("div", {
              onClick: o("WAWebStopEvent").stopPropagation,
              children: u.jsxs(o("WAWebFlex.react").FlexRow, {
                align: "center",
                xstyle: d.controlsContainer,
                children: [x, $, P],
              }),
            })),
            (t[27] = x),
            (t[28] = $),
            (t[29] = P),
            (t[30] = N))
          : (N = t[30]),
        N
      );
    }
    l.default = f;
  },
  226,
);
