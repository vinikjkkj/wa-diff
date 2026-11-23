__d(
  "WAWebBizNativeAdsFlowLoadable",
  [
    "FBLogger",
    "JSResourceForInteraction",
    "WAWebBizAdCreationResolveStoredIdentity",
    "WAWebBizAdsErrorPopup.react",
    "WAWebBizNativeAdsBootstrap",
    "WAWebBizNativeAdsFlowTypes",
    "WAWebBizNativeAdsLoadingDrawer.react",
    "WAWebBizNativeAdsQplHelpers",
    "WAWebBizNativeAdsResolveRelayIdentityBundle",
    "WAWebBizNativeAdsScenarioRouter",
    "WAWebFetchAdAccountToken",
    "WAWebLazyLoadedRetriable",
    "WAWebLinkedAccountsJob",
    "WAWebLoadable",
    "getErrorSafe",
    "justknobx",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = {
        isTerminalError: function (t) {
          return (
            o("WAWebFetchAdAccountToken").hasTerminalIntegrityDenial(t) &&
            r("justknobx")._("8045")
          );
        },
      };
    async function c() {
      var e = await r("JSResourceForInteraction")("WAWebBizNativeAdsFlow.react")
        .__setRef("WAWebBizNativeAdsFlowLoadable")
        .load();
      return e.WAWebBizNativeAdsFlow;
    }
    async function d() {
      var e = await r("JSResourceForInteraction")("WAWebGetWAAEligibility")
        .__setRef("WAWebBizNativeAdsFlowLoadable")
        .load();
      return e;
    }
    function m(e) {
      var t = o(
        "WAWebBizAdCreationResolveStoredIdentity",
      ).resolveStoredAccountType();
      return t === "FB" || !e ? "FB" : "WAA";
    }
    async function p(e, t, n, a, i) {
      var l = await c(),
        u = e.accountType,
        d = e.isWAAEligible,
        m = e.linkedPagesPromise,
        p = e.scenario,
        g = o("WAWebBizNativeAdsBootstrap").getNativeAdsBootstrap(p, a, i),
        h = g.initialStack,
        y = g.initialStep,
        C = g.preparation,
        b =
          y ===
          o("WAWebBizNativeAdsFlowTypes").BizNativeAdsFlowSteps.AdCreation,
        v =
          p === "FIRST_TIME_NOT_WAA_ELIGIBLE" &&
          o(
            "WAWebBizAdCreationResolveStoredIdentity",
          ).resolveStoredIdentityForAccountType("FB") != null;
      if (
        (p === "FIRST_TIME_NOT_WAA_ELIGIBLE" ||
          p === "HAS_FB_ADS_NOT_WAA_ELIGIBLE") &&
        !v
      )
        return (
          n == null || n(),
          o("WAWebBizNativeAdsQplHelpers").endAdsManagementQplSuccess(),
          function (e) {
            return s.jsx(
              l,
              babelHelpers.extends(
                {
                  flowID: t,
                  identityBundle: null,
                  initialStack: h,
                  initialStep: y,
                  isWAAEligible: d,
                  scenario: p,
                },
                e,
              ),
            );
          }
        );
      var S;
      try {
        S = await o(
          "WAWebBizNativeAdsResolveRelayIdentityBundle",
        ).resolveBizNativeAdsRelayIdentityBundle(u, t, m);
      } catch (e) {
        throw (
          r("FBLogger")("wa_ctwa_web")
            .catching(r("getErrorSafe")(e))
            .mustfix(
              "BizNativeAdsFlowLoadable: phase 2 identity resolution failed for accountType: " +
                u,
            ),
          e
        );
      }
      return (
        i != null && S != null && (S = await _(S, e)),
        C != null &&
          S != null &&
          S.adCreationEntrypointReference == null &&
          (S = await o(
            "WAWebBizNativeAdsResolveRelayIdentityBundle",
          ).prepareDeferredAdCreationEntrypoint({
            existingBundle: S,
            flowID: t,
            options: C,
          })),
        f(p, b),
        n == null || n(),
        function (e) {
          return s.jsx(
            l,
            babelHelpers.extends(
              {
                flowID: t,
                identityBundle: S,
                initialStack: h,
                initialStep: y,
                isWAAEligible: d,
                scenario: p,
              },
              e,
            ),
          );
        }
      );
    }
    async function _(e, t) {
      return babelHelpers.extends({}, e, {
        linkedPagesLookup: await t.linkedPagesLookupPromise,
      });
    }
    function f(e, t) {
      if (t) {
        o("WAWebBizNativeAdsQplHelpers").endAdsManagementQplCancel();
        return;
      }
      (e === "FIRST_TIME_NOT_WAA_ELIGIBLE" ||
        e === "HAS_FB_ADS_NO_FB_ACCESS_TOKEN" ||
        e === "HAS_FB_ADS_WAA_ACTIVE") &&
        o("WAWebBizNativeAdsQplHelpers").endAdsManagementQplSuccess();
    }
    function g(e) {
      var t = e.boostTarget,
        n = e.flowID,
        a = e.initialLoadingStep,
        i = e.onLoadComplete,
        l = e.phase1Result,
        _ = e.task,
        f = async function () {
          var e, a, u, f;
          if (l != null) return p(l, n, i, t, _);
          o("WAWebBizNativeAdsQplHelpers").adsManagementQplAddPoint(
            o("WAWebBizNativeAdsQplHelpers").AdsManagementQplPoint
              .BUNDLE_LOAD_START,
          );
          var g = o("WAWebLinkedAccountsJob").queryLinkedPagesInfo(),
            h = await Promise.all([d(), c()]),
            y = h[0],
            C = h[1];
          (o("WAWebBizNativeAdsQplHelpers").adsManagementQplAddPoint(
            o("WAWebBizNativeAdsQplHelpers").AdsManagementQplPoint
              .BUNDLE_LOAD_END,
          ),
            o("WAWebBizNativeAdsQplHelpers").adsManagementQplAddPoint(
              o("WAWebBizNativeAdsQplHelpers").AdsManagementQplPoint
                .ELIGIBILITY_CHECK_START,
            ));
          var b = await y(n);
          o("WAWebBizNativeAdsQplHelpers").adsManagementQplAddPoint(
            o("WAWebBizNativeAdsQplHelpers").AdsManagementQplPoint
              .ELIGIBILITY_CHECK_END,
          );
          var v = m(b),
            S;
          try {
            S = await o(
              "WAWebBizNativeAdsResolveRelayIdentityBundle",
            ).resolveBizNativeAdsRelayIdentityBundle(v, n, g);
          } catch (e) {
            throw (
              r("FBLogger")("wa_ctwa_web")
                .catching(r("getErrorSafe")(e))
                .mustfix(
                  "BizNativeAdsFlowLoadable: identity bundle resolution failed for accountType: " +
                    v,
                ),
              e
            );
          }
          S == null &&
            v === "FB" &&
            b &&
            (S = await o(
              "WAWebBizNativeAdsResolveRelayIdentityBundle",
            ).resolveBizNativeAdsRelayIdentityBundle("WAA", n, g));
          var R =
              (e = (a = S) == null ? void 0 : a.linkedPagesInfo) != null
                ? e
                : g != null
                  ? await g
                  : null,
            L = o("WAWebBizNativeAdsScenarioRouter").resolveNativeAdsScenario({
              activeIdentityType: v,
              fbPageHasCreatedAd:
                (u = R == null ? void 0 : R.fbPageHasCreatedAd) != null
                  ? u
                  : !1,
              hasValidFBAccessToken:
                o(
                  "WAWebBizAdCreationResolveStoredIdentity",
                ).resolveStoredIdentityForAccountType("FB") != null,
              isWAAEligible: b,
              waAdsIdentityPageHasCreatedAd:
                (f = R == null ? void 0 : R.waAdsIdentityPageHasCreatedAd) !=
                null
                  ? f
                  : !1,
            }),
            E = o("WAWebBizNativeAdsBootstrap").getNativeAdsBootstrap(L, t, _),
            k = E.initialStack,
            I = E.initialStep,
            T = E.preparation;
          (T != null &&
            S != null &&
            S.adCreationEntrypointReference == null &&
            (S = await o(
              "WAWebBizNativeAdsResolveRelayIdentityBundle",
            ).prepareDeferredAdCreationEntrypoint({
              existingBundle: S,
              flowID: n,
              options: T,
            })),
            i == null || i());
          var D = function (t) {
            return s.jsx(
              C,
              babelHelpers.extends(
                {
                  flowID: n,
                  identityBundle: S,
                  initialStack: k,
                  initialStep: I,
                  isWAAEligible: b,
                  scenario: L,
                },
                t,
              ),
            );
          };
          return D;
        },
        g = r("WAWebLazyLoadedRetriable")(f, "BizNativeAdsFlow", u);
      return r("WAWebLoadable")({
        loader: g,
        loading: function (t) {
          return t.error
            ? s.jsx(r("WAWebBizAdsErrorPopup.react"), {
                fallback: s.jsx(r("WAWebBizNativeAdsLoadingDrawer.react"), {
                  step: a,
                }),
              })
            : h(t.pastDelay, i)
              ? s.jsx(s.Fragment, {})
              : s.jsx(r("WAWebBizNativeAdsLoadingDrawer.react"), { step: a });
        },
        renderLoadingImmediately: !0,
      });
    }
    function h(e, t) {
      return !e || t != null;
    }
    ((l.resolveAccountType = m), (l.createBizNativeAdsFlowLoadable = g));
  },
  98,
);
