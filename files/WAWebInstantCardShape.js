__d(
  "WAWebInstantCardShape",
  [],
  function (t, n, r, o, a, i) {
    var e = 160,
      l = 52,
      s = 8,
      u = 16,
      c = e + s,
      d = 0.5,
      m = [
        { angleDeg: 4, x: 7.2, y: -11 },
        { angleDeg: -3, x: 3.2, y: -11 },
      ],
      p = [
        { angleDeg: 4, x: 4.6, y: -12 },
        { angleDeg: -3, x: 2.6, y: -11 },
      ],
      _ = m.length,
      f = b(0),
      g = b(d);
    function h(e) {
      return 'path("' + v(f, e) + '")';
    }
    function y(e) {
      return 'path(evenodd, "' + v(f, e) + " " + v(g, e) + '")';
    }
    function C(e, t, n) {
      var r = (t ? p : m)[e],
        o = r.angleDeg,
        a = r.x,
        i = r.y,
        l = t === n;
      return { angleDeg: n ? -o : o, x: l ? a : -a, y: i };
    }
    function b(e) {
      var t = s,
        n = c - e,
        r = l - e,
        o = t + e,
        a = u - e;
      return [
        { cmd: "M", to: [2.812, e] },
        { cmd: "L", to: [n - a, e] },
        { cmd: "A", r: a, to: [n, e + a] },
        { cmd: "L", to: [n, r - a] },
        { cmd: "A", r: a, to: [n - a, r] },
        { cmd: "L", to: [o + a, r] },
        { cmd: "A", r: a, to: [o, r - a] },
        { cmd: "L", to: [o, 11.193 - e] },
        { cmd: "L", to: [1.533 + e, 2.568] },
        {
          cmd: "C",
          c1: [0.474 + e, 1.156],
          c2: [1.042 + e, e],
          to: [2.812, e],
        },
      ];
    }
    function v(e, t) {
      var n = function (n) {
        var e = n[0],
          r = n[1];
        return S(t ? e : c - e) + " " + S(r);
      };
      return e
        .map(function (e) {
          return (function (e) {
            if (
              ((typeof e == "object" && e !== null) ||
                typeof e == "function") &&
              (e.cmd === "M" || e.cmd === "L") &&
              "to" in e
            ) {
              var r = e.cmd,
                o = e.to;
              return "" + r + n(o);
            }
            if (
              ((typeof e == "object" && e !== null) ||
                typeof e == "function") &&
              e.cmd === "C" &&
              "c1" in e &&
              "c2" in e &&
              "to" in e
            ) {
              var a = e.c1,
                i = e.c2,
                l = e.to;
              return "C" + n(a) + " " + n(i) + " " + n(l);
            }
            if (
              ((typeof e == "object" && e !== null) ||
                typeof e == "function") &&
              e.cmd === "A" &&
              "r" in e &&
              "to" in e
            ) {
              var s = e.r,
                u = e.to;
              return (
                "A" + S(s) + " " + S(s) + " 0 0 " + (t ? 1 : 0) + " " + n(u)
              );
            }
            throw Error(
              "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                e,
            );
          })(e);
        })
        .join(" ")
        .concat(" Z");
    }
    function S(e) {
      return Math.round(e * 1e3) / 1e3;
    }
    ((i.INSTANT_STACK_MAX_GHOSTS = _),
      (i.getInstantCardClipPath = h),
      (i.getInstantCardBorderClipPath = y),
      (i.getInstantStackGhostPose = C));
  },
  66,
);
