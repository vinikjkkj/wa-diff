__d(
  "WAWebSyncdGetChat",
  [
    "$InternalEnum",
    "WAJids",
    "WALogger",
    "WASyncdConst",
    "WAWebApiChatCommon",
    "WAWebApiContact",
    "WAWebBackendApi",
    "WAWebHistorySyncLidChatGating",
    "WAWebLid1X1MigrationGating",
    "WAWebSchemaChat",
    "WAWebWid",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "err",
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
      h = n("$InternalEnum")({
        GetArchiveChatMutation: "getArchiveChatMutation",
        GetClearChatMutation: "getClearChatMutation",
        GetPinMutation: "getPinMutation",
      });
    function y(t, n) {
      n.isRegularUserPn() &&
        o("WAWebHistorySyncLidChatGating").isForcedHistoryLidChat() &&
        o("WALogger").WARN(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "syncd: ",
              ": unexpected PN chat input with isForcedHistoryLidChat enabled ",
              "",
            ])),
          t,
          n.toLogString(),
        );
    }
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.sendLogs,
            n = t === void 0 ? !0 : t,
            a = e.skipDb,
            i = a === void 0 ? !1 : a;
          try {
            var l = o("WAWebHistorySyncLidChatGating").isForcedHistoryLidChat();
            if (!l) {
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[history lid chat] chatDistribution: skipped, isForcedHistoryLidChat is disabled",
                  ])),
              );
              return;
            }
            var m = null;
            if (!i) {
              var p = 0,
                _ = yield o("WAWebSchemaChat").getChatTable().allPrimaryKeys();
              for (var f of _)
                r("WAWebWid").isRegularUserNoImply(f) &&
                  !r("WAWebWid").isStringLid(f) &&
                  p++;
              m = p;
            }
            var g = yield o("WAWebBackendApi").frontendSendAndReceive(
                "getChatModelsArray",
                {},
              ),
              h = yield g,
              y = 0;
            for (var C of h) C.id.isRegularUserPn() && y++;
            if ((m != null && m > 0) || y > 0) {
              var b = o("WALogger").ERROR(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[history lid chat] chatDistribution: found PN chats with isForcedHistoryLidChat enabled. db: pnCount=",
                    " collection: pnCount=",
                    "",
                  ])),
                m != null ? m : "n/a",
                y,
              );
              n && b.sendLogs("syncd-pn-chats-with-forced-lid");
            } else
              o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[history lid chat] chatDistribution: completed, no error reported",
                  ])),
              );
          } catch (e) {
            o("WALogger").WARN(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "[history lid chat] logLidPnChatDistribution: failed ",
                  "",
                ])),
              e,
            );
          }
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
          if (
            o(
              "WAWebLid1X1MigrationGating",
            ).Lid1X1MigrationUtils.isLidMigrated() &&
            e.isLid()
          ) {
            var t,
              n = yield o("WAWebSchemaChat")
                .getChatTable()
                .equals(["accountLid"], e.toString(), { shouldDecrypt: !1 });
            return (
              n.length > 0 && (t = n[0]),
              t == null
                ? {
                    success: !1,
                    orphanModel: {
                      modelId: e.toString(),
                      modelType: o("WASyncdConst").SyncModelType.Account,
                    },
                  }
                : (o("WALogger").LOG(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "syncd: resolveChatForMutationIndex: found chat using accountLid query ",
                        "",
                      ])),
                    e.toLogString(),
                  ),
                  { success: !0, chat: t })
            );
          }
          if (
            o("WAWebHistorySyncLidChatGating").isForcedHistoryLidChat() &&
            e.isRegularUserPn()
          ) {
            var r = yield o("WAWebApiChatCommon").getChatRecordByHistoryChatId(
              o("WAJids").unsafeCoerceToPhoneUserJid(e.toString()),
            );
            return r != null
              ? (o("WALogger").LOG(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "syncd: resolveChatForMutationIndex: found chat using historyChatId query ",
                      "",
                    ])),
                  e.toLogString(),
                ),
                { success: !0, chat: r })
              : {
                  success: !1,
                  orphanModel: {
                    modelId: e.toString(),
                    modelType: o("WASyncdConst").SyncModelType.Chat,
                  },
                };
          }
          var a = yield o("WAWebSchemaChat")
            .getChatTable()
            .get(e.toString(), !1);
          return a == null
            ? {
                success: !1,
                orphanModel: {
                  modelId: e.toString(),
                  modelType: o("WASyncdConst").SyncModelType.Chat,
                },
              }
            : (o("WALogger").LOG(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "syncd: resolveChatForMutationIndex: found chat using chatId query ",
                    "",
                  ])),
                e.toLogString(),
              ),
              { success: !0, chat: a });
        })),
        S.apply(this, arguments)
      );
    }
    function R(e, t) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (!e.isRegularUser()) return e.toJid();
          var n = yield I(e);
          if (n == null)
            throw (
              yield C({ sendLogs: !1, skipDb: !0 }),
              o("WALogger")
                .ERROR(
                  f ||
                    (f = babelHelpers.taggedTemplateLiteralLoose([
                      "syncd: getChatJidMutationIndexForChat: chat not found for action ",
                      " ",
                      ". is force lid chat enabled? ",
                      "",
                    ])),
                  t,
                  e.toLogString(),
                  o("WAWebHistorySyncLidChatGating").isForcedHistoryLidChat(),
                )
                .sendLogs("syncd-missing-chat-outgoing-mutation"),
              r("err")("syncd-missing-chat-outgoing-mutation")
            );
          return n;
        })),
        L.apply(this, arguments)
      );
    }
    function E(e) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (!e.isRegularUser()) return e.toJid();
          var t = yield I(e);
          if (t != null) return t;
          var n = o("WAWebApiContact").getCurrentLid(
            o("WAWebWidFactory").asUserWidOrThrow(e),
          );
          return n != null ? n.toJid() : e.toJid();
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
          if (
            !o(
              "WAWebLid1X1MigrationGating",
            ).Lid1X1MigrationUtils.isLidMigrated() ||
            e.isLid()
          )
            return e.toJid();
          var t = yield o("WAWebSchemaChat")
            .getChatTable()
            .get(e.toString(), !1);
          if (t != null) {
            var n = t.accountLid;
            if (n == null)
              throw (
                o("WALogger")
                  .ERROR(
                    g ||
                      (g = babelHelpers.taggedTemplateLiteralLoose([
                        "syncd: getChatJidMutationIndexForChatImpl: accountLid not found in chat row}",
                      ])),
                  )
                  .sendLogs("syncd-missing-accountLid-outgoing-mutation"),
                r("err")("syncd-missing-accountLid-outgoing-mutation")
              );
            return n;
          }
        })),
        T.apply(this, arguments)
      );
    }
    ((l.PnMutationCaller = h),
      (l.warnIfPnMutationWithForcedLid = y),
      (l.logLidPnChatDistribution = C),
      (l.resolveChatForMutationIndex = v),
      (l.getChatJidMutationIndexForChat = R),
      (l.getWidMutationIndexForWid = E));
  },
  98,
);
