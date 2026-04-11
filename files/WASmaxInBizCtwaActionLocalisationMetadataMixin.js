__d(
  "WASmaxInBizCtwaActionLocalisationMetadataMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "parameter");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(e, "name");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrString(e, "value");
      return r.success
        ? o("WAResultOrError").makeResult({ name: n.value, value: r.value })
        : r;
    }
    function s(t) {
      var n = o("WASmaxParseUtils").assertTag(t, "localisation_metadata");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrString(t, "uid");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").attrString(t, "translation_project");
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").mapChildrenWithTag(
        t,
        "parameter",
        0,
        20,
        e,
      );
      return i.success
        ? o("WAResultOrError").makeResult({
            uid: r.value,
            translationProject: a.value,
            parameter: i.value,
          })
        : i;
    }
    ((l.parseLocalisationMetadataParameter = e),
      (l.parseLocalisationMetadataMixin = s));
  },
  98,
);
