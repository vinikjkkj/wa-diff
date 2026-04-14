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
      var t = e.errorText,
        n = e.onRetry;
      return u.jsx(o("WAWebEmptyState.react").EmptyErrorStateWithButton, {
        center: !1,
        text: t,
        testid: void 0,
        xstyle: c.marginVert20,
        onClick: n,
      });
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m() {
      return u.jsx(o("WAWebFlex.react").FlexItem, {
        justify: "center",
        xstyle: c.marginVert12,
        children: u.jsx(o("WAWebSpinner.react").Spinner, {
          size: 32,
          stroke: 6,
          color: "highlight",
        }),
      });
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p(e) {
      var t = e.children,
        n = e.isLoadingMore,
        a = e.loadingShimmer,
        i = e.onOfflineRetry,
        l = e.onServerErrorRetry,
        c = e.serverError,
        p = r("useWAWebEventTargetValue")(
          r("WAWebNetworkStatus"),
          "change:online",
          function () {
            return !r("WAWebNetworkStatus").online;
          },
        );
      return a != null
        ? a
        : p
          ? u.jsx(d, {
              errorText: o(
                "WAWebCommonNewsletterStrings",
              ).getNoInternetConnectionText(),
              onRetry: i,
            })
          : c
            ? u.jsx(d, {
                errorText: s._(
                  /*BTDS*/ "WhatsApp can't search for channels right now. Please try again later",
                ),
                onRetry: l,
              })
            : u.jsxs(u.Fragment, { children: [t, n && u.jsx(m, {})] });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  226,
);
