__d(
  "WAWebBotWelcomeRequestSync",
  [
    "Promise",
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
            (e.chatJidIndex = 1),
            (e.collectionName = o("WASyncdConst").CollectionName.RegularLow),
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
            return o("WASyncdConst").Actions.BotWelcomeRequest;
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
                              e: {
                                var t = e;
                                if (
                                  ((typeof t == "object" && t !== null) ||
                                    typeof t == "function") &&
                                  t.operation === "set" &&
                                  "indexParts" in t &&
                                  "value" in t
                                ) {
                                  var n,
                                    l = t.indexParts,
                                    s = t.value,
                                    u = l[1];
                                  if (!u) return r.malformedActionIndex();
                                  var c =
                                    (n = s.botWelcomeRequestAction) == null
                                      ? void 0
                                      : n.isSent;
                                  if (c == null)
                                    return (
                                      a++,
                                      o(
                                        "WAWebSyncdIndexUtils",
                                      ).malformedActionValue(r.collectionName)
                                    );
                                  var d = yield o(
                                    "WAWebSyncdGetChat",
                                  ).resolveChatForMutationIndex(
                                    o("WAWebWidFactory").createWid(u),
                                  );
                                  if (!d.success)
                                    return {
                                      actionState:
                                        o("WASyncdConst").SyncActionState
                                          .Orphan,
                                      orphanModel: d.orphanModel,
                                    };
                                  var m = o("WAWebWidFactory").createWid(
                                    d.chat.id,
                                  );
                                  return (
                                    yield o(
                                      "WAWebDBUpdateChatTable",
                                    ).updateChatTable(m, {
                                      hasRequestedWelcomeMsg: c,
                                    }),
                                    o("WAWebBackendApi").frontendFireAndForget(
                                      "chatCollectionUpdate",
                                      {
                                        updates: [
                                          { id: m, hasRequestedWelcomeMsg: c },
                                        ],
                                      },
                                    ),
                                    {
                                      actionState:
                                        o("WASyncdConst").SyncActionState
                                          .Success,
                                    }
                                  );
                                  break e;
                                }
                                if (
                                  ((typeof t == "object" && t !== null) ||
                                    typeof t == "function") &&
                                  t.operation === "remove"
                                ) {
                                  return (
                                    i++,
                                    {
                                      actionState:
                                        o("WASyncdConst").SyncActionState
                                          .Unsupported,
                                    }
                                  );
                                  break e;
                                }
                                throw Error(
                                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                                    t,
                                );
                              }
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
                          "[BotWelcomeRequestSync] ",
                          " malformed: isSent not bool",
                        ])),
                      a,
                    ),
                  i > 0 &&
                    o("WALogger").WARN(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "[BotWelcomeRequestSync] ",
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
          (a.getBotWelcomeRequestSetMutation = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                var n = { botWelcomeRequestAction: { isSent: t } },
                  r = o("WAWebSyncdActionUtils").buildPendingMutation({
                    collection: this.collectionName,
                    indexArgs: [
                      yield o(
                        "WAWebSyncdGetChat",
                      ).getChatJidMutationIndexForChat(
                        e,
                        o("WASyncdConst").Actions.BotWelcomeRequest,
                      ),
                    ],
                    value: n,
                    version: this.getVersion(),
                    operation: o("WAWebProtobufsServerSync.pb")
                      .SyncdMutation$SyncdOperation.SET,
                    timestamp: o("WATimeUtils").unixTime(),
                    action: this.getAction(),
                  });
                return r;
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          r
        );
      })(o("WAWebSyncdAction").ChatSyncdActionBase),
      d = new c();
    l.default = d;
  },
  98,
);
