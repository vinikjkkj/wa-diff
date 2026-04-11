__d(
  "WAWebQuickRepliesSync",
  [
    "Promise",
    "WALogger",
    "WASyncdConst",
    "WAWebBackendApi",
    "WAWebProtobufsServerSync.pb",
    "WAWebSchemaQuickReply",
    "WAWebSyncdAction",
    "WAWebSyncdActionUtils",
    "WAWebSyncdIndexUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = (function (t) {
        function r() {
          for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.collectionName = o("WASyncdConst").CollectionName.Regular),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(r, t);
        var a = r.prototype;
        return (
          (a.getVersion = function () {
            return 2;
          }),
          (a.getAction = function () {
            return o("WASyncdConst").Actions.QuickReply;
          }),
          (a.applyMutations = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                var r = this,
                  a = 0,
                  i = 0,
                  l = yield (u || (u = n("Promise"))).all(
                    t.map(
                      (function () {
                        var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                          function* (e) {
                            try {
                              if (e.operation === "set") {
                                var t = e.indexParts,
                                  n = e.value,
                                  l = t[1];
                                if (!l) return r.malformedActionIndex();
                                var s = n.quickReplyAction;
                                if (!s)
                                  return (
                                    a++,
                                    o(
                                      "WAWebSyncdIndexUtils",
                                    ).malformedActionValue(r.collectionName)
                                  );
                                if (s.deleted === !0)
                                  return (
                                    yield o("WAWebSchemaQuickReply")
                                      .getQuickReplyTable()
                                      .remove(l),
                                    o("WAWebBackendApi").frontendFireAndForget(
                                      "removeQuickReplyFromCollection",
                                      { id: l },
                                    ),
                                    {
                                      actionState:
                                        o("WASyncdConst").SyncActionState
                                          .Success,
                                    }
                                  );
                                var u = s.message,
                                  c = s.shortcut;
                                if (
                                  c == null ||
                                  c === "" ||
                                  u == null ||
                                  u === ""
                                )
                                  return (
                                    a++,
                                    o(
                                      "WAWebSyncdIndexUtils",
                                    ).malformedActionValue(r.collectionName)
                                  );
                                var d = s.keywords || [],
                                  m = s.count || 0,
                                  p = {
                                    id: l,
                                    shortcut: c,
                                    count: m,
                                    message: u,
                                    keywords: d,
                                  };
                                return (
                                  yield o("WAWebSchemaQuickReply")
                                    .getQuickReplyTable()
                                    .createOrReplace(p),
                                  o("WAWebBackendApi").frontendFireAndForget(
                                    "updateQuickReplyCollection",
                                    {
                                      count: m,
                                      id: l,
                                      keywords: d,
                                      message: u,
                                      shortcut: c,
                                    },
                                  ),
                                  {
                                    actionState:
                                      o("WASyncdConst").SyncActionState.Success,
                                  }
                                );
                              }
                              return (
                                i++,
                                {
                                  actionState:
                                    o("WASyncdConst").SyncActionState
                                      .Unsupported,
                                }
                              );
                            } catch (e) {
                              return {
                                actionState:
                                  o("WASyncdConst").SyncActionState.Failed,
                              };
                            }
                          },
                        );
                        return function (t) {
                          return e.apply(this, arguments);
                        };
                      })(),
                    ),
                  );
                return (
                  a > 0 &&
                    o("WALogger").WARN(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "quick replies sync: ",
                          " malformed mutations",
                        ])),
                      a,
                    ),
                  i > 0 &&
                    o("WALogger").WARN(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "quick replies sync: ",
                          " operations not supported",
                        ])),
                      i,
                    ),
                  l
                );
              },
            );
            function r(e) {
              return t.apply(this, arguments);
            }
            return r;
          })()),
          (a.getQuickReplyDeleteMutation = function (t, n) {
            var e = {
              quickReplyAction: {
                deleted: !0,
                keywords: [],
                shortcut: "",
                message: "",
                count: 0,
              },
            };
            return o("WAWebSyncdActionUtils").buildPendingMutation({
              collection: this.collectionName,
              indexArgs: [t],
              value: e,
              version: this.getVersion(),
              operation: o("WAWebProtobufsServerSync.pb")
                .SyncdMutation$SyncdOperation.SET,
              timestamp: n,
              action: this.getAction(),
            });
          }),
          (a.getQuickReplyAddOrEditMutation = function (t, n, r, a, i, l) {
            var e = {
              quickReplyAction: {
                deleted: !1,
                keywords: i,
                shortcut: n,
                message: r,
                count: a,
              },
            };
            return o("WAWebSyncdActionUtils").buildPendingMutation({
              collection: this.collectionName,
              indexArgs: [t],
              value: e,
              version: this.getVersion(),
              operation: o("WAWebProtobufsServerSync.pb")
                .SyncdMutation$SyncdOperation.SET,
              timestamp: l,
              action: this.getAction(),
            });
          }),
          r
        );
      })(o("WAWebSyncdAction").AccountSyncdActionBase),
      d = new c();
    l.default = d;
  },
  98,
);
