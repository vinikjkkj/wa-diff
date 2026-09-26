__d(
  "CometComposerSproutPromotionActions",
  [
    "CometComposerSproutPromotionActionsEndPromotionMutation.graphql",
    "CometRelay",
    "FBLogger",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s =
        e !== void 0
          ? e
          : (e = n(
              "CometComposerSproutPromotionActionsEndPromotionMutation.graphql",
            ));
    function u(e) {
      var t = e.environment,
        n = e.input,
        a = e.onCompleted,
        i = e.onError;
      o("CometRelay").commitMutation(t, {
        mutation: s,
        onCompleted: a,
        onError: function (t) {
          (r("FBLogger")("comet_composer").mustfix(
            "Unable to end sprout promotion",
          ),
            i && i());
        },
        variables: { input: n },
      });
    }
    l.endPromotion = u;
  },
  98,
);
