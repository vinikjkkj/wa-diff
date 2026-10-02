__d(
  "WASmaxInUsyncNotificationAddDevicesNotificationMixin",
  [
    "WAResultOrError",
    "WASmaxInUsyncEnums",
    "WASmaxParseJid",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "device");
      if (!t.success) return t;
      var n = o("WASmaxParseJid").attrJidEnum(
        e,
        "jid",
        o("WASmaxInUsyncEnums").DEVICEJID_DEVICEJID,
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optional(
        o("WASmaxParseJid").attrDeviceJid,
        e,
        "lid",
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        e,
        "key-index",
        0,
        void 0,
      );
      return a.success
        ? o("WAResultOrError").makeResult({
            jid: n.value,
            lid: r.value,
            keyIndex: a.value,
          })
        : a;
    }
    function s(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "key-index-list");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrIntRange(e, "ts", -1, void 0);
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").contentBytesRange(e, 0, 500);
      return r.success
        ? o("WAResultOrError").makeResult({
            ts: n.value,
            elementValue: r.value,
          })
        : r;
    }
    function u(t) {
      var n = o("WASmaxParseUtils").assertTag(t, "notification");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(t, "add");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optionalChildWithTag(
        r.value,
        "key-index-list",
        s,
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").attrString(r.value, "device_hash");
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        r.value,
        "device_lid_hash",
      );
      if (!l.success) return l;
      var u = o("WASmaxParseUtils").mapChildrenWithTag(
        r.value,
        "device",
        0,
        1e3,
        e,
      );
      return u.success
        ? o("WAResultOrError").makeResult({
            addDeviceHash: i.value,
            addDeviceLidHash: l.value,
            addKeyIndexList: a.value,
            addDevice: u.value,
          })
        : u;
    }
    ((l.parseNotificationAddDevicesNotificationAddDevice = e),
      (l.parseNotificationAddDevicesNotificationAddKeyIndexList = s),
      (l.parseNotificationAddDevicesNotificationMixin = u));
  },
  98,
);
