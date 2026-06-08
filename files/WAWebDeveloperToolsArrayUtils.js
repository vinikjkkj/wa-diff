__d(
  "WAWebDeveloperToolsArrayUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return Array.isArray(e) && e.length === 0;
    }
    function l(e) {
      return Array.isArray(e) && e.length !== 0;
    }
    function s(e, t) {
      return Array.isArray(e) && t === e.length - 1;
    }
    ((i.isEmptyArray = e), (i.isNonEmptyArray = l), (i.isLastItemInArray = s));
  },
  66,
);
