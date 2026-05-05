__d(
  "WAWebLabelConstants",
  ["WAWebWamEnumCtwaLabelType"],
  function (t, n, r, o, a, i, l) {
    var e = [
        "#FF9485",
        "#64C4FF",
        "#FFD429",
        "#DFAEF0",
        "#99B6C1",
        "#55CCB3",
        "#FF9DFF",
        "#D3A91D",
        "#6D7CCE",
        "#D7E752",
        "#00D0E2",
        "#FFC5C7",
        "#93CEAC",
        "#F74848",
        "#00A0F2",
        "#83E422",
        "#FFAF04",
        "#B5EBFF",
        "#9BA6FF",
        "#9368CF",
      ],
      s = [
        "#A62C71",
        "#90A841",
        "#C1A03F",
        "#792138",
        "#AE8774",
        "#F0B330",
        "#B6B327",
        "#C69FCC",
        "#8B6990",
        "#FF8A8C",
        "#54C265",
        "#FF7B6B",
        "#26C4DC",
        "#57C9FF",
        "#74676A",
        "#7E90A3",
        "#5696FF",
        "#6E257E",
        "#7ACBA5",
        "#243640",
      ],
      u = Object.freeze({
        NEW_CUSTOMER: 1,
        NEW_ORDER: 2,
        PENDING_PAYMENT: 3,
        PAID: 4,
        ORDER_COMPLETE: 5,
        IMPORTANT: 6,
        FOLLOW_UP: 7,
        LEAD: 8,
        DO_NEW_ORDER: 9,
        DO_LEAD: 10,
      }),
      c = Object.freeze({
        NEW_CUSTOMER: "New customer",
        NEW_ORDER: "New order",
        PENDING_PAYMENT: "Pending payment",
        PAID: "Paid",
        ORDER_COMPLETE: "Order complete",
        IMPORTANT: "Important",
        FOLLOW_UP: "Follow up",
        LEAD: "Lead",
      }),
      d = Object.freeze({
        NEW_CUSTOMER: "new_customer",
        NEW_ORDER: "new_order",
        PENDING_PAYMENT: "pending_payment",
        PAID: "paid",
        ORDER_COMPLETE: "order_complete",
        IMPORTANT: "important",
        FOLLOW_UP: "follow_up",
        LEAD: "lead",
      }),
      m = new Map([
        [c.NEW_CUSTOMER.toLowerCase(), u.NEW_CUSTOMER],
        [c.NEW_ORDER.toLowerCase(), u.NEW_ORDER],
        [c.PENDING_PAYMENT.toLowerCase(), u.PENDING_PAYMENT],
        [c.PAID.toLowerCase(), u.PAID],
        [c.ORDER_COMPLETE.toLowerCase(), u.ORDER_COMPLETE],
        [c.IMPORTANT.toLowerCase(), u.IMPORTANT],
        [c.FOLLOW_UP.toLowerCase(), u.FOLLOW_UP],
        [c.LEAD.toLowerCase(), u.LEAD],
      ]);
    function p(e) {
      return m.get(e.toLowerCase());
    }
    function _(e) {
      switch (e) {
        case d.NEW_CUSTOMER:
          return o("WAWebWamEnumCtwaLabelType").CTWA_LABEL_TYPE.NEW_CUSTOMER;
        case d.NEW_ORDER:
          return o("WAWebWamEnumCtwaLabelType").CTWA_LABEL_TYPE.NEW_ORDER;
        case d.PENDING_PAYMENT:
          return o("WAWebWamEnumCtwaLabelType").CTWA_LABEL_TYPE.PENDING_PAYMENT;
        case d.PAID:
          return o("WAWebWamEnumCtwaLabelType").CTWA_LABEL_TYPE.PAID;
        case d.ORDER_COMPLETE:
          return o("WAWebWamEnumCtwaLabelType").CTWA_LABEL_TYPE.ORDER_COMPLETE;
        case d.IMPORTANT:
          return o("WAWebWamEnumCtwaLabelType").CTWA_LABEL_TYPE.IMPORTANT;
        case d.FOLLOW_UP:
          return o("WAWebWamEnumCtwaLabelType").CTWA_LABEL_TYPE.FOLLOW_UP;
        default:
          return o("WAWebWamEnumCtwaLabelType").CTWA_LABEL_TYPE.LEAD;
      }
    }
    function f(e) {
      switch (e) {
        case u.NEW_CUSTOMER:
          return c.NEW_CUSTOMER;
        case u.NEW_ORDER:
        case u.DO_NEW_ORDER:
          return c.NEW_ORDER;
        case u.PENDING_PAYMENT:
          return c.PENDING_PAYMENT;
        case u.PAID:
          return c.PAID;
        case u.ORDER_COMPLETE:
          return c.ORDER_COMPLETE;
        case u.IMPORTANT:
          return c.IMPORTANT;
        case u.FOLLOW_UP:
          return c.FOLLOW_UP;
        case u.LEAD:
        case u.DO_LEAD:
          return c.LEAD;
        default:
          return;
      }
    }
    var g = 100;
    ((l.ANDROID_LABEL_COLOR_PALETTE = e),
      (l.IPHONE_LABEL_COLOR_PALETTE = s),
      (l.PREDEFINED_LABEL_IDS = u),
      (l.PREDEFINED_LABEL_NAMES = c),
      (l.mapLabelNameToPredefinedId = p),
      (l.mapCustomLabelSubtypeToCTWALabelType = _),
      (l.mapPredefinedIdToLabelName = f),
      (l.LABEL_NAME_MAX_LENGTH = g));
  },
  98,
);
