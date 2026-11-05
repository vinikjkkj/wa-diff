__d(
  "WAWebGlobals",
  ["WABaseGlobals", "WAJids", "err"],
  function (t, n, r, o, a, i, l) {
    var e = null;
    function s() {
      if (e == null) throw r("err")("globals api called before set");
      return e;
    }
    function u() {
      return e != null;
    }
    function c(t) {
      ((e = t), o("WABaseGlobals").setGlobals(t));
    }
    function d() {
      var e = m();
      if (e == null)
        throw r("err")("Trying to access myDeviceJid, but it's not set");
      return o("WAJids").unsafeCoerceToPhoneDeviceJid(e);
    }
    function m() {
      var e,
        t = (e = s().myJids) == null ? void 0 : e.deviceJid;
      return t == null ? null : o("WAJids").unsafeCoerceToPhoneDeviceJid(t);
    }
    function p() {
      var e = s().lidDeviceJid;
      return e != null ? o("WAJids").unsafeCoerceToLidDeviceJid(e) : null;
    }
    function _(e) {
      s().lidDeviceJid = e;
    }
    function f() {
      var e = s().displayName;
      return e;
    }
    function g(e) {
      s().displayName = e;
    }
    function h(t) {
      e != null && (s().allowHistorySyncPutAllowDuplicate = t);
    }
    function y() {
      var t;
      return e == null
        ? !1
        : (t = s().allowHistorySyncPutAllowDuplicate) != null
          ? t
          : !1;
    }
    ((l.areGlobalsReady = u),
      (l.setGlobals = c),
      (l.getMyDeviceJid = d),
      (l.getMaybeMyDeviceJid = m),
      (l.getMyLidDeviceJid = p),
      (l.setMyLidDeviceJid = _),
      (l.getMyDisplayName = f),
      (l.setMyDisplayName = g),
      (l.setAllowHistorySyncPutAllowDuplicate = h),
      (l.getAllowHistorySyncPutAllowDuplicate = y));
  },
  98,
);
