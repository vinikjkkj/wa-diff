__d(
  "WAWebL10nFormatNumber",
  ["WAWebL10N"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return Intl.NumberFormat(r("WAWebL10N").getFullLocale(), t).format(e);
    }
    l.formatWAWebL10nNumber = e;
  },
  98,
);
