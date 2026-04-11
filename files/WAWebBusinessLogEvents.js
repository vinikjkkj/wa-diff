__d(
  "WAWebBusinessLogEvents",
  [
    "WAWebViewBusinessProfileWamEvent",
    "WAWebWamEnumBusinessToolsLinkedAccountType",
    "WAWebWamEnumTrustSignalBuckets",
    "WAWebWamEnumViewBusinessProfileAction",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = new (o(
        "WAWebViewBusinessProfileWamEvent",
      ).ViewBusinessProfileWamEvent)(
        babelHelpers.extends({}, e, { isProfileLinked: !!e.isProfileLinked }),
      );
      t.commit();
    }
    function s(e, t, n, r) {
      new (o("WAWebViewBusinessProfileWamEvent").ViewBusinessProfileWamEvent)({
        viewBusinessProfileAction: o("WAWebWamEnumViewBusinessProfileAction")
          .VIEW_BUSINESS_PROFILE_ACTION.ACTION_IMPRESSION,
        catalogSessionId: e,
        profileEntryPoint: t,
        isProfileLinked: n,
        hasCoverPhoto: r,
      }).commit();
    }
    function u(t, n, r, a) {
      e({
        viewBusinessProfileAction: o("WAWebWamEnumViewBusinessProfileAction")
          .VIEW_BUSINESS_PROFILE_ACTION.ACTION_EXIT,
        catalogSessionId: t,
        scrollDepth: n,
        isProfileLinked: r,
        hasCoverPhoto: a,
      });
    }
    function c(t, n, r) {
      e({
        viewBusinessProfileAction: o("WAWebWamEnumViewBusinessProfileAction")
          .VIEW_BUSINESS_PROFILE_ACTION.ACTION_CLICK_MESSAGE,
        catalogSessionId: t,
        hasCoverPhoto: r,
      });
    }
    function d(t, n, r) {
      e({
        viewBusinessProfileAction: o("WAWebWamEnumViewBusinessProfileAction")
          .VIEW_BUSINESS_PROFILE_ACTION.ACTION_CLICK_SHOPS_ICON,
        catalogSessionId: t,
        isProfileLinked: n,
        hasCoverPhoto: r,
      });
    }
    function m(t, n, r) {
      e({
        viewBusinessProfileAction: o("WAWebWamEnumViewBusinessProfileAction")
          .VIEW_BUSINESS_PROFILE_ACTION.ACTION_CLICK_CATALOG_ICON,
        catalogSessionId: t,
        isProfileLinked: n,
        hasCoverPhoto: r,
      });
    }
    function p(t, n, r) {
      e({
        viewBusinessProfileAction: o("WAWebWamEnumViewBusinessProfileAction")
          .VIEW_BUSINESS_PROFILE_ACTION.ACTION_CLICK_FORWARD,
        catalogSessionId: t,
        isProfileLinked: n,
        hasCoverPhoto: r,
      });
    }
    function _(t, n, r) {
      e({
        viewBusinessProfileAction: o("WAWebWamEnumViewBusinessProfileAction")
          .VIEW_BUSINESS_PROFILE_ACTION.ACTION_CLICK_EMAIL,
        catalogSessionId: t,
        isProfileLinked: n,
        hasCoverPhoto: r,
      });
    }
    function f(t, n, r) {
      e({
        viewBusinessProfileAction: o("WAWebWamEnumViewBusinessProfileAction")
          .VIEW_BUSINESS_PROFILE_ACTION.ACTION_CLICK_WEBSITE,
        catalogSessionId: t,
        isProfileLinked: n,
        hasCoverPhoto: r,
      });
    }
    function g(t, n, r) {
      e({
        viewBusinessProfileAction: o("WAWebWamEnumViewBusinessProfileAction")
          .VIEW_BUSINESS_PROFILE_ACTION.ACTION_CLICK_LOCATION,
        catalogSessionId: t,
        isProfileLinked: n,
        hasCoverPhoto: r,
      });
    }
    function h(t, n, r) {
      e({
        viewBusinessProfileAction: o("WAWebWamEnumViewBusinessProfileAction")
          .VIEW_BUSINESS_PROFILE_ACTION.ACTION_CLICK_HOURS,
        catalogSessionId: t,
        isProfileLinked: n,
        hasCoverPhoto: r,
      });
    }
    function y(t, n, r) {
      e({
        viewBusinessProfileAction: o("WAWebWamEnumViewBusinessProfileAction")
          .VIEW_BUSINESS_PROFILE_ACTION.ACTION_CLICK_APP_LINK,
        linkedAccount: o("WAWebWamEnumBusinessToolsLinkedAccountType")
          .BUSINESS_TOOLS_LINKED_ACCOUNT_TYPE.FACEBOOK,
        catalogSessionId: t,
        bizFbSize: v(n),
        isProfileLinked: !0,
        hasCoverPhoto: r,
      });
    }
    function C(t, n, r) {
      e({
        viewBusinessProfileAction: o("WAWebWamEnumViewBusinessProfileAction")
          .VIEW_BUSINESS_PROFILE_ACTION.ACTION_CLICK_APP_LINK,
        linkedAccount: o("WAWebWamEnumBusinessToolsLinkedAccountType")
          .BUSINESS_TOOLS_LINKED_ACCOUNT_TYPE.INSTAGRAM,
        catalogSessionId: t,
        bizIgSize: v(n),
        isProfileLinked: !0,
        hasCoverPhoto: r,
      });
    }
    function b(t, n, r) {
      e({
        viewBusinessProfileAction: o("WAWebWamEnumViewBusinessProfileAction")
          .VIEW_BUSINESS_PROFILE_ACTION.ACTION_APP_IMPRESSION,
        linkedAccount: n,
        catalogSessionId: t,
        isProfileLinked: !0,
        hasCoverPhoto: r,
      });
    }
    function v(e) {
      return e == null
        ? o("WAWebWamEnumTrustSignalBuckets").TRUST_SIGNAL_BUCKETS.B0
        : e > 1e6
          ? o("WAWebWamEnumTrustSignalBuckets").TRUST_SIGNAL_BUCKETS.B1M
          : e >= 1e5
            ? o("WAWebWamEnumTrustSignalBuckets").TRUST_SIGNAL_BUCKETS.B100K
            : e >= 1e4
              ? o("WAWebWamEnumTrustSignalBuckets").TRUST_SIGNAL_BUCKETS.B10K
              : e >= 1e3
                ? o("WAWebWamEnumTrustSignalBuckets").TRUST_SIGNAL_BUCKETS.B1K
                : e >= 501
                  ? o("WAWebWamEnumTrustSignalBuckets").TRUST_SIGNAL_BUCKETS
                      .B501
                  : e >= 101
                    ? o("WAWebWamEnumTrustSignalBuckets").TRUST_SIGNAL_BUCKETS
                        .B101
                    : e >= 51
                      ? o("WAWebWamEnumTrustSignalBuckets").TRUST_SIGNAL_BUCKETS
                          .B51
                      : e >= 11
                        ? o("WAWebWamEnumTrustSignalBuckets")
                            .TRUST_SIGNAL_BUCKETS.B11
                        : e >= 2
                          ? o("WAWebWamEnumTrustSignalBuckets")
                              .TRUST_SIGNAL_BUCKETS.B2
                          : e === 1
                            ? o("WAWebWamEnumTrustSignalBuckets")
                                .TRUST_SIGNAL_BUCKETS.B1
                            : o("WAWebWamEnumTrustSignalBuckets")
                                .TRUST_SIGNAL_BUCKETS.B0;
    }
    ((l.logProfileImpression = s),
      (l.logProfileExit = u),
      (l.logMessageClick = c),
      (l.logShopsClick = d),
      (l.logCatalogClick = m),
      (l.logForwardClick = p),
      (l.logEmailClick = _),
      (l.logWebsiteClick = f),
      (l.logLocationClick = g),
      (l.logHoursClick = h),
      (l.logLinkedFbClick = y),
      (l.logLinkedIgClick = C),
      (l.logLinkedAccountImpression = b));
  },
  98,
);
