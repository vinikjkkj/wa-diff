__d(
  "WAWebWrapperGetTailIcon",
  ["WAWebL10N", "WAWebWrapperTailIcon.react"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = r("WAWebL10N").isRTL();
      return e
        ? t
          ? o("WAWebWrapperTailIcon.react").MessageTailInIcon
          : o("WAWebWrapperTailIcon.react").MessageTailOutIcon
        : t
          ? o("WAWebWrapperTailIcon.react").MessageTailOutIcon
          : o("WAWebWrapperTailIcon.react").MessageTailInIcon;
    }
    l.getTailIcon = e;
  },
  98,
);
