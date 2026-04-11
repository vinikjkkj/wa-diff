__d(
  "WebBloksIsUnitTest",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e() {
      var e;
      return (
        typeof process != "undefined" &&
        ((e = process) == null || (e = e.env) == null ? void 0 : e.NODE_ENV) ===
          "test"
      );
    }
    i.default = e;
  },
  66,
);
