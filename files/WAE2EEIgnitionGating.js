__d(
  "WAE2EEIgnitionGating",
  ["EBMinosServerOriginGating", "gkx", "justknobx", "qex"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return r("gkx")("24438");
    }
    function s() {
      var e;
      return (e = r("qex")._("4516")) != null ? e : !1;
    }
    function u() {
      var e;
      return (e = r("qex")._("546")) != null ? e : !1;
    }
    function c() {
      return (
        o("EBMinosServerOriginGating").isServerOriginAdminMessageEnabled() &&
        r("justknobx")._("6063")
      );
    }
    function d() {
      return (
        o("EBMinosServerOriginGating").isServerOriginPaymentsXmaEnabled() &&
        r("justknobx")._("7137")
      );
    }
    ((l.isE2EEIgnitionSyncEnabled = e),
      (l.isWaiMpsWriteSuppressed = s),
      (l.isE2EEIgnitionResnapshotEnabled = u),
      (l.isE2EEIgnitionAdminCompareEnabled = c),
      (l.isE2EEIgnitionPaymentCompareEnabled = d));
  },
  98,
);
