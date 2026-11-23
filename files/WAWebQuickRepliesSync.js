__d(
  "WAWebQuickRepliesSync",
  [
    "WALogger",
    "WAWebBackendApi",
    "WAWebProtobufsServerSync.pb",
    "WAWebSchemaQuickReply",
    "WAWebSyncdAction",
    "WAWebSyncdActionUtils",
    "WAWebSyncdConst",
    "WAWebSyncdIndexUtils",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = (function (t) {
        function n() {
          for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.collectionName = o("WAWebSyncdConst").CollectionName.Regular),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var r = n.prototype;
        return (
          (r.getVersion = function () {
            return 2;
          }),
          (r.getAction = function () {
            return o("WAWebSyncdConst").Actions.QuickReply;
          }),
          (r.applyMutations = async function (n) {
            var t = this,
              r = 0,
              a = 0,
              i = await Promise.all(
                n.map(async function (e) {
                  try {
                    if (e.operation === "set") {
                      var n = e.indexParts,
                        i = e.value,
                        l = n[1];
                      if (!l) return t.malformedActionIndex();
                      var s = i.quickReplyAction;
                      if (!s)
                        return (
                          r++,
                          o("WAWebSyncdIndexUtils").malformedActionValue(
                            t.collectionName,
                          )
                        );
                      if (s.deleted === !0)
                        return (
                          await o("WAWebSchemaQuickReply")
                            .getQuickReplyTable()
                            .remove(l),
                          o("WAWebBackendApi").frontendFireAndForget(
                            "removeQuickReplyFromCollection",
                            { id: l },
                          ),
                          {
                            actionState:
                              o("WAWebSyncdConst").SyncActionState.Success,
                          }
                        );
                      var u = s.message,
                        c = s.shortcut;
                      if (c == null || c === "" || u == null || u === "")
                        return (
                          r++,
                          o("WAWebSyncdIndexUtils").malformedActionValue(
                            t.collectionName,
                          )
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
                        await o("WAWebSchemaQuickReply")
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
                            o("WAWebSyncdConst").SyncActionState.Success,
                        }
                      );
                    }
                    return (
                      a++,
                      {
                        actionState:
                          o("WAWebSyncdConst").SyncActionState.Unsupported,
                      }
                    );
                  } catch (e) {
                    return {
                      actionState: o("WAWebSyncdConst").SyncActionState.Failed,
                    };
                  }
                }),
              );
            return (
              r > 0 &&
                o("WALogger").WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "quick replies sync: ",
                      " malformed mutations",
                    ])),
                  r,
                ),
              a > 0 &&
                o("WALogger").WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "quick replies sync: ",
                      " operations not supported",
                    ])),
                  a,
                ),
              i
            );
          }),
          (r.getQuickReplyDeleteMutation = function (t, n) {
            var e = {
              quickReplyAction: {
                deleted: !0,
                keywords: [],
                shortcut: "",
                message: "",
                count: 0,
                associatedLabelIds: [],
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
          (r.getQuickReplyAddOrEditMutation = function (t) {
            var e = t.count,
              n = t.id,
              r = t.keywords,
              a = t.message,
              i = t.shortcut,
              l = t.timestamp,
              s = {
                quickReplyAction: {
                  deleted: !1,
                  keywords: r,
                  shortcut: i,
                  message: a,
                  count: e,
                  associatedLabelIds: [],
                },
              };
            return o("WAWebSyncdActionUtils").buildPendingMutation({
              collection: this.collectionName,
              indexArgs: [n],
              value: s,
              version: this.getVersion(),
              operation: o("WAWebProtobufsServerSync.pb")
                .SyncdMutation$SyncdOperation.SET,
              timestamp: l,
              action: this.getAction(),
            });
          }),
          n
        );
      })(o("WAWebSyncdAction").AccountSyncdActionBase),
      c = new u();
    l.default = c;
  },
  98,
);
