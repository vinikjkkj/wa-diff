__d(
  "WAWebCustomerManagerImportLeadStageLookup",
  [
    "WALogger",
    "WAWebApiContact",
    "WAWebJidToWid",
    "WAWebLeadListConstants",
    "WAWebLeadStage",
    "WAWebSchemaChat",
    "WAWebSchemaLabel",
    "WAWebSchemaLabelAssociation",
    "WAWebSchemaLabelSublist",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s(e) {
      var t = new Map(
        e.map(function (e) {
          return [e, { isResolved: !0, stage: null }];
        }),
      );
      if (e.length === 0) return t;
      var n = (await o("WAWebSchemaLabel").getLabelTable().all())
        .filter(function (e) {
          return o("WAWebLeadListConstants").isLeadListPredefinedId(
            e.predefinedId,
          );
        })
        .map(function (e) {
          return e.id;
        });
      if (n.length === 0) return t;
      var r = new Set(e),
        a = u(e.map(o("WAWebJidToWid").lidUserJidToUserLid)),
        i = Array.from(a.keys()),
        l = await Promise.all([
          o("WAWebSchemaLabelAssociation")
            .getLabelAssociationTable()
            .anyOf(["labelId"], n),
          o("WAWebSchemaLabelSublist")
            .getLabelSublistTable()
            .anyOf(
              ["predefinedId"],
              [o("WAWebLeadListConstants").LEAD_LIST_PREDEFINED_ID],
            ),
          o("WAWebSchemaChat")
            .getChatTable()
            .anyOf(["accountLid"], Array.from(r)),
          o("WAWebSchemaChat").getChatTable().bulkGet(i),
        ]),
        s = l[0],
        f = l[1],
        g = l[2],
        h = l[3],
        y = c([].concat(g, h)),
        C = m(s, y, r),
        b = p(f, y, C),
        v = d(s, y, a),
        S = _(f, y, a);
      for (var R of e) {
        if (!C.has(R)) {
          v.has(R) && t.set(R, { isResolved: !1, stage: null });
          continue;
        }
        var L = b.get(R);
        t.set(
          R,
          L != null
            ? L
            : S.has(R)
              ? { isResolved: !1, stage: null }
              : {
                  isResolved: !0,
                  stage: o("WAWebLeadStage").LeadStage.NEW_LEAD,
                },
        );
      }
      return t;
    }
    function u(e) {
      var t = new Map();
      for (var n of e) {
        var r = o("WAWebApiContact").getPnIfLidIsLatestMapping(n);
        r != null && t.set(r.toString(), n.toString());
      }
      return t;
    }
    function c(e) {
      var t = new Map();
      for (var n of e)
        n != null && n.accountLid != null && t.set(n.id, n.accountLid);
      return t;
    }
    function d(e, t, n) {
      var r = new Set();
      for (var a of e)
        if (
          a.type === o("WAWebSchemaLabelAssociation").LabelAssociationType.Jid
        ) {
          var i = n.get(a.associationId);
          i != null && !t.has(a.associationId) && r.add(i);
        }
      return r;
    }
    function m(e, t, n) {
      var r = new Set();
      for (var a of e)
        if (
          a.type === o("WAWebSchemaLabelAssociation").LabelAssociationType.Jid
        ) {
          var i = f(a.associationId, t, n);
          i != null && r.add(i);
        }
      return r;
    }
    function p(t, n, r) {
      var a = new Map(),
        i = 0;
      for (var l of t) {
        var s = f(l.chatJid, n, r);
        if (s != null) {
          var u = o("WAWebLeadStage").getLeadStageFromNumber(l.subListId);
          if (u == null) {
            i += 1;
            continue;
          }
          var c = l.chatJid === s ? 2 : 1,
            d = a.get(s);
          (d == null || c > d.priority) && a.set(s, { priority: c, stage: u });
        }
      }
      i > 0 &&
        o("WALogger")
          .WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[cm:import] ignored ",
                " invalid persisted Lead stage rows",
              ])),
            i,
          )
          .sendLogs("cm-import-invalid-local-lead-stage");
      var m = new Map();
      for (var p of a) {
        var _ = p[0],
          g = p[1].stage;
        m.set(_, { isResolved: !0, stage: g });
      }
      return m;
    }
    function _(e, t, n) {
      var r = new Set();
      for (var a of e)
        if (
          !(
            o("WAWebLeadStage").getLeadStageFromNumber(a.subListId) == null ||
            t.has(a.chatJid)
          )
        ) {
          var i = n.get(a.chatJid);
          i != null && r.add(i);
        }
      return r;
    }
    function f(e, t, n) {
      var r,
        o = (r = t.get(e)) != null ? r : e;
      return n.has(o) ? o : null;
    }
    l.readCustomerManagerImportLeadStages = s;
  },
  98,
);
