__d(
  "URIRFC3986",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = new RegExp(
      "^([^:/?#]+:)?(//([^\\\\/?#@]*@)?(\\[[A-Fa-f0-9:.]+\\]|[^\\/?#:]*)(:[0-9]*)?)?([^?#]*)(\\?[^#]*)?(#.*)?",
    );
    function l(t) {
      if (t.trim() === "") return null;
      var n = t.match(e);
      if (n == null) return null;
      var r = n[2] ? n[2].substr(2) : null,
        o = n[1] ? n[1].substr(0, n[1].length - 1) : null,
        a = {
          uri: n[0] ? n[0] : null,
          scheme: o,
          authority: r,
          userinfo: n[3] ? n[3].substr(0, n[3].length - 1) : null,
          host: n[2] ? n[4] : null,
          port: n[5] && n[5].substr(1) ? parseInt(n[5].substr(1), 10) : null,
          path: n[6] ? n[6] : null,
          query: n[7] ? n[7].substr(1) : null,
          fragment: n[8] ? n[8].substr(1) : null,
          isGenericURI: r === null && !!o,
        };
      return a;
    }
    i.parse = l;
  },
  66,
);
