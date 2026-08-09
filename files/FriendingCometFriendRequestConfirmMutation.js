__d(
  "FriendingCometFriendRequestConfirmMutation",
  [
    "CometRelay",
    "FriendingButtonUtil",
    "FriendingCometFriendRequestConfirmMutation.graphql",
    "FriendingCometFriendRequestsOptimisticUpdaters",
    "FriendingCometFriendRequestsUpdaters",
    "WebPixelRatio",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("FriendingCometFriendRequestConfirmMutation.graphql"));
    function u(e) {
      var t = e.acknowledgeWarn,
        n = e.clickCorrelationID,
        a = e.environment,
        i = e.friendingChannel,
        l = e.isClickProofVerified,
        u = e.navigationChain,
        c = e.onCompleted,
        d = e.onError,
        m = e.senderID,
        p = e.shouldDisableOptimisticMutation,
        _ = p === void 0 ? !1 : p,
        f = function (t) {
          o(
            "FriendingCometFriendRequestsOptimisticUpdaters",
          ).updateFriendRequesterFieldsOptimistic(t, "ARE_FRIENDS", m);
        },
        g = r("gkx")("12718") === !0,
        h = function (t) {
          o("FriendingCometFriendRequestsUpdaters").updateFriendRequesterFields(
            t,
            m,
          );
        };
      return o("CometRelay").commitMutation(a, {
        mutation: s,
        onCompleted: c,
        onError: d,
        optimisticUpdater: _ ? null : f,
        updater: h,
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
            friend_requester_id: m,
            friending_channel: i,
            warn_ack: t === !0,
          },
          refresh_num: 0,
          scale: o("WebPixelRatio").get(),
          should_fix_banner: g,
        },
      });
    }
    l.commit = u;
  },
  98,
);
