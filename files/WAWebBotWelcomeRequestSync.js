__d(
  "WAWebBotWelcomeRequestSync",
  [
    "WALogger",
    "WASyncdConst",
    "WATimeUtils",
    "WAWebBackendApi",
    "WAWebDBUpdateChatTable",
    "WAWebProtobufsServerSync.pb",
    "WAWebSyncdAction",
    "WAWebSyncdActionUtils",
    "WAWebSyncdGetChat",
    "WAWebSyncdIndexUtils",
    "WAWebWidFactory",
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
            (e.chatJidIndex = 1),
            (e.collectionName = o("WASyncdConst").CollectionName.RegularLow),
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
            return o("WASyncdConst").Actions.BotWelcomeRequest;
          }),
          (r.applyMutations = async function (n) {
            var t = this,
              r = 0,
              a = 0,
              i = await Promise.all(
                n.map(async function (e) {
                  try {
                    e: {
                      var n = e;
                      if (
                        ((typeof n == "object" && n !== null) ||
                          typeof n == "function") &&
                        n.operation === "set" &&
                        "indexParts" in n &&
                        "value" in n
                      ) {
                        var i,
                          l = n.indexParts,
                          s = n.value,
                          u = l[1];
                        if (!u) return t.malformedActionIndex();
                        var c =
                          (i = s.botWelcomeRequestAction) == null
                            ? void 0
                            : i.isSent;
                        if (c == null)
                          return (
                            r++,
                            o("WAWebSyncdIndexUtils").malformedActionValue(
                              t.collectionName,
                            )
                          );
                        var d = await o(
                          "WAWebSyncdGetChat",
                        ).resolveChatForMutationIndex(
                          o("WAWebWidFactory").createWid(u),
                        );
                        if (!d.success)
                          return {
                            actionState:
                              o("WASyncdConst").SyncActionState.Orphan,
                            orphanModel: d.orphanModel,
                          };
                        var m = o("WAWebWidFactory").createWid(d.chat.id);
                        return (
                          await o("WAWebDBUpdateChatTable").updateChatTable(m, {
                            hasRequestedWelcomeMsg: c,
                          }),
                          o("WAWebBackendApi").frontendFireAndForget(
                            "chatCollectionUpdate",
                            { updates: [{ id: m, hasRequestedWelcomeMsg: c }] },
                          ),
                          {
                            actionState:
                              o("WASyncdConst").SyncActionState.Success,
                          }
                        );
                        break e;
                      }
                      if (
                        ((typeof n == "object" && n !== null) ||
                          typeof n == "function") &&
                        n.operation === "remove"
                      ) {
                        return (
                          a++,
                          {
                            actionState:
                              o("WASyncdConst").SyncActionState.Unsupported,
                          }
                        );
                        break e;
                      }
                      throw Error(
                        "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                          n,
                      );
                    }
                  } catch (e) {
                    return {
                      actionState: o("WASyncdConst").SyncActionState.Failed,
                    };
                  }
                }),
              );
            return (
              r > 0 &&
                o("WALogger").WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[BotWelcomeRequestSync] ",
                      " malformed: isSent not bool",
                    ])),
                  r,
                ),
              a > 0 &&
                o("WALogger").WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[BotWelcomeRequestSync] ",
                      " operations not supported",
                    ])),
                  a,
                ),
              i
            );
          }),
          (r.getBotWelcomeRequestSetMutation = async function (t, n) {
            var e = { botWelcomeRequestAction: { isSent: n } },
              r = o("WAWebSyncdActionUtils").buildPendingMutation({
                collection: this.collectionName,
                indexArgs: [
                  await o("WAWebSyncdGetChat").getChatJidMutationIndexForChat(
                    t,
                    o("WASyncdConst").Actions.BotWelcomeRequest,
                  ),
                ],
                value: e,
                version: this.getVersion(),
                operation: o("WAWebProtobufsServerSync.pb")
                  .SyncdMutation$SyncdOperation.SET,
                timestamp: o("WATimeUtils").unixTime(),
                action: this.getAction(),
              });
            return r;
          }),
          n
        );
      })(o("WAWebSyncdAction").ChatSyncdActionBase),
      c = new u();
    l.default = c;
  },
  98,
);
