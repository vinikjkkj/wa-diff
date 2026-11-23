__d(
  "WAFlowJsonComponentPlacementValidatorV602",
  ["WAFlowJSONComponentPlacementValidatorV600", "WAFlowsTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t() {
        return e.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.validate = function () {
          return e.prototype.validate.call(this);
        }),
        (n.getLoneComponentTypes = function () {
          return [
            o("WAFlowsTypes").WA_FLOWS_COMPONENT_NAMES.RICH_TEXT,
            o("WAFlowsTypes").WA_FLOWS_COMPONENT_NAMES.NAVIGATION_LIST,
          ];
        }),
        (n.getNonExclusiveComponents = function (t) {
          var e = this.getAllNonExclusiveComponentPairs().get(t);
          return e ? Array.from(e) : [];
        }),
        (n.getAllNonExclusiveComponentPairs = function () {
          var e = new Map();
          return (
            e.set(
              o("WAFlowsTypes").WA_FLOWS_COMPONENT_NAMES.NAVIGATION_LIST,
              new Set([o("WAFlowsTypes").WA_FLOWS_COMPONENT_NAMES.FORM]),
            ),
            e
          );
        }),
        (n.getLoneComponentCount = function () {
          var t;
          return babelHelpers.extends(
            {},
            e.prototype.getLoneComponentCount.call(this),
            ((t = {}),
            (t[o("WAFlowsTypes").WA_FLOWS_COMPONENT_NAMES.NAVIGATION_LIST] = 2),
            t),
          );
        }),
        t
      );
    })(
      o("WAFlowJSONComponentPlacementValidatorV600")
        .WAFlowJSONComponentPlacementValidatorV600,
    );
    l.WAFlowJSONComponentPlacementValidatorV602 = e;
  },
  98,
);
