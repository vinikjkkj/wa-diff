__d(
  "WASmaxInVoipLinkCreateResponseLinkCreateAck",
  [
    "WAResultOrError",
    "WASmaxInVoipCallAckBaseMixin",
    "WASmaxInVoipEnums",
    "WASmaxParseJid",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "ack");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "link_create");
      if (!r.success) return r;
      var a = o("WASmaxParseJid").attrJidEnum(
        e,
        "from",
        o("WASmaxInVoipEnums").CALLJID_DOMAINJID,
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
        "link_create",
      );
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").attrString(r.value, "token");
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        r.value,
        "media",
        o("WASmaxInVoipEnums").ENUM_AUDIO_VIDEO,
      );
      if (!s.success) return s;
      var u = o("WASmaxParseUtils").optional(
        o("WASmaxParseJid").attrDeviceJid,
        r.value,
        "call-creator",
      );
      if (!u.success) return u;
      var c = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrCallId,
        r.value,
        "call-id",
      );
      if (!c.success) return c;
      var d = o("WASmaxInVoipCallAckBaseMixin").parseCallAckBaseMixin(e, t);
      return d.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              {
                from: a.value,
                type: i.value,
                linkCreateToken: l.value,
                linkCreateMedia: s.value,
                linkCreateCallCreator: u.value,
                linkCreateCallId: c.value,
              },
              d.value,
            ),
          )
        : d;
    }
    l.parseLinkCreateResponseLinkCreateAck = e;
  },
  98,
);
