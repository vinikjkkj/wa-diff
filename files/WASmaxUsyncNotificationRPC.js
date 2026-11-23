__d(
  "WASmaxUsyncNotificationRPC",
  [
    "WAJids",
    "WAResultOrError",
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxParseJid",
    "WASmaxParseReference",
    "WASmaxParseUtils",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = s(e);
      if (!t.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
          o("WASmaxRpcUtils").errorMessageRpcParsing("Notification", {
            Request: t,
          }),
        );
      return {
        parsedRequest: t.value,
        makeNotificationResponseAck: function () {
          return c(e);
        },
      };
    }
    function s(e) {
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
      var i = u(e);
      if (!i.success) return i;
      var l = m(e),
        s = p(e);
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
    function u(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "notification");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrIntRange(e, "t", 0, void 0);
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrStanzaId(e, "id");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        e,
        "offline",
        0,
        1024,
      );
      return a.success
        ? o("WAResultOrError").makeResult({
            t: n.value,
            id: r.value,
            offline: a.value,
          })
        : a;
    }
    function c(e) {
      var t = S(o("WASmaxJsx").smax("ack", null), e);
      return t;
    }
    function d(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "group");
      if (!t.success) return t;
      var n = o("WASmaxParseJid").attrGroupJid(e, "jid");
      return n.success ? o("WAResultOrError").makeResult({ jid: n.value }) : n;
    }
    function m(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "notification");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "groups");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").mapChildrenWithTag(
        n.value,
        "group",
        1,
        1e4,
        d,
      );
      return r.success
        ? o("WAResultOrError").makeResult({ groupsGroup: r.value })
        : r;
    }
    function p(e) {
      var t = g(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "NotificationAddDevicesNotification",
          value: t.value,
        });
      var n = C(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "NotificationRemoveDevicesNotification",
          value: n.value,
        });
      var r = b(e);
      return r.success
        ? o("WAResultOrError").makeResult({
            name: "NotificationUpdateDevicesNotification",
            value: r.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "AddDevicesNotification",
              "RemoveDevicesNotification",
              "UpdateDevicesNotification",
            ],
            [t, n, r],
          );
    }
    function _(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "device");
      if (!t.success) return t;
      var n = o("WASmaxParseJid").attrJidEnum(e, "jid", R);
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
    function f(e) {
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
    function g(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "notification");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "add");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optionalChildWithTag(
        n.value,
        "key-index-list",
        f,
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").attrString(n.value, "device_hash");
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        n.value,
        "device_lid_hash",
      );
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").mapChildrenWithTag(
        n.value,
        "device",
        0,
        1e3,
        _,
      );
      return l.success
        ? o("WAResultOrError").makeResult({
            addDeviceHash: a.value,
            addDeviceLidHash: i.value,
            addKeyIndexList: r.value,
            addDevice: l.value,
          })
        : l;
    }
    function h(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "device");
      if (!t.success) return t;
      var n = o("WASmaxParseJid").attrJidEnum(e, "jid", R);
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
    function y(e) {
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
    function C(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "notification");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "remove");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optionalChildWithTag(
        n.value,
        "key-index-list",
        y,
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").attrString(n.value, "device_hash");
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        n.value,
        "device_lid_hash",
      );
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").mapChildrenWithTag(
        n.value,
        "device",
        0,
        1e3,
        h,
      );
      return l.success
        ? o("WAResultOrError").makeResult({
            removeDeviceHash: a.value,
            removeDeviceLidHash: i.value,
            removeKeyIndexList: r.value,
            removeDevice: l.value,
          })
        : l;
    }
    function b(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "notification");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "update");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrString(n.value, "hash");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        n.value,
        "lid_hash",
      );
      return a.success
        ? o("WAResultOrError").makeResult({
            updateHash: r.value,
            updateLidHash: a.value,
          })
        : a;
    }
    function v(e) {
      var t = o("WASmaxParseReference").attrFromReference(
        o("WASmaxParseUtils").attrStanzaId,
        e,
        ["id"],
      );
      if (!t.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(t.error);
      var n = o("WASmaxParseReference").attrFromReference(
        o("WASmaxParseJid").attrUserJid,
        e,
        ["from"],
      );
      if (!n.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(n.error);
      var r = o("WASmaxParseReference").attrFromReference(
        o("WASmaxParseUtils").attrString,
        e,
        ["type"],
      );
      if (!r.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(r.error);
      var a = o("WASmaxJsx").smax("ack", {
        id: o("WAWap").STANZA_ID(t.value),
        to: o("WAWap").USER_JID(n.value),
        class: "notification",
        type: o("WAWap").CUSTOM_STRING(r.value),
      });
      return a;
    }
    function S(e, t) {
      var n = v(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    var R = {
      validators: [
        o("WAJids").validateDeviceJid,
        o("WAJids").validateDeviceJid,
      ],
      typeName: "DeviceJid|DeviceJid",
    };
    ((l.receiveNotificationRPC = e),
      (l.parseNotificationRequest = s),
      (l.makeNotificationResponseAck = c),
      (l.DEVICEJID_DEVICEJID = R));
  },
  98,
);
