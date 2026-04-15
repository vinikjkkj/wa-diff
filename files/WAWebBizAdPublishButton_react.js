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
    "react-compiler-runtime",
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
        n,
        a = o("react-compiler-runtime").c(33),
        i = e.emailOnboardingDataRef,
        l = e.flowID,
        c = e.onboardingDataRef,
        p = e.onNavigateToManageAds,
        g = e.pageID,
        h = e.product,
        y = m(!1),
        C = y[0],
        b = y[1],
        v = d(r("WAWebBizAdCreationValidateSpecContext")),
        S = (t = v == null ? void 0 : v.isValidating) != null ? t : !1,
        R = d(r("WAWebBizAdCreationLoggerContext")),
        L = d(r("WAWebBizAdCreationSpecContext")),
        E = L.currentValue,
        k = d(r("WAWebBizAdCreationDraftIDContext")),
        I = r("useWAWebBizAdDeleteDraftMutation")(),
        T = I[0],
        D = r("useWAWebBizAdsCreationOpenModal")(),
        x;
      if (
        a[0] !== (E == null || (n = E.adAccountData) == null ? void 0 : n.id) ||
        a[1] !== R ||
        a[2] !== D
      ) {
        var $;
        ((x = function (t) {
          if (
            (b(!1),
            r("FBLogger")("wa_ctwa_web").mustfix(
              "Ad creation mutation failed: " + String(t.errorMessage),
            ),
            R != null)
          ) {
            var e;
            r("WAWebBizAdLogger").logCritical({
              event: "submit_flow_error",
              loggerContext: R,
              adAccountID:
                E == null || (e = E.adAccountData) == null ? void 0 : e.id,
              action: "create",
              context: "ad",
              eventCategory: "error",
              extra: { error_message: t.errorMessage },
            });
          }
          D(
            u.jsx(r("WAWebBizAdCreationErrorModal.react"), {
              errorMessage: t.errorMessage,
            }),
          );
        }),
          (a[0] = E == null || ($ = E.adAccountData) == null ? void 0 : $.id),
          (a[1] = R),
          (a[2] = D),
          (a[3] = x));
      } else x = a[3];
      var P;
      a[4] !== T || a[5] !== k || a[6] !== p || a[7] !== D
        ? ((P = function (t) {
            var e = function () {
                (b(!1),
                  p(),
                  D(
                    u.jsx(r("WAWebBizAdCreationSuccessModal.react"), {
                      boostingStatus: t.boostingStatus,
                    }),
                    { blockClose: !0 },
                  ));
              },
              n = k.draftID;
            n != null && r("justknobx")._("5520")
              ? (k.setDraftID(null), T(n).catch(f).finally(e))
              : e();
          }),
          (a[4] = T),
          (a[5] = k),
          (a[6] = p),
          (a[7] = D),
          (a[8] = P))
        : (P = a[8]);
      var N;
      a[9] !== l || a[10] !== g || a[11] !== h || a[12] !== x || a[13] !== P
        ? ((N = { flowID: l, onError: x, onSuccess: P, pageID: g, product: h }),
          (a[9] = l),
          (a[10] = g),
          (a[11] = h),
          (a[12] = x),
          (a[13] = P),
          (a[14] = N))
        : (N = a[14]);
      var M = r("useWAWebBizAdSubmit")(N),
        w;
      a[15] !== E || a[16] !== M
        ? ((w = {
            onComplete: function (t) {
              (b(!0), M(E, void 0, t));
            },
            onCancel: r("WAWebNoop"),
          }),
          (a[15] = E),
          (a[16] = M),
          (a[17] = w))
        : (w = a[17]);
      var A = r("useWAWebBizAdCreationMaybeOpenEmailVerification")(c, w),
        F = A.isVerifyingEmail,
        O = A.maybeOpenEmailVerification,
        B;
      a[18] !== O
        ? ((B = {
            onComplete: function () {
              O();
            },
            onWizardClose: r("WAWebNoop"),
          }),
          (a[18] = O),
          (a[19] = B))
        : (B = a[19]);
      var W = r("useWAWebBizAdCreationMaybeOpenBillingWizard")(B, i),
        q = W.isLoading,
        U = W.maybeLaunchBillingWizard,
        V;
      a[20] !== U
        ? ((V = {
            onComplete: function () {
              U();
            },
            onDialogClose: r("WAWebNoop"),
          }),
          (a[20] = U),
          (a[21] = V))
        : (V = a[21]);
      var H = r("useWAWebBizAdCreationMaybeOpenCertificationDialog")(V),
        G = H.isLoading,
        z = H.maybeLaunchCertificationDialog,
        j;
      a[22] !== E || a[23] !== R || a[24] !== z
        ? ((j = function () {
            if (R != null && E != null) {
              var e, t, n, o, a, i, l, s, u, c, d, m, p, f, g, h, y;
              r("WAWebBizAdLogger").logCritical({
                event: "submit_flow_click",
                loggerContext: R,
                adAccountID: (e = E.adAccountData) == null ? void 0 : e.id,
                budget: (t = E.budgetData) == null ? void 0 : t.budget,
                budgetType: "DAILY_BUDGET",
                currency: (n = E.adAccountData) == null ? void 0 : n.currency,
                defaultBudget:
                  (o = E.budgetData) == null ? void 0 : o.defaultBudget,
                duration:
                  (a = E.durationData) == null ? void 0 : a.durationInDays,
                defaultDuration:
                  (i = E.durationData) == null
                    ? void 0
                    : i.initialDurationInDays,
                audienceID:
                  (l = E.audienceData) == null ? void 0 : l.audienceID,
                targetingSpec: JSON.stringify(
                  (s = E.audienceData) == null ? void 0 : s.targetSpec,
                ),
                creativeSpec: JSON.stringify(E.adgroupSpecs),
                extra: {
                  audience_type: (u = E.audienceData) == null ? void 0 : u.name,
                  audience_option:
                    (c = E.audienceData) == null ? void 0 : c.audienceOption,
                  audience_age_min:
                    (d = E.audienceData) == null || (d = d.targetSpec) == null
                      ? void 0
                      : d.age_min,
                  audience_age_max:
                    (m = E.audienceData) == null || (m = m.targetSpec) == null
                      ? void 0
                      : m.age_max,
                  audience_genders:
                    (p = E.audienceData) == null ||
                    (p = p.targetSpec) == null ||
                    (p = p.genders) == null
                      ? void 0
                      : p.join(","),
                  audience_client_editable:
                    (f = E.audienceData) == null ? void 0 : f.clientEditable,
                  selected_platforms:
                    (g = E.placementData) == null ||
                    (g = g.selectedPublisherPlatforms) == null
                      ? void 0
                      : g.join(","),
                  media_count:
                    (h = E.currentLocallyUploadedMediaCollection) == null
                      ? void 0
                      : h.length,
                  media_types:
                    (y = E.currentLocallyUploadedMediaCollection) == null
                      ? void 0
                      : y.getModelsArray().map(_).join(","),
                },
              });
            }
            z();
          }),
          (a[22] = E),
          (a[23] = R),
          (a[24] = z),
          (a[25] = j))
        : (j = a[25]);
      var K = j,
        Q;
      a[26] !== v
        ? ((Q =
            v != null
              ? o("WAWebBizAdCreationNoticesUtils").hasBlockingErrors(
                  v.notices,
                  v.inlineNotices,
                )
              : !1),
          (a[26] = v),
          (a[27] = Q))
        : (Q = a[27]);
      var X = Q,
        Y = X,
        J = S || C || q || G || F,
        Z;
      a[28] === Symbol.for("react.memo_cache_sentinel")
        ? ((Z = s._(/*BTDS*/ "Create ad")), (a[28] = Z))
        : (Z = a[28]);
      var ee;
      return (
        a[29] !== K || a[30] !== Y || a[31] !== J
          ? ((ee = u.jsx(r("WDSButton.react"), {
              disabled: Y,
              label: Z,
              loading: J,
              onPress: K,
            })),
            (a[29] = K),
            (a[30] = Y),
            (a[31] = J),
            (a[32] = ee))
          : (ee = a[32]),
        ee
      );
    }
    function _(e) {
      return e.isGif ? "gif" : e.type;
    }
    function f(e) {
      r("FBLogger")("wa_ctwa_web")
        .catching(r("getErrorSafe")(e))
        .warn("Draft delete on publish failed");
    }
    function g() {
      var e = o("react-compiler-runtime").c(1),
        t;
      return (
        e[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = u.jsx(r("WDSButton.react"), {
              disabled: !0,
              label: s._(/*BTDS*/ "Create ad"),
              loading: !0,
              onPress: r("WAWebNoop"),
            })),
            (e[0] = t))
          : (t = e[0]),
        t
      );
    }
    function h(e) {
      var t = o("react-compiler-runtime").c(8),
        n = e.emailOnboardingDataRef,
        a = e.flowID,
        l = e.onboardingDataRef,
        s = e.onNavigateToManageAds,
        c = e.pageID,
        d = e.product,
        m;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = u.jsx(g, {})), (t[0] = m))
        : (m = t[0]);
      var _;
      return (
        t[1] !== n ||
        t[2] !== a ||
        t[3] !== s ||
        t[4] !== l ||
        t[5] !== c ||
        t[6] !== d
          ? ((_ = u.jsx(r("CometPlaceholder.react"), {
              fallback: m,
              name: i.id,
              children: u.jsx(p, {
                emailOnboardingDataRef: n,
                flowID: a,
                onboardingDataRef: l,
                onNavigateToManageAds: s,
                pageID: c,
                product: d,
              }),
            })),
            (t[1] = n),
            (t[2] = a),
            (t[3] = s),
            (t[4] = l),
            (t[5] = c),
            (t[6] = d),
            (t[7] = _))
          : (_ = t[7]),
        _
      );
    }
    l.WAWebBizAdPublishButton = h;
  },
  226,
);
