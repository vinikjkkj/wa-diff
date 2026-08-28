__d(
  "ClickToMessagingStrings",
  [
    "fbt",
    "AHGHelpTrayLink2.react",
    "AdsInterfacesLogger",
    "AdsLearnMore.react",
    "AdsUnificationConversionContent",
    "AdsWhatsAppConnectAccountDialogOpenDialogDataAction",
    "GeoLink.react",
    "geoMargin",
    "qex",
    "react",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = u || (u = o("react")),
      d = s._(/*BTDS*/ "Destination"),
      m = s._(
        /*BTDS*/ "Set up your message ad and where you want people to message you.",
      ),
      p = o(
        "AdsUnificationConversionContent",
      ).getMessagingAppsMessageDestinationDescriptionStringOrDefault(
        s._(
          /*BTDS*/ "Choose at least one destination where you are available to chat. If you select multiple apps, we\u2019ll send people who tap on your ad to the app where they're most likely to chat with you.",
        ),
      ),
      _ = s._(/*BTDS*/ "Message destination label"),
      f =
        r("qex")._("4580") === !0
          ? s._(
              /*BTDS*/ "Choose where to chat with people after they see your ad. {help center article link}",
              [
                s._param(
                  "help center article link",
                  c.jsx(r("AHGHelpTrayLink2.react"), {
                    helpCenterID: "1192884166182156",
                    label: s._(/*BTDS*/ "How this works"),
                  }),
                ),
              ],
            )
          : s._(
              /*BTDS*/ "Choose where to chat with people after they see your ad. {=m1}",
              [
                s._implicitParam(
                  "=m1",
                  c.jsx(r("GeoLink.react"), {
                    href: "https://www.facebook.com/business/help/1192884166182156",
                    target: "_blank",
                    children: s._(/*BTDS*/ "{help center article link}", [
                      s._param(
                        "help center article link",
                        s._(/*BTDS*/ "How this works"),
                      ),
                    ]),
                  }),
                ),
              ],
            ),
      g = s._(
        /*BTDS*/ '_j["Automatic destination (recommended)","e3748b4a1576d29911723c53a3dc0393",1]',
      ),
      h = s._(
        /*BTDS*/ '_j["Automatic destination","7265e6a6816c9adae4fdbc31d5bf38a5",1]',
      ),
      y = s._(/*BTDS*/ "automatic destination"),
      C = s._(
        /*BTDS*/ "We'll send people to the messaging app where they engage most and lower ad costs.",
      ),
      b = s._(/*BTDS*/ "Manual destination"),
      v = s._(/*BTDS*/ "manual destination"),
      S = s._(
        /*BTDS*/ "We'll only send people to the messaging apps you choose.",
      ),
      R = s._(/*BTDS*/ "Account number"),
      L = s._(
        /*BTDS*/ "Everyone will contact you on this WhatsApp Business account. Select a geographical area in the audience section.",
      ),
      E = s._(/*BTDS*/ "Store set"),
      k = s._(
        /*BTDS*/ "People will contact the closest store's WhatsApp Business account. Select or edit a store set in the audience section.",
      ),
      I = s._(/*BTDS*/ "Missing WhatsApp account"),
      T = s._(
        /*BTDS*/ "To select \u201cAccount number\u201d, connect your WhatsApp account.",
      ),
      D = s._(/*BTDS*/ "Stores not connected to WhatsApp accounts"),
      x = s._(
        /*BTDS*/ "To select \u201cStore Set\u201d, you first need to connect WhatsApp accounts to your stores\u2019 Pages.",
      ),
      $ = s._(/*BTDS*/ "Multiple apps selected"),
      P = s._(
        /*BTDS*/ "To select \u201cStore Set\u201d, WhatsApp must be the only app selected.",
      ),
      N = s._(/*BTDS*/ "Facebook Page"),
      M = s._(/*BTDS*/ "Instagram profile"),
      w = s._(/*BTDS*/ "Choose a Page for this ad."),
      A = s._(
        /*BTDS*/ "This Instagram profile will represent your business in your ad and conversation.",
      ),
      F = s._(/*BTDS*/ "Business assets"),
      O = s._(
        /*BTDS*/ "These assets will represent your business in your ad and conversation.",
      ),
      B = o(
        "AdsUnificationConversionContent",
      ).getMessagingAppsFacebookDescriptionStringOrDefault(w),
      W = s._(
        /*BTDS*/ "Messenger does not support this message template. Your ad will only click to Instagram Direct.",
      ),
      q = s._(
        /*BTDS*/ "WhatsApp does not support this message template. Your ad will only click to Messenger.",
      ),
      U = s._(
        /*BTDS*/ "Instagram Direct does not support this message template. Your ad will only click to Messenger.",
      ),
      V = s._(
        /*BTDS*/ "When WhatsApp is selected for an ad with multiple destinations, detailed targeting is always expanded. This lets us show your ad to more people to get you more and\/or cheaper results.",
      ),
      H = s._(
        /*BTDS*/ "When WhatsApp is selected as the ad destination, detailed targeting is always expanded. This lets us show your ad to more people to get you more and\/or cheaper results.",
      ),
      G = s._(/*BTDS*/ "Advantage+ detailed targeting required"),
      z = s._(
        /*BTDS*/ "When WhatsApp is selected for an ad with multiple destinations, detailed targeting must be expanded. To do this, duplicate your saved audience and select Advantage+ detailed targeting. Or, you can select a different saved audience with Advantage+ detailed targeting.",
      ),
      j = s._(/*BTDS*/ "Chat with us"),
      K = s._(/*BTDS*/ "Can't find a Page? {help center link}", [
        s._param(
          "help center link",
          c.jsx(r("AdsLearnMore.react"), {
            cmsID: "125897810822573",
            onClick: function () {
              r("AdsInterfacesLogger").log({
                eventName: "can_not_find_page_help_center_link_clicked",
              });
            },
          }),
        ),
      ]),
      Q = s._(/*BTDS*/ "Continue without Page"),
      X = s._(/*BTDS*/ "Can't find an Instagram Account? {help center link}", [
        s._param(
          "help center link",
          c.jsx(r("AdsLearnMore.react"), { cmsID: "1125825714110549" }),
        ),
      ]);
    function Y(e) {
      return s._(/*BTDS*/ "Connected to {Page name}", [
        s._param("Page name", e.name),
      ]);
    }
    Y.displayName = Y.name + " [from " + i.id + "]";
    function J(e) {
      return e != null
        ? s._(/*BTDS*/ "Connected to {Business name} business account", [
            s._param("Business name", e),
          ])
        : null;
    }
    var Z = "740584787427208";
    function ee(t, n, o) {
      return o
        ? s._(
            /*BTDS*/ '_j{"*":"{Page name} can\'t respond to messages in Messenger for {number} days because it didn\'t follow our Community Standards. This may impact the delivery of your ad set during the restriction.","_1":"{Page name} can\'t respond to messages in Messenger for 1 day because it didn\'t follow our Community Standards. This may impact the delivery of your ad set during the restriction."}',
            [s._plural(n, "number"), s._param("Page name", t)],
          )
        : s._(
            /*BTDS*/ '_j{"*":"{Page name} can\'t respond to messages in Messenger for {number} days because it didn\'t follow our Community Standards. This may impact the delivery of your ad set during the restriction. Consider duplicating this ad set and setting the start date to after the messaging restriction ends. {learnMoreLink}","_1":"{Page name} can\'t respond to messages in Messenger for 1 day because it didn\'t follow our Community Standards. This may impact the delivery of your ad set during the restriction. Consider duplicating this ad set and setting the start date to after the messaging restriction ends. {learnMoreLink}"}',
            [
              s._plural(n, "number"),
              s._param("Page name", t),
              s._param(
                "learnMoreLink",
                c.jsx(
                  "div",
                  babelHelpers.extends(
                    {},
                    (e || (e = r("stylex"))).props(r("geoMargin").top8),
                    {
                      children: c.jsx(r("AHGHelpTrayLink2.react"), {
                        helpCenterID: Z,
                        label: s._(/*BTDS*/ "About messaging restrictions"),
                      }),
                    },
                  ),
                ),
              ),
            ],
          );
    }
    function te(e, t) {
      return t
        ? s._(
            /*BTDS*/ '_j{"*":"Your Page can\'t respond to messages in Messenger for {number} days because it didn\'t follow our Community Standards. This may impact the delivery of your ad set. Ads with Instagram or WhatsApp as the destination won\'t be affected.","_1":"Your Page can\'t respond to messages in Messenger for 1 day because it didn\'t follow our Community Standards. This may impact the delivery of your ad set. Ads with Instagram or WhatsApp as the destination won\'t be affected."}',
            [s._plural(e, "number")],
          )
        : s._(
            /*BTDS*/ '_j{"*":"Your Page can\'t respond to messages in Messenger for {number} days because it didn\'t follow our Community Standards. This may impact the delivery of your ad set.","_1":"Your Page can\'t respond to messages in Messenger for 1 day because it didn\'t follow our Community Standards. This may impact the delivery of your ad set."}',
            [s._plural(e, "number")],
          );
    }
    te.displayName = te.name + " [from " + i.id + "]";
    var ne = s._(
        /*BTDS*/ "Set the start date to after the messaging restriction ends",
      ),
      re = s._(/*BTDS*/ "The schedule was updated."),
      oe = s._(/*BTDS*/ "Messaging restricted"),
      ae = s._(/*BTDS*/ "Actions you can take"),
      ie = s._(
        /*BTDS*/ "You can duplicate your ad set and set the start date to after the messaging restriction ends.",
      ),
      le = s._(/*BTDS*/ "Duplicate ad set"),
      se = s._(
        /*BTDS*/ "First, choose a Facebook Page to connect your Instagram profile to. Only pages that are not currently connected to an Instagram profile are eligible.",
      ),
      ue = "https://www.instagram.com/",
      ce = s._(
        /*BTDS*/ "The headline will only appear in Facebook Feed and Facebook Stories placements.",
      ),
      de = s._(
        /*BTDS*/ "Get people to engage with your brand on Messenger, WhatsApp or Instagram.",
      ),
      me = s._(
        /*BTDS*/ "Drive sales and conversions through Messenger, Instagram and WhatsApp.",
      ),
      pe = s._(/*BTDS*/ "Send traffic to Messenger, Instagram and WhatsApp."),
      _e = s._(
        /*BTDS*/ "Get people to engage with your brand on Instagram Direct.",
      ),
      fe = s._(
        /*BTDS*/ "Drive sales and conversions through messages on Instagram.",
      ),
      ge = s._(/*BTDS*/ "Send traffic to Instagram Direct."),
      he = s._(/*BTDS*/ "This destination requires a Facebook Page."),
      ye = s._(
        /*BTDS*/ "To select WhatsApp as your destination, connect your WhatsApp account or assign yourself to an existing one.",
      ),
      Ce = s._(
        /*BTDS*/ "To select WhatsApp as your destination, connect your WhatsApp Business account.",
      ),
      be = s._(/*BTDS*/ "Read only page field"),
      ve = s._(/*BTDS*/ ""),
      Se = s._(/*BTDS*/ "Cloud API number"),
      Re = s._(/*BTDS*/ "Pending"),
      Le = s._(/*BTDS*/ "Connected to your Instagram account");
    function Ee(e, t, n) {
      return s._(
        /*BTDS*/ "Phone number pending. The business admin must complete setup, or you can connect a WhatsApp Business phone number to create an ad. {Connect Another Number}",
        [
          s._param(
            "Connect Another Number",
            n
              ? c.jsxs(r("GeoLink.react"), {
                  onClick: function () {
                    (r("AdsInterfacesLogger").log({
                      eventName:
                        "am_cloud_api_pending_number_displayed_connect_another_number_clicked",
                    }),
                      r(
                        "AdsWhatsAppConnectAccountDialogOpenDialogDataAction",
                      ).dispatch(
                        { pageID: e, pageToken: t },
                        {
                          line: "625",
                          module: "ClickToMessagingStrings.js",
                          moduleID: i.id,
                        },
                      ));
                  },
                  showUnderline: "hover",
                  children: [
                    c.jsx("br", {}),
                    s._(/*BTDS*/ "Connect another number"),
                  ],
                })
              : "",
          ),
        ],
      );
    }
    Ee.displayName = Ee.name + " [from " + i.id + "]";
    function ke() {
      return s._(
        /*BTDS*/ "Please select a Facebook Page above in order to use this WhatsApp number.",
      );
    }
    ke.displayName = ke.name + " [from " + i.id + "]";
    function Ie(e, t, n) {
      return s._(
        /*BTDS*/ "WhatsApp Cloud API phone number is pending. The business admin must verify the number to complete setup, or you can connect a WhatsApp Business phone number to create an ad. {Connect Another Number}",
        [
          s._param(
            "Connect Another Number",
            n
              ? c.jsxs(r("GeoLink.react"), {
                  onClick: function () {
                    (r("AdsInterfacesLogger").log({
                      eventName:
                        "am_cloud_api_page_linking_improvements_connect_another_number_clicked",
                    }),
                      r(
                        "AdsWhatsAppConnectAccountDialogOpenDialogDataAction",
                      ).dispatch(
                        { pageID: e, pageToken: t },
                        {
                          line: "670",
                          module: "ClickToMessagingStrings.js",
                          moduleID: i.id,
                        },
                      ));
                  },
                  showUnderline: "hover",
                  children: [
                    c.jsx("br", {}),
                    s._(/*BTDS*/ "Connect another number"),
                  ],
                })
              : "",
          ),
        ],
      );
    }
    ((Ie.displayName = Ie.name + " [from " + i.id + "]"),
      (l.MESSAGE_DESTINATIONS_HEADER_LABEL = d),
      (l.MESSAGE_DESTINATIONS_DESCRIPTION = m),
      (l.MESSAGING_APP_DESTINATION_DESCRIPTION = p),
      (l.MESSAGE_DESTINATION_LABEL = _),
      (l.MESSAGING_APP_DESTINATION_DESCRIPTION_FOR_DYNAMIC_MESSAGING = f),
      (l.MESSAGING_APP_AUTOMATIC_DESTINATION_TITLE = g),
      (l.MESSAGING_APP_PGD_AUTOMATIC_DESTINATION_LABEL = h),
      (l.MESSAGING_APP_AUTOMATIC_DESTINATION_RAIOD_BUTTON_LABEL = y),
      (l.MESSAGING_APP_AUTOMATIC_DESTINATION_DESCRIPTION = C),
      (l.MESSAGING_APP_MANUAL_DESTINATION_TITLE = b),
      (l.MESSAGING_APP_MANUAL_DESTINATION_RAIOD_BUTTON_LABEL = v),
      (l.MESSAGING_APP_MANUAL_DESTINATION_DESCRIPTION = S),
      (l.WHATSAPP_ACCOUNT_NUMBER_RADIO_OPTION_TITLE = R),
      (l.WHATSAPP_ACCOUNT_NUMBER_RADIO_OPTION_DESCRIPTION = L),
      (l.WHATSAPP_STORE_SET_RADIO_OPTION_TITLE = E),
      (l.WHATSAPP_STORE_SET_RADIO_OPTION_DESCRIPTION = k),
      (l.WHATSAPP_ACCOUNT_NUMBER_DISABLED_RADIO_OPTION_TOOLTIP_TITLE = I),
      (l.WHATSAPP_ACCOUNT_NUMBER_DISABLED_RADIO_OPTION_TOOLTIP_DESCRIPTION = T),
      (l.WHATSAPP_STORE_SET_DISABLED_DUE_TO_LACK_OF_WA_RADIO_OPTION_TOOLTIP_TITLE =
        D),
      (l.WHATSAPP_STORE_SET_DISABLED_DUE_TO_LACK_OF_WA_RADIO_OPTION_TOOLTIP_DESCRIPTION =
        x),
      (l.WHATSAPP_STORE_SET_DISABLED_RADIO_DUE_TO_MULTI_APP_SELECTION_OPTION_TOOLTIP_TITLE =
        $),
      (l.WHATSAPP_STORE_SET_DISABLED_RADIO_DUE_TO_MULTI_APP_SELECTION_OPTION_TOOLTIP_DESCRIPTION =
        P),
      (l.FACEBOOK_PAGE_LABEL = N),
      (l.INSTAGRAM_ACCOUNT_LABEL = M),
      (l.INSTAGRAM_ACCOUNT_DESCRIPTION = A),
      (l.BUSINESS_ASSETS_LABEL = F),
      (l.BUSINESS_ASSETS_DESCRIPTION = O),
      (l.FACEBOOK_PAGE_DESCRIPTION = B),
      (l.INVALID_PREVIEW_MESSENGER = W),
      (l.INVALID_PREVIEW_WHATSAPP = q),
      (l.INVALID_PREVIEW_INSTAGRAM_DIRECT = U),
      (l.DETAILED_TARGETING_EXPANSION_TIP_FOR_CLICK_TO_MESSAGE_AD = V),
      (l.DETAILED_TARGETING_EXPANSION_TIP_FOR_CLICK_TO_WHATSAPP_AD = H),
      (l.ENFORCE_EXPANSION_ON_FOR_CLICK_TO_MESSAGE_AD_TITLE = G),
      (l.ENFORCE_EXPANSION_ON_FOR_CLICK_TO_MESSAGE_AD_BODY = z),
      (l.DEFAULT_HEADLINE = j),
      (l.PAGE_DROPDOWN_FOOTER_WITH_LOGGING = K),
      (l.CONTINUE_WITHOUT_PAGE_BUTTON_LABEL = Q),
      (l.INTAGRAM_DROPDOWN_FOOTER = X),
      (l.getConnectedPageSubtitle = Y),
      (l.getConnectedBusinessSubtitle = J),
      (l.BUSINESS_MESSAGING_HELPCENTER_ID = Z),
      (l.getMessagingFeatureLimitWarning = ee),
      (l.getMessagingFeatureLimitWarningForCampaignTable = te),
      (l.MESSAGING_RESTRICTED_CHANGE_START_DATE = ne),
      (l.MESSAGING_RESTRICTED_SCHEDULE_CHANGED_SUCCESS_TOAST = re),
      (l.MESSAGING_FEATURE_LIMIT_WARNING_HEADER_FOR_CAMPAIGN_TABLE = oe),
      (l.MESSAGING_FEATURE_LIMIT_WARNING_ACTION_HEADER_FOR_CAMPAIGN_TABLE = ae),
      (l.MESSAGING_FEATURE_LIMIT_WARNING_ACTION_FOR_CAMPAIGN_TABLE = ie),
      (l.MESSAGING_FEATURE_LIMIT_WARNING_CTA_FOR_CAMPAIGN_TABLE = le),
      (l.CONNECT_INSTAGRAM_ACCOUNT = se),
      (l.DEFAULT_INSTAGRAM_LINK = ue),
      (l.CTDOnFBHeadlineTooltip = ce),
      (l.MESSAGING_APPS_ODAX_CONVERSION_CHANNEL_STRING_ENGAGEMENT = de),
      (l.MESSAGING_APPS_ODAX_CONVERSION_CHANNEL_STRING_SALES = me),
      (l.MESSAGING_APPS_ODAX_CONVERSION_CHANNEL_STRING_TRAFFIC = pe),
      (l.INSTAGRAM_DIRECT_ODAX_CONVERSION_CHANNEL_STRING_ENGAGEMENT = _e),
      (l.INSTAGRAM_DIRECT_ODAX_CONVERSION_CHANNEL_STRING_SALES = fe),
      (l.INSTAGRAM_DIRECT_ODAX_CONVERSION_CHANNEL_STRING_TRAFFIC = ge),
      (l.MESSAGING_APPS_PAGE_REQUIREMENT_STRING = he),
      (l.DISABLE_WHATSAPP_DESTINATION_HOVER_STRING = ye),
      (l.PAGELESS_DISABLE_WHATSAPP_DESTINATION_HOVER_STRING = Ce),
      (l.READ_ONLY_PAGE_LABEL = be),
      (l.EMPTY_FBT_STRING = ve),
      (l.CONNECTED_CLOUD_API_SUBTITLE = Se),
      (l.CLOUD_API_NUMBERS_STATUS_PENDING_PILL = Re),
      (l.CTWA_IG_LINKED_WHATSAPP_NUMBER_LABEL = Le),
      (l.getCloudAPINumberStatusPendingToolTipWithLink = Ee),
      (l.getNonCloudAPINumberPagelessCTWAToolTip = ke),
      (l.getPageLinkedCloudAPINumberStatusPendingToolTipWithLink = Ie));
  },
  226,
);
