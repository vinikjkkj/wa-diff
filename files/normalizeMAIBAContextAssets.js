__d(
  "normalizeMAIBAContextAssets",
  [
    "AdsQuickCreateMAIBAContextChipsStrings",
    "MAIBAContextAssetTypes",
    "RelayHooks",
    "formatMAIBAStandardEventLabel",
    "normalizeMAIBAContextAssets_account.graphql",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("normalizeMAIBAContextAssets_account.graphql")),
      u = { state: "enabled" },
      c = "LOOKALIKE";
    function d(e, t) {
      return e != null && e !== "" ? e : t;
    }
    function m(e) {
      return e != null && e !== "" ? e : null;
    }
    function p(e) {
      return String(
        o("AdsQuickCreateMAIBAContextChipsStrings").getContextAssetDetailId(e),
      );
    }
    function _(e, t) {
      var n = e.name.localeCompare(t.name, void 0, { sensitivity: "base" });
      return n !== 0 ? n : e.id.localeCompare(t.id);
    }
    function f(e) {
      return [].concat(e).sort(_);
    }
    function g(e) {
      return e.slice(
        0,
        o("MAIBAContextAssetTypes").MAIBA_CONTEXT_FIRST_PAGE_SIZE,
      );
    }
    function h(e) {
      var t = e.subtype != null && e.subtype.toUpperCase() === c;
      return {
        detail: p(e.id),
        eligibility:
          e.is_disabled || !e.allow_new_campaigns
            ? {
                reason: o(
                  "AdsQuickCreateMAIBAContextChipsStrings",
                ).getContextAssetDisabledNotAvailable(),
                state: "disabled",
              }
            : u,
        id: e.id,
        name: d(e.name, e.id),
        recencyRank: null,
        tab: "audiences",
        type: t ? "LOOKALIKE_AUDIENCE" : "CUSTOM_AUDIENCE",
      };
    }
    function y(e) {
      var t = [],
        n = [];
      for (var o of (a =
        e == null || (i = e.ads_pixels) == null ? void 0 : i.nodes) != null
        ? a
        : []) {
        var a,
          i,
          l = d(o.name, o.id);
        t.push({
          detail: p(o.id),
          eligibility: u,
          id: o.id,
          name: l,
          recencyRank: null,
          tab: "datasets",
          type: "DATASET",
        });
        for (var s of o.offsite_signals) {
          var c;
          n.push({
            detail: l,
            eligibility: u,
            id: o.id + ":" + s.event,
            name:
              (c = r("formatMAIBAStandardEventLabel")(s.event)) != null
                ? c
                : s.event,
            recencyRank: null,
            tab: "datasets",
            type: "CONVERSION_EVENT",
          });
        }
      }
      return { conversionEventRows: n, datasetRows: t };
    }
    function C(e) {
      var t = [],
        n = [];
      for (var r of (o =
        e == null ? void 0 : e.maiba_eligible_product_catalogs) != null
        ? o
        : []) {
        var o,
          a = d(r.name, r.id);
        t.push({
          detail: p(r.id),
          eligibility: u,
          id: r.id,
          name: a,
          recencyRank: null,
          tab: "catalogs",
          type: "CATALOG",
        });
        for (var i of (l = (s = r.sets) == null ? void 0 : s.nodes) != null
          ? l
          : []) {
          var l, s;
          n.push({
            detail: a,
            eligibility: u,
            id: i.id,
            name: d(i.name, i.id),
            recencyRank: null,
            tab: "catalogs",
            type: "PRODUCT_SET",
          });
        }
      }
      return { catalogRows: t, productSetRows: n };
    }
    function b(e) {
      var t = [];
      for (var n of (r = e == null ? void 0 : e.maiba_identity_page_options) !=
      null
        ? r
        : []) {
        var r,
          o = m(n.username);
        t.push({
          detail: o != null ? "facebook.com/" + o : null,
          eligibility: u,
          id: n.page_id,
          name: d(n.name, n.page_id),
          recencyRank: null,
          tab: "business",
          type: "FACEBOOK_PAGE",
        });
      }
      return t;
    }
    function v(e) {
      var t = [];
      for (var n of (r =
        e == null ? void 0 : e.maiba_identity_business_instagram_accounts) !=
      null
        ? r
        : []) {
        var r,
          o,
          a = m(n.username),
          i = a != null ? "@" + a : null,
          l = m(n.name);
        t.push({
          detail: l != null ? i : null,
          eligibility: u,
          id: n.ig_user_id,
          name: (o = l != null ? l : i) != null ? o : n.ig_user_id,
          recencyRank: null,
          tab: "business",
          type: "INSTAGRAM_ACCOUNT",
        });
      }
      return t;
    }
    function S(e) {
      return {
        detail: null,
        eligibility: u,
        id: e,
        name: e,
        recencyRank: null,
        tab: "business",
        type: "WEBSITE",
      };
    }
    function R(e) {
      var t = [];
      for (var n of (r = e == null ? void 0 : e.maiba_context_websites) != null
        ? r
        : []) {
        var r;
        n.domain !== "" && t.push(S(n.domain));
      }
      return t;
    }
    function L(e, t) {
      var n = Math.min(
          t.length,
          o("MAIBAContextAssetTypes").MAIBA_CONTEXT_WEBSITES_FIRST_PAGE_MAX,
        ),
        r = Math.min(
          e.length,
          o("MAIBAContextAssetTypes").MAIBA_CONTEXT_FIRST_PAGE_SIZE - n,
        );
      return [].concat(
        e.slice(0, r),
        t.slice(
          0,
          o("MAIBAContextAssetTypes").MAIBA_CONTEXT_FIRST_PAGE_SIZE - r,
        ),
      );
    }
    function E(e) {
      return e.type === "WEBSITE";
    }
    function k(e, t) {
      var n = e.searchPool.filter(E),
        r = new Set(
          n.map(function (e) {
            return e.id;
          }),
        ),
        a = t.filter(function (e) {
          return !E(e) || r.has(e.id) ? !1 : (r.add(e.id), !0);
        }),
        i = []
          .concat(n, a)
          .slice(0, o("MAIBAContextAssetTypes").MAIBA_CONTEXT_WEBSITES_MAX);
      return i.length === n.length
        ? e
        : babelHelpers.extends({}, e, {
            firstPageByTab: babelHelpers.extends({}, e.firstPageByTab, {
              business: L(
                e.firstPageByTab.business.filter(function (e) {
                  return !E(e);
                }),
                i,
              ),
            }),
            searchPool: [].concat(
              e.searchPool.filter(function (e) {
                return !E(e);
              }),
              i,
            ),
          });
    }
    function I(e) {
      var t = [],
        n = 0;
      for (var r of (o =
        e == null || (a = e.campaign_groups) == null ? void 0 : a.edges) != null
        ? o
        : []) {
        var o,
          a,
          i = r.node;
        t.push({
          detail: p(i.id),
          eligibility: u,
          id: i.id,
          name: d(i.name, i.id),
          recencyRank: n++,
          tab: "campaigns",
          type: "CAMPAIGN",
        });
      }
      return t;
    }
    function T(e) {
      var t = [];
      for (var n of (r =
        e == null ? void 0 : e.maiba_custom_audience_typeahead) != null
        ? r
        : []) {
        var r;
        t.push(h(n));
      }
      return t;
    }
    function D(e, t) {
      var n = o("RelayHooks").readInlineData(s, e.account),
        r = y(n),
        a = r.conversionEventRows,
        i = r.datasetRows,
        l = C(n),
        u = l.catalogRows,
        c = l.productSetRows,
        d = b(n),
        m = v(n),
        p = R(n).slice(
          0,
          o("MAIBAContextAssetTypes").MAIBA_CONTEXT_WEBSITES_MAX,
        ),
        _ = I(n),
        h = T(n),
        S = f(i),
        E = f(a),
        k = f(c),
        D = f(d),
        x = f(m),
        $ = f(h),
        P = L([].concat(D, x), p),
        N = {
          audiences: g($),
          business: P,
          campaigns: g(_),
          catalogs: g(u),
          datasets: g(S),
          forms: [],
        },
        M = [].concat(S, E, u, k, D, x, p),
        w = D.slice(
          0,
          o("MAIBAContextAssetTypes").MAIBA_CONTEXT_FORM_PAGES_MAX,
        ).map(function (e) {
          return e.id;
        });
      return {
        adAccountID: t,
        firstPageByTab: N,
        formPageIDs: w,
        hasPages: d.length > 0,
        searchPool: M,
      };
    }
    function x(e) {
      var t = new Set(e.formPageIDs),
        n = new Map();
      for (var r of e.searchPool)
        r.type === "FACEBOOK_PAGE" && t.has(r.id) && n.set(r.id, r.name);
      return n;
    }
    function $(e, t) {
      return t.length === 0
        ? e
        : babelHelpers.extends({}, e, {
            firstPageByTab: babelHelpers.extends({}, e.firstPageByTab, {
              business: L(
                [].concat(
                  e.searchPool.filter(function (e) {
                    return e.tab === "business" && !E(e);
                  }),
                  t,
                ),
                e.searchPool.filter(E),
              ),
            }),
            searchPool: [].concat(e.searchPool, t),
          });
    }
    ((l.nameOrId = d),
      (l.toContextAssetIdDetail = p),
      (l.compareByName = _),
      (l.toAudienceContextAsset = h),
      (l.toWebsiteContextAsset = S),
      (l.mergeMAIBAContextWebsites = k),
      (l.normalizeMAIBAContextAssets = D),
      (l.getMAIBAContextPageNames = x),
      (l.withMAIBAContextWhatsAppNumbers = $));
  },
  98,
);
