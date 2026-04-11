__d(
  "WAWebBanner.react",
  [
    "WAWebFbtCommon",
    "WAWebFlexBox.react",
    "WAWebImgWithFallback.react",
    "WAWebTabOrder",
    "WAWebText.react",
    "WAWebXIcon.react",
    "WDSButton.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = {
        container: {
          borderStartStartRadius: "xlr9sxt",
          borderStartEndRadius: "xvvg52n",
          borderEndEndRadius: "xwd4zgb",
          borderEndStartRadius: "xq8v1ta",
          $$css: !0,
        },
        icon: { $$css: !0 },
        title: {
          fontSize: "x1jchvi3",
          fontWeight: "xk50ysn",
          lineHeight: "x1o2sk6j",
          letterSpacing: "x1p4m5qa",
          $$css: !0,
        },
        text: {
          fontSize: "x1f6kntn",
          lineHeight: "x1fc57z9",
          letterSpacing: "xf4yft",
          $$css: !0,
        },
        dismissButton: {
          height: "xt7dq6l",
          width: "x14atkfc",
          minHeight: "x65nank",
          minWidth: "x15x72sd",
          borderStartStartRadius: "x1c9tyrk",
          borderStartEndRadius: "xeusxvb",
          borderEndEndRadius: "x1pahc9y",
          borderEndStartRadius: "x1ertn4p",
          paddingTop: "x1y1aw1k",
          paddingInlineEnd: "xf159sx",
          paddingBottom: "xwib8y2",
          paddingInlineStart: "xmzvs34",
          marginTop: "x9otpla",
          marginInlineEnd: "x1w5wx5t",
          marginBottom: "x1wsgfga",
          marginInlineStart: "x1qfufaz",
          ":hover_backgroundColor": "x1ubxc9n",
          $$css: !0,
        },
        iconFill: { color: "xhslqc4", $$css: !0 },
      },
      c = {
        default: { backgroundColor: "x1abdmlv", $$css: !0 },
        warning: { backgroundColor: "xj44v4f", $$css: !0 },
        tip: { backgroundColor: "x1280gxy", $$css: !0 },
      },
      d = {
        default: { color: "x1v5yvga", $$css: !0 },
        warning: { color: "x1f81s73", $$css: !0 },
        tip: { color: "xhslqc4", $$css: !0 },
      };
    function m(e) {
      var t = e.actionText,
        n = e.icon,
        a = e.onAction,
        i = e.onClick,
        l = e.onDismiss,
        d = e.testid,
        m = e.text,
        _ = e.textTestid,
        f = e.title,
        g = e.type,
        h = p(n, g),
        y = i != null ? { onClick: i, role: "button" } : null;
      return s.jsxs(o("WAWebFlexBox.react").FlexRow, {
        margin: [8, 12],
        padding: [12, 16],
        testid: void 0,
        xstyle: [u.container, c[g]],
        children: [
          h != null &&
            s.jsx(
              o("WAWebFlexBox.react").FlexRow,
              babelHelpers.extends(
                {
                  align: "start",
                  justify: "center",
                  paddingEnd: 16,
                  xstyle: u.icon,
                },
                y,
                { children: h },
              ),
            ),
          s.jsxs(o("WAWebFlexBox.react").FlexColumn, {
            grow: 1,
            children: [
              s.jsxs(o("WAWebFlexBox.react").FlexRow, {
                justify: "all",
                xstyle: u.title,
                children: [
                  s.jsx(
                    o("WAWebFlexBox.react").FlexItem,
                    babelHelpers.extends({}, y, { children: f }),
                  ),
                  l != null &&
                    s.jsx(r("WDSButton.react"), {
                      tabOrder: o("WAWebTabOrder").TAB_ORDER.BUTTER_BAR,
                      xstyle: [u.iconFill, u.dismissButton],
                      "aria-label": r("WAWebFbtCommon")("Close"),
                      Icon: o("WAWebXIcon.react").XIcon,
                      onPress: l,
                      variant: "borderless",
                    }),
                ],
              }),
              s.jsx(o("WAWebFlexBox.react").FlexRow, {
                paddingTop: 8,
                xstyle: u.text,
                children: s.jsxs(
                  o("WAWebFlexBox.react").FlexItem,
                  babelHelpers.extends({}, y, {
                    children: [
                      s.jsx("span", { "data-testid": void 0, children: m }),
                      t != null &&
                        s.jsxs(s.Fragment, {
                          children: [
                            "\xA0",
                            s.jsx(o("WAWebText.react").WAWebClickableText, {
                              color: "actionEmphasized",
                              onClick: i != null ? a : null,
                              children: t,
                            }),
                          ],
                        }),
                    ],
                  }),
                ),
              }),
            ],
          }),
        ],
      });
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p(e, t) {
      if (e == null) return null;
      if (e.type === "custom")
        return s.jsx(o("WAWebImgWithFallback.react").ImgWithFallback, {
          fallbackSVG: null,
          imgProps: { src: e.customIcon.src, alt: e.customIcon.altText },
          size: 36,
        });
      e.type;
      var n = e.icon;
      return s.jsx(n, { height: 36, width: 36, xstyle: d[t] });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.WAWebBanner = m));
  },
  98,
);
