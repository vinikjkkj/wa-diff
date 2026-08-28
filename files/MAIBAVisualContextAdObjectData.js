__d(
  "MAIBAVisualContextAdObjectData",
  [
    "AdsAccountStore",
    "AdsLoadObjectUtils",
    "AdsObjectTypes",
    "AdsPEAdgroupSelectors",
    "AdsPECampaignGroupSelectors",
    "AdsPECampaignSelectors",
    "DateTime",
    "ObjectTypeToIDsMapSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 3,
      s = 3;
    function u(e, t) {
      var n, a, l, s;
      (e === void 0 && (e = null), t === void 0 && (t = null));
      var u =
        (n = r("AdsAccountStore").getSelectedAccount().getValue()) == null
          ? void 0
          : n.account_id;
      if (u == null) return {};
      var p = {},
        _ = o("ObjectTypeToIDsMapSelector")
          .objectTypeToIDsMapSelector()
          .getValue();
      if (_ == null) return {};
      var g = (a = _.get(r("AdsObjectTypes").CAMPAIGN_GROUP)) != null ? a : [],
        y = (l = _.get(r("AdsObjectTypes").CAMPAIGN)) != null ? l : [],
        C = (s = _.get(r("AdsObjectTypes").ADGROUP)) != null ? s : [],
        b = m(
          o("AdsLoadObjectUtils").getLoadedValuesFromMap(
            o("AdsPEAdgroupSelectors").getAllSelector_LEGACY()(C),
          ),
        ).toSorted(f),
        v = o("AdsLoadObjectUtils").getLoadedValuesFromMap(
          o("AdsPECampaignSelectors").getAllByFieldsSelector()(y, {}, i.id),
        ),
        S = c(v).toSorted(f),
        R = o("AdsLoadObjectUtils").getLoadedValuesFromMap(
          o("AdsPECampaignGroupSelectors").getAllByFieldsSelector()(
            g,
            {},
            i.id,
          ),
        ),
        L = d(R);
      if (L.length === 0 || S.length === 0 || b.length === 0) return p;
      var E = S,
        k = b;
      if (e != null) {
        E = S.slice(0, e);
        var I = E.map(function (e) {
          return e.id;
        });
        k = h(I, b, t != null ? t : Number.MAX_SAFE_INTEGER);
      }
      return (
        L.length > 0 &&
          (p = babelHelpers.extends({}, p, {
            campaign_group_info_from_selector: L,
          })),
        E.length > 0 &&
          (p = babelHelpers.extends({}, p, { campaign_info_from_selector: E })),
        k.length > 0 &&
          (p = babelHelpers.extends({}, p, { adgroup_info_from_selector: k })),
        p
      );
    }
    function c(e) {
      return e
        .map(function (e) {
          if (e != null)
            return {
              id: e.id,
              type: r("AdsObjectTypes").CAMPAIGN,
              spec: Object.keys(e).map(function (t) {
                var n;
                return {
                  spec_name: t,
                  spec_value_json:
                    (n = JSON.stringify(e[t])) != null ? n : "null",
                };
              }),
            };
        })
        .filter(Boolean);
    }
    function d(e) {
      return e
        .map(function (e) {
          if (e != null)
            return {
              id: e.id,
              type: r("AdsObjectTypes").CAMPAIGN_GROUP,
              spec: Object.keys(e).map(function (t) {
                var n;
                return {
                  spec_name: t,
                  spec_value_json:
                    (n = JSON.stringify(e[t])) != null ? n : "null",
                };
              }),
            };
        })
        .filter(Boolean);
    }
    function m(e) {
      return e
        .map(function (e) {
          if (e != null)
            return {
              id: e.id,
              type: r("AdsObjectTypes").ADGROUP,
              spec: Object.keys(e).map(function (t) {
                var n;
                return {
                  spec_name: t,
                  spec_value_json:
                    (n = JSON.stringify(e[t])) != null ? n : "null",
                };
              }),
            };
        })
        .filter(Boolean);
    }
    function p(e, t) {
      var n = e.spec.find(function (e) {
        return e.spec_name === t;
      });
      if (n == null) return null;
      try {
        return JSON.parse(n.spec_value_json);
      } catch (e) {
        return null;
      }
    }
    function _(e) {
      var t = p(e, "created_time");
      if (typeof t == "string") {
        var n = r("DateTime").fromISOString(t, 0);
        return n.instant;
      }
      return null;
    }
    function f(e, t) {
      var n = _(e),
        r = _(t);
      return n == null && r == null
        ? 0
        : n == null
          ? 1
          : r == null
            ? -1
            : r - n;
    }
    function g(e) {
      var t = p(e, "adset_id");
      return typeof t == "string" ? t : null;
    }
    function h(e, t, n) {
      var r = [],
        o = function (o) {
          var e = t.filter(function (e) {
              var t = g(e);
              return t === o;
            }),
            a = e.slice(0, n);
          r.push.apply(r, a);
        };
      for (var a of e) o(a);
      return r;
    }
    ((l.LIMIT_OF_CAMPAIGNS = e),
      (l.LIMIT_OF_ADGROUPS_PER_CAMPAIGN = s),
      (l.getAdObjectData = u));
  },
  98,
);
