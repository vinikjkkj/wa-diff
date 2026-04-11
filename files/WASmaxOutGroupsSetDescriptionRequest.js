__d(
  "WASmaxOutGroupsSetDescriptionRequest",
  [
    "WASmaxAttrs",
    "WASmaxChildren",
    "WASmaxJsx",
    "WASmaxOutGroupsBaseSetGroupMixin",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.bodyElementValue,
        n = o("WASmaxJsx").smax("body", null, t);
      return n;
    }
    function s(t) {
      var n = t.bodyArgs,
        r = t.descriptionId,
        a = t.descriptionPrev,
        i = t.hasDescriptionDeleteTrue,
        l = o("WASmaxOutGroupsBaseSetGroupMixin").mergeBaseSetGroupMixin(
          o("WASmaxJsx").smax(
            "iq",
            null,
            o("WASmaxJsx").smax(
              "description",
              {
                id: o("WASmaxAttrs").OPTIONAL(o("WAWap").CUSTOM_STRING, r),
                prev: o("WASmaxAttrs").OPTIONAL(o("WAWap").CUSTOM_STRING, a),
                delete: o("WASmaxAttrs").OPTIONAL_LITERAL("true", i),
              },
              o("WASmaxChildren").OPTIONAL_CHILD(e, n),
            ),
          ),
          t,
        );
      return l;
    }
    ((l.makeSetDescriptionRequestDescriptionBody = e),
      (l.makeSetDescriptionRequest = s));
  },
  98,
);
