__d(
  "WAWebHandleAddChats",
  [
    "WALogger",
    "WALongInt",
    "WAPromiseDelays",
    "WAWebBackendApi",
    "WAWebBlocklistMigration",
    "WAWebChatConstants",
    "WAWebCollectionConstants",
    "WAWebConnModel",
    "WAWebCoreActionsODS",
    "WAWebDBChatValidation",
    "WAWebLogoutReasonConstants",
    "WAWebMobilePlatforms",
    "WAWebSchemaChat",
    "WAWebSchemaMessage",
    "WAWebSocketLogoutJob",
    "getErrorSafe",
    "isEmptyIterable",
  ],
  function (t, n, r, o, a, i, l) {
    var e = [
        "accountLid",
        "disappearingModeInitiator",
        "disappearingModeTrigger",
        "pendingInitialLoading",
      ],
      s,
      u,
      c;
    function d(e) {
      return {
        ephemeralSettingTimestamp: o("WALongInt").maybeNumberOrThrowIfTooLarge(
          e.ephemeralSettingTimestamp,
        ),
        tcTokenSenderTimestamp: o("WALongInt").maybeNumberOrThrowIfTooLarge(
          e.tcTokenSenderTimestamp,
        ),
        tcTokenTimestamp: o("WALongInt").maybeNumberOrThrowIfTooLarge(
          e.tcTokenTimestamp,
        ),
      };
    }
    async function m(t) {
      o("WALogger").LOG(
        s ||
          (s = babelHelpers.taggedTemplateLiteralLoose([
            "handleAddChats: ",
            " chats",
          ])),
        t.length,
      );
      try {
        await o("WAWebSchemaChat")
          .getChatTable()
          .bulkCreateOrMerge(
            t.map(function (t) {
              var n = t.accountLid,
                r = t.disappearingModeInitiator,
                a = t.disappearingModeTrigger,
                i = t.pendingInitialLoading,
                l = babelHelpers.objectWithoutPropertiesLoose(t, e),
                s = babelHelpers.extends(
                  {},
                  l,
                  { id: t.id.toString(), muteExpiration: 0, isAutoMuted: !1 },
                  d(l),
                  { endOfHistoryTransferType: t.endOfHistoryTransferType },
                );
              return (
                n != null && (s.accountLid = n.toString()),
                r != null && (s.disappearingModeInitiator = r),
                a != null && (s.disappearingModeTrigger = a),
                o("WAWebDBChatValidation").validateAccountLidInChatRow(
                  s,
                  "handleAddChats",
                ),
                s
              );
            }),
          );
      } catch (e) {
        await p(r("getErrorSafe")(e), t);
      }
      (await o("WAWebBackendApi").frontendSendAndReceive("chatCollectionAdd", {
        things: t.map(function (e) {
          var t, n;
          return babelHelpers.extends(
            {},
            e,
            {
              accountLid: (t = e.accountLid) != null ? t : void 0,
              historyChatId: (n = e.historyChatId) != null ? n : void 0,
            },
            d(e),
            {
              endOfHistoryTransferType: o(
                "WAWebChatConstants",
              ).ConversationEndOfHistoryTransferModelPropType.cast(
                e.endOfHistoryTransferType,
              ),
            },
          );
        }),
        options: { merge: !0 },
      }),
        o("WAWebBlocklistMigration").applyBlocklistV2Rules() &&
          (await o("WAWebBackendApi").frontendSendAndReceive(
            "restoreBlocklist",
          )),
        (o("WAWebConnModel").Conn.platform ===
          o("WAWebMobilePlatforms").PLATFORMS.IPHONE ||
          o("WAWebConnModel").Conn.platform ===
            o("WAWebMobilePlatforms").PLATFORMS.SMBI) &&
          (r("isEmptyIterable")(t)
            ? o("WAWebBackendApi").frontendFireAndForget(
                "msgCollectionTrigger",
                { name: o("WAWebCollectionConstants").COLLECTION_HAS_SYNCED },
              )
            : self.setTimeout(function () {
                o("WAWebBackendApi").frontendFireAndForget(
                  "msgCollectionTrigger",
                  { name: o("WAWebCollectionConstants").COLLECTION_HAS_SYNCED },
                );
              }, 2500)),
        o("WAWebBackendApi").frontendFireAndForget("chatCollectionTrigger", {
          name: o("WAWebCollectionConstants").COLLECTION_HAS_SYNCED,
          args: { count: t.length },
        }));
    }
    async function p(e, t) {
      return (
        await _(t),
        o("WALogger")
          .ERROR(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "handleAddChats: bulkCreateOrMerge failed",
              ])),
          )
          .catching(e)
          .sendLogs("fail-to-add-chats-history-sync", {
            sendLogsType:
              o("WALogger").SendLogsType.USER_FORCEFULLY_LOGGED_OUT_SAD,
          }),
        await o("WAPromiseDelays").delayMs(5e3),
        o("WAWebCoreActionsODS").logSessionForcedLogout(),
        o("WAWebSocketLogoutJob").socketLogout(
          o("WAWebLogoutReasonConstants").LogoutReason.WebFailAddChat,
        )
      );
    }
    async function _(e) {
      var t = await o("WAWebSchemaChat").getChatTable().all(),
        n = t.map(function (e) {
          return e.id;
        }),
        r = new Set(
          t.map(function (e) {
            return e.accountLid;
          }),
        ),
        a = [],
        i = async function () {
          var e = s.accountLid;
          if (e == null) return 0;
          if (r.has(e.toString())) {
            var n = t.find(function (t) {
              return t.accountLid === e.toString();
            });
            if (!n) return 0;
            a.push(f(n.id));
          }
        },
        l;
      for (var s of e) l = await i();
      await Promise.all(a);
    }
    async function f(e) {
      var t = await o("WAWebSchemaMessage")
          .getMessageTable()
          .between(["internalId"], e + "_", e + "_z", {
            lowerInclusive: !0,
            upperInclusive: !1,
            shouldDecrypt: !1,
          }),
        n = t
          .map(function (e) {
            return { type: e.type, subtype: e.subtype };
          })
          .map(function (e) {
            return JSON.stringify(e);
          })
          .join(",");
      o("WALogger").LOG(
        c ||
          (c = babelHelpers.taggedTemplateLiteralLoose([
            "messages pre-existing before history for chat ",
            ": [",
            "]",
          ])),
        e,
        n,
      );
    }
    l.default = m;
  },
  98,
);
