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
                  ).usernameDisplayedEnabled(),
                  g = [],
                  h = [],
                  y = [],
                  C = 0,
                  b = 0,
                  v = 0,
                  S = 0,
                  R = yield (_ || (_ = n("Promise"))).all(
                    t.map(function (e) {
                      try {
                        var t = e.indexParts,
                          n = t[1];
                        if (r("isStringNullOrEmpty")(n))
                          return l.malformedActionIndex();
                        var a = o("WAWebWidFactory").createUserWidOrThrow(n);
                        if (!a.isLid()) return (C++, l.malformedActionIndex());
                        if (e.operation === "set") {
                          var i,
                            s = e.value.lidContactAction;
                          if (!s)
                            return (
                              b++,
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
                            f &&
                              !r("isStringNullOrEmpty")(d) &&
                              y.push({
                                userId: a,
                                username: d.startsWith("@") ? d.slice(1) : d,
                              }),
                            g.push(m),
                            o("WAWebSyncContactsJob").syncNewContact(a),
                            v++,
                            {
                              actionState:
                                o("WASyncdConst").SyncActionState.Success,
                            }
                          );
                        }
                        return e.operation === "remove"
                          ? (h.push(a),
                            {
                              actionState:
                                o("WASyncdConst").SyncActionState.Success,
                            })
                          : (S++,
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
                (C > 0 &&
                  o("WALogger")
                    .ERROR(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "[syncd] lid contact sync received ",
                          " non-lid jids",
                        ])),
                      C,
                    )
                    .sendLogs("lid-contact-sync-received-non-lid-jid", {
                      sampling: 0.1,
                    }),
                  b > 0 &&
                    o("WALogger")
                      .ERROR(
                        s ||
                          (s = babelHelpers.taggedTemplateLiteralLoose([
                            "[syncd] lid contact sync: ",
                            " mutations have no syncd action value",
                          ])),
                        b,
                      )
                      .sendLogs(
                        "lid-contact-sync-mutation-has-no-syncd-action-value",
                        { sampling: 0.1 },
                      ),
                  v > 0 &&
                    o("WALogger").WARN(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "[syncd] lid contact sync - ",
                          " set operations processed",
                        ])),
                      v,
                    ),
                  S > 0 &&
                    o("WALogger").WARN(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "contact sync: ",
                          " operations not supported",
                        ])),
                      S,
                    ),
                  o("WALogger").LOG(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "[syncd] lid sync mutations processed",
                      ])),
                  ),
                  yield o("WAWebApiContact").createOrMergeAddressBookContacts(
                    g,
                  ),
                  o("WAWebSyncdOrphan")
                    .checkOrphanUserStatusMutes(
                      g.map(function (e) {
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
                var L = [],
                  E = yield r("WAWebLidAwareContactsDB").bulkGet(
                    h.map(function (e) {
                      return e.toJid();
                    }),
                  );
                if (
                  (E.forEach(function (e, t) {
                    e && e.isUsernameContact === !0 && L.push(h[t]);
                  }),
                  L.length > 0)
                ) {
                  var k = L.map(function (e) {
                    return o("WAJids").toLidUserJid(e.user);
                  });
                  (yield o("WAWebApiContact").setNotAddressBookContacts(k),
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
                f &&
                  y.length > 0 &&
                  (yield o("WAWebSetUsernameJob").setUsernamesJob(y));
                var I = g.map(function (e) {
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
                  I.length > 0 &&
                    o("WAWebBackendApi").frontendFireAndForget(
                      "bulkAddContactToCollection",
                      { contacts: I },
                    ),
                  L.length > 0 &&
                    o("WAWebBackendApi").frontendFireAndForget(
                      "setContactsNotMyUsernameContacts",
                      {
                        usernameContactIdsToRemove: L.map(function (e) {
                          return e.toString();
                        }),
                      },
                    ),
                  R
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
