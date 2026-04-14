__d(
  "WAWebOutgoingGroupCallParticipantInfo.react",
  [
    "WAWebCallLogUtils",
    "WAWebFlex.react",
    "WAWebMultiParticipantCallImage.react",
    "WDSText.react",
    "react",
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
      var t = e.callStateText,
        n = e.compact,
        a = n === void 0 ? !1 : n,
        i = e.imageSize,
        l = i === void 0 ? 48 : i,
        d = e.nameText,
        m = e.participantWids,
        p = a ? c.textAlignStart : c.textAlignCenter,
        _ = u(
          function () {
            return o("WAWebCallLogUtils").sortParticipantWidsByPriority(
              m,
              null,
            );
          },
          [m],
        );
      return a
        ? s.jsxs(o("WAWebFlex.react").FlexRow, {
            xstyle: c.compactContainer,
            children: [
              s.jsx(o("WAWebFlex.react").FlexItem, {
                children: s.jsx(r("WAWebMultiParticipantCallImage.react"), {
                  participantWids: _,
                  size: typeof l == "number" ? l : 48,
                }),
              }),
              s.jsxs(o("WAWebFlex.react").FlexColumn, {
                align: "start",
                justify: "center",
                grow: 1,
                shrink: 1,
                basis: 0,
                xstyle: [c.textContainer, c.textContainerTruncate],
                children: [
                  d != null &&
                    s.jsx(o("WAWebFlex.react").FlexItem, {
                      xstyle: p,
                      children: s.jsx(r("WDSText.react"), {
                        type: "Body1",
                        colorName: "contentDefault",
                        selectable: !1,
                        maxLines: 1,
                        children: d,
                      }),
                    }),
                  t != null &&
                    s.jsx(o("WAWebFlex.react").FlexItem, {
                      xstyle: p,
                      children: s.jsx(r("WDSText.react"), {
                        type: "Body2",
                        colorName: "contentDeemphasized",
                        selectable: !1,
                        maxLines: 1,
                        children: s.jsx("span", {
                          "data-testid": void 0,
                          children: t,
                        }),
                      }),
                    }),
                ],
              }),
            ],
          })
        : s.jsxs(o("WAWebFlex.react").FlexColumn, {
            align: "center",
            children: [
              s.jsx(o("WAWebFlex.react").FlexItem, {
                children: s.jsx(r("WAWebMultiParticipantCallImage.react"), {
                  participantWids: _,
                  size: l,
                }),
              }),
              d != null &&
                s.jsx(o("WAWebFlex.react").FlexItem, {
                  xstyle: [c.nameSpacing, c.textContainer, p],
                  children: s.jsx(r("WDSText.react"), {
                    type: "Body1",
                    colorName: "contentDefault",
                    selectable: !1,
                    maxLines: 1,
                    children: d,
                  }),
                }),
              t != null &&
                s.jsx(o("WAWebFlex.react").FlexItem, {
                  xstyle: p,
                  children: s.jsx(r("WDSText.react"), {
                    type: "Body2",
                    colorName: "contentDeemphasized",
                    selectable: !1,
                    children: s.jsx("span", {
                      "data-testid": void 0,
                      children: t,
                    }),
                  }),
                }),
            ],
          });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  98,
);
