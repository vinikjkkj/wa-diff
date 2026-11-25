__d(
  "WAWebHatchShoppingLogging",
  [
    "WAWebHatchLogging",
    "WAWebHatchShoppingApi",
    "WAWebHatchShoppingData",
    "WAWebThreadJourneyLogger",
    "WAWebWamEnumHatchActionType",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useEffect,
      c = s.useEffectEvent,
      d = s.useRef,
      m = 500,
      p = 404,
      _ = 408,
      f = 410,
      g = new Map(),
      h = null,
      y = new Set(),
      C = null,
      b = new Map();
    function v(e, t, n) {
      var r,
        o = (r = V(t)) != null ? r : V(n);
      if (o != null) return o;
      var a = g.get(e);
      if (a != null) return a;
      var i = self.crypto.randomUUID();
      return (H(g, e, i), i);
    }
    function S(e) {
      var t = V(e);
      t != null && (C = { aiSessionId: U(), presentationId: t });
    }
    function R(e) {
      var t = b.get(e);
      if (t != null) return t;
      var n = C,
        r = n != null && n.aiSessionId === U() ? n.presentationId : "none";
      return (r !== "none" && (C = null), H(b, e, r), r);
    }
    function L(e) {
      var t = U();
      t !== h && ((h = t), (y = new Set()));
      var n = e.messageKey + ":" + e.presentationId;
      if (!y.has(n)) {
        var r = o("WAWebHatchLogging").logHatchShoppingJourney(
          o("WAWebWamEnumHatchActionType").HATCH_ACTION_TYPE
            .SHOPPING_RESULTS_IMPRESSION,
          {
            presentation_id: e.presentationId,
            product_count: e.productCount,
            result_format: e.resultFormat,
          },
        );
        r && y.add(n);
      }
    }
    function E(e) {
      o("WAWebHatchLogging").logHatchShoppingJourney(
        o("WAWebWamEnumHatchActionType").HATCH_ACTION_TYPE
          .SHOPPING_LIST_IMPRESSION,
        {
          presentation_id: e.presentationId,
          product_count: e.productCount,
          result_format: e.resultFormat,
        },
      );
    }
    function k(e) {
      o("WAWebHatchLogging").logHatchShoppingJourney(
        o("WAWebWamEnumHatchActionType").HATCH_ACTION_TYPE.SHOPPING_LIST_CLOSED,
        { close_method: e.closeMethod, presentation_id: e.presentationId },
      );
    }
    function I(e, t, n) {
      o("WAWebHatchLogging").logHatchShoppingJourney(
        o("WAWebWamEnumHatchActionType").HATCH_ACTION_TYPE
          .SHOPPING_PDP_IMPRESSION,
        babelHelpers.extends({}, q(e), { ctas_shown: t, list_state: n }),
      );
    }
    function T(e) {
      (S(e.presentationId),
        o("WAWebHatchLogging").logHatchShoppingJourney(
          o("WAWebWamEnumHatchActionType").HATCH_ACTION_TYPE.SHOPPING_BUY_TAP,
          q(e),
        ));
    }
    function D(e, t) {
      o("WAWebHatchLogging").logHatchShoppingJourney(
        o("WAWebWamEnumHatchActionType").HATCH_ACTION_TYPE
          .SHOPPING_ACTION_RESULT,
        babelHelpers.extends({}, q(e), { request_status: t }),
      );
    }
    function x(e, t) {
      o("WAWebHatchLogging").logHatchShoppingJourney(
        o("WAWebWamEnumHatchActionType").HATCH_ACTION_TYPE.SHOPPING_WEBSITE_TAP,
        babelHelpers.extends({}, q(e), { website_target: t }),
      );
    }
    function $(e, t) {
      o("WAWebHatchLogging").logHatchShoppingJourney(
        o("WAWebWamEnumHatchActionType").HATCH_ACTION_TYPE.SHOPPING_PDP_CLOSED,
        babelHelpers.extends({}, q(e), { close_method: t }),
      );
    }
    function P(e) {
      return e === "catalog"
        ? "catalog"
        : e === "browser"
          ? "browser"
          : e === "marketplace"
            ? "marketplace"
            : "unknown";
    }
    function N(e) {
      if ((e == null ? void 0 : e.kind) === "Accepted") return "accepted";
      var t = (e == null ? void 0 : e.kind) === "Uncertain" ? e.call : null;
      return ((t == null ? void 0 : t.kind) === "Failure" &&
        t.reason === "TIMEOUT") ||
        ((t == null ? void 0 : t.kind) === "Rejected" && t.statusCode === _)
        ? "timeout"
        : "failed";
    }
    function M(e, t, n, r) {
      return t
        ? "loading"
        : n != null
          ? "error"
          : (function (t) {
              if (
                ((typeof t == "object" && t !== null) ||
                  typeof t == "function") &&
                t.kind === "Ok"
              )
                return "loaded";
              if (
                ((typeof t == "object" && t !== null) ||
                  typeof t == "function") &&
                t.kind === "Failed" &&
                "call" in t
              ) {
                var n = t.call;
                return n.kind === "Rejected" &&
                  (n.statusCode === p || n.statusCode === f)
                  ? "unavailable"
                  : "error";
              }
              return ((typeof t == "object" && t !== null) ||
                typeof t == "function") &&
                t.kind === "Unavailable"
                ? !e.unavailable &&
                  e.productType === "browser" &&
                  e.connector == null
                  ? "loaded"
                  : "unavailable"
                : "loading";
            })(r);
    }
    function w(e, t) {
      var n = [];
      return (
        e && n.push("buy"),
        t && n.push("website"),
        n.length > 0 ? n.join(",") : "none"
      );
    }
    function A(e, t, n, r) {
      return n != null
        ? o("WAWebHatchShoppingData").getShoppingVariantUrl(n, r)
        : t == null && e.productType === "browser" && e.connector == null
          ? e.product.productUrl
          : null;
    }
    function F(e, t, n, r) {
      var a =
          t == null
            ? new Map()
            : o("WAWebHatchShoppingData").getShoppingSelections(t),
        i =
          t != null
            ? o("WAWebHatchShoppingData").resolveShoppingVariant(t, a)
            : null,
        l = A(e, t, t, i),
        s = !e.unavailable && n.isAccountCurrent() && n.sessionId !== "",
        u =
          s &&
          o("WAWebHatchShoppingApi").getShoppingIntentAvailable({
            type: "buy",
            seed: e,
            details: t,
            selections: a,
            widgetId: r,
          });
      return w(u, l != null && n.isAccountCurrent());
    }
    function O(e, t, n, r, o) {
      var a;
      return {
        openedFrom: t,
        position: n != null ? n : e.index + 1,
        presentationId:
          r != null
            ? r
            : v(e.index + ":" + ((a = e.productId) != null ? a : ""), o),
        productType: P(e.productType),
      };
    }
    function B(e, t, n, r, o, a, i, l, s, m, p) {
      var _ = d(!1),
        f = M(m, l, i, s),
        g = r || f === "loading" ? "none" : F(m, t, n, p),
        h = c(function () {
          _.current || ((_.current = !0), I(a, g, f));
        });
      u(
        function () {
          l || h();
        },
        [l],
      );
      var y = c(function () {
        var t, n;
        _.current || ((_.current = !0), I(a, "none", "loading"));
        var r =
          (t = (n = o.current) != null ? n : e == null ? void 0 : e.current) !=
          null
            ? t
            : "other";
        (e != null && (e.current = null), $(a, r));
      });
      u(function () {
        return function () {
          return y();
        };
      }, []);
    }
    function W() {
      (g.clear(), (h = null), (y = new Set()), (C = null), b.clear());
    }
    function q(e) {
      return {
        opened_from: e.openedFrom,
        position: e.position,
        presentation_id: e.presentationId,
        product_type: e.productType,
      };
    }
    function U() {
      var e;
      return (e = o(
        "WAWebThreadJourneyLogger",
      ).ThreadJourneyLogger.getAiSessionId()) != null
        ? e
        : null;
    }
    function V(e) {
      var t = e == null ? void 0 : e.trim();
      return t != null && t !== "" ? t : null;
    }
    function H(e, t, n) {
      if (e.size >= m) {
        var r = e.keys().next();
        r.done !== !0 && e.delete(r.value);
      }
      e.set(t, n);
    }
    ((l.resolveShoppingPresentationId = v),
      (l.rememberShoppingBuyPresentationId = S),
      (l.resolveCheckoutPresentationId = R),
      (l.logShoppingResultsImpression = L),
      (l.logShoppingListImpression = E),
      (l.logShoppingListClosed = k),
      (l.logShoppingPdpImpression = I),
      (l.logShoppingBuyTap = T),
      (l.logShoppingActionResult = D),
      (l.logShoppingWebsiteTap = x),
      (l.logShoppingPdpClosed = $),
      (l.normalizeShoppingProductType = P),
      (l.getShoppingRequestStatus = N),
      (l.getShoppingPdpListState = M),
      (l.getShoppingPdpCtasShown = w),
      (l.getShoppingPdpWebsiteUrl = A),
      (l.getInitialShoppingPdpCtasShown = F),
      (l.createShoppingPdpLogContext = O),
      (l.useShoppingPdpLifecycle = B),
      (l.resetShoppingLoggingStateForTests = W));
  },
  98,
);
