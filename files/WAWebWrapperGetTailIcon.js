__d(
  "WAWebWrapperGetTailIcon",
  ["WAWebL10N", "WAWebTailInIcon.react", "WAWebTailOutIcon.react"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = r("WAWebL10N").isRTL();
      return e
        ? t
          ? o("WAWebTailInIcon.react").TailInIcon
          : o("WAWebTailOutIcon.react").TailOutIcon
        : t
          ? o("WAWebTailOutIcon.react").TailOutIcon
          : o("WAWebTailInIcon.react").TailInIcon;
    }
    l.getTailIcon = e;
  },
  98,
);
