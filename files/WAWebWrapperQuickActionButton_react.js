__d(
  "WAWebWrapperQuickActionButton.react",
  [
    "fbt",
    "WAWebBizCoexGatingUtils",
    "WAWebForwardRefreshedIcon.react",
    "WAWebInfoAltIcon.react",
    "WAWebMarketingMessagesUserFeedbackGatingUtils",
    "WAWebRound.react",
    "WAWebSTWGatingUtils",
    "WAWebSearchIcon.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = { svgColorRefreshed: { color: "xhslqc4", $$css: !0 } };
    function d(e) {
      var t = o("react-compiler-runtime").c(29),
        n = e.onOpenBizEncStateMissmatchInfoPopup,
        r = e.onOpenBizPrivacyInfoPopup,
        a = e.onOpenEphemeralExemptionInfoPopup,
        i = e.onOpenEphemeralInfoPopup,
        l = e.onOpenForwardFlow,
        d = e.onOpenMarketingMessagesFeedback,
        m = e.onOpenWebSearchFlow,
        p = e.showHostedBizEncStateMismatchInfoAction,
        _ = e.showQuickBizPrivacyInfoAction,
        f = e.showQuickEphemeralExemptionInfoAction,
        g = e.showQuickEphemeralInfoAction,
        h = e.showQuickForwardAction,
        y = e.showQuickMarketingMessagesFeedbackAction,
        C = e.showQuickSearchAction,
        b = null,
        v = c.svgColorRefreshed;
      if (g) {
        var S;
        t[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((S = s._(/*BTDS*/ "Ephemeral Info")), (t[0] = S))
          : (S = t[0]);
        var R;
        t[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((R = u.jsx(o("WAWebInfoAltIcon.react").InfoAltIcon, {
              xstyle: v,
            })),
            (t[1] = R))
          : (R = t[1]);
        var L;
        (t[2] !== i
          ? ((L = u.jsx(o("WAWebRound.react").Round, {
              onClick: i,
              label: S,
              theme: o("WAWebRound.react").RoundTheme.QuickActionRefreshed,
              children: R,
            })),
            (t[2] = i),
            (t[3] = L))
          : (L = t[3]),
          (b = L));
      } else if (_) {
        var E;
        t[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((E = s._(/*BTDS*/ "Privacy info")), (t[4] = E))
          : (E = t[4]);
        var k;
        t[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((k = u.jsx(o("WAWebInfoAltIcon.react").InfoAltIcon, {
              xstyle: v,
            })),
            (t[5] = k))
          : (k = t[5]);
        var I;
        (t[6] !== r
          ? ((I = u.jsx(o("WAWebRound.react").Round, {
              onClick: r,
              label: E,
              theme: o("WAWebRound.react").RoundTheme.QuickActionRefreshed,
              children: k,
            })),
            (t[6] = r),
            (t[7] = I))
          : (I = t[7]),
          (b = I));
      } else if (
        y &&
        o(
          "WAWebMarketingMessagesUserFeedbackGatingUtils",
        ).isMMMessageLevelFeedbackEnabled()
      ) {
        var T, D;
        t[8] === Symbol.for("react.memo_cache_sentinel")
          ? ((T = s._(/*BTDS*/ "Message Feedback")),
            (D = s._(/*BTDS*/ "Feedback")),
            (t[8] = T),
            (t[9] = D))
          : ((T = t[8]), (D = t[9]));
        var x;
        t[10] === Symbol.for("react.memo_cache_sentinel")
          ? ((x = u.jsx(o("WAWebInfoAltIcon.react").InfoAltIcon, {
              xstyle: v,
            })),
            (t[10] = x))
          : (x = t[10]);
        var $;
        (t[11] !== d
          ? (($ = u.jsx(o("WAWebRound.react").Round, {
              label: T,
              title: D,
              theme: o("WAWebRound.react").RoundTheme.QuickActionRefreshed,
              onClick: d,
              children: x,
            })),
            (t[11] = d),
            (t[12] = $))
          : ($ = t[12]),
          (b = $));
      } else if (h) {
        var P;
        t[13] === Symbol.for("react.memo_cache_sentinel")
          ? ((P = u.jsx(
              o("WAWebForwardRefreshedIcon.react").ForwardRefreshedIcon,
              { directional: !0, xstyle: c.svgColorRefreshed, height: 20 },
            )),
            (t[13] = P))
          : (P = t[13]);
        var N = P,
          M;
        t[14] === Symbol.for("react.memo_cache_sentinel")
          ? ((M = s._(/*BTDS*/ "Forward media")), (t[14] = M))
          : (M = t[14]);
        var w;
        (t[15] !== l
          ? ((w = u.jsx(o("WAWebRound.react").Round, {
              label: M,
              theme: o("WAWebRound.react").RoundTheme.QuickActionRefreshed,
              onClick: function () {
                return l(!1);
              },
              children: N,
            })),
            (t[15] = l),
            (t[16] = w))
          : (w = t[16]),
          (b = w));
      } else if (C && !o("WAWebSTWGatingUtils").isSearchTheWebEnabled()) {
        var A, F;
        t[17] === Symbol.for("react.memo_cache_sentinel")
          ? ((A = s._(/*BTDS*/ "Message Feedback")),
            (F = s._(/*BTDS*/ "Feedback")),
            (t[17] = A),
            (t[18] = F))
          : ((A = t[17]), (F = t[18]));
        var O;
        t[19] === Symbol.for("react.memo_cache_sentinel")
          ? ((O = u.jsx(o("WAWebSearchIcon.react").SearchIcon, { xstyle: v })),
            (t[19] = O))
          : (O = t[19]);
        var B;
        (t[20] !== m
          ? ((B = u.jsx(o("WAWebRound.react").Round, {
              label: A,
              title: F,
              theme: o("WAWebRound.react").RoundTheme.QuickActionRefreshed,
              onClick: m,
              children: O,
            })),
            (t[20] = m),
            (t[21] = B))
          : (B = t[21]),
          (b = B));
      } else if (f) {
        var W;
        t[22] === Symbol.for("react.memo_cache_sentinel")
          ? ((W = s._(/*BTDS*/ "Ephemeral info")), (t[22] = W))
          : (W = t[22]);
        var q;
        t[23] === Symbol.for("react.memo_cache_sentinel")
          ? ((q = u.jsx(o("WAWebInfoAltIcon.react").InfoAltIcon, {
              xstyle: v,
            })),
            (t[23] = q))
          : (q = t[23]);
        var U;
        (t[24] !== a
          ? ((U = u.jsx(o("WAWebRound.react").Round, {
              label: W,
              theme: o("WAWebRound.react").RoundTheme.QuickActionRefreshed,
              onClick: a,
              children: q,
            })),
            (t[24] = a),
            (t[25] = U))
          : (U = t[25]),
          (b = U));
      } else if (o("WAWebBizCoexGatingUtils").bizHostedDevicesEnabled() && p) {
        var V;
        t[26] === Symbol.for("react.memo_cache_sentinel")
          ? ((V = u.jsx(o("WAWebInfoAltIcon.react").InfoAltIcon, {
              xstyle: v,
            })),
            (t[26] = V))
          : (V = t[26]);
        var H;
        (t[27] !== n
          ? ((H = u.jsx(o("WAWebRound.react").Round, {
              theme: o("WAWebRound.react").RoundTheme.QuickActionRefreshed,
              onClick: n,
              children: V,
            })),
            (t[27] = n),
            (t[28] = H))
          : (H = t[28]),
          (b = H));
      }
      return b;
    }
    l.default = d;
  },
  226,
);
