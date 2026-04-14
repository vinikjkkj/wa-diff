__d(
  "WAWebLoggedOutBanner.react",
  [
    "WAWebArrowForwardIcon.react",
    "WAWebClickable.react",
    "WAWebExternalLink.react",
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WAWebUISpacing",
    "WAWebWarningOutlineIcon.react",
    "react",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = {
        wrapper: {
          minHeight: "x4lt0of",
          boxSizing: "x9f619",
          borderStartStartRadius: "x16qb05n",
          borderStartEndRadius: "xi7iut8",
          borderEndEndRadius: "x1dm3dyd",
          borderEndStartRadius: "x1pv694p",
          $$css: !0,
        },
        header: {
          lineHeight: "x1evy7pa",
          fontSize: "x1c3i2sq",
          color: "x1hql6x6",
          $$css: !0,
        },
        error: { backgroundColor: "x19lcxje", $$css: !0 },
        errorIcon: { color: "x1tqhaal", $$css: !0 },
        warn: { backgroundColor: "x1hxtir", $$css: !0 },
        warningIcon: { color: "x1gnygd6", $$css: !0 },
        moreHelpLinkIcon: { rotate: "x14ahhpt", $$css: !0 },
        moreHelpLinkText: {
          color: "x1hql6x6",
          fontSize: "x1f6kntn",
          lineHeight: "x1evy7pa",
          fontWeight: "xk50ysn",
          $$css: !0,
        },
      };
    function d(e) {
      var t = e.link;
      return u.jsx(o("WAWebClickable.react").Clickable, {
        xstyle: c.moreHelpLinkText,
        as: "span",
        dataTestId: "link-device-qrcode-alt-linking-hint",
        onClick: function () {
          o("WAWebExternalLink.react").openExternalLink(t);
        },
        children: u.jsxs(o("WAWebFlex.react").FlexRow, {
          align: "center",
          children: [
            r("WAWebFbtCommon")("Learn more"),
            u.jsx(o("WAWebArrowForwardIcon.react").ArrowForwardIcon, {
              width: 20,
              height: 20,
              iconXstyle: [
                c.moreHelpLinkIcon,
                o("WAWebUISpacing").uiMargin.start5,
              ],
            }),
          ],
        }),
      });
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m(t) {
      var n = t.category,
        a = t.header,
        i = t.link,
        l = t.text,
        s = n === "error",
        m = i != null ? u.jsx(d, { link: i }) : null;
      return u.jsxs(o("WAWebFlex.react").FlexRow, {
        align: "start",
        grow: 1,
        className: (e || (e = r("stylex")))(
          c.wrapper,
          o("WAWebUISpacing").uiMargin.horizAuto,
          o("WAWebUISpacing").uiMargin.top0,
          o("WAWebUISpacing").uiMargin.bottom40,
          o("WAWebUISpacing").uiPadding.all15,
          s ? c.error : c.warn,
        ),
        children: [
          u.jsx(o("WAWebFlex.react").FlexItem, {
            xstyle: o("WAWebUISpacing").uiMargin.top4,
            children: u.jsx(
              o("WAWebWarningOutlineIcon.react").WarningOutlineIcon,
              {
                width: 28,
                height: 28,
                iconXstyle: s ? c.errorIcon : c.warningIcon,
              },
            ),
          }),
          u.jsxs(o("WAWebFlex.react").FlexColumn, {
            className: e(o("WAWebUISpacing").uiMargin.start16),
            children: [
              u.jsx(
                "div",
                babelHelpers.extends(
                  {},
                  e.props(c.header, o("WAWebUISpacing").uiMargin.bottom5),
                  { children: a },
                ),
              ),
              u.jsxs("div", {
                className: "x1u7k74 x1hql6x6",
                children: [u.jsx("div", { children: l }), m],
              }),
            ],
          }),
        ],
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  98,
);
