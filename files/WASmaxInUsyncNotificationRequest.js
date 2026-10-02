__d(
  "WASmaxInUsyncNotificationRequest",
  [
    "WAResultOrError",
    "WASmaxInUsyncCloudAPIGroupListMixin",
    "WASmaxInUsyncDevicesNotification",
    "WASmaxInUsyncServerNotificationMixin",
    "WASmaxParseJid",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "notification");
      if (!t.success) return t;
      var n = o("WASmaxParseJid").attrUserJid(e, "from");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optional(
        o("WASmaxParseJid").attrLidUserJid,
        e,
        "lid",
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
        "devices",
      );
      if (!a.success) return a;
      var i = o(
        "WASmaxInUsyncServerNotificationMixin",
      ).parseServerNotificationMixin(e);
      if (!i.success) return i;
      var l = o(
          "WASmaxInUsyncCloudAPIGroupListMixin",
        ).parseCloudAPIGroupListMixin(e),
        s = o("WASmaxInUsyncDevicesNotification").parseDevicesNotification(e);
      return s.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              { from: n.value, lid: r.value, type: a.value },
              i.value,
              {
                cloudAPIGroupListMixin: l.success ? l.value : null,
                devicesNotification: s.value,
              },
            ),
          )
        : s;
    }
    l.parseNotificationRequest = e;
  },
  98,
);
