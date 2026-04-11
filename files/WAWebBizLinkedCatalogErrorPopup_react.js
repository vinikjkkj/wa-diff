__d(
  "WAWebBizLinkedCatalogErrorPopup.react",
  [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebFbtAppName",
    "WAWebModalManager",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e, t, n) {
      var r, a;
      (t
        ? ((a = s._(
            /*BTDS*/ "Connected catalogs aren't supported on {=m1} yet. You can view this catalog with a WhatsApp mobile app.",
            [
              s._implicitParam(
                "=m1",
                u.jsx(o("WAWebFbtAppName").WAWebAppShortName, {
                  children: s._(/*BTDS*/ ""),
                }),
              ),
            ],
          )),
          e
            ? (r = s._(/*BTDS*/ "Item can't be displayed"))
            : (r = s._(/*BTDS*/ "Catalog can't be displayed")))
        : e
          ? ((r = s._(/*BTDS*/ "Item can't be displayed on web")),
            (a = s._(
              /*BTDS*/ "To view items in this business's catalog, use WhatsApp on your mobile device.",
            )))
          : ((r = s._(/*BTDS*/ "Catalog can't be viewed on web")),
            (a = s._(
              /*BTDS*/ "To view this business's catalog, use WhatsApp on your mobile device.",
            ))),
        n && o("WAWebModalManager").ModalManager.once("close_modal", n),
        o("WAWebModalManager").ModalManager.open(
          u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
            tsNavigationData: {
              surface: "unknown",
              viewName: "linked-catalog-error",
            },
            title: r,
            onOK: o("WAWebModalManager").closeModalManager,
            children: a,
          }),
        ));
    }
    l.showConnectedCatalogDisabledPopup = c;
  },
  226,
);
