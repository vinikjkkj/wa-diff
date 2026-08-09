__d(
  "FriendingCometFriendRequestDeleteMutation",
  [
    "CometRelay",
    "FriendingButtonUtil",
    "FriendingCometFriendRequestDeleteMutation.graphql",
    "FriendingCometFriendRequestsOptimisticUpdaters",
    "FriendingCometFriendRequestsUpdaters",
    "WebPixelRatio",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("FriendingCometFriendRequestDeleteMutation.graphql"));
    function u(e, t, n, r, a, i, l) {
      var u = function (n) {
          o(
            "FriendingCometFriendRequestsOptimisticUpdaters",
          ).updateFriendRequesterFieldsOptimistic(n, "CAN_REQUEST", t);
        },
        c = function (n) {
          o("FriendingCometFriendRequestsUpdaters").updateFriendRequesterFields(
            n,
            t,
          );
        };
      return o("CometRelay").commitMutation(e, {
        mutation: s,
        onCompleted: r,
        onError: a,
        optimisticUpdater: u,
        updater: c,
        variables: {
          input: {
            click_correlation_id: l,
            click_proof_validation_result:
              i === !0
                ? JSON.stringify(
                    o("FriendingButtonUtil").CLICK_PROOF_VALIDATION_RESULT,
                  )
                : null,
            friend_requester_id: t,
            friending_channel: n,
          },
          refresh_num: 0,
          scale: o("WebPixelRatio").get(),
        },
      });
    }
    l.commit = u;
  },
  98,
);
