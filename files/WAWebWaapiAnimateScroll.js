__d(
  "WAWebWaapiAnimateScroll",
  ["Promise", "WAWebWaapiAnimateVisibility"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = new WeakMap();
    function u(e) {
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
    function c(t, r, a, i, l, s) {
      m(r);
      var u = a === "x" ? r.scrollLeft : r.scrollTop,
        c = i - u;
      return l <= 0 ||
        c === 0 ||
        o("WAWebWaapiAnimateVisibility").isInHiddenDocument(r)
        ? (_(r, a, i), (e || (e = n("Promise"))).resolve())
        : new (e || (e = n("Promise")))(function (e) {
            var n = null,
              d = !1,
              m = function () {
                ((d = !0), h(), g(t, m), g(r, m), e());
              };
            (f(t, m), r !== t && f(r, m));
            var h = o("WAWebWaapiAnimateVisibility").settleWhenOverdue(
                r,
                l,
                function () {
                  try {
                    _(r, a, i);
                  } finally {
                    m();
                  }
                },
              ),
              y = function (t) {
                if (!d) {
                  n = n != null ? n : t;
                  var e = Math.min((t - n) / l, 1);
                  (_(r, a, u + c * s(e)), e < 1 ? p(r, y) : m());
                }
              };
            p(r, y);
          });
    }
    function d(t, r, a, i) {
      return (r <= 0 && a <= 0) ||
        o("WAWebWaapiAnimateVisibility").isInHiddenDocument(t)
        ? (i(), (e || (e = n("Promise"))).resolve())
        : new (e || (e = n("Promise")))(function (e) {
            var n = null,
              l = !1,
              s = function () {
                ((l = !0), u(), g(t, s), e());
              };
            f(t, s);
            var u = o("WAWebWaapiAnimateVisibility").settleWhenOverdue(
                t,
                a + r,
                function () {
                  try {
                    i();
                  } finally {
                    s();
                  }
                },
              ),
              c = function (o) {
                if (!l) {
                  n = n != null ? n : o;
                  var e = o - n - a;
                  (e >= 0 && i(), e < r ? p(t, c) : s());
                }
              };
            p(t, c);
          });
    }
    function m(e) {
      var t = s.get(e);
      t != null &&
        Array.from(t).forEach(function (e) {
          return e();
        });
    }
    function p(e, t) {
      var n;
      ((n = e.ownerDocument.defaultView) != null
        ? n
        : window
      ).requestAnimationFrame(t);
    }
    function _(e, t, n) {
      t === "x" ? (e.scrollLeft = n) : (e.scrollTop = n);
    }
    function f(e, t) {
      var n,
        r = (n = s.get(e)) != null ? n : new Set();
      (r.add(t), s.set(e, r));
    }
    function g(e, t) {
      var n = s.get(e);
      n != null && (n.delete(t), n.size === 0 && s.delete(e));
    }
    ((l.computeScrollTarget = u),
      (l.tweenScroll = c),
      (l.runProgressTween = d),
      (l.cancelScrollTweens = m));
  },
  98,
);
