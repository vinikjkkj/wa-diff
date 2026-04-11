__d(
  "WAWebVoipConnectedParticipantsInfo.react",
  [
    "fbt",
    "WAWebCallLogUtils",
    "WAWebDetailImage.react",
    "WAWebFlex.react",
    "WAWebParticipantListUtils",
    "WDSIconIcArrowDropDown.react",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = u || (u = o("react")),
      d = u.useMemo,
      m = 28,
      p = 7,
      _ = 12,
      f = 3,
      g = 0.5,
      h = 20,
      y = {
        marginInlineStart: "x4lel18",
        zIndex: "xr3buco",
        borderStartStartRadius: "x1c9tyrk",
        borderStartEndRadius: "xeusxvb",
        borderEndEndRadius: "x1pahc9y",
        borderEndStartRadius: "x1ertn4p",
        borderTopWidth: "x178xt8z",
        borderInlineEndWidth: "x1lun4ml",
        borderBottomWidth: "xso031l",
        borderInlineStartWidth: "xpilrb4",
        borderTopStyle: "x13fuv20",
        borderInlineEndStyle: "x18b5jzi",
        borderBottomStyle: "x1q0q8m5",
        borderInlineStartStyle: "x1t7ytsu",
        borderTopColor: "x1ekq09l",
        borderInlineEndColor: "xlmuga0",
        borderBottomColor: "x54tcbp",
        borderInlineStartColor: "xlzwp1d",
        boxSizing: "x1afcbsf",
        $$css: !0,
      },
      C = {
        leftSection: {
          display: "x78zum5",
          alignItems: "x6s0dn4",
          rowGap: "x1qvou4u",
          columnGap: "x1s70e7g",
          minWidth: "xeuugli",
          flexGrow: "x1iyjqo2",
          flexShrink: "xs83m0k",
          flexBasis: "x1r8uery",
          $$css: !0,
        },
        nameText: {
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          textOverflow: "xlyipyv",
          whiteSpace: "xuxw1ft",
          $$css: !0,
        },
        rightSection: {
          display: "x78zum5",
          alignItems: "x6s0dn4",
          rowGap: "x1qvou4u",
          columnGap: "x1s70e7g",
          flexShrink: "x2lah0s",
          $$css: !0,
        },
        profilePicsContainer: {
          display: "x78zum5",
          alignItems: "x6s0dn4",
          flexShrink: "x2lah0s",
          $$css: !0,
        },
        profilePicWrapper: function (t) {
          return [
            y,
            {
              "--x-marginInlineStart": (function (e) {
                return typeof e == "number" ? e + "px" : e != null ? e : void 0;
              })(t === 0 ? 0 : -p),
              "--x-zIndex": 10 - t != null ? 10 - t : void 0,
            },
          ];
        },
        dimmedProfilePic: { opacity: "xbyyjgo", $$css: !0 },
        chevronIcon: { color: "xhslqc4", flexShrink: "x2lah0s", $$css: !0 },
        chevronIconExpanded: { transform: "x19jd1h0", $$css: !0 },
      };
    function b(e) {
      var t = o("react-compiler-runtime").c(29),
        n = e.allParticipants,
        a = e.connectedParticipants,
        i = e.isExpanded,
        l = e.onToggle,
        u = a.length,
        d;
      e: {
        if (u === 0) {
          d = null;
          break e;
        }
        var m;
        if (t[0] !== a) {
          var p = o("WAWebCallLogUtils").sortConnectedParticipants(a),
            _ = p.sortedParticipants;
          ((m = o(
            "WAWebParticipantListUtils",
          ).formatParticipantWidsPreserveOrder(_, !0)),
            (t[0] = a),
            (t[1] = m));
        } else m = t[1];
        d = m;
      }
      var g = d,
        y;
      if (t[2] !== n || t[3] !== a) {
        var b = o("WAWebCallLogUtils").sortConnectedParticipants(a),
          L = b.connectedSet,
          E = b.sortedParticipants;
        if (((y = E.slice(0, f).map(R)), y.length < f)) {
          var k,
            I = n.filter(function (e) {
              return !L.has(e.toString());
            }),
            T = o("WAWebCallLogUtils").sortParticipantWidsByPriority(I, null),
            D = f - y.length,
            x = T.slice(0, D).map(S);
          (k = y).push.apply(k, x);
        }
        ((t[2] = n), (t[3] = a), (t[4] = y));
      } else y = t[4];
      var $ = y;
      if (u === 0 || g == null) return null;
      var P;
      t[5] !== i
        ? ((P = i
            ? s._(/*BTDS*/ "Hide participants list")
            : s._(/*BTDS*/ "Show participants list")),
          (t[5] = i),
          (t[6] = P))
        : (P = t[6]);
      var N;
      t[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((N = {
            className:
              "x78zum5 x6s0dn4 x1qughib xh8yej3 x1f0uite xs2akgl x16ovd2e x1nzty39 x12xbjc7 x12w63v0 xjbqb8w xyi3aci xwf5gio x1p453bz x1suzm8a x972fbf x10w94by x1qhh985 x14e42zd x1ypdohk x1ubxc9n",
          }),
          (t[7] = N))
        : (N = t[7]);
      var M;
      t[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((M = c.jsx("div", {
            className:
              "xsmyaan x1kpxq89 x1c9tyrk xeusxvb x1pahc9y x1ertn4p x1qe8gl4 x2lah0s",
          })),
          (t[8] = M))
        : (M = t[8]);
      var w;
      t[9] !== g
        ? ((w = c.jsxs(o("WAWebFlex.react").FlexItem, {
            xstyle: C.leftSection,
            children: [
              M,
              c.jsx(o("WAWebFlex.react").FlexItem, {
                xstyle: C.nameText,
                children: c.jsx(r("WDSText.react"), {
                  type: "Body1",
                  colorName: "contentDefault",
                  maxLines: 1,
                  children: g,
                }),
              }),
            ],
          })),
          (t[9] = g),
          (t[10] = w))
        : (w = t[10]);
      var A;
      t[11] !== $ ? ((A = $.map(v)), (t[11] = $), (t[12] = A)) : (A = t[12]);
      var F;
      t[13] !== A
        ? ((F = c.jsx(o("WAWebFlex.react").FlexItem, {
            xstyle: C.profilePicsContainer,
            children: A,
          })),
          (t[13] = A),
          (t[14] = F))
        : (F = t[14]);
      var O = i && C.chevronIconExpanded,
        B;
      t[15] !== O
        ? ((B = [C.chevronIcon, O]), (t[15] = O), (t[16] = B))
        : (B = t[16]);
      var W;
      t[17] === Symbol.for("react.memo_cache_sentinel")
        ? ((W = c.jsx(r("WDSIconIcArrowDropDown.react"), {
            height: h,
            width: h,
          })),
          (t[17] = W))
        : (W = t[17]);
      var q;
      t[18] !== B
        ? ((q = c.jsx(o("WAWebFlex.react").FlexItem, {
            xstyle: B,
            children: W,
          })),
          (t[18] = B),
          (t[19] = q))
        : (q = t[19]);
      var U;
      t[20] !== q || t[21] !== F
        ? ((U = c.jsxs(o("WAWebFlex.react").FlexItem, {
            xstyle: C.rightSection,
            children: [F, q],
          })),
          (t[20] = q),
          (t[21] = F),
          (t[22] = U))
        : (U = t[22]);
      var V;
      return (
        t[23] !== i || t[24] !== l || t[25] !== U || t[26] !== P || t[27] !== w
          ? ((V = c.jsxs(
              "button",
              babelHelpers.extends(
                {
                  type: "button",
                  onClick: l,
                  "aria-expanded": i,
                  "aria-label": P,
                },
                N,
                { children: [w, U] },
              ),
            )),
            (t[23] = i),
            (t[24] = l),
            (t[25] = U),
            (t[26] = P),
            (t[27] = w),
            (t[28] = V))
          : (V = t[28]),
        V
      );
    }
    function v(t, n) {
      return c.jsx(
        "div",
        babelHelpers.extends(
          {},
          (e || (e = r("stylex"))).props(
            C.profilePicWrapper(n),
            !t.isConnected && C.dimmedProfilePic,
          ),
          {
            children: c.jsx(o("WAWebDetailImage.react").DetailImage, {
              id: t.wid,
              size: m,
              shape: o("WAWebDetailImage.react").DetailImageShape.Circle,
              waitIdle: !0,
            }),
          },
        ),
        t.wid.toString(),
      );
    }
    v.displayName = v.name + " [from " + i.id + "]";
    function S(e) {
      return { wid: e, isConnected: !1 };
    }
    function R(e) {
      return { wid: e, isConnected: !0 };
    }
    l.default = b;
  },
  226,
);
