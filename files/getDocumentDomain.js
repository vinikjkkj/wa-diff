__d(
  "getDocumentDomain",
  ["ConstUriUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      var e = o("ConstUriUtils").getUri(document.location.href);
      return e ? e.getDomain() : "<unknown-domain>";
    }
    l.default = e;
  },
  98,
);
