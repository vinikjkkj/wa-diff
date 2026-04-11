__d(
  "WAWebNewsletterDSAReportsRow.react",
  [
    "fbt",
    "WAWebArrowForwardIcon.react",
    "WAWebBusinessHoursIcon.react",
    "WAWebCellV2.react",
    "WAWebDSADateUtils",
    "WAWebNewsletterIntegrityUtils",
    "WAWebSettingsDocumentIcon.react",
    "WAWebText.react",
    "WAWebUISpacing",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = { icon: { color: "xhslqc4", $$css: !0 } };
    function d(e) {
      var t = o("react-compiler-runtime").c(27),
        n = e.onReportClick,
        a = e.report,
        i;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = { width: 24, height: 24, directional: !0, xstyle: c.icon }),
          (t[0] = i))
        : (i = t[0]);
      var l = i,
        d =
          a.reportStatus === "PENDING" || a.appeal.state === "PENDING"
            ? o("WAWebBusinessHoursIcon.react").BusinessHoursIcon
            : o("WAWebSettingsDocumentIcon.react").SettingsDocumentIcon,
        m;
      t[1] !== d
        ? ((m = u.jsx(d, babelHelpers.extends({}, l))), (t[1] = d), (t[2] = m))
        : (m = t[2]);
      var p = m,
        _;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = u.jsx(
            o("WAWebArrowForwardIcon.react").ArrowForwardIcon,
            babelHelpers.extends({}, l),
          )),
          (t[3] = _))
        : (_ = t[3]);
      var f = _,
        g;
      t[4] !== a.id
        ? ((g = a.id.toString()), (t[4] = a.id), (t[5] = g))
        : (g = t[5]);
      var h;
      t[6] !== a
        ? ((h = o("WAWebNewsletterIntegrityUtils").getReportStatusString(a)),
          (t[6] = a),
          (t[7] = h))
        : (h = t[7]);
      var y;
      t[8] !== g || t[9] !== h
        ? ((y = u.jsx(o("WAWebText.react").WAWebTextTitle, {
            testid: void 0,
            textWrap: "wrap",
            children: u.jsx("span", {
              className: "report-id",
              "data-testid": void 0,
              children: h,
            }),
          })),
          (t[8] = g),
          (t[9] = h),
          (t[10] = y))
        : (y = t[10]);
      var C = y,
        b;
      t[11] !== a.newsletterName
        ? ((b =
            a.newsletterName != null &&
            u.jsx(o("WAWebText.react").WAWebTextMuted, {
              textWrap: "wrap",
              children: a.newsletterName,
            })),
          (t[11] = a.newsletterName),
          (t[12] = b))
        : (b = t[12]);
      var v;
      t[13] !== a.appeal.creationTime || t[14] !== a.creationTime
        ? ((v = u.jsx(o("WAWebText.react").WAWebTextMuted, {
            testid: void 0,
            textWrap: "wrap",
            children:
              a.appeal.creationTime != null
                ? s._(/*BTDS*/ "Review requested: {appeal_creation_time}", [
                    s._param(
                      "appeal_creation_time",
                      o("WAWebDSADateUtils").getDSADateDisplayString(
                        a.appeal.creationTime,
                      ),
                    ),
                  ])
                : s._(/*BTDS*/ "Date reported: {report_creation_time}", [
                    s._param(
                      "report_creation_time",
                      o("WAWebDSADateUtils").getDSADateDisplayString(
                        a.creationTime,
                      ),
                    ),
                  ]),
          })),
          (t[13] = a.appeal.creationTime),
          (t[14] = a.creationTime),
          (t[15] = v))
        : (v = t[15]);
      var S;
      t[16] !== b || t[17] !== v
        ? ((S = u.jsxs(u.Fragment, { children: [b, v] })),
          (t[16] = b),
          (t[17] = v),
          (t[18] = S))
        : (S = t[18]);
      var R = S,
        L;
      t[19] !== n || t[20] !== a
        ? ((L = function () {
            return n(a);
          }),
          (t[19] = n),
          (t[20] = a),
          (t[21] = L))
        : (L = t[21]);
      var E;
      return (
        t[22] !== p || t[23] !== C || t[24] !== R || t[25] !== L
          ? ((E = u.jsx(r("WAWebCellV2.react"), {
              testid: void 0,
              size: "large",
              border: "bottom-full",
              detailLeft: p,
              detailLeftXStyle: o("WAWebUISpacing").uiPadding.top0,
              primary: C,
              secondary: R,
              detailRight: f,
              onClick: L,
            })),
            (t[22] = p),
            (t[23] = C),
            (t[24] = R),
            (t[25] = L),
            (t[26] = E))
          : (E = t[26]),
        E
      );
    }
    l.default = d;
  },
  226,
);
