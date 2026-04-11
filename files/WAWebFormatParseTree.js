__d(
  "WAWebFormatParseTree",
  ["WAWebFormatParse"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      for (
        var r = { children: [] }, a = 0, i = r, l = 0, u = 0;
        u < t.length;
        ++u
      ) {
        for (
          var c = t[u], d = c[0], m = c[1];
          i.parent && d > (l = i.match[2]);
        ) {
          if (
            (a <= l &&
              i.children.push({ type: "text", value: e.substring(a, l + 1) }),
            (a = i.match[3] + 1),
            i.mutator.fragment)
          ) {
            var p = i.parent.children;
            (p.pop(), p.push.apply(p, i.children));
          }
          (l !== i.match[3] &&
            i.parent.children.push({
              type: "delimiter",
              value: e.substring(l + 1, a),
            }),
            (i = i.parent));
        }
        a < d && i.children.push({ type: "text", value: e.substring(a, d) });
        var _ = n[c[4]],
          f = _[0],
          g = _[1],
          h = f.mutates;
        ((a = m),
          d !== m &&
            i.children.push({ type: "delimiter", value: e.substring(d, m) }));
        var y = { children: [], match: c, mutator: f, opts: g, parent: i };
        if (h) {
          var C = e.substring(c[1], c[2] + 1),
            b = f.mutate(C, c[5]),
            v = s(f, n, y),
            S = o("WAWebFormatParse")._parse(b, v);
          ((y.children = S.children), (a = c[2] + 1));
        }
        (i.children.push(y), (i = y));
      }
      do
        if (i.match) {
          var R = i.match,
            L = R[2],
            E = R[3];
          if (
            (a <= L &&
              i.children.push({ type: "text", value: e.substring(a, L + 1) }),
            (a = E + 1),
            i.mutator.fragment)
          ) {
            var k = i.parent.children;
            (k.pop(), k.push.apply(k, i.children));
          }
          L !== E &&
            i.parent.children.push({
              type: "delimiter",
              value: e.substring(L + 1, a),
            });
        }
      while (i.parent && (i = i.parent) && i.parent);
      return (
        a !== e.length &&
          i.children.push({ type: "text", value: e.substring(a) }),
        r
      );
    }
    function s(e, t, n) {
      for (var r = e.format, o = [], a = u(n), i = 0; i < t.length; ++i)
        (!r && !t[i][0].compatibility) || a.includes(t[i][0]) || o.push(t[i]);
      return o;
    }
    function u(e) {
      var t = e,
        n = [];
      do t.mutator && n.push(t.mutator);
      while (t.parent && (t = t.parent));
      return n;
    }
    l.default = e;
  },
  98,
);
