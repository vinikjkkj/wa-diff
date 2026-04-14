__d(
  "WAWebTextStatusUtils",
  ["WATimeUtils", "WAWebTextStatusGatingUtils", "fbs"],
  function (t, n, r, o, a, i, l) {
    var e = -1,
      s = 50,
      u = -2,
      c = 0,
      d = null,
      m = null,
      p = null,
      _ = -1;
    function f(e, t, n, r, a) {
      var i = a === _ || (r != null && o("WATimeUtils").unixTime() < r),
        l = !!(e != null && e.trim()) || !!t,
        s = n !== c;
      return s && i && l;
    }
    function g(e) {
      return e != null && e !== _;
    }
    function h(t, n, r, a, i) {
      return !(
        !o("WAWebTextStatusGatingUtils").receiveTextStatusEnabled() ||
        r === e ||
        r === u ||
        !f(t, n, r, a, i)
      );
    }
    function y(e) {
      return e.status === void 0;
    }
    function C(e) {
      var t = r("fbs")._(/*BTDS*/ "Hey there! I am using WhatsApp.").toString();
      return e.isValidTextStatus() && e.status !== t;
    }
    ((l.TEXT_STATUS_NOT_FETCHED = e),
      (l.SUGGESTIONS_MAX_COUNT = s),
      (l.TEXT_STATUS_NEVER_HAD = u),
      (l.CLEAR_TEXT_STATUS_LAST_UPDATE_TIME_VAL = c),
      (l.CLEAR_TEXT_STATUS_STRING_VAL = d),
      (l.CLEAR_TEXT_STATUS_EMOJI_VAL = m),
      (l.CLEAR_TEXT_STATUS_EPHEMERAL_DURATION_VAL = p),
      (l.TEXT_STATUS_DURATION_INFINITE = _),
      (l.hasTextStatusSet = f),
      (l.isEphemeralTextStatus = g),
      (l.shouldDisplayTextStatus = h),
      (l.isLegacyAboutNotFetched = y),
      (l.hasCustomAboutSet = C));
  },
  226,
);
