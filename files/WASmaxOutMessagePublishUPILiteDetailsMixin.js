__d(
  "WASmaxOutMessagePublishUPILiteDetailsMixin",
  ["WASmaxJsx", "WASmaxMixins", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t,
        n = e.upiLiteDetailsLiteReferenceNumber,
        r = e.upiLiteDetailsLiteArqc,
        a = e.upiLiteDetailsLiteTimestamp,
        i = e.upiLiteDetailsLitePurpose,
        l = o("WASmaxJsx").smax("upi_lite_details", {
          lite_reference_number: (t = o("WAWap")).CUSTOM_STRING(n),
          lite_arqc: t.CUSTOM_STRING(r),
          lite_timestamp: t.INT(a),
          lite_purpose: t.CUSTOM_STRING(i),
        });
      return l;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeUPILiteDetailsMixin = s;
  },
  98,
);
