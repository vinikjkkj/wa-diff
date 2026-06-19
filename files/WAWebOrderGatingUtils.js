__d(
  "WAWebOrderGatingUtils",
  ["$InternalEnum", "WALogger", "WAWebABProps", "WAWebPaymentsGatingUtils"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = n("$InternalEnum")({
        DIGITAL_GOODS: "digital-goods",
        PHYSICAL_GOODS: "physical-goods",
        ANY: "any",
        NONE: "none",
      });
    function u(t) {
      t === void 0 && (t = s.NONE);
      try {
        var n = JSON.parse(
            o("WAWebABProps").getABPropConfigValue("order_details_quick_pay"),
          ),
          r = n.allowed_product_type;
        if (r && r !== s.NONE) return r === s.ANY || r === t;
      } catch (t) {
        o("WALogger").WARN(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[isOrderDetailsQuickPayEnabled] config parse failed ",
              "",
            ])),
          t,
        );
      }
      return !1;
    }
    function c() {
      return o("WAWebABProps").getABPropConfigValue(
        "order_details_custom_item_enabled",
      );
    }
    function d() {
      return o("WAWebABProps").getABPropConfigValue(
        "order_details_from_catalog_enabled",
      );
    }
    function m() {
      return o("WAWebABProps").getABPropConfigValue(
        "order_details_from_cart_enabled",
      );
    }
    function p() {
      return o("WAWebABProps").getABPropConfigValue(
        "order_details_total_order_minimum_value",
      );
    }
    function _(e) {
      return o("WAWebPaymentsGatingUtils").isBrazilToBrazilOrder(e)
        ? 5e3
        : o("WAWebABProps").getABPropConfigValue(
            "order_details_total_maximum_value",
          );
    }
    function f() {
      return o("WAWebABProps").getABPropConfigValue("order_management_enabled");
    }
    function g() {
      return o("WAWebABProps").getABPropConfigValue(
        "order_messages_ephemeral_exception_enabled",
      );
    }
    function h() {
      return o("WAWebABProps").getABPropConfigValue(
        "row_buyer_order_revamp_m0_enabled",
      );
    }
    function y() {
      return o("WAWebABProps").getABPropConfigValue(
        "seller_orders_management_revamp",
      );
    }
    function C() {
      return (
        h() &&
        o("WAWebABProps").getABPropConfigValue(
          "buyer_initiated_order_request_variant_enabled",
        )
      );
    }
    function b() {
      return o("WAWebABProps").getABPropConfigValue(
        "order_statuses_revamp_m1_enabled",
      );
    }
    function v() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "payments_br_content_optimization_variant",
        ) !== 0
      );
    }
    function S() {
      return o("WAWebABProps").getABPropConfigValue(
        "utility_order_view_mbs_enabled",
      );
    }
    ((l.QuickPayProductTypeGating = s),
      (l.isOrderDetailsQuickPayEnabled = u),
      (l.orderDetailsCustomItemEnabled = c),
      (l.orderDetailsFromCatalogEnabled = d),
      (l.orderDetailsFromCartEnabled = m),
      (l.orderDetailsTotalOrderMinimumValue = p),
      (l.orderDetailsTotalMaxValue = _),
      (l.orderManagementEnabled = f),
      (l.inOrderMessagesEphemeralExceptionEnabled = g),
      (l.isBuyerOrderRevampEnabled = h),
      (l.isSellerOrderRevampEnabled = y),
      (l.isBuyerOrderRequestVariantEnabled = C),
      (l.isOrderStatusM1Enabled = b),
      (l.isOrderContentOptimizationEnabled = v),
      (l.isInboxOrderHistoryEnabled = S));
  },
  98,
);
