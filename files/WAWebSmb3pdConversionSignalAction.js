__d(
  "WAWebSmb3pdConversionSignalAction",
  [
    "WALogger",
    "WASmaxInBizSettingsEnums",
    "WATimeUtils",
    "WAWebBizGatingUtils",
    "WAWebCTWAConstants",
    "WAWebCTWADataSharingModel",
    "WAWebChatModel",
    "WAWebCommonCTWADataSharing",
    "WAWebCtwa3pdConversionWamEvent",
    "WAWebCtwaConversationDepthUtils",
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
        var t = n.chat,
          i = n.orderStatus,
          l = n.paidData,
          u = n.subType,
          c = n.surface,
          d = n.type,
          m = r("WAWebCommonCTWADataSharing").getCTWAEligibilityFromChat(t),
          p = r("WAWebCommonCTWADataSharing").getCTWASignalsValueFromChat(t);
        if (
          m != null &&
          o("WAWebCTWADataSharingModel").CTWADataSharingModel.getValue() ===
            o("WASmaxInBizSettingsEnums").ENUM_FALSE_NOTSET_TRUE.true
        ) {
          var _ = u == null ? s(i != null ? i : null, d) : u,
            f = JSON.stringify(l),
            g = o("WAWebCtwaConversationDepthUtils").getCtwaConversationDepth(
              t,
            ),
            h = {
              ctwa3pdSchemaVersion: 2,
              ctwa3pdSurfaceType: c,
              ctwa3pdConversionType: d,
              ctwa3pdConversionSubtype: _,
              ctwa3pdConversionMetadata: f,
              ctwaConversationDepth: g,
              ctwaSignals: p != null ? p : void 0,
            };
          if (
            (m.data != null && (h.ctwaTrackingPayload = m.data),
            o("WAWebBizGatingUtils").isDownload3PDSignalsEnabled())
          ) {
            var y;
            o("WAWebDownloads3PDSignalsDatabaseApi")
              .addOrEdit3PDSignal({
                clickId: (y = h.ctwaTrackingPayload) != null ? y : "",
                ctwa3pdConversionType: d,
                ctwa3pdConversionSubtype: _,
                ctwa3pdConversionMetadata: f,
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
          var C = o(
            "WAWebBizGatingUtils",
          ).isPerCustomerDataSharingControlsEnabled()
            ? t.accountLid == null ||
              !o(
                "WAWebDataSharing3pdLidCollection",
              ).DataSharing3pdLidCollection.isDataSharingEnabled(
                t.accountLid.toString(),
              )
            : !a;
          C ||
            new (o("WAWebCtwa3pdConversionWamEvent").Ctwa3pdConversionWamEvent)(
              h,
            ).commit();
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
                o("WAWebBizGatingUtils").is3pdImportantLabelSignalsEnabled()
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
      },
      d = function (t, n) {
        var e = t.chat,
          r = t.isPaidStateChanged,
          a = t.orderStatus,
          i = t.paidData,
          l = t.type;
        if (o("WAWebBizGatingUtils").smbDataSharingConsentEnabled()) {
          var s = {
            surface: "order",
            chat: e,
            type: l,
            orderStatus: a,
            paidData: i,
          };
          (r === !0 && (s.subType = "paid_change"), u(s, n));
        }
      },
      m = function (t, n, r) {
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
      },
      _ = function (t, n, r, a) {
        if (t.length !== 0) {
          var e = t.reduce(function (e, t) {
            return (t instanceof o("WAWebChatModel").Chat && e.push(t), e);
          }, []);
          (n != null &&
            n.length > 0 &&
            e.length > 0 &&
            o("WAWebBizGatingUtils").isSMBLabelsDataSharingEnabledForChats() &&
            m(e, n, r),
            a != null &&
              a.length > 0 &&
              e.length > 0 &&
              o(
                "WAWebBizGatingUtils",
              ).isSMBLabelsDataSharingEnabledForChats() &&
              p(e, a, r));
        }
      };
    ((l.log3pdConversionSignalForOrders = d),
      (l.log3pdConversionSignalForChats = _));
  },
  98,
);
