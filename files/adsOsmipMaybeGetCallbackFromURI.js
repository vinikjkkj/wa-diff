__d(
  "adsOsmipMaybeGetCallbackFromURI",
  [
    "AdsAIActionabilityViewChangesModalAction",
    "AdsAILoggingUtils",
    "AdsAIVisibilityUtils",
    "AdsHelpTrayUIActions",
    "AdsInterfacesRouter",
    "AdsMidFlightRecommendationOpenModalAction",
    "CurrentAdAccount",
    "MAIBAChatAppUIActions",
    "SBGLeadSource",
    "URI",
    "isFacebookURI",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e) {
      var t = e.getDomain();
      if (t === "messenger.com" || t.endsWith(".messenger.com")) {
        var n = e.getPath().match(/^(?:\/support)?\/t\/([0-9]+)\/?$/),
          o = n == null ? void 0 : n[1];
        if (!r("isStringNullOrEmpty")(o)) return o;
      }
      return null;
    }
    function u(t, n, a) {
      var l = (e || (e = r("URI"))).tryParseURI(t);
      if (l == null) return null;
      var u = s(l);
      if (u != null)
        return function () {
          return o("AdsHelpTrayUIActions").openChatThread(u, {
            maibaConversationId: n,
            setIsHelpTrayOpen: a,
          });
        };
      if (!r("isFacebookURI")(l)) return null;
      if (l.getProtocol() === "https" && l.getPath().startsWith("/maiba/")) {
        var c,
          d = (c = l.getPath().match(/\/maiba\/(\d+)/)) == null ? void 0 : c[1];
        return function () {
          o("MAIBAChatAppUIActions").openMAIBAChatThread({
            externalConversationId: d,
          });
        };
      }
      var m = l.getQueryData().schedule_call_job_id,
        p = l.getQueryData().lead_source;
      if (!r("isStringNullOrEmpty")(m)) {
        var _ = r("CurrentAdAccount").getID(),
          f = l.getQueryData().act;
        if (f !== _) return null;
        var g = Object.values(r("SBGLeadSource")).includes(p) ? p : null;
        return function () {
          return o("AdsHelpTrayUIActions").openMarketingProEmbeddedCallFlow(
            g != null ? g : "OSMIP_HT_Entry_Point",
            void 0,
            !0,
            null,
            m,
            void 0,
            void 0,
          );
        };
      }
      if (o("AdsAIVisibilityUtils").isURIFromAdsAI(l)) {
        var h = o("AdsAIVisibilityUtils").getAdObjectsFromURI(t);
        return h.length > 0
          ? function () {
              (r("AdsAIActionabilityViewChangesModalAction").dispatch(
                { shouldShowViewChangesModal: !0, adObjectIDs: h },
                {
                  line: "106",
                  module: "adsOsmipMaybeGetCallbackFromURI.js",
                  moduleID: i.id,
                },
              ),
                o("AdsAILoggingUtils").logImpressionAdsAIViewChanges());
            }
          : function () {
              var t,
                n = l.getDomain();
              l.setDomain("");
              var o =
                (t = r("AdsInterfacesRouter").getOrNull()) == null
                  ? void 0
                  : t.getNavigatableByURI(l);
              o != null
                ? (r("AdsInterfacesRouter").get().navigateTo(l),
                  l.getQueryData().is_mfr_model_shown_by_default === "1" &&
                    r("AdsMidFlightRecommendationOpenModalAction").dispatch(
                      { campaignIDs: [] },
                      {
                        line: "125",
                        module: "adsOsmipMaybeGetCallbackFromURI.js",
                        moduleID: i.id,
                      },
                    ))
                : (l.setDomain(n), (e || (e = r("URI"))).goURIOnNewWindow(l));
            };
      }
      return null;
    }
    l.default = u;
  },
  98,
);
