__d(
  "WAWebSmb3pdConversionSignalAction",
  [
    "WALogger",
    "WASmaxInBizSettingsEnums",
    "WATimeUtils",
    "WAWebCTWAConstants",
    "WAWebCTWADataSharingModel",
    "WAWebCTWAGatingUtils",
    "WAWebChatModel",
    "WAWebCommonCTWADataSharing",
    "WAWebConversionTupleCollection",
    "WAWebConversionTupleModel",
    "WAWebCtwa3pdConversionWamEvent",
    "WAWebDataSharing3pdLidCollection",
    "WAWebDownloads3PDSignalsDatabaseApi",
    "WAWebLabelCollection",
    "WAWebOrderStatus",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = function (t, n) {
        if (n === "order_created" || t == null) return "processing";
        switch (t) {
          case o("WAWebOrderStatus").OrderStatus.Shipped:
            return "shipped";
          case o("WAWebOrderStatus").OrderStatus.Complete:
          case o("WAWebOrderStatus").OrderStatus.Delivered:
            return "completed";
          case o("WAWebOrderStatus").OrderStatus.Canceled:
            return "canceled";
          case o("WAWebOrderStatus").OrderStatus.Processing:
          case o("WAWebOrderStatus").OrderStatus.Pending:
          case o("WAWebOrderStatus").OrderStatus.PartiallyShipped:
          case o("WAWebOrderStatus").OrderStatus.PreparingToShip:
          case o("WAWebOrderStatus").OrderStatus.PaymentRequested:
          case o("WAWebOrderStatus").OrderStatus.Confirmed:
          case o("WAWebOrderStatus").OrderStatus.Delayed:
          case o("WAWebOrderStatus").OrderStatus.Failed:
          case o("WAWebOrderStatus").OrderStatus.OutForDelivery:
          case o("WAWebOrderStatus").OrderStatus.Refunded:
            return "processing";
        }
      },
      u = function (n, a) {
        var t,
          i,
          l = n.chat,
          u = n.orderStatus,
          c = n.paidData,
          d = n.subType,
          m = n.surface,
          p = n.type,
          _ = o("WAWebCommonCTWADataSharing").getCTWAEligibilityFromChat(l),
          f = o("WAWebCommonCTWADataSharing").getCTWASignalsValueFromChat(l);
        if (
          _ != null &&
          !o("WAWebCTWAGatingUtils").isCtwa3pdAggregatedConversionEnabled()
        ) {
          var g = r("WAWebConversionTupleCollection").get(l.id);
          if (
            !(
              g != null &&
              o("WATimeUtils").unixTime() - g.timestamp >
                o("WAWebConversionTupleModel").ConversionTupleExpiry &&
              o(
                "WAWebCTWAGatingUtils",
              ).isCtwaConversionCreationFromDelayEnabled()
            ) &&
            o("WAWebCTWADataSharingModel").CTWADataSharingModel.getValue() ===
              o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.true
          ) {
            var h = d == null ? s(u != null ? u : null, p) : d,
              y = JSON.stringify(c),
              C =
                (t = g == null ? void 0 : g.conversationDepth) != null ? t : 0,
              b =
                (i = g == null ? void 0 : g.conversationRepeat) != null ? i : 0,
              v = o("WAWebCTWAGatingUtils").get3pdPostDcDepthLimit();
            if (!(v > 0 && C > v)) {
              var S = {
                ctwa3pdSchemaVersion: 2,
                ctwa3pdSurfaceType: m,
                ctwa3pdConversionType: p,
                ctwa3pdConversionSubtype: h,
                ctwa3pdConversionMetadata: y,
                ctwaConversationDepth: C,
                ctwaConversationRepeat: b,
                ctwaSignals: f != null ? f : void 0,
              };
              if (
                (_.data != null && (S.ctwaTrackingPayload = _.data),
                o("WAWebCTWAGatingUtils").isDownload3PDSignalsEnabled())
              ) {
                var R;
                o("WAWebDownloads3PDSignalsDatabaseApi")
                  .addOrEdit3PDSignal({
                    clickId: (R = S.ctwaTrackingPayload) != null ? R : "",
                    ctwa3pdConversionType: p,
                    ctwa3pdConversionSubtype: h,
                    ctwa3pdConversionMetadata: y,
                    timestamp: o("WATimeUtils").unixTimeMs(),
                  })
                  .catch(function (t) {
                    return (
                      o("WALogger").ERROR(
                        e ||
                          (e = babelHelpers.taggedTemplateLiteralLoose([
                            "addOrEdit3PDSignal: failed to add 3PD signal to the database",
                          ])),
                      ),
                      null
                    );
                  });
              }
              var L = o(
                "WAWebCTWAGatingUtils",
              ).isPerCustomerDataSharingControlsEnabled()
                ? l.accountLid == null ||
                  !o(
                    "WAWebDataSharing3pdLidCollection",
                  ).DataSharing3pdLidCollection.isDataSharingEnabled(
                    l.accountLid.toString(),
                  )
                : !a;
              L ||
                new (o(
                  "WAWebCtwa3pdConversionWamEvent",
                ).Ctwa3pdConversionWamEvent)(S).commit();
            }
          }
        }
      },
      c = function (t, n, r, a) {
        var e = o("WAWebLabelCollection").LabelCollection.get(t);
        if (e != null) {
          var i = e.predefinedId;
          if (
            i != null &&
            !(
              !o("WAWebCTWAConstants").ALLOWED_PREDEFINED_LABEL_IDS_SET.has(
                i,
              ) &&
              !(
                i === o("WAWebCTWAConstants").IMPORTANT_PREDEFINED_ID &&
                o("WAWebCTWAGatingUtils").is3pdImportantLabelSignalsEnabled()
              )
            )
          ) {
            var l;
            i === o("WAWebCTWAConstants").FOLLOW_UP_PREDEFINED_ID ||
            i === o("WAWebCTWAConstants").LEAD_PREDEFINED_ID ||
            i === o("WAWebCTWAConstants").IMPORTANT_PREDEFINED_ID
              ? (l = "lead_created")
              : i ===
                    o("WAWebCTWAConstants").ALLOWED_PREDEFINED_LABEL_IDS
                      .NEW_ORDER ||
                  i ===
                    o("WAWebCTWAConstants").ALLOWED_PREDEFINED_LABEL_IDS
                      .NEW_CUSTOMER
                ? (l = "order_created")
                : (l = "order_updated");
            var s,
              c = {};
            switch (i) {
              case o("WAWebCTWAConstants").ALLOWED_PREDEFINED_LABEL_IDS
                .NEW_CUSTOMER:
                ((s = "new_customer"), (c = { paid: !1 }));
                break;
              case o("WAWebCTWAConstants").ALLOWED_PREDEFINED_LABEL_IDS
                .ORDER_COMPLETE:
                ((s = "order_complete"), (c = { paid: !1 }));
                break;
              case o("WAWebCTWAConstants").ALLOWED_PREDEFINED_LABEL_IDS
                .NEW_ORDER:
                ((s = "new_order"), (c = { paid: !1 }));
                break;
              case o("WAWebCTWAConstants").ALLOWED_PREDEFINED_LABEL_IDS.PAID:
                ((s = "paid"), (c = { paid: !0 }));
                break;
              case o("WAWebCTWAConstants").ALLOWED_PREDEFINED_LABEL_IDS
                .PENDING_PAYMENT:
                ((s = "pending_payment"), (c = { paid: !1 }));
                break;
              case o("WAWebCTWAConstants").FOLLOW_UP_PREDEFINED_ID:
                s = "follow_up";
                break;
              case o("WAWebCTWAConstants").LEAD_PREDEFINED_ID:
                s = "lead";
                break;
              case o("WAWebCTWAConstants").IMPORTANT_PREDEFINED_ID:
                ((s = "important"), (c = { paid: !1 }));
                break;
            }
            u({ paidData: c, chat: n, surface: r, type: l, subType: s }, a);
          }
        }
      };
    function d(e, t) {
      var n = e.chat,
        r = e.isPaidStateChanged,
        a = e.orderStatus,
        i = e.paidData,
        l = e.type;
      if (o("WAWebCTWAGatingUtils").smbDataSharingConsentEnabled()) {
        var s = {
          surface: "order",
          chat: n,
          type: l,
          orderStatus: a,
          paidData: i,
        };
        (r === !0 && (s.subType = "paid_change"), u(s, t));
      }
    }
    var m = function (t, n, r) {
        var e = "label_chat";
        t.forEach(function (t) {
          n.forEach(function (n) {
            c(n, t, e, r);
          });
        });
      },
      p = function (t, n, r) {
        var e = "label_chat";
        t.forEach(function (t) {
          n.forEach(function (n) {
            var o = n.ctwa_3pd_conversion_subtype,
              a = n.ctwa_3pd_conversion_type;
            if (!(!a || !o)) {
              var i = JSON.parse(n.ctwa_3pd_conversion_metadata);
              u({ paidData: i, chat: t, surface: e, type: a, subType: o }, r);
            }
          });
        });
      };
    function _(e) {
      var t = e.customLabelsMappingEvents,
        n = e.isDataSharingEnabled,
        r = e.labelIds,
        a = e.models;
      if (a.length !== 0) {
        var i = a.reduce(function (e, t) {
          return (t instanceof o("WAWebChatModel").Chat && e.push(t), e);
        }, []);
        (r != null &&
          r.length > 0 &&
          i.length > 0 &&
          o("WAWebCTWAGatingUtils").isSMBLabelsDataSharingEnabledForChats() &&
          m(i, r, n),
          t != null &&
            t.length > 0 &&
            i.length > 0 &&
            o("WAWebCTWAGatingUtils").isSMBLabelsDataSharingEnabledForChats() &&
            p(i, t, n));
      }
    }
    ((l.log3pdConversionSignalForOrders = d),
      (l.log3pdConversionSignalForChats = _));
  },
  98,
);
