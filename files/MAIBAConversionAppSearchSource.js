__d(
  "MAIBAConversionAppSearchSource",
  [
    "AbstractSearchSource",
    "AdsCampaignAppSelectorSearchableEntry",
    "MAIBAConversionAppSearchSourceQuery.graphql",
    "Promise",
    "RelayHooks",
    "SearchSourceQueryStatus",
    "StaticSearchSource",
    "ads-app-platforms",
    "debounce",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = (u || (u = o("react"))).useMemo,
      d = 200,
      m = new (r("StaticSearchSource"))([]),
      p =
        e !== void 0
          ? e
          : (e = n("MAIBAConversionAppSearchSourceQuery.graphql"));
    function _(e) {
      switch (e) {
        case "AMAZON_APP_STORE":
          return o("ads-app-platforms").MOBILE_STORE.AMAZON;
        case "FB_CANVAS":
          return o("ads-app-platforms").MOBILE_STORE.FB_CANVAS;
        case "GALAXY_STORE":
          return o("ads-app-platforms").MOBILE_STORE.GALAXY_STORE;
        case "GOOGLE_PLAY":
          return o("ads-app-platforms").MOBILE_STORE.GOOGLE_PLAY;
        case "HORIZON_WORLD":
          return o("ads-app-platforms").MOBILE_STORE.HORIZON_WORLD;
        case "INSTANT_GAME":
          return o("ads-app-platforms").MOBILE_STORE.INSTANT_GAME;
        case "ITUNES":
          return o("ads-app-platforms").MOBILE_STORE.ITUNES;
        case "ITUNES_IPAD":
          return o("ads-app-platforms").MOBILE_STORE.ITUNES_IPAD;
        case "OCULUS_APP_STORE":
          return o("ads-app-platforms").MOBILE_STORE.OCULUS_APP_STORE;
        case "WINDOWS_10_STORE":
          return o("ads-app-platforms").MOBILE_STORE.WINDOWS_10_STORE;
        case "XIAOMI":
          return o("ads-app-platforms").MOBILE_STORE.XIAOMI;
        default:
          return o("ads-app-platforms").MOBILE_STORE
            .ALL_APP_STORES_FOR_ANDROID_AND_IOS;
      }
    }
    function f(e) {
      switch (e) {
        case "APPLE_STORE":
          return "apple_store";
        case "GOOGLE_STORE":
          return "google_store";
        case "URL_INPUT":
          return "url_input";
        case "OWN_APPS":
        default:
          return "own_apps";
      }
    }
    function g(e, t, n, r, o, a, i) {
      var l = e != null ? e : a,
        s = t != null ? t : l,
        u = a != null && a !== "" ? a : l;
      return l == null ||
        l === "" ||
        s == null ||
        s === "" ||
        u == null ||
        u === ""
        ? null
        : {
            advertisable_app_events: [],
            app_id: l,
            are_app_events_unavailable: !1,
            has_unsupported_mmp_for_marketing_messages: !1,
            icon_url: n != null ? n : "",
            ios_skan_reporting_optout_campaigns: !1,
            is_aem_v2_eligible: !1,
            is_disabled: !1,
            is_eligible_for_value_optimization: !0,
            is_skadnetwork_eligible: !1,
            name: s,
            notice_message: null,
            search_source_store: f(o),
            store: _(r),
            tooltip_message: null,
            unique_id: u,
            url: i != null ? i : "",
            vo_eligible_app_events: [],
          };
    }
    function h(e) {
      return e.trim().toLowerCase();
    }
    function y(e, t) {
      var n = h(t);
      if (n === "") return !0;
      var r = e.getAuxiliaryData();
      return (
        h(e.getTitle()).includes(n) ||
        h(e.getSubtitle().toString()).includes(n) ||
        h(e.getUniqueID()).includes(n) ||
        h(r.url).includes(n)
      );
    }
    function C(e, t, n, r) {
      var a = g(e, n, t, null, "OWN_APPS", e, r);
      return a != null
        ? o("AdsCampaignAppSelectorSearchableEntry").createSearchableEntry(a)
        : null;
    }
    function b(e) {
      var t = e.getAuxiliaryData();
      return o("AdsCampaignAppSelectorSearchableEntry").createSearchableEntry(
        babelHelpers.extends({}, t, { name: v(t.name, t.app_id) }),
      );
    }
    function v(e, t) {
      return e === "" || t == null || t === "" ? e : e + " (" + t + ")";
    }
    var S = (function (e) {
      function t(t, n, o) {
        var a;
        return (
          (a = e.call(this) || this),
          (a.$MAIBAConversionAppSearchSource$p_2 = null),
          (a.$MAIBAConversionAppSearchSource$p_3 = null),
          (a.$MAIBAConversionAppSearchSource$p_7 = 0),
          (a.getBootstrappedEntries = function (e) {
            a.$MAIBAConversionAppSearchSource$p_7 += 1;
            var t = a.$MAIBAConversionAppSearchSource$p_7;
            return (
              a.$MAIBAConversionAppSearchSource$p_5.reset(),
              a
                .$MAIBAConversionAppSearchSource$p_9()
                .then(function (n) {
                  t === a.$MAIBAConversionAppSearchSource$p_7 && e(n);
                })
                .catch(function () {
                  t === a.$MAIBAConversionAppSearchSource$p_7 && e([]);
                })
            );
          }),
          (a.$MAIBAConversionAppSearchSource$p_6 = t),
          (a.$MAIBAConversionAppSearchSource$p_1 = n),
          (a.$MAIBAConversionAppSearchSource$p_4 = o),
          (a.$MAIBAConversionAppSearchSource$p_5 = r("debounce")(function (
            e,
            t,
            n,
          ) {
            a.$MAIBAConversionAppSearchSource$p_8(e, t, n);
          }, d)),
          a
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var a = t.prototype;
      return (
        (a.searchImpl = function (t, n) {
          this.$MAIBAConversionAppSearchSource$p_7 += 1;
          var e = this.$MAIBAConversionAppSearchSource$p_7;
          if (t.trim() === "") {
            (this.$MAIBAConversionAppSearchSource$p_5.reset(),
              this.$MAIBAConversionAppSearchSource$p_8(t, n, e));
            return;
          }
          this.$MAIBAConversionAppSearchSource$p_5(t, n, e);
        }),
        (a.getEntryByAppID = function (t) {
          return this.$MAIBAConversionAppSearchSource$p_9().then(function (e) {
            var n;
            return (n = e.find(function (e) {
              return e.getAuxiliaryData().app_id === t;
            })) != null
              ? n
              : null;
          });
        }),
        (a.$MAIBAConversionAppSearchSource$p_8 = function (t, n, r) {
          var e = this;
          this.$MAIBAConversionAppSearchSource$p_9()
            .then(function (a) {
              r === e.$MAIBAConversionAppSearchSource$p_7 &&
                n(
                  a.filter(function (e) {
                    return y(e, t);
                  }),
                  t,
                  o("SearchSourceQueryStatus").COMPLETE,
                );
            })
            .catch(function () {
              r === e.$MAIBAConversionAppSearchSource$p_7 &&
                n([], t, o("SearchSourceQueryStatus").COMPLETE);
            });
        }),
        (a.$MAIBAConversionAppSearchSource$p_9 = function () {
          var e = this;
          if (this.$MAIBAConversionAppSearchSource$p_2 != null)
            return (s || (s = n("Promise"))).resolve(
              this.$MAIBAConversionAppSearchSource$p_2,
            );
          if (this.$MAIBAConversionAppSearchSource$p_3 != null)
            return this.$MAIBAConversionAppSearchSource$p_3;
          var t = o("RelayHooks")
            .fetchQuery(this.$MAIBAConversionAppSearchSource$p_6, p, {
              adAccountID: this.$MAIBAConversionAppSearchSource$p_1,
              country: this.$MAIBAConversionAppSearchSource$p_4,
              query: "",
            })
            .toPromise()
            .then(function (e) {
              var t,
                n,
                r =
                  (t =
                    e == null || (n = e.lwi) == null
                      ? void 0
                      : n.app_store_applications) != null
                    ? t
                    : [];
              return r
                .map(function (e) {
                  var t = g(
                    e.app_id,
                    e.name,
                    e.icon_url,
                    e.digital_content_store,
                    e.search_source_store,
                    e.unique_id,
                    e.url,
                  );
                  return t != null
                    ? o(
                        "AdsCampaignAppSelectorSearchableEntry",
                      ).createSearchableEntry(t)
                    : null;
                })
                .filter(Boolean);
            });
          return (
            (this.$MAIBAConversionAppSearchSource$p_3 = t
              .then(function (t) {
                return (
                  (e.$MAIBAConversionAppSearchSource$p_2 = t),
                  (e.$MAIBAConversionAppSearchSource$p_3 = null),
                  t
                );
              })
              .catch(function (t) {
                throw ((e.$MAIBAConversionAppSearchSource$p_3 = null), t);
              })),
            this.$MAIBAConversionAppSearchSource$p_3
          );
        }),
        t
      );
    })(r("AbstractSearchSource"));
    function R(e, t) {
      var n = o("RelayHooks").useRelayEnvironment();
      return c(
        function () {
          return e != null && e !== "" ? new S(n, e, t) : m;
        },
        [e, t, n],
      );
    }
    ((l.makeMAIBAConversionAppSearchableEntry = C),
      (l.makeMAIBAConversionSelectedAppSearchableEntry = b),
      (l.MAIBAConversionAppSearchSource = S),
      (l.useMAIBAConversionAppSearchSource = R));
  },
  98,
);
