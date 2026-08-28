__d(
  "AdsMgmtDimensionSelectors",
  [
    "AdsFluxHooks",
    "AdsMgmtTableHeightProvider",
    "AdsMgmtTopNavHeightProvider",
    "AdsPEFiltersHeightProvider",
    "AdsPEViewportDimensionsProvider",
    "ExecutionEnvironment",
    "adsCreateSelector",
    "adsMgmtHasTopNavSelector",
    "adsMgmtPrimaryViewWidthSelector",
    "adsPEManageAdsSectionSelector",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = (s || (s = o("react"))).useMemo,
      c = 34,
      d = r("adsCreateSelector")(
        [r("adsPEManageAdsSectionSelector")],
        function (t) {
          return ![].includes(t);
        },
        { name: i.id + ".hasFiltersSelector" },
      ),
      m = r("adsCreateSelector")(
        [d, r("AdsPEFiltersHeightProvider").toFluxSelector()],
        function (t, n) {
          return t ? n : 0;
        },
        { name: i.id + ".filtersHeightSelector" },
      ),
      p = r("adsCreateSelector")(
        [r("AdsPEViewportDimensionsProvider").toFluxSelector()],
        function (t) {
          return _(t);
        },
        { name: i.id + ".viewportHeightSelector" },
      ),
      _ = function (n) {
        var t =
            (e || (e = r("ExecutionEnvironment"))).canUseDOM &&
            !!document.getElementById("pagelet_dock"),
          o = n.height;
        return (t && (o -= c), o);
      };
    function f() {
      var e = o("react-compiler-runtime").c(3),
        t;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = r("AdsPEViewportDimensionsProvider").toFluxSelector()),
          (e[0] = t))
        : (t = e[0]);
      var n = o("AdsFluxHooks").useAdsSelector(t),
        a;
      return (
        e[1] !== n ? ((a = _(n)), (e[1] = n), (e[2] = a)) : (a = e[2]),
        a
      );
    }
    function g() {
      var e = o("react-compiler-runtime").c(2),
        t = h(),
        n;
      return (
        e[0] !== t ? ((n = { height: t }), (e[0] = t), (e[1] = n)) : (n = e[1]),
        n
      );
    }
    function h() {
      var e = o("react-compiler-runtime").c(1),
        t;
      return (
        e[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = C()), (e[0] = t))
          : (t = e[0]),
        t
      );
    }
    var y = r("adsCreateSelector")([], C, {
      name: i.id + ".viewportHeightStyleSelector",
    });
    function C() {
      var t =
        (e || (e = r("ExecutionEnvironment"))).canUseDOM &&
        !!document.getElementById("pagelet_dock");
      return t ? "calc(100vh - " + c + "px)" : "100vh";
    }
    var b = r("adsCreateSelector")(
        [
          r("adsMgmtHasTopNavSelector"),
          r("AdsMgmtTopNavHeightProvider").toFluxSelector(),
        ],
        function (t, n) {
          return t ? n : 0;
        },
        { name: i.id + ".topBarHeightSelector" },
      ),
      v = r("adsCreateSelector")(
        [p, b],
        function (t, n) {
          return t - n;
        },
        { name: i.id + ".navPaneHeightSelector" },
      ),
      S = r("AdsMgmtTableHeightProvider").toFluxSelector(),
      R = r("adsCreateSelector")(
        [y, b],
        function (t, n) {
          return "calc(" + t + " - " + n + "px)";
        },
        { name: i.id + ".navPaneHeightStyleSelector" },
      );
    ((l.hasFiltersSelector = d),
      (l.filtersHeightSelector = m),
      (l.viewportHeightSelector = p),
      (l.useGetViewportHeightSelector = f),
      (l.useViewportFullHeightStyle = g),
      (l.viewportHeightStyleSelector = y),
      (l.topBarHeightSelector = b),
      (l.navPaneHeightSelector = v),
      (l.tableHeightSelector = S),
      (l.tableWidthSelector = r("adsMgmtPrimaryViewWidthSelector")),
      (l.navPaneHeightStyleSelector = R));
  },
  98,
);
