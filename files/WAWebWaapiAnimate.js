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
    "WAWebWaapiAnimateVisibility",
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
              ? O(e, r, n)
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
        b = ae(t).map(function (e, t) {
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
      ((u.tail = m), s.set(l, u), _.set(t, s));
      var p = function () {
        s.get(l) === u &&
          u.tail === m &&
          (s.delete(l), s.size === 0 && _.delete(t));
      };
      return (m.then(p, p), m);
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
        if ((u.delete(e), t != null && t.length > 0))
          try {
            L(e, t);
          } catch (e) {
            r("WAWebNoop")(e);
          }
      }
    }
    function L(t, r) {
      var o = r.map(function () {
        return [];
      });
      try {
        E(t, r, o);
      } finally {
        r.forEach(function (t, r) {
          (e || (e = n("Promise"))).all(o[r]).then(t.resolve, t.resolve);
        });
      }
    }
    function E(e, t, n) {
      for (var a of t) P(e, a.staticStyles);
      (t.some(function (e) {
        return e.progress != null;
      }) && o("WAWebWaapiAnimateScroll").cancelScrollTweens(e),
        t.forEach(function (t, a) {
          var i = t.progress;
          if (i != null)
            try {
              n[a].push(
                o("WAWebWaapiAnimateScroll").runProgressTween(
                  e,
                  t.entry.duration,
                  t.entry.delay,
                  i,
                ),
              );
            } catch (e) {
              r("WAWebNoop")(e);
            }
        }));
      var i = [],
        l = [];
      t.forEach(function (e, t) {
        e.entry.keyframes.length > 0 && (i.push(t), l.push(e.entry));
      });
      for (var s of o("WAWebWaapiAnimateMerge").mergeNodeEntries(l))
        try {
          var u = re(s.keyframes);
          te(e, u);
          var c = M(e, s.keyframes, {
            duration: s.duration,
            delay: s.delay,
            easing: s.easing,
          });
          if (c == null) {
            A(e, s.keyframes);
            continue;
          }
          Y(e, c, u, s.keyframes);
          var d = k(e, c, s.delay + s.duration);
          for (var m of s.entryIndices) n[i[m]].push(d);
        } catch (t) {
          r("WAWebNoop")(t);
          try {
            A(e, s.keyframes);
          } catch (e) {
            r("WAWebNoop")(e);
          }
        }
    }
    function k(e, t, n) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          try {
            (yield T(e, t, n), x(e, t, !0) && Z(e, t));
          } catch (n) {
            (r("WAWebNoop")(n), Z(e, t));
          }
        })),
        I.apply(this, arguments)
      );
    }
    function T(e, t, n) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          if (o("WAWebWaapiAnimateVisibility").isInHiddenDocument(e)) {
            (t.finish(), yield t.finished);
            return;
          }
          var r = o("WAWebWaapiAnimateVisibility").settleWhenOverdue(
            e,
            n,
            function () {
              return t.finish();
            },
          );
          try {
            yield t.finished;
          } finally {
            r();
          }
        })),
        D.apply(this, arguments)
      );
    }
    function x(e, t, n) {
      n === void 0 && (n = !1);
      try {
        return (t.commitStyles(), n && $(e, p.get(t)), t.cancel(), !0);
      } catch (e) {
        return (r("WAWebNoop")(e), !1);
      }
    }
    function $(e, t) {
      if (!(t == null || !t.includes("translateZ(0px)"))) {
        var n = t.replace(/(?:^|\s)translateZ\(0px\)(?=\s|$)/g, "").trim();
        n === ""
          ? e.style.removeProperty("transform")
          : (e.style.transform = n);
      }
    }
    function P(e, t) {
      for (var n of Object.keys(t)) e.style.setProperty(N(n), t[n]);
    }
    function N(e) {
      return e.replace(/[A-Z]/g, function (e) {
        return "-" + e.toLowerCase();
      });
    }
    function M(e, t, n) {
      var o;
      try {
        o = e.animate(t, babelHelpers.extends({}, n, { fill: "forwards" }));
      } catch (e) {
        return (r("WAWebNoop")(e), null);
      }
      return w(o) ? o : null;
    }
    function w(e) {
      return e != null && typeof e == "object";
    }
    function A(e, t) {
      var n,
        r = t[t.length - 1];
      if (r != null) {
        for (var o of Object.keys(r)) {
          var a = J(r, o);
          !F.has(o) && a != null && e.style.setProperty(N(o), a);
        }
        $(e, (n = J(r, "transform")) != null ? n : void 0);
      }
    }
    var F = new Set(["offset", "easing", "composite"]);
    function O(t, r, a) {
      return r === "finish"
        ? j(t, a === !0)
        : r === "stop"
          ? K(t, a === !0)
          : r === "scroll"
            ? X(t, o("WAWebWaapiAnimateOptions").optionsObject(a))
            : o("WAWebWaapiAnimatePresets").isWaapiPreset(r)
              ? B(t, r, o("WAWebWaapiAnimateOptions").optionsObject(a))
              : (e || (e = n("Promise"))).resolve(t);
    }
    function B(t, r, o) {
      var a = { duration: o.duration, easing: o.easing },
        i = ae(t),
        l = i.map(function (e, t) {
          return b(e, o.queue, function () {
            return W(e, r, a, o, t, i.length);
          });
        });
      return (e || (e = n("Promise"))).all(l).then(function () {
        return t;
      });
    }
    function W(t, r, a, i, l, s) {
      var u;
      (r === "slideUp" || r === "slideDown") && te(t, q);
      var c = o("WAWebWaapiAnimatePresets").buildPreset(r, t, a);
      if (c == null) return (e || (e = n("Promise"))).resolve();
      P(t, c.staticStyles);
      var d = [{ keyframes: c.keyframes, easing: c.easing }].concat(
          (u = c.additionalAnimations) != null ? u : [],
        ),
        m = new Set();
      for (var p of d) for (var _ of re(p.keyframes)) m.add(_);
      r !== "slideUp" && r !== "slideDown" && te(t, m);
      var f = [];
      for (var g of d) {
        var h,
          y,
          C = U(c.duration, i.drag === !0, l, s),
          b =
            ((h = i.delay) != null ? h : 0) +
            l * ((y = i.stagger) != null ? y : 0),
          v = M(t, g.keyframes, { duration: C, delay: b, easing: g.easing });
        if (v == null) {
          c.onComplete == null && A(t, g.keyframes);
          continue;
        }
        (Y(t, v, re(g.keyframes), g.keyframes),
          f.push({ animation: v, endTime: b + C }));
      }
      return V(t, f, c.onComplete);
    }
    var q = new Set([
      "height",
      "marginTop",
      "marginBottom",
      "paddingTop",
      "paddingBottom",
    ]);
    function U(e, t, n, r) {
      return !t || r === 0 ? e : Math.max(e * ((n + 1) / r), e * 0.75, 200);
    }
    function V(e, t, n) {
      return H.apply(this, arguments);
    }
    function H() {
      return (
        (H = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r, o) {
          var a =
            o == null
              ? null
              : {
                  completed: !1,
                  onComplete: function (n) {
                    return o(t, n);
                  },
                };
          if (a != null)
            for (var i of r) {
              var l = i.animation;
              f.set(l, a);
            }
          var s = yield (e || (e = n("Promise"))).all(
            r.map(function (e) {
              var n = e.animation,
                r = e.endTime;
              return G(t, n, r, o != null);
            }),
          );
          a != null &&
            !a.completed &&
            ((a.completed = !0), a.onComplete(s.every(Boolean)));
        })),
        H.apply(this, arguments)
      );
    }
    function G(e, t, n, r) {
      return z.apply(this, arguments);
    }
    function z() {
      return (
        (z = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, o) {
            try {
              return (
                yield T(e, t, n),
                o ? (t.cancel(), Z(e, t)) : x(e, t, !0) && Z(e, t),
                !0
              );
            } catch (n) {
              return (r("WAWebNoop")(n), Z(e, t), !1);
            }
          },
        )),
        z.apply(this, arguments)
      );
    }
    function j(t, a) {
      (a && Q(t),
        R(),
        ee(t, function (e, t) {
          return t.finish();
        }));
      for (var i of ae(t)) o("WAWebWaapiAnimateScroll").cancelScrollTweens(i);
      return new (e || (e = n("Promise")))(r("WAWebNoop"));
    }
    function K(t, r) {
      (r && Q(t),
        R(),
        ee(t, function (e, t) {
          (ne(t), x(e, t));
        }));
      for (var a of ae(t)) o("WAWebWaapiAnimateScroll").cancelScrollTweens(a);
      return (e || (e = n("Promise"))).resolve(t);
    }
    function Q(e) {
      for (var t of ae(e)) {
        var n = _.get(t),
          r = n == null ? void 0 : n.get("");
        r != null &&
          ((r.generation += 1),
          n == null || n.delete(""),
          (n == null ? void 0 : n.size) === 0 && _.delete(t));
      }
    }
    function X(t, r) {
      var a,
        i,
        l,
        u,
        c = Array.isArray(t) ? t[0] : t,
        d = (a = r.container) != null ? a : document.scrollingElement;
      if (c == null || !o("WAWebUimUtils").isCrossWindowHTMLElement(d))
        return (e || (e = n("Promise"))).resolve(t);
      var m = (i = r.axis) != null ? i : "y",
        p = o("WAWebWaapiAnimateScroll").computeScrollTarget({
          axis: m,
          container: d,
          node: c,
          offset: (l = r.offset) != null ? l : 0,
        });
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
    function Y(e, t, n, r) {
      var o,
        a = (o = d.get(e)) != null ? o : new Set();
      (a.add(t), d.set(e, a), m.set(t, n));
      var i = J(r[r.length - 1], "transform");
      typeof i == "string" && p.set(t, i);
    }
    function J(e, t) {
      var n;
      if (e == null) return null;
      var r =
        (n = Object.getOwnPropertyDescriptor(e, t)) == null ? void 0 : n.value;
      return typeof r == "string" ? r : null;
    }
    function Z(e, t) {
      var n = d.get(e);
      n != null && (n.delete(t), n.size === 0 && d.delete(e));
    }
    function ee(e, t) {
      for (var n of ae(e)) {
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
    function te(e, t) {
      var n = d.get(e);
      if (n != null)
        for (var r of Array.from(n)) {
          var o = m.get(r);
          (o == null || oe(o, t)) && (ne(r), x(e, r));
        }
    }
    function ne(e) {
      var t = f.get(e);
      t == null || t.completed || ((t.completed = !0), t.onComplete(!1));
    }
    function re(e) {
      var t = new Set();
      for (var n of e)
        for (var r of Object.keys(n))
          r !== "offset" && r !== "easing" && r !== "composite" && t.add(r);
      return t;
    }
    function oe(e, t) {
      var n = e.size <= t.size ? [e, t] : [t, e],
        r = n[0],
        o = n[1];
      for (var a of r) if (o.has(a)) return !0;
      return !1;
    }
    function ae(e) {
      return Array.isArray(e) ? e : [e];
    }
    l.default = g;
  },
  98,
);
