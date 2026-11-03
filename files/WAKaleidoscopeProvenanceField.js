__d(
  "WAKaleidoscopeProvenanceField",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      created: "trainedAlgorithmicMedia",
      edited: "compositeWithTrainedAlgorithmicMedia",
    };
    function l(t) {
      return { kind: "iptc-digital-source-type", value: e[t] };
    }
    function s(e) {
      return e.kind + "=" + e.value;
    }
    ((i.iptcDigitalSourceType = l), (i.provenanceFieldToArg = s));
  },
  66,
);
