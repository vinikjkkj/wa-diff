__d(
  "WASmaxInMessageDeliverTraceIDMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "device");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrIntRange(e, "id", 0, 999);
      return n.success ? o("WAResultOrError").makeResult({ id: n.value }) : n;
    }
    function s(t) {
      var n = o("WASmaxParseUtils").assertTag(t, "correlation_id");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(t, "id");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optionalChildWithTag(t, "device", e);
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").attrString(t, "type");
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").contentBytesRange(r.value, 1, 8);
      return l.success
        ? o("WAResultOrError").makeResult({
            type: i.value,
            idElementValue: l.value,
            device: a.value,
          })
        : l;
    }
    function u(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "edge_id");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").contentBytesRange(e, 1, 8);
      return n.success
        ? o("WAResultOrError").makeResult({ elementValue: n.value })
        : n;
    }
    function c(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "observability_flags");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrIntRange(e, "id", 0, void 0);
      return n.success ? o("WAResultOrError").makeResult({ id: n.value }) : n;
    }
    function d(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "trace");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "trace_id");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optionalChildWithTag(e, "edge_id", u);
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optionalChildWithTag(
        e,
        "observability_flags",
        c,
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").contentBytesRange(n.value, 1, 8);
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").mapChildrenWithTag(
        e,
        "correlation_id",
        0,
        10,
        s,
      );
      return l.success
        ? o("WAResultOrError").makeResult({
            traceIdElementValue: i.value,
            edgeId: r.value,
            observabilityFlags: a.value,
            correlationId: l.value,
          })
        : l;
    }
    ((l.parseTraceIDCorrelationIdDevice = e),
      (l.parseTraceIDCorrelationId = s),
      (l.parseTraceIDEdgeId = u),
      (l.parseTraceIDObservabilityFlags = c),
      (l.parseTraceIDMixin = d));
  },
  98,
);
