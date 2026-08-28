__d(
  "AdsTypeaheadFilters",
  [
    "AdsGenericFilter",
    "AdsGenericFilterField",
    "AdsGenericFilterFieldType",
    "AdsGenericFilterSet",
    "BrandsAppConfigStaticFields",
    "generateAPIFieldNameForFilters",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = new (e = r("AdsGenericFilterField"))(
        "campaign.id",
        (s = r("AdsGenericFilterFieldType")).STRING_SET,
      ),
      c = new e("id", s.STRING),
      d = new e("campaign_group_type", s.STRING_SET),
      m = new e(
        r("generateAPIFieldNameForFilters")("campaign", "campaign_group_type"),
        s.STRING_SET,
      ),
      p = new e("id", s.STRING),
      _ = new e("name", s.STRING),
      f = new e("topline_id", s.STRING),
      g = new e("objective", s.STRING_SET),
      h = new e("campaign.buying_type", s.STRING_SET);
    function y(e) {
      var t = [];
      return (
        e &&
          e.campaignGroupID &&
          t.push(new (r("AdsGenericFilter"))(u, "IN", [e.campaignGroupID])),
        e &&
          e.objective &&
          t.push(new (r("AdsGenericFilter"))(g, "IN", [e.objective])),
        e &&
          e.buyingType &&
          t.push(new (r("AdsGenericFilter"))(h, "IN", [e.buyingType])),
        (!e || !e.includeSplitTests) &&
          t.push(new (r("AdsGenericFilter"))(m, "NOT_IN", ["split_test"])),
        t
      );
    }
    function C(e) {
      return new (r("AdsGenericFilterSet"))([
        new (r("AdsGenericFilter"))(_, "CONTAIN", e),
      ]);
    }
    function b(e, t) {
      var n = y(t);
      return (
        n.push(new (r("AdsGenericFilter"))(p, "EQUAL", e)),
        new (r("AdsGenericFilterSet"))(n)
      );
    }
    function v(e, t) {
      var n = y(t);
      return (
        n.push(new (r("AdsGenericFilter"))(_, "CONTAIN", e)),
        new (r("AdsGenericFilterSet"))(n)
      );
    }
    function S(e) {
      var t = [new (r("AdsGenericFilter"))(_, "CONTAIN", e)];
      return new (r("AdsGenericFilterSet"))(t);
    }
    function R(e, t) {
      var n = [new (r("AdsGenericFilter"))(c, "EQUAL", e)];
      return (
        t || n.push(new (r("AdsGenericFilter"))(d, "NOT_IN", ["split_test"])),
        new (r("AdsGenericFilterSet"))(n)
      );
    }
    function L(e, t, n, o) {
      var a = [new (r("AdsGenericFilter"))(_, "CONTAIN", e)];
      return (
        t && a.push(new (r("AdsGenericFilter"))(f, "EQUAL", t)),
        n &&
          n.size > 0 &&
          a.push(new (r("AdsGenericFilter"))(g, "IN", n.toArray())),
        o || a.push(new (r("AdsGenericFilter"))(d, "NOT_IN", ["split_test"])),
        new (r("AdsGenericFilterSet"))(a)
      );
    }
    function E(e, t, n, o) {
      o === void 0 && (o = !1);
      var a = [];
      return (
        o
          ? a.push(
              new (r("AdsGenericFilter"))(
                new (r("AdsGenericFilterField"))(
                  r("BrandsAppConfigStaticFields").NAME_OR_ID_FILTER,
                  r("AdsGenericFilterFieldType").STRING,
                ),
                "CONTAIN",
                e,
              ),
            )
          : a.push(new (r("AdsGenericFilter"))(_, "CONTAIN", e)),
        t &&
          a.push(
            new (r("AdsGenericFilter"))(
              new (r("AdsGenericFilterField"))(
                "business",
                r("AdsGenericFilterFieldType").STRING,
              ),
              "EQUAL",
              t,
            ),
          ),
        n &&
          a.push(
            new (r("AdsGenericFilter"))(
              new (r("AdsGenericFilterField"))(
                "includeCrSt",
                r("AdsGenericFilterFieldType").BOOLEAN,
              ),
              "EQUAL",
              !0,
            ),
          ),
        new (r("AdsGenericFilterSet"))(a)
      );
    }
    function k(e, t) {
      var n = [];
      return (
        n.push(
          new (r("AdsGenericFilter"))(
            new (r("AdsGenericFilterField"))(
              "account_id",
              r("AdsGenericFilterFieldType").STRING,
            ),
            "EQUAL",
            e,
          ),
        ),
        t &&
          n.push(
            new (r("AdsGenericFilter"))(
              new (r("AdsGenericFilterField"))(
                "business",
                r("AdsGenericFilterFieldType").STRING,
              ),
              "EQUAL",
              t,
            ),
          ),
        new (r("AdsGenericFilterSet"))(n)
      );
    }
    function I(e) {
      var t = [];
      return (
        t.push(
          new (r("AdsGenericFilter"))(
            new (r("AdsGenericFilterField"))(
              r("BrandsAppConfigStaticFields").NAME_OR_ID_FILTER,
              r("AdsGenericFilterFieldType").STRING,
            ),
            "CONTAIN",
            e,
          ),
        ),
        new (r("AdsGenericFilterSet"))(t)
      );
    }
    ((l.createToplineFilter = C),
      (l.createCampaignByIDFilter = b),
      (l.createCampaignFilter = v),
      (l.createAdgroupFilter = S),
      (l.createCampaignGroupByIDFilter = R),
      (l.createCampaignGroupFilter = L),
      (l.createAccountFilter = E),
      (l.createAccountByIDFilter = k),
      (l.createBusinessFilter = I));
  },
  98,
);
