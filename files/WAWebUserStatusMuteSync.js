__d(
  "WAWebUserStatusMuteSync",
  [
    "Promise",
    "WALogger",
    "WAWebBackendApi",
    "WAWebLidAwareContactsDB",
    "WAWebNewsletterGatingUtils",
    "WAWebProtobufsServerSync.pb",
    "WAWebSchemaContact_DO_NOT_USE_DIRECTLY",
    "WAWebSchemaGroupMetadata",
    "WAWebSchemaNewsletterMetadata",
    "WAWebSyncdAction",
    "WAWebSyncdActionUtils",
    "WAWebSyncdConst",
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
            a = [],
            i = [],
            l = [];
          return (
            e.forEach(function (e) {
              var t = e.indexParts,
                n = t[1];
              !n ||
                !r("WAWebWid").isWid(n) ||
                (r("WAWebWid").isGroup(n)
                  ? i.push(n)
                  : r("WAWebWid").isNewsletter(n) &&
                      o(
                        "WAWebNewsletterGatingUtils",
                      ).isNewsletterStatusReceiverEnabled()
                    ? l.push(n)
                    : a.push(n));
            }),
            yield r("WAWebLidAwareContactsDB")
              .bulkGet(a)
              .then(function (e) {
                return e.forEach(function (e) {
                  e && t.add(e.id);
                });
              }),
            i.length > 0 &&
              (yield o("WAWebSchemaGroupMetadata")
                .getGroupMetadataTable()
                .bulkGet(i)
                .then(function (e) {
                  return e.forEach(function (e) {
                    e && t.add(e.id);
                  });
                })),
            l.length > 0 &&
              o(
                "WAWebNewsletterGatingUtils",
              ).isNewsletterStatusReceiverEnabled() &&
              (yield (u || (u = n("Promise"))).all(
                l.map(
                  (function () {
                    var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                      function* (e) {
                        var n = yield o("WAWebSchemaNewsletterMetadata")
                          .getNewsletterMetadataTable()
                          .equalsPrimaryKeys(["id"], e);
                        n.length > 0 && t.add(e);
                      },
                    );
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })(),
                ),
              )),
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
            return 7;
          }),
          (i.getAction = function () {
            return o("WAWebSyncdConst").Actions.UserStatusMute;
          }),
          (i.applyMutations = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                var a = this,
                  i = yield c(t),
                  l = [],
                  d = [],
                  m = [],
                  p = 0,
                  _ = [],
                  f = 0,
                  g = yield (u || (u = n("Promise"))).all(
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
                          if (c === void 0)
                            return (
                              p++,
                              _.length < 3 && _.push(e),
                              o("WAWebSyncdIndexUtils").malformedActionValue(
                                a.collectionName,
                              )
                            );
                          if (!i.has(u))
                            return {
                              actionState:
                                o("WAWebSyncdConst").SyncActionState.Orphan,
                              orphanModel: {
                                modelId: u,
                                modelType:
                                  o("WAWebSyncdConst").SyncModelType
                                    .UserStatusMute,
                              },
                            };
                          var g = { id: u, statusMute: c };
                          return (
                            r("WAWebWid").isGroup(u)
                              ? d.push(g)
                              : r("WAWebWid").isNewsletter(u) &&
                                  o(
                                    "WAWebNewsletterGatingUtils",
                                  ).isNewsletterStatusReceiverEnabled()
                                ? m.push(g)
                                : l.push(g),
                            {
                              actionState:
                                o("WAWebSyncdConst").SyncActionState.Success,
                            }
                          );
                        }
                        return (
                          f++,
                          {
                            actionState:
                              o("WAWebSyncdConst").SyncActionState.Unsupported,
                          }
                        );
                      } catch (e) {
                        return {
                          actionState:
                            o("WAWebSyncdConst").SyncActionState.Failed,
                        };
                      }
                    }),
                  );
                return (
                  p > 0 &&
                    o("WALogger").WARN(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "UserStatusMuteSyncd: ",
                          " malformed mutations => ",
                          "",
                        ])),
                      p,
                      _,
                    ),
                  f > 0 &&
                    o("WALogger").WARN(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "status mute chat sync: ",
                          " operations not supported",
                        ])),
                      f,
                    ),
                  yield o("WAWebSchemaContact_DO_NOT_USE_DIRECTLY")
                    .getContactTable()
                    .bulkCreateOrMerge(l),
                  yield o("WAWebSchemaGroupMetadata")
                    .getGroupMetadataTable()
                    .bulkMergeOnly(d),
                  yield o("WAWebSchemaNewsletterMetadata")
                    .getNewsletterMetadataTable()
                    .bulkMergeOnly(m),
                  o("WAWebBackendApi").frontendFireAndForget(
                    "updateContactsStatusMute",
                    {
                      groupStatusMuteUpdates: d,
                      newsletterStatusMuteUpdates: m,
                      userStatusMuteUpdates: l,
                    },
                  ),
                  g
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
