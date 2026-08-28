__d(
  "adsDraftCreateToastCardForPublishComplete",
  [
    "fbt",
    "AdsAccountStoreNew",
    "AdsCreativeFlexPushModelPublishUtils",
    "AdsDraftConstants",
    "AdsFragmentsUtils",
    "AdsLoginAs",
    "AdsPLRAlphaBetaCheckUtil",
    "AdsPLRLoggingUtil",
    "AdsPushModelStringConstants",
    "AdsRecommendationCTXHighValueSolutionsConstants",
    "AdsReportBuilderEntryPointEventSources",
    "GeoBaseText.react",
    "GeoLink.react",
    "ODS",
    "adsDraftCreateToastCardForPublishEnd",
    "adsDraftGetLevelsWithCounts",
    "adsDraftObjectDeletedContent",
    "adsDraftObjectLevelName",
    "adsDraftObjectLevelWithCount",
    "adsDraftObjectPublishedContent",
    "adsDraftObjectUpdatedContent",
    "adsDraftSortLevel",
    "cr:242",
    "gkx",
    "intlList",
    "isTruthy",
    "navigateToProductInsightsWithDefaultTab",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = e || (e = o("react"));
    function d() {
      var e = r("AdsAccountStoreNew").getSelectedAccount().getValue();
      (o("AdsPLRLoggingUtil").logPLREvent(function () {
        return {
          ad_account_id: e == null ? void 0 : e.account_id,
          event_severity: "info",
          event: "ui_plr_entry_point_in_ad_publish_toast_click",
        };
      }),
        r("navigateToProductInsightsWithDefaultTab")(
          e == null ? void 0 : e.account_id,
          {
            navState: { tool: "REPORTING", section: "PRODUCTS" },
            eventSource: r("AdsReportBuilderEntryPointEventSources")
              .CLICK_PRODUCT_INSIGHTS_LINK_IN_AD_PUBLISH_TOAST,
          },
          { newWindow: !0 },
        ));
    }
    function m(e) {
      if (!e) return 0;
      var t = 0;
      for (var n of e)
        if (n.values) {
          var r = n.values.find(function (e) {
            return e.field === "creative";
          });
          if (r) {
            var a = o(
              "AdsCreativeFlexPushModelPublishUtils",
            ).getPushMetadataIdsFromJSONString(r.new_value);
            if (a.length !== 0) {
              var i = o(
                "AdsCreativeFlexPushModelPublishUtils",
              ).getPushMetadataIdsFromJSONString(r.old_value);
              t += o(
                "AdsCreativeFlexPushModelPublishUtils",
              ).countNetNewPushMetadataIds(a, i);
            }
          }
        }
      return t;
    }
    function p(e) {
      return e
        ? e.some(function (e) {
            if (!e.values) return !1;
            var t = e.values.find(function (e) {
              return e.field === "creative";
            });
            if (!t) return !1;
            if (t.new_value && t.new_value !== "null")
              try {
                var n = JSON.parse(t.new_value);
                if (n.product_set_id != null) return !0;
              } catch (e) {}
            return !1;
          })
        : !1;
    }
    function _(e) {
      return p(e) || !e
        ? !1
        : e.some(function (e) {
            if (!e.values) return !1;
            var t = e.values.find(function (e) {
              return e.field === "creative";
            });
            if (!t) return !1;
            if (t.new_value && t.new_value !== "null")
              try {
                var n = JSON.parse(t.new_value),
                  r = n.destination_spec,
                  o = n.asset_feed_spec;
                if (r != null && o != null)
                  return (
                    r.destination_type === "WEBSITE_AND_SHOP" &&
                    !o.onsite_destinations
                  );
              } catch (e) {
                return !1;
              }
            return !1;
          });
    }
    function f(e, t, n, o, a, i, l, s, u, c, d) {
      var p = m(o),
        f = r("isTruthy")(u) || y(t, o, s),
        C = r("gkx")("7496") && _(o),
        b = !1;
      if (t.length > 0) {
        var v = h(t, o);
        b = v.areAllDeleting;
      }
      var S = g(t, o, f, C, c, d, p);
      return (
        S &&
        r("adsDraftCreateToastCardForPublishEnd")(
          babelHelpers.extends(
            { id: e, canDismiss: !0, shouldFailInteraction: a },
            S,
          ),
          i,
          f,
          b,
        )
      );
    }
    function g(e, t, a, i, l, u, d) {
      var m = l != null ? l : {},
        _ = m.recommendationType,
        f = _ === "ctx_hvs",
        g = p(t),
        y = r("adsDraftGetLevelsWithCounts")(e),
        C = Object.keys(y).sort(r("adsDraftSortLevel")),
        b = C.filter(function (e) {
          return y[e].error;
        }),
        E = C.filter(function (e) {
          return y[e].success;
        });
      if (b.length > 0) {
        var k = b.map(function (e) {
            return r("adsDraftObjectLevelWithCount")(e, y[e].error);
          }),
          I,
          D;
        if (E.length > 0) {
          var P = b
            .map(function (e) {
              return y[e].error;
            })
            .reduce(function (e, t) {
              return t + e;
            }, 0);
          ((I = s._(/*BTDS*/ "Some items not published")),
            (D = s._(
              /*BTDS*/ '_j{"*":"{List of items with their error count} weren\'t published because of errors. All other items were published.","_1":"{List of items with their error count} wasn\'t published because of errors. All other items were published."}',
              [
                s._plural(P),
                s._param(
                  "List of items with their error count",
                  r("intlList")(k),
                ),
              ],
            )));
        } else if (t) {
          var N = h(e, t);
          ((I = v(N, f)), (D = S(N, k, f)));
        } else
          ((I = o("AdsDraftConstants").NO_CHANGES_APPLIED_HEADER),
            (D = s._(
              /*BTDS*/ "Your items weren't published because they had errors that need to be fixed.",
            )));
        if (
          o("AdsLoginAs").isEmployeeContingentOrUsingLoginAs() &&
          n("cr:242")
        ) {
          var M = c.jsx(
            n("cr:242")
              .AdsManagerPublishingToastCardGuidedInvestigationComponent,
            { fragmentStatuses: e, graphApiError: u },
          );
          D = s._(
            /*BTDS*/ "{Render different types of bodyText}{newLine}{Publishing error guided investigation instance}",
            [
              s._param("Render different types of bodyText", D),
              s._param("newLine", c.jsx("div", {})),
              s._param("Publishing error guided investigation instance", M),
            ],
          );
        }
        return { cardType: "error", header: I, bodyText: D };
      } else if (E.length > 0) {
        var w = h(e, t, d),
          A = E.map(function (e) {
            return r("adsDraftObjectLevelWithCount")(e, y[e].success);
          }),
          F = 7e3;
        return r("isTruthy")(i)
          ? {
              cardType: "success",
              dismissTimer: F,
              header: R(w, !1),
              bodyText: $(),
            }
          : r("isTruthy")(a)
            ? {
                cardType: "success",
                dismissTimer: F,
                header: T(w),
                bodyText: x(),
              }
            : {
                cardType: "success",
                dismissTimer: F,
                header: R(w, f),
                bodyText: L(w, A, f, g, d),
              };
      }
      return null;
    }
    function h(e, t, n) {
      n === void 0 && (n = 0);
      var r = e.length + n,
        a = n > 0;
      return {
        isSingleItem: r === 1,
        isMultipleItems: r > 1,
        itemCount: e.length,
        areAllCreatingNew:
          !a &&
          e.every(function (e) {
            var t = e.action;
            return t === "add";
          }),
        areAllDeleting: !a && C(e, t),
        areAllEditing: b(e, t),
        level: o("AdsFragmentsUtils").getAdObjectLevel(e[0]),
      };
    }
    function y(e, t, n) {
      if (!r("isTruthy")(t) || !r("isTruthy")(n)) return !1;
      var o = e.some(function (e) {
        return e.ad_object_type === "ad";
      });
      if (!o) return !1;
      var a = t.reduce(function (e, t) {
        var n, o;
        if (e) return e;
        var a = t.values
          ? (n = t.values.find(function (e) {
              var t = e.field;
              return t === "promoted_object";
            })) == null
            ? void 0
            : n.new_value
          : null;
        if (!r("isTruthy")(a)) return !1;
        var i = JSON.parse(a);
        return r("isTruthy")(
          i == null ||
            (o = i.omnichannel_object) == null ||
            (o = o.onsite) == null ||
            (o = o.at(0)) == null
            ? void 0
            : o.onboarding_state,
        );
      }, !1);
      return a;
    }
    function C(e, t) {
      return t != null
        ? o("AdsFragmentsUtils").areAllDeleting(t)
        : e.every(function (e) {
            var t = e.action;
            return t === "archive" || t === "delete";
          });
    }
    function b(e, t) {
      return t != null
        ? o("AdsFragmentsUtils").areAllEditing(t)
        : e.every(function (e) {
            var t = e.action;
            return t === "modify";
          });
    }
    function v(e, t) {
      var n = e.areAllCreatingNew,
        a = e.areAllDeleting,
        i = e.areAllEditing,
        l = e.isMultipleItems,
        u = e.isSingleItem,
        c = e.level;
      return t
        ? s._(/*BTDS*/ "Your duplicated campaign was not published")
        : u && n
          ? s._(/*BTDS*/ "{ad_object_level} Not published", [
              s._param("ad_object_level", r("adsDraftObjectLevelName")(c)),
            ])
          : l && n
            ? s._(/*BTDS*/ "Multiple items couldn't be published")
            : u && a
              ? s._(/*BTDS*/ "{ad_object_level} Not deleted", [
                  s._param("ad_object_level", r("adsDraftObjectLevelName")(c)),
                ])
              : l && a
                ? s._(/*BTDS*/ "Multiple items couldn't be deleted")
                : u && i
                  ? s._(/*BTDS*/ "{ad_object_level} not updated", [
                      s._param(
                        "ad_object_level",
                        r("adsDraftObjectLevelName")(c),
                      ),
                    ])
                  : l && i
                    ? s._(/*BTDS*/ "Multiple items couldn't be updated")
                    : o("AdsDraftConstants").NO_CHANGES_APPLIED_HEADER;
    }
    function S(e, t, n) {
      var o = e.areAllCreatingNew,
        a = e.areAllDeleting,
        i = e.areAllEditing,
        l = e.isMultipleItems;
      return n
        ? s._(
            /*BTDS*/ "Something went wrong and your campaign was not published. Please try again later.",
          )
        : l && o
          ? s._(
              /*BTDS*/ "{List of successfully published items with counts} weren't published.",
              [
                s._param(
                  "List of successfully published items with counts",
                  r("intlList")(t),
                ),
              ],
            )
          : l && a
            ? s._(
                /*BTDS*/ "{List of successfully published items with counts} weren't deleted.",
                [
                  s._param(
                    "List of successfully published items with counts",
                    r("intlList")(t),
                  ),
                ],
              )
            : l && i
              ? s._(
                  /*BTDS*/ "{List of successfully published items with counts} weren't updated.",
                  [
                    s._param(
                      "List of successfully published items with counts",
                      r("intlList")(t),
                    ),
                  ],
                )
              : s._(
                  /*BTDS*/ "Your items weren't published because they had errors that need to be fixed.",
                );
    }
    S.displayName = S.name + " [from " + i.id + "]";
    function R(e, t) {
      var n = e.areAllCreatingNew,
        a = e.areAllDeleting,
        i = e.areAllEditing,
        l = e.isMultipleItems,
        u = e.isSingleItem,
        c = e.level;
      return t
        ? o("AdsRecommendationCTXHighValueSolutionsConstants")
            .CTXHVSPublishToastCardHeader
        : u && n
          ? r("adsDraftObjectPublishedContent")(c)
          : l && n
            ? s._(/*BTDS*/ "Multiple items published")
            : u && a
              ? r("adsDraftObjectDeletedContent")(c)
              : l && a
                ? s._(/*BTDS*/ "Multiple items deleted")
                : u && i
                  ? r("adsDraftObjectUpdatedContent")(c)
                  : l && i
                    ? s._(/*BTDS*/ "Multiple items edited")
                    : s._(/*BTDS*/ "Publish was successful");
    }
    R.displayName = R.name + " [from " + i.id + "]";
    function L(e, t, n, r, a) {
      if (n) return E(t);
      var i = k(e, t, r);
      return a != null && a > 0
        ? o("AdsPushModelStringConstants").getPushModelPublishSuccessBody(i, a)
        : i;
    }
    function E(e) {
      return s._(
        /*BTDS*/ "The engagement objective and Maximize number of conversations performance goal have been applied to {List of successfully published items with counts}.",
        [
          s._param(
            "List of successfully published items with counts",
            r("intlList")(e),
          ),
        ],
      );
    }
    E.displayName = E.name + " [from " + i.id + "]";
    function k(e, t, n) {
      var a = e.areAllCreatingNew,
        i = e.areAllDeleting,
        l = e.areAllEditing,
        m = e.itemCount;
      if (a)
        if (
          ((u || (u = o("ODS"))).bumpEntityKey(
            68,
            "new_ads_publish_success",
            n === !0 ? "dynamic_ad" : "non_dynamic_ad",
          ),
          n === !0 &&
            o("AdsPLRAlphaBetaCheckUtil").isAllowedForPlrWithAlphaBetaCheck(
              "adsDraftCreateToastCardForPublishComplete",
            ))
        ) {
          (u || (u = o("ODS"))).bumpEntityKey(
            68,
            "new_ads_publish_success_plr_alpha_plus",
            n === !0 ? "dynamic_ad" : "non_dynamic_ad",
          );
          var p = r("AdsAccountStoreNew").getSelectedAccount().getValue();
          return (
            o("AdsPLRLoggingUtil").logPLREvent(function () {
              return {
                ad_account_id: p == null ? void 0 : p.account_id,
                event_severity: "info",
                event: "ui_plr_entry_point_in_ad_publish_toast_show",
              };
            }),
            s._(
              /*BTDS*/ '_j{"*":"{List of successfully published items with counts} were published. View details to learn more. To view metrics about your products, go to {product insights link} .","_1":"{List of successfully published items with counts} was published. View details to learn more. To view metrics about your products, go to {product insights link} ."}',
              [
                s._plural(m),
                s._param(
                  "List of successfully published items with counts",
                  r("intlList")(t),
                ),
                s._param(
                  "product insights link",
                  c.jsx(r("GeoLink.react"), {
                    onClick: d,
                    children: "Product insights",
                  }),
                ),
              ],
            )
          );
        } else
          return s._(
            /*BTDS*/ '_j{"*":"{List of successfully published items with counts} were published.","_1":"{List of successfully published items with counts} was published."}',
            [
              s._plural(m),
              s._param(
                "List of successfully published items with counts",
                r("intlList")(t),
              ),
            ],
          );
      else {
        if (i)
          return s._(
            /*BTDS*/ '_j{"*":"{List of successfully published items with counts} were deleted.","_1":"{List of successfully published items with counts} was deleted."}',
            [
              s._plural(m),
              s._param(
                "List of successfully published items with counts",
                r("intlList")(t),
              ),
            ],
          );
        if (l)
          return s._(
            /*BTDS*/ '_j{"*":"{List of successfully published items with counts} were updated.","_1":"{List of successfully published items with counts} was updated."}',
            [
              s._plural(m),
              s._param(
                "List of successfully published items with counts",
                r("intlList")(t),
              ),
            ],
          );
      }
      return s._(
        /*BTDS*/ '_j{"*":"{Successfully published item} were published.","_1":"{Successfully published item} was published."}',
        [
          s._plural(m),
          s._param("Successfully published item", r("intlList")(t)),
        ],
      );
    }
    k.displayName = k.name + " [from " + i.id + "]";
    function I() {
      return s._(/*BTDS*/ "Your shop is nearly ready");
    }
    I.displayName = I.name + " [from " + i.id + "]";
    function T(e) {
      var t = e.itemCount;
      return s._(
        /*BTDS*/ '_j{"*":"Your ads will be published soon","_1":"Your ad will be published soon"}',
        [s._plural(t)],
      );
    }
    T.displayName = T.name + " [from " + i.id + "]";
    function D(e, t) {
      var n = e.itemCount,
        o;
      return (
        (o = s._plural(n)),
        s._(
          /*BTDS*/ '_j{"*":"{List of successfully published items with counts} were published. When your shop is ready, the conversion location will be updated to {=m5}.","_1":"{List of successfully published items with counts} was published. When your shop is ready, the conversion location will be updated to {=m5}."}',
          [
            o,
            s._param(
              "List of successfully published items with counts",
              r("intlList")(t),
            ),
            s._implicitParam(
              "=m5",
              c.jsx(r("GeoBaseText.react"), {
                color: "value",
                size: "value",
                weight: "bold",
                children: s._(/*BTDS*/ '_j{"*":"website and shop"}', [o]),
              }),
            ),
          ],
        )
      );
    }
    D.displayName = D.name + " [from " + i.id + "]";
    function x() {
      return s._(
        /*BTDS*/ "We're setting up your shops on Facebook and Instagram, which might take a few minutes. This ad will be published once your shops are ready.",
      );
    }
    x.displayName = x.name + " [from " + i.id + "]";
    function $() {
      return s._(
        /*BTDS*/ "We're setting up your shop on Facebook and Instagram, which might take a few minutes. These products will be active once your shop is ready.",
      );
    }
    (($.displayName = $.name + " [from " + i.id + "]"), (l.default = f));
  },
  226,
);
