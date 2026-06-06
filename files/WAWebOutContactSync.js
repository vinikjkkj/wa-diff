__d(
  "WAWebOutContactSync",
  [
    "WAJids",
    "WALogger",
    "WASyncdConst",
    "WAWebBackendApi",
    "WAWebDBOutContactDatabaseApi",
    "WAWebSyncdAction",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = (function (t) {
        function n() {
          for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.collectionName = o("WASyncdConst").CollectionName.RegularLow),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var r = n.prototype;
        return (
          (r.getVersion = function () {
            return 1;
          }),
          (r.getAction = function () {
            return o("WASyncdConst").Actions.OutContact;
          }),
          (r.applyMutations = async function (n) {
            var t = 0,
              r = [],
              a = [],
              i = [];
            for (var l of n) {
              var d = l.indexParts[1];
              if (d == null) {
                (t++,
                  i.push({
                    actionState: o("WASyncdConst").SyncActionState.Skipped,
                  }));
                continue;
              }
              var _ = o("WAJids").interpretAndValidateJid(d);
              if (_.jidType !== "phoneUser") {
                (o("WALogger").ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "OutContactSync: JID missing expected domain: ",
                      "",
                    ])),
                  d,
                ),
                  t++,
                  i.push({
                    actionState: o("WASyncdConst").SyncActionState.Skipped,
                  }));
                continue;
              }
              var f = _.userJid;
              if (l.operation === "set") {
                var g,
                  h = l.value.outContactAction;
                if (h == null) {
                  (t++,
                    i.push({
                      actionState: o("WASyncdConst").SyncActionState.Skipped,
                    }));
                  continue;
                }
                var y = m(h.fullName),
                  C = (g = m(h.firstName)) != null ? g : p(y);
                (r.push({ id: f, fullName: y, firstName: C }),
                  o("WALogger").LOG(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "OutContactSync: set ",
                        "",
                      ])),
                    d,
                  ),
                  i.push({
                    actionState: o("WASyncdConst").SyncActionState.Success,
                  }));
              } else
                l.operation === "remove"
                  ? (a.push(f),
                    o("WALogger").LOG(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "OutContactSync: remove ",
                          "",
                        ])),
                      d,
                    ),
                    i.push({
                      actionState: o("WASyncdConst").SyncActionState.Success,
                    }))
                  : (t++,
                    i.push({
                      actionState: o("WASyncdConst").SyncActionState.Skipped,
                    }));
            }
            return (
              r.length > 0 &&
                (await o("WAWebDBOutContactDatabaseApi").putOutContactBatch(r),
                o("WAWebBackendApi").frontendFireAndForget(
                  "bulkUpsertOutContacts",
                  { contacts: r },
                )),
              a.length > 0 &&
                (await o("WAWebDBOutContactDatabaseApi").removeOutContactBatch(
                  a,
                ),
                o("WAWebBackendApi").frontendFireAndForget(
                  "bulkRemoveOutContacts",
                  { ids: a },
                )),
              t > 0 &&
                o("WALogger")
                  .ERROR(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "OutContactSync: ",
                        " malformed mutations",
                      ])),
                    t,
                  )
                  .sendLogs(
                    "OutContactSync: " +
                      t +
                      " malformed mutation(s) encountered",
                  ),
              i
            );
          }),
          n
        );
      })(o("WAWebSyncdAction").AccountSyncdActionBase);
    function m(e) {
      return e == null || e === "" ? null : e;
    }
    function p(e) {
      if (e == null) return null;
      var t = e.trim().split(" ")[0];
      return t || null;
    }
    var _ = new d();
    l.default = _;
  },
  98,
);
