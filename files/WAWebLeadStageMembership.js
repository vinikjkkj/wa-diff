__d(
  "WAWebLeadStageMembership",
  [
    "WAWebApiContact",
    "WAWebDBLabelSublistDatabaseApi",
    "WAWebLeadListConstants",
    "WAWebLeadStage",
    "WAWebWid",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t = new Map();
      for (var n of await o(
        "WAWebDBLabelSublistDatabaseApi",
      ).getAllLabelSublist())
        if (
          n.predefinedId === o("WAWebLeadListConstants").LEAD_LIST_PREDEFINED_ID
        ) {
          var r = o("WAWebLeadStage").getLeadStageFromNumber(n.subListId);
          r != null && t.set(n.chatJid, r);
        }
      var a = new Map(),
        i = new Map();
      for (var l of e) {
        var u,
          c,
          d,
          m = s(l),
          p =
            (u = (c = a.get(l)) != null ? c : m != null ? a.get(m) : null) !=
            null
              ? u
              : l;
        (a.set(l, p), m != null && a.set(m, p));
        var _ = (d = t.get(l)) != null ? d : m != null ? t.get(m) : null,
          f = i.get(p);
        (f == null || (f.stage == null && _ != null)) &&
          i.set(p, { jid: l, stage: _ });
      }
      var g = new Map(
        o("WAWebLeadStage").ALL_LEAD_STAGES.map(function (e) {
          return [e, []];
        }),
      );
      for (var h of i.values()) {
        var y,
          C = h.jid,
          b = h.stage;
        (y = g.get(o("WAWebLeadStage").getLeadStageForGrouping(b))) == null ||
          y.push(C);
      }
      return g;
    }
    function s(e) {
      var t;
      if (!r("WAWebWid").isWid(e)) return null;
      var n = o("WAWebWidFactory").createWid(e);
      return n.isUser()
        ? (t = o("WAWebApiContact").getAlternateUserWid(
            o("WAWebWidFactory").asUserWidOrThrow(n),
          )) == null
          ? void 0
          : t.toString()
        : null;
    }
    ((l.getLeadStageMembership = e), (l.alternateSpelling = s));
  },
  98,
);
