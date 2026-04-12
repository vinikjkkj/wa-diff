__d(
  "WAWebLoadingModal.react",
  [
    "WAWebDrawerHeader.react",
    "WAWebLoadingDrawer.react",
    "WAWebModal.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["theme", "headerType"],
      s,
      u = s || (s = o("react"));
    function c(t) {
      var n = t.theme,
        a = t.headerType,
        i =
          a === void 0
            ? o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.POPUP
            : a,
        l = babelHelpers.objectWithoutPropertiesLoose(t, e);
      return u.jsx(o("WAWebModal.react").Modal, {
        type: n != null ? n : o("WAWebModal.react").ModalTheme.Tower,
        children: u.jsx(
          r("WAWebLoadingDrawer.react"),
          babelHelpers.extends({ headerType: i }, l),
        ),
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
