__d(
  "compareDOMOrder",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      return e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING
        ? -1
        : 1;
    }
    i.default = e;
  },
  66,
);
