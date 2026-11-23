__d(
  "hasVerificationV2OnlyNode",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = "<verification-callout",
      l = [
        "<ixt-a2ui",
        "<verification-manual-handoff",
        "<verification-challenge-choices",
        e,
      ];
    function s(t) {
      return (t == null ? void 0 : t.includes(e)) === !0;
    }
    function u(e) {
      return (
        e != null &&
        l.some(function (t) {
          return e.includes(t);
        })
      );
    }
    ((i.hasVerificationCalloutNode = s), (i.hasVerificationV2OnlyNode = u));
  },
  66,
);
