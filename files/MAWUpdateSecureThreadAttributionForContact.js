__d(
  "MAWUpdateSecureThreadAttributionForContact",
  [
    "I64",
    "LSContactListConversionAttributionStore",
    "LSThreadAttributionStore",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e, t) {
      (c(e, t), u(e, t));
    }
    function u(t, n) {
      var r = o("LSContactListConversionAttributionStore").getAttribution(
        (e || (e = o("I64"))).to_string(t),
      );
      r != null &&
        o("LSContactListConversionAttributionStore").setAttribution(
          (e || (e = o("I64"))).to_string(n),
          r,
        );
    }
    function c(t, n) {
      var r = o("LSThreadAttributionStore").getSourceWithoutReset(
        void 0,
        (e || (e = o("I64"))).to_string(t),
      );
      r.value !== "unknown" &&
        (r.type === "LSThreadAttribution"
          ? o("LSThreadAttributionStore").setLSMessagingThreadAttribution(
              (e || (e = o("I64"))).to_string(n),
              e.to_string(r.value),
            )
          : o("LSThreadAttributionStore").setSource(
              (e || (e = o("I64"))).to_string(n),
              r.value,
            ));
    }
    l.maybeUpdateSecureThreadAttributionForContact = s;
  },
  98,
);
