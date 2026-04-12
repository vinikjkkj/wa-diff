__d(
  "WAWebBizShopsManagePopup.react",
  [
    "fbt",
    "WAWebBizGatingUtils",
    "WAWebBusinessProfileCollection",
    "WAWebBusinessProfileUtils",
    "WAWebButton.react",
    "WAWebCancelablePopup.react",
    "WAWebModal.react",
    "WAWebModalManager",
    "WAWebUserPrefsMeUser",
    "react",
    "vulture",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c() {
      var e = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE();
      return o("WAWebBusinessProfileCollection").BusinessProfileCollection.get(
        e,
      );
    }
    function d(e) {
      var t = e.onCancelClick,
        n = e.onCommerceManagerClick,
        a = e.onViewShopClick;
      r("vulture")("OFaDWXCjoho5MT3nd4myfm3HMW4=");
      function i() {
        var e = c();
        (o("WAWebBusinessProfileUtils").goToShop(e), a && a());
      }
      function l() {
        var e = c();
        (o("WAWebBusinessProfileUtils").goToCommerceManager(e), n && n());
      }
      function d() {
        (o("WAWebModalManager").ModalManager.close(), t && t());
      }
      if (o("WAWebBizGatingUtils").bannedShopsEnabled()) {
        var m = c();
        if (o("WAWebBusinessProfileUtils").isShopBanned(m))
          return u.jsx(r("WAWebCancelablePopup.react"), {
            tsNavigationData: {
              surface: "unknown",
              viewName: "biz-shops-manage",
            },
            type: o("WAWebModal.react").ModalTheme.ColumnButtons,
            title: s._(/*BTDS*/ "Shop disabled"),
            onCancel: d,
            actions: u.jsx(o("WAWebButton.react").Button, {
              type: "primary",
              onClick: l,
              children: s._(/*BTDS*/ "Commerce Manager"),
            }),
            children: s._(
              /*BTDS*/ "This shop has been disabled for not complying with our policies. Learn more in Commerce Manager.",
            ),
          });
      }
      return u.jsx(r("WAWebCancelablePopup.react"), {
        tsNavigationData: { surface: "unknown", viewName: "biz-shops-manage" },
        type: o("WAWebModal.react").ModalTheme.ColumnButtons,
        title: s._(/*BTDS*/ "Manage shop on Commerce Manager"),
        onCancel: d,
        actions: u.jsxs(u.Fragment, {
          children: [
            u.jsx(o("WAWebButton.react").Button, {
              type: "primary",
              onClick: i,
              children: s._(/*BTDS*/ "View shop"),
            }),
            u.jsx(o("WAWebButton.react").Button, {
              type: "primary",
              onClick: l,
              children: s._(/*BTDS*/ "Commerce Manager"),
            }),
          ],
        }),
        children: s._(/*BTDS*/ "Go to Commerce Manager to update your shop."),
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
