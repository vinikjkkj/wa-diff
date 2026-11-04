__d(
  "WAWebUimUtils",
  [],
  function (t, n, r, o, a, i) {
    function e(e) {
      return e != null && typeof e == "object" && "nodeType" in e;
    }
    function l(t) {
      return t != null && e(t) && Number(t.nodeType) === Node.ELEMENT_NODE;
    }
    function s(e) {
      return (
        l(e) &&
        e.ownerDocument.defaultView != null &&
        e instanceof e.ownerDocument.defaultView.HTMLElement
      );
    }
    function u(e) {
      if (e == null || !l(e)) return !1;
      var t = e.ownerDocument.defaultView;
      return (
        t != null && (e instanceof t.HTMLElement || e instanceof t.SVGElement)
      );
    }
    ((i.isTargetAnElementNode = l),
      (i.isCrossWindowHTMLElement = s),
      (i.isCrossWindowFocusableElement = u));
  },
  66,
);
