__d(
  "WAWebWaapiAnimateScroll",
  ["Promise"],
  function (t, n, r, o, a, i) {
    var e,
      l = new WeakMap();
    function s(e) {
      var t = e.axis,
        n = e.container,
        r = e.node,
        o = e.offset,
        a = n.getBoundingClientRect(),
        i = r.getBoundingClientRect();
      return t === "x"
        ? n.scrollLeft + (i.left - a.left) + o
        : n.scrollTop + (i.top - a.top) + o;
    }
    function u(e, t) {
      return self.setTimeout(t, e + c);
    }
    var c = 100;
    function d(t, r, o, a, i, l) {
      p(r);
      var s = o === "x" ? r.scrollLeft : r.scrollTop,
        c = a - s;
      return i <= 0 || c === 0
        ? (f(r, o, a), (e || (e = n("Promise"))).resolve())
        : new (e || (e = n("Promise")))(function (e) {
            var n = null,
              d = !1,
              m = function () {
                ((d = !0), self.clearTimeout(p), h(t, m), h(r, m), e());
              };
            (g(t, m), r !== t && g(r, m));
            var p = u(i, function () {
                (f(r, o, a), m());
              }),
              y = function (t) {
                if (!d) {
                  n = n != null ? n : t;
                  var e = Math.min((t - n) / i, 1);
                  (f(r, o, s + c * l(e)), e < 1 ? _(r, y) : m());
                }
              };
            _(r, y);
          });
    }
    function m(t, r, o, a) {
      return r <= 0 && o <= 0
        ? (a(), (e || (e = n("Promise"))).resolve())
        : new (e || (e = n("Promise")))(function (e) {
            var n = null,
              i = !1,
              l = function () {
                ((i = !0), self.clearTimeout(s), h(t, l), e());
              };
            g(t, l);
            var s = u(o + r, function () {
                (a(), l());
              }),
              c = function (s) {
                if (!i) {
                  n = n != null ? n : s;
                  var e = s - n - o;
                  (e >= 0 && a(), e < r ? _(t, c) : l());
                }
              };
            _(t, c);
          });
    }
    function p(e) {
      var t = l.get(e);
      t != null &&
        Array.from(t).forEach(function (e) {
          return e();
        });
    }
    function _(e, t) {
      var n;
      ((n = e.ownerDocument.defaultView) != null
        ? n
        : window
      ).requestAnimationFrame(t);
    }
    function f(e, t, n) {
      t === "x" ? (e.scrollLeft = n) : (e.scrollTop = n);
    }
    function g(e, t) {
      var n,
        r = (n = l.get(e)) != null ? n : new Set();
      (r.add(t), l.set(e, r));
    }
    function h(e, t) {
      var n = l.get(e);
      n != null && (n.delete(t), n.size === 0 && l.delete(e));
    }
    ((i.computeScrollTarget = s),
      (i.settleWhenOverdue = u),
      (i.tweenScroll = d),
      (i.runProgressTween = m),
      (i.cancelScrollTweens = p));
  },
  66,
);
