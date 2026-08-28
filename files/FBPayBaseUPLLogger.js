__d(
  "FBPayBaseUPLLogger",
  ["FBPayUPLSessionIDGenerator"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e, t, n, r, a, i, l, s, u, c, d) {
        ((this.$6 =
          a != null ? a : o("FBPayUPLSessionIDGenerator").sessionIDGenerator()),
          (this.$4 = n != null ? n : "ecp"),
          (this.$5 = r != null ? r : "comet"),
          (this.$3 = t != null ? t : ""),
          (this.$2 =
            e != null
              ? e
              : { client_suppression_policy: [], logging_policy_product: "" }),
          (this.$7 = i != null ? i : null),
          (this.$9 = new Map()),
          (this.$8 = l),
          (this.$1 = s != null ? s : null),
          (this.$10 = u != null ? u : void 0),
          (this.$11 = d != null ? d : void 0),
          (this.$12 = c != null ? c : void 0));
      }
      var t = e.prototype;
      return (
        (t.setPlatformAndProductType = function (t, n) {
          return ((this.$5 = n), (this.$4 = t), this);
        }),
        (t.getSessionID = function () {
          return this.$6;
        }),
        (t.getPlatformID = function () {
          return this.$3;
        }),
        (t.__createBasicPayload = function () {
          return {
            actual_event_time: Date.now().toString(),
            platform: this.$5,
            product_type: this.$4,
            session_id: this.$6,
          };
        }),
        (t.__createECPCommonPayload = function () {
          return { logging_policy: this.$2, product_id: this.$3 };
        }),
        (t.__createECPDonationCommonPayload = function () {
          return { product_id: this.$3 };
        }),
        (t.__getLoggingPolicy = function () {
          return this.$2;
        }),
        (t.__getProductID = function () {
          return this.$3;
        }),
        (t.__createECPCommonExtraData = function (t) {
          var e;
          t === void 0 && (t = !1);
          var n = {};
          if ((e = this.$7) != null && e.is_one_time_checkout) {
            var r;
            n.is_one_time_checkout = "true";
            var o = (r = this.$7) == null ? void 0 : r.one_time_checkout_type;
            o != null && (n.one_time_checkout_type = o);
          }
          return (
            this.$8 === !0 && (n.is_subscription_enabled = "true"),
            this.$1 != null && (n.is_desktop = this.$1.toString()),
            t && (n.is_reload = "true"),
            this.$10 != null && (n.product_extra_logging_data = this.$10),
            this.$11 != null && (n.purchase_flow_type = this.$11),
            this.$12 != null && (n.tier_id = this.$12),
            n
          );
        }),
        (t.__createSubmitPaymentContainerExtraData = function () {
          var e = this.__createECPCommonExtraData();
          return babelHelpers.extends({}, e);
        }),
        (t.__getOrSetIsReload = function (t, n, r) {
          r === void 0 && (r = "");
          var e = n + "." + r,
            o = this.$9.get(e);
          if ((o == null ? void 0 : o.isInitialLoadSuccess) == null) {
            var a;
            return (
              this.$9.set(e, {
                isInitialLoadSuccess: t,
                isInitLogged:
                  (a = o == null ? void 0 : o.isInitLogged) != null ? a : !1,
                isLatestLoadSuccess: t,
              }),
              !1
            );
          } else
            return (
              this.$9.set(
                e,
                babelHelpers.extends({}, o, { isLatestLoadSuccess: t }),
              ),
              !0
            );
        }),
        (t.__getOrSetIsInitLogged = function (t, n) {
          n === void 0 && (n = "");
          var e = t + "." + n,
            r = this.$9.get(e);
          return r
            ? r.isInitLogged
            : (this.$9.set(e, {
                isInitialLoadSuccess: null,
                isInitLogged: !0,
                isLatestLoadSuccess: null,
              }),
              !1);
        }),
        (t.setOneTimeCheckoutStatus = function (t, n) {
          this.$7 = { is_one_time_checkout: t, one_time_checkout_type: n };
        }),
        (t.getOneTimeCheckoutStatus = function () {
          return this.$7;
        }),
        (t.getIsSubscriptionEnabled = function () {
          return this.$8;
        }),
        (t.getPlatform = function () {
          return this.$5;
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
