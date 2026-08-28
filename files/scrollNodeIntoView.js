__d(
  "scrollNodeIntoView",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      try {
        e.scrollIntoViewIfNeeded(!1);
      } catch (t) {
        try {
          e.scrollIntoView({ behavior: "smooth", block: "nearest" });
        } catch (t) {
          try {
            e.scrollIntoView(!1);
          } catch (e) {}
        }
      }
    }
    i.default = e;
  },
  66,
);
