__d(
  "WAWebBizAdPublishButton.react",
  [
    "fbt",
    "CometPlaceholder.react",
    "FBLogger",
    "WAWebBizAdCreationDraftIDContext",
    "WAWebBizAdCreationErrorModal.react",
    "WAWebBizAdCreationLoggerContext",
    "WAWebBizAdCreationNoticesUtils",
    "WAWebBizAdCreationSpecContext",
    "WAWebBizAdCreationSuccessModal.react",
    "WAWebBizAdCreationValidateSpecContext",
    "WAWebBizAdLogger",
    "WAWebNoop",
    "WDSButton.react",
    "getErrorSafe",
    "justknobx",
    "react",
    "useWAWebBizAdCreationMaybeOpenBillingWizard",
    "useWAWebBizAdCreationMaybeOpenCertificationDialog",
    "useWAWebBizAdCreationMaybeOpenEmailVerification",
    "useWAWebBizAdDeleteDraftMutation",
    "useWAWebBizAdSubmit",
    "useWAWebBizAdsCreationOpenModal",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useContext,
      m = c.useState;
    function p(e) {
      var t,
        n = e.emailOnboardingDataRef,
        a = e.flowID,
        i = e.onboardingDataRef,
        l = e.onNavigateToManageAds,
        c = e.pageID,
        p = e.product,
        _ = m(!1),
        f = _[0],
        g = _[1],
        h = d(r("WAWebBizAdCreationValidateSpecContext")),
        y = (t = h == null ? void 0 : h.isValidating) != null ? t : !1,
        C = d(r("WAWebBizAdCreationLoggerContext")),
        b = d(r("WAWebBizAdCreationSpecContext")),
        v = b.currentValue,
        S = d(r("WAWebBizAdCreationDraftIDContext")),
        R = r("useWAWebBizAdDeleteDraftMutation")(),
        L = R[0],
        E = r("useWAWebBizAdsCreationOpenModal")(),
        k = r("useWAWebBizAdSubmit")({
          flowID: a,
          onError: function (t) {
            if (
              (g(!1),
              r("FBLogger")("wa_ctwa_web").mustfix(
                "Ad creation mutation failed: " + String(t.errorMessage),
              ),
              C != null)
            ) {
              var e;
              r("WAWebBizAdLogger").logCritical({
                event: "submit_flow_error",
                loggerContext: C,
                adAccountID:
                  v == null || (e = v.adAccountData) == null ? void 0 : e.id,
                action: "create",
                context: "ad",
                eventCategory: "error",
                extra: { error_message: t.errorMessage },
              });
            }
            E(
              u.jsx(r("WAWebBizAdCreationErrorModal.react"), {
                errorMessage: t.errorMessage,
              }),
            );
          },
          onSuccess: function (t) {
            var e = function () {
                (g(!1),
                  l(),
                  E(
                    u.jsx(r("WAWebBizAdCreationSuccessModal.react"), {
                      boostingStatus: t.boostingStatus,
                    }),
                    { blockClose: !0 },
                  ));
              },
              n = S.draftID;
            n != null && r("justknobx")._("5520")
              ? (S.setDraftID(null),
                L(n)
                  .catch(function (e) {
                    r("FBLogger")("wa_ctwa_web")
                      .catching(r("getErrorSafe")(e))
                      .warn("Draft delete on publish failed");
                  })
                  .finally(e))
              : e();
          },
          pageID: c,
          product: p,
        }),
        I = r("useWAWebBizAdCreationMaybeOpenEmailVerification")(i, {
          onComplete: function (t) {
            (g(!0), k(v, void 0, t));
          },
          onCancel: r("WAWebNoop"),
        }),
        T = I.isVerifyingEmail,
        D = I.maybeOpenEmailVerification,
        x = r("useWAWebBizAdCreationMaybeOpenBillingWizard")(
          {
            onComplete: function () {
              D();
            },
            onWizardClose: r("WAWebNoop"),
          },
          n,
        ),
        $ = x.isLoading,
        P = x.maybeLaunchBillingWizard,
        N = r("useWAWebBizAdCreationMaybeOpenCertificationDialog")({
          onComplete: function () {
            P();
          },
          onDialogClose: r("WAWebNoop"),
        }),
        M = N.isLoading,
        w = N.maybeLaunchCertificationDialog,
        A = function () {
          if (C != null && v != null) {
            var e, t, n, o, a, i, l, s, u, c, d, m, p, _, f, g, h;
            r("WAWebBizAdLogger").logCritical({
              event: "submit_flow_click",
              loggerContext: C,
              adAccountID: (e = v.adAccountData) == null ? void 0 : e.id,
              budget: (t = v.budgetData) == null ? void 0 : t.budget,
              budgetType: "DAILY_BUDGET",
              currency: (n = v.adAccountData) == null ? void 0 : n.currency,
              defaultBudget:
                (o = v.budgetData) == null ? void 0 : o.defaultBudget,
              duration:
                (a = v.durationData) == null ? void 0 : a.durationInDays,
              defaultDuration:
                (i = v.durationData) == null ? void 0 : i.initialDurationInDays,
              audienceID: (l = v.audienceData) == null ? void 0 : l.audienceID,
              targetingSpec: JSON.stringify(
                (s = v.audienceData) == null ? void 0 : s.targetSpec,
              ),
              creativeSpec: JSON.stringify(v.adgroupSpecs),
              extra: {
                audience_type: (u = v.audienceData) == null ? void 0 : u.name,
                audience_option:
                  (c = v.audienceData) == null ? void 0 : c.audienceOption,
                audience_age_min:
                  (d = v.audienceData) == null || (d = d.targetSpec) == null
                    ? void 0
                    : d.age_min,
                audience_age_max:
                  (m = v.audienceData) == null || (m = m.targetSpec) == null
                    ? void 0
                    : m.age_max,
                audience_genders:
                  (p = v.audienceData) == null ||
                  (p = p.targetSpec) == null ||
                  (p = p.genders) == null
                    ? void 0
                    : p.join(","),
                audience_client_editable:
                  (_ = v.audienceData) == null ? void 0 : _.clientEditable,
                selected_platforms:
                  (f = v.placementData) == null ||
                  (f = f.selectedPublisherPlatforms) == null
                    ? void 0
                    : f.join(","),
                media_count:
                  (g = v.currentLocallyUploadedMediaCollection) == null
                    ? void 0
                    : g.length,
                media_types:
                  (h = v.currentLocallyUploadedMediaCollection) == null
                    ? void 0
                    : h
                        .getModelsArray()
                        .map(function (e) {
                          return e.isGif ? "gif" : e.type;
                        })
                        .join(","),
              },
            });
          }
          w();
        },
        F =
          h != null
            ? o("WAWebBizAdCreationNoticesUtils").hasBlockingErrors(
                h.notices,
                h.inlineNotices,
              )
            : !1,
        O = F,
        B = y || f || $ || M || T;
      return u.jsx(r("WDSButton.react"), {
        disabled: O,
        label: s._(/*BTDS*/ "Create ad"),
        loading: B,
        onPress: A,
      });
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _() {
      return u.jsx(r("WDSButton.react"), {
        disabled: !0,
        label: s._(/*BTDS*/ "Create ad"),
        loading: !0,
        onPress: r("WAWebNoop"),
      });
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f(e) {
      var t = e.emailOnboardingDataRef,
        n = e.flowID,
        o = e.onboardingDataRef,
        a = e.onNavigateToManageAds,
        l = e.pageID,
        s = e.product;
      return u.jsx(r("CometPlaceholder.react"), {
        fallback: u.jsx(_, {}),
        name: i.id,
        children: u.jsx(p, {
          emailOnboardingDataRef: t,
          flowID: n,
          onboardingDataRef: o,
          onNavigateToManageAds: a,
          pageID: l,
          product: s,
        }),
      });
    }
    ((f.displayName = f.name + " [from " + i.id + "]"),
      (l.WAWebBizAdPublishButton = f));
  },
  226,
);
