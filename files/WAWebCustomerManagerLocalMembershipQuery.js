__d(
  "WAWebCustomerManagerLocalMembershipQuery",
  [
    "Promise",
    "WALogger",
    "WAWebCTWAConstants",
    "WAWebDetectedOutcomeLabelConstants",
    "WAWebGetCollectionVersion",
    "WAWebGetSyncAction",
    "WAWebLeadListConstants",
    "WAWebModelStorageUtils",
    "WAWebSchemaLabel",
    "WAWebSchemaLabelAssociation",
    "WAWebSyncdActionUtils",
    "WAWebSyncdConst",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = { status: "unresolved", error: null },
      c = [
        o("WAWebSyncdConst").SyncActionState.Failed,
        o("WAWebSyncdConst").SyncActionState.Orphan,
        o("WAWebSyncdConst").SyncActionState.Unsupported,
      ];
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.candidates,
            a = t.selection;
          try {
            var i = yield f();
            if (i == null) return u;
            if (n.length === 0)
              return { status: "ready", contactIds: [], version: i };
            var l = y(n);
            if (l == null) return u;
            var s = yield o("WAWebModelStorageUtils")
                .getStorage()
                .lock(["label", "label-association"], function () {
                  return p(l, a);
                }),
              c = yield f();
            if (s == null || c == null || c !== i) return u;
            var d = l.ids.filter(function (e) {
              return a.kind === "list" ? s.has(e) : !s.has(e);
            });
            return { status: "ready", contactIds: d, version: c };
          } catch (t) {
            return (
              o("WALogger")
                .WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[CustomerManager] local membership read failed",
                    ])),
                )
                .sendLogs("customer_manager_local_membership_read_failed"),
              { status: "unresolved", error: r("getErrorSafe")(t) }
            );
          }
        })),
        m.apply(this, arguments)
      );
    }
    function p(e, t) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var r = C(yield o("WAWebSchemaLabel").getLabelTable().all());
          if (r == null) return null;
          var a = b(r, t),
            i = new Set();
          if (a.length > 0) {
            var l = yield (s || (s = n("Promise"))).all(
              a.map(function (e) {
                return o("WAWebSchemaLabelAssociation")
                  .getLabelAssociationTable()
                  .equals(["labelId"], e);
              }),
            );
            for (var u of l.flat())
              if (
                u.type ===
                o("WAWebSchemaLabelAssociation").LabelAssociationType.Jid
              ) {
                var c = e.ownersByAlias.get(
                  o("WAWebWidFactory").createWid(u.associationId).toString(),
                );
                c != null && i.add(c);
              }
          }
          return i;
        })),
        _.apply(this, arguments)
      );
    }
    function f() {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield (s || (s = n("Promise"))).all([
              o("WAWebGetCollectionVersion").getCollectionVersionInTransaction(
                o("WAWebSyncdConst").CollectionName.Regular,
              ),
              o("WAWebGetSyncAction").getSyncActionsByActionStatesInTransaction(
                c,
              ),
            ]),
            t = e[0],
            r = e[1],
            a = t == null ? void 0 : t.version;
          return a == null ||
            !Number.isSafeInteger(a) ||
            a < 0 ||
            (t == null ? void 0 : t.state) !==
              o("WAWebSyncdConst").CollectionSyncState.UpToDate ||
            (t == null ? void 0 : t.isCollectionInMacMismatchFatal) === !0 ||
            r.some(h)
            ? null
            : a;
        })),
        g.apply(this, arguments)
      );
    }
    function h(e) {
      if (e.collection !== o("WAWebSyncdConst").CollectionName.Regular)
        return !1;
      var t = e.action;
      if (t == null) {
        var n = o("WAWebSyncdActionUtils").getMutationNameFromIndex(
          e.collection,
          e.index,
        );
        t = n == null ? null : o("WAWebSyncdConst").Actions.cast(n);
      }
      return (
        t == null ||
        t === o("WAWebSyncdConst").Actions.LabelEdit ||
        t === o("WAWebSyncdConst").Actions.LabelJid
      );
    }
    function y(e) {
      var t = new Map(),
        n = new Set();
      for (var r of e) {
        var a = r.aliases,
          i = r.id;
        n.add(i);
        for (var l of [i].concat(a)) {
          var s = o("WAWebWidFactory").createWid(l);
          if (!s.isRegularUser()) return null;
          var u = s.toString(),
            c = t.get(u);
          if (c != null && c !== i) return null;
          t.set(u, i);
        }
      }
      return { ids: Array.from(n), ownersByAlias: t };
    }
    function C(e) {
      var t = new Map(),
        n = new Map();
      for (var r of e)
        if (
          !(
            r.type === o("WAWebSchemaLabel").ListType.SERVER_ASSIGNED ||
            r.predefinedId ===
              o("WAWebLeadListConstants").LEGACY_LEAD_LIST_PREDEFINED_ID
          )
        ) {
          t.set(r.id, r.id);
          var a = r.predefinedId;
          if (
            a === o("WAWebCTWAConstants").NEW_ORDER_PREDEFINED_ID ||
            a === o("WAWebLeadListConstants").LEAD_LIST_PREDEFINED_ID
          ) {
            if (n.has(a)) return null;
            n.set(a, r.id);
          }
        }
      for (var i of e)
        if (i.type === o("WAWebSchemaLabel").ListType.SERVER_ASSIGNED) {
          var l =
              i.predefinedId ===
              o("WAWebDetectedOutcomeLabelConstants").DO_NEW_ORDER_PREDEFINED_ID
                ? o("WAWebCTWAConstants").NEW_ORDER_PREDEFINED_ID
                : i.predefinedId ===
                    o("WAWebDetectedOutcomeLabelConstants")
                      .DO_LEAD_PREDEFINED_ID
                  ? o("WAWebLeadListConstants").LEAD_LIST_PREDEFINED_ID
                  : null,
            s = l == null ? null : n.get(l);
          s != null && t.set(i.id, s);
        }
      return {
        byRawId: t,
        leadId: n.get(o("WAWebLeadListConstants").LEAD_LIST_PREDEFINED_ID),
      };
    }
    function b(e, t) {
      var n = e.byRawId,
        r = e.leadId;
      return Array.from(n).flatMap(function (e) {
        var n = e[0],
          o = e[1],
          a = (function (e) {
            if (
              ((typeof e == "object" && e !== null) ||
                typeof e == "function") &&
              e.kind === "list" &&
              "labelId" in e
            ) {
              var t = e.labelId;
              return o === t;
            }
            if (
              ((typeof e == "object" && e !== null) ||
                typeof e == "function") &&
              e.kind === "none"
            )
              return !0;
            if (
              ((typeof e == "object" && e !== null) ||
                typeof e == "function") &&
              e.kind === "no_other"
            )
              return o !== r;
            throw Error(
              "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                e,
            );
          })(t);
        return a ? [n] : [];
      });
    }
    l.queryCustomerManagerLocalMembership = d;
  },
  98,
);
