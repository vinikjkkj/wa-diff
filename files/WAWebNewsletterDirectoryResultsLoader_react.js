__d(
  "WAWebNewsletterDirectoryResultsLoader.react",
  [
    "fbt",
    "WAWebCommonNewsletterStrings",
    "WAWebEmptyState.react",
    "WAWebFlex.react",
    "WAWebNetworkStatus",
    "WAWebSpinner.react",
    "react",
    "react-compiler-runtime",
    "useWAWebEventTargetValue",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = {
        marginVert20: {
          marginTop: "x1nmyh1g",
          marginBottom: "xdqhqc9",
          $$css: !0,
        },
        marginVert12: {
          marginTop: "x1de0gy",
          marginBottom: "xcytdqz",
          $$css: !0,
        },
      };
    function d(e) {
      var t = o("react-compiler-runtime").c(3),
        n = e.errorText,
        r = e.onRetry,
        a;
      return (
        t[0] !== n || t[1] !== r
          ? ((a = u.jsx(o("WAWebEmptyState.react").EmptyErrorStateWithButton, {
              center: !1,
              text: n,
              testid: void 0,
              xstyle: c.marginVert20,
              onClick: r,
            })),
            (t[0] = n),
            (t[1] = r),
            (t[2] = a))
          : (a = t[2]),
        a
      );
    }
    function m() {
      var e = o("react-compiler-runtime").c(1),
        t;
      return (
        e[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = u.jsx(o("WAWebFlex.react").FlexItem, {
              justify: "center",
              xstyle: c.marginVert12,
              children: u.jsx(o("WAWebSpinner.react").Spinner, {
                size: 32,
                stroke: 6,
                color: "highlight",
              }),
            })),
            (e[0] = t))
          : (t = e[0]),
        t
      );
    }
    function p(e) {
      var t = o("react-compiler-runtime").c(11),
        n = e.children,
        a = e.isLoadingMore,
        i = e.loadingShimmer,
        l = e.onOfflineRetry,
        c = e.onServerErrorRetry,
        p = e.serverError,
        f = r("useWAWebEventTargetValue")(
          r("WAWebNetworkStatus"),
          "change:online",
          _,
        );
      if (i != null) return i;
      if (f) {
        var g;
        t[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((g = o(
              "WAWebCommonNewsletterStrings",
            ).getNoInternetConnectionText()),
            (t[0] = g))
          : (g = t[0]);
        var h;
        return (
          t[1] !== l
            ? ((h = u.jsx(d, { errorText: g, onRetry: l })),
              (t[1] = l),
              (t[2] = h))
            : (h = t[2]),
          h
        );
      }
      if (p) {
        var y;
        t[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((y = s._(
              /*BTDS*/ "WhatsApp can't search for channels right now. Please try again later",
            )),
            (t[3] = y))
          : (y = t[3]);
        var C;
        return (
          t[4] !== c
            ? ((C = u.jsx(d, { errorText: y, onRetry: c })),
              (t[4] = c),
              (t[5] = C))
            : (C = t[5]),
          C
        );
      }
      var b;
      t[6] !== a
        ? ((b = a && u.jsx(m, {})), (t[6] = a), (t[7] = b))
        : (b = t[7]);
      var v;
      return (
        t[8] !== n || t[9] !== b
          ? ((v = u.jsxs(u.Fragment, { children: [n, b] })),
            (t[8] = n),
            (t[9] = b),
            (t[10] = v))
          : (v = t[10]),
        v
      );
    }
    function _() {
      return !r("WAWebNetworkStatus").online;
    }
    l.default = p;
  },
  226,
);
