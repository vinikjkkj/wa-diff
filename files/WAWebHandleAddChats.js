__d(
  "WAWebHandleAddChats",
  [
    "Promise",
    "WAAsyncSleep",
    "WALogger",
    "WALongInt",
    "WAWebBackendApi",
    "WAWebBlocklistMigration",
    "WAWebChatConstants",
    "WAWebCollectionConstants",
    "WAWebConnModel",
    "WAWebCoreActionsODS",
    "WAWebDBChatValidation",
    "WAWebLid1X1MigrationGating",
    "WAWebLogoutReasonConstants",
    "WAWebMobilePlatforms",
    "WAWebSchemaChat",
    "WAWebSchemaMessage",
    "WAWebSocketLogoutJob",
    "asyncToGeneratorRuntime",
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
      c,
      d,
      m;
    function p(e) {
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
    function _(e) {
      if (o("WAWebLid1X1MigrationGating").Lid1X1MigrationUtils.isLidMigrated())
        try {
          var t = e.filter(function (e) {
            return e.id.isRegularUser() && e.accountLid == null;
          });
          t.length > 0 &&
            o("WALogger")
              .ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "handleAddChats: no account_lid for ",
                    " chats. first: ",
                    "",
                  ])),
                t.length,
                t[0].id.toLogString(),
              )
              .sendLogs("add-chats-no-account-lid")
              .tags("missing-lid");
        } catch (e) {}
    }
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          (o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "handleAddChats: ",
                " chats",
              ])),
            t.length,
          ),
            _(t));
          try {
            yield o("WAWebSchemaChat")
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
                      {
                        id: t.id.toString(),
                        muteExpiration: 0,
                        isAutoMuted: !1,
                      },
                      p(l),
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
            yield h(r("getErrorSafe")(e), t);
          }
          (yield o("WAWebBackendApi").frontendSendAndReceive(
            "chatCollectionAdd",
            {
              things: t.map(function (e) {
                var t, n;
                return babelHelpers.extends(
                  {},
                  e,
                  {
                    accountLid: (t = e.accountLid) != null ? t : void 0,
                    historyChatId: (n = e.historyChatId) != null ? n : void 0,
                  },
                  p(e),
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
            },
          ),
            o("WAWebBlocklistMigration").applyBlocklistV2Rules() &&
              (yield o("WAWebBackendApi").frontendSendAndReceive(
                "restoreBlocklist",
              )),
            (o("WAWebConnModel").Conn.platform ===
              o("WAWebMobilePlatforms").PLATFORMS.IPHONE ||
              o("WAWebConnModel").Conn.platform ===
                o("WAWebMobilePlatforms").PLATFORMS.SMBI) &&
              (r("isEmptyIterable")(t)
                ? o("WAWebBackendApi").frontendFireAndForget(
                    "msgCollectionTrigger",
                    {
                      name: o("WAWebCollectionConstants").COLLECTION_HAS_SYNCED,
                    },
                  )
                : self.setTimeout(function () {
                    o("WAWebBackendApi").frontendFireAndForget(
                      "msgCollectionTrigger",
                      {
                        name: o("WAWebCollectionConstants")
                          .COLLECTION_HAS_SYNCED,
                      },
                    );
                  }, 2500)),
            o("WAWebBackendApi").frontendFireAndForget(
              "chatCollectionTrigger",
              {
                name: o("WAWebCollectionConstants").COLLECTION_HAS_SYNCED,
                args: { count: t.length },
              },
            ));
        })),
        g.apply(this, arguments)
      );
    }
    function h(e, t) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return (
            yield C(t),
            o("WALogger")
              .ERROR(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "handleAddChats: bulkCreateOrMerge failed: is lid migrated: ",
                    "",
                  ])),
                o(
                  "WAWebLid1X1MigrationGating",
                ).Lid1X1MigrationUtils.isLidMigrated(),
              )
              .catching(e)
              .sendLogs("fail-to-add-chats-history-sync", {
                sendLogsType:
                  o("WALogger").SendLogsType.USER_FORCEFULLY_LOGGED_OUT_SAD,
              }),
            yield o("WAAsyncSleep").asyncSleep(5e3),
            o("WAWebCoreActionsODS").logSessionForcedLogout(),
            o("WAWebSocketLogoutJob").socketLogout(
              o("WAWebLogoutReasonConstants").LogoutReason.WebFailAddChat,
            )
          );
        })),
        y.apply(this, arguments)
      );
    }
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebSchemaChat").getChatTable().all(),
            r = t.map(function (e) {
              return e.id;
            }),
            a = new Set(
              t.map(function (e) {
                return e.accountLid;
              }),
            ),
            i = [],
            l = function* () {
              var e = u.accountLid;
              if (e == null) return 0;
              if (a.has(e.toString())) {
                var n = t.find(function (t) {
                  return t.accountLid === e.toString();
                });
                if (!n) return 0;
                i.push(v(n.id));
              }
            },
            s;
          for (var u of e) s = yield* l();
          yield (m || (m = n("Promise"))).all(i);
        })),
        b.apply(this, arguments)
      );
    }
    function v(e) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebSchemaMessage")
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
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "messages pre-existing before history for chat ",
                ": [",
                "]",
              ])),
            e,
            n,
          );
        })),
        S.apply(this, arguments)
      );
    }
    l.default = f;
  },
  98,
);
