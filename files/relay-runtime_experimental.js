__d(
  "relay-runtime/experimental",
  [
    "relay-runtime/store/live-resolvers/resolverDataInjector",
    "relay-runtime/store/observeFragmentExperimental",
    "relay-runtime/store/observeQueryExperimental",
    "relay-runtime/store/waitForFragmentExperimental",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n(
        "relay-runtime/store/observeFragmentExperimental",
      ).observeFragment,
      l = n("relay-runtime/store/observeQueryExperimental").observeQuery,
      s = n(
        "relay-runtime/store/waitForFragmentExperimental",
      ).waitForFragmentData;
    function u(e) {
      return e.ok === !0;
    }
    function c(e) {
      return e.ok === !1;
    }
    a.exports = {
      isErrorResult: c,
      isValueResult: u,
      observeFragment: e,
      observeQuery: l,
      resolverDataInjector: n(
        "relay-runtime/store/live-resolvers/resolverDataInjector",
      ),
      waitForFragmentData: s,
    };
  },
  null,
);
