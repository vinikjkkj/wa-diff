__d(
  "WAWebUserStatusMuteSync",
  [
    "Promise",
    "WALogger",
    "WASyncdConst",
    "WAWebBackendApi",
    "WAWebLidAwareContactsDB",
    "WAWebProtobufsServerSync.pb",
    "WAWebSchemaContact_DO_NOT_USE_DIRECTLY",
    "WAWebSchemaGroupMetadata",
    "WAWebSyncdAction",
    "WAWebSyncdActionUtils",
    "WAWebSyncdIndexUtils",
    "WAWebWid",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = new Set(),
            n = [],
            a = [];
          return (
            e.forEach(function (e) {
              var t = e.indexParts,
                o = t[1];
              !o ||
                !r("WAWebWid").isWid(o) ||
                (r("WAWebWid").isGroup(o) ? a.push(o) : n.push(o));
            }),
            yield r("WAWebLidAwareContactsDB")
              .bulkGet(n)
              .then(function (e) {
                return e.forEach(function (e) {
                  e && t.add(e.id);
                });
              }),
            a.length > 0 &&
              (yield o("WAWebSchemaGroupMetadata")
                .getGroupMetadataTable()
                .bulkGet(a)
                .then(function (e) {
                  return e.forEach(function (e) {
                    e && t.add(e.id);
                  });
                })),
            t
          );
        })),
        d.apply(this, arguments)
      );
    }
    var m = (function (t) {
        function a() {
          for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.collectionName = o("WASyncdConst").CollectionName.RegularHigh),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(a, t);
        var i = a.prototype;
        return (
          (i.getVersion = function () {
            return 7;
          }),
          (i.getAction = function () {
            return o("WASyncdConst").Actions.UserStatusMute;
          }),
          (i.applyMutations = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                var a = this,
                  i = yield c(t),
                  l = [],
                  d = [],
                  m = 0,
                  p = [],
                  _ = 0,
                  f = yield (u || (u = n("Promise"))).all(
                    t.map(function (e) {
                      try {
                        if (e.operation === "set") {
                          var t,
                            n = e.indexParts,
                            s = e.value,
                            u = n[1];
                          if (!u || !r("WAWebWid").isWid(u))
                            return a.malformedActionIndex();
                          var c =
                            (t = s.userStatusMuteAction) == null
                              ? void 0
                              : t.muted;
                          return c === void 0
                            ? (m++,
                              p.length < 3 && p.push(e),
                              o("WAWebSyncdIndexUtils").malformedActionValue(
                                a.collectionName,
                              ))
                            : i.has(u)
                              ? (r("WAWebWid").isGroup(u)
                                  ? d.push({ id: u, statusMute: c })
                                  : l.push({ id: u, statusMute: c }),
                                {
                                  actionState:
                                    o("WASyncdConst").SyncActionState.Success,
                                })
                              : {
                                  actionState:
                                    o("WASyncdConst").SyncActionState.Orphan,
                                  orphanModel: {
                                    modelId: u,
                                    modelType:
                                      o("WASyncdConst").SyncModelType
                                        .UserStatusMute,
                                  },
                                };
                        }
                        return (
                          _++,
                          {
                            actionState:
                              o("WASyncdConst").SyncActionState.Unsupported,
                          }
                        );
                      } catch (e) {
                        return {
                          actionState: o("WASyncdConst").SyncActionState.Failed,
                        };
                      }
                    }),
                  );
                return (
                  m > 0 &&
                    o("WALogger").WARN(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "UserStatusMuteSyncd: ",
                          " malformed mutations => ",
                          "",
                        ])),
                      m,
                      p,
                    ),
                  _ > 0 &&
                    o("WALogger").WARN(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "status mute chat sync: ",
                          " operations not supported",
                        ])),
                      _,
                    ),
                  yield o("WAWebSchemaContact_DO_NOT_USE_DIRECTLY")
                    .getContactTable()
                    .bulkCreateOrMerge(l),
                  yield o("WAWebSchemaGroupMetadata")
                    .getGroupMetadataTable()
                    .bulkMergeOnly(d),
                  o("WAWebBackendApi").frontendFireAndForget(
                    "updateContactsStatusMute",
                    { groupStatusMuteUpdates: d, userStatusMuteUpdates: l },
                  ),
                  f
                );
              },
            );
            function a(e) {
              return t.apply(this, arguments);
            }
            return a;
          })()),
          (i.getMutationForStatusMute = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, n) {
                var r = { userStatusMuteAction: { muted: t } },
                  a = o("WAWebSyncdActionUtils").buildPendingMutation({
                    action: this.getAction(),
                    collection: this.collectionName,
                    indexArgs: [e.toString({ legacy: !0 })],
                    operation: o("WAWebProtobufsServerSync.pb")
                      .SyncdMutation$SyncdOperation.SET,
                    timestamp: n,
                    value: r,
                    version: this.getVersion(),
                  });
                return a;
              },
            );
            function t(t, n, r) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          a
        );
      })(o("WAWebSyncdAction").AccountSyncdActionBase),
      p = new m();
    l.default = p;
  },
  98,
);
