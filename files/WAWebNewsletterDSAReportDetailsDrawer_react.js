__d(
  "WAWebNewsletterDSAReportDetailsDrawer.react",
  [
    "WAWebButton.react",
    "WAWebCommonNewsletterIntegrityStrings",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerSection.react",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterReportDetailsComponents",
    "WAWebRemediationOptionSection.react",
    "WAWebUISpacing",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["ref"],
      s,
      u = s || (s = o("react")),
      c = {
        container: {
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          flexGrow: "x1iyjqo2",
          alignItems: "x6s0dn4",
          $$css: !0,
        },
        btnContainer: { textAlign: "x2b8uid", $$css: !0 },
      };
    function d(e, t, n) {
      return n.reportStatus !== "FAIL"
        ? null
        : o("WAWebNewsletterGatingUtils").isDSA21ChannelReportingEnabled() ===
            !0
          ? n.appeal.creationTime != null && n.appeal.state !== "REJECT"
            ? null
            : u.jsx(r("WAWebRemediationOptionSection.react"), {
                buttonType: "primary",
                stretch: !1,
                onClickSeeOptions: e,
              })
          : n.appeal.state === "NOT_APPEALED"
            ? u.jsx(r("WAWebDrawerSection.react"), {
                animation: !1,
                xstyle: [c.btnContainer, o("WAWebUISpacing").uiPadding.top24],
                children: u.jsx(o("WAWebButton.react").WAWebButtonSecondary, {
                  testid: void 0,
                  stretch: !1,
                  onClick: t,
                  shadowOnHover: !1,
                  children: o(
                    "WAWebCommonNewsletterIntegrityStrings",
                  ).getRequestAppealButtonText(),
                }),
              })
            : null;
    }
    function m(t) {
      var n = o("react-compiler-runtime").c(21),
        a,
        i;
      n[0] !== t
        ? ((i = t.ref),
          (a = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i))
        : ((a = n[1]), (i = n[2]));
      var l = a,
        s = l.onBack,
        m = l.onClickSeeOptions,
        p = l.onRequestReviewClick,
        _ = l.report,
        f;
      n[3] !== _
        ? ((f =
            _.appeal.creationTime != null
              ? u.jsx(
                  o("WAWebNewsletterReportDetailsComponents")
                    .ReportDetailsContentWithAppealInfo,
                  { report: _ },
                )
              : u.jsx(
                  o("WAWebNewsletterReportDetailsComponents")
                    .ReportDetailsContent,
                  { report: _ },
                )),
          (n[3] = _),
          (n[4] = f))
        : (f = n[4]);
      var g = f,
        h;
      n[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = {
            surface: "unknown",
            viewName: "newsletter-dsa-report-details",
          }),
          (n[5] = h))
        : (h = n[5]);
      var y;
      n[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = o(
            "WAWebCommonNewsletterIntegrityStrings",
          ).getNewsletterDSAReportsDrawerTitle()),
          (n[6] = y))
        : (y = n[6]);
      var C;
      n[7] !== s
        ? ((C = u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            title: y,
            onBack: s,
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
          })),
          (n[7] = s),
          (n[8] = C))
        : (C = n[8]);
      var b;
      n[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = [
            c.container,
            o("WAWebUISpacing").uiPadding.vert36,
            o("WAWebUISpacing").uiPadding.horiz32,
          ]),
          (n[9] = b))
        : (b = n[9]);
      var v;
      n[10] !== m || n[11] !== p || n[12] !== _
        ? ((v = d(m, p, _)), (n[10] = m), (n[11] = p), (n[12] = _), (n[13] = v))
        : (v = n[13]);
      var S;
      n[14] !== g || n[15] !== v
        ? ((S = u.jsx(r("WAWebDrawerBody.react"), {
            children: u.jsxs(r("WAWebDrawerSection.react"), {
              animation: !1,
              xstyle: b,
              children: [g, v],
            }),
          })),
          (n[14] = g),
          (n[15] = v),
          (n[16] = S))
        : (S = n[16]);
      var R;
      return (
        n[17] !== i || n[18] !== C || n[19] !== S
          ? ((R = u.jsxs(r("WAWebDrawer.react"), {
              theme: "gallery",
              ref: i,
              testid: void 0,
              tsNavigationData: h,
              children: [C, S],
            })),
            (n[17] = i),
            (n[18] = C),
            (n[19] = S),
            (n[20] = R))
          : (R = n[20]),
        R
      );
    }
    l.default = m;
  },
  98,
);
