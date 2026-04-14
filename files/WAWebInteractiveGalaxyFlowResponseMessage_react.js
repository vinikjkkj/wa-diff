__d(
  "WAWebInteractiveGalaxyFlowResponseMessage.react",
  [
    "fbt",
    "WABidi",
    "WAWebEmojiText.react",
    "WAWebFlex.react",
    "WAWebGetGalaxyFlowCtaButton",
    "WAWebGetGalaxyFlowsActionFromButton",
    "WAWebL10N",
    "WAWebMessageMeta.react",
    "WAWebText.react",
    "WAWebUISpacing",
    "WDSIconIcDescription.react",
    "react",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = u || (u = o("react")),
      d = u.useMemo,
      m = {
        bubble: {
          boxSizing: "x9f619",
          userSelect: "x87ps6o",
          width: "x1o095ql",
          paddingBottom: "xmkwqf5",
          $$css: !0,
        },
        innerBubble: {
          height: "xdiz9cm",
          borderStartStartRadius: "xp43t2z",
          borderStartEndRadius: "x5j5mwf",
          borderEndEndRadius: "xptal55",
          borderEndStartRadius: "xjodkme",
          backgroundColor: "x1bu39yj",
          $$css: !0,
        },
        roundIconContainer: {
          display: "x78zum5",
          alignItems: "x6s0dn4",
          justifyContent: "xl56j7k",
          width: "x14qfxbe",
          height: "xc9qbxq",
          backgroundColor: "x1k43qru",
          borderStartStartRadius: "x1c9tyrk",
          borderStartEndRadius: "xeusxvb",
          borderEndEndRadius: "x1pahc9y",
          borderEndStartRadius: "x1ertn4p",
          $$css: !0,
        },
        titleText: { fontSize: "x1jchvi3", $$css: !0 },
        iconColor: { color: "x1v5yvga", $$css: !0 },
      };
    function p(t) {
      var n,
        a,
        i = t.defaultMsg,
        l = t.msg,
        u =
          (n =
            (a = l.interactivePayload) == null ? void 0 : a.buttonParamsJson) !=
          null
            ? n
            : "{}",
        p = d(
          function () {
            return JSON.parse(u);
          },
          [u],
        ),
        _ = p.wa_flow_response_params;
      if (
        _ == null ||
        !Object.prototype.hasOwnProperty.call(_, "response_message") ||
        _.response_message == null
      )
        return i;
      if (_.title == null) return null;
      var f = o("WAWebGetGalaxyFlowCtaButton").getGalaxyFlowResponseCtaButton(
        u,
        0,
      );
      if (f == null) return null;
      var g = o(
          "WAWebGetGalaxyFlowsActionFromButton",
        ).getCtaFlowInteractiveAction(f, l),
        h = c.jsx(
          "div",
          babelHelpers.extends(
            {},
            {
              0: { className: "x10l6tqk x1n327nk xv1oinf x1oi8geq" },
              1: { className: "x10l6tqk x1n327nk xv1oinf x1oi8geq xtrg13t" },
            }[!!r("WAWebL10N").isRTL() << 0],
            { children: c.jsx(o("WAWebMessageMeta.react").Meta, { msg: l }) },
          ),
        ),
        y = s._(/*BTDS*/ "Response sent"),
        C = _.title;
      return c.jsx(
        "div",
        babelHelpers.extends(
          {
            "data-testid": void 0,
            role: "button",
            onClick: function () {
              return g == null || g.onClick == null ? void 0 : g.onClick();
            },
            tabIndex: 0,
            onKeyDown: function (t) {
              (t.preventDefault(),
                (t.key === "Enter" || t.key === " ") &&
                  (g == null || g.onClick == null || g.onClick()));
            },
          },
          (e || (e = r("stylex"))).props(
            [m.bubble, o("WAWebUISpacing").uiPadding.top5],
            o("WAWebUISpacing").uiPadding.horiz5,
          ),
          {
            children: c.jsxs(o("WAWebFlex.react").FlexRow, {
              xstyle: [m.innerBubble, o("WAWebUISpacing").uiPadding.all8],
              align: "center",
              children: [
                c.jsx(o("WAWebFlex.react").FlexItem, {
                  xstyle: m.roundIconContainer,
                  padding: 2,
                  children: c.jsx(r("WDSIconIcDescription.react"), {
                    xstyle: m.iconColor,
                  }),
                }),
                c.jsxs(o("WAWebFlex.react").FlexColumn, {
                  xstyle: o("WAWebUISpacing").uiPadding.start12,
                  justify: "evenly",
                  rowGap: 4,
                  children: [
                    c.jsx(o("WAWebEmojiText.react").EmojiText, {
                      xstyle: m.titleText,
                      text: C,
                      textLimit: 30,
                      dirMismatch:
                        (o("WABidi").dir(C) === "rtl") !==
                        r("WAWebL10N").isRTL(),
                      direction: o("WABidi").dir(C),
                      inferLinesDirection: !0,
                    }),
                    c.jsx(o("WAWebText.react").WAWebTextMuted, { children: y }),
                    h,
                  ],
                }),
              ],
            }),
          },
        ),
      );
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  226,
);
