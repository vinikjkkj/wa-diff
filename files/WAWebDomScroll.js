__d(
  "WAWebDomScroll",
  ["Promise", "WATypeUtils", "WAWebVelocityAnimate", "err", "getScrollParent"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = new WeakMap();
    function u(e, t, n) {
      var r = { node: t };
      return (
        s.set(e, r),
        n.finally(function () {
          s.get(e) === r && s.delete(e);
        })
      );
    }
    function c(e) {
      var t = s.get(e);
      t != null && (s.delete(e), r("WAWebVelocityAnimate")(t.node, "stop"));
    }
    function d(e, t, n) {
      if (
        (t === void 0 && (t = !0),
        e.scrollIntoViewIfNeeded != null &&
          o("WATypeUtils").isFunction(e.scrollIntoViewIfNeeded))
      )
        return e.scrollIntoViewIfNeeded(t);
      var r = h(n || e.parentNode),
        a = window.getComputedStyle(r, null),
        i = parseInt(a.getPropertyValue("border-top-width"), 10),
        l = e.offsetTop - r.offsetTop < r.scrollTop,
        s =
          e.offsetTop - r.offsetTop + e.clientHeight - i >
          r.scrollTop + r.clientHeight,
        u = l && !s;
      return (
        (l || s) &&
          t &&
          (r.scrollTop =
            e.offsetTop -
            r.offsetTop -
            r.clientHeight / 2 -
            i +
            e.clientHeight / 2),
        (l || s) && !t && e.scrollIntoView(u),
        !(l || s)
      );
    }
    function m(e, t, n) {
      t === void 0 && (t = !0);
      var r = h(n || e.parentNode),
        o = window.getComputedStyle(r, null),
        a = parseInt(o.getPropertyValue("border-top-width"), 10),
        i = e.offsetTop - r.offsetTop < r.scrollTop,
        l =
          e.offsetTop - r.offsetTop + e.clientHeight - a >
          r.scrollTop + r.clientHeight,
        s = i && !l;
      return (
        t
          ? (r.scrollTop =
              e.offsetTop -
              r.offsetTop -
              r.clientHeight / 2 -
              a +
              e.clientHeight / 2)
          : e.scrollIntoView(s),
        !(i || l)
      );
    }
    function p(e, t) {
      var n = e.getBoundingClientRect();
      return (
        n.top >= 0 &&
        n.left >= 0 &&
        n.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        n.right <=
          (window.innerWidth || document.documentElement.clientWidth) &&
        !_(n, t)
      );
    }
    function _(e, t) {
      var n = g(t);
      return n > 0 && e.top < t.getBoundingClientRect().top + n;
    }
    function f(t, o, a) {
      a === void 0 && (a = {});
      var i = h(o || t.offsetParent),
        l = r("getScrollParent")(t, !1),
        s = i === l,
        d = a.pos || "center",
        m = a.duration != null && a.duration !== 0 ? a.duration : 1e3,
        _ = a.offset || 0,
        f = s ? t.offsetTop : i.offsetTop + t.offsetTop;
      if (a.scrollIfNeeded === !0 && p(t, l))
        return (e || (e = n("Promise"))).resolve();
      var y = !!a.animate;
      switch (d) {
        case "top":
          return (
            (l.scrollTop = f + _ - g(l)),
            (e || (e = n("Promise"))).resolve()
          );
        case "bottom":
          return (
            (l.scrollTop = f + t.clientHeight - l.clientHeight),
            (e || (e = n("Promise"))).resolve()
          );
        case "center":
          if (y) {
            var C = s ? t : i;
            (c(l),
              r("WAWebVelocityAnimate")(C, "stop"),
              r("WAWebVelocityAnimate")(l, "stop"));
            var b = (t.clientHeight - l.clientHeight - g(l)) / 2;
            return (
              s || (b += t.offsetTop),
              u(
                l,
                C,
                r("WAWebVelocityAnimate")(C, "scroll", {
                  duration: m,
                  container: l,
                  offset: b,
                  easing: a.easing,
                }),
              )
            );
          }
          return (
            (l.scrollTop =
              f + t.clientHeight / 2 - (l.clientHeight + g(l)) / 2),
            (e || (e = n("Promise"))).resolve()
          );
        case "offset":
          return y
            ? (c(l),
              r("WAWebVelocityAnimate")(t, "stop"),
              r("WAWebVelocityAnimate")(l, "stop"),
              u(
                l,
                t,
                r("WAWebVelocityAnimate")(t, "scroll", {
                  duration: m,
                  container: l,
                  offset: -_,
                  easing: a.easing,
                }),
              ))
            : ((l.scrollTop = f - _), (e || (e = n("Promise"))).resolve());
      }
      return (e || (e = n("Promise"))).resolve();
    }
    function g(e) {
      var t = parseFloat(
        window.getComputedStyle(e).getPropertyValue("scroll-padding-top"),
      );
      return Number.isNaN(t) ? 0 : t;
    }
    function h(e) {
      if (e != null && e.nodeType === Node.ELEMENT_NODE) return e;
      throw r("err")(
        "utils:DOM parent not defined or is not a valid HTMLElement",
      );
    }
    ((l.stopAnimatedScroll = c),
      (l.scrollIntoViewIfNeeded = d),
      (l.scrollIntoView = m),
      (l.scrollAt = f),
      (l.getScrollPaddingTop = g));
  },
  98,
);
