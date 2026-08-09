__d(
  "FriendingCometFriendRequestCancelMutation",
  [
    "CometRelay",
    "FriendingButtonUtil",
    "FriendingCometFriendRequestCancelMutation.graphql",
    "ProfileActionFriendingMutationUtils",
    "WebPixelRatio",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("FriendingCometFriendRequestCancelMutation.graphql"));
    function u(e) {
      var t = e.clickCorrelationID,
        n = e.environment,
        r = e.friendingChannel,
        a = e.isClickProofVerified,
        i = e.navigationChain,
        l = e.onCompleted,
        u = e.onError,
        c = e.receiverID;
      return o("CometRelay").commitMutation(n, {
        mutation: s,
        onCompleted: l,
        onError: u,
        optimisticResponse: {
          friend_request_cancel: {
            cancelled_friend_requestee: {
              friendship_status: "CAN_REQUEST",
              id: c,
              profile_action: o(
                "ProfileActionFriendingMutationUtils",
              ).getOptimisticActionForFriendshipStatus("CAN_REQUEST", c),
            },
          },
        },
        variables: {
          input: {
            attribution_id_v2: i,
            cancelled_friend_requestee_id: c,
            click_correlation_id: t,
            click_proof_validation_result:
              a === !0
                ? JSON.stringify(
                    o("FriendingButtonUtil").CLICK_PROOF_VALIDATION_RESULT,
                  )
                : null,
            friending_channel: r,
          },
          scale: o("WebPixelRatio").get(),
        },
      });
    }
    l.commit = u;
  },
  98,
);
