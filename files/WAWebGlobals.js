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
      var e,
        t = (e = s().myJids) == null ? void 0 : e.deviceJid;
      if (t == null)
        throw r("err")("Trying to access myDeviceJid, but it's not set");
      return o("WAJids").unsafeCoerceToPhoneDeviceJid(t);
    }
    function m() {
      var e = s().lidDeviceJid;
      return e != null ? o("WAJids").unsafeCoerceToLidDeviceJid(e) : null;
    }
    function p(e) {
      s().lidDeviceJid = e;
    }
    function _() {
      var e = s().displayName;
      return e;
    }
    function f(e) {
      s().displayName = e;
    }
    function g(t) {
      e != null && (s().allowHistorySyncPutAllowDuplicate = t);
    }
    function h() {
      var t;
      return e == null
        ? !1
        : (t = s().allowHistorySyncPutAllowDuplicate) != null
          ? t
          : !1;
    }
    function y(t) {
      e != null && (s().enableImprovedBulkMerge = t);
    }
    function C() {
      var t;
      return e == null
        ? !1
        : (t = s().enableImprovedBulkMerge) != null
          ? t
          : !1;
    }
    ((l.areGlobalsReady = u),
      (l.setGlobals = c),
      (l.getMyDeviceJid = d),
      (l.getMyLidDeviceJid = m),
      (l.setMyLidDeviceJid = p),
      (l.getMyDisplayName = _),
      (l.setMyDisplayName = f),
      (l.setAllowHistorySyncPutAllowDuplicate = g),
      (l.getAllowHistorySyncPutAllowDuplicate = h),
      (l.setEnableImprovedBulkMerge = y),
      (l.getEnableImprovedBulkMerge = C));
  },
  98,
);
