__d(
  "WAWebSavePopup.react",
  [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebDrawerHeader.react",
    "WAWebEditFormTypes",
    "WAWebModal.react",
    "WAWebModalManager",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useState;
    function d(e) {
      var t = e.afterSave,
        n = e.children,
        r = e.doSave,
        a = e.isValid,
        i = e.modalConfig,
        l = e.onCancel,
        d = e.onError,
        m = e.title,
        p = e.tsNavigationData,
        _ = c(o("WAWebEditFormTypes").EditType.EDITING),
        f = _[0],
        g = _[1],
        h = u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
          title: m,
          type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.POPUP,
          onCancel: function () {
            (o("WAWebModalManager").ModalManager.close(), l == null || l());
          },
        });
      return u.jsx(
        o("WAWebConfirmPopup.react").ConfirmPopup,
        babelHelpers.extends(
          {
            children: n,
            okText: s._(/*BTDS*/ "Save"),
            cancelText: s._(/*BTDS*/ "Cancel"),
            type: o("WAWebModal.react").ModalTheme.Auto,
            onOK: function () {
              (g(o("WAWebEditFormTypes").EditType.PENDING),
                r().then(
                  function () {
                    (g(o("WAWebEditFormTypes").EditType.DONE),
                      t && t(),
                      o("WAWebModalManager").ModalManager.close());
                  },
                  function (e) {
                    (g(o("WAWebEditFormTypes").EditType.ERROR), d && d(e));
                  },
                ));
            },
            onCancel: function () {
              (o("WAWebModalManager").ModalManager.close(), l == null || l());
            },
            okSpinner: f === o("WAWebEditFormTypes").EditType.PENDING,
            okDisabled: f === o("WAWebEditFormTypes").EditType.PENDING || !a,
            title: h,
            tsNavigationData: p,
          },
          i,
        ),
      );
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
