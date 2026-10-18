__d(
  "WAWebOrgOrder",
  [],
  function (t, n, r, o, a, i) {
    var e = new TextEncoder();
    function l(e, t) {
      var n = c(e.name, t.name);
      return n !== 0 ? n : u(e.id, t.id);
    }
    function s(e) {
      return e.slice().sort(l);
    }
    function u(e, t) {
      var n = m(e),
        r = m(t);
      return n.length !== r.length ? n.length - r.length : p(n, r);
    }
    function c(t, n) {
      for (
        var r = e.encode(d(t)),
          o = e.encode(d(n)),
          a = Math.min(r.length, o.length),
          i = 0;
        i < a;
        i++
      )
        if (r[i] !== o[i]) return r[i] - o[i];
      return r.length - o.length;
    }
    function d(e) {
      return e.replace(/[A-Z]/g, function (e) {
        return e.toLowerCase();
      });
    }
    function m(e) {
      return e.replace(/^0+(?=\d)/, "");
    }
    function p(e, t) {
      return e === t ? 0 : e < t ? -1 : 1;
    }
    ((i.compareOrgsForDisplay = l),
      (i.sortOrgsForDisplay = s),
      (i.compareUnsignedDecimalStrings = u));
  },
  66,
);
