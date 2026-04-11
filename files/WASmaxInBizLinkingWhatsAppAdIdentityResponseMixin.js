__d(
  "WASmaxInBizLinkingWhatsAppAdIdentityResponseMixin",
  ["WAResultOrError", "WASmaxInBizLinkingAdStatusMixin", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "whatsapp_ad_identity");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(e, "id");
      if (!n.success) return n;
      var r = o("WASmaxInBizLinkingAdStatusMixin").parseAdStatusMixin(e);
      return r.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({ id: n.value }, r.value),
          )
        : r;
    }
    l.parseWhatsAppAdIdentityResponseMixin = e;
  },
  98,
);
