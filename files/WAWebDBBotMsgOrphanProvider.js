__d(
  "WAWebDBBotMsgOrphanProvider",
  [
    "Promise",
    "WALogger",
    "WAWebBotGating",
    "WAWebBotGroupGatingUtils",
    "WAWebBotTypes",
    "WAWebCommonMsgSubtypeTypes",
    "WAWebMessageAddOnType",
    "WAWebMsgKey",
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
      h,
      y,
      C = r("requireDeferred")("WAWebReprocessOrphanBotMsg").__setRef(
        "WAWebDBBotMsgOrphanProvider",
      ),
      b = {
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
          return v(n);
        },
      };
    function v(e) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = R(e),
            a = t.heldOrphanMsgKeys,
            i = t.orphans;
          if (
            (a.length > 0 &&
              o("WALogger")
                .WARN(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "[BotMsgOrphanProvider] gate off, keeping ",
                      " orphan(s) unreplayed",
                    ])),
                  a.length,
                )
                .tags("messaging")
                .sendLogs("bot-orphan-skipped-gate-off", { sampling: 0.01 }),
            i.length === 0)
          )
            return { retainedOrphanMsgKeys: a };
          var l;
          try {
            var s = yield C.load();
            l = s.reprocessOrphanBotMsg;
          } catch (e) {
            return (
              o("WALogger")
                .ERROR(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "[BotMsgOrphanProvider] could not load the replay helper",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("bot-orphan-replay-helper-load-failed"),
              {
                retainedOrphanMsgKeys: [].concat(
                  a,
                  i.map(function (e) {
                    return e.msgKey;
                  }),
                ),
              }
            );
          }
          var u = [].concat(i).sort($(x(i))),
            c = new Set(),
            d = new Map();
          return (
            yield u.reduce(
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e, t) {
                    yield e;
                    try {
                      var n = t.msgKey,
                        a = t.parsedMsgPayload,
                        i = E(t, d);
                      if (i != null) {
                        i === "held" && c.add(n);
                        return;
                      }
                      var s = yield k(t, l);
                      (s.retain && c.add(n),
                        !s.replayed &&
                          (a == null ? void 0 : a.botEditType) ===
                            o("WAWebBotTypes").BotMsgEditType.FIRST &&
                          T(t, s, d));
                    } catch (e) {
                      var u, m;
                      (o("WALogger")
                        .ERROR(
                          _ ||
                            (_ = babelHelpers.taggedTemplateLiteralLoose([
                              "[BotMsgOrphanProvider] re-processing failed for ",
                              "",
                            ])),
                          D(t.msgKey),
                        )
                        .catching(r("getErrorSafe")(e))
                        .sendLogs("bot-orphan-reprocess-failed"),
                        c.add(t.msgKey));
                      var p =
                        (u = t.parsedMsgPayload) == null || (u = u.id) == null
                          ? void 0
                          : u.id;
                      ((m = t.parsedMsgPayload) == null
                        ? void 0
                        : m.botEditType) ===
                        o("WAWebBotTypes").BotMsgEditType.FIRST &&
                        p != null &&
                        !d.has(p) &&
                        d.set(p, "held");
                    }
                  },
                );
                return function (t, n) {
                  return e.apply(this, arguments);
                };
              })(),
              (y || (y = n("Promise"))).resolve(),
            ),
            { retainedOrphanMsgKeys: [].concat(a, Array.from(c)) }
          );
        })),
        S.apply(this, arguments)
      );
    }
    function R(e) {
      if (o("WAWebBotGating").isBotOrphanMsgEnabled())
        return { heldOrphanMsgKeys: [], orphans: e };
      var t = e.filter(L),
        n =
          t.length > 0 &&
          o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled()
            ? t
            : [],
        r = new Set(n);
      return {
        heldOrphanMsgKeys: e
          .filter(function (e) {
            return !r.has(e);
          })
          .map(function (e) {
            return e.msgKey;
          }),
        orphans: n,
      };
    }
    function L(t) {
      try {
        return r("WAWebMsgKey").fromString(t.msgKey).remote.isGroup();
      } catch (n) {
        return (
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[BotMsgOrphanProvider] could not parse the key of orphan ",
                  ", holding it as a direct orphan",
                ])),
              D(t.msgKey),
            )
            .catching(r("getErrorSafe")(n))
            .tags("messaging")
            .sendLogs("bot-orphan-key-parse-failed", { sampling: 0.01 }),
          !1
        );
      }
    }
    function E(e, t) {
      var n;
      if (O(e) === M) return null;
      var r = (n = e.parsedMsgPayload) == null ? void 0 : n.botEditTargetId;
      return r == null
        ? (t.size > 0 &&
            o("WALogger")
              .WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[BotMsgOrphanProvider] edit has no stream id, it cannot be gated on its head",
                  ])),
              )
              .tags("messaging")
              .sendLogs("bot-orphan-stream-edit-unkeyable", { sampling: 0.01 }),
          null)
        : t.get(r);
    }
    function k(e, t) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n,
            a,
            i = e.parsedMsgPayload,
            l = i == null ? void 0 : i.botOrphanStanza,
            s =
              (n = i == null || (a = i.id) == null ? void 0 : a.id) != null
                ? n
                : D(e.msgKey);
          if (l == null)
            return (
              o("WALogger")
                .WARN(
                  f ||
                    (f = babelHelpers.taggedTemplateLiteralLoose([
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
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
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
                  h ||
                    (h = babelHelpers.taggedTemplateLiteralLoose([
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
        I.apply(this, arguments)
      );
    }
    function T(e, t, n) {
      var r,
        a,
        i,
        l =
          (r =
            (a = e.parsedMsgPayload) == null || (a = a.id) == null
              ? void 0
              : a.id) != null
            ? r
            : D(e.msgKey),
        s =
          (i = e.parsedMsgPayload) == null || (i = i.id) == null
            ? void 0
            : i.id;
      (s == null
        ? o("WALogger")
            .ERROR(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[BotMsgOrphanProvider] failed stream head has no stanza id, its edits cannot be gated",
                ])),
            )
            .tags("messaging")
            .sendLogs("bot-orphan-stream-head-unkeyable")
        : n.set(s, t.retain ? "held" : "dead"),
        o("WALogger")
          .WARN(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
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
    function D(e) {
      var t;
      return (t = e.split("_")[2]) != null ? t : "unknown";
    }
    function x(e) {
      var t = new Set(),
        n = new Set();
      for (var r of e) {
        var a,
          i = O(r);
        ((a = r.parsedMsgPayload) == null ? void 0 : a.botSenderTimestampMs) ==
        null
          ? n.add(i)
          : t.add(i);
      }
      var l = [];
      for (var s of n) t.delete(s) && l.push(s);
      return (
        l.length > 0 &&
          o("WALogger")
            .WARN(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "[BotMsgOrphanProvider] ranks ",
                  " have a row without a sender timestamp, ordering them by arrival",
                ])),
              l.join(","),
            )
            .tags("messaging"),
        t
      );
    }
    function $(e) {
      return function (t, n) {
        var r = O(t),
          o = r - O(n);
        if (o !== 0) return o;
        if (e.has(r)) {
          var a = P(t) - P(n);
          if (a !== 0) return a;
        }
        return N(t) - N(n);
      };
    }
    function P(e) {
      var t, n;
      return (t =
        (n = e.parsedMsgPayload) == null ? void 0 : n.botSenderTimestampMs) !=
        null
        ? t
        : 0;
    }
    function N(e) {
      var t, n;
      return (t =
        (n = e.parsedMsgPayload) == null ? void 0 : n.clientReceivedTsMillis) !=
        null
        ? t
        : Number.MAX_SAFE_INTEGER;
    }
    var M = 0,
      w = 1,
      A = 2,
      F = 3;
    function O(e) {
      var t = e.parsedMsgPayload;
      if (t == null) return F;
      var n = t.botEditType;
      if (n == null) return F;
      var r = o("WAWebBotTypes").BotMsgEditType.cast(n);
      return r == null
        ? F
        : r === o("WAWebBotTypes").BotMsgEditType.INNER
          ? w
          : r === o("WAWebBotTypes").BotMsgEditType.LAST
            ? A
            : r === o("WAWebBotTypes").BotMsgEditType.FIRST ||
                r === o("WAWebBotTypes").BotMsgEditType.FULL
              ? M
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      r,
                  );
                })();
    }
    ((l.botMsgOrphanProvider = b), (l.processBotMsgOrphans = v));
  },
  98,
);
