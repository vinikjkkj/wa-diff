__d(
  "WASmaxInStatusDeliverEncMediaTypeMixin",
  [
    "WAResultOrError",
    "WASmaxInStatusDeliverAvatarStickerTypeMixin",
    "WASmaxInStatusDeliverEnums",
    "WASmaxInStatusDeliverMediaTypeMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "enc");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        e,
        "native_flow_name",
        o("WASmaxInStatusDeliverEnums")
          .ENUM_ACCOUNTAUTHENTICATIONREQUEST_ADDRESSMESSAGE_APISIGNUP_CALLPERMISSIONREQUEST_FORMMESSAGE_GALAXYMESSAGE_MENUOPTIONS,
      );
      if (!n.success) return n;
      var r = o("WASmaxInStatusDeliverMediaTypeMixin").parseMediaTypeMixin(e);
      if (!r.success) return r;
      var a = o(
        "WASmaxInStatusDeliverAvatarStickerTypeMixin",
      ).parseAvatarStickerTypeMixin(e);
      return o("WAResultOrError").makeResult(
        babelHelpers.extends({ nativeFlowName: n.value }, r.value, {
          avatarStickerTypeMixin: a.success ? a.value : null,
        }),
      );
    }
    l.parseEncMediaTypeMixin = e;
  },
  98,
);
