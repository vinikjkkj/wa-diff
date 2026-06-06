__d(
  "WAWebDBMessageBulkHelper",
  [
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
    "compactMap",
    "countWhere",
    "getErrorSafe",
    "gkx",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f, g, h, y, C;
    async function b(e, t) {
      try {
        await S(e, t);
      } catch (a) {
        var n = r("getErrorSafe")(a);
        if (o("WAWebDBStoreEncryptedMsgs").isEligibleForFallback(e.length, n))
          await S(e, t, !0);
        else throw n;
      }
    }
    async function v(t, n) {
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
            var _ = await o("WAWebApiContact").bulkGetContactRecord(l),
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
        var y = await o("WAWebSchemaGroupMetadata")
            .getGroupMetadataTable()
            .anyOf(["id"], Array.from(h)),
          C = [];
        (y.forEach(function (e) {
          C.length < 3 &&
            C.push({ announce: e.announce, isParentGroup: e.isParentGroup });
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
                `,
          is history: `,
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
    }
    async function S(e, t, n) {
      (n === void 0 && (n = !1),
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
      var r = o("WAWebQuarantineDataStore").extractQuarantineDataFromMessages(
        e,
      );
      v(e);
      var a = await Promise.all([
          L(e),
          o("WAWebDBEncryptMultipleMsgs").encryptMultipleDBMsgs(e, !1),
        ]),
        i = a[0],
        l = a[1],
        s = i.capiCallingPermissionUpdates,
        u = i.chatUpdates,
        c = ["chat", "fts-indexing-queue", "message", "message-association"],
        d = r.length > 0 ? [].concat(c, ["quarantine-data"]) : c;
      (await o("WAWebModelStorageUtils")
        .getStorage()
        .lock(d, async function (e) {
          var a = e[0],
            i = e[1],
            s = e[2],
            c = e[3],
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
              u,
              "persistNewMessagesInBulk",
            ),
            await a.bulkCreateOrMerge(u),
            await o("WAWebDBStoreEncryptedMsgs").storeEncryptedDBMessages(
              l,
              t,
              !1,
              n,
            ),
            await o(
              "WAWebQuarantineDataStore",
            ).bulkCreateOrReplaceQuarantineData(r, d));
        }),
        s.length > 0 &&
          o("WAWebBackendApi").frontendFireAndForget(
            "bulkUpdateChatCapiCallingPermissionType",
            { updates: s },
          ));
    }
    async function R(e) {
      var t = await Promise.all([
          L(e),
          o("WAWebDBEncryptMultipleMsgs").encryptMultipleDBMsgs(e, !1),
        ]),
        n = t[0],
        r = t[1],
        a = n.capiCallingPermissionUpdates,
        i = n.chatUpdates;
      (await o("WAWebModelStorageUtils")
        .getStorage()
        .lock(["chat", "message", "message-association"], async function (e) {
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
              i,
              "persistNewNewsletterMessagesInBulk",
            ),
            await t.bulkCreateOrMerge(i),
            await o(
              "WAWebDBStoreNewsletterEncryptedMsgs",
            ).storeEncryptedNewsletterMessages(r));
        }),
        a.length > 0 &&
          o("WAWebBackendApi").frontendFireAndForget(
            "bulkUpdateChatCapiCallingPermissionType",
            { updates: a },
          ));
    }
    async function L(e) {
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
          (e.t != null && e.t > a.t && (a.t = Math.max(e.t, a.t)), t.set(r, a));
        }
        var l = o("WAWebDBMessageUtils").isCoexCallingPermissionsRequestMessage(
            e,
          ),
          s =
            !l &&
            o("WAWebDBMessageUtils").isCoexCallingPermissionsResponseMessage(e);
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
        a = await o("WAWebSchemaChat").getChatTable().bulkGet(n),
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
              (c = p == null ? void 0 : p.unreadMentionsOfMe) != null ? c : [],
            b =
              (d = e == null ? void 0 : e.unreadMentionsOfMe) != null ? d : [];
          (C.length > 0 && (y = !1), (h = C.concat(b)));
          var v = {
            id: m,
            unreadCount: f + _,
            t: g,
            unreadMentionsOfMe: h,
            archiveAtMentionViewedInDrawer: y,
          };
          i &&
            e == null &&
            (p == null ? void 0 : p.broadcast) === !0 &&
            (v.createdLocally = !0);
          var S = o("WAWebWidFactory").createWid(m),
            R = p == null ? void 0 : p.capiCallingPermissionType;
          return (
            R != null &&
              ((v.capiCallingPermissionType = R),
              l.push({ chatId: S, capiCallingPermissionType: R })),
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
                  (u ||
                    (o("WAWebLidMigrationUtils").logLidMetadata(), (u = !0)),
                  s.length < 3 && s.push(S.toLogString()))),
            v
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
          p = r("countWhere")(n, function (e) {
            return r("WAWebWid").isRegularUserNoImply(e) && !m.has(e);
          });
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
    }
    ((l.persistNewMessagesInBulk = b),
      (l.logMissingGroupParticipantLids = v),
      (l.persistNewNewsletterMessagesInBulk = R));
  },
  98,
);
