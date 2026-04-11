__d(
  "WAWebBrokerProtocolInvocation",
  ["invariant", "WAWebBrokerProtocolTypes.flow", "WAWebInvocationId"],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      var t = e.args,
        n = e.invocationId,
        r = e.method;
      return {
        __id: n,
        __command: o("WAWebBrokerProtocolTypes.flow").INVOCATION_COMMAND,
        __method: r,
        __args: t,
      };
    }
    function u(e) {
      if (
        e != null &&
        e.__command === o("WAWebBrokerProtocolTypes.flow").INVOCATION_COMMAND
      ) {
        e.__id || s(0, 56278);
        var t = o("WAWebInvocationId").extractInvocationId(e.__id);
        (t != null &&
          e.__method &&
          typeof e.__method == "string" &&
          e.__id &&
          e.__args &&
          Array.isArray(e.__args)) ||
          s(0, 56275);
        var n = e,
          r = n.__method,
          a = n.__args;
        return { method: r, args: a, invocationId: t };
      }
    }
    ((l.buildInvocationPayload = e), (l.unwrapInvocationPayload = u));
  },
  98,
);
