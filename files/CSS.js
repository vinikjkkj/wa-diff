__d(
  "CSS",
  ["$", "CSSCore"],
  function (t, n, r, o, a, i, l) {
    var e = typeof window != "undefined" ? window.CSS : null,
      s = "hidden_elem",
      u = e && e.supports.bind(e);
    function c(e, t) {
      return ((r("$").fromIDOrElement(e).className = t || ""), e);
    }
    function d(e, t) {
      return e instanceof Document || e instanceof Text
        ? !1
        : o("CSSCore").hasClass(r("$").fromIDOrElement(e), t);
    }
    function m(e, t) {
      return e instanceof Document || e instanceof Text
        ? !1
        : o("CSSCore").matchesSelector(r("$").fromIDOrElement(e), t);
    }
    function p(e, t) {
      return o("CSSCore").addClass(r("$").fromIDOrElement(e), t);
    }
    function _(e, t) {
      return o("CSSCore").removeClass(r("$").fromIDOrElement(e), t);
    }
    function f(e, t, n) {
      return o("CSSCore").conditionClass(r("$").fromIDOrElement(e), t, !!n);
    }
    function g(e, t) {
      return f(e, t, !d(e, t));
    }
    function h(e) {
      return !d(e, s);
    }
    function y(e) {
      return p(e, s);
    }
    function C(e) {
      return _(e, s);
    }
    function b(e) {
      return g(e, s);
    }
    function v(e, t) {
      return f(e, s, !t);
    }
    ((l.supports = u),
      (l.setClass = c),
      (l.hasClass = d),
      (l.matchesSelector = m),
      (l.addClass = p),
      (l.removeClass = _),
      (l.conditionClass = f),
      (l.toggleClass = g),
      (l.shown = h),
      (l.hide = y),
      (l.show = C),
      (l.toggle = b),
      (l.conditionShow = v));
  },
  98,
);
