__d(
  "WASmaxOutMessagePublishCapabilitiesMixin",
  ["WASmaxAttrs", "WASmaxChildren", "WASmaxJsx", "WASmaxMixins"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.hasFeatureV1,
        n = o("WASmaxJsx").smax("feature", {
          name: "full_catalog",
          v: o("WASmaxAttrs").OPTIONAL_LITERAL("1", t),
        });
      return n;
    }
    function s(t) {
      var n = t.featureArgs,
        r = o("WASmaxJsx").smax(
          "hsm",
          null,
          o("WASmaxJsx").smax(
            "capabilities",
            null,
            o("WASmaxChildren").OPTIONAL_CHILD(e, n),
          ),
        );
      return r;
    }
    function u(e, t) {
      var n = s(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    ((l.makeCapabilitiesCapabilitiesFeature = e),
      (l.mergeCapabilitiesMixin = u));
  },
  98,
);
