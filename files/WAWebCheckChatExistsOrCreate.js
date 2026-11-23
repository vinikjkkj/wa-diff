__d(
  "WAWebCheckChatExistsOrCreate",
  [
    "WALogger",
    "WAWebApiChat",
    "WAWebApiChatCommon",
    "WAWebApiHydrateWidsUtil",
    "WAWebBackendApi",
    "WAWebChatViewMode.flow",
    "WAWebCreateChat",
    "WAWebCurrentUser",
    "WAWebGhostEphemeralChatSkip",
    "WAWebMessageLidOriginType",
    "WAWebRuntimeEnvironmentUtils",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p;
    async function _(e) {
      return o("WAWebRuntimeEnvironmentUtils").isWorker()
        ? (await o("WAWebApiChatCommon").getChatRecord(e)) != null
        : o("WAWebBackendApi").frontendSendAndReceive("hasChat", { chatId: e });
    }
    var f = new Map();
    function g(e) {
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
      return o("WAWebCreateChat").createChat({
        createChatOrigin: t,
        destination: n,
        initialProps: babelHelpers.extends(
          { createdLocally: !1, lidOriginType: s },
          r,
        ),
        options: i,
      });
    }
    function h(e) {
      var t = e.firstIncomingMsg;
      return (
        t != null &&
        o("WAWebGhostEphemeralChatSkip").isSkippableIncomingEphemeralSettingMsg(
          t,
        )
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
      var C = f.get(i);
      C != null && (await C);
      var b = (async function () {
        var e = await _(a);
        if (e === !0) return (f.delete(i), e);
        if (h(t.options))
          return (
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "checkChatExistsOrCreate: skipping ghost chat creation for ephemeral_setting-only first message ",
                  "",
                ])),
              a.toLogString(),
            ),
            f.delete(i),
            e
          );
        try {
          var n;
          (o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "checkChatExistsOrCreate: creating chat ",
                ", ",
                "",
              ])),
            a.toLogString(),
            t == null || (n = t.initialProps) == null
              ? void 0
              : n.lidOriginType,
          ),
            await g(t));
        } catch (e) {
          if (
            !o("WAWebRuntimeEnvironmentUtils").isWorker() &&
            e instanceof o("WAWebApiChat").CreateChatDuplicateError
          ) {
            var r = await o("WAWebApiChatCommon").getChatRecord(a);
            if (r != null) {
              var l;
              await o("WAWebBackendApi").frontendFireAndForget(
                "chatCollectionGadd",
                {
                  chat: babelHelpers.extends(
                    {},
                    o("WAWebApiHydrateWidsUtil").hydrateWids(r),
                    {
                      id: a,
                      chatViewMode:
                        (l = r.chatViewMode) != null
                          ? l
                          : o("WAWebChatViewMode.flow").ChatViewModeType
                              .VISIBLE,
                    },
                  ),
                },
              );
              var s = await _(a);
              return (
                s ||
                  o("WALogger")
                    .ERROR(
                      d ||
                        (d = babelHelpers.taggedTemplateLiteralLoose([
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
                s
              );
            }
          }
          e instanceof Error
            ? o("WALogger")
                .ERROR(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "checkChatExistsOrCreate for ",
                      ", failed",
                    ])),
                  a.toLogString(),
                )
                .catching(e)
                .tags("messaging")
                .sendLogs("checkChatExistsOrCreate failed", { sampling: 0.01 })
            : o("WALogger")
                .ERROR(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "checkChatExistsOrCreate for ",
                      ", failed",
                    ])),
                  a.toLogString(),
                )
                .tags("messaging")
                .sendLogs("checkChatExistsOrCreate failed", { sampling: 0.01 });
        }
        return (f.delete(i), e);
      })();
      return (f.set(i, b), b);
    }
    ((l.doesChatExist = _), (l.checkChatExistsOrCreate = y));
  },
  98,
);
