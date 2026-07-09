__d(
  "WAWebCheckChatExistsOrCreate",
  [
    "WALogger",
    "WAWebApiChat",
    "WAWebApiChatCommon",
    "WAWebApiHydrateWidsUtil",
    "WAWebBackendApi",
    "WAWebCreateChat",
    "WAWebCurrentUser",
    "WAWebGhostEphemeralChatSkip",
    "WAWebLid1X1MigrationGating",
    "WAWebMessageLidOriginType",
    "WAWebRuntimeEnvironmentUtils",
    "WAWebUsernameTypes",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f;
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return o("WAWebRuntimeEnvironmentUtils").isWorker()
            ? (yield o("WAWebApiChatCommon").getChatRecord(e)) != null
            : o("WAWebBackendApi").frontendSendAndReceive("hasChat", {
                chatId: e,
              });
        })),
        h.apply(this, arguments)
      );
    }
    var y = new Map();
    function C(e) {
      var t = e.chatOriginType,
        n = e.destinationChat,
        r = e.initialProps,
        a = e.msgMeta,
        i = e.options,
        l = n.chatId,
        s = l.isRegularUser()
          ? o(
              "WAWebMessageLidOriginType",
            ).determineLidOriginTypeForIncomingMessage(
              o("WAWebWidFactory").asUserWidOrThrow(l),
              a,
            )
          : null;
      return o("WAWebCreateChat").createChat(
        n,
        t,
        babelHelpers.extends({ createdLocally: !1, lidOriginType: s }, r),
        i,
      );
    }
    function b(e) {
      var t = e.firstIncomingMsg;
      return (
        t != null &&
        o("WAWebGhostEphemeralChatSkip").isSkippableIncomingEphemeralSettingMsg(
          t,
        )
      );
    }
    function v(e) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var r,
            a = t.destinationChat,
            i = a.chatId,
            l = i.toString();
          if (
            (o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "checkChatExistsOrCreate called with chatWid=",
                  ", accountLid=",
                  "",
                ])),
              i.toLogString(),
              (r = a.accountLid) == null ? void 0 : r.toLogString(),
            ),
            o("WAWebCurrentUser").isEmployee())
          ) {
            var h, v;
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "checkChatExistsOrCreate: first message id: ",
                  "",
                ])),
              (h =
                (v = t.options.firstIncomingMsg) == null
                  ? void 0
                  : v.id.toString()) != null
                ? h
                : "not-passed",
            );
          }
          var S = y.get(l);
          S != null && (yield S);
          var R = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e,
              n,
              r = yield g(i);
            if (r === !0) return (y.delete(l), r);
            if (b(t.options))
              return (
                o("WALogger").LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "checkChatExistsOrCreate: skipping ghost chat creation for ephemeral_setting-only first message ",
                      "",
                    ])),
                  i.toLogString(),
                ),
                y.delete(l),
                r
              );
            if (
              i.isLid() &&
              !o(
                "WAWebLid1X1MigrationGating",
              ).Lid1X1MigrationUtils.isLidMigrated() &&
              (t == null || (e = t.initialProps) == null
                ? void 0
                : e.lidOriginType) !==
                o("WAWebUsernameTypes").LidOriginType.PNH_CTWA &&
              ((n = t.msgMeta) == null ? void 0 : n.origin) !== "ctwa"
            ) {
              var a, s;
              (o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "checkChatExistsOrCreate: chat origin: ",
                    ". lid origin ",
                    ", ",
                    "",
                  ])),
                t.chatOriginType,
                (a = t.msgMeta) == null ? void 0 : a.origin,
                t == null || (s = t.initialProps) == null
                  ? void 0
                  : s.lidOriginType,
              ),
                o("WALogger")
                  .ERROR(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "checkChatExistsOrCreate: Lid chat not migrated ",
                        ", ",
                        "",
                      ])),
                    i.toLogString(),
                    t.chatOriginType,
                  )
                  .sendLogs(
                    "checkChatExistsOrCreate: asked to create Lid chat but is not migrated",
                  ));
            }
            try {
              var h;
              (o("WALogger").LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "checkChatExistsOrCreate: creating chat ",
                    ", ",
                    "",
                  ])),
                i.toLogString(),
                t == null || (h = t.initialProps) == null
                  ? void 0
                  : h.lidOriginType,
              ),
                yield C(t));
            } catch (e) {
              if (
                !o("WAWebRuntimeEnvironmentUtils").isWorker() &&
                e instanceof o("WAWebApiChat").CreateChatDuplicateError
              ) {
                var v = yield o("WAWebApiChatCommon").getChatRecord(i);
                if (v != null) {
                  yield o("WAWebBackendApi").frontendFireAndForget(
                    "chatCollectionGadd",
                    {
                      chat: babelHelpers.extends(
                        {},
                        o("WAWebApiHydrateWidsUtil").hydrateWids(v),
                        { id: i },
                      ),
                    },
                  );
                  var S = yield g(i);
                  return (
                    S ||
                      o("WALogger")
                        .ERROR(
                          p ||
                            (p = babelHelpers.taggedTemplateLiteralLoose([
                              "checkChatExistsOrCreate for ",
                              ", unable to restore chat from DB",
                            ])),
                          i.toLogString(),
                        )
                        .tags("messaging")
                        .sendLogs(
                          "checkChatExistsOrCreate failed to restore chat",
                          { sampling: 0.01 },
                        ),
                    S
                  );
                }
              }
              e instanceof Error
                ? o("WALogger")
                    .ERROR(
                      _ ||
                        (_ = babelHelpers.taggedTemplateLiteralLoose([
                          "checkChatExistsOrCreate for ",
                          ", failed",
                        ])),
                      i.toLogString(),
                    )
                    .catching(e)
                    .tags("messaging")
                    .sendLogs("checkChatExistsOrCreate failed", {
                      sampling: 0.01,
                    })
                : o("WALogger")
                    .ERROR(
                      f ||
                        (f = babelHelpers.taggedTemplateLiteralLoose([
                          "checkChatExistsOrCreate for ",
                          ", failed",
                        ])),
                      i.toLogString(),
                    )
                    .tags("messaging")
                    .sendLogs("checkChatExistsOrCreate failed", {
                      sampling: 0.01,
                    });
            }
            return (y.delete(l), r);
          })();
          return (y.set(l, R), R);
        })),
        S.apply(this, arguments)
      );
    }
    ((l.doesChatExist = g), (l.checkChatExistsOrCreate = v));
  },
  98,
);
