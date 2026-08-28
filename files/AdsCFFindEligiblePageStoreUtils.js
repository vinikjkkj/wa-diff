__d(
  "AdsCFFindEligiblePageStoreUtils",
  [
    "AdsAccountStore",
    "AdsDataAtom",
    "AdsInterfacesLogger",
    "AdsLoadStateUtils_LEGACY",
    "AdsPageStore",
    "ApiPagePaths",
    "getByPath",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      (e || (e = r("AdsDataAtom"))).isDispatching() &&
        (e || (e = r("AdsDataAtom"))).waitFor([
          r("AdsPageStore").getDispatchToken(),
        ]);
      var n = r("AdsPageStore").getLoadObject(t);
      return o("AdsLoadStateUtils_LEGACY").isLoading(n)
        ? null
        : n == null
          ? void 0
          : n.getValue();
    }
    function u(e) {
      return r("getByPath")(e, r("ApiPagePaths").IS_PUBLISHED, !1);
    }
    function c(e, t, n) {
      if (!t) return !0;
      var o = r("getByPath")(e, r("ApiPagePaths").USERPERMISSIONS.DATA, []);
      return !!(
        o.some(function (e) {
          return e.business && e.business.id === t;
        }) ||
        (n != null &&
          n !== t &&
          o.some(function (e) {
            return e.business && e.business.id === n;
          }))
      );
    }
    function d(e, t, n) {
      var o,
        a = r("AdsAccountStore").getSelectedBusinessID(),
        i =
          (o = r("AdsAccountStore").getSelectedAccount()) == null ||
          (o = o.getValue()) == null ||
          (o = o.business) == null
            ? void 0
            : o.id,
        l = r("AdsAccountStore").getSelectedAccountID(),
        d = Array.from(e.values()).filter(function (e) {
          return u(e);
        }).length,
        p = Array.from(e.keys()),
        _ = "none",
        f = null;
      if (t) {
        var g = s(t);
        if (!g) return null;
        if (u(g) && (n || c(g, a, i)))
          return (
            (_ = "candidate_accepted"),
            (f = t),
            m(l, a, f, t, _, d, p),
            g
          );
        _ = "candidate_rejected";
      }
      var h = [];
      e.forEach(function (e) {
        u(e) && h.push(e);
      });
      var y = h.find(function (e) {
        return c(e, a, i);
      });
      if (y)
        ((_ =
          t != null
            ? "fallback_business_context"
            : "first_valid_business_context"),
          (f = y == null ? void 0 : y.id));
      else if (h[0]) {
        var C;
        ((_ = "fallback_first_published"),
          (f = (C = h[0]) == null ? void 0 : C.id));
      }
      return (m(l, a, f, t, _, d, p), y != null ? y : h[0]);
    }
    function m(e, t, n, o, a, i, l) {
      r("AdsInterfacesLogger").log({
        eventName: "page_defaulting_result",
        data: {
          ad_account_id: e,
          page_id: n,
          old_value: o,
          source: a,
          message: JSON.stringify({
            business_id: t,
            published_page_count: i,
            all_page_ids: l.slice(0, 20),
            source: a,
          }),
        },
      });
    }
    ((l.getPage = s), (l.findEligiblePage = d));
  },
  98,
);
