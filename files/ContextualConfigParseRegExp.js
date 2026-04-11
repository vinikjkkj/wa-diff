__d(
  "ContextualConfigParseRegExp",
  ["ContextualConfigConstants"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = /^\/(.+)\/(.*)$/;
    function s(t) {
      try {
        var n = t.match(e);
        return n != null ? new RegExp(n[1], n[2]) : new RegExp(t);
      } catch (e) {
        throw new Error(
          o("ContextualConfigConstants").ERROR.REGEX_SYNTAX_ERROR,
        );
      }
    }
    l.default = s;
  },
  98,
);
