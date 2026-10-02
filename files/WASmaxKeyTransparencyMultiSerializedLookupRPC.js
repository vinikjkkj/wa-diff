__d(
  "WASmaxKeyTransparencyMultiSerializedLookupRPC",
  [
    "WAComms",
    "WASmaxInKeyTransparencyMultiSerializedLookupResponseError",
    "WASmaxInKeyTransparencyMultiSerializedLookupResponseSuccess",
    "WASmaxOutKeyTransparencyMultiSerializedLookupRequest",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = o(
              "WASmaxOutKeyTransparencyMultiSerializedLookupRequest",
            ).makeMultiSerializedLookupRequest(e),
            r = yield o("WAComms").sendSmaxStanza(n, t),
            a = o(
              "WASmaxInKeyTransparencyMultiSerializedLookupResponseSuccess",
            ).parseMultiSerializedLookupResponseSuccess(r, n);
          if (a.success)
            return {
              name: "MultiSerializedLookupResponseSuccess",
              value: a.value,
            };
          var i = o(
            "WASmaxInKeyTransparencyMultiSerializedLookupResponseError",
          ).parseMultiSerializedLookupResponseError(r, n);
          if (i.success)
            return {
              name: "MultiSerializedLookupResponseError",
              value: i.value,
            };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing(
              "MultiSerializedLookup",
              { Success: a, Error: i },
            ),
          );
        })),
        s.apply(this, arguments)
      );
    }
    l.sendMultiSerializedLookupRPC = e;
  },
  98,
);
