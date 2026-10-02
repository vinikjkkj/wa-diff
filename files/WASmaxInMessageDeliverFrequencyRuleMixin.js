__d(
  "WASmaxInMessageDeliverFrequencyRuleMixin",
  ["WAResultOrError", "WASmaxInMessageDeliverEnums", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").attrStringEnum(
        e,
        "frequency-rule",
        o("WASmaxInMessageDeliverEnums")
          .ENUM_ASPRESENTED_BIMONTHLY_DAILY_FORTNIGHTLY_HALFYEARLY_MONTHLY_ONETIME_QUARTERLY_UNKNOWN_WEEKLY_YEARLY,
      );
      return t.success
        ? o("WAResultOrError").makeResult({ frequencyRule: t.value })
        : t;
    }
    l.parseFrequencyRuleMixin = e;
  },
  98,
);
