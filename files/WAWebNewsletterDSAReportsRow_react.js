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
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = { icon: { color: "xhslqc4", $$css: !0 } };
    function d(e) {
      var t = e.onReportClick,
        n = e.report,
        a = { width: 24, height: 24, directional: !0, xstyle: c.icon },
        i =
          n.reportStatus === "PENDING" || n.appeal.state === "PENDING"
            ? o("WAWebBusinessHoursIcon.react").BusinessHoursIcon
            : o("WAWebSettingsDocumentIcon.react").SettingsDocumentIcon,
        l = u.jsx(i, babelHelpers.extends({}, a)),
        d = u.jsx(
          o("WAWebArrowForwardIcon.react").ArrowForwardIcon,
          babelHelpers.extends({}, a),
        ),
        m = u.jsx(o("WAWebText.react").WAWebTextTitle, {
          testid: void 0,
          textWrap: "wrap",
          children: u.jsx("span", {
            className: "report-id",
            "data-testid": void 0,
            children: o("WAWebNewsletterIntegrityUtils").getReportStatusString(
              n,
            ),
          }),
        }),
        p = u.jsxs(u.Fragment, {
          children: [
            n.newsletterName != null &&
              u.jsx(o("WAWebText.react").WAWebTextMuted, {
                textWrap: "wrap",
                children: n.newsletterName,
              }),
            u.jsx(o("WAWebText.react").WAWebTextMuted, {
              testid: void 0,
              textWrap: "wrap",
              children:
                n.appeal.creationTime != null
                  ? s._(/*BTDS*/ "Review requested: {appeal_creation_time}", [
                      s._param(
                        "appeal_creation_time",
                        o("WAWebDSADateUtils").getDSADateDisplayString(
                          n.appeal.creationTime,
                        ),
                      ),
                    ])
                  : s._(/*BTDS*/ "Date reported: {report_creation_time}", [
                      s._param(
                        "report_creation_time",
                        o("WAWebDSADateUtils").getDSADateDisplayString(
                          n.creationTime,
                        ),
                      ),
                    ]),
            }),
          ],
        });
      return u.jsx(r("WAWebCellV2.react"), {
        testid: void 0,
        size: "large",
        border: "bottom-full",
        detailLeft: l,
        detailLeftXStyle: o("WAWebUISpacing").uiPadding.top0,
        primary: m,
        secondary: p,
        detailRight: d,
        onClick: function () {
          return t(n);
        },
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
