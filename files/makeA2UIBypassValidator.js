__d(
  "makeA2UIBypassValidator",
  ["Promise"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e;
    function l() {
      return {
        inputKind: "scalar",
        trigger: { kind: "change" },
        validate: function () {
          return (e || (e = n("Promise"))).resolve({ kind: "valid" });
        },
      };
    }
    i.default = l;
  },
  66,
);
