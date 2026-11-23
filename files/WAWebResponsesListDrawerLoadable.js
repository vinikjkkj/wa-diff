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
    "react",
    "react-loadable",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = r("WAWebLazyLoadedRetriable")(async function () {
        var e = await r("JSResourceForInteraction")(
          "WAWebResponsesListDrawer.react",
        )
          .__setRef("WAWebResponsesListDrawerLoadable")
          .load();
        return e.ResponsesListDrawer;
      }, "ResponsesListDrawer");
    function d() {
      return s._(/*BTDS*/ "");
    }
    function m() {
      return u.jsxs(r("WAWebDrawer.react"), {
        disableNavigationLogging: !0,
        children: [
          u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            title: d(),
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
            onCancel: o("WAWebDrawerManager").closeDrawerRight,
          }),
          u.jsx(r("WAWebDrawerBody.react"), {
            children: u.jsx(r("WAWebResponsesListShimmer.react"), {
              description: "WAWebResponsesListDrawerLoading",
            }),
          }),
        ],
      });
    }
    m.displayName = m.name + " [from " + i.id + "]";
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
