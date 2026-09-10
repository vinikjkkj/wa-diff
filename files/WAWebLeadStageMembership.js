__d(
  "WAWebLeadStageMembership",
  [
    "WAWebDBLabelSublistDatabaseApi",
    "WAWebLeadListConstants",
    "WAWebLeadStage",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield o(
              "WAWebDBLabelSublistDatabaseApi",
            ).getAllLabelSublist(),
            t = new Map();
          for (var n of e) {
            var r;
            if (
              n.predefinedId ===
              o("WAWebLeadListConstants").LEAD_LIST_PREDEFINED_ID
            ) {
              var a = o("WAWebLeadStage").getLeadStageFromNumber(n.subListId);
              if (a != null) {
                var i = (r = t.get(a)) != null ? r : [];
                (i.push(n.chatJid), t.set(a, i));
              }
            }
          }
          for (var l of o("WAWebLeadStage").ALL_LEAD_STAGES)
            t.has(l) || t.set(l, []);
          return t;
        })),
        s.apply(this, arguments)
      );
    }
    l.getLeadStageMembership = e;
  },
  98,
);
