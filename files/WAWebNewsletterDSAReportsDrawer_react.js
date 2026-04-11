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
    "react-compiler-runtime",
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
      var e = o("react-compiler-runtime").c(3),
        t;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = [d.container, d.emptyListContainer, d.paddingHoriz32]),
          (e[0] = t))
        : (t = e[0]);
      var n;
      e[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = c.jsx(o("WAWebText.react").WAWebTextLarge, {
            testid: void 0,
            marginBottom: 16,
            children: s._(/*BTDS*/ "No reports"),
          })),
          (e[1] = n))
        : (n = e[1]);
      var a;
      return (
        e[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = c.jsxs(r("WAWebDrawerSection.react"), {
              animation: !1,
              xstyle: t,
              children: [
                n,
                c.jsx(o("WAWebText.react").WAWebTextSmall, {
                  testid: void 0,
                  xstyle: d.textCenter,
                  children: s._(
                    /*BTDS*/ "If you report a channel, you can see your report and the outcome here.",
                  ),
                }),
              ],
            })),
            (e[2] = a))
          : (a = e[2]),
        a
      );
    }
    function p(e) {
      var t = o("react-compiler-runtime").c(8),
        n = e.onReportClick,
        a = e.reports,
        i;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = [d.container, d.reportListContainer]), (t[0] = i))
        : (i = t[0]);
      var l;
      if (t[1] !== n || t[2] !== a) {
        var s;
        (t[4] !== n
          ? ((s = function (t) {
              return c.jsx(
                r("WAWebNewsletterDSAReportsRow.react"),
                { report: t, onReportClick: n },
                t.id.toString(),
              );
            }),
            (t[4] = n),
            (t[5] = s))
          : (s = t[5]),
          (l = a.map(s)),
          (t[1] = n),
          (t[2] = a),
          (t[3] = l));
      } else l = t[3];
      var u;
      return (
        t[6] !== l
          ? ((u = c.jsx(r("WAWebDrawerSection.react"), {
              animation: !1,
              testid: void 0,
              xstyle: i,
              children: c.jsx(o("WAWebFlex.react").FlexColumn, { children: l }),
            })),
            (t[6] = l),
            (t[7] = u))
          : (u = t[7]),
        u
      );
    }
    function _(t) {
      var n = o("react-compiler-runtime").c(23),
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
        u = l.onClose,
        d = l.onReportClick,
        _ = o("useWAWebNewsletterReports").useNewsletterReports(),
        f = _[0],
        g = _[1],
        h = _[2],
        y;
      e: switch (f) {
        case o("useWAWebNewsletterReports").FetchReportStatus.FETCHING: {
          var C;
          (n[3] === Symbol.for("react.memo_cache_sentinel")
            ? ((C = c.jsx(o("WAWebEmptyState.react").Loading, {})), (n[3] = C))
            : (C = n[3]),
            (y = C));
          break e;
        }
        case o("useWAWebNewsletterReports").FetchReportStatus.SUCCESS: {
          var b;
          (n[4] !== d || n[5] !== h
            ? ((b =
                h.length === 0
                  ? c.jsx(m, {})
                  : c.jsx(p, { reports: h, onReportClick: d })),
              (n[4] = d),
              (n[5] = h),
              (n[6] = b))
            : (b = n[6]),
            (y = b));
          break e;
        }
        case o("useWAWebNewsletterReports").FetchReportStatus.ERROR: {
          var v;
          n[7] === Symbol.for("react.memo_cache_sentinel")
            ? ((v = s._(/*BTDS*/ "Something went wrong. Try again.")),
              (n[7] = v))
            : (v = n[7]);
          var S;
          (n[8] !== g
            ? ((S = c.jsx(
                o("WAWebEmptyState.react").EmptyErrorStateWithButton,
                { center: !0, text: v, testid: void 0, onClick: g },
              )),
              (n[8] = g),
              (n[9] = S))
            : (S = n[9]),
            (y = S));
          break e;
        }
        case o("useWAWebNewsletterReports").FetchReportStatus.OFFLINE: {
          var R;
          n[10] === Symbol.for("react.memo_cache_sentinel")
            ? ((R = o(
                "WAWebCommonNewsletterStrings",
              ).getNoInternetConnectionText()),
              (n[10] = R))
            : (R = n[10]);
          var L;
          (n[11] !== g
            ? ((L = c.jsx(
                o("WAWebEmptyState.react").EmptyErrorStateWithButton,
                { center: !0, text: R, testid: void 0, onClick: g },
              )),
              (n[11] = g),
              (n[12] = L))
            : (L = n[12]),
            (y = L));
        }
      }
      var E;
      n[13] === Symbol.for("react.memo_cache_sentinel")
        ? ((E = { surface: "unknown", viewName: "newsletter-dsa-reports" }),
          (n[13] = E))
        : (E = n[13]);
      var k;
      n[14] === Symbol.for("react.memo_cache_sentinel")
        ? ((k = o(
            "WAWebCommonNewsletterIntegrityStrings",
          ).getNewsletterDSAReportsDrawerTitle()),
          (n[14] = k))
        : (k = n[14]);
      var I;
      n[15] !== u
        ? ((I = c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            title: k,
            onBack: u,
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
          })),
          (n[15] = u),
          (n[16] = I))
        : (I = n[16]);
      var T;
      n[17] !== y
        ? ((T = c.jsx(r("WAWebDrawerBody.react"), { children: y })),
          (n[17] = y),
          (n[18] = T))
        : (T = n[18]);
      var D;
      return (
        n[19] !== i || n[20] !== I || n[21] !== T
          ? ((D = c.jsxs(r("WAWebDrawer.react"), {
              theme: "gallery",
              ref: i,
              testid: void 0,
              tsNavigationData: E,
              children: [I, T],
            })),
            (n[19] = i),
            (n[20] = I),
            (n[21] = T),
            (n[22] = D))
          : (D = n[22]),
        D
      );
    }
    l.default = _;
  },
  226,
);
