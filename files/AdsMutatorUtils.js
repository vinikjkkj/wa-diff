__d(
  "AdsMutatorUtils",
  ["DeepRecordUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      e !== t &&
        e.forEach(function (e, r) {
          var a = t.get(r);
          if (!(e === a || !e || !a || !e.hasValue() || !a.hasValue())) {
            var i = e.getValueEnforcing(),
              l = a.getValueEnforcing();
            if (i !== l) {
              var s = o("DeepRecordUtils").computeChanges(i, l);
              n(r, s);
            }
          }
        });
    }
    l.applyChanges = e;
  },
  98,
);
