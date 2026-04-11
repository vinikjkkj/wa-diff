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
    var e = n("$InternalEnum").Mirrored(["ORDER"]),
      s = function (n, r, a, i) {
        var t,
          l,
          s,
          u = 0,
          c = 0;
        return (
          r.forEach(function (e) {
            e.isCustomItem === !0 ? (u += e.quantity) : (c += e.quantity);
          }),
          {
            currency: i,
            has_additional_charges:
              ((t = a.discount) != null ? t : 0) > 0 ||
              ((l = a.tax) != null ? l : 0) > 0 ||
              ((s = a.shipping) != null ? s : 0) > 0,
            has_ephemeral_messages_turned_on: o(
              "WAWebChatEphemerality",
            ).isEphemeralSettingOn(n),
            num_catalog_items: c,
            num_custom_items: u,
            p2m_flow: e.ORDER,
          }
        );
      },
      u = function (t, n, a, i, l, u, c, d) {
        var e = s(t, a, i, d);
        return new (o(
          "WAWebOrderDetailsActionsSmbWamEvent",
        ).OrderDetailsActionsSmbWamEvent)({
          acceptedPayMethods: JSON.stringify(c),
          actionCategory: r("WAWebOrderDetailsActionCategory")
            .ORDER_DETAILS_CREATION,
          extraAttributes: JSON.stringify(e),
          hasAddedPrice: u,
          hasCatalog: l,
          orderDetailEntryPoint: n,
          orderDetailsCreationAction: o(
            "WAWebWamEnumOrderDetailsCreationAction",
          ).ORDER_DETAILS_CREATION_ACTION.SEND_ORDER_DETAILS,
        });
      },
      c = function (t, n, a) {
        return new (o(
          "WAWebOrderDetailsActionsSmbWamEvent",
        ).OrderDetailsActionsSmbWamEvent)({
          actionCategory: r("WAWebOrderDetailsActionCategory")
            .ORDER_DETAILS_MANAGEMENT,
          hasAddedPrice: a,
          hasCatalog: n,
          orderDetailEntryPoint: t,
          orderDetailsCreationAction: o(
            "WAWebWamEnumOrderDetailsCreationAction",
          ).ORDER_DETAILS_CREATION_ACTION.CLICK_ADD_ITEM,
        });
      },
      d = function (t, n, a) {
        return new (o(
          "WAWebOrderDetailsActionsSmbWamEvent",
        ).OrderDetailsActionsSmbWamEvent)({
          actionCategory: r("WAWebOrderDetailsActionCategory")
            .ORDER_DETAILS_MANAGEMENT,
          hasAddedPrice: a,
          hasCatalog: n,
          orderDetailEntryPoint: t,
          orderDetailsCreationAction: o(
            "WAWebWamEnumOrderDetailsCreationAction",
          ).ORDER_DETAILS_CREATION_ACTION.CLICK_ADD_ITEMS,
        });
      };
    ((l.P2MFlow = e),
      (l.createSendOrderDetailsExtraAttributes = s),
      (l.createSendOrderDetailsWamEvent = u),
      (l.createClickAddItemWamEvent = c),
      (l.createClickAddItemsWamEvent = d));
  },
  98,
);
