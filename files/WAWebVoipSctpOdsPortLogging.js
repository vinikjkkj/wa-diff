__d(
  "WAWebVoipSctpOdsPortLogging",
  ["WAWebCoreActionsODS"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      e === 3478
        ? o("WAWebCoreActionsODS").logCallIceStartedPort3478()
        : o("WAWebCoreActionsODS").logCallIceStartedPort3480();
    }
    function s(e) {
      e === 3478
        ? o("WAWebCoreActionsODS").logCallIceConnectedPort3478()
        : o("WAWebCoreActionsODS").logCallIceConnectedPort3480();
    }
    function u(e) {
      e === 3478
        ? o("WAWebCoreActionsODS").logCallIceFailedPort3478()
        : o("WAWebCoreActionsODS").logCallIceFailedPort3480();
    }
    function c(e) {
      e === 3478
        ? o("WAWebCoreActionsODS").logCallDtlsStartedPort3478()
        : o("WAWebCoreActionsODS").logCallDtlsStartedPort3480();
    }
    function d(e) {
      e === 3478
        ? o("WAWebCoreActionsODS").logCallDtlsConnectedPort3478()
        : o("WAWebCoreActionsODS").logCallDtlsConnectedPort3480();
    }
    function m(e) {
      e === 3478
        ? o("WAWebCoreActionsODS").logCallDtlsFailedStallPort3478()
        : o("WAWebCoreActionsODS").logCallDtlsFailedStallPort3480();
    }
    function p(e) {
      e === 3478
        ? o("WAWebCoreActionsODS").logCallDtlsFailedPcFailedPort3478()
        : o("WAWebCoreActionsODS").logCallDtlsFailedPcFailedPort3480();
    }
    function _(e) {
      e === 3478
        ? o("WAWebCoreActionsODS").logCallSctpConnectionFailedPort3478()
        : e === 3480 &&
          o("WAWebCoreActionsODS").logCallSctpConnectionFailedPort3480();
    }
    function f(e) {
      e === 3478
        ? o("WAWebCoreActionsODS").logCallSctpConnectionCleanedUpPort3478()
        : e === 3480 &&
          o("WAWebCoreActionsODS").logCallSctpConnectionCleanedUpPort3480();
    }
    ((l.logIceStartedForPort = e),
      (l.logIceConnectedForPort = s),
      (l.logIceFailedForPort = u),
      (l.logDtlsStartedForPort = c),
      (l.logDtlsConnectedForPort = d),
      (l.logDtlsFailedStallForPort = m),
      (l.logDtlsFailedPcFailedForPort = p),
      (l.logSctpConnectionFailedForPort = _),
      (l.logSctpConnectionCleanedUpForPort = f));
  },
  98,
);
