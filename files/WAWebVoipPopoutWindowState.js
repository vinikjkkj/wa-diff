__d(
  "WAWebVoipPopoutWindowState",
  ["WAWebTypedEventEmitter"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new (r("WAWebTypedEventEmitter"))(),
      s = !1,
      u = null,
      c = !1;
    function d() {
      return s;
    }
    function m(e) {
      s = e;
    }
    function p() {
      return c;
    }
    function _(e) {
      c = e;
    }
    function f() {
      if (u == null || !s) return !1;
      try {
        return !(u.document.hidden || u.innerWidth <= 0 || u.innerHeight <= 0);
      } catch (e) {
        return !1;
      }
    }
    function g() {
      return u;
    }
    function h(e) {
      u = e;
    }
    ((l.WAWebVoipUiPopoutWindowEventEmitter = e),
      (l.getIsCallActiveInPopoutWindow = d),
      (l.setIsCallActiveInPopoutWindow = m),
      (l.getIsPopoutWindowOpening = p),
      (l.setIsPopoutWindowOpening = _),
      (l.getIsPopoutWindowActiveAndVisible = f),
      (l.getPopoutWindow = g),
      (l.setPopoutWindow = h));
  },
  98,
);
