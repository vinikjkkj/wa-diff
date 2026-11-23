__d(
  "WAWebBizBusinessComplianceConfirmationModal",
  [
    "fbt",
    "WAWebFbtCommon",
    "WAWebModalManager",
    "WAWebTimeSpentLoggingNavigation",
    "WDSConfirmDialog.react",
    "WDSDialogBridge",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      (o("WAWebModalManager").ModalManager.close(),
        o("WDSDialogBridge").openWDSDialog(u.jsx(d, { onAddProduct: e })));
    }
    function d(e) {
      var t = e.onAddProduct;
      o("WAWebTimeSpentLoggingNavigation").useTsNavigation({
        surface: "unknown",
        viewName: "biz-compliance-confirmation",
      });
      var n = s._(/*BTDS*/ ""),
        a = s._(/*BTDS*/ "");
      return u.jsx(r("WDSConfirmDialog.react"), {
        open: !0,
        title: s._(/*BTDS*/ ""),
        description: s._(/*BTDS*/ "", [
          s._param("accuracy-statement", n),
          s._param(
            "paragraph-break",
            u.jsxs(u.Fragment, {
              children: [u.jsx("br", {}), u.jsx("br", {})],
            }),
          ),
          s._param("update-statement", a),
        ]),
        confirmLabel: r("WAWebFbtCommon")("Continue"),
        cancelLabel: s._(/*BTDS*/ ""),
        onConfirm: function () {
          (o("WDSDialogBridge").closeWDSDialog(), t == null || t());
        },
        onDismiss: o("WDSDialogBridge").closeWDSDialog,
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
