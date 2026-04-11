__d(
  "WAWebDomScroll",
  ["Promise", "WATypeUtils", "WAWebVelocityAnimate", "err", "getScrollParent"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e, t, n) {
      if (
        (t === void 0 && (t = !0),
        e.scrollIntoViewIfNeeded &&
          o("WATypeUtils").isFunction(e.scrollIntoViewIfNeeded))
      )
        return e.scrollIntoViewIfNeeded(t);
      var r = m(n || e.parentNode),
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
    function u(e, t, n) {
      t === void 0 && (t = !0);
      var r = m(n || e.parentNode),
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
    function c(e) {
      var t = e.getBoundingClientRect();
      return (
        t.top >= 0 &&
        t.left >= 0 &&
        t.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        t.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
    function d(t, o, a) {
      a === void 0 && (a = {});
      var i = m(o || t.offsetParent),
        l = r("getScrollParent")(t, !1),
        s = i === l,
        u = a.pos || "center",
        d = a.duration != null && a.duration !== 0 ? a.duration : 1e3,
        p = a.offset || 0,
        _ = s ? t.offsetTop : i.offsetTop + t.offsetTop;
      if (a.scrollIfNeeded === !0 && c(t))
        return (e || (e = n("Promise"))).resolve();
      var f = !!a.animate;
      switch (u) {
        case "top":
          return ((l.scrollTop = _ + p), (e || (e = n("Promise"))).resolve());
        case "bottom":
          return (
            (l.scrollTop = _ + t.clientHeight - l.clientHeight),
            (e || (e = n("Promise"))).resolve()
          );
        case "center":
          if (f) {
            var g = s ? t : i;
            (r("WAWebVelocityAnimate")(g, "stop"),
              r("WAWebVelocityAnimate")(l, "stop"));
            var h = (t.clientHeight - l.clientHeight) / 2;
            return (
              s || (h += t.offsetTop),
              r("WAWebVelocityAnimate")(g, "scroll", {
                duration: d,
                container: l,
                offset: h,
                easing: a.easing,
              })
            );
          }
          return (
            (l.scrollTop = _ + t.clientHeight / 2 - l.clientHeight / 2),
            (e || (e = n("Promise"))).resolve()
          );
        case "offset":
          return f
            ? (r("WAWebVelocityAnimate")(t, "stop"),
              r("WAWebVelocityAnimate")(l, "stop"),
              r("WAWebVelocityAnimate")(t, "scroll", {
                duration: d,
                container: l,
                offset: -p,
                easing: a.easing,
              }))
            : ((l.scrollTop = _ - p), (e || (e = n("Promise"))).resolve());
      }
      return (e || (e = n("Promise"))).resolve();
    }
    function m(e) {
      if (e != null && e.nodeType === Node.ELEMENT_NODE) return e;
      throw r("err")(
        "utils:DOM parent not defined or is not a valid HTMLElement",
      );
    }
    ((l.scrollIntoViewIfNeeded = s), (l.scrollIntoView = u), (l.scrollAt = d));
  },
  98,
);
