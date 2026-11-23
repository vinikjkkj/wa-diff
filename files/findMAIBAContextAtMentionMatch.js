__d(
  "findMAIBAContextAtMentionMatch",
  ["LexicalTypeaheadMenuPlugin"],
  function (t, n, r, o, a, i, l) {
    var e = "@\\uff20",
      s = "[^" + e + o("LexicalTypeaheadMenuPlugin").PUNCTUATION + "\\s]",
      u =
        "(?:\\.[ |$]| [" +
        o("LexicalTypeaheadMenuPlugin").PUNCTUATION +
        "] ?| |[" +
        o("LexicalTypeaheadMenuPlugin").PUNCTUATION +
        "] ?|)",
      c = 75,
      d = new RegExp("(^|\\s)([" + e + "]((?:" + s + u + "){0," + c + "}))$");
    function m(e) {
      var t = d.exec(e);
      return t == null
        ? null
        : {
            leadOffset: t.index + t[1].length,
            matchingString: t[3],
            replaceableString: t[2],
          };
    }
    l.default = m;
  },
  98,
);
