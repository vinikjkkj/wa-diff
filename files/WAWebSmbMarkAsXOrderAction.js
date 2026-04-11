__d(
  "WAWebSmbMarkAsXOrderAction",
  [
    "WASmaxInBizSettingsEnums",
    "WAWebBizGatingUtils",
    "WAWebCTWADataSharingModel",
    "WAWebChatThreadLogging",
    "WAWebCommonCTWADataSharing",
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
      s = function (t, n) {
        var e = o("WAWebCTWADataSharingModel").CTWADataSharingModel.getValue(),
          r;
        if (e === o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.true) {
          var a = o(
            "WAWebBizGatingUtils",
          ).isPerCustomerDataSharingControlsEnabled()
            ? o("WAWebPerCustomerDataSharingUtils").getCurrentDataSharingState(
                n,
              )
            : t;
          r = {
            globalSharingSettingEnabled: !0,
            eventSharingSettingEnabled: a,
          };
        } else
          e === o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.false
            ? (r = { globalSharingSettingEnabled: !1 })
            : (r = null);
        return r;
      },
      u = function (n, a, i, l) {
        var t,
          u = e(i);
        if (u != null) {
          var c = r("WAWebCommonCTWADataSharing").getCTWAEligibilityFromChat(n);
          if (
            !(
              c == null ||
              !o("WAWebBizGatingUtils").smbDataSharingConsentEnabled()
            )
          ) {
            var d = (t = n.accountLid) == null ? void 0 : t.toString();
            o("WAWebChatThreadLogging")
              .getChatThreadIDHMAC(n.id.toString())
              .then(function (e) {
                var t = {
                  ctwaOrderSignalVersion: 1,
                  deepLinkConversionSource: c.source,
                  orderPaid: l,
                  orderSignalType: o("WAWebWamEnumOrderSignalType")
                    .ORDER_SIGNAL_TYPE.UPDATED,
                  orderStatus: u,
                  customerAdsSharingSettingEnabled: o(
                    "WAWebPerCustomerDataSharingUtils",
                  ).getCustomerAdsDataSharingState(d),
                  threadIdHmac: e != null ? e : void 0,
                };
                new (o("WAWebCtwaOrderSignalWamEvent").CtwaOrderSignalWamEvent)(
                  babelHelpers.extends({}, t, s(a, d)),
                ).commit();
              });
          }
        }
      },
      c = function (t, n) {
        var e,
          a = r("WAWebCommonCTWADataSharing").getCTWAEligibilityFromChat(t);
        if (
          !(
            a == null ||
            !o("WAWebBizGatingUtils").smbDataSharingConsentEnabled()
          )
        ) {
          var i = (e = t.accountLid) == null ? void 0 : e.toString();
          o("WAWebChatThreadLogging")
            .getChatThreadIDHMAC(t.id.toString())
            .then(function (e) {
              var t = {
                ctwaOrderSignalVersion: 1,
                deepLinkConversionSource: a.source,
                orderPaid: !1,
                orderSignalType: o("WAWebWamEnumOrderSignalType")
                  .ORDER_SIGNAL_TYPE.CREATED,
                orderStatus: o("WAWebWamEnumOrderStatus").ORDER_STATUS
                  .PROCESSING,
                customerAdsSharingSettingEnabled: o(
                  "WAWebPerCustomerDataSharingUtils",
                ).getCustomerAdsDataSharingState(i),
                threadIdHmac: e != null ? e : void 0,
              };
              new (o("WAWebCtwaOrderSignalWamEvent").CtwaOrderSignalWamEvent)(
                babelHelpers.extends({}, t, s(n, i)),
              ).commit();
            });
        }
      };
    ((l.markOrderAsUpdatedStatusAction = u), (l.markOrderAsCreatedAction = c));
  },
  98,
);
