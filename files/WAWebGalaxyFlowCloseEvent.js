__d(
  "WAWebGalaxyFlowCloseEvent",
  ["WAWebEventEmitter"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return "galaxy_flow_" + e + "_" + t;
    }
    var s = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(r("WAWebEventEmitter")),
      u = new s();
    ((l.getGalaxyFlowCloseEventKey = e), (l.GalaxyFlowCloseEvent = u));
  },
  98,
);
