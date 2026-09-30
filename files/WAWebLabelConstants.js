__d(
  "WAWebLabelConstants",
  ["fbt", "WAWebWamEnumCtwaLabelType"],
  function (t, n, r, o, a, i, l, s) {
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
      u = [
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
      c = Object.freeze({
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
      d = Object.freeze({
        NEW_CUSTOMER: "New customer",
        NEW_ORDER: "New order",
        PENDING_PAYMENT: "Pending payment",
        PAID: "Paid",
        ORDER_COMPLETE: "Order complete",
        IMPORTANT: "Important",
        FOLLOW_UP: "Follow up",
        LEAD: "Lead",
      }),
      m = Object.freeze({
        NEW_CUSTOMER: "new_customer",
        NEW_ORDER: "new_order",
        PENDING_PAYMENT: "pending_payment",
        PAID: "paid",
        ORDER_COMPLETE: "order_complete",
        IMPORTANT: "important",
        FOLLOW_UP: "follow_up",
        LEAD: "lead",
      });
    function p(e) {
      var t = e.toLowerCase();
      for (var n of [
        c.NEW_CUSTOMER,
        c.NEW_ORDER,
        c.PENDING_PAYMENT,
        c.PAID,
        c.ORDER_COMPLETE,
        c.IMPORTANT,
        c.FOLLOW_UP,
        c.LEAD,
      ]) {
        var r;
        if (((r = f(n)) == null ? void 0 : r.toString().toLowerCase()) === t)
          return n;
      }
    }
    function _(e) {
      switch (e) {
        case m.NEW_CUSTOMER:
          return o("WAWebWamEnumCtwaLabelType").CTWA_LABEL_TYPE.NEW_CUSTOMER;
        case m.NEW_ORDER:
          return o("WAWebWamEnumCtwaLabelType").CTWA_LABEL_TYPE.NEW_ORDER;
        case m.PENDING_PAYMENT:
          return o("WAWebWamEnumCtwaLabelType").CTWA_LABEL_TYPE.PENDING_PAYMENT;
        case m.PAID:
          return o("WAWebWamEnumCtwaLabelType").CTWA_LABEL_TYPE.PAID;
        case m.ORDER_COMPLETE:
          return o("WAWebWamEnumCtwaLabelType").CTWA_LABEL_TYPE.ORDER_COMPLETE;
        case m.IMPORTANT:
          return o("WAWebWamEnumCtwaLabelType").CTWA_LABEL_TYPE.IMPORTANT;
        case m.FOLLOW_UP:
          return o("WAWebWamEnumCtwaLabelType").CTWA_LABEL_TYPE.FOLLOW_UP;
        default:
          return o("WAWebWamEnumCtwaLabelType").CTWA_LABEL_TYPE.LEAD;
      }
    }
    function f(e) {
      switch (e) {
        case c.NEW_CUSTOMER:
          return s._(/*BTDS*/ "New customer");
        case c.NEW_ORDER:
        case c.DO_NEW_ORDER:
          return s._(/*BTDS*/ "New order");
        case c.PENDING_PAYMENT:
          return s._(/*BTDS*/ "Pending payment");
        case c.PAID:
          return s._(/*BTDS*/ "Paid");
        case c.ORDER_COMPLETE:
          return s._(/*BTDS*/ "Order complete");
        case c.IMPORTANT:
          return s._(/*BTDS*/ "Important");
        case c.FOLLOW_UP:
          return s._(/*BTDS*/ "Follow up");
        case c.LEAD:
        case c.DO_LEAD:
          return s._(/*BTDS*/ "Lead");
        default:
          return;
      }
    }
    var g = new Set([c.NEW_ORDER, c.LEAD, c.DO_NEW_ORDER, c.DO_LEAD]);
    function h(e) {
      var t, n;
      return e == null || !g.has(e)
        ? null
        : (t = (n = f(e)) == null ? void 0 : n.toString()) != null
          ? t
          : null;
    }
    var y = 100;
    ((l.ANDROID_LABEL_COLOR_PALETTE = e),
      (l.IPHONE_LABEL_COLOR_PALETTE = u),
      (l.PREDEFINED_LABEL_IDS = c),
      (l.PREDEFINED_LABEL_NAMES = d),
      (l.mapLabelNameToPredefinedId = p),
      (l.mapCustomLabelSubtypeToCTWALabelType = _),
      (l.mapPredefinedIdToLabelName = f),
      (l.getLocalizedDoLabelNameByPredefinedId = h),
      (l.LABEL_NAME_MAX_LENGTH = y));
  },
  226,
);
