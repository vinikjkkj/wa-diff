__d(
  "WAWebOutgoingGroupCallParticipantInfo.react",
  [
    "WAWebCallLogUtils",
    "WAWebFlex.react",
    "WAWebMultiParticipantCallImage.react",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e.useMemo,
      c = {
        compactContainer: {
          alignItems: "x6s0dn4",
          rowGap: "x1f0uite",
          columnGap: "xs2akgl",
          width: "xh8yej3",
          $$css: !0,
        },
        textContainer: {
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          minWidth: "xeuugli",
          $$css: !0,
        },
        textContainerTruncate: {
          textOverflow: "xlyipyv",
          whiteSpace: "xuxw1ft",
          $$css: !0,
        },
        textAlignStart: { textAlign: "x1yc453h", $$css: !0 },
        textAlignCenter: { textAlign: "x2b8uid", $$css: !0 },
        nameSpacing: { marginTop: "x1de0gy", $$css: !0 },
      };
    function d(e) {
      var t = o("react-compiler-runtime").c(31),
        n = e.callStateText,
        a = e.compact,
        i = e.imageSize,
        l = e.nameText,
        u = e.participantWids,
        d = a === void 0 ? !1 : a,
        m = i === void 0 ? 48 : i,
        p = d ? c.textAlignStart : c.textAlignCenter,
        _;
      t[0] !== u
        ? ((_ = o("WAWebCallLogUtils").sortParticipantWidsByPriority(u, null)),
          (t[0] = u),
          (t[1] = _))
        : (_ = t[1]);
      var f = _;
      if (d) {
        var g = typeof m == "number" ? m : 48,
          h;
        t[2] !== f || t[3] !== g
          ? ((h = s.jsx(o("WAWebFlex.react").FlexItem, {
              children: s.jsx(r("WAWebMultiParticipantCallImage.react"), {
                participantWids: f,
                size: g,
              }),
            })),
            (t[2] = f),
            (t[3] = g),
            (t[4] = h))
          : (h = t[4]);
        var y;
        t[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((y = [c.textContainer, c.textContainerTruncate]), (t[5] = y))
          : (y = t[5]);
        var C;
        t[6] !== l || t[7] !== p
          ? ((C =
              l != null &&
              s.jsx(o("WAWebFlex.react").FlexItem, {
                xstyle: p,
                children: s.jsx(r("WDSText.react"), {
                  type: "Body1",
                  colorName: "contentDefault",
                  selectable: !1,
                  maxLines: 1,
                  children: l,
                }),
              })),
            (t[6] = l),
            (t[7] = p),
            (t[8] = C))
          : (C = t[8]);
        var b;
        t[9] !== n || t[10] !== p
          ? ((b =
              n != null &&
              s.jsx(o("WAWebFlex.react").FlexItem, {
                xstyle: p,
                children: s.jsx(r("WDSText.react"), {
                  type: "Body2",
                  colorName: "contentDeemphasized",
                  selectable: !1,
                  maxLines: 1,
                  children: s.jsx("span", {
                    "data-testid": void 0,
                    children: n,
                  }),
                }),
              })),
            (t[9] = n),
            (t[10] = p),
            (t[11] = b))
          : (b = t[11]);
        var v;
        t[12] !== C || t[13] !== b
          ? ((v = s.jsxs(o("WAWebFlex.react").FlexColumn, {
              align: "start",
              justify: "center",
              grow: 1,
              shrink: 1,
              basis: 0,
              xstyle: y,
              children: [C, b],
            })),
            (t[12] = C),
            (t[13] = b),
            (t[14] = v))
          : (v = t[14]);
        var S;
        return (
          t[15] !== h || t[16] !== v
            ? ((S = s.jsxs(o("WAWebFlex.react").FlexRow, {
                xstyle: c.compactContainer,
                children: [h, v],
              })),
              (t[15] = h),
              (t[16] = v),
              (t[17] = S))
            : (S = t[17]),
          S
        );
      }
      var R;
      t[18] !== m || t[19] !== f
        ? ((R = s.jsx(o("WAWebFlex.react").FlexItem, {
            children: s.jsx(r("WAWebMultiParticipantCallImage.react"), {
              participantWids: f,
              size: m,
            }),
          })),
          (t[18] = m),
          (t[19] = f),
          (t[20] = R))
        : (R = t[20]);
      var L;
      t[21] !== l || t[22] !== p
        ? ((L =
            l != null &&
            s.jsx(o("WAWebFlex.react").FlexItem, {
              xstyle: [c.nameSpacing, c.textContainer, p],
              children: s.jsx(r("WDSText.react"), {
                type: "Body1",
                colorName: "contentDefault",
                selectable: !1,
                maxLines: 1,
                children: l,
              }),
            })),
          (t[21] = l),
          (t[22] = p),
          (t[23] = L))
        : (L = t[23]);
      var E;
      t[24] !== n || t[25] !== p
        ? ((E =
            n != null &&
            s.jsx(o("WAWebFlex.react").FlexItem, {
              xstyle: p,
              children: s.jsx(r("WDSText.react"), {
                type: "Body2",
                colorName: "contentDeemphasized",
                selectable: !1,
                children: s.jsx("span", { "data-testid": void 0, children: n }),
              }),
            })),
          (t[24] = n),
          (t[25] = p),
          (t[26] = E))
        : (E = t[26]);
      var k;
      return (
        t[27] !== R || t[28] !== L || t[29] !== E
          ? ((k = s.jsxs(o("WAWebFlex.react").FlexColumn, {
              align: "center",
              children: [R, L, E],
            })),
            (t[27] = R),
            (t[28] = L),
            (t[29] = E),
            (t[30] = k))
          : (k = t[30]),
        k
      );
    }
    l.default = d;
  },
  98,
);
