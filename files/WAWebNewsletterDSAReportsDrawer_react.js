__d(
  "WAWebNewsletterDSAReportsDrawer.react",
  [
    "fbt",
    "WAWebCommonNewsletterIntegrityStrings",
    "WAWebCommonNewsletterStrings",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerSection.react",
    "WAWebEmptyState.react",
    "WAWebFlex.react",
    "WAWebNewsletterDSAReportsRow.react",
    "WAWebText.react",
    "react",
    "useWAWebNewsletterReports",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["ref"],
      u,
      c = u || (u = o("react")),
      d = {
        container: {
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          flexGrow: "x1iyjqo2",
          $$css: !0,
        },
        emptyListContainer: {
          alignItems: "x6s0dn4",
          justifyContent: "xl56j7k",
          $$css: !0,
        },
        reportListContainer: { justifyContent: "x1nhvcw1", $$css: !0 },
        textCenter: { textAlign: "x2b8uid", $$css: !0 },
        paddingHoriz32: {
          paddingInlineStart: "x1m4z3lf",
          paddingInlineEnd: "x1evaxtz",
          paddingLeft: null,
          paddingRight: null,
          $$css: !0,
        },
      };
    function m() {
      return c.jsxs(r("WAWebDrawerSection.react"), {
        animation: !1,
        xstyle: [d.container, d.emptyListContainer, d.paddingHoriz32],
        children: [
          c.jsx(o("WAWebText.react").WAWebTextLarge, {
            testid: void 0,
            marginBottom: 16,
            children: s._(/*BTDS*/ "No reports"),
          }),
          c.jsx(o("WAWebText.react").WAWebTextSmall, {
            testid: void 0,
            xstyle: d.textCenter,
            children: s._(
              /*BTDS*/ "If you report a channel, you can see your report and the outcome here.",
            ),
          }),
        ],
      });
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p(e) {
      var t = e.onReportClick,
        n = e.reports;
      return c.jsx(r("WAWebDrawerSection.react"), {
        animation: !1,
        testid: void 0,
        xstyle: [d.container, d.reportListContainer],
        children: c.jsx(o("WAWebFlex.react").FlexColumn, {
          children: n.map(function (e) {
            return c.jsx(
              r("WAWebNewsletterDSAReportsRow.react"),
              { report: e, onReportClick: t },
              e.id.toString(),
            );
          }),
        }),
      });
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _(t) {
      var n = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = a.onClose,
        l = a.onReportClick,
        u = o("useWAWebNewsletterReports").useNewsletterReports(),
        d = u[0],
        _ = u[1],
        f = u[2],
        g;
      switch (d) {
        case o("useWAWebNewsletterReports").FetchReportStatus.FETCHING:
          g = c.jsx(o("WAWebEmptyState.react").Loading, {});
          break;
        case o("useWAWebNewsletterReports").FetchReportStatus.SUCCESS:
          g =
            f.length === 0
              ? c.jsx(m, {})
              : c.jsx(p, { reports: f, onReportClick: l });
          break;
        case o("useWAWebNewsletterReports").FetchReportStatus.ERROR:
          g = c.jsx(o("WAWebEmptyState.react").EmptyErrorStateWithButton, {
            center: !0,
            text: s._(/*BTDS*/ "Something went wrong. Try again."),
            testid: void 0,
            onClick: _,
          });
          break;
        case o("useWAWebNewsletterReports").FetchReportStatus.OFFLINE:
          g = c.jsx(o("WAWebEmptyState.react").EmptyErrorStateWithButton, {
            center: !0,
            text: o(
              "WAWebCommonNewsletterStrings",
            ).getNoInternetConnectionText(),
            testid: void 0,
            onClick: _,
          });
          break;
      }
      return c.jsxs(r("WAWebDrawer.react"), {
        theme: "gallery",
        ref: n,
        testid: void 0,
        tsNavigationData: {
          surface: "unknown",
          viewName: "newsletter-dsa-reports",
        },
        children: [
          c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            title: o(
              "WAWebCommonNewsletterIntegrityStrings",
            ).getNewsletterDSAReportsDrawerTitle(),
            onBack: i,
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
          }),
          c.jsx(r("WAWebDrawerBody.react"), { children: g }),
        ],
      });
    }
    ((_.displayName = _.name + " [from " + i.id + "]"), (l.default = _));
  },
  226,
);
