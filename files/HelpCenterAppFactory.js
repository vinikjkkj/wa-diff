__d(
  "HelpCenterAppFactory",
  [
    "HelpCenterEnterpriseAppSpec",
    "HelpCenterFacebookAppSpec",
    "HelpCenterIcons.react",
    "HelpCenterInstagramAppSpec",
    "HelpCenterMessengerAppSpec",
    "HelpCenterWhatsAppSpec",
    "HelpCenterWhitehatAppSpec",
    "HelpCenterWorkAccountsAppSpec",
    "HelpCenterWorkplaceAppSpec",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = {},
      c = "Meta",
      d = function (t, n) {
        u[t] = n;
      },
      m = function (t) {
        return u[t];
      },
      p = function (t) {
        var e = m(t);
        return e == null ? void 0 : e.aboutPageStyles;
      },
      _ = function (t) {
        var e = m(t);
        return e == null ? void 0 : e.header.icon;
      },
      f = function (t) {
        var e = m(t);
        return e == null ? void 0 : e.footer.icon;
      },
      g = function (t) {
        var e,
          n = m(t);
        return (e = n == null ? void 0 : n.footer.trademarkName) != null
          ? e
          : c;
      },
      h = function (t) {
        return " \xA9 " + new Date().getFullYear() + " " + (t != null ? t : "");
      },
      y = function (t, n) {
        var e,
          r = m(t),
          o =
            r == null || (e = r.routingSpec) == null
              ? void 0
              : e.getRoutingSearchURL;
        if (o != null) return o(n);
      },
      C = function (t, n) {
        var e,
          r = m(t),
          o =
            r == null || (e = r.routingSpec) == null
              ? void 0
              : e.getRoutingContentURL,
          a = n.cms_id;
        if (o != null && a != null)
          return o(babelHelpers.extends({}, n, { cms_id: a }));
      },
      b = function (t) {
        var e,
          n = m(t),
          r =
            n == null || (e = n.routingSpec) == null
              ? void 0
              : e.getRoutingHomeURL;
        if (r != null) return r();
      },
      v = function (t, n) {
        var e,
          r = m(t),
          a =
            r == null || (e = r.navIconSpec) == null ? void 0 : e.getFilledIcon;
        return a != null ? a(n) : o("HelpCenterIcons.react").getFilledFBIcon(n);
      },
      S = function (t, n) {
        var e,
          r = m(t),
          a =
            r == null || (e = r.navIconSpec) == null
              ? void 0
              : e.getOutlineIcon;
        return a != null
          ? a(n)
          : o("HelpCenterIcons.react").getOutlineFBIcon(n);
      },
      R = function (t, n, r) {
        var e,
          a,
          i = m(t),
          l = r
            ? i == null || (e = i.tabIconsSpec) == null
              ? void 0
              : e.getIconSelected
            : i == null || (a = i.tabIconsSpec) == null
              ? void 0
              : a.getIconUnselected;
        return l != null ? l(n) : o("HelpCenterIcons.react").getFilledFBIcon(n);
      },
      L = function (t) {
        var e,
          n = m(t);
        return n == null || (e = n.navIconSpec) == null
          ? void 0
          : e.shouldHighlightIcon;
      },
      E = function (t) {
        var e = m(t);
        return e == null ? void 0 : e.shouldShowBannerIcon;
      },
      k = function (t) {
        var e,
          n = m(t);
        return n == null || (e = n.videoPlayerSpec) == null
          ? void 0
          : e.disableLogging;
      };
    (d("FACEBOOK", r("HelpCenterFacebookAppSpec")),
      d("INSTAGRAM", r("HelpCenterInstagramAppSpec")),
      d("MESSENGER", r("HelpCenterMessengerAppSpec")),
      d("WHITEHAT", r("HelpCenterWhitehatAppSpec")),
      d("WORKPLACE", r("HelpCenterWorkplaceAppSpec")),
      d("WHATSAPP", r("HelpCenterWhatsAppSpec")),
      d("WORKACCOUNTS", r("HelpCenterWorkAccountsAppSpec")),
      d("ENTERPRISE", r("HelpCenterEnterpriseAppSpec")),
      (l.getAboutPageStyles = p),
      (l.getRegisteredIcon = _),
      (l.getRegisteredFooterIcon = f),
      (l.getRegisteredTrademarkName = g),
      (l.registeredTradeMarkLabel = h),
      (l.getRoutingSearchURL = y),
      (l.getRoutingContentURL = C),
      (l.getRoutingHomeURL = b),
      (l.getFilledNavIcon = v),
      (l.getOutlineNavIcon = S),
      (l.getPlatformTabIcon = R),
      (l.shouldHighlightIcon = L),
      (l.shouldShowBannerIcon = E),
      (l.getVideoPlayerDisableLogging = k));
  },
  98,
);
