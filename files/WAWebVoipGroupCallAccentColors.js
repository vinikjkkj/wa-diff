__d(
  "WAWebVoipGroupCallAccentColors",
  ["WAWebUserPrefsVoip"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [
      "",
      "#06CF9C",
      "#53BDEB",
      "#E26AB6",
      "#A5B337",
      "#FC9775",
      "#53A6FD",
      "#FFB938",
      "#25D366",
      "#A791FF",
      "#FB5061",
      "#7F66FF",
      "#42C7B8",
      "#FF72A1",
      "#D88DEB",
      "#FA6533",
      "#02A698",
      "#FFD279",
    ];
    function s() {
      var t = o("WAWebUserPrefsVoip").getLandingPageColorIndex();
      return t != null && t >= 1 && t < e.length ? e[t] : null;
    }
    ((l.GROUP_CALL_DARK_COLORS = e), (l.getLandingPageAccentColor = s));
  },
  98,
);
