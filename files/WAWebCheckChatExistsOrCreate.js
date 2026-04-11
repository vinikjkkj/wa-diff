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
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _;
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return o("WAWebRuntimeEnvironmentUtils").isWorker()
            ? (yield o("WAWebApiChatCommon").getChatRecord(e)) != null
            : o("WAWebBackendApi").frontendSendAndReceive("hasChat", {
                chatId: e,
              });
        })),
        g.apply(this, arguments)
      );
    }
    var h = new Map();
    function y(e) {
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
            var g, C;
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "checkChatExistsOrCreate: first message id: ",
                  "",
                ])),
              (g =
                (C = t.options.firstIncomingMsg) == null
                  ? void 0
                  : C.id.toString()) != null
                ? g
                : "not-passed",
            );
          }
          var b = h.get(l);
          b != null && (yield b);
          var v = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e = yield f(i);
            if (e !== !0) {
              var n, r;
              if (
                i.isLid() &&
                !o(
                  "WAWebLid1X1MigrationGating",
                ).Lid1X1MigrationUtils.isLidMigrated() &&
                (t == null || (n = t.initialProps) == null
                  ? void 0
                  : n.lidOriginType) !==
                  o("WAWebUsernameTypes").LidOriginType.PNH_CTWA &&
                ((r = t.msgMeta) == null ? void 0 : r.origin) !== "ctwa"
              ) {
                var a, s;
                (o("WALogger").LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
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
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
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
                var g;
                (o("WALogger").LOG(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "checkChatExistsOrCreate: creating chat ",
                      ", ",
                      "",
                    ])),
                  i.toLogString(),
                  t == null || (g = t.initialProps) == null
                    ? void 0
                    : g.lidOriginType,
                ),
                  yield y(t));
              } catch (e) {
                if (
                  !o("WAWebRuntimeEnvironmentUtils").isWorker() &&
                  e instanceof o("WAWebApiChat").CreateChatDuplicateError
                ) {
                  var C = yield o("WAWebApiChatCommon").getChatRecord(i);
                  if (C != null) {
                    yield o("WAWebBackendApi").frontendFireAndForget(
                      "chatCollectionGadd",
                      {
                        chat: babelHelpers.extends(
                          {},
                          o("WAWebApiHydrateWidsUtil").hydrateWids(C),
                          { id: i },
                        ),
                      },
                    );
                    var b = yield f(i);
                    return (
                      b ||
                        o("WALogger")
                          .ERROR(
                            m ||
                              (m = babelHelpers.taggedTemplateLiteralLoose([
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
                        i.toLogString(),
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
                        i.toLogString(),
                      )
                      .tags("messaging")
                      .sendLogs("checkChatExistsOrCreate failed", {
                        sampling: 0.01,
                      });
              }
            }
            return (h.delete(l), e);
          })();
          return (h.set(l, v), v);
        })),
        b.apply(this, arguments)
      );
    }
    ((l.doesChatExist = f), (l.checkChatExistsOrCreate = C));
  },
  98,
);
