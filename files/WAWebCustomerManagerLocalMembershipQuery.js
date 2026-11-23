__d(
  "WAWebCustomerManagerLocalMembershipQuery",
  [
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
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = { status: "unresolved", error: null },
      u = [
        o("WAWebSyncdConst").SyncActionState.Failed,
        o("WAWebSyncdConst").SyncActionState.Orphan,
        o("WAWebSyncdConst").SyncActionState.Unsupported,
      ];
    async function c(t) {
      var n = t.candidates,
        a = t.selection;
      try {
        var i = await m();
        if (i == null) return s;
        if (n.length === 0)
          return { status: "ready", contactIds: [], version: i };
        var l = _(n);
        if (l == null) return s;
        var u = await o("WAWebModelStorageUtils")
            .getStorage()
            .lock(["label", "label-association"], function () {
              return d(l, a);
            }),
          c = await m();
        if (u == null || c == null || c !== i) return s;
        var p = l.ids.filter(function (e) {
          return a.kind === "list" ? u.has(e) : !u.has(e);
        });
        return { status: "ready", contactIds: p, version: c };
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
    }
    async function d(e, t) {
      var n = f(await o("WAWebSchemaLabel").getLabelTable().all());
      if (n == null) return null;
      var r = g(n, t),
        a = new Set();
      if (r.length > 0) {
        var i = await Promise.all(
          r.map(function (e) {
            return o("WAWebSchemaLabelAssociation")
              .getLabelAssociationTable()
              .equals(["labelId"], e);
          }),
        );
        for (var l of i.flat())
          if (
            l.type === o("WAWebSchemaLabelAssociation").LabelAssociationType.Jid
          ) {
            var s = e.ownersByAlias.get(
              o("WAWebWidFactory").createWid(l.associationId).toString(),
            );
            s != null && a.add(s);
          }
      }
      return a;
    }
    async function m() {
      var e = await Promise.all([
          o("WAWebGetCollectionVersion").getCollectionVersionInTransaction(
            o("WAWebSyncdConst").CollectionName.Regular,
          ),
          o("WAWebGetSyncAction").getSyncActionsByActionStatesInTransaction(u),
        ]),
        t = e[0],
        n = e[1],
        r = t == null ? void 0 : t.version;
      return r == null ||
        !Number.isSafeInteger(r) ||
        r < 0 ||
        (t == null ? void 0 : t.state) !==
          o("WAWebSyncdConst").CollectionSyncState.UpToDate ||
        (t == null ? void 0 : t.isCollectionInMacMismatchFatal) === !0 ||
        n.some(p)
        ? null
        : r;
    }
    function p(e) {
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
    function _(e) {
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
    function f(e) {
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
    function g(e, t) {
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
    l.queryCustomerManagerLocalMembership = c;
  },
  98,
);
