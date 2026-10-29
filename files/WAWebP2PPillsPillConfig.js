__d(
  "WAWebP2PPillsPillConfig",
  [
    "fbt",
    "WDSIconIcArticleFilled.react",
    "WDSIconIcCalendarMonth.react",
    "WDSIconIcCallFilled.react",
    "WDSIconIcInfo.react",
    "WDSIconIcPersonFilled.react",
    "WDSIconIcRestaurant.react",
    "WDSIconIcSell.react",
    "WDSIconIcShoppingBagFilled.react",
    "WDSIconIcStarRateFilled.react",
    "WDSIconWdsIcChatFilled.react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = {
      CHAT: {
        Icon: r("WDSIconWdsIcChatFilled.react"),
        getLabel: function () {
          return s._(/*BTDS*/ "Message");
        },
        tapAction: "openChat",
      },
      VIEW_BUSINESS: {
        Icon: r("WDSIconIcPersonFilled.react"),
        getLabel: function () {
          return s._(/*BTDS*/ "Profile");
        },
        tapAction: "openProfile",
      },
      SHOP: {
        Icon: r("WDSIconIcShoppingBagFilled.react"),
        getLabel: function () {
          return s._(/*BTDS*/ "Shop");
        },
        getPrefillText: function () {
          return s
            ._(/*BTDS*/ "Hi, I would like to see what you have.")
            .toString();
        },
        tapAction: "openChat",
      },
      ORDER: {
        Icon: r("WDSIconIcRestaurant.react"),
        getLabel: function () {
          return s._(/*BTDS*/ "Order");
        },
        getPrefillText: function () {
          return s._(/*BTDS*/ "Hi, I would like to place an order.").toString();
        },
        tapAction: "openChat",
      },
      MENU: {
        Icon: r("WDSIconIcArticleFilled.react"),
        getLabel: function () {
          return s._(/*BTDS*/ "Menu");
        },
        getPrefillText: function () {
          return s._(/*BTDS*/ "Hi, can I see your menu?").toString();
        },
        tapAction: "openChat",
      },
      CALL: {
        Icon: r("WDSIconIcCallFilled.react"),
        getLabel: function () {
          return s._(/*BTDS*/ "Call");
        },
        tapAction: "none",
      },
      BOOK_APPOINTMENT: {
        Icon: r("WDSIconIcCalendarMonth.react"),
        getLabel: function () {
          return s._(/*BTDS*/ "Book");
        },
        getPrefillText: function () {
          return s
            ._(/*BTDS*/ "Hi, I would like to book an appointment.")
            .toString();
        },
        tapAction: "openChat",
      },
      OFFERS: {
        Icon: r("WDSIconIcSell.react"),
        getLabel: function () {
          return s._(/*BTDS*/ "Offers");
        },
        getPrefillText: function () {
          return s._(/*BTDS*/ "Hi, do you have any current offers?").toString();
        },
        tapAction: "openChat",
      },
      BESTSELLERS: {
        Icon: r("WDSIconIcStarRateFilled.react"),
        getLabel: function () {
          return s._(/*BTDS*/ "Bestsellers");
        },
        getPrefillText: function () {
          return s._(/*BTDS*/ "Hi, what are your bestsellers?").toString();
        },
        tapAction: "openChat",
      },
      ABOUT: {
        Icon: r("WDSIconIcInfo.react"),
        getLabel: function () {
          return s._(/*BTDS*/ "About us");
        },
        getPrefillText: function () {
          return s
            ._(/*BTDS*/ "Hi, can you tell me more about your business?")
            .toString();
        },
        tapAction: "openChat",
      },
    };
    function u(t) {
      var n;
      return (n = e[t]) != null ? n : null;
    }
    l.getPillConfig = u;
  },
  226,
);
