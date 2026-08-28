__d(
  "KFTrimPath",
  ["BezierShim", "KFAnimationUtils"],
  function (t, n, r, o, a, i, l) {
    var e = document.createElementNS("http://www.w3.org/2000/svg", "path"),
      s = 360,
      u = function (t, n) {
        t === void 0 && (t = "");
        var e = t;
        switch (n.type) {
          case 0:
            e += "M" + n.point[0] + ", " + n.point[1];
            break;
          case 1:
            e += "L" + n.point[0] + ", " + n.point[1];
            break;
          case 2:
            n.c1 &&
              n.c1[0] !== void 0 &&
              n.c1[1] !== void 0 &&
              (e +=
                "Q" +
                n.c1[0] +
                " " +
                n.c1[1] +
                ", " +
                n.point[0] +
                ", " +
                n.point[1]);
            break;
          case 3:
            n.c1 &&
              n.c2 &&
              n.c1[0] !== void 0 &&
              n.c1[1] !== void 0 &&
              n.c2[0] !== void 0 &&
              n.c2[1] !== void 0 &&
              (e +=
                "C" +
                n.c1[0] +
                " " +
                n.c1[1] +
                ", " +
                n.c2[0] +
                " " +
                n.c2[1] +
                ", " +
                n.point[0] +
                ", " +
                n.point[1]);
            break;
        }
        return e;
      },
      c = function () {
        return { type: 0, point: [0, 0], c1: [0, 0], c2: [0, 0] };
      },
      d = function (t, n) {
        var e,
          a = { split: c };
        switch (n.type) {
          case 0:
            a.split = function () {
              return {
                type: 0,
                point: [n.point[0], n.point[1]],
                c1: [0, 0],
                c2: [0, 0],
              };
            };
            break;
          case 1:
            a.split = function (e, r) {
              var a,
                i = [
                  (a = o("KFAnimationUtils")).lerp(e, t.point[0], n.point[0]),
                  a.lerp(e, t.point[1], n.point[1]),
                ],
                l = [
                  a.lerp(r, t.point[0], n.point[0]),
                  a.lerp(r, t.point[1], n.point[1]),
                ];
              return {
                type: 1,
                point: [l[0], l[1]],
                c1: [i[0], i[1]],
                c2: [l[0], l[1]],
              };
            };
            break;
          case 2:
            t.point &&
              n.point &&
              n.c1 &&
              n.c1[0] !== void 0 &&
              n.c1[1] !== void 0 &&
              ((e = new (r("BezierShim"))(
                t.point[0],
                t.point[1],
                n.c1[0],
                n.c1[1],
                n.point[0],
                n.point[1],
              )),
              (a.split = function (t, n) {
                var r = e.split(t, n);
                return (
                  r.points ||
                    (r.points = [
                      r.left.points[0],
                      r.left.points[0],
                      r.left.points[0],
                      r.left.points[0],
                    ]),
                  {
                    type: 2,
                    point: [r.points[2].x, r.points[2].y],
                    c1: [r.points[1].x, r.points[1].y],
                    c2: [0, 0],
                  }
                );
              }));
            break;
          case 3:
            t.point &&
              n.point &&
              n.c1 &&
              n.c2 &&
              n.c1[0] !== void 0 &&
              n.c1[1] !== void 0 &&
              n.c2[0] !== void 0 &&
              n.c2[1] !== void 0 &&
              ((e = new (r("BezierShim"))(
                t.point[0],
                t.point[1],
                n.c1[0],
                n.c1[1],
                n.c2[0],
                n.c2[1],
                n.point[0],
                n.point[1],
              )),
              (a.split = function (t, n) {
                var r = e.split(t, n);
                return (
                  r.points ||
                    (r.points = [
                      r.left.points[0],
                      r.left.points[0],
                      r.left.points[0],
                      r.left.points[0],
                    ]),
                  {
                    type: 3,
                    point: [r.points[3].x, r.points[3].y],
                    c1: [r.points[1].x, r.points[1].y],
                    c2: [r.points[2].x, r.points[2].y],
                  }
                );
              }));
            break;
        }
        return a;
      },
      m = [],
      p = function (t, n, r) {
        (t === void 0 && (t = 0),
          n === void 0 && (n = 100),
          r === void 0 && (r = 0));
        var e = t / 100,
          o = n / 100,
          a = r % s;
        if (((a = a === -0 ? 0 : a), e > o)) {
          var i = o;
          ((o = e), (e = i));
        }
        return (
          e === 0 && o === 1
            ? ((m[0] = (a % s) / s), (m[1] = (a % s) / s))
            : ((e += (a % s) / s),
              (o += (a % s) / s),
              (m[0] = e > 1 ? e % 1 : e),
              (m[1] = o > 1 ? o % 1 : o)),
          m
        );
      };
    function _(t) {
      for (var n = [], r = "", o = 0; o < t.length; o++) {
        var a = t[o];
        ((r = u(r, a)),
          e.setAttributeNS(null, "d", r),
          n.push(e.getTotalLength()));
      }
      return n;
    }
    function f(t, n, r, o) {
      (n === void 0 && (n = 0),
        r === void 0 && (r = 100),
        o === void 0 && (o = 0));
      var a = [],
        i = n,
        l = r,
        s = o;
      if (i === l) return a;
      if (i === 0 && l === 100 && s === 0) return t;
      var u = _(t),
        c = u[u.length - 1],
        m = p(i, l, s);
      ((i = m[0]), (l = m[1]));
      var f = e.getPointAtLength(i * c);
      if (i < l) {
        for (var g = 0; g < t.length; g++)
          if (!(i * c > u[g])) {
            var h = t[g - 1],
              y = t[g],
              C = d(h, y),
              b = 0,
              v = 1,
              S = u[g] - (u[g - 1] || 0);
            if (a.length === 0) {
              var R = { type: 0, point: [f.x, f.y], c1: [0, 0], c2: [0, 0] };
              (a.push(R), (b = S === 0 ? 1 : (c * i - (u[g - 1] || 0)) / S));
            }
            if (l * c < u[g]) {
              ((v = (c * l - (u[g - 1] || 0)) / (u[g] - (u[g - 1] || 0))),
                a.push(C.split(b, v)));
              break;
            }
            a.push(C.split(b, v));
          }
      } else
        for (var L = !1, E = !1, k = 0; k < t.length; k++) {
          var I = d(t[k - 1], t[k]),
            T = 0,
            D = 1;
          (!E &&
            l * c < u[k] &&
            ((E = !0),
            (D = (c * l - (u[k - 1] || 0)) / (u[k] - (u[k - 1] || 0))),
            a.push(I.split(0, D)),
            a.push({ type: 0, point: [f.x, f.y], c1: [0, 0], c2: [0, 0] })),
            !L &&
              i * c < u[k] &&
              ((L = !0),
              (T = (c * i - (u[k - 1] || 0)) / (u[k] - (u[k - 1] || 0))),
              (D = 1)),
            ((!L && !E) || (L && E)) && a.push(I.split(T, D)));
        }
      return a;
    }
    l.trimPath = f;
  },
  98,
);
