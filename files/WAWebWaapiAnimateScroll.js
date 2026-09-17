__d(
  "WAWebWaapiAnimateScroll",
  ["Promise"],
  function (t, n, r, o, a, i) {
    var e,
      l = new WeakMap();
    function s(e, t, n, r) {
      var o = e.getBoundingClientRect(),
        a = t.getBoundingClientRect();
      return n === "x"
        ? e.scrollLeft + (a.left - o.left) + r
        : e.scrollTop + (a.top - o.top) + r;
    }
    function u(t, r, o, a, i, l) {
      d(r);
      var s = o === "x" ? r.scrollLeft : r.scrollTop,
        u = a - s;
      return i <= 0 || u === 0
        ? (m(r, o, a), (e || (e = n("Promise"))).resolve())
        : new (e || (e = n("Promise")))(function (e) {
            var n = null,
              a = !1,
              c = function () {
                ((a = !0), _(t, c), _(r, c), e());
              };
            (p(t, c), r !== t && p(r, c));
            var d = function (f) {
              if (!a) {
                n = n != null ? n : f;
                var p = Math.min((f - n) / i, 1);
                (m(r, o, s + u * l(p)),
                  p < 1
                    ? window.requestAnimationFrame(d)
                    : (_(t, c), _(r, c), e()));
              }
            };
            window.requestAnimationFrame(d);
          });
    }
    function c(t, r, o, a) {
      return r <= 0 && o <= 0
        ? (a(), (e || (e = n("Promise"))).resolve())
        : new (e || (e = n("Promise")))(function (e) {
            var n = null,
              i = !1,
              l = function () {
                ((i = !0), _(t, l), e());
              };
            p(t, l);
            var s = function (c) {
              if (!i) {
                n = n != null ? n : c;
                var u = c - n - o;
                (u >= 0 && a(),
                  u < r ? window.requestAnimationFrame(s) : (_(t, l), e()));
              }
            };
            window.requestAnimationFrame(s);
          });
    }
    function d(e) {
      var t = l.get(e);
      t != null &&
        Array.from(t).forEach(function (e) {
          return e();
        });
    }
    function m(e, t, n) {
      t === "x" ? (e.scrollLeft = n) : (e.scrollTop = n);
    }
    function p(e, t) {
      var n,
        r = (n = l.get(e)) != null ? n : new Set();
      (r.add(t), l.set(e, r));
    }
    function _(e, t) {
      var n = l.get(e);
      n != null && (n.delete(t), n.size === 0 && l.delete(e));
    }
    ((i.computeScrollTarget = s),
      (i.tweenScroll = u),
      (i.runProgressTween = c),
      (i.cancelScrollTweens = d));
  },
  66,
);
