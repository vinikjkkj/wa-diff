__d(
  "LWIMAIBAFormPresence",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = 0,
      l = new Set();
    function s() {
      l.forEach(function (e) {
        return e();
      });
    }
    function u() {
      (e++, s());
      var t = !0;
      return function () {
        t && ((t = !1), e--, s());
      };
    }
    function c(e) {
      return (
        l.add(e),
        function () {
          l.delete(e);
        }
      );
    }
    function d() {
      return e > 0;
    }
    ((i.markLWIMAIBAFormPresent = u),
      (i.subscribeToLWIMAIBAFormPresence = c),
      (i.isLWIMAIBAFormPresent = d));
  },
  66,
);
