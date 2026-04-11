__d(
  "WAWebQuotedMsgUtils",
  [
    "fbt",
    "WAWebBizOrderDetailsParams",
    "WAWebBrazilPixKeyFormattingUtils",
    "WAWebCurrencyUtils",
    "WAWebFormatMsgText",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebMsgCollection",
    "WAWebMsgType",
    "WAWebOrderDetailProductLabel",
    "WAWebOrderDetails",
    "WAWebProductCatalogCatalogConstants",
    "WAWebUserPrefsTypes",
    "WAWebVcardGetNameFromParsed",
    "fbs",
    "lodash",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["conversation", "starred", "msgInfo"],
      u = { EXPLICIT: 0, AUTO: 1 };
    function c(e) {
      switch (e.type) {
        case o("WAWebMsgType").MSG_TYPE.DOCUMENT:
          return e.isVcardOverMmsDocument
            ? m(e)
            : r("WAWebFormatMsgText")({ msg: e.unsafe() });
        case o("WAWebMsgType").MSG_TYPE.MULTI_VCARD:
          return d(e);
        case o("WAWebMsgType").MSG_TYPE.PRODUCT:
          return p(e);
        case o("WAWebMsgType").MSG_TYPE.NATIVE_FLOW:
        case o("WAWebMsgType").MSG_TYPE.INTERACTIVE:
          return e.nativeFlowName ===
            r("WAWebInteractiveMessagesNativeFlowName").ORDER_DETAILS ||
            e.nativeFlowName ===
              r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_INFO
            ? _(e)
            : r("WAWebFormatMsgText")({ msg: e.unsafe() });
        default:
          return r("WAWebFormatMsgText")({ msg: e.unsafe() });
      }
    }
    function d(e) {
      var t = e.vcardList.length;
      return t > 0
        ? s._(/*BTDS*/ '_j{"*":"{count} contacts","_1":"1 contact"}', [
            s._plural(t, "count"),
          ])
        : s._(/*BTDS*/ "No contacts");
    }
    function m(e) {
      var t;
      if (e.mediaData.parsedVcards) {
        var n = e.mediaData.parsedVcards;
        return n.length > 1
          ? s
              ._(/*BTDS*/ '_j{"*":"{count} contacts","_1":"1 contact"}', [
                s._plural(n.length, "count"),
              ])
              .toString()
          : o("WAWebVcardGetNameFromParsed").vcardGetNameFromParsed(n[0]) ||
              r("fbs")._(/*BTDS*/ "Contact").toString();
      } else if (e.pageCount != null)
        return s
          ._(/*BTDS*/ '_j{"*":"{count} contacts","_1":"1 contact"}', [
            s._plural(e.pageCount, "count"),
          ])
          .toString();
      return (
        ((t = e.mediaData) == null ? void 0 : t.filename) ||
        r("fbs")._(/*BTDS*/ "Document").toString()
      );
    }
    function p(e) {
      var t = e.currencyCode,
        n = e.description,
        a = e.priceAmount1000,
        i = e.salePriceAmount1000,
        l = e.title,
        s;
      if (t != null && a != null) {
        var u = function (n) {
          return o("WAWebCurrencyUtils").formatAmount1000(t, n);
        };
        s = i != null ? u(i) + " ~" + u(a) + "~" : u(a);
      } else
        n &&
          (s = r("lodash").truncate(n, {
            length: o("WAWebProductCatalogCatalogConstants")
              .MAX_REPLY_PRODUCT_DESC_LENGTH,
          }));
      return [
        r("lodash").truncate(l, {
          length: o("WAWebProductCatalogCatalogConstants")
            .MAX_REPLY_PRODUCT_TITLE_LENGTH,
        }),
        s,
      ]
        .filter(Boolean)
        .join("\n");
    }
    function _(e) {
      var t = o("WAWebOrderDetails").getOrderInfo(e);
      if (t == null) return "";
      var n = t.buttonName;
      if (n === "payment_info") {
        var r,
          a,
          i,
          l = s._(/*BTDS*/ "Pix"),
          u = t.paymentSettings,
          c =
            u == null || (r = u.at(0)) == null
              ? void 0
              : r[
                  o("WAWebBizOrderDetailsParams").PaymentSettingType
                    .PIX_STATIC_CODE
                ],
          d = (a = c == null ? void 0 : c.merchant_name) != null ? a : "",
          m = (i = c == null ? void 0 : c.key) != null ? i : "",
          p = o("WAWebUserPrefsTypes").PixKeyType.cast(
            c == null ? void 0 : c.key_type,
          );
        return (
          d +
          "\n" +
          l.toString() +
          ": " +
          o("WAWebBrazilPixKeyFormattingUtils").getFormattedPixKey(m, p)
        );
      }
      return t.items.length === 0
        ? o("WAWebCurrencyUtils").formatAmount(t.currency, t.totalAmount)
        : o("WAWebOrderDetailProductLabel").getOrderDetailProductLabel(
            t.items,
          ) +
            "\n" +
            s
              ._(
                /*BTDS*/ "Quantity {order_items_quantity} \u2022 {order_total_price}",
                [
                  s._param("order_items_quantity", t.quantity),
                  s._param(
                    "order_total_price",
                    o("WAWebCurrencyUtils").formatAmount(
                      t.currency,
                      t.totalAmount,
                    ),
                  ),
                ],
              )
              .toString();
    }
    function f(t) {
      return t != null && e.includes(t) ? 58 : 79;
    }
    function g(e) {
      return o("WAWebMsgCollection").MsgCollection.byThreadId([e]).length;
    }
    ((l.QuotedType = u),
      (l.formatQuotedMsg = c),
      (l.formatMultiVcardText = d),
      (l.formatVcardOverMmsText = m),
      (l.formatProductText = p),
      (l.getImageSize = f),
      (l.getMessagesCountByThreadId = g));
  },
  226,
);
