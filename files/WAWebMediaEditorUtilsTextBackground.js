__d(
  "WAWebMediaEditorUtilsTextBackground",
  ["WAWebMediaEditorEnumsFonts"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      var r = n.arcSize,
        a = [],
        i = [],
        l = Math.max.apply(Math, e),
        u = n.lineHeight + n.lineVerticalPadding * 2;
      e.forEach(function (r, s) {
        var c = r + n.lineHorizontalPadding * 2,
          d = 0;
        switch (t) {
          case o("WAWebMediaEditorEnumsFonts").TextAlignment.LEFT:
            d = 0;
            break;
          case o("WAWebMediaEditorEnumsFonts").TextAlignment.CENTER:
            d = (l - r) / 2;
            break;
          case o("WAWebMediaEditorEnumsFonts").TextAlignment.RIGHT:
            d = l - r;
            break;
        }
        var m = s * u;
        (a.push({ y: m, x: d }),
          i.push({ y: m, x: d + c }),
          s === e.length - 1 &&
            (a.push({ y: m + u, x: d }), i.push({ y: m + u, x: d + c })));
      });
      var c = [];
      for (var d of [
        { left: !0, points: a },
        { left: !1, points: i },
      ]) {
        for (var m = d.left, p = d.points, _ = p, f = !0; f; ) {
          ((p = _), (_ = []), (f = !1));
          for (var g = 0; g < p.length; g++) {
            var h = p[g];
            if (g === 0) _.push(h);
            else {
              _.length >= 2 &&
                _[_.length - 1].x === _[_.length - 2].x &&
                (_.pop(), (f = !0));
              var y = _[_.length - 1];
              (h.x !== y.x &&
                Math.abs(h.x - y.x) < r * 2 &&
                ((f = !0),
                (m && y.x < h.x) || (!m && y.x > h.x)
                  ? (h.x = y.x)
                  : (y.x = h.x)),
                _.push(h));
            }
          }
        }
        for (var C = [], b = 0; b < _.length; b++) {
          var v = _[b];
          if (b === 0 || b === _.length - 1) {
            C.push(v);
            continue;
          }
          var S = _[b - 1];
          if (v.x !== S.x) {
            var R = { x: S.x, y: v.y },
              L = C.length - 1;
            (C.length >= 2 &&
              C[L].x === R.x &&
              C[L].x === C[L - 1].x &&
              C.pop(),
              C.push(R));
          }
          C.push(v);
        }
        (m || C.reverse(), (c = c.concat(C)));
      }
      return s(c, r);
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
