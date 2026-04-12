__d(
  "WAWebNewsletterRecommendedV2Item.react",
  [
    "WAWebBaseShimmerComponents.react",
    "WAWebChatEntryPoint",
    "WAWebFlex.react",
    "WAWebKeyboardHotKeys.react",
    "WAWebLinkDevicePhoneNumberEntryInputFormatUtils",
    "WAWebNewsletterAttributionLogging",
    "WAWebNewsletterChatItem.react",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterLoggingContext",
    "WAWebNewsletterQuickFollowButton.react",
    "WAWebOpenNewsletterPreviewChat",
    "WAWebUserPrefsMeUser",
    "WAWebWamEnumChannelEventUnit",
    "react",
    "useWAWebEventTargetValue",
    "useWAWebModelValues",
    "useWAWebNewsletterDiscoveryVisibilityLogger",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      if (e == null) throw new TypeError("Cannot destructure " + e);
    }
    var u = e || (e = o("react")),
      c = e,
      d = c.useCallback,
      m = c.useContext,
      p = {
        marginBottom8: { marginBottom: "xefnzgg", $$css: !0 },
        marginBottom16: { marginBottom: "x1ua1l7f", $$css: !0 },
      };
    function _(e) {
      var t = e.children,
        n = e.onClick;
      return u.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
        role: "button",
        onClick: n,
        children: u.jsx(o("WAWebFlex.react").FlexColumn, {
          align: "center",
          testid: void 0,
          className:
            "x6nvzda x4i4b9w xhl9efl xj65ea0 xog00wb x9oqtsu xk1krjo xqk4rbu x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x9f619 xj35x94 x1xrf6ya x12w63v0 x1nzty39 xscbp6u",
          children: t,
        }),
      });
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f(e) {
      if (
        o(
          "WAWebNewsletterGatingUtils",
        ).isNewsletterDiscoveryVisibilityLoggingEnabled()
      )
        return u.jsx(y, babelHelpers.extends({}, e));
      var t = babelHelpers.extends({}, (s(e), e));
      return u.jsx(h, babelHelpers.extends({}, t));
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g() {
      return u.jsxs(_, {
        children: [
          u.jsx(o("WAWebBaseShimmerComponents.react").CircleShimmer, {
            diameter: 64,
            xstyle: p.marginBottom8,
          }),
          u.jsx(o("WAWebBaseShimmerComponents.react").RectangleShimmer, {
            height: 20,
            width: 96,
            xstyle: p.marginBottom16,
          }),
          u.jsx(o("WAWebBaseShimmerComponents.react").RectangleShimmer, {
            height: 20,
            width: 66,
            xstyle: p.marginBottom8,
          }),
        ],
      });
    }
    g.displayName = g.name + " [from " + i.id + "]";
    function h(e) {
      var t = e.chatEntryPoint,
        n = e.discoverySurface,
        a = e.eventSurface,
        i = e.newsletter,
        l = e.onFollow,
        s = o("useWAWebModelValues").useModelValues(i, ["newsletterMetadata"]),
        c = s.newsletterMetadata,
        p = r("useWAWebEventTargetValue")(
          o("useWAWebModelValues").useOptionalModelValues(c, [
            "isSubscribedOrOwned",
          ]),
          ["isSubscribedOrOwned"],
          function () {
            return (c == null ? void 0 : c.isSubscribedOrOwned) === !0;
          },
        ),
        f = m(r("WAWebNewsletterLoggingContext")),
        g = f.entryPoint,
        h = f.eventUnit,
        y = f.similarNewsletterSessionId,
        C = d(
          function () {
            (t === o("WAWebChatEntryPoint").ChatEntryPoint.SimilarNewsletters &&
              o(
                "WAWebNewsletterAttributionLogging",
              ).NewsletterCoreEventLogger.setSimilarChannelsSessionId(y),
              o("WAWebOpenNewsletterPreviewChat").openNewsletterPreviewChat({
                identifier: i.id.toString(),
                chatEntryPoint: t,
                discoverySurface: n,
              }));
          },
          [i, t, y, n],
        ),
        b = {
          eventSurface: a,
          similarChannelSessionId: y,
          entryPoint: g,
          eventUnit: h,
          discoverySurface: n,
        };
      return u.jsxs(_, {
        onClick: C,
        children: [
          u.jsx(r("WAWebNewsletterChatItem.react"), { newsletter: i }),
          u.jsx(r("WAWebNewsletterQuickFollowButton.react"), {
            confirmUnfollow: !1,
            onFollowSuccess: l,
            following: p,
            loggingOptions: b,
            newsletter: i,
          }),
        ],
      });
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y(e) {
      var t = e.discoverySurface,
        n = e.newsletter,
        a = e.newsletterDirectorySessionId,
        i = e.newsletterEventUnit,
        l = e.similarNewslettersSessionId,
        c =
          i !==
          o("WAWebWamEnumChannelEventUnit").CHANNEL_EVENT_UNIT.SIMILAR_CHANNELS
            ? o(
                "WAWebLinkDevicePhoneNumberEntryInputFormatUtils",
              ).getCountryCodeIso(
                o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE().user,
              )
            : void 0,
        d = r("useWAWebNewsletterDiscoveryVisibilityLogger")({
          cid: n.id.user,
          newsletterEventUnit: i,
          discoverySurface: t,
          similarNewslettersSessionId: l,
          newsletterDirectorySessionId: a,
          country: c,
        }),
        m = d[0],
        p = d[1],
        _ = babelHelpers.extends({}, (s(e), e));
      return u.jsx("div", {
        ref: m,
        children: u.jsx(h, babelHelpers.extends({}, _)),
      });
    }
    ((y.displayName = y.name + " [from " + i.id + "]"),
      (l.NewsletterRecommendedItem = f),
      (l.NewsletterRecommendedItemShimmer = g));
  },
  98,
);
