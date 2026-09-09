__d(
  "WAWebDBBotMsgOrphanProvider",
  [
    "Promise",
    "WALogger",
    "WAWebBotGating",
    "WAWebBotTypes",
    "WAWebCommonMsgSubtypeTypes",
    "WAWebMessageAddOnType",
    "WAWebMsgType",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p = r("requireDeferred")("WAWebReprocessOrphanBotMsg").__setRef(
        "WAWebDBBotMsgOrphanProvider",
      ),
      _ = {
        type: o("WAWebMessageAddOnType").MessageAddOnType.BotMsmsg,
        matches: function (t) {
          return (
            t.type === o("WAWebMsgType").MSG_TYPE.CIPHERTEXT &&
            t.kind === o("WAWebMsgType").MsgKind.PlaceholderMessage &&
            t.subtype === o("WAWebCommonMsgSubtypeTypes").MsgSubtype.BotOrphan
          );
        },
        matchesFutureproof: function (t) {
          return !1;
        },
        canRenderInUi: function () {
          return !1;
        },
        processOrphansForNewMsg: function (t, n) {
          return f(n);
        },
      };
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          if (!o("WAWebBotGating").isBotOrphanMsgEnabled())
            return (
              o("WALogger")
                .WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[BotMsgOrphanProvider] gate off, keeping ",
                      " orphan(s) unreplayed",
                    ])),
                  t.length,
                )
                .tags("messaging")
                .sendLogs("bot-orphan-skipped-gate-off", { sampling: 0.01 }),
              {
                retainedOrphanMsgKeys: t.map(function (e) {
                  return e.msgKey;
                }),
              }
            );
          var a;
          try {
            var i = yield p.load();
            a = i.reprocessOrphanBotMsg;
          } catch (e) {
            return (
              o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[BotMsgOrphanProvider] could not load the replay helper",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("bot-orphan-replay-helper-load-failed"),
              {
                retainedOrphanMsgKeys: t.map(function (e) {
                  return e.msgKey;
                }),
              }
            );
          }
          var l = [].concat(t).sort(function (e, t) {
              return R(e) - R(t) || y(e) - y(t);
            }),
            _ = [];
          return (
            yield l.reduce(
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e, t) {
                    yield e;
                    try {
                      var n,
                        i,
                        l = t.msgKey,
                        s = t.parsedMsgPayload,
                        m =
                          (n =
                            s == null || (i = s.id) == null ? void 0 : i.id) !=
                          null
                            ? n
                            : h(l),
                        p = s == null ? void 0 : s.botOrphanStanza;
                      if (p == null) {
                        o("WALogger")
                          .WARN(
                            u ||
                              (u = babelHelpers.taggedTemplateLiteralLoose([
                                "[BotMsgOrphanProvider] discarding orphan with no replayable stanza ",
                                "",
                              ])),
                            m,
                          )
                          .tags("messaging")
                          .sendLogs("bot-orphan-unrecoverable", {
                            sampling: 0.01,
                          });
                        return;
                      }
                      o("WALogger")
                        .LOG(
                          c ||
                            (c = babelHelpers.taggedTemplateLiteralLoose([
                              "[BotMsgOrphanProvider] re-processing orphan stanza ",
                              "",
                            ])),
                          m,
                        )
                        .tags("messaging");
                      var f = yield a(m, p);
                      f === "retryable" && _.push(l);
                    } catch (e) {
                      (o("WALogger")
                        .ERROR(
                          d ||
                            (d = babelHelpers.taggedTemplateLiteralLoose([
                              "[BotMsgOrphanProvider] re-processing failed for ",
                              "",
                            ])),
                          h(t.msgKey),
                        )
                        .catching(r("getErrorSafe")(e))
                        .sendLogs("bot-orphan-reprocess-failed"),
                        _.push(t.msgKey));
                    }
                  },
                );
                return function (t, n) {
                  return e.apply(this, arguments);
                };
              })(),
              (m || (m = n("Promise"))).resolve(),
            ),
            { retainedOrphanMsgKeys: _ }
          );
        })),
        g.apply(this, arguments)
      );
    }
    function h(e) {
      var t;
      return (t = e.split("_")[2]) != null ? t : "unknown";
    }
    function y(e) {
      var t, n;
      return (t =
        (n = e.parsedMsgPayload) == null ? void 0 : n.clientReceivedTsMillis) !=
        null
        ? t
        : Number.MAX_SAFE_INTEGER;
    }
    var C = 0,
      b = 1,
      v = 2,
      S = 3;
    function R(e) {
      var t = e.parsedMsgPayload;
      if (t == null) return S;
      var n = t.botEditType;
      if (n == null) return S;
      var r = o("WAWebBotTypes").BotMsgEditType.cast(n);
      return r == null
        ? S
        : r === o("WAWebBotTypes").BotMsgEditType.INNER
          ? b
          : r === o("WAWebBotTypes").BotMsgEditType.LAST
            ? v
            : r === o("WAWebBotTypes").BotMsgEditType.FIRST ||
                r === o("WAWebBotTypes").BotMsgEditType.FULL
              ? C
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      r,
                  );
                })();
    }
    ((l.botMsgOrphanProvider = _), (l.processBotMsgOrphans = f));
  },
  98,
);
