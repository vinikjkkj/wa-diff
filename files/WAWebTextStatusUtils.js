__d(
  "WAWebTextStatusUtils",
  ["WATimeUtils", "WAWebTextStatusGatingUtils", "fbs"],
  function (t, n, r, o, a, i, l) {
    var e = -1,
      s = 50,
      u = 0,
      c = null,
      d = null,
      m = null,
      p = -1;
    function _(e, t, n, r, a) {
      var i = a === p || (r != null && o("WATimeUtils").unixTime() < r),
        l = !!(e != null && e.trim()) || !!t,
        s = n !== u;
      return s && i && l;
    }
    function f(e) {
      return e != null && e !== p;
    }
    function g(t, n, r, a, i) {
      return !(
        !o("WAWebTextStatusGatingUtils").receiveTextStatusEnabled() ||
        r === e ||
        !_(t, n, r, a, i)
      );
    }
    function h(e) {
      return e.status === void 0;
    }
    function y(e) {
      var t = r("fbs")._(/*BTDS*/ "Hey there! I am using WhatsApp.").toString();
      return e.isValidTextStatus() && e.status !== t;
    }
    ((l.TEXT_STATUS_NOT_FETCHED = e),
      (l.SUGGESTIONS_MAX_COUNT = s),
      (l.CLEAR_TEXT_STATUS_LAST_UPDATE_TIME_VAL = u),
      (l.CLEAR_TEXT_STATUS_STRING_VAL = c),
      (l.CLEAR_TEXT_STATUS_EMOJI_VAL = d),
      (l.CLEAR_TEXT_STATUS_EPHEMERAL_DURATION_VAL = m),
      (l.TEXT_STATUS_DURATION_INFINITE = p),
      (l.hasTextStatusSet = _),
      (l.isEphemeralTextStatus = f),
      (l.shouldDisplayTextStatus = g),
      (l.isLegacyAboutNotFetched = h),
      (l.hasCustomAboutSet = y));
  },
  226,
);
