__d(
  "RelayFBSubscription",
  ["ClientIDs", "warning"],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return function (r, o) {
        var t = {},
          a = o.variables.input;
        if (a != null && typeof a == "object") {
          var i = "client_subscription_id" in a;
          (n("warning")(
            !i,
            "RelayFBSubscription: found `client_subscription_id` in `input`. In the Facebook context, `client_subscription_id` are added automatically.",
          ),
            (t = babelHelpers.extends({}, o.variables, {
              input: babelHelpers.extends({}, a, {
                client_subscription_id: n("ClientIDs").getNewClientID(),
              }),
            })));
        } else t = babelHelpers.extends({}, o.variables);
        return e(r, {
          cacheConfig: o.cacheConfig,
          configs: o.configs,
          onCompleted: o.onCompleted,
          onError: o.onError,
          onNext: o.onNext,
          subscription: o.subscription,
          updater: o.updater,
          variables: t,
        });
      };
    }
    a.exports = { addFBisms: e };
  },
  null,
);
