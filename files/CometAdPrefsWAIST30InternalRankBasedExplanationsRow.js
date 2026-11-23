__d(
  "CometAdPrefsWAIST30InternalRankBasedExplanationsRow",
  [
    "fbt",
    "AdsTransparencyWAISTTypedLogger",
    "CometAdPrefsWAIST30CollapsableSummary.react",
    "CometAdPrefsWAIST30EducationDialogContent.react",
    "CometAdPrefsWAIST30InternalRankBasedExplanationsRow_explanationsData.graphql",
    "CometAdPrefsWAIST30InternalRankBasedSingleExplanationRow.react",
    "CometAdPrefsWAISTContent",
    "CometAdPrefsWAISTDebugInfoRow.react",
    "CometAdPrefsWAISTGlobalContext",
    "CometAdPrefsWAISTLogHooks",
    "CometAdPrefsWAISTRowDedupeHooks",
    "CometErrorBoundary.react",
    "CometScrollableArea.react",
    "CometWAISTDialogPushPageContext.react",
    "FDSCard.react",
    "FDSLink.react",
    "FDSText.react",
    "FDSUnitHeader.react",
    "RelayHooks",
    "filterNulls",
    "isStringNullOrEmpty",
    "meta-brand-meta-outline-24",
    "react",
    "useBoolean",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useContext,
      p = d.useEffect,
      _ = {
        listContainer: { height: "xt7dq6l", marginTop: "x14vqqas", $$css: !0 },
      };
    function f(t) {
      var a,
        i = t.adId,
        l = t.clientToken,
        u = t.entryProduct,
        d = t.explanationsData,
        f = t.isYouthTierTwo,
        C = f === void 0 ? !1 : f,
        b = 42,
        v = m(r("CometWAISTDialogPushPageContext.react")),
        S = o("RelayHooks").useFragment(
          e !== void 0
            ? e
            : (e = n(
                "CometAdPrefsWAIST30InternalRankBasedExplanationsRow_explanationsData.graphql",
              )),
          d,
        );
      o("CometAdPrefsWAISTRowDedupeHooks").useRegistryRowEffect(
        S.id,
        b.toString(),
      );
      var R = S.aggregated_topics_explanations,
        L = r("useBoolean")(!1),
        E = L.setTrue,
        k = L.value,
        I = o("CometAdPrefsWAISTGlobalContext").useAdId(),
        T = function (t) {
          (k || E(),
            o("CometAdPrefsWAISTLogHooks").logWaistODS(
              "error",
              "action_based_explanations_page",
            ),
            new (r("AdsTransparencyWAISTTypedLogger"))()
              .setAdID(I)
              .setEntryProduct("waist_comet")
              .setEntity("generating_activity_explanations")
              .setEvent("error")
              .setMessage(t)
              .setWaistVersion(1)
              .log());
        };
      p(function () {
        k ||
          o("CometAdPrefsWAISTLogHooks").logWaistODS(
            "success",
            "action_based_explanations_page",
          );
      }, []);
      var D = g(R),
        x = D.offMetaExplanations,
        $ = D.onMetaExplanations,
        P = C ? [] : r("filterNulls")(h(x, T)),
        N = r("filterNulls")(h($, T, !0));
      if ((y(N.length, P.length), !P.length && !N.length)) return null;
      var M = c.jsxs(c.Fragment, {
          children: [
            " ",
            c.jsx(r("FDSLink.react"), {
              onClick: function () {
                (new (r("AdsTransparencyWAISTTypedLogger"))()
                  .setAdID(i)
                  .setEntity("activity_education_component")
                  .setEntryProduct(u)
                  .setTargetingType(b)
                  .setEvent("impression")
                  .setWaistVersion(1)
                  .log(),
                  v(function () {
                    return c.jsx(
                      r("CometWAISTDialogPushPageContext.react").Provider,
                      {
                        value: v,
                        children: c.jsx(
                          r("CometAdPrefsWAIST30EducationDialogContent.react"),
                          {},
                        ),
                      },
                    );
                  }));
              },
              style: { textDecorationColor: "var(--fds-black)" },
              target: "_blank",
              children: s._(/*BTDS*/ ""),
            }),
          ],
        }),
        w = o("CometAdPrefsWAISTContent").getYourActivityTitle(),
        A = c.jsxs(c.Fragment, { children: [s._(/*BTDS*/ ""), M] }),
        F = s._(/*BTDS*/ ""),
        O = s._(/*BTDS*/ ""),
        B =
          P.length > 0
            ? c.jsxs(c.Fragment, {
                children: [
                  c.jsx(r("FDSUnitHeader.react"), {
                    body: F,
                    headline: o(
                      "CometAdPrefsWAISTContent",
                    ).getActivityOffMetaSubheader(),
                    level: 3,
                  }),
                  c.jsx(r("CometScrollableArea.react"), {
                    horizontal: !1,
                    xstyle: _.listContainer,
                    children: P,
                  }),
                ],
              })
            : null,
        W =
          N.length > 0
            ? c.jsxs(c.Fragment, {
                children: [
                  " ",
                  c.jsx(r("FDSUnitHeader.react"), {
                    body: null,
                    bodyColor: "primary",
                    headline: o(
                      "CometAdPrefsWAISTContent",
                    ).getActivityOnMetaSubheader(),
                    level: 3,
                  }),
                  c.jsx(r("CometScrollableArea.react"), {
                    horizontal: !1,
                    xstyle: _.listContainer,
                    children: N,
                  }),
                ],
              })
            : null,
        q = r("isStringNullOrEmpty")(R == null ? void 0 : R.soap_disclaimer)
          ? null
          : c.jsx("div", {
              className: "xw7yly9 x1ys307a x1yztbdb xyqm7xq",
              children: c.jsx(r("FDSCard.react"), {
                background: "light-wash",
                children: c.jsx("div", {
                  className: "xyamay9 xv54qhq x1l90r2v xf7dkkf",
                  children: c.jsx(r("FDSText.react"), {
                    color: "primary",
                    type: "headline4",
                    children: R == null ? void 0 : R.soap_disclaimer,
                  }),
                }),
              }),
            });
      return R != null && (a = R.activity_summary_row) != null && a.length
        ? c.jsx(r("CometAdPrefsWAIST30CollapsableSummary.react"), {
            adId: i,
            entity: "your_activity_row",
            headline: c.jsx(c.Fragment, { children: w }),
            isRemoveAdvertiserRowShown: !1,
            summary: c.jsx(c.Fragment, {
              children: R == null ? void 0 : R.activity_summary_row,
            }),
            summaryAddOnPrimary: {
              color: "gray",
              icon: o("meta-brand-meta-outline-24").metaBrandMetaOutline24,
              size: 40,
              type: "contained-icon",
            },
            children: c.jsxs(c.Fragment, {
              children: [
                c.jsx(r("FDSUnitHeader.react"), {
                  body: A,
                  headline: c.jsx(c.Fragment, { children: w }),
                  level: 3,
                }),
                q,
                W,
                B,
                c.jsx(r("FDSUnitHeader.react"), {
                  body: O,
                  headline: null,
                  level: 4,
                }),
                c.jsx(r("CometAdPrefsWAISTDebugInfoRow.react"), {
                  clientToken: l,
                  debugDataFragment: S,
                }),
              ],
            }),
          })
        : (T(
            "Error generating activity explanations: Missing activity summary data",
          ),
          null);
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g(e) {
      var t,
        n,
        r,
        o,
        a,
        i,
        l = [],
        s = [];
      return (
        e != null &&
          (t = e.ad_topics_explanation) != null &&
          t.length &&
          l.push({
            explanation: e == null ? void 0 : e.ad_topics_explanation,
            type: "ad_topic",
          }),
        e != null &&
          (n = e.page_topics_explanation) != null &&
          n.length &&
          l.push({
            explanation: e == null ? void 0 : e.page_topics_explanation,
            type: "fb_page_topic",
          }),
        e != null &&
          (r = e.onsite_product_topics_explanation) != null &&
          r.length &&
          l.push({
            explanation:
              e == null ? void 0 : e.onsite_product_topics_explanation,
            type: "onsite_product_topic",
          }),
        e != null &&
          (o = e.website_topics_explanation) != null &&
          o.length &&
          s.push({
            explanation: e == null ? void 0 : e.website_topics_explanation,
            type: "website_topic",
          }),
        e != null &&
          (a = e.app_topics_explanation) != null &&
          a.length &&
          s.push({
            explanation: e == null ? void 0 : e.app_topics_explanation,
            type: "ad_topic",
          }),
        e != null &&
          (i = e.offsite_product_topics_explanation) != null &&
          i.length &&
          s.push({
            explanation:
              e == null ? void 0 : e.offsite_product_topics_explanation,
            type: "offsite_product_topic",
          }),
        { offMetaExplanations: s, onMetaExplanations: l }
      );
    }
    function h(e, t, n) {
      return (
        n === void 0 && (n = !1),
        e.map(function (e, o) {
          var a = e.explanation,
            i = e.type;
          if (r("isStringNullOrEmpty")(a))
            return (
              t(
                'Error generating activity explanations: Missing full sentence explanation data for row "' +
                  i +
                  '"',
              ),
              null
            );
          var l = (n ? "on" : "off") + "_meta_" + o;
          return c.jsx(
            r("CometErrorBoundary.react"),
            {
              onError: function () {
                return t(
                  'Error generating activity explanations: Unable to generate row "' +
                    i +
                    '"',
                );
              },
              children: c.jsx(
                r(
                  "CometAdPrefsWAIST30InternalRankBasedSingleExplanationRow.react",
                ),
                { explanation: a, explanation_output_type: i },
              ),
            },
            l,
          );
        })
      );
    }
    function y(e, t) {
      var n = e === 0 ? "onsite_component_null" : "onsite_component_not_null",
        r = t === 0 ? "offsite_component_null" : "offsite_component_not_null";
      (o("CometAdPrefsWAISTLogHooks").logWaistODS(
        "info",
        "waist_activity_explanations." + n,
      ),
        o("CometAdPrefsWAISTLogHooks").logWaistODS(
          "info",
          "waist_activity_explanations." + r,
        ));
    }
    l.default = f;
  },
  226,
);
