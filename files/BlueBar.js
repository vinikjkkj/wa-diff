__d(
  "BlueBar",
  ["csx", "CSS", "DOMQuery", "Style", "ge"],
  function (t, n, r, o, a, i, l, s) {
    var e = document,
      u = {};
    function c(t) {
      return o("DOMQuery").scry(e, t)[0];
    }
    function d(e, t) {
      return u[e] ? u[e] : (u[e] = c(t));
    }
    function m() {
      ((e = r("ge")("blueBarDOMInspector") || document), (u = {}));
    }
    function p() {
      var e = g();
      return e
        ? o("CSS").matchesSelector(e, "._5rmj") || r("Style").isFixed(e)
        : !1;
    }
    function _() {
      return d("bar", "div._1s4v");
    }
    function f() {
      return d("navRoot", "div._cx4") || _();
    }
    function g() {
      return d("maybeFixedRoot", "div._26aw");
    }
    function h() {
      return d("maybeFixedRootLoggedOut", "div._1pmx");
    }
    function y() {
      return d("maybeFixedRootLogin", "div._53jh");
    }
    (m(),
      (l.hasFixedBlueBar = p),
      (l.getBar = _),
      (l.getNavRoot = f),
      (l.getMaybeFixedRoot = g),
      (l.getLoggedOutRoot = h),
      (l.getNewLoggedOutRoot = y));
  },
  98,
);
