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
    ((i.isTargetAnElementNode = l), (i.isCrossWindowHTMLElement = s));
  },
  66,
);
