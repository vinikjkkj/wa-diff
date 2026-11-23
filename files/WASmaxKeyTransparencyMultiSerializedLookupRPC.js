__d(
  "WASmaxKeyTransparencyMultiSerializedLookupRPC",
  [
    "WAComms",
    "WAResultOrError",
    "WASmaxAttrs",
    "WASmaxChildren",
    "WASmaxInKeyTransparencyIQResultResponseMixin",
    "WASmaxInKeyTransparencyKeyTransparencyErrorTypes",
    "WASmaxInKeyTransparencyKeyTransparencyIQErrorResponseMixin",
    "WASmaxInKeyTransparencyRootHashMixin",
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutKeyTransparencyADVOrDeviceKeyMixinGroup",
    "WASmaxOutKeyTransparencyAuditorSelectionMixin",
    "WASmaxOutKeyTransparencyKeyTransparencyGetIQMixin",
    "WASmaxOutKeyTransparencyLabelOrUserLabelLabelMixinGroup",
    "WASmaxParseUtils",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = p(e),
        r = await o("WAComms").sendSmaxStanza(n, t),
        a = c(r, n);
      if (a.success)
        return { name: "MultiSerializedLookupResponseSuccess", value: a.value };
      var i = s(r, n);
      if (i.success)
        return { name: "MultiSerializedLookupResponseError", value: i.value };
      throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
        o("WASmaxRpcUtils").errorMessageRpcParsing("MultiSerializedLookup", {
          Success: a,
          Error: i,
        }),
      );
    }
    function s(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o(
        "WASmaxInKeyTransparencyKeyTransparencyIQErrorResponseMixin",
      ).parseKeyTransparencyIQErrorResponseMixin(e, t);
      return (r.success, r);
    }
    function u(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "single_serialized_proof");
      if (!t.success) return t;
      var n = d(e);
      return n.success
        ? o("WAResultOrError").makeResult({
            singleSerializedProofSuccessOrLookupErrorMixinGroup: n.value,
          })
        : n;
    }
    function c(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o(
        "WASmaxInKeyTransparencyIQResultResponseMixin",
      ).parseIQResultResponseMixin(e, t);
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").mapChildrenWithTag(
        e,
        "single_serialized_proof",
        1,
        3,
        u,
      );
      return a.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, r.value, {
              singleSerializedProof: a.value,
            }),
          )
        : a;
    }
    function d(e) {
      var t = h(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "SingleSerializedProofSuccess",
          value: t.value,
        });
      var n = g(e);
      return n.success
        ? o("WAResultOrError").makeResult({
            name: "SingleSerializedLookupError",
            value: n.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["SingleSerializedProofSuccess", "SingleSerializedLookupError"],
            [t, n],
          );
    }
    function m(e) {
      var t = f(o("WASmaxJsx").smax("single_serialized_lookup", null), e);
      return t;
    }
    function p(e) {
      var t = e.singleSerializedLookupArgs,
        n = e.multiSerializedLookupVersion,
        r = o(
          "WASmaxOutKeyTransparencyKeyTransparencyGetIQMixin",
        ).mergeKeyTransparencyGetIQMixin(
          o("WASmaxJsx").smax(
            "iq",
            null,
            [
              o("WASmaxJsx").smax("multi_serialized_lookup", {
                version: o("WASmaxAttrs").OPTIONAL(o("WAWap").CUSTOM_STRING, n),
              }),
            ].concat(o("WASmaxChildren").REPEATED_CHILD(m, t, 1, 3)),
          ),
        );
      return r;
    }
    function _(e) {
      var t = e.hasAuditorSelection,
        n = e.labelOrUserLabelLabelMixinGroupArgs,
        r = e.aDVOrDeviceKeyMixinGroupArgs,
        a = o("WASmaxMixins").optionalMerge(
          o("WASmaxOutKeyTransparencyADVOrDeviceKeyMixinGroup")
            .mergeADVOrDeviceKeyMixinGroup,
          o(
            "WASmaxOutKeyTransparencyLabelOrUserLabelLabelMixinGroup",
          ).mergeLabelOrUserLabelLabelMixinGroup(
            o("WASmaxMixins").optionalMerge(
              o("WASmaxOutKeyTransparencyAuditorSelectionMixin")
                .mergeAuditorSelectionMixin,
              o("WASmaxJsx").smax("single_serialized_lookup", null),
              t,
            ),
            n,
          ),
          r,
        );
      return a;
    }
    function f(e, t) {
      var n = _(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function g(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "single_serialized_proof");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "error");
      if (!n.success) return n;
      var r = o(
        "WASmaxInKeyTransparencyKeyTransparencyErrorTypes",
      ).parseKeyTransparencyErrorTypes(n.value);
      return r.success
        ? o("WAResultOrError").makeResult({
            errorKeyTransparencyErrorTypes: r.value,
          })
        : r;
    }
    function h(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "single_serialized_proof");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(
        e,
        "serialized_proof",
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "root_hash");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").contentBytesRange(n.value, 0, void 0);
      if (!a.success) return a;
      var i = o("WASmaxInKeyTransparencyRootHashMixin").parseRootHashMixin(
        r.value,
      );
      return i.success
        ? o("WAResultOrError").makeResult({
            serializedProofElementValue: a.value,
            rootHashRootHashMixin: i.value,
          })
        : i;
    }
    ((l.sendMultiSerializedLookupRPC = e),
      (l.parseMultiSerializedLookupResponseError = s),
      (l.parseMultiSerializedLookupResponseSuccess = c),
      (l.makeMultiSerializedLookupRequest = p));
  },
  98,
);
