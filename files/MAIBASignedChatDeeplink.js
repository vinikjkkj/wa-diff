__d(
  "MAIBASignedChatDeeplink",
  [
    "CurrentUser",
    "ExecutionEnvironment",
    "FBLogger",
    "Instant",
    "MAIBAActionabilityURLUtils",
    "MAIBAChatAppUIActions",
    "MAIBADeeplinkPromptStore",
    "MAIBADeeplinkTokenVerifier",
    "MAIBASignedChatActionIntent",
    "MAIBASignedChatActionParser",
    "getErrorSafe",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = null;
    function u(e, t) {
      var n = r("FBLogger")("maiba_deeplink");
      return (
        (t == null ? n : n.catching(r("getErrorSafe")(t))).warn(
          "Rejected signed chat deeplink after URL consumption (%s)",
          e,
        ),
        null
      );
    }
    async function c(e) {
      var t = r("MAIBASignedChatActionParser")(e);
      if (t == null) return u("invalid_action");
      try {
        var n = await o("MAIBADeeplinkTokenVerifier").verifyDeeplinkToken(t);
        if (n == null) return u("verification_failed");
        if (n.viewerId != null && n.viewerId !== r("CurrentUser").getID())
          return u("viewer_mismatch");
        var a = n.expiresAt;
        return a != null && o("Instant").now() >= a ? u("expired") : t;
      } catch (e) {
        return u("verification_failed", e);
      }
    }
    function d() {
      return { __brand: "signed_chat_deeplink_consumer" };
    }
    function m(t) {
      if ((e || (e = r("ExecutionEnvironment"))).canUseDOM) {
        var n = new URLSearchParams(window.location.search),
          a = n.get("maiba_actions");
        if (a == null) {
          var i = s;
          return i == null
            ? Promise.resolve(null)
            : i.owners.size === 0 && i.pendingStrictModeOwner !== t
              ? ((s = null), Promise.resolve(null))
              : ((i.pendingStrictModeOwner = null), i.owners.add(t), i.promise);
        }
        if (!r("MAIBASignedChatActionIntent")(a)) return Promise.resolve(null);
        o("MAIBAActionabilityURLUtils").removeMAIBAActionsFromURL();
        var l = c(a);
        return (
          (s = {
            owners: new Set([t]),
            pendingStrictModeOwner: null,
            promise: l,
          }),
          l
        );
      }
      return Promise.resolve(null);
    }
    function p(e, t) {
      var n = s;
      n == null ||
        n.promise !== t ||
        !n.owners.delete(e) ||
        (n.owners.size === 0 &&
          ((n.pendingStrictModeOwner = e),
          r("promiseDone")(
            Promise.resolve().then(function () {
              s === n &&
                n.owners.size === 0 &&
                n.pendingStrictModeOwner === e &&
                (s = null);
            }),
          )));
    }
    async function _(e, t) {
      var n = await t,
        r = s;
      return n == null
        ? ((r == null ? void 0 : r.promise) === t && (s = null), !1)
        : r == null || r.promise !== t || !r.owners.has(e)
          ? !1
          : ((s = null),
            o("MAIBADeeplinkPromptStore").setPendingDeeplinkToken(n),
            o("MAIBAChatAppUIActions").openMAIBAChatThread(
              {},
              void 0,
              "DEEPLINK_AM",
            ),
            !0);
    }
    ((l.createSignedChatDeeplinkConsumer = d),
      (l.consumeAndVerifySignedChatDeeplinkFromURL = m),
      (l.releaseConsumedSignedChatDeeplink = p),
      (l.openVerifiedSignedChatDeeplink = _));
  },
  98,
);
