__d(
  "WebBloksNavigationCounter",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = 0,
      l = null;
    function s(t) {
      t !== l && ((l = t), e++);
    }
    function u() {
      return e;
    }
    ((i.incrementWebBloksNavigationCount = s),
      (i.getWebBloksNavigationCount = u));
  },
  66,
);
