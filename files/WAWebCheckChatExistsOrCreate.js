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
    "WAWebLid1X1MigrationGating",
    "WAWebMessageLidOriginType",
    "WAWebRuntimeEnvironmentUtils",
    "WAWebUsernameTypes",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _;
    async function f(e) {
      return o("WAWebRuntimeEnvironmentUtils").isWorker()
        ? (await o("WAWebApiChatCommon").getChatRecord(e)) != null
        : o("WAWebBackendApi").frontendSendAndReceive("hasChat", { chatId: e });
    }
    var g = new Map();
    function h(e) {
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
    async function y(t) {
      var n,
        r = t.destinationChat,
        a = r.chatId,
        i = a.toString();
      if (
        (o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "checkChatExistsOrCreate called with chatWid=",
              ", accountLid=",
              "",
            ])),
          a.toLogString(),
          (n = r.accountLid) == null ? void 0 : n.toLogString(),
        ),
        o("WAWebCurrentUser").isEmployee())
      ) {
        var l, y;
        o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "checkChatExistsOrCreate: first message id: ",
              "",
            ])),
          (l =
            (y = t.options.firstIncomingMsg) == null
              ? void 0
              : y.id.toString()) != null
            ? l
            : "not-passed",
        );
      }
      var C = g.get(i);
      C != null && (await C);
      var b = (async function () {
        var e = await f(a);
        if (e !== !0) {
          var n, r;
          if (
            a.isLid() &&
            !o(
              "WAWebLid1X1MigrationGating",
            ).Lid1X1MigrationUtils.isLidMigrated() &&
            (t == null || (n = t.initialProps) == null
              ? void 0
              : n.lidOriginType) !==
              o("WAWebUsernameTypes").LidOriginType.PNH_CTWA &&
            ((r = t.msgMeta) == null ? void 0 : r.origin) !== "ctwa"
          ) {
            var l, s;
            (o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "checkChatExistsOrCreate: chat origin: ",
                  ". lid origin ",
                  ", ",
                  "",
                ])),
              t.chatOriginType,
              (l = t.msgMeta) == null ? void 0 : l.origin,
              t == null || (s = t.initialProps) == null
                ? void 0
                : s.lidOriginType,
            ),
              o("WALogger")
                .ERROR(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "checkChatExistsOrCreate: Lid chat not migrated ",
                      ", ",
                      "",
                    ])),
                  a.toLogString(),
                  t.chatOriginType,
                )
                .sendLogs(
                  "checkChatExistsOrCreate: asked to create Lid chat but is not migrated",
                ));
          }
          try {
            var y;
            (o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "checkChatExistsOrCreate: creating chat ",
                  ", ",
                  "",
                ])),
              a.toLogString(),
              t == null || (y = t.initialProps) == null
                ? void 0
                : y.lidOriginType,
            ),
              await h(t));
          } catch (e) {
            if (
              !o("WAWebRuntimeEnvironmentUtils").isWorker() &&
              e instanceof o("WAWebApiChat").CreateChatDuplicateError
            ) {
              var C = await o("WAWebApiChatCommon").getChatRecord(a);
              if (C != null) {
                await o("WAWebBackendApi").frontendFireAndForget(
                  "chatCollectionGadd",
                  {
                    chat: babelHelpers.extends(
                      {},
                      o("WAWebApiHydrateWidsUtil").hydrateWids(C),
                      { id: a },
                    ),
                  },
                );
                var b = await f(a);
                return (
                  b ||
                    o("WALogger")
                      .ERROR(
                        m ||
                          (m = babelHelpers.taggedTemplateLiteralLoose([
                            "checkChatExistsOrCreate for ",
                            ", unable to restore chat from DB",
                          ])),
                        a.toLogString(),
                      )
                      .tags("messaging")
                      .sendLogs(
                        "checkChatExistsOrCreate failed to restore chat",
                        { sampling: 0.01 },
                      ),
                  b
                );
              }
            }
            e instanceof Error
              ? o("WALogger")
                  .ERROR(
                    p ||
                      (p = babelHelpers.taggedTemplateLiteralLoose([
                        "checkChatExistsOrCreate for ",
                        ", failed",
                      ])),
                    a.toLogString(),
                  )
                  .catching(e)
                  .tags("messaging")
                  .sendLogs("checkChatExistsOrCreate failed", {
                    sampling: 0.01,
                  })
              : o("WALogger")
                  .ERROR(
                    _ ||
                      (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "checkChatExistsOrCreate for ",
                        ", failed",
                      ])),
                    a.toLogString(),
                  )
                  .tags("messaging")
                  .sendLogs("checkChatExistsOrCreate failed", {
                    sampling: 0.01,
                  });
          }
        }
        return (g.delete(i), e);
      })();
      return (g.set(i, b), b);
    }
    ((l.doesChatExist = f), (l.checkChatExistsOrCreate = y));
  },
  98,
);
