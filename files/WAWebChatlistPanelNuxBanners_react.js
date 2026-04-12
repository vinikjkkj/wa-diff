__d(
  "WAWebChatlistPanelNuxBanners.react",
  [
    "WAWebBizGatingUtils",
    "WAWebCTWAConstants",
    "WAWebCTWASuggestionCollection",
    "WAWebConnModel",
    "WAWebErrorBoundary.react",
    "WAWebNux",
    "WAWebNuxBanners.react",
    "WAWebNuxCtwaSuggestionBanner.react",
    "WAWebNuxOrderExpansion.react",
    "WAWebNuxQuickPromotionChatListBanner.react",
    "WAWebUserPrefsNuxPreferences",
    "react",
    "useWAWebBestQuickPromotionForSurface",
    "useWAWebForceUpdate",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.useState;
    function c() {
      "use no forget";
      var e = o("useWAWebForceUpdate").useForceUpdateDONOTUSE(),
        t = function () {
          var e;
          return (e = o(
            "WAWebCTWASuggestionCollection",
          ).CTWASuggestionCollection.findFirstNotExpired()) == null
            ? void 0
            : e.suggestion;
        },
        n = u(t),
        a = n[0],
        i = n[1];
      (o("useWAWebListener").useListener(
        o("WAWebCTWASuggestionCollection").CTWASuggestionCollection,
        "add",
        function () {
          i(t());
        },
      ),
        o("useWAWebListener").useListener(
          o("WAWebUserPrefsNuxPreferences").NuxPrefsEvent,
          o("WAWebNux").NUX.MESSAGE_LABEL_DEPRECATION_MIGRATED_PERMANENT,
          e,
        ));
      var l = o(
          "useWAWebBestQuickPromotionForSurface",
        ).useBestQuickPromotionForSurface(
          { surfaceId: o("WAWebCTWAConstants").QP_SURFACE_ID_CHAT_LIST_TOP },
          { eligibilityCheck: o("WAWebBizGatingUtils").qpCampaignsEnabled },
        ),
        c = [];
      return (
        a != null &&
          c.push(
            s.jsx(
              o("WAWebNuxCtwaSuggestionBanner.react").CTWASuggestionBanner,
              { onInteract: e, suggestion: a },
              "ctwa_suggestion",
            ),
          ),
        l != null &&
          c.push(
            s.jsx(
              o("WAWebNuxQuickPromotionChatListBanner.react")
                .QuickPromotionChatListBanner,
              { onInteract: e, promotion: l.promotion.promotion },
              "quick_promotion",
            ),
          ),
        o("WAWebNuxOrderExpansion.react").shouldShowOrderExpansionBanner() &&
          c.push(
            s.jsx(
              o("WAWebNuxOrderExpansion.react").OrderExpansionBanner,
              { onInteract: e },
              "order_expansion_banner",
            ),
          ),
        c.length
          ? s.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
              name: "nux-banner-error-boundary",
              children: s.jsx(r("WAWebNuxBanners.react"), { children: c }),
            })
          : null
      );
    }
    c.displayName = c.name + " [from " + i.id + "]";
    function d() {
      return o("WAWebConnModel").Conn.isSMB ? s.jsx(c, {}) : null;
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  98,
);
