__d(
  "MAIBAR21LinkStepHrefUtils",
  [
    "BusinessCometAdCenterNativeBoostHrefUtils",
    "BusinessCometAdCenterNativeEditHrefUtils",
    "BusinessCometAdCenterNativeNextStepHrefUtils",
    "MAIBAR21FacebookLinkHrefUtils",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "get_performance_recommendations";
    function s(e) {
      return e != null && typeof e == "object" && !Array.isArray(e) ? e : null;
    }
    function u(e) {
      if (typeof e != "string") return null;
      try {
        return s(JSON.parse(e));
      } catch (e) {
        return null;
      }
    }
    function c(e) {
      return typeof e == "string" && e !== "" ? e : null;
    }
    function d(e) {
      return e === "boost_again"
        ? "boost_again"
        : e === "boost_another_post"
          ? "boost_another_post"
          : e === "broaden_audience"
            ? "broaden_audience"
            : e === "edit_button"
              ? "edit_button"
              : e === "edit_creative"
                ? "edit_creative"
                : e === "expand_radius"
                  ? "expand_radius"
                  : e === "fix_blocker"
                    ? "fix_blocker"
                    : e === "results"
                      ? "results"
                      : null;
    }
    function m(e) {
      return e === "boosted_post" ? "BOOSTED_POST" : null;
    }
    function p(e) {
      var t = s(e),
        n = s(t == null ? void 0 : t.link_ids),
        r = d(t == null ? void 0 : t.kind),
        o = c(t == null ? void 0 : t.rec_id),
        a = c(n == null ? void 0 : n.boost_id),
        i = c(n == null ? void 0 : n.page_id),
        l = c(n == null ? void 0 : n.ad_account_id);
      return r == null || o == null || a == null || i == null || l == null
        ? null
        : {
            blocker: c(t == null ? void 0 : t.blocker),
            kind: r,
            linkIDs: {
              adAccountID: l,
              boostID: a,
              businessID: c(n == null ? void 0 : n.business_id),
              pageID: i,
              postID: c(n == null ? void 0 : n.post_id),
              targetPostID: c(n == null ? void 0 : n.target_post_id),
            },
            product: m(t == null ? void 0 : t.product),
            recID: o,
          };
    }
    function _(t) {
      return t.flatMap(function (t) {
        var n;
        if (t.tool_name === e) {
          var r = u(t.tool_result);
          return r != null ? [r] : [];
        }
        if (t.tool_name !== "tool_group") return [];
        var o = (n = u(t.tool_result)) == null ? void 0 : n.tool_results;
        return Array.isArray(o)
          ? o.flatMap(function (t) {
              var n = s(t),
                r = n != null && n.tool_name === e ? u(n.result) : null;
              return r != null ? [r] : [];
            })
          : [];
      });
    }
    function f(e) {
      return _(e).flatMap(function (e) {
        return Array.isArray(e.link_steps) ? e.link_steps : [];
      });
    }
    function g(e, t) {
      for (var n of f(e)) {
        var r = p(n);
        if ((r == null ? void 0 : r.recID) === t) return r;
      }
      return null;
    }
    function h(e) {
      var t = s(e),
        n = c(t == null ? void 0 : t.option_id),
        r = t == null ? void 0 : t.daily_budget_minor_units,
        o = t == null ? void 0 : t.currency;
      return n != null &&
        typeof r == "number" &&
        Number.isInteger(r) &&
        r > 0 &&
        typeof o == "string" &&
        /^[A-Z]{3}$/.test(o)
        ? { currency: o, dailyBudgetMinorUnits: r, optionID: n }
        : null;
    }
    function y(e, t, n) {
      for (var r of f(e)) {
        var o,
          a = (o = s(r)) == null ? void 0 : o.daily_budget_options,
          i = p(r);
        if (
          i != null &&
          i.recID === t &&
          i.kind === "boost_again" &&
          Array.isArray(a)
        )
          for (var l of a) {
            var u = h(l);
            if ((u == null ? void 0 : u.optionID) === n) return u;
          }
      }
      return null;
    }
    function C(e) {
      return e === "payment_failed"
        ? "payment_failed"
        : e === "spending_limit_reached"
          ? "spending_limit_reached"
          : e === "rejected"
            ? "ad_rejected"
            : e === "in_review"
              ? "ad_in_review"
              : null;
    }
    function b() {
      return r("gkx")("20935") && !r("gkx")("21034");
    }
    function v(e, t) {
      var n = e.linkIDs,
        r = n.adAccountID,
        a = n.boostID,
        i = n.pageID,
        l = n.postID,
        s = n.targetPostID,
        u = { boostID: a, legacyAccountID: r, pageID: i };
      return e.kind === "results"
        ? o("MAIBAR21FacebookLinkHrefUtils").getFacebookNativeResultsHref(u, t)
        : e.kind === "fix_blocker" &&
            (e.blocker === "payment_failed" ||
              e.blocker === "spending_limit_reached")
          ? o("MAIBAR21FacebookLinkHrefUtils").getFacebookNativePaymentHref(
              u,
              t,
            )
          : e.kind === "fix_blocker"
            ? o("MAIBAR21FacebookLinkHrefUtils").getFacebookNativeResultsHref(
                u,
                t,
              )
            : e.kind === "boost_again" &&
                l != null &&
                e.product === "BOOSTED_POST"
              ? o(
                  "MAIBAR21FacebookLinkHrefUtils",
                ).getFacebookNativeBoostPostHref(u, t, l)
              : e.kind === "boost_again"
                ? null
                : e.kind === "broaden_audience"
                  ? o(
                      "MAIBAR21FacebookLinkHrefUtils",
                    ).getFacebookNativeEditHref(u, t, "audience")
                  : e.kind === "edit_button"
                    ? o(
                        "MAIBAR21FacebookLinkHrefUtils",
                      ).getFacebookNativeEditHref(u, t, "call_to_action")
                    : e.kind === "edit_creative"
                      ? o(
                          "MAIBAR21FacebookLinkHrefUtils",
                        ).getFacebookNativeEditHref(u, t)
                      : e.kind === "expand_radius"
                        ? o(
                            "MAIBAR21FacebookLinkHrefUtils",
                          ).getFacebookNativeEditHref(u, t, "location_radius")
                        : e.kind === "boost_another_post" &&
                            e.product !== "BOOSTED_POST"
                          ? null
                          : e.kind === "boost_another_post" && s != null
                            ? o(
                                "MAIBAR21FacebookLinkHrefUtils",
                              ).getFacebookNativeNewBoostPostHref(u, t, s)
                            : e.kind === "boost_another_post"
                              ? o(
                                  "MAIBAR21FacebookLinkHrefUtils",
                                ).getFacebookNativeBoostPostPickerHref(u, t)
                              : (function () {
                                  throw Error(
                                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                                      e.kind,
                                  );
                                })();
    }
    function S(e, t) {
      if (b()) return v(e, t);
      var n = e.linkIDs,
        r = n.adAccountID,
        a = n.boostID,
        i = n.businessID,
        l = n.pageID,
        s = n.postID,
        u = n.targetPostID,
        c = { boostID: a, legacyAccountID: r, pageID: l },
        d = e.kind === "fix_blocker" ? C(e.blocker) : null;
      return e.kind === "results"
        ? o(
            "BusinessCometAdCenterNativeNextStepHrefUtils",
          ).getNativeResultsOverviewHref({ boostID: a, pageID: l }, t)
        : e.kind === "fix_blocker" && d != null
          ? o(
              "BusinessCometAdCenterNativeNextStepHrefUtils",
            ).getNativeDeliveryFixHref(
              babelHelpers.extends({}, c, { businessID: i }),
              t,
              d,
            )
          : e.kind === "fix_blocker"
            ? o(
                "BusinessCometAdCenterNativeNextStepHrefUtils",
              ).getNativeResultsOverviewHref({ boostID: a, pageID: l }, t)
            : e.kind === "boost_again" &&
                s != null &&
                e.product === "BOOSTED_POST"
              ? o(
                  "BusinessCometAdCenterNativeBoostHrefUtils",
                ).getNativeBoostPostHref(c, t, s, "BOOSTED_POST")
              : e.kind === "boost_again"
                ? null
                : e.kind === "broaden_audience"
                  ? o(
                      "BusinessCometAdCenterNativeEditHrefUtils",
                    ).getNativeEditHref(c, t, "audience")
                  : e.kind === "edit_button"
                    ? o(
                        "BusinessCometAdCenterNativeEditHrefUtils",
                      ).getNativeEditHref(c, t, "call_to_action")
                    : e.kind === "edit_creative"
                      ? o(
                          "BusinessCometAdCenterNativeEditHrefUtils",
                        ).getNativeEditHref(c, t)
                      : e.kind === "expand_radius"
                        ? o(
                            "BusinessCometAdCenterNativeEditHrefUtils",
                          ).getNativeEditHref(c, t, "location_radius")
                        : e.kind === "boost_another_post" &&
                            e.product !== "BOOSTED_POST"
                          ? null
                          : e.kind === "boost_another_post" && u != null
                            ? o(
                                "BusinessCometAdCenterNativeBoostHrefUtils",
                              ).getNativeNewBoostPostHref(c, t, u)
                            : e.kind === "boost_another_post"
                              ? o(
                                  "BusinessCometAdCenterNativeBoostHrefUtils",
                                ).getNativeBoostPostPickerHref(c, t)
                              : (function () {
                                  throw Error(
                                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                                      e.kind,
                                  );
                                })();
    }
    function R(e) {
      return b() && e.kind === "fix_blocker" && e.blocker === "payment_failed";
    }
    function L(e, t, n) {
      var r = e.linkIDs,
        a = r.adAccountID,
        i = r.boostID,
        l = r.pageID,
        s = r.postID;
      if (e.kind !== "boost_again" || s == null || e.product !== "BOOSTED_POST")
        return null;
      var u = { boostID: i, legacyAccountID: a, pageID: l };
      return b()
        ? o(
            "MAIBAR21FacebookLinkHrefUtils",
          ).getFacebookNativeBoostPostWithSettingsHref(u, t, s, n)
        : o(
            "BusinessCometAdCenterNativeBoostHrefUtils",
          ).getNativeBoostPostWithSettingsHref(u, t, s, n);
    }
    ((l.findMAIBAR21LinkStep = g),
      (l.findMAIBAR21LinkStepDailyBudget = y),
      (l.getMAIBAR21LinkStepHref = S),
      (l.shouldOpenMAIBAR21LinkStepInNewTab = R),
      (l.getMAIBAR21BoostAgainWithSettingsHref = L));
  },
  98,
);
