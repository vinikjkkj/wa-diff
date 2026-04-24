__d(
  "WAWebResponsesListDrawerLoadable",
  [
    "fbt",
    "JSResourceForInteraction",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerManager",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadingDrawer.react",
    "WAWebNewsletterGatingUtils",
    "WAWebResponsesListShimmer.react",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
    "react-loadable",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = r("WAWebLazyLoadedRetriable")(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield r("JSResourceForInteraction")(
            "WAWebResponsesListDrawer.react",
          )
            .__setRef("WAWebResponsesListDrawerLoadable")
            .load();
          return e.ResponsesListDrawer;
        }),
        "ResponsesListDrawer",
      ),
      d = function () {
        return s._(/*BTDS*/ "Responses list");
      };
    function m() {
      var e = o("react-compiler-runtime").c(2),
        t;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            title: d(),
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
            onCancel: o("WAWebDrawerManager").closeDrawerRight,
          })),
          (e[0] = t))
        : (t = e[0]);
      var n;
      return (
        e[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = u.jsxs(r("WAWebDrawer.react"), {
              disableNavigationLogging: !0,
              children: [
                t,
                u.jsx(r("WAWebDrawerBody.react"), {
                  children: u.jsx(r("WAWebResponsesListShimmer.react"), {
                    description: "WAWebResponsesListDrawerLoading",
                  }),
                }),
              ],
            })),
            (e[1] = n))
          : (n = e[1]),
        n
      );
    }
    var p = r("react-loadable")({
      loader: c,
      loading: function (t) {
        return t.error != null
          ? u.jsx(r("WAWebLoadingDrawer.react"), { title: d(), error: !0 })
          : o(
                "WAWebNewsletterGatingUtils",
              ).isNewsletterQuestionResponsesShimmerEnabled()
            ? u.jsx(m, {})
            : u.jsx(r("WAWebLoadingDrawer.react"), { title: d(), error: !1 });
      },
    });
    l.ResponsesListDrawerLoadable = p;
  },
  226,
);
