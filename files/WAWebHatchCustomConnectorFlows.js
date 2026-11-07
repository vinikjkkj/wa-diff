__d(
  "WAWebHatchCustomConnectorFlows",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = 0,
      l = null;
    function s() {
      return l != null ? null : ((e += 1), (l = e), e);
    }
    function u(e) {
      l === e && (l = null);
    }
    function c(t) {
      return t === e;
    }
    function d() {
      ((e += 1), (l = null));
    }
    ((i.startHatchCustomConnectorFlow = s),
      (i.endHatchCustomConnectorFlow = u),
      (i.isLatestHatchCustomConnectorFlow = c),
      (i.resetHatchCustomConnectorFlowsForTests = d));
  },
  66,
);
