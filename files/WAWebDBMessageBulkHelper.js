__d(
  "WAWebDBMessageBulkHelper",
  [
    "Promise",
    "WALogger",
    "WALoggerUtils",
    "WAWebApiContact",
    "WAWebBackendApi",
    "WAWebBizBroadcastProHiddenChatClassifier",
    "WAWebBizBroadcastProHiddenChatStorage",
    "WAWebChatViewMode.flow",
    "WAWebCommonMsgUtils",
    "WAWebCurrentUser",
    "WAWebDBAddOnProviders",
    "WAWebDBCAPIPermissions",
    "WAWebDBChatValidation",
    "WAWebDBEncryptMultipleMsgs",
    "WAWebDBExperienceIdStore",
    "WAWebDBMessageUtils",
    "WAWebDBStoreEncryptedMsgs",
    "WAWebDBStoreNewsletterEncryptedMsgs",
    "WAWebLidMigrationLogging",
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
    "WAWebViewMode.flow",
    "WAWebViewModeUtils",
    "WAWebVoipGatingUtils",
    "WAWebWamEnumWebcChatCreateCreationMethod",
    "WAWebWebcChatCreateWamEvent",
    "WAWebWid",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "compactMap",
    "countWhere",
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
            var v = r("countWhere")(b, function (e) {
                return !!(e != null && e.isLidAddressingMode);
              }),
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
          (o("WAWebDBExperienceIdStore").shouldLockExperienceIdTable(e) &&
            m.push("experience-id"),
            yield o("WAWebModelStorageUtils")
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
          var p = [];
          for (var g of c) {
            var h = g.chatViewMode,
              y = g.id;
            h != null &&
              p.push({
                id: o("WAWebWidFactory").createWid(y),
                chatViewMode: h,
              });
          }
          p.length > 0 &&
            o("WAWebBackendApi").frontendFireAndForget("chatCollectionUpdate", {
              updates: p,
            });
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
            l = r.chatUpdates,
            s = ["chat", "message", "message-association"];
          (o("WAWebDBExperienceIdStore").shouldLockExperienceIdTable(e) &&
            s.push("experience-id"),
            yield o("WAWebModelStorageUtils")
              .getStorage()
              .lock(
                s,
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
          var t = new Map(),
            n = new Set(),
            a = new Map(),
            i = !1;
          e.forEach(function (e) {
            var r = e.id,
              l = r.remote.toString();
            if (
              r.remote.isRegularUser() &&
              o(
                "WAWebBizBroadcastProHiddenChatClassifier",
              ).isBizBroadcastProHiddenChatsEnabled()
            ) {
              i = !0;
              var s = a.get(l);
              s == null ? a.set(l, [e]) : s.push(e);
            }
            var u = t.get(l) || {
                unread: 0,
                t: 0,
                unreadMentionsOfMe: [],
                broadcast: e.broadcast === !0,
              },
              c = o("WAWebMsgGetters").getIsUnreadType(e),
              d = c || P(e);
            if (!o("WAWebMsgGetters").getIsStatus(e) && d) {
              if (
                c &&
                !r.fromMe &&
                e.read !== !0 &&
                ((u.unread += 1), o("WAWebMsgGetters").getIsImportantMessage(e))
              ) {
                var m = { id: e.id.toString(), timestamp: e.t };
                u.unreadMentionsOfMe
                  ? u.unreadMentionsOfMe.push(m)
                  : (u.unreadMentionsOfMe = [m]);
              }
              (e.t != null && e.t > 0 && n.add(e.id.toString()),
                e.t != null && e.t > u.t && (u.t = Math.max(e.t, u.t)),
                t.set(l, u));
            }
            var p = o(
                "WAWebDBMessageUtils",
              ).isCoexCallingPermissionsRequestMessage(e),
              _ =
                !p &&
                o(
                  "WAWebDBMessageUtils",
                ).isCoexCallingPermissionsResponseMessage(e);
            (p || _) &&
              o("WAWebVoipGatingUtils").isCoexCallingPermissionsEnabled() &&
              (p
                ? (u.capiCallingPermissionType = o(
                    "WAWebDBCAPIPermissions",
                  ).CloudAPICallingPermissionType.PENDING)
                : _ &&
                  (u.capiCallingPermissionType = o(
                    "WAWebDBMessageUtils",
                  ).getSelectedCallingPermissions(e)),
              t.set(l, u));
          });
          var l = Array.from(t.keys()),
            s = Array.from(a.keys()).filter(function (e) {
              return !t.has(e);
            }),
            u = yield o("WAWebSchemaChat").getChatTable().bulkGet(l.concat(s)),
            c = u.slice(0, l.length),
            d = r("justknobx")._("310"),
            m = [],
            p = [],
            _ = !1,
            f = c.map(function (e, n) {
              var r,
                a,
                i,
                s = l[n],
                u = t.get(s),
                c = (u == null ? void 0 : u.unread) || 0,
                f = Math.max(0, e ? e.unreadCount : 0),
                g = (u == null ? void 0 : u.t) || void 0;
              e && e.t != null && (g == null || e.t > g) && (g = e.t);
              var h = [],
                y =
                  (r = e == null ? void 0 : e.archiveAtMentionViewedInDrawer) !=
                  null
                    ? r
                    : !1,
                C =
                  (a = u == null ? void 0 : u.unreadMentionsOfMe) != null
                    ? a
                    : [],
                b =
                  (i = e == null ? void 0 : e.unreadMentionsOfMe) != null
                    ? i
                    : [];
              (C.length > 0 && (y = !1), (h = C.concat(b)));
              var v = {
                id: s,
                unreadCount: f + c,
                t: g,
                unreadMentionsOfMe: h,
                archiveAtMentionViewedInDrawer: y,
              };
              d &&
                e == null &&
                (u == null ? void 0 : u.broadcast) === !0 &&
                (v.createdLocally = !0);
              var S = o("WAWebWidFactory").createWid(s),
                R = u == null ? void 0 : u.capiCallingPermissionType;
              return (
                R != null &&
                  ((v.capiCallingPermissionType = R),
                  m.push({ chatId: S, capiCallingPermissionType: R })),
                o("WAWebLidMigrationUtils").shouldHaveAccountLid(S) &&
                  (e == null
                    ? ((v.accountLid = o("WAWebLidMigrationUtils")
                        .toUserLidOrThrow(S)
                        .toString()),
                      S.isLid() &&
                        (o("WAWebApiContact").getPhoneNumber(S) != null ||
                        o(
                          "WAWebUserPrefsPhoneNumberHidingThreadPromotionMigration",
                        ).hasPhoneNumberHidingThreadPromotionMigrationStarted()
                          ? (v.lidOriginType =
                              o("WAWebUsernameTypes").LidOriginType.GENERAL)
                          : (v.lidOriginType =
                              o("WAWebUsernameTypes").LidOriginType.PNH_CTWA)))
                    : e.accountLid == null &&
                      (_ ||
                        (o("WAWebLidMigrationLogging").logLidMetadata(),
                        (_ = !0)),
                      p.length < 3 && p.push(S.toLogString()))),
                v
              );
            });
          (p.length > 0 &&
            o("WALogger")
              .ERROR(
                h ||
                  (h = babelHelpers.taggedTemplateLiteralLoose([
                    "getUpdatedChatMetadata: ",
                    " chats from DB have no account_lid => ",
                    "",
                  ])),
                p.length,
                p,
              )
              .sendLogs("chat-in-db-has-no-account-lid")
              .tags("missing-lid"),
            o("WALogger").LOG(
              y ||
                (y = babelHelpers.taggedTemplateLiteralLoose([
                  "[offline-resume][msg-cache]: storing chat updates for ",
                  " chats",
                ])),
              f.length,
            ));
          var g = c.some(function (e) {
            return e == null;
          });
          if (g) {
            var b = new Set(
                c.map(function (e) {
                  return e == null ? void 0 : e.id;
                }),
              ),
              v = r("countWhere")(l, function (e) {
                return r("WAWebWid").isRegularUserNoImply(e) && !b.has(e);
              });
            v > 0 &&
              (new (o("WAWebWebcChatCreateWamEvent").WebcChatCreateWamEvent)({
                creationMethod: o("WAWebWamEnumWebcChatCreateCreationMethod")
                  .WEBC_CHAT_CREATE_CREATION_METHOD.MISSING_WHEN_SAVING_MESSAGE,
                noCreated: v,
              }).commit(),
              o("WALogger")
                .ERROR(
                  C ||
                    (C = babelHelpers.taggedTemplateLiteralLoose([
                      "[offline-resume][msg-cache]: missing chats when saving message: ",
                      "",
                    ])),
                  v,
                )
                .sendLogs("missing-chats-when-saving-message", {
                  sampling: r("gkx")("26258")
                    ? o("WALoggerUtils").dynamicLoggingSampling(1e-4)
                    : 1,
                }));
          }
          if (!i) return { chatUpdates: f, capiCallingPermissionUpdates: m };
          var S = f.map(function (e, t) {
            return $(c[t], e, a, n);
          });
          return (
            s.forEach(function (e, t) {
              var r = u[l.length + t];
              (r == null ? void 0 : r.chatViewMode) ===
                o("WAWebChatViewMode.flow").ChatViewModeType
                  .ONLY_MARKETING_FROM_SELF && S.push($(r, { id: e }, a, n));
            }),
            { chatUpdates: S, capiCallingPermissionUpdates: m }
          );
        })),
        x.apply(this, arguments)
      );
    }
    function $(e, t, n, r) {
      var a = n.get(t.id);
      return a == null
        ? t
        : o(
            "WAWebBizBroadcastProHiddenChatStorage",
          ).applyBizBroadcastProHiddenChatState(
            e,
            t,
            a,
            o("WAWebWidFactory").createWid(t.id),
            r,
          );
    }
    function P(e) {
      return (
        o("WAWebCommonMsgUtils").isFutureproofMsg(
          o("WAWebMsgGetters").getType(e),
        ) &&
        !e.id.remote.isBroadcast() &&
        o("WAWebDBAddOnProviders").getAddOnProviderForFutureproofMsg(e) ==
          null &&
        o("WAWebViewModeUtils").isViewModeVisibleInSurface(
          o("WAWebViewMode.flow").ViewModeSurface.CHAT,
          e.viewMode,
        )
      );
    }
    ((l.persistNewMessagesInBulk = v),
      (l.logMissingGroupParticipantLids = R),
      (l.persistNewNewsletterMessagesInBulk = I));
  },
  98,
);
