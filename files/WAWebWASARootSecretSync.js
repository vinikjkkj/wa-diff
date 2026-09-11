__d(
  "WAWebWASARootSecretSync",
  [
    "Promise",
    "WALogger",
    "WALongInt",
    "WAWebProtobufSyncAction.pb",
    "WAWebSyncdAction",
    "WAWebSyncdConst",
    "WAWebSyncdDb",
    "WAWebSyncdGetChat",
    "WAWebSyncdIndexUtils",
    "WAWebWasaRootSecretDb",
    "WAWebWasaUserPrefs",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "decodeProtobuf",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    function d(e, t) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = [],
            r = null,
            a = -1;
          for (var i of t) {
            var l,
              u = i.id,
              c = i.rootSecret;
            if (u == null || u === "" || c == null) {
              o("WALogger")
                .WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[WASARootSecretSync] skipping malformed entry for ",
                      "",
                    ])),
                  e,
                )
                .sendLogs("wasa-root-secret-sync-malformed");
              continue;
            }
            if (
              (n.push({ stanzaId: u, secret: new Uint8Array(c) }),
              i.status ===
                o("WAWebProtobufSyncAction.pb")
                  .SyncActionValue$WASARootSecretAction$RootSecretEntry$Status
                  .ACTIVE)
            ) {
              var d = (l = o("WALongInt").maybeNumber(i.epoch)) != null ? l : 0;
              (r == null || d > a) && ((r = u), (a = d));
            }
          }
          return (
            yield o("WAWebWasaRootSecretDb").upsertWasaRootSecretsForIds(e, n),
            yield p(e, r),
            new Set(
              n.map(function (e) {
                return e.stanzaId;
              }),
            )
          );
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
          if (t != null) {
            yield o("WAWebWasaUserPrefs").setWasaActiveTargetId(e.user, t);
            return;
          }
          var n = o("WAWebWasaUserPrefs").getWasaActiveTargetId(e.user);
          n != null &&
            (o("WALogger")
              .WARN(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[WASARootSecretSync] no ACTIVE entry for ",
                    "; clearing send key ",
                    "",
                  ])),
                e,
                n,
              )
              .sendLogs("wasa-root-secret-sync-no-active"),
            yield o("WAWebWasaUserPrefs").clearWasaActiveTargetId(e.user));
        })),
        _.apply(this, arguments)
      );
    }
    function f(e, t, n) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r,
            a = yield o("WAWebSyncdDb").getSyncAction(JSON.stringify(t)),
            i =
              (a == null ? void 0 : a.binarySyncData) != null
                ? (r = o("decodeProtobuf").decodeProtobuf(
                    o("WAWebProtobufSyncAction.pb").SyncActionDataSpec,
                    a.binarySyncData,
                  ).value) == null || (r = r.wasaRootSecretAction) == null
                  ? void 0
                  : r.secrets
                : null,
            l = [];
          for (var s of i != null ? i : []) {
            var u = s.id;
            u != null && u !== "" && !n.has(u) && l.push(u);
          }
          if (l.length !== 0) {
            yield o("WAWebWasaRootSecretDb").removeWasaRootSecretsForIds(e, l);
            var c = o("WAWebWasaUserPrefs").getWasaActiveTargetId(e.user);
            c != null &&
              l.includes(c) &&
              (yield o("WAWebWasaUserPrefs").clearWasaActiveTargetId(e.user));
          }
        })),
        g.apply(this, arguments)
      );
    }
    var h = (function (t) {
        function a() {
          for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.chatJidIndex = 1),
            (e.collectionName =
              o("WAWebSyncdConst").CollectionName.RegularHigh),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(a, t);
        var i = a.prototype;
        return (
          (i.getVersion = function () {
            return 1;
          }),
          (i.getAction = function () {
            return o("WAWebSyncdConst").Actions.WasaRootSecret;
          }),
          (i.applyMutations = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                var a = this;
                return (c || (c = n("Promise"))).all(
                  t.map(
                    (function () {
                      var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                        function* (t) {
                          try {
                            e: {
                              var n = t;
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
                                if (!u) return a.malformedActionIndex();
                                var c = s.wasaRootSecretAction;
                                if (c == null)
                                  return o(
                                    "WAWebSyncdIndexUtils",
                                  ).malformedActionValue(a.collectionName);
                                var m = yield o(
                                  "WAWebSyncdGetChat",
                                ).resolveChatForMutationIndex(
                                  o("WAWebWidFactory").createWid(u),
                                );
                                if (!m.success)
                                  return {
                                    actionState:
                                      o("WAWebSyncdConst").SyncActionState
                                        .Orphan,
                                    orphanModel: m.orphanModel,
                                  };
                                var p = o("WAWebWidFactory").createWid(
                                    m.chat.id,
                                  ),
                                  _ = yield d(
                                    p,
                                    (i = c.secrets) != null ? i : [],
                                  );
                                return (
                                  yield f(p, l, _),
                                  {
                                    actionState:
                                      o("WAWebSyncdConst").SyncActionState
                                        .Success,
                                  }
                                );
                                break e;
                              }
                              if (
                                ((typeof n == "object" && n !== null) ||
                                  typeof n == "function") &&
                                n.operation === "remove"
                              )
                                return {
                                  actionState:
                                    o("WAWebSyncdConst").SyncActionState
                                      .Unsupported,
                                };
                              throw Error(
                                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                                  n,
                              );
                            }
                          } catch (t) {
                            return (
                              o("WALogger")
                                .WARN(
                                  e ||
                                    (e =
                                      babelHelpers.taggedTemplateLiteralLoose([
                                        "[WASARootSecretSync] apply failed",
                                      ])),
                                )
                                .catching(r("getErrorSafe")(t))
                                .sendLogs("wasa-root-secret-sync-failed"),
                              {
                                actionState:
                                  o("WAWebSyncdConst").SyncActionState.Failed,
                              }
                            );
                          }
                        },
                      );
                      return function (e) {
                        return t.apply(this, arguments);
                      };
                    })(),
                  ),
                );
              },
            );
            function a(e) {
              return t.apply(this, arguments);
            }
            return a;
          })()),
          a
        );
      })(o("WAWebSyncdAction").ChatSyncdActionBase),
      y = new h();
    l.default = y;
  },
  98,
);
