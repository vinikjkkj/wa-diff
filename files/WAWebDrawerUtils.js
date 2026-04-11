__d(
  "WAWebDrawerUtils",
  ["WAWebDrawerHeader.react", "WAWebDrawerViewType"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      if (e == null)
        return o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL;
      switch (e) {
        case r("WAWebDrawerViewType").FLYOUT:
          return o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.FLYOUT;
        case r("WAWebDrawerViewType").MODAL:
          return o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.MODAL;
        default:
          return o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL;
      }
    }
    l.getDrawerHeaderType = e;
  },
  98,
);
