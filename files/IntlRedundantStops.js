__d(
  "IntlRedundantStops",
  [],
  function (t, n, r, o, a, i) {
    var e = Object.freeze({
      equivalencies: {
        ".": ["\u0964", "\u104B", "\u3002"],
        "\u2026": ["\u0E2F", "\u0EAF", "\u1801"],
        "!": ["\uFF01"],
        "?": ["\uFF1F"],
      },
      redundancies: {
        "?": ["?", ".", "!", "\u2026"],
        "!": ["!", "?", "."],
        ".": [".", "!"],
        "\u2026": ["\u2026", ".", "!"],
      },
    });
    i.default = e;
  },
  66,
);
