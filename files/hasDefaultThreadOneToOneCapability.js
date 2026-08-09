__d(
  "hasDefaultThreadOneToOneCapability",
  [
    "FBLogger",
    "LSContactBitOffset",
    "MAWDefaultE2eeOneToOneEligibility",
    "MWGetOtherContactOrSelf",
    "ReQL",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (e == null) return !1;
          var n = yield o("ReQL").firstExnAsync(
              o("ReQL")
                .fromTableAscending(t.tables._user_info)
                .map(function (e) {
                  return e.facebookUserId;
                }),
            ),
            a = yield o("ReQL").firstAsync(
              o("ReQL").fromTableAscending(t.tables.contacts).getKeyRange(n),
            );
          if (a == null)
            return (
              r("FBLogger")("messenger_search").warn(
                "Error fetching viewer details",
              ),
              !1
            );
          var i = o("LSContactBitOffset").has(80, a);
          if (!i) return !1;
          var l = yield o("ReQL").firstAsync(
              o("ReQL").fromTableAscending(t.tables.contacts).getKeyRange(e),
            ),
            s = yield o("MWGetOtherContactOrSelf").getOtherContactOrSelf(
              e,
              n,
              t,
            ),
            u = s != null ? s : l;
          return o(
            "MAWDefaultE2eeOneToOneEligibility",
          ).isContactDefaultE2eeOneToOneEligible({ maybeContact: u });
        })),
        s.apply(this, arguments)
      );
    }
    l.default = e;
  },
  98,
);
