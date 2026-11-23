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
          return s._(/*BTDS*/ "");
        },
        tapAction: "openChat",
      },
      VIEW_BUSINESS: {
        Icon: r("WDSIconIcPersonFilled.react"),
        getLabel: function () {
          return s._(/*BTDS*/ "");
        },
        tapAction: "openProfile",
      },
      SHOP: {
        Icon: r("WDSIconIcShoppingBagFilled.react"),
        getLabel: function () {
          return s._(/*BTDS*/ "");
        },
        getPrefillText: function () {
          return s._(/*BTDS*/ "").toString();
        },
        tapAction: "openChat",
      },
      ORDER: {
        Icon: r("WDSIconIcRestaurant.react"),
        getLabel: function () {
          return s._(/*BTDS*/ "");
        },
        getPrefillText: function () {
          return s._(/*BTDS*/ "").toString();
        },
        tapAction: "openChat",
      },
      MENU: {
        Icon: r("WDSIconIcArticleFilled.react"),
        getLabel: function () {
          return s._(/*BTDS*/ "");
        },
        getPrefillText: function () {
          return s._(/*BTDS*/ "").toString();
        },
        tapAction: "openChat",
      },
      CALL: {
        Icon: r("WDSIconIcCallFilled.react"),
        getLabel: function () {
          return s._(/*BTDS*/ "");
        },
        tapAction: "none",
      },
      BOOK_APPOINTMENT: {
        Icon: r("WDSIconIcCalendarMonth.react"),
        getLabel: function () {
          return s._(/*BTDS*/ "");
        },
        getPrefillText: function () {
          return s._(/*BTDS*/ "").toString();
        },
        tapAction: "openChat",
      },
      OFFERS: {
        Icon: r("WDSIconIcSell.react"),
        getLabel: function () {
          return s._(/*BTDS*/ "");
        },
        getPrefillText: function () {
          return s._(/*BTDS*/ "").toString();
        },
        tapAction: "openChat",
      },
      BESTSELLERS: {
        Icon: r("WDSIconIcStarRateFilled.react"),
        getLabel: function () {
          return s._(/*BTDS*/ "");
        },
        getPrefillText: function () {
          return s._(/*BTDS*/ "").toString();
        },
        tapAction: "openChat",
      },
      ABOUT: {
        Icon: r("WDSIconIcInfo.react"),
        getLabel: function () {
          return s._(/*BTDS*/ "");
        },
        getPrefillText: function () {
          return s._(/*BTDS*/ "").toString();
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
