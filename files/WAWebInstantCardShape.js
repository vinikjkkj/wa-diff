__d(
  "WAWebInstantCardShape",
  [],
  function (t, n, r, o, a, i) {
    var e = 6,
      l = 178,
      s = 64,
      u = 20,
      c = 19.2,
      d = 1,
      m = { left: g(0, 0, l, s, !0), right: g(0, 0, l, s, !1) },
      p = {
        left: g(d, d, l - 2 * d, s - 2 * d, !0),
        right: g(d, d, l - 2 * d, s - 2 * d, !1),
      };
    function _(e) {
      return 'path("' + m[e ? "left" : "right"] + '")';
    }
    function f(e) {
      var t = e ? "left" : "right";
      return 'path(evenodd, "' + m[t] + " " + p[t] + '")';
    }
    function g(e, t, n, r, o) {
      return h(n, r)
        .map(function (r) {
          var a = r.cmd,
            i = r.points;
          return (
            "" +
            a +
            i
              .map(function (r) {
                var a = r[0],
                  i = r[1];
                return [o ? n - a : a, i]
                  .map(function (n, r) {
                    return y(n + (r === 0 ? e : t));
                  })
                  .join(" ");
              })
              .join(" ")
          );
        })
        .join(" ")
        .concat(" Z");
    }
    function h(t, n) {
      var r = t - c - e,
        o = n - c,
        a = Math.max(1, Math.min(u * 1.528, o, n / 2, r)),
        i = t - e,
        l = a * 0.651042,
        s = a * 0.473958,
        d = a * 0.34375,
        m = a * 0.223958,
        p = a * 0.130208,
        _ = a * 0.067708;
      return [
        { cmd: "M", points: [[a, 0]] },
        { cmd: "L", points: [[i - a, 0]] },
        {
          cmd: "C",
          points: [
            [i - l, 0],
            [i - s, 0],
            [i - d, _],
          ],
        },
        {
          cmd: "C",
          points: [
            [i - m, p],
            [i - p, m],
            [i - _, d],
          ],
        },
        {
          cmd: "C",
          points: [
            [i, s],
            [i, l],
            [i, a],
          ],
        },
        { cmd: "L", points: [[r + 19.2, o]] },
        {
          cmd: "C",
          points: [
            [r + 19.2, o + 7.7],
            [r + 19.1, o + 12.9],
            [r + 25, o + 18.3],
          ],
        },
        {
          cmd: "C",
          points: [
            [r + 25.4, o + 18.6],
            [r + 25.1, o + 19.2],
            [r + 24.7, o + 19.2],
          ],
        },
        {
          cmd: "C",
          points: [
            [r + 20.4, o + 19],
            [r + 17, o + 17.7],
            [r + 15.3, o + 16],
          ],
        },
        {
          cmd: "C",
          points: [
            [r + 14.5, o + 16.8],
            [r + 13.6, o + 17.4],
            [r + 12.6, o + 17.9],
          ],
        },
        {
          cmd: "C",
          points: [
            [r + 10.1, o + 19.2],
            [r + 6.7, o + 19.2],
            [r, o + 19.2],
          ],
        },
        { cmd: "L", points: [[a, n]] },
        {
          cmd: "C",
          points: [
            [l, n],
            [s, n],
            [d, n - _],
          ],
        },
        {
          cmd: "C",
          points: [
            [m, n - p],
            [p, n - m],
            [_, n - d],
          ],
        },
        {
          cmd: "C",
          points: [
            [0, n - s],
            [0, n - l],
            [0, n - a],
          ],
        },
        { cmd: "L", points: [[0, a]] },
        {
          cmd: "C",
          points: [
            [0, l],
            [0, s],
            [_, d],
          ],
        },
        {
          cmd: "C",
          points: [
            [p, m],
            [m, p],
            [d, _],
          ],
        },
        {
          cmd: "C",
          points: [
            [s, 0],
            [l, 0],
            [a, 0],
          ],
        },
      ];
    }
    function y(e) {
      return Math.round(e * 100) / 100;
    }
    ((i.getInstantCardClipPath = _), (i.getInstantCardBorderClipPath = f));
  },
  66,
);
