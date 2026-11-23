__d(
  "WAWebLidContactSync",
  [
    "WAJids",
    "WALogger",
    "WATimeUtils",
    "WAWebApiContact",
    "WAWebBackendApi",
    "WAWebContactBirthday",
    "WAWebContactShortName",
    "WAWebLidAwareContactsDB",
    "WAWebProtobufsServerSync.pb",
    "WAWebSetUsernameJob",
    "WAWebSyncNewContact",
    "WAWebSyncdAction",
    "WAWebSyncdActionUtils",
    "WAWebSyncdConst",
    "WAWebSyncdIndexUtils",
    "WAWebSyncdOrphan",
    "WAWebUsernameGatingUtils",
    "WAWebUsernameTypes",
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
              o("WAWebSyncdConst").CollectionName.CriticalUnblockLow),
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
            return o("WAWebSyncdConst").Actions.LidContact;
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
                      var c = u.birthday,
                        d = u.firstName,
                        m = u.fullName,
                        p = u.username,
                        v = o("WAWebUsernameTypes").asMaybeUsername(p),
                        S = babelHelpers.extends(
                          {
                            id: a,
                            name: m != null ? m : "",
                            shortName:
                              (s =
                                d != null
                                  ? d
                                  : o("WAWebContactShortName").getShortName(
                                      d,
                                    )) != null
                                ? s
                                : "",
                            username: v != null ? v : void 0,
                            type: "in",
                            isAddressBookContact: 1,
                            isContactSyncCompleted: 0,
                            isUsernameContact: v != null,
                          },
                          o(
                            "WAWebContactBirthday",
                          ).getContactSyncBirthdayFields(c),
                        );
                      return (
                        l && v != null && g.push({ userId: i, username: v }),
                        _.push(S),
                        o("WAWebSyncNewContact").syncNewContact(i),
                        C++,
                        {
                          actionState:
                            o("WAWebSyncdConst").SyncActionState.Success,
                        }
                      );
                    }
                    return e.operation === "remove"
                      ? (f.push(i),
                        {
                          actionState:
                            o("WAWebSyncdConst").SyncActionState.Success,
                        })
                      : (b++,
                        {
                          actionState:
                            o("WAWebSyncdConst").SyncActionState.Unsupported,
                        });
                  } catch (e) {
                    return {
                      actionState: o("WAWebSyncdConst").SyncActionState.Failed,
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
                        " mutations w/o action value",
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
                          "[syncd][contact sync] failed to check orphan status mutes",
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
                            "[syncd] lid contact sync: clear removed contacts status -",
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
              return babelHelpers.extends(
                {
                  id: e.id,
                  name: e.name,
                  shortName: e.shortName,
                  type: "in",
                  syncToAddressbook: e.syncToAddressbook === !0,
                  isAddressBookContact: 1,
                  isContactSyncCompleted: 0,
                  username: o("WAWebUsernameTypes").serializeMaybeUsername(
                    e.username,
                  ),
                  isUsernameContact: !0,
                },
                o("WAWebContactBirthday").pickContactBirthdayFields(e),
              );
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
