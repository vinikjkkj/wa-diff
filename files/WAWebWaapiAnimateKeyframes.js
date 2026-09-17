__d(
  "WAWebWaapiAnimateKeyframes",
  [],
  function (t, n, r, o, a, i) {
    var e = new Set([
        "translateX",
        "translateY",
        "translateZ",
        "scaleX",
        "scaleY",
        "scale",
        "rotateZ",
      ]),
      l = {
        translateX: "0px",
        translateY: "0px",
        translateZ: "0px",
        scaleX: "1",
        scaleY: "1",
        scale: "1",
        rotateZ: "0deg",
      },
      s = new Set(["translateX", "translateY", "translateZ"]),
      u = new Set([
        "opacity",
        "zIndex",
        "zoom",
        "fontWeight",
        "lineHeight",
        "order",
        "flexGrow",
        "flexShrink",
      ]),
      c = new Set(["tween"]),
      d = new Set(["transformOrigin"]),
      m = new Set(["display", "overflowY"]);
    function p(t) {
      var n = {},
        r = {},
        o = {},
        a = [],
        i = [],
        s = !1,
        p = !1;
      for (var h of Object.keys(t))
        if (!c.has(h)) {
          var y = _(t[h]),
            C = y.after,
            b = y.before;
          if (m.has(h)) {
            C != null && (o[h] = String(C));
            continue;
          }
          if (e.has(h)) {
            var v = C != null ? C : l[h];
            i.push(f(h, v));
            var S = b != null ? b : l[h];
            (a.push(f(h, S)), Array.isArray(t[h]) && (p = !0));
            continue;
          }
          if (d.has(h) && C != null) {
            var R = String(C);
            ((n[h] = R), (r[h] = R));
            continue;
          }
          var L = !u.has(h);
          (C != null && (r[h] = L ? g(C) : String(C)),
            b != null && ((n[h] = L ? g(b) : String(b)), (s = !0)));
        }
      i.length > 0 &&
        ((r.transform = i.join(" ")),
        p && ((n.transform = a.join(" ")), (s = !0)));
      var E = s ? [n, r] : [r];
      return { keyframes: E, staticStyles: o };
    }
    function _(e) {
      return Array.isArray(e)
        ? e.length >= 3
          ? { after: e[0], before: e[2] }
          : e.length === 2
            ? { after: e[0], before: e[1] }
            : { after: e[0], before: void 0 }
        : { after: e, before: void 0 };
    }
    function f(e, t) {
      var n = s.has(e) ? g(t) : String(t);
      return e + "(" + n + ")";
    }
    function g(e) {
      return typeof e == "number" ? e + "px" : String(e);
    }
    i.buildAnimationKeyframes = p;
  },
  66,
);
