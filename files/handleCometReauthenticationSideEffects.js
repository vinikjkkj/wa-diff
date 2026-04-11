__d(
  "handleCometReauthenticationSideEffects",
  [
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
      c = new Set([
        "bizweb.pageIGLinking.startLinking",
        "bai_permissions.invite_flow.submit",
        "bai_permissions.update_user_permission_on_asset_flow.save",
      ]);
    function d() {
      var e = r("err")(
        o("SecuredActionUtils").SECURED_ACTION_REAUTH_CANCELED_ERROR.toString(),
      );
      e.type = "info";
      for (var t of u) {
        var n = t.onError;
        n(e);
      }
    }
    function m() {
      for (var e of u) {
        var t = e.onSuccess;
        t();
      }
    }
    function p(t) {
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
        e instanceof Error && r("FBLogger")("secured_action").catching(e);
      }
      return {
        account_id: "",
        challenge_type: "password",
        sensitive_action: null,
      };
    }
    function _(e, t, a) {
      var i,
        l,
        _ = e == null ? void 0 : e.source,
        f =
          (i =
            (l = _ == null ? void 0 : _.errorCode) != null
              ? l
              : _ == null
                ? void 0
                : _.code) != null
            ? i
            : _ == null
              ? void 0
              : _.error;
      if (
        typeof f != "number" ||
        !o("SecuredActionUtils").isReauthenticationErrorCode(f)
      )
        return !1;
      if (
        (r("InteractionTracing")
          .getPendingInteractions()
          .forEach(function (e) {
            var t,
              n = (t = e.getTrace()) == null ? void 0 : t.tracePolicy;
            n != null && c.has(n) && e.forceCompleteTrace();
          }),
        u.add({ onError: a, onSuccess: t }),
        s.has(f))
      )
        return !0;
      s.add(f);
      var g = function () {
          (s.delete(f), u.clear());
        },
        h =
          n("cr:5888") == null
            ? void 0
            : n("cr:5888")({
                error: e,
                onCleanup: g,
                onError: d,
                onSuccess: m,
              });
      if (h === !0) return !0;
      var y =
        n("cr:27369") == null
          ? void 0
          : n("cr:27369")({ error: e, onCleanup: g, onError: d, onSuccess: m });
      if (y === !0) return !0;
      var C =
        n("cr:3096") == null
          ? void 0
          : n("cr:3096")({ error: e, onCleanup: g, onError: d, onSuccess: m });
      if (C === !0) return !0;
      try {
        var b,
          v = p((b = _ == null ? void 0 : _.description) != null ? b : "");
        r("securedActionTriggerChallenge")(v, {
          onExit: function () {
            (d(), g());
          },
          onSuccess: function () {
            (m(), g());
          },
        });
      } catch (e) {
        if ((s.delete(f), e instanceof Error))
          throw r("FBLogger")("secured_action").mustfixThrow(
            "Something when wrong while triggering the dialog: %s",
            e.message,
          );
        return !1;
      }
      return !0;
    }
    l.default = _;
  },
  98,
);
