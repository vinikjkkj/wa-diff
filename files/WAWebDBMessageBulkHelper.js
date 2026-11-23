__d(
  "WAWebDBMessageBulkHelper",
  [
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
    "WAWebMsgDataUtils",
    "WAWebMsgGetters",
    "WAWebMsgStoreExtensions",
    "WAWebNewsletterDBUtils",
    "WAWebQuarantineDataStore",
    "WAWebSchemaChat",
    "WAWebSchemaGroupMetadata",
    "WAWebUserPrefsPhoneNumberHidingThreadPromotionMigration",
    "WAWebUserUtils",
    "WAWebUsernameGatingUtils",
    "WAWebUsernameTypes",
    "WAWebViewMode.flow",
    "WAWebViewModeUtils",
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
    var e, s, u, c, d, m, p, _, f, g, h, y, C, b;
    async function v(e, t) {
      var n = await o("WAWebMsgStoreExtensions").prepareNewMsgsForStore(e);
      try {
        await R(n, t);
      } catch (e) {
        var a = r("getErrorSafe")(e);
        if (o("WAWebDBStoreEncryptedMsgs").isEligibleForFallback(n.length, a))
          await R(n, t, !0);
        else throw a;
      }
    }
    async function S(t, n) {
      try {
        var a,
          i = t.filter(function (e) {
            var t = e.id.participant;
            return (
              t &&
              t.isLid() &&
              o("WAWebLidMigrationUtils").toPn(t) == null &&
              e.id.remote.isGroup() &&
              !o("WAWebUserUtils").isMeAccount(t)
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
    async function R(e, t, n) {
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
      S(e);
      var a = await Promise.all([
          k(e),
          o("WAWebDBEncryptMultipleMsgs").encryptMultipleDBMsgs(e, !1),
        ]),
        i = a[0],
        l = a[1],
        s = i.capiCallingPermissionUpdates,
        u = i.chatUpdates,
        c = ["chat", "fts-indexing-queue", "message", "message-association"],
        d = r.length > 0 ? [].concat(c, ["quarantine-data"]) : c;
      (o("WAWebDBExperienceIdStore").shouldLockExperienceIdTable(e) &&
        d.push("experience-id"),
        await o("WAWebModelStorageUtils")
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
      var m = [];
      for (var p of u) {
        var g = p.chatViewMode,
          h = p.id;
        g != null &&
          m.push({ id: o("WAWebWidFactory").createWid(h), chatViewMode: g });
      }
      m.length > 0 &&
        o("WAWebBackendApi").frontendFireAndForget("chatCollectionUpdate", {
          updates: m,
        });
    }
    async function L(e) {
      var t = await Promise.all([
          k(e),
          o("WAWebDBEncryptMultipleMsgs").encryptMultipleDBMsgs(e, !1),
          o("WAWebNewsletterDBUtils")
            .getGuestNewsletterJids(
              e.map(function (e) {
                return e.id.remote.toString();
              }),
            )
            .catch(function (e) {
              return (
                o("WALogger").WARN(
                  g ||
                    (g = babelHelpers.taggedTemplateLiteralLoose([
                      "persistNewNewsletterMessagesInBulk: newsletter membership lookup failed",
                    ])),
                ),
                new Set()
              );
            }),
        ]),
        n = t[0],
        r = t[1],
        a = t[2],
        i = n.capiCallingPermissionUpdates,
        l = n.chatUpdates,
        s = ["chat", "message", "message-association"];
      (o("WAWebDBExperienceIdStore").shouldLockExperienceIdTable(e) &&
        s.push("experience-id"),
        await o("WAWebModelStorageUtils")
          .getStorage()
          .lock(s, async function (e) {
            var t = e[0];
            (o("WALogger")
              .LOG(
                h ||
                  (h = babelHelpers.taggedTemplateLiteralLoose([
                    "persistNewNewsletterMessagesInBulk: bulkCreateOrMerge",
                  ])),
              )
              .tags("missing-lid"),
              o("WAWebDBChatValidation").validateAccountLidInChatRows(
                l,
                "persistNewNewsletterMessagesInBulk",
              ),
              await t.bulkCreateOrMerge(l),
              await o(
                "WAWebDBStoreNewsletterEncryptedMsgs",
              ).storeEncryptedNewsletterMessages(r, a));
          }),
        i.length > 0 &&
          o("WAWebBackendApi").frontendFireAndForget(
            "bulkUpdateChatCapiCallingPermissionType",
            { updates: i },
          ));
    }
    function E(e) {
      return (
        o("WAWebMsgGetters").getIsUnreadType(e) &&
        !o("WAWebMsgGetters").getId(e).fromMe &&
        e.read !== !0
      );
    }
    async function k(e) {
      var t = new Map(),
        n = new Set(),
        a = new Set(),
        i = new Map(),
        l = !1;
      e.forEach(function (e) {
        var s = e.id,
          u = s.remote.toString();
        if (
          s.remote.isRegularUser() &&
          o(
            "WAWebBizBroadcastProHiddenChatClassifier",
          ).isBizBroadcastProHiddenChatsEnabled()
        ) {
          l = !0;
          var c = i.get(u);
          c == null ? i.set(u, [e]) : c.push(e);
        }
        var d = t.get(u) || {
            unread: 0,
            t: 0,
            unreadMentionsOfMe: [],
            broadcast: e.broadcast === !0,
          },
          m = o("WAWebMsgGetters").getIsUnreadType(e),
          p = m || T(e),
          _ =
            p ||
            (r("justknobx")._("6733") &&
              o("WAWebMsgDataUtils").isChatOrderingGroupEvent(e));
        if (!o("WAWebMsgGetters").getIsStatus(e) && _) {
          if (
            (p && n.add(u),
            E(e) &&
              ((d.unread += 1), o("WAWebMsgGetters").getIsImportantMessage(e)))
          ) {
            var f = { id: e.id.toString(), timestamp: e.t };
            d.unreadMentionsOfMe
              ? d.unreadMentionsOfMe.push(f)
              : (d.unreadMentionsOfMe = [f]);
          }
          (e.t != null && e.t > 0 && a.add(e.id.toString()),
            e.t != null && e.t > d.t && (d.t = Math.max(e.t, d.t)),
            t.set(u, d));
        }
        var g = o("WAWebDBMessageUtils").isCoexCallingPermissionsRequestMessage(
            e,
          ),
          h =
            !g &&
            o("WAWebDBMessageUtils").isCoexCallingPermissionsResponseMessage(e);
        (g || h) &&
          o("WAWebVoipGatingUtils").isCoexCallingPermissionsEnabled() &&
          (n.add(u),
          g
            ? (d.capiCallingPermissionType = o(
                "WAWebDBCAPIPermissions",
              ).CloudAPICallingPermissionType.PENDING)
            : h &&
              (d.capiCallingPermissionType = o(
                "WAWebDBMessageUtils",
              ).getSelectedCallingPermissions(e)),
          t.set(u, d));
      });
      var s = Array.from(t.keys()),
        u = Array.from(i.keys()).filter(function (e) {
          return !t.has(e);
        }),
        c = await o("WAWebSchemaChat").getChatTable().bulkGet(s.concat(u)),
        d = [],
        m = [];
      s.forEach(function (e, t) {
        (c[t] != null || n.has(e)) && (d.push(e), m.push(c[t]));
      });
      var p = r("justknobx")._("310"),
        _ = [],
        f = [],
        g = !1,
        h = m.map(function (e, r) {
          var a,
            i,
            l,
            s = d[r],
            u = t.get(s),
            c = (u == null ? void 0 : u.unread) || 0,
            m = Math.max(0, e ? e.unreadCount : 0),
            h = (u == null ? void 0 : u.t) || void 0;
          if (
            (e && e.t != null && (h == null || e.t > h) && (h = e.t),
            e != null && !n.has(s))
          )
            return { id: s, t: h };
          var y = [],
            C =
              (a = e == null ? void 0 : e.archiveAtMentionViewedInDrawer) !=
              null
                ? a
                : !1,
            b =
              (i = u == null ? void 0 : u.unreadMentionsOfMe) != null ? i : [],
            v =
              (l = e == null ? void 0 : e.unreadMentionsOfMe) != null ? l : [];
          (b.length > 0 && (C = !1), (y = b.concat(v)));
          var S = {
            id: s,
            unreadCount: m + c,
            t: h,
            unreadMentionsOfMe: y,
            archiveAtMentionViewedInDrawer: C,
          };
          p &&
            e == null &&
            (u == null ? void 0 : u.broadcast) === !0 &&
            (S.createdLocally = !0);
          var R = o("WAWebWidFactory").createWid(s),
            L = u == null ? void 0 : u.capiCallingPermissionType;
          return (
            L != null &&
              ((S.capiCallingPermissionType = L),
              _.push({ chatId: R, capiCallingPermissionType: L })),
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
                  (g ||
                    (o("WAWebLidMigrationLogging").logLidMetadata(), (g = !0)),
                  f.length < 3 && f.push(R.toLogString()))),
            S
          );
        });
      (f.length > 0 &&
        o("WALogger")
          .ERROR(
            y ||
              (y = babelHelpers.taggedTemplateLiteralLoose([
                "getUpdatedChatMetadata: ",
                " chats from DB have no account_lid => ",
                "",
              ])),
            f.length,
            f,
          )
          .sendLogs("chat-in-db-has-no-account-lid")
          .tags("missing-lid"),
        o("WALogger").LOG(
          C ||
            (C = babelHelpers.taggedTemplateLiteralLoose([
              "[offline-resume][msg-cache]: storing chat updates for ",
              " chats",
            ])),
          h.length,
        ));
      var v = m.some(function (e) {
        return e == null;
      });
      if (v) {
        var S = new Set(
            m.map(function (e) {
              return e == null ? void 0 : e.id;
            }),
          ),
          R = r("countWhere")(d, function (e) {
            return r("WAWebWid").isRegularUserNoImply(e) && !S.has(e);
          });
        R > 0 &&
          (new (o("WAWebWebcChatCreateWamEvent").WebcChatCreateWamEvent)({
            creationMethod: o("WAWebWamEnumWebcChatCreateCreationMethod")
              .WEBC_CHAT_CREATE_CREATION_METHOD.MISSING_WHEN_SAVING_MESSAGE,
            noCreated: R,
          }).commit(),
          o("WALogger")
            .ERROR(
              b ||
                (b = babelHelpers.taggedTemplateLiteralLoose([
                  "[offline-resume][msg-cache]: missing chats when saving message: ",
                  "",
                ])),
              R,
            )
            .sendLogs("missing-chats-when-saving-message", {
              sampling: r("gkx")("26258")
                ? o("WALoggerUtils").dynamicLoggingSampling(1e-4)
                : 1,
            }));
      }
      if (!l) return { chatUpdates: h, capiCallingPermissionUpdates: _ };
      var L = h.map(function (e, t) {
        return I(m[t], e, i, a);
      });
      return (
        u.forEach(function (e, t) {
          var n = c[s.length + t];
          (n == null ? void 0 : n.chatViewMode) ===
            o("WAWebChatViewMode.flow").ChatViewModeType
              .ONLY_MARKETING_FROM_SELF && L.push(I(n, { id: e }, i, a));
        }),
        { chatUpdates: L, capiCallingPermissionUpdates: _ }
      );
    }
    function I(e, t, n, r) {
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
    function T(e) {
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
      (l.logMissingGroupParticipantLids = S),
      (l.persistNewNewsletterMessagesInBulk = L),
      (l.countsTowardChatUnread = E));
  },
  98,
);
