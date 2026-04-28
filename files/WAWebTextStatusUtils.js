__d(
  "WAWebTextStatusUtils",
  ["WATimeUtils", "WAWebTextStatusGatingUtils", "fbs"],
  function (t, n, r, o, a, i, l) {
    var e = -1;
    function s(t) {
      return t == null || t === e;
    }
    var u = 50,
      c = -2,
      d = 0;
    function m(e) {
      return e != null && e >= 0;
    }
    function p(t, n) {
      return t === d && (n == null || n === e || n === c) ? c : t;
    }
    var _ = null,
      f = null,
      g = null,
      h = -1;
    function y(e, t, n, r, a) {
      var i = a === h || (r != null && o("WATimeUtils").unixTime() < r),
        l = !!(e != null && e.trim()) || !!t,
        s = n !== d;
      return s && i && l;
    }
    function C(e) {
      return e != null && e !== h;
    }
    function b(t, n, r, a, i) {
      return !(
        !o("WAWebTextStatusGatingUtils").receiveTextStatusEnabled() ||
        r === e ||
        r === c ||
        !y(t, n, r, a, i)
      );
    }
    function v(e) {
      return e.status === void 0;
    }
    function S(e) {
      var t = r("fbs")._(/*BTDS*/ "Hey there! I am using WhatsApp.").toString();
      return e.isValidTextStatus() && e.status !== t;
    }
    ((l.TEXT_STATUS_NOT_FETCHED = e),
      (l.isTextStatusNotFetched = s),
      (l.SUGGESTIONS_MAX_COUNT = u),
      (l.TEXT_STATUS_NEVER_HAD = c),
      (l.CLEAR_TEXT_STATUS_LAST_UPDATE_TIME_VAL = d),
      (l.hasEverHadTextStatus = m),
      (l.resolveTextStatusUpdateTime = p),
      (l.CLEAR_TEXT_STATUS_STRING_VAL = _),
      (l.CLEAR_TEXT_STATUS_EMOJI_VAL = f),
      (l.CLEAR_TEXT_STATUS_EPHEMERAL_DURATION_VAL = g),
      (l.TEXT_STATUS_DURATION_INFINITE = h),
      (l.hasTextStatusSet = y),
      (l.isEphemeralTextStatus = C),
      (l.shouldDisplayTextStatus = b),
      (l.isLegacyAboutNotFetched = v),
      (l.hasCustomAboutSet = S));
  },
  226,
);
