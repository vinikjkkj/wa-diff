__d(
  "adsMessengerDataModelSetDeprecateQuickRepliesWelcomeMessage",
  [
    "AdsMessengerPageWelcomeMessageDataManager",
    "AdsMessengerVisualEditorCustomerActionType",
    "AdsUEditorHostIDs",
    "AdsUEditorUnifiedCreationUtils",
    "ClickToMessageCTMPerformanceFeatureGating",
    "adsMessengerDataModelSwitchQuickRepliesToIceBreakers",
    "setByPath",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, a, i, l, s, u) {
      var c =
          o(
            "AdsUEditorUnifiedCreationUtils",
          ).getSelectedCustomerActionBasedOnDestination(e, t) ===
          r("AdsMessengerVisualEditorCustomerActionType").QUICK_REPLIES,
        d = babelHelpers.extends({}, e);
      if (
        (e.show_converted_quick_replies_to_icebreakers_guidance_card === !0 &&
          r("setByPath")(
            d,
            ["show_converted_quick_replies_to_icebreakers_guidance_card"],
            !1,
          ),
        c &&
          o(
            "ClickToMessageCTMPerformanceFeatureGating",
          ).deprecateQuickReplies())
      ) {
        var m;
        (e.show_converted_quick_replies_to_icebreakers_guidance_card == null &&
          r("setByPath")(
            d,
            ["show_converted_quick_replies_to_icebreakers_guidance_card"],
            !0,
          ),
          (d = r("adsMessengerDataModelSwitchQuickRepliesToIceBreakers")(e)));
        var p = (m = u == null ? void 0 : u.template_name) != null ? m : i;
        r("AdsMessengerPageWelcomeMessageDataManager").createCustomTemplate(
          a,
          String(n),
          JSON.stringify(d),
          p,
          r("AdsUEditorHostIDs").EDITING,
          l,
          !0,
          s,
        );
      }
      return (r("setByPath")(d, ["is_user_editing"], !1), d);
    }
    l.default = e;
  },
  98,
);
