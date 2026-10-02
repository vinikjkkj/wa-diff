__d(
  "WASmaxInReceiptRoiTemplateSourceMixin",
  ["WAResultOrError", "WASmaxInReceiptEnums", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "biz");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrStringEnum(
        e,
        "source",
        o("WASmaxInReceiptEnums")
          .ENUM_BODYLINK_CTAAPP_CTACALL_CTAURL_MEDIADOC_MEDIAIMAGE_MEDIAVIDEO_QUICKREPLY,
      );
      return n.success
        ? o("WAResultOrError").makeResult({ source: n.value })
        : n;
    }
    l.parseRoiTemplateSourceMixin = e;
  },
  98,
);
