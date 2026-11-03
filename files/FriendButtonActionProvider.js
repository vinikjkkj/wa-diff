__d(
  "FriendButtonActionProvider",
  [
    "ConsolidatedFriendingButtonClickFalcoEvent",
    "FriendingButtonClickFalcoEvent",
    "FriendingButtonUtil",
    "QuickPerformanceLogger",
    "cr:27449",
    "qpl",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = (s = r("requireDeferred"))(
        "FriendingCometFriendRequestCancelMutation",
      ).__setRef("FriendButtonActionProvider"),
      c = s("FriendingCometFriendRequestConfirmMutation").__setRef(
        "FriendButtonActionProvider",
      ),
      d = s("FriendingCometFriendRequestDeleteMutation").__setRef(
        "FriendButtonActionProvider",
      ),
      m = s("FriendingCometFriendRequestSendMutation").__setRef(
        "FriendButtonActionProvider",
      );
    function p(t) {
      var a = t.acknowledgeWarn,
        i = t.action,
        l = t.callbacks,
        s = t.environment,
        d = t.friendingChannel,
        p = t.friendshipStatus,
        _ = t.makeMutationExtraAttributionData,
        g = t.navigationChain,
        h = t.pymkLocation,
        y = t.shouldDisableOptimisticMutation,
        C = t.targetID,
        b = f();
      r("FriendingButtonClickFalcoEvent").log(function () {
        return {
          action: i,
          click_correlation_id: b,
          friending_channel: d,
          target_id: C,
        };
      });
      var v = o("FriendingButtonUtil").convertFriendingChannelToType(d);
      (v != null &&
        r("ConsolidatedFriendingButtonClickFalcoEvent").log(function () {
          return { action: i, request_channel: v };
        }),
        (e || (e = r("QuickPerformanceLogger"))).markerStart(
          r("qpl")._(3090767, "180"),
        ),
        n("cr:27449") != null &&
          (p === "CAN_REQUEST"
            ? n("cr:27449").recordFriendingAction("sent", C, s, d, b, g)
            : p === "INCOMING_REQUEST"
              ? n("cr:27449").recordFriendingAction("accepted", C, s, d, b, g)
              : p === "OUTGOING_REQUEST" &&
                n("cr:27449").removePendingAction(C, d)));
      var S = function () {
        switch (p) {
          case "CAN_REQUEST":
            return m.onReadyImmediately(function (t) {
              t.commit({
                acknowledgeWarn: a,
                clickCorrelationID: b,
                environment: s,
                extraAttributionData: _,
                friendingChannel: d,
                isClickProofVerified: !0,
                navigationChain: g,
                onCompleted: function (n, o) {
                  (l != null &&
                    l.onMakeComplete &&
                    (l == null || l.onMakeComplete(n, o)),
                    (e || (e = r("QuickPerformanceLogger"))).markerAnnotate(
                      r("qpl")._(3090767, "180"),
                      { string: { target: "make" } },
                    ),
                    e.markerEnd(r("qpl")._(3090767, "180"), 2));
                },
                onError: function (n) {
                  (l != null &&
                    l.onFriendingActionErrorListener &&
                    (l == null || l.onFriendingActionErrorListener(i, n)),
                    (e || (e = r("QuickPerformanceLogger"))).markerAnnotate(
                      r("qpl")._(3090767, "180"),
                      {
                        string: {
                          error_message: n.message,
                          error_name: n.name,
                          error_string: n.toString(),
                          target: "make",
                        },
                      },
                    ),
                    e.markerEnd(r("qpl")._(3090767, "180"), 3));
                },
                pymkLocation: h,
                receiverID: C,
              });
            });
          case "OUTGOING_REQUEST":
            return u.onReadyImmediately(function (t) {
              t.commit({
                clickCorrelationID: b,
                environment: s,
                friendingChannel: d,
                isClickProofVerified: !0,
                navigationChain: g,
                onCompleted: function (n, o) {
                  (l != null &&
                    l.onCancelComplete &&
                    (l == null || l.onCancelComplete(n, o)),
                    (e || (e = r("QuickPerformanceLogger"))).markerAnnotate(
                      r("qpl")._(3090767, "180"),
                      { string: { target: "cancel" } },
                    ),
                    e.markerEnd(r("qpl")._(3090767, "180"), 2));
                },
                onError: function (n) {
                  (l != null &&
                    l.onFriendingActionErrorListener &&
                    (l == null || l.onFriendingActionErrorListener(i, n)),
                    (e || (e = r("QuickPerformanceLogger"))).markerAnnotate(
                      r("qpl")._(3090767, "180"),
                      {
                        string: {
                          error_message: n.message,
                          error_name: n.name,
                          error_string: n.toString(),
                          target: "cancel",
                        },
                      },
                    ),
                    e.markerEnd(r("qpl")._(3090767, "180"), 3));
                },
                receiverID: C,
              });
            });
          case "INCOMING_REQUEST":
            return c.onReadyImmediately(function (t) {
              t.commit({
                acknowledgeWarn: a,
                clickCorrelationID: b,
                environment: s,
                friendingChannel: d,
                isClickProofVerified: !0,
                navigationChain: g,
                onCompleted: function (n, o) {
                  (l != null &&
                    l.onConfirmComplete &&
                    (l == null || l.onConfirmComplete(n, o)),
                    (e || (e = r("QuickPerformanceLogger"))).markerAnnotate(
                      r("qpl")._(3090767, "180"),
                      { string: { target: "confirm" } },
                    ),
                    e.markerEnd(r("qpl")._(3090767, "180"), 2));
                },
                onError: function (n) {
                  (l != null &&
                    l.onFriendingActionErrorListener &&
                    (l == null || l.onFriendingActionErrorListener(i, n)),
                    (e || (e = r("QuickPerformanceLogger"))).markerAnnotate(
                      r("qpl")._(3090767, "180"),
                      {
                        string: {
                          error_message: n.message,
                          error_name: n.name,
                          error_string: n.toString(),
                          target: "confirm",
                        },
                      },
                    ),
                    e.markerEnd(r("qpl")._(3090767, "180"), 3));
                },
                senderID: C,
                shouldDisableOptimisticMutation: y,
              });
            });
          default:
            return null;
        }
      };
      (l == null ||
        l.onClickCallbacksBeforeMutation == null ||
        l.onClickCallbacksBeforeMutation(i),
        S(),
        l == null || l.onClickCallbacks == null || l.onClickCallbacks(i));
    }
    function _(t) {
      var n = t.action,
        a = t.callbacks,
        i = t.environment,
        l = t.friendingChannel,
        s = t.friendshipStatus,
        u = t.targetID,
        c = f();
      r("FriendingButtonClickFalcoEvent").log(function () {
        return {
          action: n,
          click_correlation_id: c,
          friending_channel: l,
          target_id: u,
        };
      });
      var m = o("FriendingButtonUtil").convertFriendingChannelToType(l);
      (m != null &&
        r("ConsolidatedFriendingButtonClickFalcoEvent").log(function () {
          return { action: n, request_channel: m };
        }),
        (e || (e = r("QuickPerformanceLogger"))).markerStart(
          r("qpl")._(3090767, "180"),
        ));
      var p = function (o) {
          (a != null &&
            a.onFriendingActionErrorListener &&
            (a == null || a.onFriendingActionErrorListener(n, o)),
            (e || (e = r("QuickPerformanceLogger"))).markerAnnotate(
              r("qpl")._(3090767, "180"),
              {
                string: {
                  error_message: o.message,
                  error_name: o.name,
                  error_string: o.toString(),
                  target: "reject",
                },
              },
            ),
            e.markerEnd(r("qpl")._(3090767, "180"), 3));
        },
        _ = function (n, o) {
          (a != null &&
            a.onRejectComplete &&
            (a == null || a.onRejectComplete(n, o)),
            (e || (e = r("QuickPerformanceLogger"))).markerAnnotate(
              r("qpl")._(3090767, "180"),
              { string: { target: "reject" } },
            ),
            e.markerEnd(r("qpl")._(3090767, "180"), 2));
        },
        g = function () {
          switch (s) {
            case "INCOMING_REQUEST":
              return d.onReadyImmediately(function (e) {
                e.commit(i, u, l, _, p, !0, c);
              });
            default:
              return null;
          }
        };
      (a == null ||
        a.onClickCallbacksBeforeMutation == null ||
        a.onClickCallbacksBeforeMutation(n),
        g(),
        a == null || a.onClickCallbacks == null || a.onClickCallbacks(n));
    }
    function f() {
      return Date.now().toString();
    }
    ((l.executePrimaryFriendingAction = p),
      (l.executeSecondaryFriendingAction = _));
  },
  98,
);
