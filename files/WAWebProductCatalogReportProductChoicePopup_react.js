__d(
  "WAWebProductCatalogReportProductChoicePopup.react",
  [
    "fbt",
    "WAWebButton.react",
    "WAWebKeyboardHotKeys.react",
    "WAWebModal.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["ref"],
      u,
      c = u || (u = o("react"));
    function d(t) {
      var n = t.ref,
        r = babelHelpers.objectWithoutPropertiesLoose(t, e),
        a = r.onPopupCancel,
        i = r.onReport,
        l = s._(/*BTDS*/ "Report this product?"),
        u = c.jsx(
          "div",
          {
            children: s._(
              /*BTDS*/ "We will review the product and if it does not meet our guidelines, it will be removed.",
            ),
          },
          "ReportProductChoicePopup-desc",
        ),
        d = c.jsx(
          o("WAWebButton.react").Button,
          {
            testid: void 0,
            type: "secondary",
            onClick: i,
            children: s._(/*BTDS*/ "Report product"),
          },
          "ReportProductChoicePopup-reportBtn",
        ),
        m = c.jsx(
          o("WAWebButton.react").Button,
          { type: "secondary", onClick: a, children: s._(/*BTDS*/ "Cancel") },
          0,
        ),
        p = { escape: a },
        _ = c.jsxs("div", {
          className: "x78zum5 xdt5ytf",
          children: [
            c.jsx("div", { className: "xav9cv8", children: d }),
            c.jsx("div", { className: "xav9cv8", children: m }),
          ],
        });
      return c.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
        ref: n,
        handlers: p,
        children: c.jsx(o("WAWebModal.react").Modal, {
          title: l,
          actions: _,
          children: u,
        }),
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
