__d(
  "WAWebReportedMsgSubtitle.react",
  [
    "fbt",
    "WAWebText.react",
    "WAWebUISpacing",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = { reportedBy: { fontSize: "x1f6kntn", color: "xhslqc4", $$css: !0 } };
    function m(t) {
      var n,
        a = o("react-compiler-runtime").c(15),
        i = t.msg,
        l = t.onMsgFooterClick,
        u = (n = i.reporterJidList) == null ? void 0 : n.length,
        m;
      a[0] !== u
        ? ((m = s._(
            /*BTDS*/ '_j{"*":"{number_of_reporter} members","_1":"1 member"}',
            [s._plural(u, "number_of_reporter")],
          )),
          (a[0] = u),
          (a[1] = m))
        : (m = a[1]);
      var p = m,
        _;
      if (a[2] !== p || a[3] !== i || a[4] !== l) {
        var f;
        a[6] !== i || a[7] !== l
          ? ((f = function () {
              return l == null ? void 0 : l(i);
            }),
            (a[6] = i),
            (a[7] = l),
            (a[8] = f))
          : (f = a[8]);
        var g;
        (a[9] !== p || a[10] !== f
          ? ((g = c.jsx(o("WAWebText.react").WAWebClickableText, {
              color: "teal",
              onClick: f,
              children: p,
            })),
            (a[9] = p),
            (a[10] = f),
            (a[11] = g))
          : (g = a[11]),
          (_ = c.jsx(o("WAWebText.react").WAWebTextSmall, {
            as: "span",
            children: s._(
              /*BTDS*/ "Sent for review by {number_of_members_str}",
              [s._param("number_of_members_str", g)],
            ),
          })),
          (a[2] = p),
          (a[3] = i),
          (a[4] = l),
          (a[5] = _));
      } else _ = a[5];
      var h = _,
        y;
      a[12] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = (e || (e = r("stylex"))).props(
            d.reportedBy,
            o("WAWebUISpacing").uiMargin.start36,
            o("WAWebUISpacing").uiMargin.top8,
          )),
          (a[12] = y))
        : (y = a[12]);
      var C;
      if (a[13] !== h) {
        var b = c.jsx("div", babelHelpers.extends({}, y, { children: h }));
        ((C = c.jsx(c.Fragment, { children: b })), (a[13] = h), (a[14] = C));
      } else C = a[14];
      return C;
    }
    l.default = m;
  },
  226,
);
