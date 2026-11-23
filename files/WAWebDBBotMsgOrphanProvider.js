__d(
  "WAWebDBBotMsgOrphanProvider",
  [
    "WALogger",
    "WAWebBotGating",
    "WAWebBotGroupGatingUtils",
    "WAWebBotTypes",
    "WAWebCommonMsgSubtypeTypes",
    "WAWebMessageAddOnType",
    "WAWebMsgKey",
    "WAWebMsgType",
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
      y = r("requireDeferred")("WAWebReprocessOrphanBotMsg").__setRef(
        "WAWebDBBotMsgOrphanProvider",
      ),
      C = {
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
          return b(n);
        },
      };
    async function b(t) {
      var n = v(t),
        a = n.heldOrphanMsgKeys,
        i = n.orphans;
      if (
        (a.length > 0 &&
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
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
        var c = await y.load();
        l = c.reprocessOrphanBotMsg;
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
            retainedOrphanMsgKeys: [].concat(
              a,
              i.map(function (e) {
                return e.msgKey;
              }),
            ),
          }
        );
      }
      var d = [].concat(i).sort(T(I(i))),
        m = new Set(),
        p = new Map();
      return (
        await d.reduce(async function (e, t) {
          await e;
          try {
            var n = t.msgKey,
              a = t.parsedMsgPayload,
              i = R(t, p);
            if (i != null) {
              i === "held" && m.add(n);
              return;
            }
            var s = await L(t, l);
            (s.retain && m.add(n),
              !s.replayed &&
                (a == null ? void 0 : a.botEditType) ===
                  o("WAWebBotTypes").BotMsgEditType.FIRST &&
                E(t, s, p));
          } catch (e) {
            var c, d;
            (o("WALogger")
              .ERROR(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[BotMsgOrphanProvider] re-processing failed for ",
                    "",
                  ])),
                k(t.msgKey),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("bot-orphan-reprocess-failed"),
              m.add(t.msgKey));
            var _ =
              (c = t.parsedMsgPayload) == null || (c = c.id) == null
                ? void 0
                : c.id;
            ((d = t.parsedMsgPayload) == null ? void 0 : d.botEditType) ===
              o("WAWebBotTypes").BotMsgEditType.FIRST &&
              _ != null &&
              !p.has(_) &&
              p.set(_, "held");
          }
        }, Promise.resolve()),
        { retainedOrphanMsgKeys: [].concat(a, Array.from(m)) }
      );
    }
    function v(e) {
      if (o("WAWebBotGating").isBotOrphanMsgEnabled())
        return { heldOrphanMsgKeys: [], orphans: e };
      var t = e.filter(S),
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
    function S(e) {
      try {
        return r("WAWebMsgKey").fromString(e.msgKey).remote.isGroup();
      } catch (t) {
        return (
          o("WALogger")
            .WARN(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[BotMsgOrphanProvider] could not parse the key of orphan ",
                  ", holding it as a direct orphan",
                ])),
              k(e.msgKey),
            )
            .catching(r("getErrorSafe")(t))
            .tags("messaging")
            .sendLogs("bot-orphan-key-parse-failed", { sampling: 0.01 }),
          !1
        );
      }
    }
    function R(e, t) {
      var n;
      if (w(e) === $) return null;
      var r = (n = e.parsedMsgPayload) == null ? void 0 : n.botEditTargetId;
      return r == null
        ? (t.size > 0 &&
            o("WALogger")
              .WARN(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[BotMsgOrphanProvider] edit has no stream id, it cannot be gated on its head",
                  ])),
              )
              .tags("messaging")
              .sendLogs("bot-orphan-stream-edit-unkeyable", { sampling: 0.01 }),
          null)
        : t.get(r);
    }
    async function L(e, t) {
      var n,
        a,
        i = e.parsedMsgPayload,
        l = i == null ? void 0 : i.botOrphanStanza,
        s =
          (n = i == null || (a = i.id) == null ? void 0 : a.id) != null
            ? n
            : k(e.msgKey);
      if (l == null)
        return (
          o("WALogger")
            .WARN(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
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
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "[BotMsgOrphanProvider] re-processing orphan stanza ",
                "",
              ])),
            s,
          )
          .tags("messaging");
        var u = await t(s, l);
        return { replayed: u === "replayed", retain: u === "retryable" };
      } catch (e) {
        return (
          o("WALogger")
            .ERROR(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
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
    }
    function E(e, t, n) {
      var r,
        a,
        i,
        l =
          (r =
            (a = e.parsedMsgPayload) == null || (a = a.id) == null
              ? void 0
              : a.id) != null
            ? r
            : k(e.msgKey),
        s =
          (i = e.parsedMsgPayload) == null || (i = i.id) == null
            ? void 0
            : i.id;
      (s == null
        ? o("WALogger")
            .ERROR(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "[BotMsgOrphanProvider] failed stream head has no stanza id, its edits cannot be gated",
                ])),
            )
            .tags("messaging")
            .sendLogs("bot-orphan-stream-head-unkeyable")
        : n.set(s, t.retain ? "held" : "dead"),
        o("WALogger")
          .WARN(
            g ||
              (g = babelHelpers.taggedTemplateLiteralLoose([
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
    function k(e) {
      var t;
      return (t = e.split("_")[2]) != null ? t : "unknown";
    }
    function I(e) {
      var t = new Set(),
        n = new Set();
      for (var r of e) {
        var a,
          i = w(r);
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
              h ||
                (h = babelHelpers.taggedTemplateLiteralLoose([
                  "[BotMsgOrphanProvider] ranks ",
                  " have a row without a sender timestamp, ordering them by arrival",
                ])),
              l.join(","),
            )
            .tags("messaging"),
        t
      );
    }
    function T(e) {
      return function (t, n) {
        var r = w(t),
          o = r - w(n);
        if (o !== 0) return o;
        if (e.has(r)) {
          var a = D(t) - D(n);
          if (a !== 0) return a;
        }
        return x(t) - x(n);
      };
    }
    function D(e) {
      var t, n;
      return (t =
        (n = e.parsedMsgPayload) == null ? void 0 : n.botSenderTimestampMs) !=
        null
        ? t
        : 0;
    }
    function x(e) {
      var t, n;
      return (t =
        (n = e.parsedMsgPayload) == null ? void 0 : n.clientReceivedTsMillis) !=
        null
        ? t
        : Number.MAX_SAFE_INTEGER;
    }
    var $ = 0,
      P = 1,
      N = 2,
      M = 3;
    function w(e) {
      var t = e.parsedMsgPayload;
      if (t == null) return M;
      var n = t.botEditType;
      if (n == null) return M;
      var r = o("WAWebBotTypes").BotMsgEditType.cast(n);
      return r == null
        ? M
        : r === o("WAWebBotTypes").BotMsgEditType.INNER
          ? P
          : r === o("WAWebBotTypes").BotMsgEditType.LAST
            ? N
            : r === o("WAWebBotTypes").BotMsgEditType.FIRST ||
                r === o("WAWebBotTypes").BotMsgEditType.FULL
              ? $
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      r,
                  );
                })();
    }
    ((l.botMsgOrphanProvider = C), (l.processBotMsgOrphans = b));
  },
  98,
);
