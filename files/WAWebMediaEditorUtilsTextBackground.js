__d(
  "WAWebMediaEditorUtilsTextBackground",
  ["WAWebMediaEditorEnumsFonts"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.alignment,
        n = e.lineWidths,
        r = e.style,
        a = r.arcSize,
        i = [],
        l = [],
        u = Math.max.apply(Math, n),
        c = r.lineHeight + r.lineVerticalPadding * 2;
      n.forEach(function (e, a) {
        var s = e + r.lineHorizontalPadding * 2,
          d = 0;
        switch (t) {
          case o("WAWebMediaEditorEnumsFonts").TextAlignment.LEFT:
            d = 0;
            break;
          case o("WAWebMediaEditorEnumsFonts").TextAlignment.CENTER:
            d = (u - e) / 2;
            break;
          case o("WAWebMediaEditorEnumsFonts").TextAlignment.RIGHT:
            d = u - e;
            break;
        }
        var m = a * c;
        (i.push({ y: m, x: d }),
          l.push({ y: m, x: d + s }),
          a === n.length - 1 &&
            (i.push({ y: m + c, x: d }), l.push({ y: m + c, x: d + s })));
      });
      var d = [];
      for (var m of [
        { left: !0, points: i },
        { left: !1, points: l },
      ]) {
        for (var p = m.left, _ = m.points, f = _, g = !0; g; ) {
          ((_ = f), (f = []), (g = !1));
          for (var h = 0; h < _.length; h++) {
            var y = _[h];
            if (h === 0) f.push(y);
            else {
              f.length >= 2 &&
                f[f.length - 1].x === f[f.length - 2].x &&
                (f.pop(), (g = !0));
              var C = f[f.length - 1];
              (y.x !== C.x &&
                Math.abs(y.x - C.x) < a * 2 &&
                ((g = !0),
                (p && C.x < y.x) || (!p && C.x > y.x)
                  ? (y.x = C.x)
                  : (C.x = y.x)),
                f.push(y));
            }
          }
        }
        for (var b = [], v = 0; v < f.length; v++) {
          var S = f[v];
          if (v === 0 || v === f.length - 1) {
            b.push(S);
            continue;
          }
          var R = f[v - 1];
          if (S.x !== R.x) {
            var L = { x: R.x, y: S.y },
              E = b.length - 1;
            (b.length >= 2 &&
              b[E].x === L.x &&
              b[E].x === b[E - 1].x &&
              b.pop(),
              b.push(L));
          }
          b.push(S);
        }
        (p || b.reverse(), (d = d.concat(b)));
      }
      return s(d, a);
    }
    function s(e, t) {
      function n(t) {
        return t === 0 ? e[e.length - 1] : e[t - 1];
      }
      function r(t) {
        return t === e.length - 1 ? e[0] : e[t + 1];
      }
      for (var o = [], a = 0; a < e.length; a++) {
        var i = u(e[a], n(a), r(a), t),
          l = i.clockwise,
          s = i.end,
          c = i.start,
          d = a === e.length - 1 ? 0 : a + 1,
          m = u(e[d], n(d), r(d), t),
          p = m.start;
        (a === 0 && o.push("M " + c.x + "," + c.y),
          o.push(
            "A " + t + "," + t + " 0 0 " + (l ? 1 : 0) + " " + s.x + "," + s.y,
          ),
          o.push("L " + p.x + "," + p.y));
      }
      return (o.push("Z"), o.join("\n"));
    }
    function u(e, t, n, r) {
      var o = t.y === e.y,
        a = {
          y: o ? e.y : t.y > e.y ? e.y + r : e.y - r,
          x: o ? (t.x > e.x ? e.x + r : e.x - r) : e.x,
        },
        i = e.y === n.y,
        l = {
          y: i ? e.y : n.y > e.y ? e.y + r : e.y - r,
          x: i ? (n.x > e.x ? e.x + r : e.x - r) : e.x,
        },
        s =
          (o && ((t.y < n.y && t.x < n.x) || (t.x > n.x && t.y > n.y))) ||
          (!o && ((t.y < n.y && t.x > n.x) || (t.x < n.x && t.y > n.y)));
      return { start: a, end: l, clockwise: s };
    }
    l.generateTextBackgroundPath = e;
  },
  98,
);
