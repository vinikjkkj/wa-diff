__d(
  "WAWebLidContactSync",
  [
    "Promise",
    "WAJids",
    "WALogger",
    "WASyncdConst",
    "WATimeUtils",
    "WAWebApiContact",
    "WAWebBackendApi",
    "WAWebContactShortName",
    "WAWebLidAwareContactsDB",
    "WAWebProtobufsServerSync.pb",
    "WAWebSetUsernameJob",
    "WAWebSyncContactsJob",
    "WAWebSyncdAction",
    "WAWebSyncdActionUtils",
    "WAWebSyncdIndexUtils",
    "WAWebSyncdOrphan",
    "WAWebUsernameGatingUtils",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f = (function (t) {
        function a() {
          for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.collectionName =
              o("WASyncdConst").CollectionName.CriticalUnblockLow),
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
            return o("WASyncdConst").Actions.LidContact;
          }),
          (i.applyMutations = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t, a, i) {
                var l = this;
                i === void 0 && (i = !1);
                var f = o(
                    "WAWebUsernameGatingUtils",
                  ).usernameContactSyncdEnabled(),
                  g = o("WAWebUsernameGatingUtils").usernameDisplayedEnabled(),
                  h = [],
                  y = [],
                  C = [];
                if (!f)
                  return t.map(function () {
                    return {
                      actionState:
                        o("WASyncdConst").SyncActionState.Unsupported,
                    };
                  });
                var b = 0,
                  v = 0,
                  S = 0,
                  R = 0,
                  L = yield (_ || (_ = n("Promise"))).all(
                    t.map(function (e) {
                      try {
                        var t = e.indexParts,
                          n = t[1];
                        if (r("isStringNullOrEmpty")(n))
                          return l.malformedActionIndex();
                        var a = o("WAWebWidFactory").createUserWidOrThrow(n);
                        if (!a.isLid()) return (b++, l.malformedActionIndex());
                        if (e.operation === "set") {
                          var i,
                            s = e.value.lidContactAction;
                          if (!s)
                            return (
                              v++,
                              o("WAWebSyncdIndexUtils").malformedActionValue(
                                l.collectionName,
                              )
                            );
                          var u = s.firstName,
                            c = s.fullName,
                            d = s.username,
                            m = {
                              id: n,
                              name: c != null ? c : "",
                              shortName:
                                (i =
                                  u != null
                                    ? u
                                    : o("WAWebContactShortName").getShortName(
                                        u,
                                      )) != null
                                  ? i
                                  : "",
                              username: d,
                              type: "in",
                              isAddressBookContact: 1,
                              isContactSyncCompleted: 0,
                              isUsernameContact:
                                d != null && !r("isStringNullOrEmpty")(d),
                            };
                          return (
                            g &&
                              !r("isStringNullOrEmpty")(d) &&
                              C.push({
                                userId: a,
                                username: d.startsWith("@") ? d.slice(1) : d,
                              }),
                            h.push(m),
                            o("WAWebSyncContactsJob").syncNewContact(a),
                            S++,
                            {
                              actionState:
                                o("WASyncdConst").SyncActionState.Success,
                            }
                          );
                        }
                        return e.operation === "remove"
                          ? (y.push(a),
                            {
                              actionState:
                                o("WASyncdConst").SyncActionState.Success,
                            })
                          : (R++,
                            {
                              actionState:
                                o("WASyncdConst").SyncActionState.Unsupported,
                            });
                      } catch (e) {
                        return {
                          actionState: o("WASyncdConst").SyncActionState.Failed,
                        };
                      }
                    }),
                  );
                (b > 0 &&
                  o("WALogger")
                    .ERROR(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "[syncd] lid contact sync received ",
                          " non-lid jids",
                        ])),
                      b,
                    )
                    .sendLogs("lid-contact-sync-received-non-lid-jid", {
                      sampling: 0.1,
                    }),
                  v > 0 &&
                    o("WALogger")
                      .ERROR(
                        s ||
                          (s = babelHelpers.taggedTemplateLiteralLoose([
                            "[syncd] lid contact sync: ",
                            " mutations have no syncd action value",
                          ])),
                        v,
                      )
                      .sendLogs(
                        "lid-contact-sync-mutation-has-no-syncd-action-value",
                        { sampling: 0.1 },
                      ),
                  S > 0 &&
                    o("WALogger").WARN(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "[syncd] lid contact sync - ",
                          " set operations processed",
                        ])),
                      S,
                    ),
                  R > 0 &&
                    o("WALogger").WARN(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "contact sync: ",
                          " operations not supported",
                        ])),
                      R,
                    ),
                  o("WALogger").LOG(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "[syncd] lid sync mutations processed",
                      ])),
                  ),
                  yield o("WAWebApiContact").createOrMergeAddressBookContacts(
                    h,
                  ),
                  o("WAWebSyncdOrphan")
                    .checkOrphanUserStatusMutes(
                      h.map(function (e) {
                        return e.id;
                      }),
                    )
                    .catch(function () {
                      o("WALogger")
                        .ERROR(
                          m ||
                            (m = babelHelpers.taggedTemplateLiteralLoose([
                              "[syncd][contact sync] Failed to check orphan user status mutes",
                            ])),
                        )
                        .sendLogs("failed-to-check-orphan-user-status-mutes", {
                          sampling: 0.1,
                        });
                    }));
                var E = [],
                  k = yield r("WAWebLidAwareContactsDB").bulkGet(
                    y.map(function (e) {
                      return e.toJid();
                    }),
                  );
                if (
                  (k.forEach(function (e, t) {
                    e && e.isUsernameContact === !0 && E.push(y[t]);
                  }),
                  E.length > 0)
                ) {
                  var I = E.map(function (e) {
                    return o("WAJids").toLidUserJid(e.user);
                  });
                  (yield o("WAWebApiContact").setNotAddressBookContacts(I),
                    o("WAWebBackendApi")
                      .frontendSendAndReceive(
                        "clearStatusForRemovedContact",
                        {},
                      )
                      .catch(function () {
                        o("WALogger")
                          .ERROR(
                            p ||
                              (p = babelHelpers.taggedTemplateLiteralLoose([
                                "[syncd] lid contact sync - failed to clear status for removed contacts",
                              ])),
                          )
                          .sendLogs(
                            "failed-to-clear-status-for-removed-lid-contacts",
                          );
                      }));
                }
                g &&
                  C.length > 0 &&
                  (yield o("WAWebSetUsernameJob").setUsernamesJob(C));
                var T = h.map(function (e) {
                  return {
                    id: e.id,
                    name: e.name,
                    shortName: e.shortName,
                    type: "in",
                    syncToAddressbook: e.syncToAddressbook === !0,
                    isAddressBookContact: 1,
                    isContactSyncCompleted: 0,
                    username: e.username,
                    isUsernameContact: !0,
                  };
                });
                return (
                  T.length > 0 &&
                    o("WAWebBackendApi").frontendFireAndForget(
                      "bulkAddContactToCollection",
                      { contacts: T },
                    ),
                  E.length > 0 &&
                    o("WAWebBackendApi").frontendFireAndForget(
                      "setContactsNotMyUsernameContacts",
                      {
                        usernameContactIdsToRemove: E.map(function (e) {
                          return e.toString();
                        }),
                      },
                    ),
                  L
                );
              },
            );
            function a(e, n, r) {
              return t.apply(this, arguments);
            }
            return a;
          })()),
          (i.getLidContactSyncMutation = function (t) {
            var e = t.contactId,
              n = t.firstName,
              r = t.fullName,
              a = t.isDelete,
              i = t.username,
              l = o("WATimeUtils").unixTimeMs(),
              s = {
                lidContactAction: { fullName: r, firstName: n, username: i },
              };
            return o("WAWebSyncdActionUtils").buildPendingMutation({
              collection: this.collectionName,
              indexArgs: [e.toString()],
              operation: a
                ? o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation
                    .REMOVE
                : o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation
                    .SET,
              version: this.getVersion(),
              value: s,
              timestamp: l,
              action: this.getAction(),
            });
          }),
          a
        );
      })(o("WAWebSyncdAction").AccountSyncdActionBase),
      g = new f();
    l.default = g;
  },
  98,
);
