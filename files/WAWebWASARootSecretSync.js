__d(
  "WAWebWASARootSecretSync",
  [
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
    "decodeProtobuf",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    async function c(t, n) {
      var r = [],
        a = null,
        i = -1;
      for (var l of n) {
        var s,
          u = l.id,
          c = l.rootSecret;
        if (u == null || u === "" || c == null) {
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[WASARootSecretSync] skipping malformed entry for ",
                  "",
                ])),
              t,
            )
            .sendLogs("wasa-root-secret-sync-malformed");
          continue;
        }
        if (
          (r.push({ stanzaId: u, secret: new Uint8Array(c) }),
          l.status ===
            o("WAWebProtobufSyncAction.pb")
              .SyncActionValue$WASARootSecretAction$RootSecretEntry$Status
              .ACTIVE)
        ) {
          var m = (s = o("WALongInt").maybeNumber(l.epoch)) != null ? s : 0;
          (a == null || m > i) && ((a = u), (i = m));
        }
      }
      return (
        await o("WAWebWasaRootSecretDb").upsertWasaRootSecretsForIds(t, r),
        await d(t, a),
        new Set(
          r.map(function (e) {
            return e.stanzaId;
          }),
        )
      );
    }
    async function d(e, t) {
      if (t != null) {
        await o("WAWebWasaUserPrefs").setWasaActiveTargetId(e.user, t);
        return;
      }
      var n = o("WAWebWasaUserPrefs").getWasaActiveTargetId(e.user);
      n != null &&
        (o("WALogger")
          .WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[WASARootSecretSync] no ACTIVE entry for ",
                "; clearing send key ",
                "",
              ])),
            e,
            n,
          )
          .sendLogs("wasa-root-secret-sync-no-active"),
        await o("WAWebWasaUserPrefs").clearWasaActiveTargetId(e.user));
    }
    async function m(e, t, n) {
      var r,
        a = await o("WAWebSyncdDb").getSyncAction(JSON.stringify(t)),
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
        await o("WAWebWasaRootSecretDb").removeWasaRootSecretsForIds(e, l);
        var c = o("WAWebWasaUserPrefs").getWasaActiveTargetId(e.user);
        c != null &&
          l.includes(c) &&
          (await o("WAWebWasaUserPrefs").clearWasaActiveTargetId(e.user));
      }
    }
    var p = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (t = e.call.apply(e, [this].concat(r)) || this),
            (t.chatJidIndex = 1),
            (t.collectionName =
              o("WAWebSyncdConst").CollectionName.RegularHigh),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.getVersion = function () {
            return 1;
          }),
          (n.getAction = function () {
            return o("WAWebSyncdConst").Actions.WasaRootSecret;
          }),
          (n.applyMutations = async function (t) {
            var e = this;
            return Promise.all(
              t.map(async function (t) {
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
                      var a,
                        i = n.indexParts,
                        l = n.value,
                        s = i[1];
                      if (!s) return e.malformedActionIndex();
                      var d = l.wasaRootSecretAction;
                      if (d == null)
                        return o("WAWebSyncdIndexUtils").malformedActionValue(
                          e.collectionName,
                        );
                      var p = await o(
                        "WAWebSyncdGetChat",
                      ).resolveChatForMutationIndex(
                        o("WAWebWidFactory").createWid(s),
                      );
                      if (!p.success)
                        return {
                          actionState:
                            o("WAWebSyncdConst").SyncActionState.Orphan,
                          orphanModel: p.orphanModel,
                        };
                      var _ = o("WAWebWidFactory").createWid(p.chat.id),
                        f = await c(_, (a = d.secrets) != null ? a : []);
                      return (
                        await m(_, i, f),
                        {
                          actionState:
                            o("WAWebSyncdConst").SyncActionState.Success,
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
                          o("WAWebSyncdConst").SyncActionState.Unsupported,
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
                        u ||
                          (u = babelHelpers.taggedTemplateLiteralLoose([
                            "[WASARootSecretSync] apply failed",
                          ])),
                      )
                      .catching(r("getErrorSafe")(e))
                      .sendLogs("wasa-root-secret-sync-failed"),
                    { actionState: o("WAWebSyncdConst").SyncActionState.Failed }
                  );
                }
              }),
            );
          }),
          t
        );
      })(o("WAWebSyncdAction").ChatSyncdActionBase),
      _ = new p();
    l.default = _;
  },
  98,
);
