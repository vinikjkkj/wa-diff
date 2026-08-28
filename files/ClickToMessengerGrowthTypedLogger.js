__d(
  "ClickToMessengerGrowthTypedLogger",
  ["Banzai", "GeneratedLoggerUtils", "nullthrows"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
        function e() {
          this.$1 = {};
        }
        var t = e.prototype;
        return (
          (t.log = function (t) {
            n("GeneratedLoggerUtils").log(
              "logger:ClickToMessengerGrowthLoggerConfig",
              this.$1,
              n("Banzai").BASIC,
              t,
            );
          }),
          (t.logVital = function (t) {
            n("GeneratedLoggerUtils").log(
              "logger:ClickToMessengerGrowthLoggerConfig",
              this.$1,
              n("Banzai").VITAL,
              t,
            );
          }),
          (t.logImmediately = function (t) {
            n("GeneratedLoggerUtils").log(
              "logger:ClickToMessengerGrowthLoggerConfig",
              this.$1,
              { signal: !0 },
              t,
            );
          }),
          (t.clear = function () {
            return ((this.$1 = {}), this);
          }),
          (t.getData = function () {
            return babelHelpers.extends({}, this.$1);
          }),
          (t.updateData = function (t) {
            return ((this.$1 = babelHelpers.extends({}, this.$1, t)), this);
          }),
          (t.setAccountID = function (t) {
            return ((this.$1.account_id = t), this);
          }),
          (t.setAdID = function (t) {
            return ((this.$1.ad_id = t), this);
          }),
          (t.setAppID = function (t) {
            return ((this.$1.app_id = t), this);
          }),
          (t.setBoostedComponentPlatform = function (t) {
            return ((this.$1.boosted_component_platform = t), this);
          }),
          (t.setBoostedComponentProduct = function (t) {
            return ((this.$1.boosted_component_product = t), this);
          }),
          (t.setEvent = function (t) {
            return ((this.$1.event = t), this);
          }),
          (t.setException = function (t) {
            return ((this.$1.exception = t), this);
          }),
          (t.setMatchedRegexGroup = function (t) {
            return ((this.$1.matched_regex_group = t), this);
          }),
          (t.setMatchedRegexes = function (t) {
            return (
              (this.$1.matched_regexes = n(
                "GeneratedLoggerUtils",
              ).serializeVector(t)),
              this
            );
          }),
          (t.setObjective = function (t) {
            return ((this.$1.objective = t), this);
          }),
          (t.setPageID = function (t) {
            return ((this.$1.page_id = t), this);
          }),
          (t.setPostContent = function (t) {
            return ((this.$1.post_content = t), this);
          }),
          (t.setPostID = function (t) {
            return ((this.$1.post_id = t), this);
          }),
          (t.setProductType = function (t) {
            return ((this.$1.product_type = t), this);
          }),
          (t.setProducts = function (t) {
            return (
              (this.$1.products = n("GeneratedLoggerUtils").serializeVector(t)),
              this
            );
          }),
          (t.updateExtraData = function (t) {
            var e = n("nullthrows")(n("GeneratedLoggerUtils").serializeMap(t));
            return (
              n("GeneratedLoggerUtils").checkExtraDataFieldNames(e, l),
              (this.$1 = babelHelpers.extends({}, this.$1, e)),
              this
            );
          }),
          (t.addToExtraData = function (t, n) {
            var e = {};
            return ((e[t] = n), this.updateExtraData(e));
          }),
          e
        );
      })(),
      l = {
        account_id: !0,
        ad_id: !0,
        app_id: !0,
        boosted_component_platform: !0,
        boosted_component_product: !0,
        event: !0,
        exception: !0,
        matched_regex_group: !0,
        matched_regexes: !0,
        objective: !0,
        page_id: !0,
        post_content: !0,
        post_id: !0,
        product_type: !0,
        products: !0,
      };
    i.default = e;
  },
  66,
);
