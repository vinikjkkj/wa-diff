__d(
  "getMarketingMessagesActivationIneligibilityMessage",
  [
    "fbt",
    "AdsInterfacesLogger",
    "AdsManagerURIUtils",
    "GeoLink.react",
    "gkx",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = function (t, n, a, i) {
        var e = r("gkx")("20845");
        return e && i != null
          ? s._(
              /*BTDS*/ "Send marketing messages on WhatsApp to bring customers back to your business. {link}",
              [
                s._param(
                  "link",
                  u.jsx(r("GeoLink.react"), {
                    "data-testid": void 0,
                    onClick: function () {
                      var e;
                      (r("AdsInterfacesLogger").log({
                        eventName:
                          "marketing_message_activation_ineligibility_message_cta_click",
                        data:
                          ((e = {}), (e.source = t), (e.campaign_id = n), e),
                      }),
                        i());
                    },
                    children: s._(/*BTDS*/ "Get started"),
                  }),
                ),
              ],
            )
          : s._(
              /*BTDS*/ "To set up marketing messages on WhatsApp, you need to complete the onboarding process in {=m2}.",
              [
                s._implicitParam(
                  "=m2",
                  u.jsx(r("GeoLink.react"), {
                    "data-testid": void 0,
                    href: o("AdsManagerURIUtils")
                      .getAdsManagerURI("ads_manager_l2_mm_placement", null, {
                        act: a != null ? a : void 0,
                        focus_area: "prereqs",
                        show_mm_onboarding_modal: !0,
                      })
                      .setPath("/adsmanager/manage/accounts"),
                    onClick: function () {
                      var e;
                      r("AdsInterfacesLogger").log({
                        eventName:
                          "marketing_message_activation_ineligibility_message_cta_click",
                        data:
                          ((e = {}), (e.source = t), (e.campaign_id = n), e),
                      });
                    },
                    target: "_blank",
                    children: s._(/*BTDS*/ "Account Overview"),
                  }),
                ),
              ],
            );
      };
    l.getMarketingMessagesActivationIneligibilityMessage = c;
  },
  226,
);
