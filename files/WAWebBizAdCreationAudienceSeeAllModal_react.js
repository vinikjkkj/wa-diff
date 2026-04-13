__d(
  "WAWebBizAdCreationAudienceSeeAllModal.react",
  [
    "fbt",
    "WAWebBackIcon.react",
    "WAWebBizAdLogger",
    "WAWebConfirmPopup.react",
    "WAWebFlex.react",
    "WAWebModal.react",
    "WAWebRadio.react",
    "WAWebSearchInput",
    "WDSButton.react",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useMemo,
      m = c.useState,
      p = {
        audienceList: {
          flexGrow: "x1iyjqo2",
          overflowY: "x1odjw0f",
          paddingInlineStart: "xdx6fka",
          paddingInlineEnd: "xvtqlqk",
          $$css: !0,
        },
        footer: {
          borderTopColor: "xx42vgk",
          borderTopStyle: "x13fuv20",
          borderTopWidth: "x178xt8z",
          flexShrink: "x2lah0s",
          paddingTop: "xl7twdi",
          $$css: !0,
        },
        header: {
          alignItems: "x6s0dn4",
          columnGap: "xs2akgl",
          flexShrink: "x2lah0s",
          $$css: !0,
        },
        root: {
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          maxHeight: "x1ea2lu8",
          width: "x3p9ev8",
          paddingTop: "xl7twdi",
          paddingInlineEnd: "xyo0t3i",
          paddingBottom: "xvg22vi",
          paddingInlineStart: "xb0esv5",
          rowGap: "x1f0uite",
          $$css: !0,
        },
        searchInput: { flexShrink: "x2lah0s", $$css: !0 },
      };
    function _(e) {
      var t = o("react-compiler-runtime").c(33),
        n = e.adAccountID,
        a = e.audienceData,
        i = e.loggerContext,
        l = e.lwiAudiences,
        c = e.onClose,
        d = e.onSelectAudience,
        _ = e.savedAudiences,
        f = m(""),
        g = f[0],
        h = f[1],
        y = m(a.audienceID),
        C = y[0],
        b = y[1],
        v;
      if (t[0] !== l || t[1] !== _) {
        if (((v = []), l != null)) {
          var S, R;
          (t[3] !== l
            ? ((R = Object.values(l)), (t[3] = l), (t[4] = R))
            : (R = t[4]),
            (S = v).push.apply(S, R));
        }
        if (_ != null && _.length > 0) {
          var L;
          (L = v).push.apply(L, _);
        }
        ((t[0] = l), (t[1] = _), (t[2] = v));
      } else v = t[2];
      var E = v,
        k;
      e: {
        if (g.trim() === "") {
          k = E;
          break e;
        }
        var I;
        if (t[5] !== E || t[6] !== g) {
          var T = g.toLowerCase();
          ((I = E.filter(function (e) {
            return e.name.toLowerCase().includes(T);
          })),
            (t[5] = E),
            (t[6] = g),
            (t[7] = I));
        } else I = t[7];
        k = I;
      }
      var D = k,
        x;
      t[8] !== n ||
      t[9] !== E ||
      t[10] !== a.audienceID ||
      t[11] !== i ||
      t[12] !== c ||
      t[13] !== d ||
      t[14] !== C
        ? ((x = function () {
            var e = E.find(function (e) {
              return e.audienceID === C;
            });
            (e != null &&
              (e.audienceID !== a.audienceID &&
                i != null &&
                r("WAWebBizAdLogger").log({
                  event: "change_audience",
                  loggerContext: i,
                  adAccountID: n,
                  startingValue: a.audienceID,
                  endingValue: e.audienceID,
                  extra: { audience_type: e.audienceOption },
                }),
              d(e)),
              c());
          }),
          (t[8] = n),
          (t[9] = E),
          (t[10] = a.audienceID),
          (t[11] = i),
          (t[12] = c),
          (t[13] = d),
          (t[14] = C),
          (t[15] = x))
        : (x = t[15]);
      var $ = x,
        P;
      t[16] !== c
        ? ((P = u.jsx(r("WDSButton.react"), {
            Icon: o("WAWebBackIcon.react").BackIcon,
            variant: "borderless",
            size: "medium",
            onPress: c,
          })),
          (t[16] = c),
          (t[17] = P))
        : (P = t[17]);
      var N;
      t[18] === Symbol.for("react.memo_cache_sentinel")
        ? ((N = u.jsx(r("WDSText.react"), {
            type: "Body1",
            colorName: "contentDefault",
            children: s._(/*BTDS*/ "Audience"),
          })),
          (t[18] = N))
        : (N = t[18]);
      var M;
      t[19] !== P
        ? ((M = u.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            xstyle: p.header,
            children: [P, N],
          })),
          (t[19] = P),
          (t[20] = M))
        : (M = t[20]);
      var w;
      t[21] === Symbol.for("react.memo_cache_sentinel")
        ? ((w = u.jsx(o("WAWebFlex.react").FlexItem, {
            xstyle: p.searchInput,
            children: u.jsx(o("WAWebSearchInput").SearchInput, {
              placeholder: s._(/*BTDS*/ "Search"),
              onSearch: h,
            }),
          })),
          (t[21] = w))
        : (w = t[21]);
      var A;
      t[22] === Symbol.for("react.memo_cache_sentinel")
        ? ((A = s._(/*BTDS*/ "Select target audience")), (t[22] = A))
        : (A = t[22]);
      var F;
      t[23] !== D || t[24] !== C
        ? ((F = u.jsx(o("WAWebFlex.react").FlexColumn, {
            align: "stretch",
            xstyle: p.audienceList,
            role: "radiogroup",
            "aria-label": A,
            children: D.map(function (e) {
              return u.jsx(
                o("WAWebRadio.react").RadioWithLabel,
                {
                  name: "audience-selection",
                  value: e.audienceID,
                  label: e.name,
                  theme: o("WAWebRadio.react").RadioWithLabelThemeEnum.LARGE,
                  checked: C === e.audienceID,
                  onChange: function () {
                    return b(e.audienceID);
                  },
                },
                e.audienceID,
              );
            }),
          })),
          (t[23] = D),
          (t[24] = C),
          (t[25] = F))
        : (F = t[25]);
      var O;
      t[26] === Symbol.for("react.memo_cache_sentinel")
        ? ((O = s._(/*BTDS*/ "Select")), (t[26] = O))
        : (O = t[26]);
      var B;
      t[27] !== $
        ? ((B = u.jsx(o("WAWebFlex.react").FlexRow, {
            align: "center",
            justify: "end",
            xstyle: p.footer,
            children: u.jsx(r("WDSButton.react"), {
              label: O,
              variant: "filled",
              size: "medium",
              type: "default",
              onPress: $,
            }),
          })),
          (t[27] = $),
          (t[28] = B))
        : (B = t[28]);
      var W;
      return (
        t[29] !== B || t[30] !== M || t[31] !== F
          ? ((W = u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              type: o("WAWebModal.react").ModalTheme.Auto,
              children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
                align: "stretch",
                xstyle: p.root,
                children: [M, w, F, B],
              }),
            })),
            (t[29] = B),
            (t[30] = M),
            (t[31] = F),
            (t[32] = W))
          : (W = t[32]),
        W
      );
    }
    l.default = _;
  },
  226,
);
