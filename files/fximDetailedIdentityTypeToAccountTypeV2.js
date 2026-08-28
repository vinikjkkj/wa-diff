__d(
  "fximDetailedIdentityTypeToAccountTypeV2",
  ["FBLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      switch (e) {
        case "FB_USER":
        case "FB_PAGE":
        case "FB_ADDITIONAL_PROFILE_WITH_BIZ_TOOLS":
        case "FB_ADDITIONAL_PROFILE":
          return "FACEBOOK";
        case "VR_PROFILE":
        case "META":
        case "ABRA_USER":
          return "FRL";
        case "IG_PERSONAL":
        case "IG_BUSINESS":
        case "IG_CREATOR":
        case "THREADS_USER":
          return "INSTAGRAM";
        case "WA_USER":
          return "WHATSAPP";
        case "EXAMPLE":
          return "EXAMPLE";
        case "SOLO_USER":
          return "SOLO";
        default:
          throw r("FBLogger")("fx_accounts_center_settings").mustfixThrow(
            "Unexpected detailedIdentityType=% in fximDetailedIdentityTypeToAccountTypeV2",
            e,
          );
      }
    }
    l.default = e;
  },
  98,
);
