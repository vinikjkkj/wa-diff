__d(
  "AdsAdAccountSettingsStore",
  [
    "AdsAdAccountSettingsStoreSetAPlusCFeatureStickyStatusMutation.graphql",
    "AdsAdAccountSettingsStoreSource",
    "AdsManagerRelayEnvironment",
    "RelayModern",
    "ReverseInteropStoreBase",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = { aplusc_sticky_config: null },
      u = "AdsAdAccountSettingsStore.DATA_UPDATED.",
      c =
        e !== void 0
          ? e
          : (e = n(
              "AdsAdAccountSettingsStoreSetAPlusCFeatureStickyStatusMutation.graphql",
            )),
      d = (function (e) {
        function t() {
          var t = new (r("AdsAdAccountSettingsStoreSource"))();
          return e.call(this, t, u) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.updateFeatureStickyStatus = function (t, n, a) {
            var e = this;
            r("justknobx")._("4395") &&
              o("RelayModern").commitMutation(r("AdsManagerRelayEnvironment"), {
                mutation: c,
                variables: {
                  input: { ad_account: t, feature_name: n, status: a },
                },
                onCompleted: function () {
                  e.refetchKeys([t]);
                },
              });
          }),
          (n.get = function (t) {
            return this.getSingleValue(t, s);
          }),
          t
        );
      })(r("ReverseInteropStoreBase"));
    d.__moduleID = i.id;
    var m = new d(),
      p = m;
    l.default = p;
  },
  98,
);
