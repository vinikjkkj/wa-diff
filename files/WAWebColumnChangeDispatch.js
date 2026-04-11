__d(
  "WAWebColumnChangeDispatch",
  ["WAWebFrontendConstants"],
  function (t, n, r, o, a, i, l) {
    var e = window.matchMedia(
        "\nonly screen and (max-width: " +
          o("WAWebFrontendConstants").LAYOUT_2COLUMNS_MAX_WIDTH +
          "px)\n",
      ),
      s = { column: e.matches ? 2 : 3 },
      u = function (t) {
        var e = t.matches ? 2 : 3;
        if (s.column !== e) {
          s.column = e;
          var n = document.createEvent("Event");
          (n.initEvent("columnChange", !0, !0), window.dispatchEvent(n));
        }
      };
    (e.addListener(u), (l.Column = s));
  },
  98,
);
