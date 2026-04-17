__d(
  "WAWebTextStatusUtils",
  ["WATimeUtils", "WAWebTextStatusGatingUtils", "fbs"],
  function (t, n, r, o, a, i, l) {
    var e = -1,
      s = 50,
      u = -2,
      c = 0;
    function d(e) {
      return e != null && e >= 0;
    }
    function m(t, n) {
      return t === c && (n == null || n === e || n === u) ? u : t;
    }
    var p = null,
      _ = null,
      f = null,
      g = -1;
    function h(e, t, n, r, a) {
      var i = a === g || (r != null && o("WATimeUtils").unixTime() < r),
        l = !!(e != null && e.trim()) || !!t,
        s = n !== c;
      return s && i && l;
    }
    function y(e) {
      return e != null && e !== g;
    }
    function C(t, n, r, a, i) {
      return !(
        !o("WAWebTextStatusGatingUtils").receiveTextStatusEnabled() ||
        r === e ||
        r === u ||
        !h(t, n, r, a, i)
      );
    }
    function b(e) {
      return e.status === void 0;
    }
    function v(e) {
      var t = r("fbs")._(/*BTDS*/ "Hey there! I am using WhatsApp.").toString();
      return e.isValidTextStatus() && e.status !== t;
    }
    ((l.TEXT_STATUS_NOT_FETCHED = e),
      (l.SUGGESTIONS_MAX_COUNT = s),
      (l.TEXT_STATUS_NEVER_HAD = u),
      (l.CLEAR_TEXT_STATUS_LAST_UPDATE_TIME_VAL = c),
      (l.hasEverHadTextStatus = d),
      (l.resolveTextStatusUpdateTime = m),
      (l.CLEAR_TEXT_STATUS_STRING_VAL = p),
      (l.CLEAR_TEXT_STATUS_EMOJI_VAL = _),
      (l.CLEAR_TEXT_STATUS_EPHEMERAL_DURATION_VAL = f),
      (l.TEXT_STATUS_DURATION_INFINITE = g),
      (l.hasTextStatusSet = h),
      (l.isEphemeralTextStatus = y),
      (l.shouldDisplayTextStatus = C),
      (l.isLegacyAboutNotFetched = b),
      (l.hasCustomAboutSet = v));
  },
  226,
);
