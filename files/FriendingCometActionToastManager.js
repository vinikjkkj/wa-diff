__d(
  "FriendingCometActionToastManager",
  [
    "fbt",
    "BaseToasterStateManager",
    "clearTimeout",
    "cometPushToast",
    "requireDeferred",
    "setTimeout",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = r("requireDeferred")(
        "FriendingCometFriendRequestCancelMutation",
      ).__setRef("FriendingCometActionToastManager"),
      u = 5e3,
      c = 20,
      d = new Set(["POST_FRIENDING_TOAST", "POST_FRIENDING_TOAST_BOTTOMSHEET"]),
      m = new Set([
        "ADD_FRIEND_PROFILE_BUTTON",
        "PROFILE_BUTTON",
        "PROFILE_CHANNEL_FOLLOWERS",
        "PROFILE_DISCOVERY_LIST",
        "PROFILE_FLOATING_BAR",
        "PROFILE_FOLLOWERS_LIST",
        "PROFILE_FRIENDS_BOX",
        "PROFILE_FRIENDS_TAB",
        "PROFILE_INLINE",
        "PROFILE_INTENT_BANNER",
        "PROFILE_INTRODUCTION",
        "PROFILE_LIKERS_LIST",
        "PROFILE_PICTURE_VIEWER",
        "PROFILE_PRIVACY_DISPLAY_UPSELL",
        "PROFILE_SHARE",
        "PROFILE_SUGGESTED_FRIENDS",
        "profile",
        "profile_browser",
      ]),
      p = [],
      _ = new Set(),
      f = null,
      g = null,
      h = [],
      y = new Set();
    function C(e) {
      y.add(e);
    }
    function b(e) {
      y.delete(e);
    }
    var v = !1;
    function S() {
      v = !0;
    }
    function R() {
      var e = v;
      return ((v = !1), e);
    }
    function L(e) {
      return m.has(e);
    }
    function E() {
      return _;
    }
    function k() {
      ((p = []), (_ = new Set()), (f = null), (g = null));
    }
    function I() {
      var e = f;
      e != null &&
        (r("BaseToasterStateManager").getInstance().expire(e), (f = null));
    }
    function T(t) {
      var n = t.clickCorrelationID,
        r = t.environment,
        a = t.navigationChain,
        i = t.targetID,
        l = function () {
          ((p = p.filter(function (e) {
            return e.targetID !== i;
          })),
            (h = h.filter(function (e) {
              return e.targetID !== i;
            })),
            _.add(i),
            I(),
            e.onReadyImmediately(function (e) {
              e.commit({
                clickCorrelationID: n,
                environment: r,
                friendingChannel: "POST_FRIENDING_TOAST",
                isClickProofVerified: !0,
                navigationChain: a,
                onCompleted: function () {},
                onError: function () {},
                receiverID: i,
              });
            }));
        };
      f = o("cometPushToast").cometPushToast(
        {
          action: { label: s._(/*BTDS*/ "Undo"), onPress: l },
          message: s._(/*BTDS*/ "Friend request sent"),
          withoutCloseButton: !0,
        },
        u,
      );
    }
    function D() {
      var e = p.filter(function (e) {
          return e.actionType === "sent";
        }).length,
        t = p.filter(function (e) {
          return e.actionType === "accepted";
        }).length,
        n = e + t,
        r;
      n === 1
        ? (r =
            e === 1
              ? s._(/*BTDS*/ "Friend request sent")
              : s._(/*BTDS*/ "Friend request accepted"))
        : e > 0 && t === 0
          ? (r = s._(/*BTDS*/ "{count} friend requests sent", [
              s._param("count", e),
            ]))
          : t > 0 && e === 0
            ? (r = s._(/*BTDS*/ "{count} friend requests accepted", [
                s._param("count", t),
              ]))
            : (r = s._(/*BTDS*/ "{count} friend requests sent or accepted", [
                s._param("count", n),
              ]));
      var a = y.size > 0,
        i = function () {
          var e = h.slice(),
            t = null;
          for (var n of y) t = n;
          t == null || t(e);
        };
      f = o("cometPushToast").cometPushToast(
        {
          action: a ? { label: s._(/*BTDS*/ "View"), onPress: i } : void 0,
          message: r,
          withoutCloseButton: !0,
        },
        u,
      );
    }
    function x(e, t) {
      ((p = p.filter(function (t) {
        return t.targetID !== e;
      })),
        (h = h.filter(function (t) {
          return t.targetID !== e;
        })),
        _.add(e),
        I(),
        p.length > 0
          ? ((t == null || !d.has(t)) && D(),
            g != null && r("clearTimeout")(g),
            (g = r("setTimeout")(function () {
              k();
            }, u)))
          : (g != null && r("clearTimeout")(g), k()));
    }
    function $(e, t, n, o, a, i) {
      if (!d.has(o)) {
        var l = {
          actionType: e,
          clickCorrelationID: a,
          environment: n,
          friendingChannel: o,
          navigationChain: i,
          targetID: t,
        };
        ((p = p.filter(function (e) {
          return e.targetID !== t;
        })),
          p.push(l),
          (h = h.filter(function (e) {
            return e.targetID !== t;
          })),
          h.push(l),
          h.length > c && (h = h.slice(-c)),
          I(),
          e === "sent" && p.length === 1 && L(o) ? T(l) : D(),
          g != null && r("clearTimeout")(g),
          (g = r("setTimeout")(function () {
            k();
          }, u)));
      }
    }
    ((l.registerViewHandler = C),
      (l.unregisterViewHandler = b),
      (l.setShouldAutoOpenSentRequests = S),
      (l.consumeShouldAutoOpenSentRequests = R),
      (l.getCancelledTargetIDs = E),
      (l.removePendingAction = x),
      (l.recordFriendingAction = $));
  },
  226,
);
