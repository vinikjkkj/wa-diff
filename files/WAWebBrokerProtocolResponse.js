__d(
  "WAWebBrokerProtocolResponse",
  ["invariant", "WAWebBrokerProtocolTypes.flow", "WAWebInvocationId"],
  function (t, n, r, o, a, i, l, s) {
    function e(e, t) {
      return {
        __id: e,
        __command: o("WAWebBrokerProtocolTypes.flow").RESPONSE_COMMAND,
        __result: t,
      };
    }
    function u(e) {
      if (
        e != null &&
        e.__command === o("WAWebBrokerProtocolTypes.flow").RESPONSE_COMMAND
      ) {
        e.__id != null || s(0, 56278);
        var t = o("WAWebInvocationId").extractInvocationId(e.__id);
        (t != null && Object.prototype.hasOwnProperty.call(e, "__result")) ||
          s(0, 56331);
        var n = e,
          r = n.__result;
        return { result: r, invocationId: t };
      }
    }
    ((l.buildResponsePayload = e), (l.unwrapResponsePayload = u));
  },
  98,
);
