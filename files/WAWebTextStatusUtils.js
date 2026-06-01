__d(
  "WAWebTextStatusUtils",
  ["WATimeUtils", "WAWebTextStatusGatingUtils", "fbs"],
  function (t, n, r, o, a, i, l) {
    var e = -1,
      s = -3;
    function u(t) {
      return t == null || t === e;
    }
    var c = 50,
      d = -2,
      m = 0;
    function p(e) {
      return e != null && e >= 0;
    }
    function _(t, n) {
      return t === m && (n == null || n === e || n === d) ? d : t;
    }
    var f = null,
      g = null,
      h = null,
      y = -1;
    function C(e, t, n, r, a) {
      var i = a === y || (r != null && o("WATimeUtils").unixTime() < r),
        l = !!(e != null && e.trim()) || !!t,
        s = n !== m;
      return s && i && l;
    }
    function b(e) {
      return e != null && e !== y;
    }
    function v(t, n, r, a, i) {
      return !(
        !o("WAWebTextStatusGatingUtils").receiveTextStatusEnabled() ||
        r === e ||
        r === d ||
        r === s ||
        !C(t, n, r, a, i)
      );
    }
    function S(e) {
      return e.status === void 0;
    }
    function R(e) {
      var t = r("fbs")._(/*BTDS*/ "Hey there! I am using WhatsApp.").toString();
      return e.isValidTextStatus() && e.status !== t;
    }
    ((l.TEXT_STATUS_NOT_FETCHED = e),
      (l.TEXT_STATUS_NOT_AUTHORIZED = s),
      (l.isTextStatusNotFetched = u),
      (l.SUGGESTIONS_MAX_COUNT = c),
      (l.TEXT_STATUS_NEVER_HAD = d),
      (l.CLEAR_TEXT_STATUS_LAST_UPDATE_TIME_VAL = m),
      (l.hasEverHadTextStatus = p),
      (l.resolveTextStatusUpdateTime = _),
      (l.CLEAR_TEXT_STATUS_STRING_VAL = f),
      (l.CLEAR_TEXT_STATUS_EMOJI_VAL = g),
      (l.CLEAR_TEXT_STATUS_EPHEMERAL_DURATION_VAL = h),
      (l.TEXT_STATUS_DURATION_INFINITE = y),
      (l.hasTextStatusSet = C),
      (l.isEphemeralTextStatus = b),
      (l.shouldDisplayTextStatus = v),
      (l.isLegacyAboutNotFetched = S),
      (l.hasCustomAboutSet = R));
  },
  226,
);
