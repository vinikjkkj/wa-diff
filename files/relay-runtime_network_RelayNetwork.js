__d(
  "relay-runtime/network/RelayNetwork",
  [
    "invariant",
    "relay-runtime/network/ConvertToExecuteFunction",
    "relay-runtime/util/withProvidedVariables",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = n("relay-runtime/network/ConvertToExecuteFunction").convertFetch;
    function s(t, r) {
      var o = e(t);
      function a(e, t, a, i, s) {
        var u = n("relay-runtime/util/withProvidedVariables")(
          t,
          e.providedVariables,
        );
        if (e.operationKind === "subscription")
          return (r || l(0, 5158), !i || l(0, 5159), r(e, u, a));
        var c = a.poll;
        return c != null
          ? (!i || l(0, 5160), o(e, u, { force: !0 }).poll(c))
          : o(e, u, a, i, s);
      }
      return { execute: a };
    }
    a.exports = { create: s };
  },
  null,
);
