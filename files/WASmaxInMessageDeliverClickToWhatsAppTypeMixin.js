__d(
  "WASmaxInMessageDeliverClickToWhatsAppTypeMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "source_url");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").contentString(e);
      return n.success
        ? o("WAResultOrError").makeResult({ elementValue: n.value })
        : n;
    }
    function s(t) {
      var n = o("WASmaxParseUtils").assertTag(t, "ctwa");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optionalChildWithTag(t, "source_url", e);
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        t,
        "conversion_source",
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        t,
        "conversion_data",
      );
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        t,
        "source_type",
      );
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        t,
        "entry_point_conversion_source",
      );
      if (!s.success) return s;
      var u = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        t,
        "entry_point_conversion_app",
      );
      if (!u.success) return u;
      var c = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        t,
        "signals",
      );
      return c.success
        ? o("WAResultOrError").makeResult({
            conversionSource: a.value,
            conversionData: i.value,
            sourceType: l.value,
            entryPointConversionSource: s.value,
            entryPointConversionApp: u.value,
            signals: c.value,
            sourceUrl: r.value,
          })
        : c;
    }
    ((l.parseClickToWhatsAppTypeSourceUrl = e),
      (l.parseClickToWhatsAppTypeMixin = s));
  },
  98,
);
