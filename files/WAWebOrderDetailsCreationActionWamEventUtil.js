__d(
  "WAWebOrderDetailsCreationActionWamEventUtil",
  [
    "$InternalEnum",
    "WAWebChatEphemerality",
    "WAWebOrderDetailsActionCategory",
    "WAWebOrderDetailsActionsSmbWamEvent",
    "WAWebWamEnumOrderDetailsCreationAction",
  ],
  function (t, n, r, o, a, i, l) {
    var e = n("$InternalEnum").Mirrored(["ORDER"]);
    function s(t, n, r, a) {
      var i,
        l,
        s,
        u = 0,
        c = 0;
      return (
        n.forEach(function (e) {
          e.isCustomItem === !0 ? (u += e.quantity) : (c += e.quantity);
        }),
        {
          currency: a,
          has_additional_charges:
            ((i = r.discount) != null ? i : 0) > 0 ||
            ((l = r.tax) != null ? l : 0) > 0 ||
            ((s = r.shipping) != null ? s : 0) > 0,
          has_ephemeral_messages_turned_on: o(
            "WAWebChatEphemerality",
          ).isEphemeralSettingOn(t),
          num_catalog_items: c,
          num_custom_items: u,
          p2m_flow: e.ORDER,
        }
      );
    }
    function u(e, t, n, a, i, l, u, c) {
      var d = s(e, n, a, c);
      return new (o(
        "WAWebOrderDetailsActionsSmbWamEvent",
      ).OrderDetailsActionsSmbWamEvent)({
        acceptedPayMethods: JSON.stringify(u),
        actionCategory: r("WAWebOrderDetailsActionCategory")
          .ORDER_DETAILS_CREATION,
        extraAttributes: JSON.stringify(d),
        hasAddedPrice: l,
        hasCatalog: i,
        orderDetailEntryPoint: t,
        orderDetailsCreationAction: o("WAWebWamEnumOrderDetailsCreationAction")
          .ORDER_DETAILS_CREATION_ACTION.SEND_ORDER_DETAILS,
      });
    }
    function c(e) {
      var t = e.entryPoint,
        n = e.hasAddedPrice,
        a = e.hasCatalog;
      return new (o(
        "WAWebOrderDetailsActionsSmbWamEvent",
      ).OrderDetailsActionsSmbWamEvent)({
        actionCategory: r("WAWebOrderDetailsActionCategory")
          .ORDER_DETAILS_MANAGEMENT,
        hasAddedPrice: n,
        hasCatalog: a,
        orderDetailEntryPoint: t,
        orderDetailsCreationAction: o("WAWebWamEnumOrderDetailsCreationAction")
          .ORDER_DETAILS_CREATION_ACTION.CLICK_ADD_ITEM,
      });
    }
    function d(e, t, n) {
      return new (o(
        "WAWebOrderDetailsActionsSmbWamEvent",
      ).OrderDetailsActionsSmbWamEvent)({
        actionCategory: r("WAWebOrderDetailsActionCategory")
          .ORDER_DETAILS_MANAGEMENT,
        hasAddedPrice: n,
        hasCatalog: t,
        orderDetailEntryPoint: e,
        orderDetailsCreationAction: o("WAWebWamEnumOrderDetailsCreationAction")
          .ORDER_DETAILS_CREATION_ACTION.CLICK_ADD_ITEMS,
      });
    }
    ((l.P2MFlow = e),
      (l.createSendOrderDetailsExtraAttributes = s),
      (l.createSendOrderDetailsWamEvent = u),
      (l.createClickAddItemWamEvent = c),
      (l.createClickAddItemsWamEvent = d));
  },
  98,
);
