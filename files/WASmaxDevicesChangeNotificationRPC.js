__d(
  "WASmaxDevicesChangeNotificationRPC",
  [
    "WAResultOrError",
    "WASmaxInDevicesDeviceListMixin",
    "WASmaxInDevicesICDCFromServerMixin",
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
      var t = c(e);
      if (!t.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
          o("WASmaxRpcUtils").errorMessageRpcParsing("ChangeNotification", {
            Request: t,
          }),
        );
      return {
        parsedRequest: t.value,
        makeChangeNotificationResponseAck: function () {
          return m(e);
        },
      };
    }
    function s(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "devices");
      if (!t.success) return t;
      var n = o("WASmaxInDevicesDeviceListMixin").parseDeviceListMixin(e);
      return (n.success, n);
    }
    function u(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "icdc");
      if (!t.success) return t;
      var n = o("WASmaxInDevicesICDCFromServerMixin").parseICDCFromServerMixin(
        e,
      );
      return (n.success, n);
    }
    function c(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "notification");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").optionalChildWithTag(e, "devices", s);
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optionalChildWithTag(e, "icdc", u);
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
        "fbid:devices",
      );
      if (!a.success) return a;
      var i = o("WASmaxParseJid").attrUserJid(e, "from");
      if (!i.success) return i;
      var l = d(e);
      return l.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({ type: a.value, from: i.value }, l.value, {
              devices: n.value,
              icdc: r.value,
            }),
          )
        : l;
    }
    function d(e) {
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
    function m(e) {
      var t = _(o("WASmaxJsx").smax("ack", null), e);
      return t;
    }
    function p(e) {
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
    function _(e, t) {
      var n = p(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    ((l.receiveChangeNotificationRPC = e),
      (l.parseChangeNotificationRequest = c),
      (l.makeChangeNotificationResponseAck = m));
  },
  98,
);
