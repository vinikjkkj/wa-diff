__d(
  "AdsPageInstagramAccountStore_RELAY",
  [
    "AdsLoadStateUtils_LEGACY",
    "AdsManagerBasePageSpecUtils",
    "AdsManagerRelayEnvironment",
    "AdsPageInstagramAccountStoreSource",
    "AdsPageInstagramAccountStoreSourceServerQuery.graphql",
    "AdsUEditorAdgroupSetBackedThreadsAccountAction",
    "ReverseInteropStoreBase",
    "adsCreateStoreThunkSelector",
    "asyncToGeneratorRuntime",
    "createAndUsePBTA",
    "isTruthy",
    "memoize",
    "relay-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "AdsPageInstagramAccountStore.DATA_UPDATED",
      s = {
        id: null,
        id_v2: null,
        has_profile_pic: null,
        legacy_instagram_user_id: null,
        is_authorized_for_political: null,
        is_professional_account: null,
        is_private: null,
        is_business: !0,
        is_published: null,
        profile_picture_url: null,
        user_id: null,
        username: null,
        is_shopping_onsite_checkout_enabled: null,
        shopping_review_status: null,
        date_joined: null,
        eimu_id: null,
        has_create_ads_access: null,
        threads_user_id: null,
        threads_user_profile_pic: null,
        mini_shop_storefront: null,
      },
      u = {
        id: null,
        id_v2: null,
        has_profile_pic: null,
        legacy_instagram_user_id: null,
        is_authorized_for_political: null,
        is_professional_account: null,
        is_private: null,
        is_business: !0,
        is_published: null,
        profile_picture_url: null,
        user_id: null,
        username: null,
        is_shopping_onsite_checkout_enabled: null,
        shopping_review_status: null,
        eimu_id: null,
        has_create_ads_access: null,
      },
      c = {
        id: null,
        instagram_accounts: { data: [s] },
        loadState: "LOADED",
        page_backed_instagram_accounts: { data: [u] },
        page_backed_threads_accounts: {
          data: { threads_user_id: null, threads_user_profile_pic: null },
        },
      },
      d = (function (t) {
        function a() {
          var n,
            a = new (r("AdsPageInstagramAccountStoreSource"))();
          return (
            (n =
              t.call(this, a, e, {
                batchSize: o("AdsManagerBasePageSpecUtils")
                  .PAGES_QUERY_BIG_BATCH_SIZE,
              }) || this),
            (n.fluxGetSelector = r("memoize")(function () {
              return r("adsCreateStoreThunkSelector")(m, function (e) {
                return m.get(e);
              });
            })),
            (n.fluxGetAllSelector = r("memoize")(function () {
              return r("adsCreateStoreThunkSelector")(m, function (e) {
                return m.getAll(e);
              });
            })),
            n
          );
        }
        babelHelpers.inheritsLoose(a, t);
        var l = a.prototype;
        return (
          (l.get = function (t) {
            var e = this.getSingleValue(t, c);
            return o("AdsLoadStateUtils_LEGACY").fromLoadObject(e);
          }),
          (l.getAsync = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = this.getSingleValue(e, c);
                if (t.isDone() && t.hasValueWithoutError()) {
                  var n = t.getValueEnforcing();
                  if (n != null) return n;
                }
                var a = { ids: [e], skip_ibta: !1 };
                yield o("relay-runtime")
                  .fetchQuery(
                    r("AdsManagerRelayEnvironment"),
                    r("AdsPageInstagramAccountStoreSourceServerQuery.graphql"),
                    a,
                  )
                  .toPromise();
                var i = this.getSingleValue(e, c);
                if (i.isDone() && i.hasValueWithoutError()) {
                  var l = i.getValueEnforcing();
                  if (l != null) return l;
                }
                return null;
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (l.getAll = function (t) {
            var e = this.getAllImpl(t),
              n = new Map();
            return (
              e.forEach(function (e, t) {
                n.set(t, o("AdsLoadStateUtils_LEGACY").fromLoadObject(e));
              }),
              n
            );
          }),
          (l.createAndUsePBTAActionDispatch = function (t, n, a) {
            var e = this.getSingleValue(t, c);
            if (
              !(!e.isDone() || e.isUpdating()) &&
              e.isDone() &&
              e.hasValueWithoutError()
            ) {
              var l,
                s =
                  (l = e.getValue()) == null ||
                  (l = l.page_backed_threads_accounts) == null
                    ? void 0
                    : l.data.threads_user_id;
              if (r("isTruthy")(s)) {
                r("AdsUEditorAdgroupSetBackedThreadsAccountAction").dispatch(
                  {
                    hostID: n,
                    threadsUserID: s,
                    adgroupIDs: a,
                    instagramAccountV2ID: "",
                  },
                  {
                    line: "205",
                    module: "AdsPageInstagramAccountStore_RELAY.js",
                    moduleID: i.id,
                  },
                );
                return;
              }
              (this.setCachedValue(t, e.updating(), c),
                o("createAndUsePBTA").createAndUsePBTA(t, n, a));
            }
          }),
          a
        );
      })(r("ReverseInteropStoreBase"));
    d.__moduleID = i.id;
    var m = new d(),
      p = m;
    l.default = p;
  },
  98,
);
