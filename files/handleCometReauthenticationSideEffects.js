__d(
  "handleCometReauthenticationSideEffects",
  [
    "CometReauthChallengeListener",
    "FBLogger",
    "FXUtils",
    "InteractionTracing",
    "SecuredActionDataFromErrorResponse",
    "SecuredActionUtils",
    "cr:27369",
    "cr:3096",
    "cr:5888",
    "err",
    "json-bigint",
    "securedActionTriggerChallenge",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("json-bigint")({ storeAsString: !0 }),
      s = new Set(),
      u = new Set(),
      c = new Set(["bizweb.pageIGLinking.startLinking"]),
      d = new Set([
        "bai_permissions.invite_flow.submit",
        "bai_permissions.update_user_permission_on_asset_flow.save",
        "bai_permissions.send_partnership_request_flow.send_request",
        "bai_permissions.share_asset_to_partner_flow.assign",
        "bai_permissions.review_partnership_request_flow.review",
        "bai_permissions.review_partnership_request_flow.confirm",
        "bai_permissions.review_partnership_request_flow.approve_and_assign",
        "bai_permissions.review_partnership_request_flow.decline_confirm",
        "bai_permissions.review_partnership_request_flow.unified_decline",
        "bai_permissions.review_business_user_invitation_request_flow.approve",
        "bai_permissions.review_business_user_invitation_request_flow.decline",
        "bai_permissions.share_asset_to_partner.page.legacy",
        "bai_permissions.share_asset_to_partner.ad_account.legacy",
        "bai_permissions.share_asset_to_partner.instagram.legacy",
        "bai_permissions.share_asset_to_partner.page.assign",
        "bai_permissions.share_asset_to_partner.ad_account.assign",
        "bai_permissions.share_asset_to_partner.instagram.assign",
        "bai_permissions.share_asset_to_partner.page.share_link",
        "bai_permissions.share_asset_to_partner.ad_account.share_link",
        "bai_permissions.share_asset_to_partner.instagram.share_link",
      ]);
    function m() {
      o("CometReauthChallengeListener").notifyReauthChallengeListeners(
        "canceled",
      );
      var e = r("err")(
        o("SecuredActionUtils").SECURED_ACTION_REAUTH_CANCELED_ERROR.toString(),
      );
      e.type = "info";
      for (var t of u) {
        var n = t.onError;
        n(e);
      }
    }
    function p() {
      o("CometReauthChallengeListener").notifyReauthChallengeListeners(
        "success",
      );
      for (var e of u) {
        var t = e.onSuccess;
        t();
      }
    }
    function _(t) {
      try {
        var n = e.parse(t);
        return (
          (n.account_type = o("FXUtils").getPlatformNameFromMAEntAccountType(
            n.account_type,
          )),
          (n.context = o(
            "SecuredActionDataFromErrorResponse",
          ).jsonDecodeChallengeContext(n.context)),
          n
        );
      } catch (e) {
        e instanceof Error &&
          r("FBLogger")("secured_action")
            .catching(e)
            .mustfix(
              "Failed to parse secured action challenge data from error payload",
            );
      }
      return {
        account_id: "",
        challenge_type: "password",
        sensitive_action: null,
      };
    }
    function f(e, t, a) {
      var i,
        l,
        f = e == null ? void 0 : e.source,
        g =
          (i =
            (l = f == null ? void 0 : f.errorCode) != null
              ? l
              : f == null
                ? void 0
                : f.code) != null
            ? i
            : f == null
              ? void 0
              : f.error;
      if (
        typeof g != "number" ||
        !o("SecuredActionUtils").isReauthenticationErrorCode(g)
      )
        return !1;
      if (
        (r("InteractionTracing")
          .getPendingInteractions()
          .forEach(function (e) {
            var t,
              n = (t = e.getTrace()) == null ? void 0 : t.tracePolicy;
            n != null &&
              (c.has(n)
                ? e.cancelTrace("dropped", !0)
                : d.has(n) && e.forceCompleteTrace());
          }),
        u.add({ onError: a, onSuccess: t }),
        s.has(g))
      )
        return !0;
      s.add(g);
      var h = function () {
          (s.delete(g), u.clear());
        },
        y =
          n("cr:5888") == null
            ? void 0
            : n("cr:5888")({
                error: e,
                onCleanup: h,
                onError: m,
                onSuccess: p,
              });
      if (y === !0) return !0;
      var C =
        n("cr:27369") == null
          ? void 0
          : n("cr:27369")({ error: e, onCleanup: h, onError: m, onSuccess: p });
      if (C === !0) return !0;
      var b =
        n("cr:3096") == null
          ? void 0
          : n("cr:3096")({ error: e, onCleanup: h, onError: m, onSuccess: p });
      if (b === !0) return !0;
      try {
        var v,
          S = _((v = f == null ? void 0 : f.description) != null ? v : "");
        (o("CometReauthChallengeListener").notifyReauthChallengeListeners(
          "challenged",
        ),
          r("securedActionTriggerChallenge")(S, {
            onExit: function () {
              (m(), h());
            },
            onSuccess: function () {
              (p(), h());
            },
          }));
      } catch (e) {
        if ((s.delete(g), e instanceof Error))
          throw r("FBLogger")("secured_action").mustfixThrow(
            "Something when wrong while triggering the dialog: %s",
            e.message,
          );
        return !1;
      }
      return !0;
    }
    l.default = f;
  },
  98,
);
