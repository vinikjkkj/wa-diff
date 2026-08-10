__d(
  "WAWebSmbMarkAsXOrderAction",
  [
    "WASmaxInBizSettingsEnums",
    "WATimeUtils",
    "WAWebCTWADataSharingModel",
    "WAWebCTWAGatingUtils",
    "WAWebChatThreadLogging",
    "WAWebCommonCTWADataSharing",
    "WAWebConversionTupleCollection",
    "WAWebConversionTupleModel",
    "WAWebCtwaOrderSignalWamEvent",
    "WAWebOrderStatus",
    "WAWebPerCustomerDataSharingUtils",
    "WAWebWamEnumOrderSignalType",
    "WAWebWamEnumOrderStatus",
  ],
  function (t, n, r, o, a, i, l) {
    var e = function (t) {
        switch (t) {
          case o("WAWebOrderStatus").OrderStatus.Processing:
          case o("WAWebOrderStatus").OrderStatus.PreparingToShip:
            return o("WAWebWamEnumOrderStatus").ORDER_STATUS.PROCESSING;
          case o("WAWebOrderStatus").OrderStatus.Shipped:
            return o("WAWebWamEnumOrderStatus").ORDER_STATUS.SHIPPED;
          case o("WAWebOrderStatus").OrderStatus.Complete:
          case o("WAWebOrderStatus").OrderStatus.Delivered:
            return o("WAWebWamEnumOrderStatus").ORDER_STATUS.COMPLETED;
          case o("WAWebOrderStatus").OrderStatus.Canceled:
            return o("WAWebWamEnumOrderStatus").ORDER_STATUS.CANCELLED;
          case o("WAWebOrderStatus").OrderStatus.Pending:
          case o("WAWebOrderStatus").OrderStatus.PartiallyShipped:
          case o("WAWebOrderStatus").OrderStatus.PaymentRequested:
          case o("WAWebOrderStatus").OrderStatus.Confirmed:
          case o("WAWebOrderStatus").OrderStatus.Delayed:
          case o("WAWebOrderStatus").OrderStatus.Failed:
          case o("WAWebOrderStatus").OrderStatus.OutForDelivery:
          case o("WAWebOrderStatus").OrderStatus.Refunded:
            return null;
        }
      },
      s = function (t) {
        var e = o("WAWebCTWADataSharingModel").CTWADataSharingModel.getValue();
        return e === o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.true
          ? babelHelpers.extends(
              { globalSharingSettingEnabled: !0 },
              o(
                "WAWebCTWAGatingUtils",
              ).isPerCustomerDataSharingControlsEnabled()
                ? null
                : { eventSharingSettingEnabled: t },
            )
          : e === o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.false
            ? { globalSharingSettingEnabled: !1 }
            : null;
      };
    function u(t) {
      var n,
        a = t.chat,
        i = t.isPaid,
        l = t.optOutValue,
        u = t.orderStatus,
        c = e(u);
      if (c != null) {
        var d = o("WAWebCommonCTWADataSharing").getCTWAEligibilityFromChat(a);
        if (
          !(
            d == null ||
            !o("WAWebCTWAGatingUtils").smbDataSharingConsentEnabled()
          ) &&
          !o("WAWebCTWAGatingUtils").isCtwa3pdAggregatedConversionEnabled()
        ) {
          var m = r("WAWebConversionTupleCollection").get(a.id);
          if (
            !(
              m != null &&
              o("WATimeUtils").unixTime() - m.timestamp >
                o("WAWebConversionTupleModel").ConversionTupleExpiry &&
              o(
                "WAWebCTWAGatingUtils",
              ).isCtwaConversionCreationFromDelayEnabled()
            )
          ) {
            var p = (n = a.accountLid) == null ? void 0 : n.toString();
            o("WAWebChatThreadLogging")
              .getChatThreadIDHMAC(a.id.toString())
              .then(function (e) {
                var t = {
                  ctwaOrderSignalVersion: 1,
                  deepLinkConversionSource: d.source,
                  orderPaid: i,
                  orderSignalType: o("WAWebWamEnumOrderSignalType")
                    .ORDER_SIGNAL_TYPE.UPDATED,
                  orderStatus: c,
                  customerAdsSharingSettingEnabled: o(
                    "WAWebPerCustomerDataSharingUtils",
                  ).getCustomerAdsDataSharingState(p),
                  threadIdHmac: e != null ? e : void 0,
                };
                new (o("WAWebCtwaOrderSignalWamEvent").CtwaOrderSignalWamEvent)(
                  babelHelpers.extends({}, t, s(l)),
                ).commit();
              });
          }
        }
      }
    }
    function c(e, t) {
      var n,
        a = o("WAWebCommonCTWADataSharing").getCTWAEligibilityFromChat(e);
      if (
        !(
          a == null || !o("WAWebCTWAGatingUtils").smbDataSharingConsentEnabled()
        ) &&
        !o("WAWebCTWAGatingUtils").isCtwa3pdAggregatedConversionEnabled()
      ) {
        var i = r("WAWebConversionTupleCollection").get(e.id);
        if (
          !(
            i != null &&
            o("WATimeUtils").unixTime() - i.timestamp >
              o("WAWebConversionTupleModel").ConversionTupleExpiry &&
            o("WAWebCTWAGatingUtils").isCtwaConversionCreationFromDelayEnabled()
          )
        ) {
          var l = (n = e.accountLid) == null ? void 0 : n.toString();
          o("WAWebChatThreadLogging")
            .getChatThreadIDHMAC(e.id.toString())
            .then(function (e) {
              var n = {
                ctwaOrderSignalVersion: 1,
                deepLinkConversionSource: a.source,
                orderPaid: !1,
                orderSignalType: o("WAWebWamEnumOrderSignalType")
                  .ORDER_SIGNAL_TYPE.CREATED,
                orderStatus: o("WAWebWamEnumOrderStatus").ORDER_STATUS
                  .PROCESSING,
                customerAdsSharingSettingEnabled: o(
                  "WAWebPerCustomerDataSharingUtils",
                ).getCustomerAdsDataSharingState(l),
                threadIdHmac: e != null ? e : void 0,
              };
              new (o("WAWebCtwaOrderSignalWamEvent").CtwaOrderSignalWamEvent)(
                babelHelpers.extends({}, n, s(t)),
              ).commit();
            });
        }
      }
    }
    ((l.markOrderAsUpdatedStatusAction = u), (l.markOrderAsCreatedAction = c));
  },
  98,
);
