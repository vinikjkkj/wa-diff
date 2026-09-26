__d(
  "FriendingCometFriendRequestSendMutation",
  [
    "CometRelay",
    "FriendingButtonUtil",
    "FriendingCometFriendRequestSendMutation.graphql",
    "ProfileActionFriendingMutationUtils",
    "WebPixelRatio",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("FriendingCometFriendRequestSendMutation.graphql"));
    function u(e) {
      var t = e.acknowledgeWarn,
        n = e.clickCorrelationID,
        r = e.environment,
        a = e.extraAttributionData,
        i = e.friendingChannel,
        l = e.isClickProofVerified,
        u = e.navigationChain,
        c = e.onCompleted,
        d = e.onError,
        m = e.pymkLocation,
        p = e.receiverID;
      return o("CometRelay").commitMutation(r, {
        mutation: s,
        onCompleted: c,
        onError: d,
        optimisticResponse: {
          friend_request_send: {
            friend_requestees: [
              {
                comet_profile_banner: null,
                friendship_status: "OUTGOING_REQUEST",
                id: p,
                profile_action: o(
                  "ProfileActionFriendingMutationUtils",
                ).getOptimisticActionForFriendshipStatus("OUTGOING_REQUEST", p),
              },
            ],
          },
        },
        variables: {
          input: {
            attribution_id_v2: u,
            click_correlation_id: n,
            click_proof_validation_result:
              l === !0
                ? JSON.stringify(
                    o("FriendingButtonUtil").CLICK_PROOF_VALIDATION_RESULT,
                  )
                : null,
            extra_data: a,
            friend_requestee_ids: [p],
            friending_channel: i,
            people_you_may_know_location: m,
            warn_ack_for_ids: t === !0 ? [p] : [],
          },
          scale: o("WebPixelRatio").get(),
        },
      });
    }
    l.commit = u;
  },
  98,
);
