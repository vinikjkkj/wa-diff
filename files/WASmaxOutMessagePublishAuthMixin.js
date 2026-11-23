__d(
  "WASmaxOutMessagePublishAuthMixin",
  ["WASmaxAttrs", "WASmaxJsx", "WASmaxMixins", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.authVerificationTimestamp,
        n = e.authDisableIosAutofill,
        r = e.authEnableRiskCheck,
        a = o("WASmaxJsx").smax(
          "message",
          null,
          o("WASmaxJsx").smax(
            "biz",
            null,
            o("WASmaxJsx").smax("auth", {
              verification_timestamp: o("WASmaxAttrs").OPTIONAL(
                o("WAWap").INT,
                t,
              ),
              disable_ios_autofill: o("WASmaxAttrs").OPTIONAL(
                o("WAWap").CUSTOM_STRING,
                n,
              ),
              enable_risk_check: o("WASmaxAttrs").OPTIONAL(
                o("WAWap").CUSTOM_STRING,
                r,
              ),
            }),
          ),
        );
      return a;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeAuthMixin = s;
  },
  98,
);
