__d(
  "WAWebLidContactSync",
  [
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
      _ = (function (t) {
        function n() {
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
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.getVersion = function () {
            return 1;
          }),
          (a.getAction = function () {
            return o("WASyncdConst").Actions.LidContact;
          }),
          (a.applyMutations = async function (n, a, i) {
            var t = this;
            i === void 0 && (i = !1);
            var l = o("WAWebUsernameGatingUtils").usernameDisplayedEnabled(),
              _ = [],
              f = [],
              g = [],
              h = 0,
              y = 0,
              C = 0,
              b = 0,
              v = await Promise.all(
                n.map(function (e) {
                  try {
                    var n = e.indexParts,
                      a = n[1];
                    if (r("isStringNullOrEmpty")(a))
                      return t.malformedActionIndex();
                    var i = o("WAWebWidFactory").createUserWidOrThrow(a);
                    if (!i.isLid()) return (h++, t.malformedActionIndex());
                    if (e.operation === "set") {
                      var s,
                        u = e.value.lidContactAction;
                      if (!u)
                        return (
                          y++,
                          o("WAWebSyncdIndexUtils").malformedActionValue(
                            t.collectionName,
                          )
                        );
                      var c = u.firstName,
                        d = u.fullName,
                        m = u.username,
                        p = {
                          id: a,
                          name: d != null ? d : "",
                          shortName:
                            (s =
                              c != null
                                ? c
                                : o("WAWebContactShortName").getShortName(c)) !=
                            null
                              ? s
                              : "",
                          username: m,
                          type: "in",
                          isAddressBookContact: 1,
                          isContactSyncCompleted: 0,
                          isUsernameContact:
                            m != null && !r("isStringNullOrEmpty")(m),
                        };
                      return (
                        l &&
                          !r("isStringNullOrEmpty")(m) &&
                          g.push({
                            userId: i,
                            username: m.startsWith("@") ? m.slice(1) : m,
                          }),
                        _.push(p),
                        o("WAWebSyncContactsJob").syncNewContact(i),
                        C++,
                        {
                          actionState:
                            o("WASyncdConst").SyncActionState.Success,
                        }
                      );
                    }
                    return e.operation === "remove"
                      ? (f.push(i),
                        {
                          actionState:
                            o("WASyncdConst").SyncActionState.Success,
                        })
                      : (b++,
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
            (h > 0 &&
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[syncd] lid contact sync received ",
                      " non-lid jids",
                    ])),
                  h,
                )
                .sendLogs("lid-contact-sync-received-non-lid-jid", {
                  sampling: 0.1,
                }),
              y > 0 &&
                o("WALogger")
                  .ERROR(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[syncd] lid contact sync: ",
                        " mutations have no syncd action value",
                      ])),
                    y,
                  )
                  .sendLogs(
                    "lid-contact-sync-mutation-has-no-syncd-action-value",
                    { sampling: 0.1 },
                  ),
              C > 0 &&
                o("WALogger").WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[syncd] lid contact sync - ",
                      " set operations processed",
                    ])),
                  C,
                ),
              b > 0 &&
                o("WALogger").WARN(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "contact sync: ",
                      " operations not supported",
                    ])),
                  b,
                ),
              o("WALogger").LOG(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[syncd] lid sync mutations processed",
                  ])),
              ),
              await o("WAWebApiContact").createOrMergeAddressBookContacts(_),
              o("WAWebSyncdOrphan")
                .checkOrphanUserStatusMutes(
                  _.map(function (e) {
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
            var S = [],
              R = await r("WAWebLidAwareContactsDB").bulkGet(
                f.map(function (e) {
                  return e.toJid();
                }),
              );
            if (
              (R.forEach(function (e, t) {
                e && e.isUsernameContact === !0 && S.push(f[t]);
              }),
              S.length > 0)
            ) {
              var L = S.map(function (e) {
                return o("WAJids").toLidUserJid(e.user);
              });
              (await o("WAWebApiContact").setNotAddressBookContacts(L),
                o("WAWebBackendApi")
                  .frontendSendAndReceive("clearStatusForRemovedContact", {})
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
            l &&
              g.length > 0 &&
              (await o("WAWebSetUsernameJob").setUsernamesJob(g));
            var E = _.map(function (e) {
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
              E.length > 0 &&
                o("WAWebBackendApi").frontendFireAndForget(
                  "bulkAddContactToCollection",
                  { contacts: E },
                ),
              S.length > 0 &&
                o("WAWebBackendApi").frontendFireAndForget(
                  "setContactsNotMyUsernameContacts",
                  {
                    usernameContactIdsToRemove: S.map(function (e) {
                      return e.toString();
                    }),
                  },
                ),
              v
            );
          }),
          (a.getLidContactSyncMutation = function (t) {
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
          n
        );
      })(o("WAWebSyncdAction").AccountSyncdActionBase),
      f = new _();
    l.default = f;
  },
  98,
);
