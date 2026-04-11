__d(
  "WAWebBrokerProtocolHandshake",
  ["invariant", "WAWebBrokerProtocolTypes.flow"],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      return {
        __command: o("WAWebBrokerProtocolTypes.flow").HANDSHAKE_COMMAND,
        __port: e,
      };
    }
    function u(e) {
      if (
        e != null &&
        e.__command != null &&
        e.__command === o("WAWebBrokerProtocolTypes.flow").HANDSHAKE_COMMAND &&
        e.__port != null
      ) {
        e.__port instanceof MessagePort || s(0, 56355);
        var t = e.__port;
        return t;
      }
    }
    ((l.buildHandshakePayload = e), (l.extractPortFromHandshakePayload = u));
  },
  98,
);
