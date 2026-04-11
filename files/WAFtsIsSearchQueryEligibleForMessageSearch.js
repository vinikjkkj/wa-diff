__d(
  "WAFtsIsSearchQueryEligibleForMessageSearch",
  ["WAFtsConstants", "WAFtsWWWCompatibleCompiledRegex", "WAUnicodeUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.trim().normalize("NFKD");
      return !!(
        o("WAUnicodeUtils").numCodepoints(t) >=
          o("WAFtsConstants").FTS_MIN_CHARS ||
        o("WAFtsWWWCompatibleCompiledRegex").CONTAINS_EMOJI_REGEX.test(t) ||
        o(
          "WAFtsWWWCompatibleCompiledRegex",
        ).CONTAINS_HAN_OR_KANA_SCRIPT_REGEX.test(t)
      );
    }
    l.default = e;
  },
  98,
);
