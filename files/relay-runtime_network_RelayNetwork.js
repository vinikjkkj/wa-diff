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
      var o = e(t),
        a = new Map();
      function i(e, t, i, s, u) {
        var c = n("relay-runtime/util/withProvidedVariables")(
          t,
          e.providedVariables,
          a,
        );
        if (e.operationKind === "subscription")
          return (r || l(0, 5158), !s || l(0, 5159), r(e, c, i));
        var d = i.poll;
        return d != null
          ? (!s || l(0, 5160), o(e, c, { force: !0 }).poll(d))
          : o(e, c, i, s, u);
      }
      return { execute: i };
    }
    a.exports = { create: s };
  },
  null,
);
