__d(
  "WAWebDebugLabelAssociation",
  ["WAWebLabelJidSync", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield r("WAWebLabelJidSync").applyMutations(e);
        })),
        s.apply(this, arguments)
      );
    }
    e.doc =
      "Apply label association to the DB. This is used for testing purposes only.";
    var u = { applyLabelAssociationMutations: e };
    l.default = u;
  },
  98,
);
