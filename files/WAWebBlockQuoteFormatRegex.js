__d(
  "WAWebBlockQuoteFormatRegex",
  [],
  function (t, n, r, o, a, i) {
    var e,
      l,
      s = String.raw(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose(
            ["[^S\n](?! +)"],
            ["[^\\S\\n](?! +)"],
          )),
      ),
      u = new RegExp(
        String.raw(
          l ||
            (l = babelHelpers.taggedTemplateLiteralLoose(
              ["^>(", "[^\n]*$(?:\n|$))"],
              ["^>(", "[^\\n]*$(?:\\n|$))"],
            )),
          s,
        ),
        "gm",
      );
    ((i.QUOTE_SPACE_SOURCE = s), (i.QUOTE_REGEX = u));
  },
  66,
);
