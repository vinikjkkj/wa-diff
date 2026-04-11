__d(
  "WAWebAudienceResolutionBridge",
  ["WAWebSchemaLabelAssociation", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield o("WAWebSchemaLabelAssociation")
              .getLabelAssociationTable()
              .all(),
            t = new Map();
          for (var n of e)
            if (
              n.type ===
              o("WAWebSchemaLabelAssociation").LabelAssociationType.Jid
            ) {
              var r;
              t.set(n.labelId, ((r = t.get(n.labelId)) != null ? r : 0) + 1);
            }
          var a = null,
            i = 0;
          for (var l of t) {
            var s = l[0],
              u = l[1];
            u > i && ((i = u), (a = s));
          }
          return a;
        })),
        s.apply(this, arguments)
      );
    }
    l.findLargestLabelId = e;
  },
  98,
);
