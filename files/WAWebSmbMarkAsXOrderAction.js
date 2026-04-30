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
      s = function (t) {
        var e = o("WAWebCTWADataSharingModel").CTWADataSharingModel.getValue();
        return e === o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.true
          ? babelHelpers.extends(
              { globalSharingSettingEnabled: !0 },
              o("WAWebBizGatingUtils").isPerCustomerDataSharingControlsEnabled()
                ? null
                : { eventSharingSettingEnabled: t },
            )
          : e === o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.false
            ? { globalSharingSettingEnabled: !1 }
            : null;
      };
    function u(t, n, a, i) {
      var l,
        u = e(a);
      if (u != null) {
        var c = r("WAWebCommonCTWADataSharing").getCTWAEligibilityFromChat(t);
        if (
          !(
            c == null ||
            !o("WAWebBizGatingUtils").smbDataSharingConsentEnabled()
          )
        ) {
          var d = (l = t.accountLid) == null ? void 0 : l.toString();
          o("WAWebChatThreadLogging")
            .getChatThreadIDHMAC(t.id.toString())
            .then(function (e) {
              var t = {
                ctwaOrderSignalVersion: 1,
                deepLinkConversionSource: c.source,
                orderPaid: i,
                orderSignalType: o("WAWebWamEnumOrderSignalType")
                  .ORDER_SIGNAL_TYPE.UPDATED,
                orderStatus: u,
                customerAdsSharingSettingEnabled: o(
                  "WAWebPerCustomerDataSharingUtils",
                ).getCustomerAdsDataSharingState(d),
                threadIdHmac: e != null ? e : void 0,
              };
              new (o("WAWebCtwaOrderSignalWamEvent").CtwaOrderSignalWamEvent)(
                babelHelpers.extends({}, t, s(n)),
              ).commit();
            });
        }
      }
    }
    function c(e, t) {
      var n,
        a = r("WAWebCommonCTWADataSharing").getCTWAEligibilityFromChat(e);
      if (
        !(a == null || !o("WAWebBizGatingUtils").smbDataSharingConsentEnabled())
      ) {
        var i = (n = e.accountLid) == null ? void 0 : n.toString();
        o("WAWebChatThreadLogging")
          .getChatThreadIDHMAC(e.id.toString())
          .then(function (e) {
            var n = {
              ctwaOrderSignalVersion: 1,
              deepLinkConversionSource: a.source,
              orderPaid: !1,
              orderSignalType: o("WAWebWamEnumOrderSignalType")
                .ORDER_SIGNAL_TYPE.CREATED,
              orderStatus: o("WAWebWamEnumOrderStatus").ORDER_STATUS.PROCESSING,
              customerAdsSharingSettingEnabled: o(
                "WAWebPerCustomerDataSharingUtils",
              ).getCustomerAdsDataSharingState(i),
              threadIdHmac: e != null ? e : void 0,
            };
            new (o("WAWebCtwaOrderSignalWamEvent").CtwaOrderSignalWamEvent)(
              babelHelpers.extends({}, n, s(t)),
            ).commit();
          });
      }
    }
    ((l.markOrderAsUpdatedStatusAction = u), (l.markOrderAsCreatedAction = c));
  },
  98,
);
