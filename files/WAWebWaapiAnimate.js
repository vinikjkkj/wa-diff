__d(
  "WAWebWaapiAnimate",
  [
    "WAWebNoop",
    "WAWebUimUtils",
    "WAWebWaapiAnimateEasing",
    "WAWebWaapiAnimateKeyframes",
    "WAWebWaapiAnimateMerge",
    "WAWebWaapiAnimateOptions",
    "WAWebWaapiAnimatePresets",
    "WAWebWaapiAnimateScroll",
    "WAWebWaapiAnimateVisibility",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 400,
      s = new Map(),
      u = !1,
      c = new WeakMap(),
      d = new WeakMap(),
      m = new WeakMap(),
      p = new WeakMap(),
      _ = new WeakMap();
    async function f(e, t, n) {
      if (e) {
        var r = t;
        return typeof r == "string"
          ? M(e, r, n)
          : (r != null &&
              typeof r == "object" &&
              !Array.isArray(r) &&
              (await g(e, r, o("WAWebWaapiAnimateOptions").optionsObject(n))),
            e);
      }
    }
    function g(t, n, a) {
      var i,
        l,
        s,
        u = o("WAWebWaapiAnimateKeyframes").buildAnimationKeyframes(n),
        c = u.keyframes,
        d = u.staticStyles,
        m = (i = a.duration) != null ? i : e,
        p = (l = a.delay) != null ? l : 0,
        _ = (s = a.stagger) != null ? s : 0,
        f = o("WAWebWaapiAnimateEasing").resolveCssEasing(a.easing),
        g = a.progress,
        y = Z(t).map(function (e, t) {
          var n = p + t * _;
          return h(
            e,
            { keyframes: c, duration: m, delay: n, easing: f },
            d,
            g,
            a.queue,
          );
        });
      return Promise.all(y).then(r("WAWebNoop"));
    }
    function h(e, t, n, r, o) {
      return y(e, o, function () {
        return C(e, t, n, r);
      });
    }
    function y(e, t, n) {
      var r, o;
      if (t === !1) return n();
      var a = t != null ? t : "",
        i = (r = p.get(e)) != null ? r : new Map(),
        l =
          (o = i.get(a)) != null
            ? o
            : { generation: 0, tail: Promise.resolve() },
        s = l.generation,
        u = function () {
          return l.generation === s ? n() : Promise.resolve();
        },
        c = l.tail.then(u, u);
      ((l.tail = c), i.set(a, l), p.set(e, i));
      var d = function () {
        i.get(a) === l &&
          l.tail === c &&
          (i.delete(a), i.size === 0 && p.delete(e));
      };
      return (c.then(d, d), c);
    }
    function C(e, t, n, r) {
      return new Promise(function (o) {
        var a,
          i = (a = s.get(e)) != null ? a : [];
        (i.push({ entry: t, staticStyles: n, progress: r, resolve: o }),
          s.set(e, i),
          b());
      });
    }
    function b() {
      u || ((u = !0), Promise.resolve().then(v));
    }
    function v() {
      u = !1;
      for (var e of Array.from(s.keys())) {
        var t = s.get(e);
        if ((s.delete(e), t != null && t.length > 0))
          try {
            S(e, t);
          } catch (e) {
            r("WAWebNoop")(e);
          }
      }
    }
    function S(e, t) {
      var n = t.map(function () {
        return [];
      });
      try {
        R(e, t, n);
      } finally {
        t.forEach(function (e, t) {
          Promise.all(n[t]).then(e.resolve, e.resolve);
        });
      }
    }
    function R(e, t, n) {
      for (var a of t) T(e, a.staticStyles);
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
          var u = Y(s.keyframes);
          Q(e, u);
          var c = x(e, s.keyframes, {
            duration: s.duration,
            delay: s.delay,
            easing: s.easing,
            fill: s.fill,
          });
          if (c == null) {
            P(e, s.keyframes);
            continue;
          }
          G(e, c, u, s.keyframes);
          var d = L(e, c, s.delay + s.duration);
          for (var m of s.entryIndices) n[i[m]].push(d);
        } catch (t) {
          r("WAWebNoop")(t);
          try {
            P(e, s.keyframes);
          } catch (e) {
            r("WAWebNoop")(e);
          }
        }
    }
    async function L(e, t, n) {
      try {
        (await E(e, t, n), k(e, t, !0) && j(e, t));
      } catch (n) {
        (r("WAWebNoop")(n), j(e, t));
      }
    }
    async function E(e, t, n) {
      if (o("WAWebWaapiAnimateVisibility").isInHiddenDocument(e)) {
        (t.finish(), await t.finished);
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
        await t.finished;
      } finally {
        r();
      }
    }
    function k(e, t, n) {
      n === void 0 && (n = !1);
      try {
        return (t.commitStyles(), n && I(e, m.get(t)), t.cancel(), !0);
      } catch (e) {
        return (r("WAWebNoop")(e), !1);
      }
    }
    function I(e, t) {
      if (!(t == null || !t.includes("translateZ(0px)"))) {
        var n = t.replace(/(?:^|\s)translateZ\(0px\)(?=\s|$)/g, "").trim();
        n === ""
          ? e.style.removeProperty("transform")
          : (e.style.transform = n);
      }
    }
    function T(e, t) {
      for (var n of Object.keys(t)) e.style.setProperty(D(n), t[n]);
    }
    function D(e) {
      return e.replace(/[A-Z]/g, function (e) {
        return "-" + e.toLowerCase();
      });
    }
    function x(e, t, n) {
      var o;
      try {
        o = e.animate(t, n);
      } catch (e) {
        return (r("WAWebNoop")(e), null);
      }
      return $(o) ? o : null;
    }
    function $(e) {
      return e != null && typeof e == "object";
    }
    function P(e, t) {
      var n,
        r = t[t.length - 1];
      if (r != null) {
        for (var o of Object.keys(r)) {
          var a = z(r, o);
          !N.has(o) && a != null && e.style.setProperty(D(o), a);
        }
        I(e, (n = z(r, "transform")) != null ? n : void 0);
      }
    }
    var N = new Set(["offset", "easing", "composite"]);
    function M(e, t, n) {
      return t === "finish"
        ? q(e, n === !0)
        : t === "stop"
          ? U(e, n === !0)
          : t === "scroll"
            ? H(e, o("WAWebWaapiAnimateOptions").optionsObject(n))
            : o("WAWebWaapiAnimatePresets").isWaapiPreset(t)
              ? w(e, t, o("WAWebWaapiAnimateOptions").optionsObject(n))
              : Promise.resolve(e);
    }
    function w(e, t, n) {
      var r = { duration: n.duration, easing: n.easing },
        o = Z(e),
        a = o.map(function (e, a) {
          return y(e, n.queue, function () {
            return A(e, t, r, n, a, o.length);
          });
        });
      return Promise.all(a).then(function () {
        return e;
      });
    }
    function A(e, t, n, r, a, i) {
      var l;
      (t === "slideUp" || t === "slideDown") && Q(e, F);
      var s = o("WAWebWaapiAnimatePresets").buildPreset(t, e, n);
      if (s == null) return Promise.resolve();
      T(e, s.staticStyles);
      var u = [{ keyframes: s.keyframes, easing: s.easing }].concat(
          (l = s.additionalAnimations) != null ? l : [],
        ),
        c = new Set();
      for (var d of u) for (var m of Y(d.keyframes)) c.add(m);
      t !== "slideUp" && t !== "slideDown" && Q(e, c);
      var p = [];
      for (var _ of u) {
        var f,
          g,
          h = O(s.duration, r.drag === !0, a, i),
          y =
            ((f = r.delay) != null ? f : 0) +
            a * ((g = r.stagger) != null ? g : 0),
          C = x(e, _.keyframes, {
            duration: h,
            delay: y,
            easing: _.easing,
            fill: "forwards",
          });
        if (C == null) {
          s.onComplete == null && P(e, _.keyframes);
          continue;
        }
        (G(e, C, Y(_.keyframes), _.keyframes),
          p.push({ animation: C, endTime: y + h }));
      }
      return B(e, p, s.onComplete);
    }
    var F = new Set([
      "height",
      "marginTop",
      "marginBottom",
      "paddingTop",
      "paddingBottom",
    ]);
    function O(e, t, n, r) {
      return !t || r === 0 ? e : Math.max(e * ((n + 1) / r), e * 0.75, 200);
    }
    async function B(e, t, n) {
      var r =
        n == null
          ? null
          : {
              completed: !1,
              onComplete: function (r) {
                return n(e, r);
              },
            };
      if (r != null)
        for (var o of t) {
          var a = o.animation;
          _.set(a, r);
        }
      var i = await Promise.all(
        t.map(function (t) {
          var r = t.animation,
            o = t.endTime;
          return W(e, r, o, n != null);
        }),
      );
      r != null &&
        !r.completed &&
        ((r.completed = !0), r.onComplete(i.every(Boolean)));
    }
    async function W(e, t, n, o) {
      try {
        return (
          await E(e, t, n),
          o ? (t.cancel(), j(e, t)) : k(e, t, !0) && j(e, t),
          !0
        );
      } catch (n) {
        return (r("WAWebNoop")(n), j(e, t), !1);
      }
    }
    function q(e, t) {
      (t && V(e),
        v(),
        K(e, function (e, t) {
          return t.finish();
        }));
      for (var n of Z(e)) o("WAWebWaapiAnimateScroll").cancelScrollTweens(n);
      return new Promise(r("WAWebNoop"));
    }
    function U(e, t) {
      (t && V(e),
        v(),
        K(e, function (e, t) {
          (X(t), k(e, t));
        }));
      for (var n of Z(e)) o("WAWebWaapiAnimateScroll").cancelScrollTweens(n);
      return Promise.resolve(e);
    }
    function V(e) {
      for (var t of Z(e)) {
        var n = p.get(t),
          r = n == null ? void 0 : n.get("");
        r != null &&
          ((r.generation += 1),
          n == null || n.delete(""),
          (n == null ? void 0 : n.size) === 0 && p.delete(t));
      }
    }
    function H(t, n) {
      var r,
        a,
        i,
        l,
        s = Array.isArray(t) ? t[0] : t,
        u = (r = n.container) != null ? r : document.scrollingElement;
      if (s == null || !o("WAWebUimUtils").isCrossWindowHTMLElement(u))
        return Promise.resolve(t);
      var c = (a = n.axis) != null ? a : "y",
        d = o("WAWebWaapiAnimateScroll").computeScrollTarget({
          axis: c,
          container: u,
          node: s,
          offset: (i = n.offset) != null ? i : 0,
        });
      return o("WAWebWaapiAnimateScroll")
        .tweenScroll(
          s,
          u,
          c,
          d,
          (l = n.duration) != null ? l : e,
          o("WAWebWaapiAnimateEasing").resolveEasingFn(n.easing),
        )
        .then(function () {
          return t;
        });
    }
    function G(e, t, n, r) {
      var o,
        a = (o = c.get(e)) != null ? o : new Set();
      (a.add(t), c.set(e, a), d.set(t, n));
      var i = z(r[r.length - 1], "transform");
      typeof i == "string" && m.set(t, i);
    }
    function z(e, t) {
      var n;
      if (e == null) return null;
      var r =
        (n = Object.getOwnPropertyDescriptor(e, t)) == null ? void 0 : n.value;
      return typeof r == "string" ? r : null;
    }
    function j(e, t) {
      var n = c.get(e);
      n != null && (n.delete(t), n.size === 0 && c.delete(e));
    }
    function K(e, t) {
      for (var n of Z(e)) {
        var o = c.get(n);
        if (o != null)
          for (var a of Array.from(o))
            try {
              t(n, a);
            } catch (e) {
              r("WAWebNoop")(e);
            }
      }
    }
    function Q(e, t) {
      var n = c.get(e);
      if (n != null)
        for (var r of Array.from(n)) {
          var o = d.get(r);
          (o == null || J(o, t)) && (X(r), k(e, r));
        }
    }
    function X(e) {
      var t = _.get(e);
      t == null || t.completed || ((t.completed = !0), t.onComplete(!1));
    }
    function Y(e) {
      var t = new Set();
      for (var n of e)
        for (var r of Object.keys(n))
          r !== "offset" && r !== "easing" && r !== "composite" && t.add(r);
      return t;
    }
    function J(e, t) {
      var n = e.size <= t.size ? [e, t] : [t, e],
        r = n[0],
        o = n[1];
      for (var a of r) if (o.has(a)) return !0;
      return !1;
    }
    function Z(e) {
      return Array.isArray(e) ? e : [e];
    }
    l.default = f;
  },
  98,
);
