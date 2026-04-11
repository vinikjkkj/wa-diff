__d(
  "bx",
  ["FBLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {};
    function s(t) {
      var n = e[t];
      if (!n)
        throw r("FBLogger")("staticresources").mustfixThrow(
          "bx" + ('(...): Unknown file path "' + t + '"'),
        );
      return n;
    }
    ((s.add = function (t, n) {
      var r = !1;
      for (var o in t)
        (n && n.entry++,
          o in e ? n && n.dup_entry++ : ((t[o].loggingID = o), (e[o] = t[o])));
    }),
      (s.getURL = function (e) {
        return e.uri;
      }),
      (l.default = s));
  },
  98,
);
