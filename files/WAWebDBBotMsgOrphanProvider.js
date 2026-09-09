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
      p,
      _,
      f,
      g,
      h = r("requireDeferred")("WAWebReprocessOrphanBotMsg").__setRef(
        "WAWebDBBotMsgOrphanProvider",
      ),
      y = {
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
          return C(n);
        },
      };
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (!o("WAWebBotGating").isBotOrphanMsgEnabled())
            return (
              o("WALogger")
                .WARN(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[BotMsgOrphanProvider] gate off, keeping ",
                      " orphan(s) unreplayed",
                    ])),
                  e.length,
                )
                .tags("messaging")
                .sendLogs("bot-orphan-skipped-gate-off", { sampling: 0.01 }),
              {
                retainedOrphanMsgKeys: e.map(function (e) {
                  return e.msgKey;
                }),
              }
            );
          var t;
          try {
            var a = yield h.load();
            t = a.reprocessOrphanBotMsg;
          } catch (t) {
            return (
              o("WALogger")
                .ERROR(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "[BotMsgOrphanProvider] could not load the replay helper",
                    ])),
                )
                .catching(r("getErrorSafe")(t))
                .sendLogs("bot-orphan-replay-helper-load-failed"),
              {
                retainedOrphanMsgKeys: e.map(function (e) {
                  return e.msgKey;
                }),
              }
            );
          }
          var i = [].concat(e).sort(function (e, t) {
              return $(e) - $(t) || k(e) - k(t);
            }),
            l = new Set(),
            s = new Map();
          return (
            yield i.reduce(
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e, n) {
                    yield e;
                    try {
                      var a = n.msgKey,
                        i = n.parsedMsgPayload,
                        u = v(n, s);
                      if (u != null) {
                        u === "held" && l.add(a);
                        return;
                      }
                      var c = yield S(n, t);
                      (c.retain && l.add(a),
                        !c.replayed &&
                          (i == null ? void 0 : i.botEditType) ===
                            o("WAWebBotTypes").BotMsgEditType.FIRST &&
                          L(n, c, s));
                    } catch (e) {
                      var d, p;
                      (o("WALogger")
                        .ERROR(
                          m ||
                            (m = babelHelpers.taggedTemplateLiteralLoose([
                              "[BotMsgOrphanProvider] re-processing failed for ",
                              "",
                            ])),
                          E(n.msgKey),
                        )
                        .catching(r("getErrorSafe")(e))
                        .sendLogs("bot-orphan-reprocess-failed"),
                        l.add(n.msgKey));
                      var _ =
                        (d = n.parsedMsgPayload) == null || (d = d.id) == null
                          ? void 0
                          : d.id;
                      ((p = n.parsedMsgPayload) == null
                        ? void 0
                        : p.botEditType) ===
                        o("WAWebBotTypes").BotMsgEditType.FIRST &&
                        _ != null &&
                        !s.has(_) &&
                        s.set(_, "held");
                    }
                  },
                );
                return function (t, n) {
                  return e.apply(this, arguments);
                };
              })(),
              (g || (g = n("Promise"))).resolve(),
            ),
            { retainedOrphanMsgKeys: Array.from(l) }
          );
        })),
        b.apply(this, arguments)
      );
    }
    function v(t, n) {
      var r;
      if ($(t) === I) return null;
      var a = (r = t.parsedMsgPayload) == null ? void 0 : r.botEditTargetId;
      return a == null
        ? (n.size > 0 &&
            o("WALogger")
              .WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[BotMsgOrphanProvider] edit has no stream id, it cannot be gated on its head",
                  ])),
              )
              .tags("messaging")
              .sendLogs("bot-orphan-stream-edit-unkeyable", { sampling: 0.01 }),
          null)
        : n.get(a);
    }
    function S(e, t) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n,
            a,
            i = e.parsedMsgPayload,
            l = i == null ? void 0 : i.botOrphanStanza,
            s =
              (n = i == null || (a = i.id) == null ? void 0 : a.id) != null
                ? n
                : E(e.msgKey);
          if (l == null)
            return (
              o("WALogger")
                .WARN(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "[BotMsgOrphanProvider] discarding orphan with no replayable stanza ",
                      "",
                    ])),
                  s,
                )
                .tags("messaging")
                .sendLogs("bot-orphan-unrecoverable", { sampling: 0.01 }),
              { replayed: !1, retain: !1 }
            );
          try {
            o("WALogger")
              .LOG(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "[BotMsgOrphanProvider] re-processing orphan stanza ",
                    "",
                  ])),
                s,
              )
              .tags("messaging");
            var u = yield t(s, l);
            return { replayed: u === "replayed", retain: u === "retryable" };
          } catch (e) {
            return (
              o("WALogger")
                .ERROR(
                  f ||
                    (f = babelHelpers.taggedTemplateLiteralLoose([
                      "[BotMsgOrphanProvider] re-processing failed for stanza ",
                      "",
                    ])),
                  s,
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("bot-orphan-reprocess-failed"),
              { replayed: !1, retain: !0 }
            );
          }
        })),
        R.apply(this, arguments)
      );
    }
    function L(e, t, n) {
      var r,
        a,
        i,
        l =
          (r =
            (a = e.parsedMsgPayload) == null || (a = a.id) == null
              ? void 0
              : a.id) != null
            ? r
            : E(e.msgKey),
        c =
          (i = e.parsedMsgPayload) == null || (i = i.id) == null
            ? void 0
            : i.id;
      (c == null
        ? o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[BotMsgOrphanProvider] failed stream head has no stanza id, its edits cannot be gated",
                ])),
            )
            .tags("messaging")
            .sendLogs("bot-orphan-stream-head-unkeyable")
        : n.set(c, t.retain ? "held" : "dead"),
        o("WALogger")
          .WARN(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[BotMsgOrphanProvider] stream head ",
                " did not replay (",
                ")",
              ])),
            l,
            t.retain ? "held" : "dead",
          )
          .tags("messaging")
          .sendLogs("bot-orphan-stream-head-unreplayed", { sampling: 0.01 }));
    }
    function E(e) {
      var t;
      return (t = e.split("_")[2]) != null ? t : "unknown";
    }
    function k(e) {
      var t, n;
      return (t =
        (n = e.parsedMsgPayload) == null ? void 0 : n.clientReceivedTsMillis) !=
        null
        ? t
        : Number.MAX_SAFE_INTEGER;
    }
    var I = 0,
      T = 1,
      D = 2,
      x = 3;
    function $(e) {
      var t = e.parsedMsgPayload;
      if (t == null) return x;
      var n = t.botEditType;
      if (n == null) return x;
      var r = o("WAWebBotTypes").BotMsgEditType.cast(n);
      return r == null
        ? x
        : r === o("WAWebBotTypes").BotMsgEditType.INNER
          ? T
          : r === o("WAWebBotTypes").BotMsgEditType.LAST
            ? D
            : r === o("WAWebBotTypes").BotMsgEditType.FIRST ||
                r === o("WAWebBotTypes").BotMsgEditType.FULL
              ? I
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      r,
                  );
                })();
    }
    ((l.botMsgOrphanProvider = y), (l.processBotMsgOrphans = C));
  },
  98,
);
