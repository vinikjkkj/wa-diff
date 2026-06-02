__d(
  "WAWebDebugLabelAssociation",
  ["WAWebLabelJidSync"],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      await r("WAWebLabelJidSync").applyMutations(e);
    }
    e.doc =
      "Apply label association to the DB. This is used for testing purposes only.";
    var s = { applyLabelAssociationMutations: e };
    l.default = s;
  },
  98,
);
