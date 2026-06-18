__d(
  "WAWebWASARootSecretSync",
  [
    "Promise",
    "WALogger",
    "WASyncdConst",
    "WAWebSyncdAction",
    "WAWebSyncdGetChat",
    "WAWebSyncdIndexUtils",
    "WAWebWasaRootSecretWriter",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = (function (t) {
        function a() {
          for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.chatJidIndex = 1),
            (e.collectionName = o("WASyncdConst").CollectionName.RegularHigh),
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
            return o("WASyncdConst").Actions.WasaRootSecret;
          }),
          (i.applyMutations = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                var a = this;
                return (u || (u = n("Promise"))).all(
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
                                var i = n.indexParts,
                                  l = n.value,
                                  u = i[1];
                                if (!u) return a.malformedActionIndex();
                                var c = l.wasaRootSecretAction;
                                if (c == null)
                                  return o(
                                    "WAWebSyncdIndexUtils",
                                  ).malformedActionValue(a.collectionName);
                                var d = yield o(
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
                                var m = o("WAWebWidFactory").createWid(
                                    d.chat.id,
                                  ),
                                  p = [];
                                for (var _ of (f = c.secrets) != null
                                  ? f
                                  : []) {
                                  var f,
                                    g = _.id,
                                    h = _.rootSecret;
                                  if (g == null || g === "" || h == null) {
                                    o("WALogger")
                                      .WARN(
                                        e ||
                                          (e =
                                            babelHelpers.taggedTemplateLiteralLoose(
                                              [
                                                "[WASARootSecretSync] skipping malformed entry for ",
                                                "",
                                              ],
                                            )),
                                        m,
                                      )
                                      .sendLogs(
                                        "wasa-root-secret-sync-malformed",
                                      );
                                    continue;
                                  }
                                  p.push({
                                    stanzaId: g,
                                    secret: new Uint8Array(h),
                                  });
                                }
                                return (
                                  yield o(
                                    "WAWebWasaRootSecretWriter",
                                  ).upsertWasaCarriersForIds(m, p),
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
                              )
                                return {
                                  actionState:
                                    o("WASyncdConst").SyncActionState
                                      .Unsupported,
                                };
                              throw Error(
                                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                                  n,
                              );
                            }
                          } catch (e) {
                            return (
                              o("WALogger")
                                .WARN(
                                  s ||
                                    (s =
                                      babelHelpers.taggedTemplateLiteralLoose([
                                        "[WASARootSecretSync] apply failed",
                                      ])),
                                )
                                .catching(r("getErrorSafe")(e))
                                .sendLogs("wasa-root-secret-sync-failed"),
                              {
                                actionState:
                                  o("WASyncdConst").SyncActionState.Failed,
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
      d = new c();
    l.default = d;
  },
  98,
);
