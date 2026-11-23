__d(
  "WASmaxOutMessagePublishQualityControlMixin",
  ["WASmaxAttrs", "WASmaxChildren", "WASmaxJsx", "WASmaxMixins", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.decisionSourceValue,
        n = o("WASmaxJsx").smax("decision_source", {
          value: o("WAWap").CUSTOM_STRING(t),
        });
      return n;
    }
    function s(t) {
      var n = t.decisionSourceArgs,
        r = t.qualityControlSourceType,
        a = t.qualityControlDecisionId,
        i = o("WASmaxJsx").smax(
          "message",
          null,
          o("WASmaxJsx").smax(
            "biz",
            null,
            o("WASmaxJsx").smax(
              "quality_control",
              {
                source_type: o("WASmaxAttrs").OPTIONAL(
                  o("WAWap").CUSTOM_STRING,
                  r,
                ),
                decision_id: o("WASmaxAttrs").OPTIONAL(
                  o("WAWap").CUSTOM_STRING,
                  a,
                ),
              },
              o("WASmaxChildren").REPEATED_CHILD(e, n, 0, 1 / 0),
            ),
          ),
        );
      return i;
    }
    function u(e, t) {
      var n = s(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    ((l.makeQualityControlBizQualityControlDecisionSource = e),
      (l.mergeQualityControlMixin = u));
  },
  98,
);
