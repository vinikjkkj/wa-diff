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
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p;
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return o("WAWebRuntimeEnvironmentUtils").isWorker()
            ? (yield o("WAWebApiChatCommon").getChatRecord(e)) != null
            : o("WAWebBackendApi").frontendSendAndReceive("hasChat", {
                chatId: e,
              });
        })),
        f.apply(this, arguments)
      );
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
    function y(e) {
      var t = e.firstIncomingMsg;
      return (
        t != null &&
        o("WAWebGhostEphemeralChatSkip").isSkippableIncomingEphemeralSettingMsg(
          t,
        )
      );
    }
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
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
            var f, C;
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "checkChatExistsOrCreate: first message id: ",
                  "",
                ])),
              (f =
                (C = t.options.firstIncomingMsg) == null
                  ? void 0
                  : C.id.toString()) != null
                ? f
                : "not-passed",
            );
          }
          var b = g.get(l);
          b != null && (yield b);
          var v = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e = yield _(i);
            if (e === !0) return (g.delete(l), e);
            if (y(t.options))
              return (
                o("WALogger").LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "checkChatExistsOrCreate: skipping ghost chat creation for ephemeral_setting-only first message ",
                      "",
                    ])),
                  i.toLogString(),
                ),
                g.delete(l),
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
                i.toLogString(),
                t == null || (n = t.initialProps) == null
                  ? void 0
                  : n.lidOriginType,
              ),
                yield h(t));
            } catch (e) {
              if (
                !o("WAWebRuntimeEnvironmentUtils").isWorker() &&
                e instanceof o("WAWebApiChat").CreateChatDuplicateError
              ) {
                var r = yield o("WAWebApiChatCommon").getChatRecord(i);
                if (r != null) {
                  var a;
                  yield o("WAWebBackendApi").frontendFireAndForget(
                    "chatCollectionGadd",
                    {
                      chat: babelHelpers.extends(
                        {},
                        o("WAWebApiHydrateWidsUtil").hydrateWids(r),
                        {
                          id: i,
                          chatViewMode:
                            (a = r.chatViewMode) != null
                              ? a
                              : o("WAWebChatViewMode.flow").ChatViewModeType
                                  .VISIBLE,
                        },
                      ),
                    },
                  );
                  var s = yield _(i);
                  return (
                    s ||
                      o("WALogger")
                        .ERROR(
                          d ||
                            (d = babelHelpers.taggedTemplateLiteralLoose([
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
                      i.toLogString(),
                    )
                    .catching(e)
                    .tags("messaging")
                    .sendLogs("checkChatExistsOrCreate failed", {
                      sampling: 0.01,
                    })
                : o("WALogger")
                    .ERROR(
                      p ||
                        (p = babelHelpers.taggedTemplateLiteralLoose([
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
            return (g.delete(l), e);
          })();
          return (g.set(l, v), v);
        })),
        b.apply(this, arguments)
      );
    }
    ((l.doesChatExist = _), (l.checkChatExistsOrCreate = C));
  },
  98,
);
