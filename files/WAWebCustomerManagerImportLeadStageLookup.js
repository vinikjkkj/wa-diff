__d(
  "WAWebCustomerManagerImportLeadStageLookup",
  [
    "Promise",
    "WALogger",
    "WAWebApiContact",
    "WAWebJidToWid",
    "WAWebLeadListConstants",
    "WAWebLeadStage",
    "WAWebSchemaChat",
    "WAWebSchemaLabel",
    "WAWebSchemaLabelAssociation",
    "WAWebSchemaLabelSublist",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = new Map(
            e.map(function (e) {
              return [e, { isResolved: !0, stage: null }];
            }),
          );
          if (e.length === 0) return t;
          var r = (yield o("WAWebSchemaLabel").getLabelTable().all())
            .filter(function (e) {
              return o("WAWebLeadListConstants").isLeadListPredefinedId(
                e.predefinedId,
              );
            })
            .map(function (e) {
              return e.id;
            });
          if (r.length === 0) return t;
          var a = new Set(e),
            i = d(e.map(o("WAWebJidToWid").lidUserJidToUserLid)),
            l = Array.from(i.keys()),
            u = yield (s || (s = n("Promise"))).all([
              o("WAWebSchemaLabelAssociation")
                .getLabelAssociationTable()
                .anyOf(["labelId"], r),
              o("WAWebSchemaLabelSublist")
                .getLabelSublistTable()
                .anyOf(
                  ["predefinedId"],
                  [o("WAWebLeadListConstants").LEAD_LIST_PREDEFINED_ID],
                ),
              o("WAWebSchemaChat")
                .getChatTable()
                .anyOf(["accountLid"], Array.from(a)),
              o("WAWebSchemaChat").getChatTable().bulkGet(l),
            ]),
            c = u[0],
            h = u[1],
            y = u[2],
            C = u[3],
            b = m([].concat(y, C)),
            v = _(c, b, a),
            S = f(h, b, v),
            R = p(c, b, i),
            L = g(h, b, i);
          for (var E of e) {
            if (!v.has(E)) {
              R.has(E) && t.set(E, { isResolved: !1, stage: null });
              continue;
            }
            var k = S.get(E);
            t.set(
              E,
              k != null
                ? k
                : L.has(E)
                  ? { isResolved: !1, stage: null }
                  : {
                      isResolved: !0,
                      stage: o("WAWebLeadStage").LeadStage.LEAD,
                    },
            );
          }
          return t;
        })),
        c.apply(this, arguments)
      );
    }
    function d(e) {
      var t = new Map();
      for (var n of e) {
        var r = o("WAWebApiContact").getPnIfLidIsLatestMapping(n);
        r != null && t.set(r.toString(), n.toString());
      }
      return t;
    }
    function m(e) {
      var t = new Map();
      for (var n of e)
        n != null && n.accountLid != null && t.set(n.id, n.accountLid);
      return t;
    }
    function p(e, t, n) {
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
    function _(e, t, n) {
      var r = new Set();
      for (var a of e)
        if (
          a.type === o("WAWebSchemaLabelAssociation").LabelAssociationType.Jid
        ) {
          var i = h(a.associationId, t, n);
          i != null && r.add(i);
        }
      return r;
    }
    function f(t, n, r) {
      var a = new Map(),
        i = 0;
      for (var l of t) {
        var s = h(l.chatJid, n, r);
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
          f = p[1].stage;
        m.set(_, { isResolved: !0, stage: f });
      }
      return m;
    }
    function g(e, t, n) {
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
    function h(e, t, n) {
      var r,
        o = (r = t.get(e)) != null ? r : e;
      return n.has(o) ? o : null;
    }
    l.readCustomerManagerImportLeadStages = u;
  },
  98,
);
