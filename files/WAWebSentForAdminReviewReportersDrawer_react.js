__d(
  "WAWebSentForAdminReviewReportersDrawer.react",
  [
    "fbt",
    "WAWebContactCollection",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebFlatList.react",
    "WAWebFlatListController",
    "WAWebFrontendContactGetters",
    "WAWebSentForAdminReviewReporterRow.react",
    "react",
    "useLazyRef",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["ref"],
      u,
      c = u || (u = o("react")),
      d = 68;
    function m(t) {
      var n = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = a.msg,
        l = a.onBack,
        u = r("useLazyRef")(function () {
          return new (r("WAWebFlatListController"))();
        });
      if (i.reporterJidList == null) return null;
      var m = i.reporterJidList.map(function (e) {
        var t = o("WAWebContactCollection").ContactCollection.assertGet(e),
          n = o("WAWebFrontendContactGetters").getFormattedName(t);
        return { id: e, itemKey: e.toString(), contactName: n };
      });
      return c.jsxs(r("WAWebDrawer.react"), {
        ref: n,
        testid: void 0,
        tsNavigationData: {
          surface: "unknown",
          viewName: "admin-review-reporters",
        },
        children: [
          c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            testid: void 0,
            title: s._(/*BTDS*/ "Sent for review by"),
            onBack: l,
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
            focusBackOrCancel: !0,
          }),
          c.jsx(r("WAWebDrawerBody.react"), {
            flatListControllers: [u.current],
            children: c.jsx(o("WAWebFlatList.react").FlatList, {
              flatListController: u.current,
              direction: "vertical",
              role: "listitem",
              data: m,
              renderItem: p,
              defaultItemHeight: d,
            }),
          }),
        ],
      });
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p(e) {
      return c.jsx(r("WAWebSentForAdminReviewReporterRow.react"), {
        reporter: e,
      });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);
