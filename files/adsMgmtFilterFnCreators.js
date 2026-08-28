__d(
  "adsMgmtFilterFnCreators",
  [
    "AdsAPIDevicePlatform",
    "AdsAPITargetFields",
    "AdsCampaignGroupUtils",
    "AdsMgmtFlowSearchAndFilterMR2026H1GatingUtils",
    "AdsPageTypes",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return e.toLowerCase().indexOf(t.toLowerCase()) >= 0;
    }
    function s(e) {
      return function (n) {
        return !e(n);
      };
    }
    function u(e, t) {
      var n = t.includes("not_published");
      function r(e) {
        var r = !1,
          o = e.delivery_info,
          a = o && o.status;
        return (
          (r = a != null && a !== "" && t.includes(a)),
          !r && n && (r = !0),
          r
        );
      }
      e: {
        if (e === "IN") return r;
        if (e === "NOT_IN") return s(r);
        {
          var o = new TypeError("wrong operator: " + e);
          throw (o.stack, o);
          break e;
        }
      }
    }
    function c(e, t) {
      var n = t.includes("pending");
      function r(e) {
        var r = e.delivery_status,
          a = r && r.status;
        if (t.includes("draft") && a == null) return !0;
        var i = a != null && a !== "" && t.includes(a);
        return (
          !i &&
            n &&
            o(
              "AdsMgmtFlowSearchAndFilterMR2026H1GatingUtils",
            ).getDraftBehaviorVariantForAccountWithoutExposure() !==
              o("AdsMgmtFlowSearchAndFilterMR2026H1GatingUtils")
                .AdsInsightsDraftBehaviorVariant.MOVE_AND_FILTER_DRAFTS &&
            (i = !0),
          i
        );
      }
      e: {
        if (e === "IN") return r;
        if (e === "NOT_IN") return s(r);
        {
          var a = new TypeError("wrong operator: " + e);
          throw (a.stack, a);
          break e;
        }
      }
    }
    function d(e, t) {
      function n(e) {
        var n = e.delivery_sub_status;
        return n != null && n !== "" && t.includes(n);
      }
      e: {
        if (e === "IN") return n;
        if (e === "NOT_IN") return s(n);
        throw r("err")("wrong operator: " + e);
      }
    }
    function m(e, t) {
      var n =
          typeof t == "string" || t instanceof String
            ? t.split(",").map(function (e) {
                return e.trim();
              })
            : [],
        r = new Set(n);
      function o(e) {
        var t = e.id;
        return r.has(t);
      }
      e: {
        if (e === "EQUAL") return o;
        if (e === "NOT_EQUAL") return s(o);
        {
          var a = new TypeError("wrong operator: " + e);
          throw (a.stack, a);
          break e;
        }
      }
    }
    function p(e, t) {
      var n = t.split(",").map(function (e) {
          return e.trim();
        }),
        r = new Set(n);
      function o(e) {
        var t,
          n = (t = e.promoted_object) == null ? void 0 : t.product_catalog_id;
        return r.has(n);
      }
      e: {
        if (e === "EQUAL") return o;
        if (e === "NOT_EQUAL") return s(o);
        {
          var a = new TypeError("wrong operator: " + e);
          throw (a.stack, a);
          break e;
        }
      }
    }
    function _(e, t) {
      function n(e) {
        var n,
          r = (n = e.is_message_campaign) != null ? n : !1;
        return r === t;
      }
      e: {
        if (e === "EQUAL") return n;
        if (e === "NOT_EQUAL") return s(n);
        throw r("err")("wrong operator: " + e);
      }
    }
    function f(e, t) {
      var n = new Set(t);
      function r(e) {
        var t = e.id;
        return n.has(t);
      }
      e: {
        if (e === "ANY") return r;
        if (e === "NONE") return s(r);
        {
          var o = new TypeError("wrong operator: " + e);
          throw (o.stack, o);
          break e;
        }
      }
    }
    function g(e, t) {
      function n(e) {
        return !1;
      }
      e: {
        if (e === "ANY") return n;
        {
          var r = new TypeError("wrong operator: " + e);
          throw (r.stack, r);
          break e;
        }
      }
    }
    function h(e, t) {
      function n(e) {
        var t;
        return (
          ((t = e.promoted_object) == null ? void 0 : t.product_catalog_id) !=
          null
        );
      }
      if (e === "IN") return n;
      var r = new TypeError("wrong operator: " + e);
      throw (r.stack, r);
    }
    function y(t, n) {
      function a(t) {
        var r = t.name || "";
        return Array.isArray(n)
          ? n.some(function (t) {
              return e(r, t);
            })
          : typeof n == "string"
            ? e(r, n)
            : !1;
      }
      function i() {
        if (Array.isArray(n))
          return n
            .map(function (e) {
              return String(e).trim();
            })
            .filter(Boolean);
        if (typeof n != "string" || n.trim() === "") return [];
        try {
          var e = JSON.parse(n);
          if (Array.isArray(e))
            return e.map(function (e) {
              return String(e).trim();
            });
        } catch (e) {}
        return [n];
      }
      function l(t) {
        var n = t.name || "",
          r = i();
        return r.every(function (t) {
          return e(n, t);
        });
      }
      function u(t) {
        var n = t.name || "",
          r = i();
        return r.some(function (t) {
          return e(n, t);
        });
      }
      if (
        o(
          "AdsMgmtFlowSearchAndFilterMR2026H1GatingUtils",
        ).getDraftBehaviorVariantForAccountWithoutExposure() ===
          o("AdsMgmtFlowSearchAndFilterMR2026H1GatingUtils")
            .AdsInsightsDraftBehaviorVariant.MOVE_AND_FILTER_DRAFTS ||
        Array.isArray(n)
      )
        e: {
          if (t === "CONTAIN") return a;
          if (t === "CONTAINS_ALL") return l;
          if (t === "CONTAINS_ANY") return u;
          if (t === "NOT_CONTAINS_ANY") return s(u);
          if (t === "NOT_CONTAIN") return s(a);
          throw r("err")("wrong operator: " + t);
        }
      e: {
        if (
          t === "CONTAIN" ||
          t === "CONTAINS_ANY" ||
          t === "NOT_CONTAINS_ANY" ||
          t === "CONTAINS_ALL"
        )
          return a;
        if (t === "NOT_CONTAIN") return s(a);
        {
          var c = new TypeError("wrong operator: " + t);
          throw (c.stack, c);
          break e;
        }
      }
    }
    function C(e, t, n) {
      var o = 0,
        a = [];
      typeof n == "number" ? (o = n) : (a = n);
      function i(t, n) {
        var r = e(n);
        return r == null ? !0 : r.getTime() >= t;
      }
      function l(t, n) {
        var r = e(n);
        return r == null ? !1 : r.getTime() < t;
      }
      function s(e, t) {
        return i(e[0], t) && l(e[1], t);
      }
      e: {
        if (t === "AFTER")
          return function (e) {
            return i(o, e);
          };
        if (t === "BEFORE")
          return function (e) {
            return l(o, e);
          };
        if (t === "IN_RANGE")
          return function (e) {
            return s(a, e);
          };
        throw r("err")("wrong operator: " + t);
      }
    }
    function b(e, t) {
      return C(
        function (e) {
          return e.updated_time;
        },
        e,
        t,
      );
    }
    function v(e, t) {
      return C(
        function (e) {
          return e.start_time;
        },
        e,
        t,
      );
    }
    function S(e, t) {
      return C(
        function (e) {
          return e.stop_time;
        },
        e,
        t,
      );
    }
    function R(e, t) {
      function n(e) {
        var n = e.adlabels || [],
          r = n.map(function (e) {
            return e.id;
          });
        return t.some(function (e) {
          return r.includes(e);
        });
      }
      function r(e) {
        var n = e.adlabels || [],
          r = n.map(function (e) {
            return e.id;
          });
        return t.every(function (e) {
          return r.includes(e);
        });
      }
      e: {
        if (e === "ANY") return n;
        if (e === "NONE") return s(n);
        if (e === "ALL") return r;
        {
          var o = new TypeError("wrong operator: " + e);
          throw (o.stack, o);
          break e;
        }
      }
    }
    function L(e, t) {
      function n(e) {
        var n = e.topline_id;
        return n != null && t.includes(n);
      }
      e: {
        if (e === "IN") return n;
        if (e === "NOT_IN") return s(n);
        {
          var r = new TypeError("wrong operator: " + e);
          throw (r.stack, r);
          break e;
        }
      }
    }
    function E(e, t) {
      function n(e) {
        var n = e.objective;
        return t.includes(n || "");
      }
      e: {
        if (e === "IN") return n;
        if (e === "NOT_IN") return s(n);
        {
          var r = new TypeError("wrong operator: " + e);
          throw (r.stack, r);
          break e;
        }
      }
    }
    function k(e, t) {
      function n(e) {
        return (
          e.conversion_location != null && t.includes(e.conversion_location)
        );
      }
      e: {
        if (e === "IN") return n;
        if (e === "NOT_IN") return s(n);
        {
          var r = new TypeError("wrong operator: " + e);
          throw (r.stack, r);
          break e;
        }
      }
    }
    function I(e, t) {
      function n(e) {
        return t.some(function (t) {
          return a(t, e.placement);
        });
      }
      function o(e) {
        return t.every(function (t) {
          return a(t, e.placement);
        });
      }
      function a(e, t) {
        return t
          ? e === r("AdsPageTypes").DESKTOP_FEED
            ? t[r("AdsAPITargetFields").PUBLISHER_PLATFORMS].includes(
                "facebook",
              ) &&
              t[r("AdsAPITargetFields").FACEBOOK_POSITIONS].includes("feed") &&
              t[r("AdsAPITargetFields").DEVICE_PLATFORMS].includes(
                r("AdsAPIDevicePlatform").DESKTOP,
              )
            : e === r("AdsPageTypes").MOBILE_FEED
              ? t[r("AdsAPITargetFields").PUBLISHER_PLATFORMS].includes(
                  "facebook",
                ) &&
                t[r("AdsAPITargetFields").FACEBOOK_POSITIONS].includes(
                  "feed",
                ) &&
                t[r("AdsAPITargetFields").DEVICE_PLATFORMS].includes(
                  r("AdsAPIDevicePlatform").MOBILE,
                )
              : e === r("AdsPageTypes").RIGHT_COLUMN
                ? t[r("AdsAPITargetFields").PUBLISHER_PLATFORMS].includes(
                    "facebook",
                  ) &&
                  t[r("AdsAPITargetFields").FACEBOOK_POSITIONS].includes(
                    "right_hand_column",
                  )
                : e === r("AdsPageTypes").INSTAGRAM_STREAM
                  ? t[r("AdsAPITargetFields").PUBLISHER_PLATFORMS].includes(
                      "instagram",
                    ) &&
                    t[r("AdsAPITargetFields").INSTAGRAM_POSITIONS].includes(
                      "stream",
                    )
                  : e === r("AdsPageTypes").INSTAGRAM_STORY
                    ? t[r("AdsAPITargetFields").PUBLISHER_PLATFORMS].includes(
                        "instagram",
                      ) &&
                      t[r("AdsAPITargetFields").INSTAGRAM_POSITIONS].includes(
                        "story",
                      )
                    : e === r("AdsPageTypes").MOBILE_EXTERNAL
                      ? t[r("AdsAPITargetFields").PUBLISHER_PLATFORMS].includes(
                          "audience_network",
                        ) &&
                        t[r("AdsAPITargetFields").DEVICE_PLATFORMS].includes(
                          r("AdsAPIDevicePlatform").MOBILE,
                        )
                      : e === r("AdsPageTypes").MESSENGER_INBOX
                        ? t[
                            r("AdsAPITargetFields").PUBLISHER_PLATFORMS
                          ].includes("messenger") &&
                          t[
                            r("AdsAPITargetFields").MESSENGER_POSITIONS
                          ].includes("messenger_home")
                        : !1
          : !1;
      }
      e: {
        if (e === "ANY") return n;
        if (e === "NONE") return s(n);
        if (e === "ALL") return o;
        {
          var i = new TypeError("wrong operator: " + e);
          throw (i.stack, i);
          break e;
        }
      }
    }
    function T(e, t) {
      function n(e) {
        var n = e.id;
        return t.includes(n || "");
      }
      e: {
        if (e === "IN") return n;
        {
          var r = new TypeError("wrong operator: " + e);
          throw (r.stack, r);
          break e;
        }
      }
    }
    function D(e, t) {
      function n(e) {
        return t.includes(o("AdsCampaignGroupUtils").getCampaignGroupType());
      }
      e: {
        if (e === "IN") return n;
        if (e === "NOT_IN") return s(n);
        {
          var r = new TypeError("wrong operator: " + e);
          throw (r.stack, r);
          break e;
        }
      }
    }
    ((l.createDeliveryInfoFilterFn = u),
      (l.createDeliveryStatusFilterFn = c),
      (l.createLearningPhaseStatusFilterFn = d),
      (l.createIDFilterFn = m),
      (l.createProductCatalogIDFilterFn = p),
      (l.createIsMessageCampaignFilterFn = _),
      (l.createIDsFilterFn = f),
      (l.createDraftFilterFn = g),
      (l.createHasProductCatalogIDFilterFn = h),
      (l.createNameFilterFn = y),
      (l.createChangedFilterFn = b),
      (l.createStartTimeFilterFn = v),
      (l.createEndTimeFilterFn = S),
      (l.createLabelFilterFn = R),
      (l.createToplineFilterFn = L),
      (l.createObjectivesFilterFn = E),
      (l.createConversionLocationFn = k),
      (l.createPlacementFilterFn = I),
      (l.createSelectedFilterFn = T),
      (l.createCampaignGroupTypeFilterFn = D));
  },
  98,
);
