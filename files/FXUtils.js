__d(
  "FXUtils",
  [
    "fbt",
    "$InternalEnum",
    "FBLogger",
    "MetaBrandFacebookFilled24Icon.react",
    "MetaBrandInstagramFilled24Icon.react",
    "MetaBrandMetaOutline24Icon.react",
    "getFXClientInterfaceName.entrypoint",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e() {
      var e = r("getFXClientInterfaceName.entrypoint")();
      switch (e) {
        case "IG_WEB":
        case "IG_LITE":
          return 1;
        case "FB_WEB":
          return 0;
        case "FRL_WEB":
        case "FRL_IOS":
        case "FRL_ANDROID":
        case "FRL_VR":
          return 4;
        case "THREADS_WEB":
          return 5;
      }
    }
    function u() {
      var e = r("getFXClientInterfaceName.entrypoint")();
      switch (e) {
        case "IG_WEB":
        case "IG_LITE":
          return "INSTAGRAM";
        case "FB_WEB":
          return "FACEBOOK";
        case "FRL_WEB":
        case "FRL_IOS":
        case "FRL_ANDROID":
        case "FRL_VR":
          return "FRL";
        case "THREADS_WEB":
          return "THREADS";
      }
    }
    function c(e) {
      switch (e) {
        case "FB_USER":
        case "FB_PAGE":
        case "FB_ADDITIONAL_PROFILE":
        case "MESSENGER_KID":
          return 0;
        case "FRL_USER":
        case "VR_PROFILE":
        case "ABRA_USER":
        case "META":
          return 4;
        case "IG_USER":
        case "IG_PROFESSIONAL":
          return 1;
        case "WA_USER":
          return 3;
        case "THREADS_USER":
          return 5;
        default:
          throw r("FBLogger")("fx_accounts_center_settings").mustfixThrow(
            "Unexpected IdentityType=% in getMAEntAccountTypeFromIdentityType",
            e,
          );
      }
    }
    function d(e) {
      switch (e) {
        case "FB_USER":
        case "FB_PAGE":
        case "FB_ADDITIONAL_PROFILE":
        case "MESSENGER_SPLIT":
          return 0;
        case "VR_PROFILE":
        case "META":
        case "ABRA_USER":
          return 4;
        case "IG_PERSONAL":
        case "IG_BUSINESS":
        case "IG_CREATOR":
          return 1;
        case "WA_USER":
          return 3;
        case "THREADS_USER":
          return 5;
        default:
          throw r("FBLogger")("fx_accounts_center_settings").mustfixThrow(
            "Unexpected IdentityType=% in getMAEntAccountTypeFromDetailedIdentityType",
            e,
          );
      }
    }
    function m(e) {
      var t;
      return e == null || (t = e.getLinkedRecord("node_v2")) == null
        ? void 0
        : t.getValue("id");
    }
    function p(e) {
      var t;
      return e == null || (t = e.getLinkedRecord("node")) == null
        ? void 0
        : t.getValue("id");
    }
    function _(e) {
      var t;
      return e == null || (t = e.getLinkedRecord("node")) == null
        ? void 0
        : t.getValue("identity_type");
    }
    function f(e) {
      switch (e) {
        case "FACEBOOK":
          return "Facebook";
        case "INSTAGRAM":
          return "Instagram";
        case "FRL":
          return "Oculus";
        case "THREADS":
          return "Threads";
        default:
          throw r("FBLogger")("fx_accounts_center_settings").mustfixThrow(
            "Unsupported MAEntAccountType %s",
            e,
          );
      }
    }
    function g(e) {
      switch (e) {
        case "FACEBOOK":
          return 0;
        case "INSTAGRAM":
          return 1;
        case "WHATSAPP":
          return 3;
        case "FRL":
          return 4;
        case "THREADS":
          return 5;
        default:
          throw r("FBLogger")("fx_accounts_center_settings").mustfixThrow(
            "Unsupported Platform Type %s",
            e,
          );
      }
    }
    function h(e) {
      switch (e) {
        case 0:
          return "FACEBOOK";
        case 1:
          return "INSTAGRAM";
        case 3:
          return "WHATSAPP";
        case 4:
          return "FRL";
        case 5:
          return "THREADS";
        default:
          return null;
      }
    }
    function y(e) {
      switch (e) {
        case "threads_pw_creation":
          return "THREADS_PW_CREATION";
        case "meta_pw_creation":
          return "META_PW_CREATION";
        case "cs_deactivation_passwordless":
          return "CS_DEACTIVATION_PASSWORDLESS";
        case "cs_deletion_passwordless":
          return "CS_DELETION_PASSWORDLESS";
        case "deactivation":
          return "DEACTIVATION";
        case "deactivation_centralized_settings_no_eligible_accounts_for_reauth":
          return "DEACTIVATION_NO_ELIGIBLE_ACCOUNTS_FOR_REAUTH";
        case "deletion":
          return "DELETION";
        case "deletion_no_eligible_accounts_for_reauth":
          return "DELETION_NO_ELIGIBLE_ACCOUNTS_FOR_REAUTH";
        case "generic_centralized_settings_no_eligible_accounts_for_reauth":
          return "GENERIC_CENTRALIZED_SETTINGS_NO_ELIGIBLE_ACCOUNTS_FOR_REAUTH";
        case "sso":
          return "SSO";
        case "unlink":
          return "UNLINK";
      }
    }
    function C(e) {
      if (e)
        switch (e) {
          case "PHONE":
            return "phone";
          case "EMAIL":
            return "email";
          default:
            throw r("FBLogger")("fx_accounts_center_settings").mustfixThrow(
              "Unsupported Platform Type %s",
              e,
            );
        }
      return null;
    }
    function b(e) {
      switch (e) {
        case "FACEBOOK":
          return "FB";
        case "INSTAGRAM":
          return "IG";
        case "FRL":
          return "FRL";
        case "WHATSAPP":
          return "WA";
        case "THREADS":
          return "THREADS";
        case "EXAMPLE":
          return "EXAMPLE";
        default:
          return null;
      }
    }
    function v(e) {
      if (e == null) return null;
      switch (e) {
        case "FB_USER":
        case "FB_ADDITIONAL_PROFILE":
        case "FB_PAGE":
          return "FB";
        case "IG_USER":
        case "IG_PROFESSIONAL":
          return "IG";
        case "VR_PROFILE":
          return "FRL";
        case "ABRA_USER":
          return "META_AI";
        case "WA_USER":
          return "WA";
        case "THREADS_USER":
          return "THREADS";
        case "MESSENGER_KID":
          return "MSGR";
        default:
          return null;
      }
    }
    var S = n("$InternalEnum").Mirrored(["FACEBOOK", "INSTAGRAM", "FRL"]),
      R = n("$InternalEnum").Mirrored([
        "REQUIRE_NEW_NONCE",
        "PASSWORD_EXISTS",
        "GENERIC",
        "RATE_LIMITED",
      ]);
    function L(e, t) {
      switch (e) {
        case 0:
          return s._(/*BTDS*/ "{setting_name}, open in Facebook", [
            s._param("setting_name", t),
          ]);
        case 1:
          return s._(/*BTDS*/ "{setting_name}, open in Instagram", [
            s._param("setting_name", t),
          ]);
        case 4:
          return s._(/*BTDS*/ "{setting_name}, open in meta.com", [
            s._param("setting_name", t),
          ]);
        default:
          return null;
      }
    }
    function E(e) {
      switch (e) {
        case 0:
          return r("MetaBrandFacebookFilled24Icon.react");
        case 1:
          return r("MetaBrandInstagramFilled24Icon.react");
        case 4:
          return r("MetaBrandMetaOutline24Icon.react");
        default:
          return null;
      }
    }
    ((l.getFXClientActorAccountType = e),
      (l.getFXClientActorPlatform = u),
      (l.getMAEntAccountTypeFromIdentityType = c),
      (l.getMAEntAccountTypeFromDetailedIdentityType = d),
      (l.getFXAccountId = m),
      (l.getFXIdentityId = p),
      (l.getFXIdentityType = _),
      (l.getPlatformName = f),
      (l.getMAEntAccountTypeFromPlatformName = g),
      (l.getPlatformNameFromMAEntAccountType = h),
      (l.getFXPasswordlessFlowTypeFromEntrypointName = y),
      (l.getFXPasswordlessContactPointTypeName = C),
      (l.convertPlatformToString = b),
      (l.convertIdentityTypeToPlatform = v),
      (l.AccountType = S),
      (l.PasswordlessFlowCreatePasswordErrorDialogType = R),
      (l.getAriaLabelFromMAEntAccountType = L),
      (l.getPlatformIconSvgFromMAEntAccountType = E));
  },
  226,
);
