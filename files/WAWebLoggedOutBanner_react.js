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
    "react-compiler-runtime",
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
      var n = o("react-compiler-runtime").c(23),
        a = t.category,
        i = t.header,
        l = t.link,
        s = t.text,
        m = a === "error",
        p;
      n[0] !== l
        ? ((p = l != null ? u.jsx(d, { link: l }) : null),
          (n[0] = l),
          (n[1] = p))
        : (p = n[1]);
      var _ = p,
        f;
      n[2] !== m
        ? ((f = (e || (e = r("stylex")))(
            c.wrapper,
            o("WAWebUISpacing").uiMargin.horizAuto,
            o("WAWebUISpacing").uiMargin.top0,
            o("WAWebUISpacing").uiMargin.bottom40,
            o("WAWebUISpacing").uiPadding.all15,
            m ? c.error : c.warn,
          )),
          (n[2] = m),
          (n[3] = f))
        : (f = n[3]);
      var g = m ? c.errorIcon : c.warningIcon,
        h;
      n[4] !== g
        ? ((h = u.jsx(o("WAWebFlex.react").FlexItem, {
            xstyle: o("WAWebUISpacing").uiMargin.top4,
            children: u.jsx(
              o("WAWebWarningOutlineIcon.react").WarningOutlineIcon,
              { width: 28, height: 28, iconXstyle: g },
            ),
          })),
          (n[4] = g),
          (n[5] = h))
        : (h = n[5]);
      var y, C;
      n[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = (e || (e = r("stylex")))(o("WAWebUISpacing").uiMargin.start16)),
          (C = e.props(c.header, o("WAWebUISpacing").uiMargin.bottom5)),
          (n[6] = y),
          (n[7] = C))
        : ((y = n[6]), (C = n[7]));
      var b;
      n[8] !== i
        ? ((b = u.jsx("div", babelHelpers.extends({}, C, { children: i }))),
          (n[8] = i),
          (n[9] = b))
        : (b = n[9]);
      var v;
      n[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = { className: "x1u7k74 x1hql6x6" }), (n[10] = v))
        : (v = n[10]);
      var S;
      n[11] !== s
        ? ((S = u.jsx("div", { children: s })), (n[11] = s), (n[12] = S))
        : (S = n[12]);
      var R;
      n[13] !== _ || n[14] !== S
        ? ((R = u.jsxs(
            "div",
            babelHelpers.extends({}, v, { children: [S, _] }),
          )),
          (n[13] = _),
          (n[14] = S),
          (n[15] = R))
        : (R = n[15]);
      var L;
      n[16] !== b || n[17] !== R
        ? ((L = u.jsxs(o("WAWebFlex.react").FlexColumn, {
            className: y,
            children: [b, R],
          })),
          (n[16] = b),
          (n[17] = R),
          (n[18] = L))
        : (L = n[18]);
      var E;
      return (
        n[19] !== f || n[20] !== L || n[21] !== h
          ? ((E = u.jsxs(o("WAWebFlex.react").FlexRow, {
              align: "start",
              grow: 1,
              className: f,
              children: [h, L],
            })),
            (n[19] = f),
            (n[20] = L),
            (n[21] = h),
            (n[22] = E))
          : (E = n[22]),
        E
      );
    }
    l.default = m;
  },
  98,
);
