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
      l = { afterReadTurnedOn: !1, afterReadTurnedOff: !1 },
      s = babelHelpers.extends({}, e, l),
      u = Object.freeze(s),
      c = Object.freeze(Object.keys(s)),
      d = Object.freeze(Object.keys(e)),
      m = Object.freeze(Object.keys(l));
    function p(e) {
      return c.find(function (t) {
        return t === e;
      });
    }
    ((i.FLAG_FIELDS = u),
      (i.FLAG_FIELD_NAMES = c),
      (i.REGULAR_FLAG_FIELD_NAMES = d),
      (i.STICKY_FLAG_FIELD_NAMES = m),
      (i.toMaybeBoolFlagActionType = p));
  },
  66,
);
