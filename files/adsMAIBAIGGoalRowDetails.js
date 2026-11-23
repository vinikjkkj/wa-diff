__d(
  "adsMAIBAIGGoalRowDetails",
  [
    "PolarisBoostMessagingAppsSelectionStrings",
    "PolarisBoostObjectiveScreenStrings",
    "adsMAIBABuildCTAMenuItems",
    "adsMAIBADestinationTypeToLabel",
    "adsMAIBAFormatIGGoalSummary",
    "adsMAIBAIGMessagingConfig",
    "emptyArray",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      e: {
        if (e === "PROFILE_VISITS") {
          var n = r("adsMAIBAFormatIGGoalSummary")(
            "INSTAGRAM_HANDLE",
            t.creativeLinkUrl,
            t.creativeInstagramUsername,
          );
          return n == null ? r("emptyArray") : [n];
        }
        if (e === "WEBSITE_CLICK" || e === "OUTCOME_SALES") {
          var a = [],
            i = r("adsMAIBAFormatIGGoalSummary")(
              "WEBSITE_URL",
              t.creativeLinkUrl,
            );
          return (i != null && a.push(i), u(a, t.callToActionType), a);
          break e;
        }
        if (e === "DIRECT_MESSAGE" || e === "WHATSAPP_MESSAGE") {
          var l = [],
            c =
              t.destinationType === "INSTAGRAM_DIRECT"
                ? o(
                    "PolarisBoostObjectiveScreenStrings",
                  ).MESSAGING_APP_SCREEN_INSTAGRAM_OPTION.toString()
                : t.destinationType === "WHATSAPP"
                  ? o(
                      "PolarisBoostMessagingAppsSelectionStrings",
                    ).MESSAGING_APP_SCREEN_WHATSAPP_OPTION.toString()
                  : r("adsMAIBADestinationTypeToLabel")(t.destinationType);
          return (
            c != null &&
              l.push(
                o(
                  "PolarisBoostObjectiveScreenStrings",
                ).getObjectiveScreenDestinationDetail(String(c)),
              ),
            s(l, t.callToActionType),
            l
          );
          break e;
        }
        return r("emptyArray");
      }
    }
    function s(e, t) {
      t == null ||
        t === "" ||
        t === "NO_BUTTON" ||
        e.push(
          o(
            "PolarisBoostObjectiveScreenStrings",
          ).getObjectiveScreenMessagingButtonDetail(
            o("adsMAIBAIGMessagingConfig").getIGMessagingCallToActionLabel(t),
          ),
        );
    }
    function u(e, t) {
      if (
        !(
          t == null ||
          t === "" ||
          t === o("adsMAIBABuildCTAMenuItems").NO_BUTTON
        )
      ) {
        var n = o("adsMAIBABuildCTAMenuItems").adsMAIBAFormatCTALabel(t);
        n != null &&
          e.push(
            o(
              "PolarisBoostObjectiveScreenStrings",
            ).getObjectiveScreenActionButtonDetail(String(n)),
          );
      }
    }
    l.default = e;
  },
  98,
);
