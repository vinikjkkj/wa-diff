__d(
  "removeClasses",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      e &&
        t &&
        t.split(" ").forEach(function (t) {
          return e.classList.remove(t);
        });
    }
    i.removeClasses = e;
  },
  66,
);
