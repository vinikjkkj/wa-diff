__d(
  "WAFlowJSONComponentPlacementValidatorV603",
  ["WAFlowJsonComponentPlacementValidatorV602", "WAFlowsTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t() {
        return e.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.getAllNonExclusiveComponentPairs = function () {
          var e,
            t = new Map();
          return (
            t.set(
              (e = o("WAFlowsTypes")).WA_FLOWS_COMPONENT_NAMES.NAVIGATION_LIST,
              new Set([e.WA_FLOWS_COMPONENT_NAMES.FORM]),
            ),
            t.set(
              e.WA_FLOWS_COMPONENT_NAMES.RICH_TEXT,
              new Set([e.WA_FLOWS_COMPONENT_NAMES.FOOTER]),
            ),
            t
          );
        }),
        t
      );
    })(
      o("WAFlowJsonComponentPlacementValidatorV602")
        .WAFlowJSONComponentPlacementValidatorV602,
    );
    l.WAFlowJSONComponentPlacementValidatorV603 = e;
  },
  98,
);
