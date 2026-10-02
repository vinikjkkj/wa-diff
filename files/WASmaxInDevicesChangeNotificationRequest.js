__d(
  "WASmaxInDevicesChangeNotificationRequest",
  [
    "WAResultOrError",
    "WASmaxInDevicesDeviceListMixin",
    "WASmaxInDevicesICDCFromServerMixin",
    "WASmaxInDevicesServerNotificationMixin",
    "WASmaxParseJid",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "devices");
      if (!t.success) return t;
      var n = o("WASmaxInDevicesDeviceListMixin").parseDeviceListMixin(e);
      return (n.success, n);
    }
    function s(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "icdc");
      if (!t.success) return t;
      var n = o("WASmaxInDevicesICDCFromServerMixin").parseICDCFromServerMixin(
        e,
      );
      return (n.success, n);
    }
    function u(t) {
      var n = o("WASmaxParseUtils").assertTag(t, "notification");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optionalChildWithTag(t, "devices", e);
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optionalChildWithTag(t, "icdc", s);
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        t,
        "type",
        "fbid:devices",
      );
      if (!i.success) return i;
      var l = o("WASmaxParseJid").attrUserJid(t, "from");
      if (!l.success) return l;
      var u = o(
        "WASmaxInDevicesServerNotificationMixin",
      ).parseServerNotificationMixin(t);
      return u.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({ type: i.value, from: l.value }, u.value, {
              devices: r.value,
              icdc: a.value,
            }),
          )
        : u;
    }
    ((l.parseChangeNotificationRequestDevices = e),
      (l.parseChangeNotificationRequestIcdc = s),
      (l.parseChangeNotificationRequest = u));
  },
  98,
);
