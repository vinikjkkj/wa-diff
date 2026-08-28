__d(
  "AdsDeliveryOmnichannelStrings",
  [
    "fbt",
    "AdsLearnMore.react",
    "AdsUEditorAdgroupOmnichannelAppPrimaryDestinationType",
    "AdsUEditorAdgroupOmnichannelAppSecondaryDestinationType",
    "isAccountEligibleForThreeCOL2AdEx",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = s._(/*BTDS*/ "Choose a deep link destination"),
      d = [
        { name: "web_only", title: s._(/*BTDS*/ "Mobile browser") },
        {
          name: "deeplink_with_web_fallback",
          title: s._(
            /*BTDS*/ "App, with mobile browser for people without the app",
          ),
        },
        {
          name: "deeplink_with_appstore_fallback",
          title: s._(/*BTDS*/ "App, with app store for people without the app"),
        },
      ],
      m = [
        {
          name: o("AdsUEditorAdgroupOmnichannelAppPrimaryDestinationType")
            .WEB_ONLY,
          title: s._(/*BTDS*/ "Website"),
        },
        {
          name: o("AdsUEditorAdgroupOmnichannelAppPrimaryDestinationType")
            .APP_FALLBACK,
          title: s._(/*BTDS*/ "App"),
        },
      ],
      p = [
        {
          name: o("AdsUEditorAdgroupOmnichannelAppSecondaryDestinationType")
            .DEEPLINK_WITH_WEB_FALLBACK,
          title: s._(/*BTDS*/ "Website"),
        },
        {
          name: o("AdsUEditorAdgroupOmnichannelAppSecondaryDestinationType")
            .DEEPLINK_WITH_APPSTORE_FALLBACK,
          title: s._(/*BTDS*/ "App Store"),
        },
      ],
      _ = [
        {
          name: o("AdsUEditorAdgroupOmnichannelAppSecondaryDestinationType")
            .DEEPLINK_WITH_WEB_FALLBACK,
          title: s._(/*BTDS*/ "Website"),
        },
        {
          name: o("AdsUEditorAdgroupOmnichannelAppSecondaryDestinationType")
            .DEEPLINK_WITH_APPSTORE_FALLBACK,
          title: s._(/*BTDS*/ "App store"),
        },
      ],
      f = [
        {
          name: "ios",
          label: s._(/*BTDS*/ "IOS Deep Links"),
          placeholder: s._(/*BTDS*/ "Enter the app deep link"),
        },
        {
          name: "android",
          label: s._(/*BTDS*/ "Android Deep Links"),
          placeholder: s._(/*BTDS*/ "Enter the app deep link"),
        },
      ],
      g = s._(
        /*BTDS*/ "Choose where to send users who click on your ad in one of our apps. Selecting your app as the destination requires a fallback for people without your app.",
      ),
      h = s._(/*BTDS*/ "Send people to either your app or website URL."),
      y = s._(
        /*BTDS*/ "Send people to either your website or your app, if they have it installed.",
      ),
      C = s._(
        /*BTDS*/ "If people don't have your app installed, send them to either your website or app store instead.",
      ),
      b = s._(
        /*BTDS*/ "If people don't have your app installed, send them to either your website or app store instead.",
      ),
      v = s._(/*BTDS*/ "In-App Ad Destination"),
      S = s._(/*BTDS*/ "Primary destination"),
      R = s._(/*BTDS*/ "Default destination"),
      L = s._(/*BTDS*/ "Secondary destination"),
      E = s._(/*BTDS*/ "Backup destination"),
      k = s._(/*BTDS*/ "App Store"),
      I = s._(/*BTDS*/ "Select an app store"),
      T = s._(/*BTDS*/ "Choose a conversion event"),
      D = s._(
        /*BTDS*/ "You can only optimize for events that are set up on both your Pixel and SDK.",
      ),
      x = function () {
        return s._(
          /*BTDS*/ "You can only optimize for events that are tracked by your Pixel and App SDK. {link to learn more about which events are eligible when building a website and app event for 3CO}",
          [
            s._param(
              "link to learn more about which events are eligible when building a website and app event for 3CO",
              u.jsx(r("AdsLearnMore.react"), {
                cmsID: "503340234890396",
                label: o("isAccountEligibleForThreeCOL2AdEx").is3coDogfoodFix()
                  ? s._(/*BTDS*/ "About eligible events for website and app")
                  : null,
              }),
            ),
          ],
        );
      },
      $ = s._(/*BTDS*/ "* Conversion event"),
      P = s._(/*BTDS*/ "Website and app"),
      N = s._(/*BTDS*/ "Remove Deep Links"),
      M = s._(/*BTDS*/ "Add Deep Links"),
      w = s._(/*BTDS*/ "iOS deep link"),
      A = s._(/*BTDS*/ "Android deep link"),
      F = s._(/*BTDS*/ "Deep link"),
      O = s._(/*BTDS*/ "Mobile app"),
      B = s._(
        /*BTDS*/ "Conversions is the only optimization available when you select both web and app as the places you want conversions to happen.",
      ),
      W = s._(/*BTDS*/ "Enter the app deep link"),
      q = s._(/*BTDS*/ "Enter the deep link URL"),
      U = s._(/*BTDS*/ "Advantage+ destination"),
      V = s._(/*BTDS*/ "Advantage+ destination"),
      H = s._(
        /*BTDS*/ "When people tap or click your ad, we\u2019ll send them to your website or app depending on where they\u2019re most likely to convert. If applicable, we\u2019ll send them to an app store.",
      ),
      G = s._(
        /*BTDS*/ "When people tap or click your ad, we\u2019ll send them to your website, shop or app depending on where they\u2019re most likely to convert. If applicable, we\u2019ll send them to an app store.",
      ),
      z = s._(
        /*BTDS*/ '_j["Manual destination","f65726ca86623bdcf58a0039a994ffd1",1]',
      ),
      j = s._(
        /*BTDS*/ "When people tap or click your ad, we\u2019ll send them to the destinations you specify.",
      ),
      K = s._(/*BTDS*/ "Mixed destination"),
      Q = s._(
        /*BTDS*/ "This app selection is based on your selection in the App SDK section. If people don\u2019t have your app installed on their device, we\u2019ll send them to your website or an app store instead.",
      ),
      X = s._(
        /*BTDS*/ "This option can't be selected because your app isn't available in either the Google Play store or the App Store.",
      ),
      Y = s._(
        /*BTDS*/ "Dynamic destination is not available when a Special Ad Category is selected.",
      ),
      J = s._(
        /*BTDS*/ "Advantage+ destination is not available when a Special Ad Category is selected.",
      ),
      Z = s._(
        /*BTDS*/ "Advantage+ destination is not available when a Special Ad Category is selected.",
      ),
      ee = s._(
        /*BTDS*/ "This app has been selected based on your conversion event. You can edit this for your ad set.",
      ),
      te = s._(/*BTDS*/ "No app selected"),
      ne = s._(
        /*BTDS*/ "To use app as a destination, select a conversion event in your ad set.",
      );
    ((l.APP_LINK_PLACEHOLDER = c),
      (l.APP_LINK_TREATMENT_TYPES = d),
      (l.PRIMARY_DESTINATION_TYPES = m),
      (l.SECONDARY_DESTINATION_TYPES = p),
      (l.SECONDARY_DESTINATION_TYPES_3CO_DEMO = _),
      (l.APP_DEEP_LINK_TYPES = f),
      (l.OMNICHANNEL_APP_LINK_TREATMENT_INFO_ICON_DESCRIPTION = g),
      (l.OMNICHANNEL_PRIMARY_APP_LINK_TREATMENT_INFO_ICON_DESCRIPTION = h),
      (l.OMNICHANNEL_DEFAULT_APP_LINK_TREATMENT_INFO_ICON_DESCRIPTION = y),
      (l.OMNICHANNEL_SECONDARY_APP_LINK_TREATMENT_INFO_ICON_DESCRIPTION = C),
      (l.OMNICHANNEL_BACKUP_APP_LINK_TREATMENT_INFO_ICON_DESCRIPTION = b),
      (l.OMNICHANNEL_APP_LINK_TREATMENT_LABEL = v),
      (l.OMNICHANNEL_PRIMARY_APP_LINK_TREATMENT_LABEL = S),
      (l.OMNICHANNEL_DEFAULT_APP_LINK_TREATMENT_LABEL = R),
      (l.OMNICHANNEL_SECONDARY_APP_LINK_TREATMENT_LABEL = L),
      (l.OMNICHANNEL_BACKUP_APP_LINK_TREATMENT_LABEL = E),
      (l.OMNICHANNEL_APP_STORE_LABEL = k),
      (l.OMNICHANNEL_APP_STORE_PLACEHOLDER = I),
      (l.OMNICHANNEL_CONVERSION_EVENT_PLACEHOLDER = T),
      (l.OMNICHANNEL_CONVERSION_EVENT_WEBSITE_AND_APP_SUB_TITLE = D),
      (l.omnichannelConversionEventWebsiteAndAppSubtitleAemV2 = x),
      (l.OMNICHANNEL_CONVERSION_EVENT_TITLE = $),
      (l.OMNICHANNEL_RADIO_BUTTON_LABEL = P),
      (l.REMOVE_DEEP_LINKS_LABEL = N),
      (l.ADD_DEEP_LINKS_LABEL = M),
      (l.IOS_DEEP_LINK_LABEL = w),
      (l.ANDROID_DEEP_LINK_LABEL = A),
      (l.UNIFIED_DEEP_LINK_LABEL = F),
      (l.SDH_MOBILE_APP_LABEL = O),
      (l.OMNICHANNEL_CONVERSIONS_DESCRIPTION = B),
      (l.OMNICHANNEL_DEEP_LINK_PLACEHOLDER = W),
      (l.THREECO_FIX_OMNICHANNEL_DEEP_LINK_PLACEHOLDER = q),
      (l.SDH_DYNAMIC_BUTTON_LABEL = U),
      (l.SDH_DYNAMIC_PLUS_BUTTON_LABEL = V),
      (l.SDH_DYNAMIC_DESCRIPTION = H),
      (l.SDH_DYNAMIC_DESCRIPTION_WITH_SHOP = G),
      (l.SDH_MANUAL_BUTTON_LABEL = z),
      (l.SDH_MANUAL_DESCRIPTION = j),
      (l.SDH_MIXED_BUTTON_LABEL = K),
      (l.SDH_MOBILE_APP_HEADER_TOOLTIP = Q),
      (l.APP_FALLBACK_APPSTORE_UNAVAILEBLE_TOOLTIP = X),
      (l.DISABLED_AUTOMATIC_DESTINATION_TOOLTIP = Y),
      (l.DISABLED_ADVANTAGE_DESTINATION_TOOLTIP = J),
      (l.DISABLED_ADVANTAGE_PLUS_DESTINATION_TOOLTIP = Z),
      (l.THREECO_APP_TOOLTIP = ee),
      (l.DISABLED_APP_SELECTOR_PLACEHOLDER = te),
      (l.DISABLED_APP_SELECTOR_TOOLTIP = ne));
  },
  226,
);
