__d(
  "WAWebVoipSctpOdsPortLogging",
  ["WAWebCoreActionsODS", "WAWebODS"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      g(
        e,
        function () {
          return r("WAWebODS").incr("web.call.dtls.connected.port_3478");
        },
        function () {
          return r("WAWebODS").incr("web.call.dtls.connected.port_3480");
        },
      );
    }
    function s(e) {
      g(
        e,
        function () {
          return r("WAWebODS").incr("web.call.dtls.failed.pc_failed.port_3478");
        },
        o("WAWebCoreActionsODS").logCallDtlsFailedPcFailedPort3480,
      );
    }
    function u(e) {
      g(
        e,
        function () {
          return r("WAWebODS").incr("web.call.dtls.failed.stall.port_3478");
        },
        function () {
          return r("WAWebODS").incr("web.call.dtls.failed.stall.port_3480");
        },
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
        function () {
          return r("WAWebODS").incr("web.call.ice.connected.port_3478");
        },
        function () {
          return r("WAWebODS").incr("web.call.ice.connected.port_3480");
        },
      );
    }
    function m(e) {
      g(
        e,
        function () {
          return r("WAWebODS").incr("web.call.ice.failed.port_3478");
        },
        function () {
          return r("WAWebODS").incr("web.call.ice.failed.port_3480");
        },
      );
    }
    function p(e) {
      g(
        e,
        function () {
          return r("WAWebODS").incr("web.call.ice.started.port_3478");
        },
        function () {
          return r("WAWebODS").incr("web.call.ice.started.port_3480");
        },
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
