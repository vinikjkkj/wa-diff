__d(
  "WAWebLimitSharingSettingRow.react",
  [
    "fbt",
    "WAWebBotGroupGatingUtils",
    "WAWebChatGroupUtils",
    "WAWebChatInfoDrawerRow.react",
    "WAWebLimitSharingUIUtils",
    "WDSIconIcSecurity.react",
    "react",
    "react-compiler-runtime",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = { secondaryColor: { color: "xhslqc4", $$css: !0 } };
    function d(e) {
      var t = o("react-compiler-runtime").c(21),
        n = e.chat,
        a = e.onClick,
        i = e.testid,
        l;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = ["id", "limitSharing", "groupMetadata"]), (t[0] = l))
        : (l = t[0]);
      var d = o("useWAWebModelValues").useModelValues(n, l),
        m,
        p,
        _,
        f;
      if (t[1] !== d) {
        var g =
            o(
              "WAWebBotGroupGatingUtils",
            ).isOpenGroupBotParticipantAddEnabled() &&
            o("WAWebChatGroupUtils").isAIGroupOpen(d),
          h =
            o(
              "WAWebBotGroupGatingUtils",
            ).isTEEGroupBotParticipantAddEnabled() &&
            o("WAWebChatGroupUtils").isAIGroupTee(d),
          y = o("WAWebLimitSharingUIUtils").isLimitSharingReceiverEnabled(d),
          C;
        t[6] !== y
          ? ((C = y ? s._(/*BTDS*/ "On") : s._(/*BTDS*/ "Off")),
            (t[6] = y),
            (t[7] = C))
          : (C = t[7]);
        var b = C,
          v;
        if (t[8] === Symbol.for("react.memo_cache_sentinel")) {
          var S = s._(/*BTDS*/ "Advanced chat privacy");
          ((v = u.jsx(
            o("WAWebChatInfoDrawerRow.react").DrawerRowTitleRefreshed,
            { title: S },
          )),
            (t[8] = v));
        } else v = t[8];
        f = v;
        var R;
        (t[9] !== b
          ? ((R = u.jsx(
              o("WAWebChatInfoDrawerRow.react")
                .DrawerRowSecondaryTitleRefreshed,
              { title: b },
            )),
            (t[9] = b),
            (t[10] = R))
          : (R = t[10]),
          (p = R));
        var L;
        if (t[11] === Symbol.for("react.memo_cache_sentinel")) {
          var E = { iconXstyle: c.secondaryColor, height: 24 };
          ((L = u.jsx(
            r("WDSIconIcSecurity.react"),
            babelHelpers.extends({}, E),
          )),
            (t[11] = L));
        } else L = t[11];
        ((m = L),
          (_ = { 0: {}, 1: { className: "xbyyjgo" } }[!!(g || h) << 0]),
          (t[1] = d),
          (t[2] = m),
          (t[3] = p),
          (t[4] = _),
          (t[5] = f));
      } else ((m = t[2]), (p = t[3]), (_ = t[4]), (f = t[5]));
      var k;
      t[12] !== m || t[13] !== a || t[14] !== p || t[15] !== i || t[16] !== f
        ? ((k = u.jsx(
            o("WAWebChatInfoDrawerRow.react").ChatInfoDrawerRowRefreshed,
            {
              icon: m,
              onClick: a,
              title: f,
              secondaryTitle: p,
              testid: void 0,
            },
          )),
          (t[12] = m),
          (t[13] = a),
          (t[14] = p),
          (t[15] = i),
          (t[16] = f),
          (t[17] = k))
        : (k = t[17]);
      var I;
      return (
        t[18] !== _ || t[19] !== k
          ? ((I = u.jsx("div", babelHelpers.extends({}, _, { children: k }))),
            (t[18] = _),
            (t[19] = k),
            (t[20] = I))
          : (I = t[20]),
        I
      );
    }
    l.default = d;
  },
  226,
);
