__d(
  "useFBMutation",
  [
    "RelayFBMutations",
    "enqueueMutation",
    "react-relay/relay-hooks/useMutation",
    "relay-runtime/mutations/commitMutation",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("enqueueMutation").enqueueMutation,
      l = n("RelayFBMutations").addFBisms(
        n("relay-runtime/mutations/commitMutation"),
      ),
      s = n("RelayFBMutations").addFBisms(e);
    function u(e, t) {
      return n("react-relay/relay-hooks/useMutation")(
        e,
        t === "enqueue" ? s : l,
      );
    }
    a.exports = u;
  },
  null,
);
