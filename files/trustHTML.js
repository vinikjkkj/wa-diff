__d(
  "trustHTML",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t;
      if ((t = window.trustedTypes) != null && t.createPolicy) {
        var n = window.trustedTypes.createPolicy("lexical", {
          createHTML: function (t) {
            return t;
          },
        });
        return n.createHTML(e);
      }
      return e;
    }
    i.default = e;
  },
  66,
);
