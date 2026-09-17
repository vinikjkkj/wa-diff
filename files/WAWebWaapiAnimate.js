__d(
  "WAWebWaapiAnimate",
  [
    "Promise",
    "WAWebNoop",
    "WAWebUimUtils",
    "WAWebWaapiAnimateEasing",
    "WAWebWaapiAnimateKeyframes",
    "WAWebWaapiAnimateMerge",
    "WAWebWaapiAnimateOptions",
    "WAWebWaapiAnimatePresets",
    "WAWebWaapiAnimateScroll",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 400,
      u = new Map(),
      c = !1,
      d = new WeakMap(),
      m = new WeakMap(),
      p = new WeakMap(),
      _ = new WeakMap(),
      f = new WeakMap();
    function g(e, t, n) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          if (e) {
            var r = t;
            return typeof r == "string"
              ? x(e, r, n)
              : (r != null &&
                  typeof r == "object" &&
                  !Array.isArray(r) &&
                  (yield y(
                    e,
                    r,
                    o("WAWebWaapiAnimateOptions").optionsObject(n),
                  )),
                e);
          }
        })),
        h.apply(this, arguments)
      );
    }
    function y(t, a, i) {
      var l,
        u,
        c,
        d = o("WAWebWaapiAnimateKeyframes").buildAnimationKeyframes(a),
        m = d.keyframes,
        p = d.staticStyles,
        _ = (l = i.duration) != null ? l : s,
        f = (u = i.delay) != null ? u : 0,
        g = (c = i.stagger) != null ? c : 0,
        h = o("WAWebWaapiAnimateEasing").resolveCssEasing(i.easing),
        y = i.progress,
        b = Y(t).map(function (e, t) {
          var n = f + t * g;
          return C(
            e,
            { keyframes: m, duration: _, delay: n, easing: h },
            p,
            y,
            i.queue,
          );
        });
      return (e || (e = n("Promise"))).all(b).then(r("WAWebNoop"));
    }
    function C(e, t, n, r, o) {
      return b(e, o, function () {
        return v(e, t, n, r);
      });
    }
    function b(t, r, o) {
      var a, i;
      if (r === !1) return o();
      var l = r != null ? r : "",
        s = (a = _.get(t)) != null ? a : new Map(),
        u =
          (i = s.get(l)) != null
            ? i
            : { generation: 0, tail: (e || (e = n("Promise"))).resolve() },
        c = u.generation,
        d = function () {
          return u.generation === c ? o() : (e || (e = n("Promise"))).resolve();
        },
        m = u.tail.then(d, d);
      return (
        (u.tail = m),
        s.set(l, u),
        _.set(t, s),
        m.then(function () {
          s.get(l) === u &&
            u.tail === m &&
            (s.delete(l), s.size === 0 && _.delete(t));
        }),
        m
      );
    }
    function v(t, r, o, a) {
      return new (e || (e = n("Promise")))(function (e) {
        var n,
          i = (n = u.get(t)) != null ? n : [];
        (i.push({ entry: r, staticStyles: o, progress: a, resolve: e }),
          u.set(t, i),
          S());
      });
    }
    function S() {
      c || ((c = !0), (e || (e = n("Promise"))).resolve().then(R));
    }
    function R() {
      c = !1;
      for (var e of Array.from(u.keys())) {
        var t = u.get(e);
        (u.delete(e), t != null && t.length > 0 && L(e, t));
      }
    }
    function L(t, r) {
      for (var a of r) D(t, a.staticStyles);
      var i = r.map(function () {
        return [];
      });
      (r.some(function (e) {
        return e.progress != null;
      }) && o("WAWebWaapiAnimateScroll").cancelScrollTweens(t),
        r.forEach(function (e, n) {
          var r = e.progress;
          r != null &&
            i[n].push(
              o("WAWebWaapiAnimateScroll").runProgressTween(
                t,
                e.entry.duration,
                e.entry.delay,
                r,
              ),
            );
        }));
      var l = [],
        s = [];
      r.forEach(function (e, t) {
        e.entry.keyframes.length > 0 && (l.push(t), s.push(e.entry));
      });
      for (var u of o("WAWebWaapiAnimateMerge").mergeNodeEntries(s)) {
        var c = Q(u.keyframes);
        j(t, c);
        var d = t.animate(u.keyframes, {
          duration: u.duration,
          delay: u.delay,
          easing: u.easing,
          fill: "forwards",
        });
        V(t, d, c, u.keyframes);
        var m = E(t, d);
        for (var p of u.entryIndices) i[l[p]].push(m);
      }
      r.forEach(function (t, r) {
        (e || (e = n("Promise"))).all(i[r]).then(t.resolve, t.resolve);
      });
    }
    function E(e, t) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          try {
            (yield t.finished, I(e, t, !0) && G(e, t));
          } catch (n) {
            (r("WAWebNoop")(n), G(e, t));
          }
        })),
        k.apply(this, arguments)
      );
    }
    function I(e, t, n) {
      n === void 0 && (n = !1);
      try {
        return (t.commitStyles(), n && T(e, p.get(t)), t.cancel(), !0);
      } catch (e) {
        return (r("WAWebNoop")(e), !1);
      }
    }
    function T(e, t) {
      if (!(t == null || !t.includes("translateZ(0px)"))) {
        var n = t.replace(/(?:^|\s)translateZ\(0px\)(?=\s|$)/g, "").trim();
        n === ""
          ? e.style.removeProperty("transform")
          : (e.style.transform = n);
      }
    }
    function D(e, t) {
      for (var n of Object.keys(t)) {
        var r = n.replace(/[A-Z]/g, function (e) {
          return "-" + e.toLowerCase();
        });
        e.style.setProperty(r, t[n]);
      }
    }
    function x(t, r, a) {
      return r === "finish"
        ? B(t, a === !0)
        : r === "stop"
          ? W(t, a === !0)
          : r === "scroll"
            ? U(t, o("WAWebWaapiAnimateOptions").optionsObject(a))
            : o("WAWebWaapiAnimatePresets").isWaapiPreset(r)
              ? $(t, r, o("WAWebWaapiAnimateOptions").optionsObject(a))
              : (e || (e = n("Promise"))).resolve(t);
    }
    function $(t, r, o) {
      var a = { duration: o.duration, easing: o.easing },
        i = Y(t),
        l = i.map(function (e, t) {
          return b(e, o.queue, function () {
            return P(e, r, a, o, t, i.length);
          });
        });
      return (e || (e = n("Promise"))).all(l).then(function () {
        return t;
      });
    }
    function P(t, r, a, i, l, s) {
      var u;
      (r === "slideUp" || r === "slideDown") && j(t, N);
      var c = o("WAWebWaapiAnimatePresets").buildPreset(r, t, a);
      if (c == null) return (e || (e = n("Promise"))).resolve();
      D(t, c.staticStyles);
      var d = [{ keyframes: c.keyframes, easing: c.easing }].concat(
          (u = c.additionalAnimations) != null ? u : [],
        ),
        m = new Set();
      for (var p of d) for (var _ of Q(p.keyframes)) m.add(_);
      r !== "slideUp" && r !== "slideDown" && j(t, m);
      var f = d.map(function (e) {
        var n,
          r,
          o = t.animate(e.keyframes, {
            duration: M(c.duration, i.drag === !0, l, s),
            delay:
              ((n = i.delay) != null ? n : 0) +
              l * ((r = i.stagger) != null ? r : 0),
            easing: e.easing,
            fill: "forwards",
          });
        return (V(t, o, Q(e.keyframes), e.keyframes), o);
      });
      return w(t, f, c.onComplete);
    }
    var N = new Set([
      "height",
      "marginTop",
      "marginBottom",
      "paddingTop",
      "paddingBottom",
    ]);
    function M(e, t, n, r) {
      return !t || r === 0 ? e : Math.max(e * ((n + 1) / r), e * 0.75, 200);
    }
    function w(e, t, n) {
      return A.apply(this, arguments);
    }
    function A() {
      return (
        (A = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r, o) {
          var a =
            o == null
              ? null
              : {
                  completed: !1,
                  onComplete: function (n) {
                    return o(t, n);
                  },
                };
          if (a != null) for (var i of r) f.set(i, a);
          var l = yield (e || (e = n("Promise"))).all(
            r.map(function (e) {
              return F(t, e, o != null);
            }),
          );
          a != null &&
            !a.completed &&
            ((a.completed = !0), a.onComplete(l.every(Boolean)));
        })),
        A.apply(this, arguments)
      );
    }
    function F(e, t, n) {
      return O.apply(this, arguments);
    }
    function O() {
      return (
        (O = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          try {
            return (
              yield t.finished,
              n ? (t.cancel(), G(e, t)) : I(e, t, !0) && G(e, t),
              !0
            );
          } catch (n) {
            return (r("WAWebNoop")(n), G(e, t), !1);
          }
        })),
        O.apply(this, arguments)
      );
    }
    function B(t, a) {
      (a && q(t),
        R(),
        z(t, function (e, t) {
          return t.finish();
        }));
      for (var i of Y(t)) o("WAWebWaapiAnimateScroll").cancelScrollTweens(i);
      return new (e || (e = n("Promise")))(r("WAWebNoop"));
    }
    function W(t, r) {
      (r && q(t),
        R(),
        z(t, function (e, t) {
          (K(t), I(e, t));
        }));
      for (var a of Y(t)) o("WAWebWaapiAnimateScroll").cancelScrollTweens(a);
      return (e || (e = n("Promise"))).resolve(t);
    }
    function q(e) {
      for (var t of Y(e)) {
        var n = _.get(t),
          r = n == null ? void 0 : n.get("");
        r != null &&
          ((r.generation += 1),
          n == null || n.delete(""),
          (n == null ? void 0 : n.size) === 0 && _.delete(t));
      }
    }
    function U(t, r) {
      var a,
        i,
        l,
        u,
        c = Array.isArray(t) ? t[0] : t,
        d = (a = r.container) != null ? a : document.scrollingElement;
      if (c == null || !o("WAWebUimUtils").isCrossWindowHTMLElement(d))
        return (e || (e = n("Promise"))).resolve(t);
      var m = (i = r.axis) != null ? i : "y",
        p = o("WAWebWaapiAnimateScroll").computeScrollTarget(
          d,
          c,
          m,
          (l = r.offset) != null ? l : 0,
        );
      return o("WAWebWaapiAnimateScroll")
        .tweenScroll(
          c,
          d,
          m,
          p,
          (u = r.duration) != null ? u : s,
          o("WAWebWaapiAnimateEasing").resolveEasingFn(r.easing),
        )
        .then(function () {
          return t;
        });
    }
    function V(e, t, n, r) {
      var o,
        a = (o = d.get(e)) != null ? o : new Set();
      (a.add(t), d.set(e, a), m.set(t, n));
      var i = H(r[r.length - 1], "transform");
      typeof i == "string" && p.set(t, i);
    }
    function H(e, t) {
      var n;
      if (e == null) return null;
      var r =
        (n = Object.getOwnPropertyDescriptor(e, t)) == null ? void 0 : n.value;
      return typeof r == "string" ? r : null;
    }
    function G(e, t) {
      var n = d.get(e);
      n != null && (n.delete(t), n.size === 0 && d.delete(e));
    }
    function z(e, t) {
      for (var n of Y(e)) {
        var o = d.get(n);
        if (o != null)
          for (var a of Array.from(o))
            try {
              t(n, a);
            } catch (e) {
              r("WAWebNoop")(e);
            }
      }
    }
    function j(e, t) {
      var n = d.get(e);
      if (n != null)
        for (var r of Array.from(n)) {
          var o = m.get(r);
          (o == null || X(o, t)) && (K(r), I(e, r));
        }
    }
    function K(e) {
      var t = f.get(e);
      t == null || t.completed || ((t.completed = !0), t.onComplete(!1));
    }
    function Q(e) {
      var t = new Set();
      for (var n of e)
        for (var r of Object.keys(n))
          r !== "offset" && r !== "easing" && r !== "composite" && t.add(r);
      return t;
    }
    function X(e, t) {
      var n = e.size <= t.size ? [e, t] : [t, e],
        r = n[0],
        o = n[1];
      for (var a of r) if (o.has(a)) return !0;
      return !1;
    }
    function Y(e) {
      return Array.isArray(e) ? e : [e];
    }
    l.default = g;
  },
  98,
);
