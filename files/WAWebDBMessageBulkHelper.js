__d(
  "WAWebDBMessageBulkHelper",
  [
    "Promise",
    "WALogger",
    "WALoggerUtils",
    "WAWebApiContact",
    "WAWebBackendApi",
    "WAWebCurrentUser",
    "WAWebDBCAPIPermissions",
    "WAWebDBChatValidation",
    "WAWebDBEncryptMultipleMsgs",
    "WAWebDBMessageUtils",
    "WAWebDBStoreEncryptedMsgs",
    "WAWebDBStoreNewsletterEncryptedMsgs",
    "WAWebLidMigrationUtils",
    "WAWebModelStorageUtils",
    "WAWebMsgGetters",
    "WAWebQuarantineDataStore",
    "WAWebSchemaChat",
    "WAWebSchemaGroupMetadata",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsPhoneNumberHidingThreadPromotionMigration",
    "WAWebUsernameGatingUtils",
    "WAWebUsernameTypes",
    "WAWebVoipGatingUtils",
    "WAWebWamEnumWebcChatCreateCreationMethod",
    "WAWebWebcChatCreateWamEvent",
    "WAWebWid",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "compactMap",
    "getErrorSafe",
    "gkx",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f, g, h, y, C, b;
    function v(e, t) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          try {
            yield E(e, t);
          } catch (a) {
            var n = r("getErrorSafe")(a);
            if (
              o("WAWebDBStoreEncryptedMsgs").isEligibleForFallback(e.length, n)
            )
              yield E(e, t, !0);
            else throw n;
          }
        })),
        S.apply(this, arguments)
      );
    }
    function R(e, t) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          try {
            var a,
              i = t.filter(function (e) {
                var t = e.id.participant;
                return (
                  t &&
                  t.isLid() &&
                  o("WAWebLidMigrationUtils").toPn(t) == null &&
                  e.id.remote.isGroup() &&
                  !o("WAWebUserPrefsMeUser").isMeAccount(t)
                );
              });
            if (o("WAWebUsernameGatingUtils").usernameDisplayedEnabled()) {
              var l = r("compactMap")(i, function (e) {
                return e.id.participant;
              });
              if (l.length > 0) {
                var _ = yield o("WAWebApiContact").bulkGetContactRecord(l),
                  f = _.reduce(function (e, t) {
                    return (
                      (t == null ? void 0 : t.id) != null &&
                        (t == null ? void 0 : t.username) != null &&
                        e.add(t.id),
                      e
                    );
                  }, new Set());
                i = i.filter(function (e) {
                  var t = e.id.participant;
                  return t && !f.has(t.toString());
                });
              }
            }
            if (i.length === 0) return;
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "logMissingGroupParticipantLids: has some participants with missing Lids",
                ])),
            );
            var g = [];
            (i.forEach(function (e) {
              g.length < 3 && g.push({ type: e.type, subtype: e.subtype });
            }),
              o("WALogger").ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "logMissingGroupParticipantLids: Missing PN mappings while saving ",
                    " Lid group messages. types/subtypes => ",
                    "",
                  ])),
                i.length,
                JSON.stringify(g),
              ));
            var h = new Set(
              i.map(function (e) {
                return e.id.remote.toString();
              }),
            );
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "logMissingGroupParticipantLids: number affected groups: ",
                  "",
                ])),
              h.size,
            );
            var y = yield o("WAWebSchemaGroupMetadata")
                .getGroupMetadataTable()
                .anyOf(["id"], Array.from(h)),
              C = [];
            (y.forEach(function (e) {
              C.length < 3 &&
                C.push({
                  announce: e.announce,
                  isParentGroup: e.isParentGroup,
                });
            }),
              y.length > 0 &&
                o("WALogger").ERROR(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "logMissingGroupParticipantLids: Missing PN mappings while saving Lid group messages for ",
                      " groups. announce/isParent => ",
                      "",
                    ])),
                  y.length,
                  JSON.stringify(C),
                ));
            var b = y.filter(function (e) {
              return (e == null ? void 0 : e.announce) === !1;
            });
            if (b.length === 0) return;
            o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "logMissingGroupParticipantLids: number non Cag Groups: ",
                  "",
                ])),
              b.length,
            );
            var v = b.filter(function (e) {
                return e == null ? void 0 : e.isLidAddressingMode;
              }).length,
              S = b.length - v;
            o("WALogger")
              .ERROR(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "logMissingGroupParticipantLids: Missing PN mappings while saving Lid group messages. lid groups count: ",
                    ", pn groups count: ",
                    ",\n          is history: ",
                    "",
                  ])),
                v,
                S,
                (a = n == null ? void 0 : n.toString()) != null ? a : "na",
              )
              .sendLogs("no-pn-mapping-for-group-lid-message");
          } catch (e) {
            o("WALogger")
              .ERROR(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "Could not log missing Lids ",
                    "",
                  ])),
                e,
              )
              .sendLogs("could-not-log-missing-lids");
          }
        })),
        L.apply(this, arguments)
      );
    }
    function E(e, t, n) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, r) {
          (r === void 0 && (r = !1),
            o("WAWebCurrentUser").isEmployee() &&
              o("WALogger").LOG(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "persistNewMessagesInBulk: ",
                    "",
                  ])),
                e.map(function (e) {
                  var t;
                  return e == null || (t = e.id) == null ? void 0 : t.id;
                }),
              ));
          var a = o(
            "WAWebQuarantineDataStore",
          ).extractQuarantineDataFromMessages(e);
          R(e);
          var i = yield (b || (b = n("Promise"))).all([
              D(e),
              o("WAWebDBEncryptMultipleMsgs").encryptMultipleDBMsgs(e, !1),
            ]),
            l = i[0],
            s = i[1],
            u = l.capiCallingPermissionUpdates,
            c = l.chatUpdates,
            d = [
              "chat",
              "fts-indexing-queue",
              "message",
              "message-association",
            ],
            m = a.length > 0 ? [].concat(d, ["quarantine-data"]) : d;
          (yield o("WAWebModelStorageUtils")
            .getStorage()
            .lock(
              m,
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    var n = e[0],
                      i = e[1],
                      l = e[2],
                      u = e[3],
                      d = e[4];
                    (o("WALogger")
                      .LOG(
                        f ||
                          (f = babelHelpers.taggedTemplateLiteralLoose([
                            "persistNewMessagesInBulk: bulkCreateOrMerge",
                          ])),
                      )
                      .tags("missing-lid"),
                      o("WAWebDBChatValidation").validateAccountLidInChatRows(
                        c,
                        "persistNewMessagesInBulk",
                      ),
                      yield n.bulkCreateOrMerge(c),
                      yield o(
                        "WAWebDBStoreEncryptedMsgs",
                      ).storeEncryptedDBMessages(s, t, !1, r),
                      yield o(
                        "WAWebQuarantineDataStore",
                      ).bulkCreateOrReplaceQuarantineData(a, d));
                  },
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            ),
            u.length > 0 &&
              o("WAWebBackendApi").frontendFireAndForget(
                "bulkUpdateChatCapiCallingPermissionType",
                { updates: u },
              ));
        })),
        k.apply(this, arguments)
      );
    }
    function I(e) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield (b || (b = n("Promise"))).all([
              D(e),
              o("WAWebDBEncryptMultipleMsgs").encryptMultipleDBMsgs(e, !1),
            ]),
            r = t[0],
            a = t[1],
            i = r.capiCallingPermissionUpdates,
            l = r.chatUpdates;
          (yield o("WAWebModelStorageUtils")
            .getStorage()
            .lock(
              ["chat", "message", "message-association"],
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    var t = e[0];
                    (o("WALogger")
                      .LOG(
                        g ||
                          (g = babelHelpers.taggedTemplateLiteralLoose([
                            "persistNewNewsletterMessagesInBulk: bulkCreateOrMerge",
                          ])),
                      )
                      .tags("missing-lid"),
                      o("WAWebDBChatValidation").validateAccountLidInChatRows(
                        l,
                        "persistNewNewsletterMessagesInBulk",
                      ),
                      yield t.bulkCreateOrMerge(l),
                      yield o(
                        "WAWebDBStoreNewsletterEncryptedMsgs",
                      ).storeEncryptedNewsletterMessages(a));
                  },
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            ),
            i.length > 0 &&
              o("WAWebBackendApi").frontendFireAndForget(
                "bulkUpdateChatCapiCallingPermissionType",
                { updates: i },
              ));
        })),
        T.apply(this, arguments)
      );
    }
    function D(e) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = new Map();
          e.forEach(function (e) {
            var n = e.id,
              r = n.remote.toString(),
              a = t.get(r) || {
                unread: 0,
                t: 0,
                unreadMentionsOfMe: [],
                broadcast: e.broadcast === !0,
              };
            if (
              !o("WAWebMsgGetters").getIsStatus(e) &&
              o("WAWebMsgGetters").getIsUnreadType(e)
            ) {
              if (
                !n.fromMe &&
                e.read !== !0 &&
                ((a.unread += 1), o("WAWebMsgGetters").getIsImportantMessage(e))
              ) {
                var i = { id: e.id.toString(), timestamp: e.t };
                a.unreadMentionsOfMe
                  ? a.unreadMentionsOfMe.push(i)
                  : (a.unreadMentionsOfMe = [i]);
              }
              (e.t != null && e.t > a.t && (a.t = Math.max(e.t, a.t)),
                t.set(r, a));
            }
            var l = o(
                "WAWebDBMessageUtils",
              ).isCoexCallingPermissionsRequestMessage(e),
              s =
                !l &&
                o(
                  "WAWebDBMessageUtils",
                ).isCoexCallingPermissionsResponseMessage(e);
            (l || s) &&
              o("WAWebVoipGatingUtils").isCoexCallingPermissionsEnabled() &&
              (l
                ? (a.capiCallingPermissionType = o(
                    "WAWebDBCAPIPermissions",
                  ).CloudAPICallingPermissionType.PENDING)
                : s &&
                  (a.capiCallingPermissionType = o(
                    "WAWebDBMessageUtils",
                  ).getSelectedCallingPermissions(e)),
              t.set(r, a));
          });
          var n = Array.from(t.keys()),
            a = yield o("WAWebSchemaChat").getChatTable().bulkGet(n),
            i = r("justknobx")._("310"),
            l = [],
            s = [],
            u = !1,
            c = a.map(function (e, r) {
              var a,
                c,
                d,
                m = n[r],
                p = t.get(m),
                _ = (p == null ? void 0 : p.unread) || 0,
                f = Math.max(0, e ? e.unreadCount : 0),
                g = (p == null ? void 0 : p.t) || void 0;
              e && e.t != null && (g == null || e.t > g) && (g = e.t);
              var h = [],
                y =
                  (a = e == null ? void 0 : e.archiveAtMentionViewedInDrawer) !=
                  null
                    ? a
                    : !1,
                C =
                  (c = p == null ? void 0 : p.unreadMentionsOfMe) != null
                    ? c
                    : [],
                b =
                  (d = e == null ? void 0 : e.unreadMentionsOfMe) != null
                    ? d
                    : [];
              (C.length > 0 && (y = !1), (h = C.concat(b)));
              var v = void 0;
              i &&
                e == null &&
                (p == null ? void 0 : p.broadcast) === !0 &&
                (v = !0);
              var S = {
                  id: m,
                  unreadCount: f + _,
                  t: g,
                  unreadMentionsOfMe: h,
                  archiveAtMentionViewedInDrawer: y,
                  createdLocally: v,
                },
                R = o("WAWebWidFactory").createWid(m),
                L = p == null ? void 0 : p.capiCallingPermissionType;
              return (
                L != null &&
                  ((S.capiCallingPermissionType = L),
                  l.push({ chatId: R, capiCallingPermissionType: L })),
                o("WAWebLidMigrationUtils").shouldHaveAccountLid(R) &&
                  (e == null
                    ? ((S.accountLid = o("WAWebLidMigrationUtils")
                        .toUserLidOrThrow(R)
                        .toString()),
                      R.isLid() &&
                        (o("WAWebApiContact").getPhoneNumber(R) != null ||
                        o(
                          "WAWebUserPrefsPhoneNumberHidingThreadPromotionMigration",
                        ).hasPhoneNumberHidingThreadPromotionMigrationStarted()
                          ? (S.lidOriginType =
                              o("WAWebUsernameTypes").LidOriginType.GENERAL)
                          : (S.lidOriginType =
                              o("WAWebUsernameTypes").LidOriginType.PNH_CTWA)))
                    : e.accountLid == null &&
                      (u ||
                        (o("WAWebLidMigrationUtils").logLidMetadata(),
                        (u = !0)),
                      s.length < 3 && s.push(R.toLogString()))),
                S
              );
            });
          (s.length > 0 &&
            o("WALogger")
              .ERROR(
                h ||
                  (h = babelHelpers.taggedTemplateLiteralLoose([
                    "getUpdatedChatMetadata: ",
                    " chats from DB have no account_lid => ",
                    "",
                  ])),
                s.length,
                s,
              )
              .sendLogs("chat-in-db-has-no-account-lid")
              .tags("missing-lid"),
            o("WALogger").LOG(
              y ||
                (y = babelHelpers.taggedTemplateLiteralLoose([
                  "[offline-resume][msg-cache]: storing chat updates for ",
                  " chats",
                ])),
              c.length,
            ));
          var d = a.some(function (e) {
            return e == null;
          });
          if (d) {
            var m = new Set(
                a.map(function (e) {
                  return e == null ? void 0 : e.id;
                }),
              ),
              p = n.filter(function (e) {
                return r("WAWebWid").isRegularUserNoImply(e) && !m.has(e);
              }).length;
            p > 0 &&
              (new (o("WAWebWebcChatCreateWamEvent").WebcChatCreateWamEvent)({
                creationMethod: o("WAWebWamEnumWebcChatCreateCreationMethod")
                  .WEBC_CHAT_CREATE_CREATION_METHOD.MISSING_WHEN_SAVING_MESSAGE,
                noCreated: p,
              }).commit(),
              o("WALogger")
                .ERROR(
                  C ||
                    (C = babelHelpers.taggedTemplateLiteralLoose([
                      "[offline-resume][msg-cache]: missing chats when saving message: ",
                      "",
                    ])),
                  p,
                )
                .sendLogs("missing-chats-when-saving-message", {
                  sampling: r("gkx")("26258")
                    ? o("WALoggerUtils").dynamicLoggingSampling(1e-4)
                    : 1,
                }));
          }
          return { chatUpdates: c, capiCallingPermissionUpdates: l };
        })),
        x.apply(this, arguments)
      );
    }
    ((l.persistNewMessagesInBulk = v),
      (l.logMissingGroupParticipantLids = R),
      (l.persistNewNewsletterMessagesInBulk = I));
  },
  98,
);
