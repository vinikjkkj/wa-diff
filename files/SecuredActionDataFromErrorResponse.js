__d(
  "SecuredActionDataFromErrorResponse",
  [
    "FBLogger",
    "FXUtils",
    "SensitiveActionProtectionBlockMode",
    "XFBSensitiveActionProtectionBlockMode.facebook",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      try {
        var t = JSON.parse(e),
          n = t.challenge_type;
        return (
          n !== "reauth" &&
            n !== "2fac" &&
            r("FBLogger")("secured_action").warn(
              "%s challenge is not supported by securedActionDataFromErrorResponseString",
              n,
            ),
          (t.account_type = o("FXUtils").getPlatformNameFromMAEntAccountType(
            t.account_type,
          )),
          (t.context = s(t.context)),
          (t.account_id = ""),
          t
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
    function s(e) {
      try {
        var t,
          n = JSON.parse(e);
        if (n == null) return null;
        var o =
          (t = Object.entries(r("SensitiveActionProtectionBlockMode")).find(
            function (e) {
              var t = e[0],
                r = e[1];
              return r === n.mode;
            },
          )) == null
            ? void 0
            : t[0];
        return {
          mode: r("XFBSensitiveActionProtectionBlockMode.facebook").cast(o),
        };
      } catch (t) {
        return (
          t instanceof Error &&
            r("FBLogger")("secured_action")
              .catching(t)
              .mustfix("Failed to parse challenge context JSON: %s", e),
          null
        );
      }
    }
    ((l.securedActionDataFromErrorResponseString = e),
      (l.jsonDecodeChallengeContext = s));
  },
  98,
);
