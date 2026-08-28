__d(
  "AdsTargetingRelaxationBAURFBehaviour",
  ["AdsTargetingRelaxationBAUBaseBehaviour"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t() {
        return e.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.getTargetingRelaxationConstant = function () {
          return "none";
        }),
        (n.getMessageTypeToShow = function () {
          return "unsafe";
        }),
        t
      );
    })(r("AdsTargetingRelaxationBAUBaseBehaviour"));
    l.default = e;
  },
  98,
);
