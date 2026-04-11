__d(
  "WASmaxInMdCompanionHelloResponseNotifyCompanion",
  ["WAResultOrError", "WASmaxInMdIQResultResponseMixin", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(
        e,
        "link_code_companion_reg",
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").flattenedChildWithTag(
        r.value,
        "link_code_pairing_ref",
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        r.value,
        "stage",
        "companion_hello",
      );
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").contentBytes(a.value);
      if (!l.success) return l;
      var s = o("WASmaxInMdIQResultResponseMixin").parseIQResultResponseMixin(
        e,
        t,
      );
      return s.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              {
                linkCodeCompanionRegStage: i.value,
                linkCodeCompanionRegLinkCodePairingRefElementValue: l.value,
              },
              s.value,
            ),
          )
        : s;
    }
    l.parseCompanionHelloResponseNotifyCompanion = e;
  },
  98,
);
