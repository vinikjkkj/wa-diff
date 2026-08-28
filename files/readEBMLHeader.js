__d(
  "readEBMLHeader",
  ["$InternalEnum", "readVINT"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e.reduce(function (e, t) {
        return e * 256 + t;
      }, 0);
    }
    function s(e) {
      return String.fromCharCode.apply(String, Array.from(e));
    }
    var u = n("$InternalEnum")({
      EBML: 440786851,
      EBMLVersion: 17030,
      EBMLReadVersion: 17143,
      EBMLMaxSizeLength: 17139,
      EBMLMaxIDLength: 17138,
      DocType: 17026,
      DocTypeVersion: 17031,
      DocTypeReadVersion: 17029,
    });
    function c(t) {
      var n = r("readVINT")(t, 4);
      if (n == null) return null;
      var o = e(t.slice(0, n.nextReadOffset)),
        a = u.cast(o),
        i = r("readVINT")(t.slice(n.nextReadOffset));
      if (i == null) return null;
      var l = e(i.vintData),
        s = n.nextReadOffset + i.nextReadOffset,
        c = s + l;
      if (c > t.length) return null;
      var d = t.slice(s, c);
      return { id: a, data: d, nextReadOffset: c };
    }
    function d(e) {
      var t = c(e);
      if (t == null || t.id !== u.EBML) return null;
      for (var n = t.data, r = new Map(), o = c(n); o != null; )
        (o.id != null && r.set(o.id, o.data),
          (n = n.slice(o.nextReadOffset)),
          (o = c(n)));
      return r;
    }
    function m(t) {
      var n,
        r,
        o,
        a,
        i,
        l,
        c = d(new Uint8Array(t));
      if (c == null) return null;
      var m = function (t, n) {
          var e = c.get(t);
          return e == null ? null : n(e);
        },
        p = m(u.DocType, s);
      return p == null
        ? null
        : {
            ebmlVersion: (n = m(u.EBMLVersion, e)) != null ? n : 1,
            ebmlReadVersion: (r = m(u.EBMLReadVersion, e)) != null ? r : 1,
            ebmlMaxIDLength: (o = m(u.EBMLMaxIDLength, e)) != null ? o : 4,
            ebmlMaxSizeLength: (a = m(u.EBMLMaxSizeLength, e)) != null ? a : 8,
            docType: p,
            docTypeVersion: (i = m(u.DocTypeVersion, e)) != null ? i : 1,
            docTypeReadVersion:
              (l = m(u.DocTypeReadVersion, e)) != null ? l : 1,
          };
    }
    l.default = m;
  },
  98,
);
