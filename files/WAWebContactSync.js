__d(
  "WAWebContactSync",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebApiContact",
    "WAWebBackendApi",
    "WAWebContactBirthday",
    "WAWebContactCollection",
    "WAWebContactShortName",
    "WAWebContactUtils",
    "WAWebCurrentUser",
    "WAWebDBCreateLidPnMappings",
    "WAWebLidAwareContactsDB",
    "WAWebLidMigrationUtils",
    "WAWebProtobufsServerSync.pb",
    "WAWebSyncNewContact",
    "WAWebSyncdAction",
    "WAWebSyncdActionUtils",
    "WAWebSyncdConst",
    "WAWebSyncdDbCallbacksApi",
    "WAWebSyncdIndexUtils",
    "WAWebSyncdOrphan",
    "WAWebUsernameTypes",
    "WAWebWidFactory",
    "WAWebWidToJid",
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
      f,
      g,
      h,
      y,
      C = (function (t) {
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
            return 2;
          }),
          (a.getAction = function () {
            return o("WAWebSyncdConst").Actions.Contact;
          }),
          (a.applyMutations = async function (n, a, i) {
            var t = this;
            i === void 0 && (i = !1);
            var l = [],
              h = [],
              y = [],
              C = new Map(),
              b = 0,
              v = 0,
              S = 0,
              R = await Promise.all(
                n.map(function (n) {
                  try {
                    var a = n.indexParts,
                      i = a[1];
                    if (r("isStringNullOrEmpty")(i))
                      return t.malformedActionIndex();
                    var s = o("WAWebWidFactory").createUserWidOrThrow(i);
                    if (n.operation === "set") {
                      var u,
                        c = n.value.contactAction;
                      if (!c)
                        return (
                          b++,
                          o("WAWebSyncdIndexUtils").malformedActionValue(
                            t.collectionName,
                          )
                        );
                      if (s.isLid())
                        return (
                          o("WAWebCurrentUser").isEmployee() &&
                            o("WALogger").LOG(
                              e ||
                                (e = babelHelpers.taggedTemplateLiteralLoose([
                                  "syncd: received lid contact: ",
                                  "",
                                ])),
                              s.toString(),
                            ),
                          v++,
                          {
                            actionState:
                              o("WAWebSyncdConst").SyncActionState.Skipped,
                          }
                        );
                      var d = c.birthday,
                        m = c.firstName,
                        p = c.fullName,
                        _ = c.lidJid,
                        f = c.saveOnPrimaryAddressbook,
                        g = c.username,
                        R = babelHelpers.extends(
                          {
                            id: i,
                            name: p != null ? p : "",
                            shortName:
                              (u =
                                m != null
                                  ? m
                                  : o("WAWebContactShortName").getShortName(
                                      p,
                                    )) != null
                                ? u
                                : "",
                            type: "in",
                            syncToAddressbook: f,
                            isAddressBookContact: 1,
                            isContactSyncCompleted: 0,
                            isUsernameContact: !1,
                          },
                          o(
                            "WAWebContactBirthday",
                          ).getContactSyncBirthdayFields(d),
                        );
                      r("isStringNullOrEmpty")(g) ||
                        (R.username = o("WAWebUsernameTypes").asUsername(g));
                      var L =
                        _ != null
                          ? o("WAWebWidFactory").asUserLidOrThrow(
                              o("WAWebWidFactory").createUserWidOrThrow(
                                _,
                                "lid",
                              ),
                            )
                          : null;
                      if (
                        (C.set(
                          s,
                          L != null ? L : o("WAWebLidMigrationUtils").toLid(s),
                        ),
                        s.isRegularUserPn() && L)
                      ) {
                        var E = L;
                        y.push({ lid: E, pn: s });
                      }
                      return (
                        l.push(R),
                        o("WAWebSyncNewContact").syncNewContact(s),
                        {
                          actionState:
                            o("WAWebSyncdConst").SyncActionState.Success,
                        }
                      );
                    }
                    return n.operation === "remove"
                      ? s.isLid() || s.isBot()
                        ? {
                            actionState:
                              o("WAWebSyncdConst").SyncActionState.Skipped,
                          }
                        : (C.set(s, o("WAWebLidMigrationUtils").toLid(s)),
                          h.push(s),
                          {
                            actionState:
                              o("WAWebSyncdConst").SyncActionState.Success,
                          })
                      : (S++,
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
            (b > 0 &&
              o("WALogger").WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "contact sync: ",
                    " malformed mutations",
                  ])),
                b,
              ),
              v > 0 &&
                o("WALogger")
                  .ERROR(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "syncd: contact sync: ",
                        " lid contacts are not supported",
                      ])),
                    v,
                  )
                  .sendLogs("receive-lid-contact"),
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
                    "syncd: handler after loop",
                  ])),
              ),
              o("WALogger").LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "syncd: before pn job",
                  ])),
              ),
              await o("WAWebDBCreateLidPnMappings").createLidPnMappings({
                mappings: y,
                write: "now",
                learningSource: "contact-sync",
              }),
              await o("WAWebApiContact").createOrMergeAddressBookContacts(l),
              o("WALogger").LOG(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "syncd: handler after save",
                  ])),
              ),
              i === !0 &&
                (await o("WAWebSyncdDbCallbacksApi").writeSyncdLog(
                  this.collectionName,
                  "handler after save",
                )),
              o("WAWebSyncdOrphan")
                .checkOrphanUserStatusMutes(
                  l.map(function (e) {
                    return e.id;
                  }),
                )
                .catch(function () {
                  o("WALogger")
                    .ERROR(
                      _ ||
                        (_ = babelHelpers.taggedTemplateLiteralLoose([
                          "[syncd] contact: orphan status mutes check failed",
                        ])),
                    )
                    .sendLogs("failed-to-check-orphan-user-status-mutes");
                }));
            var L = [],
              E = h.map(function (e) {
                var t = C.get(e);
                return t ? t.toString() : e.toJid();
              }),
              k = await r("WAWebLidAwareContactsDB").bulkGet(E);
            if (
              (k.forEach(function (e, t) {
                (e == null || e.isUsernameContact !== !0) && L.push(h[t]);
              }),
              L.length > 0)
            ) {
              var I = L.map(function (e) {
                return o("WAWebWidToJid").widToUserJid(e);
              });
              (await o("WAWebApiContact").setNotAddressBookContacts(I),
                o("WAWebBackendApi")
                  .frontendSendAndReceive("clearStatusForRemovedContact", {})
                  .catch(function () {
                    o("WALogger")
                      .ERROR(
                        f ||
                          (f = babelHelpers.taggedTemplateLiteralLoose([
                            "[syncd] contact: clear status for removed failed",
                          ])),
                      )
                      .sendLogs("failed-to-clear-status-for-removed-contacts");
                  }));
            }
            return (
              l.forEach(function (e) {
                var t = o("WAWebWidFactory").createUserWidOrThrow(e.id),
                  n = !1;
                o("WAWebContactCollection").ContactCollection.add(
                  babelHelpers.extends({}, e, { id: t, isUsernameContact: n }),
                  { merge: !0 },
                );
                var r = C.get(t);
                r &&
                  o("WAWebContactCollection").ContactCollection.add(
                    babelHelpers.extends({}, e, {
                      id: r,
                      isUsernameContact: n,
                    }),
                    { merge: !0 },
                  );
              }),
              L.forEach(function (e) {
                var t = o("WAWebContactCollection").ContactCollection.get(e);
                t && o("WAWebContactUtils").setContactNotMine(t);
                var n = C.get(e),
                  r = n
                    ? o("WAWebContactCollection").ContactCollection.get(n)
                    : null;
                r && o("WAWebContactUtils").setContactNotMine(r);
              }),
              o("WALogger").LOG(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
                    "syncd: handler done",
                  ])),
              ),
              i === !0 &&
                (await o("WAWebSyncdDbCallbacksApi").writeSyncdLog(
                  this.collectionName,
                  "handler done",
                )),
              R
            );
          }),
          (a.getContactSyncMutation = function (t) {
            var e,
              n = t.contactId,
              r = t.firstName,
              a = t.fullName,
              i = t.isDelete,
              l = t.lid,
              s = t.syncToAddressbook,
              u = t.username;
            n.isLid() &&
              (o("WAWebCurrentUser").isEmployee() &&
                o("WALogger").LOG(
                  h ||
                    (h = babelHelpers.taggedTemplateLiteralLoose([
                      "syncd: sending lid contact: ",
                      "",
                    ])),
                  n.toString(),
                ),
              o("WALogger")
                .ERROR(
                  y ||
                    (y = babelHelpers.taggedTemplateLiteralLoose([
                      "syncd: contact sync: should not send Lid contact",
                    ])),
                )
                .sendLogs("send-lid-contact"));
            var c = o("WATimeUtils").unixTimeMs(),
              d = {
                contactAction: {
                  fullName: a != null ? a : void 0,
                  firstName: r != null ? r : void 0,
                  lidJid: l ? l.toString() : void 0,
                  saveOnPrimaryAddressbook: s != null ? s : void 0,
                  username:
                    (e = o("WAWebUsernameTypes").serializeMaybeUsername(u)) !=
                    null
                      ? e
                      : void 0,
                },
              };
            return o("WAWebSyncdActionUtils").buildPendingMutation({
              collection: this.collectionName,
              indexArgs: [n.toString({ legacy: !0 })],
              operation: i
                ? o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation
                    .REMOVE
                : o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation
                    .SET,
              version: this.getVersion(),
              value: d,
              timestamp: c,
              action: this.getAction(),
            });
          }),
          n
        );
      })(o("WAWebSyncdAction").AccountSyncdActionBase),
      b = new C();
    l.default = b;
  },
  98,
);
