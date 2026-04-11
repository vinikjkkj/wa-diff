__d(
  "WAWebChatThreadLoggingBoolFlagFields",
  [],
  function (t, n, r, o, a, i) {
    var e = {
        isCartAddClicked: !1,
        isCtaOnPdpClicked: !1,
        isCommerceViewed: !1,
        viaContactlessChats: !1,
      },
      l = Object.freeze(e),
      s = Object.freeze(Object.keys(e));
    function u(e) {
      return s.find(function (t) {
        return t === e;
      });
    }
    ((i.FLAG_FIELDS = l),
      (i.FLAG_FIELD_NAMES = s),
      (i.toMaybeBoolFlagActionType = u));
  },
  66,
);
