__d(
  "getDocumentDomain",
  ["ConstUriUtils", "ExecutionEnvironment"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s() {
      if ((e || (e = r("ExecutionEnvironment"))).canUseDOM) {
        var t = o("ConstUriUtils").getUri(document.location.href);
        if (t) return t.getDomain();
      }
      return "<unknown-domain>";
    }
    l.default = s;
  },
  98,
);
