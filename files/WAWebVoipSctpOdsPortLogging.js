__d(
  "WAWebVoipSctpOdsPortLogging",
  ["WAWebCoreActionsODS"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      g(
        e,
        o("WAWebCoreActionsODS").logCallDtlsConnectedPort3478,
        o("WAWebCoreActionsODS").logCallDtlsConnectedPort3480,
      );
    }
    function s(e) {
      g(
        e,
        o("WAWebCoreActionsODS").logCallDtlsFailedPcFailedPort3478,
        o("WAWebCoreActionsODS").logCallDtlsFailedPcFailedPort3480,
      );
    }
    function u(e) {
      g(
        e,
        o("WAWebCoreActionsODS").logCallDtlsFailedStallPort3478,
        o("WAWebCoreActionsODS").logCallDtlsFailedStallPort3480,
      );
    }
    function c(e) {
      g(
        e,
        o("WAWebCoreActionsODS").logCallDtlsStartedPort3478,
        o("WAWebCoreActionsODS").logCallDtlsStartedPort3480,
      );
    }
    function d(e) {
      g(
        e,
        o("WAWebCoreActionsODS").logCallIceConnectedPort3478,
        o("WAWebCoreActionsODS").logCallIceConnectedPort3480,
      );
    }
    function m(e) {
      g(
        e,
        o("WAWebCoreActionsODS").logCallIceFailedPort3478,
        o("WAWebCoreActionsODS").logCallIceFailedPort3480,
      );
    }
    function p(e) {
      g(
        e,
        o("WAWebCoreActionsODS").logCallIceStartedPort3478,
        o("WAWebCoreActionsODS").logCallIceStartedPort3480,
      );
    }
    function _(e) {
      h(
        e,
        o("WAWebCoreActionsODS").logCallSctpConnectionCleanedUpPort3478,
        o("WAWebCoreActionsODS").logCallSctpConnectionCleanedUpPort3480,
      );
    }
    function f(e) {
      h(
        e,
        o("WAWebCoreActionsODS").logCallSctpConnectionFailedPort3478,
        o("WAWebCoreActionsODS").logCallSctpConnectionFailedPort3480,
      );
    }
    function g(e, t, n) {
      e === 3478 ? t() : n();
    }
    function h(e, t, n) {
      e === 3478 ? t() : e === 3480 && n();
    }
    ((l.logCallDtlsConnectedForPort = e),
      (l.logCallDtlsFailedPcFailedForPort = s),
      (l.logCallDtlsFailedStallForPort = u),
      (l.logCallDtlsStartedForPort = c),
      (l.logCallIceConnectedForPort = d),
      (l.logCallIceFailedForPort = m),
      (l.logCallIceStartedForPort = p),
      (l.logCallSctpConnectionCleanedUpForPort = _),
      (l.logCallSctpConnectionFailedForPort = f));
  },
  98,
);
