__d(
  "WAWebContactSync",
  [
    "Promise",
    "WAJids",
    "WALogger",
    "WASyncdConst",
    "WATimeUtils",
    "WAWebApiContact",
    "WAWebBackendApi",
    "WAWebContactCollection",
    "WAWebContactShortName",
    "WAWebCurrentUser",
    "WAWebDBCreateLidPnMappings",
    "WAWebLidAwareContactsDB",
    "WAWebLidMigrationUtils",
    "WAWebProtobufsServerSync.pb",
    "WAWebSyncContactsJob",
    "WAWebSyncdAction",
    "WAWebSyncdActionUtils",
    "WAWebSyncdDbCallbacksApi",
    "WAWebSyncdIndexUtils",
    "WAWebSyncdOrphan",
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
      f,
      g,
      h,
      y,
      C,
      b = (function (t) {
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
            return 2;
          }),
          (i.getAction = function () {
            return o("WASyncdConst").Actions.Contact;
          }),
          (i.applyMutations = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t, a, i) {
                var l = this;
                i === void 0 && (i = !1);
                var h = [],
                  y = [],
                  b = [],
                  v = new Map(),
                  S = 0,
                  R = 0,
                  L = 0,
                  E = yield (C || (C = n("Promise"))).all(
                    t.map(function (t) {
                      try {
                        var n = t.indexParts,
                          a = n[1];
                        if (r("isStringNullOrEmpty")(a))
                          return l.malformedActionIndex();
                        var i = o("WAWebWidFactory").createUserWidOrThrow(a);
                        if (t.operation === "set") {
                          var s,
                            u = t.value.contactAction;
                          if (!u)
                            return (
                              S++,
                              o("WAWebSyncdIndexUtils").malformedActionValue(
                                l.collectionName,
                              )
                            );
                          if (i.isLid())
                            return (
                              o("WAWebCurrentUser").isEmployee() &&
                                o("WALogger").LOG(
                                  e ||
                                    (e =
                                      babelHelpers.taggedTemplateLiteralLoose([
                                        "syncd: received lid contact: ",
                                        "",
                                      ])),
                                  i.toString(),
                                ),
                              R++,
                              {
                                actionState:
                                  o("WASyncdConst").SyncActionState.Skipped,
                              }
                            );
                          var c = u.firstName,
                            d = u.fullName,
                            m = u.lidJid,
                            p = u.saveOnPrimaryAddressbook,
                            _ = u.username,
                            f = {
                              id: a,
                              name: d != null ? d : "",
                              shortName:
                                (s =
                                  c != null
                                    ? c
                                    : o("WAWebContactShortName").getShortName(
                                        d,
                                      )) != null
                                  ? s
                                  : "",
                              type: "in",
                              syncToAddressbook: p,
                              isAddressBookContact: 1,
                              isContactSyncCompleted: 0,
                              isUsernameContact: !1,
                            };
                          r("isStringNullOrEmpty")(_) ||
                            (f.username = _.startsWith("@") ? _.slice(1) : _);
                          var g =
                            m != null
                              ? o("WAWebWidFactory").asUserLidOrThrow(
                                  o("WAWebWidFactory").createUserWidOrThrow(
                                    m,
                                    "lid",
                                  ),
                                )
                              : null;
                          if (
                            (v.set(
                              i,
                              g != null
                                ? g
                                : o("WAWebLidMigrationUtils").toLid(i),
                            ),
                            i.isRegularUserPn() && g)
                          ) {
                            var C = g;
                            b.push({ lid: C, pn: i });
                          }
                          return (
                            h.push(f),
                            o("WAWebSyncContactsJob").syncNewContact(i),
                            {
                              actionState:
                                o("WASyncdConst").SyncActionState.Success,
                            }
                          );
                        }
                        return t.operation === "remove"
                          ? i.isLid() || i.isBot()
                            ? {
                                actionState:
                                  o("WASyncdConst").SyncActionState.Skipped,
                              }
                            : (v.set(i, o("WAWebLidMigrationUtils").toLid(i)),
                              y.push(i),
                              {
                                actionState:
                                  o("WASyncdConst").SyncActionState.Success,
                              })
                          : (L++,
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
                (S > 0 &&
                  o("WALogger").WARN(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "contact sync: ",
                        " malformed mutations",
                      ])),
                    S,
                  ),
                  R > 0 &&
                    o("WALogger")
                      .ERROR(
                        u ||
                          (u = babelHelpers.taggedTemplateLiteralLoose([
                            "syncd: contact sync: ",
                            " lid contacts are not supported",
                          ])),
                        R,
                      )
                      .sendLogs("receive-lid-contact"),
                  L > 0 &&
                    o("WALogger").WARN(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "contact sync: ",
                          " operations not supported",
                        ])),
                      L,
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
                  yield o("WAWebDBCreateLidPnMappings").createLidPnMappings({
                    mappings: b,
                    flushImmediately: !0,
                    learningSource: "other",
                  }),
                  yield o("WAWebApiContact").createOrMergeAddressBookContacts(
                    h,
                  ),
                  o("WALogger").LOG(
                    p ||
                      (p = babelHelpers.taggedTemplateLiteralLoose([
                        "syncd: handler after save",
                      ])),
                  ),
                  i === !0 &&
                    (yield o("WAWebSyncdDbCallbacksApi").writeSyncdLog(
                      this.collectionName,
                      "handler after save",
                    )),
                  o("WAWebSyncdOrphan")
                    .checkOrphanUserStatusMutes(
                      h.map(function (e) {
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
                var k = [],
                  I = y.map(function (e) {
                    var t = v.get(e);
                    return t ? t.toString() : e.toJid();
                  }),
                  T = yield r("WAWebLidAwareContactsDB").bulkGet(I);
                if (
                  (T.forEach(function (e, t) {
                    (e == null || e.isUsernameContact !== !0) && k.push(y[t]);
                  }),
                  k.length > 0)
                ) {
                  var D = k.map(function (e) {
                    return e.isLid()
                      ? o("WAJids").toLidUserJid(e.user)
                      : o("WAJids").toPhoneUserJid(e.user);
                  });
                  (yield o("WAWebApiContact").setNotAddressBookContacts(D),
                    o("WAWebBackendApi")
                      .frontendSendAndReceive(
                        "clearStatusForRemovedContact",
                        {},
                      )
                      .catch(function () {
                        o("WALogger")
                          .ERROR(
                            f ||
                              (f = babelHelpers.taggedTemplateLiteralLoose([
                                "[syncd] contact: clear status for removed failed",
                              ])),
                          )
                          .sendLogs(
                            "failed-to-clear-status-for-removed-contacts",
                          );
                      }));
                }
                return (
                  h.forEach(function (e) {
                    var t = o("WAWebWidFactory").createUserWidOrThrow(e.id),
                      n = !1;
                    o("WAWebContactCollection").ContactCollection.add(
                      babelHelpers.extends({}, e, {
                        id: t,
                        isUsernameContact: n,
                      }),
                      { merge: !0 },
                    );
                    var r = v.get(t);
                    r &&
                      o("WAWebContactCollection").ContactCollection.add(
                        babelHelpers.extends({}, e, {
                          id: r,
                          isUsernameContact: n,
                        }),
                        { merge: !0 },
                      );
                  }),
                  k.forEach(function (e) {
                    var t = o("WAWebContactCollection").ContactCollection.get(
                      e,
                    );
                    t && t.setNotMyContact();
                    var n = v.get(e),
                      r = n
                        ? o("WAWebContactCollection").ContactCollection.get(n)
                        : null;
                    r && r.setNotMyContact();
                  }),
                  o("WALogger").LOG(
                    g ||
                      (g = babelHelpers.taggedTemplateLiteralLoose([
                        "syncd: handler done",
                      ])),
                  ),
                  i === !0 &&
                    (yield o("WAWebSyncdDbCallbacksApi").writeSyncdLog(
                      this.collectionName,
                      "handler done",
                    )),
                  E
                );
              },
            );
            function a(e, n, r) {
              return t.apply(this, arguments);
            }
            return a;
          })()),
          (i.getContactSyncMutation = function (t) {
            var e = t.contactId,
              n = t.firstName,
              r = t.fullName,
              a = t.isDelete,
              i = t.lid,
              l = t.syncToAddressbook,
              s = t.username;
            e.isLid() &&
              (o("WAWebCurrentUser").isEmployee() &&
                o("WALogger").LOG(
                  h ||
                    (h = babelHelpers.taggedTemplateLiteralLoose([
                      "syncd: sending lid contact: ",
                      "",
                    ])),
                  e.toString(),
                ),
              o("WALogger")
                .ERROR(
                  y ||
                    (y = babelHelpers.taggedTemplateLiteralLoose([
                      "syncd: contact sync: should not send Lid contact",
                    ])),
                )
                .sendLogs("send-lid-contact"));
            var u = o("WATimeUtils").unixTimeMs(),
              c = {
                contactAction: {
                  fullName: r != null ? r : void 0,
                  firstName: n != null ? n : void 0,
                  lidJid: i ? i.toString() : void 0,
                  saveOnPrimaryAddressbook: l != null ? l : void 0,
                  username: s,
                },
              };
            return o("WAWebSyncdActionUtils").buildPendingMutation({
              collection: this.collectionName,
              indexArgs: [e.toString({ legacy: !0 })],
              operation: a
                ? o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation
                    .REMOVE
                : o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation
                    .SET,
              version: this.getVersion(),
              value: c,
              timestamp: u,
              action: this.getAction(),
            });
          }),
          a
        );
      })(o("WAWebSyncdAction").AccountSyncdActionBase),
      v = new b();
    l.default = v;
  },
  98,
);
