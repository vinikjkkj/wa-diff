__d(
  "WASmaxOutMessagePublishClickToWhatsAppTypeMixin",
  ["WASmaxAttrs", "WASmaxChildren", "WASmaxJsx", "WASmaxMixins", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.sourceUrlElementValue,
        n = o("WASmaxJsx").smax("source_url", null, t);
      return n;
    }
    function s(t) {
      var n,
        r,
        a = t.sourceUrlArgs,
        i = t.ctwaConversionSource,
        l = t.ctwaConversionData,
        s = t.ctwaSourceType,
        u = t.ctwaEntryPointConversionSource,
        c = t.ctwaEntryPointConversionApp,
        d = t.ctwaSignals,
        m = o("WASmaxJsx").smax(
          "ctwa",
          {
            conversion_source: (n = o("WASmaxAttrs")).OPTIONAL(
              (r = o("WAWap")).CUSTOM_STRING,
              i,
            ),
            conversion_data: n.OPTIONAL(r.CUSTOM_STRING, l),
            source_type: n.OPTIONAL(r.CUSTOM_STRING, s),
            entry_point_conversion_source: n.OPTIONAL(r.CUSTOM_STRING, u),
            entry_point_conversion_app: n.OPTIONAL(r.CUSTOM_STRING, c),
            signals: n.OPTIONAL(r.CUSTOM_STRING, d),
          },
          o("WASmaxChildren").OPTIONAL_CHILD(e, a),
        );
      return m;
    }
    function u(e, t) {
      var n = s(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    ((l.makeClickToWhatsAppTypeSourceUrl = e),
      (l.mergeClickToWhatsAppTypeMixin = u));
  },
  98,
);
