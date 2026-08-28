__d(
  "cometTextWithEntitiesAvoidSplittingLinks",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = "ExternalUrl";
    function l(t, n, r) {
      for (var o = 0; o < n.length; o++) {
        var a = n[o],
          i = a.offset + a.length;
        if (a.entity.__typename === e && a.offset < t && t < i)
          return i < r ? i : null;
      }
      return t;
    }
    i.default = l;
  },
  66,
);
