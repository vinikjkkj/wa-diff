__d(
  "Network",
  ["$InternalEnum", "NetworkConnectivityEffectiveType", "mixInEventEmitter"],
  function (t, n, r, o, a, i, l) {
    var e = !0,
      s = t.navigator && t.navigator.connection,
      u = { 0: "unknown", 1: "ethernet", 2: "wifi", 3: "2g", 4: "3g" },
      c = n("$InternalEnum")({
        Bluetooth: "bluetooth",
        Cellular: "cellular",
        Ethernet: "ethernet",
        None: "none",
        Wifi: "wifi",
        Wimax: "wimax",
        Other: "other",
        Unavailable: "unavailable",
        Unknown: "unknown",
      });
    function d() {
      return e;
    }
    function m(t) {
      t != e && ((e = t), C.emit(t ? "online" : "offline"));
    }
    function p() {
      if (!d()) return 0;
      var e = s == null ? void 0 : s.downlinkMax;
      if (typeof e == "number" && Number.isFinite(e)) return e;
      var t = s == null ? void 0 : s.downlink;
      return typeof t == "number" && Number.isFinite(t) ? t : null;
    }
    function _() {
      if (!d()) return 0;
      var e = s == null ? void 0 : s.rtt;
      return typeof e == "number" && Number.isFinite(e) ? e : null;
    }
    function f() {
      return s != null;
    }
    function g() {
      var e = s ? String(s.type) : "0";
      return u[e] || e;
    }
    function h() {
      var e,
        t = s == null ? void 0 : s.type;
      return (e = typeof t == "string" ? c.cast(t) : null) != null
        ? e
        : c.Unavailable;
    }
    function y() {
      var e,
        t = s == null ? void 0 : s.effectiveType;
      return (e =
        typeof t == "string"
          ? r("NetworkConnectivityEffectiveType").cast(t)
          : null) != null
        ? e
        : "unavailable";
    }
    var C = {
      NetworkConnectivityType: c,
      NetworkConnectivityEffectiveType: r("NetworkConnectivityEffectiveType"),
      getBandwidth: p,
      getEffectiveType: y,
      getType: h,
      getType_DEPRECATED_DO_NOT_USE: g,
      isOnline: d,
      setOnline: m,
      getRTT: _,
      containsNetworkInformation: f,
    };
    (r("mixInEventEmitter")(C, { online: !0, offline: !0 }),
      t.addEventListener
        ? (t.addEventListener("online", m.bind(null, !0)),
          t.addEventListener("offline", m.bind(null, !1)))
        : t.attachEvent &&
          (t.attachEvent("online", m.bind(null, !0)),
          t.attachEvent("offline", m.bind(null, !1))));
    var b = C;
    l.default = b;
  },
  98,
);
