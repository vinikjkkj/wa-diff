__d(
  "WAWebLabyrinthShadowCompareController",
  [
    "WAPromiseReduce",
    "WAResultOrError",
    "WAWebApiChatCommon",
    "WAWebBoolFunc",
    "WAWebLabyrinthDecryptThread",
    "WAWebLabyrinthShadowBaseline",
    "WAWebLabyrinthShadowCarryOver",
    "WAWebLabyrinthShadowCompare",
    "WAWebLabyrinthShadowCoverage",
    "WAWebLabyrinthShadowMessageIdentity",
    "WAWebLabyrinthShadowNormalize",
    "WAWebLabyrinthShadowRecord",
    "WAWebLidMigrationUtils",
    "WAWebLimitSharingGatingUtils",
    "WAWebWid",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t = e.context,
        n = e.keys,
        r = e.previousUnresolved,
        a = e.threads,
        i = self.performance.now(),
        l = await u(n, a),
        d = self.performance.now(),
        g = (await c(l)).map(function (e) {
          return p(m(e), t);
        }),
        h = await _(g, t, !1),
        y = self.performance.now(),
        C = await _(g, t, !0),
        b = self.performance.now(),
        v = s(C);
      return {
        carryOver:
          r == null
            ? null
            : o("WAWebLabyrinthShadowCarryOver").getLabyrinthShadowCarryOver(
                r,
                v,
              ),
        chats: C.map(function (e, t) {
          var n = e.report;
          return f(h[t].report, n);
        }),
        timings: { compareMs: y - d, decryptMs: d - i, recheckMs: b - y },
        unresolved: o(
          "WAWebLabyrinthShadowCarryOver",
        ).getLabyrinthShadowUnresolved(v),
      };
    }
    function s(e) {
      var t = new Set(),
        n = new Set(),
        r = new Set();
      for (var o of e) {
        var a = o.fingerprints;
        (a == null ||
          a.inBoth.forEach(function (e) {
            return t.add(e);
          }),
          a == null ||
            a.onlyInLabyrinth.forEach(function (e) {
              return n.add(e);
            }),
          a == null ||
            a.onlyLocal.forEach(function (e) {
              return r.add(e);
            }));
      }
      return { inBoth: t, onlyInLabyrinth: n, onlyLocal: r };
    }
    function u(e, t) {
      return o("WAPromiseReduce").promiseReduce(
        Array.from(t),
        async function (t, n) {
          if (!n.success) return (t.push(n), t);
          var r = n.value.plainChatJid,
            a = await o(
              "WAWebLabyrinthDecryptThread",
            ).decryptLabyrinthEncryptedThread(
              e,
              n.value,
              o("WAWebBoolFunc").returnTrue,
            );
          return (
            t.push(
              a.success
                ? o("WAResultOrError").makeResult({
                    messages: a.value,
                    plainChatJid: r,
                  })
                : o("WAResultOrError").makeError({
                    error: a.error,
                    kind: "restore-thread-error",
                    plainChatJid: r,
                  }),
            ),
            t
          );
        },
        [],
      );
    }
    function c(e) {
      return o("WAPromiseReduce").promiseReduce(
        Array.from(e),
        async function (e, t) {
          if (!t.success)
            return (
              e.push({
                kind: "report",
                report: { error: t.error, kind: "thread-error" },
              }),
              e
            );
          var n = t.value,
            r = n.messages,
            a = n.plainChatJid,
            i = await d(a);
          if (i == null)
            return (
              e.push({
                kind: "report",
                report: {
                  kind: "no-local-chat",
                  messages: r.length,
                  plainChatJid: a,
                },
              }),
              e
            );
          var l = e.findIndex(function (e) {
              return e.kind === "local-chat" && e.chatRow.id === i.id;
            }),
            s = e[l];
          return (
            (s == null ? void 0 : s.kind) === "local-chat"
              ? (e[l] = babelHelpers.extends({}, s, {
                  threads: [].concat(s.threads, [t.value]),
                }))
              : e.push({
                  chatRow: i,
                  dbChatId: o("WAWebWidFactory").createWid(i.id),
                  kind: "local-chat",
                  threads: [t.value],
                }),
            e
          );
        },
        [],
      );
    }
    async function d(e) {
      if (!r("WAWebWid").isWid(e)) return null;
      var t = await o("WAWebApiChatCommon").getChatMaybeByHistory(e);
      if (t != null) return t;
      var n = o("WAWebWidFactory").createWid(e),
        a = n.isLid() ? o("WAWebLidMigrationUtils").toPn(n) : null;
      return a == null
        ? null
        : o("WAWebApiChatCommon").getChatMaybeByHistory(a.toString());
    }
    function m(e) {
      var t;
      return e.kind !== "local-chat" ||
        ((t = e.chatRow.acp2Setting) == null ? void 0 : t.enabled) !== !0 ||
        !o("WAWebLimitSharingGatingUtils").isAcp2EnabledForWid(e.dbChatId)
        ? e
        : {
            kind: "report",
            report: {
              chatId: e.dbChatId.toString(),
              kind: "acp2-restricted",
              messages: e.threads.reduce(function (e, t) {
                return e + t.messages.length;
              }, 0),
            },
          };
    }
    function p(e, t) {
      if (e.kind === "report") return e;
      var n = e.chatRow,
        r = e.dbChatId,
        o = e.threads;
      return {
        chatRow: n,
        dbChatId: r,
        decoded: y(o, r, t),
        kind: "local-chat",
      };
    }
    function _(e, t, n) {
      return o("WAPromiseReduce").promiseReduce(
        Array.from(e),
        async function (e, r) {
          return (
            e.push(
              r.kind === "report"
                ? { fingerprints: null, report: r.report }
                : await g(r, t, n),
            ),
            e
          );
        },
        [],
      );
    }
    function f(e, t) {
      return e.kind !== "compared" || t.kind !== "compared"
        ? t
        : babelHelpers.extends({}, t, {
            baselineMovedDuringRun:
              JSON.stringify(e.comparison) !== JSON.stringify(t.comparison),
          });
    }
    async function g(e, t, n) {
      var r = e.chatRow,
        a = e.dbChatId,
        i = e.decoded,
        l = await o("WAWebLabyrinthShadowBaseline").readLabyrinthShadowBaseline(
          a,
        ),
        s = o(
          "WAWebLabyrinthShadowCoverage",
        ).getLabyrinthShadowCoverageStartSec({
          endOfHistoryTransferType: r.endOfHistoryTransferType,
          oldestLocalMsgSec: l.oldestSec,
          pairingSec: t.pairingSec,
          windowStartSec: t.startSec,
        }),
        u = function (t) {
          return o(
            "WAWebLabyrinthShadowMessageIdentity",
          ).getLabyrinthShadowMessageIdentity(t, a);
        },
        c = l.messages.filter(function (e) {
          return R(e, t);
        }),
        d = c.filter(
          o("WAWebLabyrinthShadowRecord").isLabyrinthShadowComparableLocal,
        ),
        m = i.messages.filter(function (e) {
          return R(e, t);
        }),
        p = m.filter(
          o("WAWebLabyrinthShadowRecord").isLabyrinthShadowComparable,
        ),
        _ = d.map(u),
        f = p.map(u),
        g = o("WAWebLabyrinthShadowCompare").compareLabyrinthShadowIdentities(
          _,
          f,
        ),
        y = t.pairingSec,
        C = b(d, u),
        v = b(p, u),
        L = {
          baselineMovedDuringRun: !1,
          chatId: a.toString(),
          comparison: g,
          historySyncCoverageStartSec: s,
          kind: "compared",
          labyrinthOldestSec: S(i.messages),
          localSincePairing:
            y == null
              ? 0
              : Array.from(C.values()).filter(function (e) {
                  return e >= y;
                }).length,
          notComparable: {
            labyrinth: m.length - p.length,
            local: c.length - d.length,
          },
          notStoredByHistorySync: i.notStoredByHistorySync,
          onlyInLabyrinthBeyondHistorySync: g.onlyInLabyrinth.filter(
            function (e) {
              var t;
              return (
                s == null ||
                ((t = v.get(
                  o(
                    "WAWebLabyrinthShadowMessageIdentity",
                  ).getLabyrinthShadowIdentityKey(e),
                )) != null
                  ? t
                  : 0) < s
              );
            },
          ).length,
          undecryptable: i.undecryptable,
        };
      return { fingerprints: n ? await h(_, f, g) : null, report: L };
    }
    async function h(e, t, n) {
      var r = new Set(
          []
            .concat(e, t)
            .map(
              o("WAWebLabyrinthShadowMessageIdentity")
                .getLabyrinthShadowIdentityKey,
            ),
        ),
        a = new Map(
          await Promise.all(
            Array.from(r, async function (e) {
              return [
                e,
                await o(
                  "WAWebLabyrinthShadowCarryOver",
                ).getLabyrinthShadowFingerprint(e),
              ];
            }),
          ),
        ),
        i = function (t) {
          return t.flatMap(function (e) {
            var t = a.get(
              o(
                "WAWebLabyrinthShadowMessageIdentity",
              ).getLabyrinthShadowIdentityKey(e),
            );
            return t == null ? [] : [t];
          });
        },
        l = new Set(
          t.map(
            o("WAWebLabyrinthShadowMessageIdentity")
              .getLabyrinthShadowIdentityKey,
          ),
        );
      return {
        inBoth: i(
          e.filter(function (e) {
            return l.has(
              o(
                "WAWebLabyrinthShadowMessageIdentity",
              ).getLabyrinthShadowIdentityKey(e),
            );
          }),
        ),
        onlyInLabyrinth: i(n.onlyInLabyrinth),
        onlyLocal: i(n.onlyLocal),
      };
    }
    function y(e, t, n) {
      var r = e.map(function (e) {
        var r = e.messages,
          a = e.plainChatJid;
        return v(r, o("WAWebWidFactory").createWid(a), t, n);
      });
      return {
        messages: r.flatMap(function (e) {
          return e.messages;
        }),
        notStoredByHistorySync: C(r, "notStoredByHistorySync"),
        undecryptable: C(r, "undecryptable"),
      };
    }
    function C(e, t) {
      return e.reduce(function (e, n) {
        return e + n[t];
      }, 0);
    }
    function b(e, t) {
      return new Map(
        e.map(function (e) {
          var n;
          return [
            o(
              "WAWebLabyrinthShadowMessageIdentity",
            ).getLabyrinthShadowIdentityKey(t(e)),
            (n = e.t) != null ? n : 0,
          ];
        }),
      );
    }
    function v(e, t, n, r) {
      var a = [],
        i = 0,
        l = 0;
      for (var s of e) {
        var u,
          c = s.restoreResult,
          d = s.timestampMs;
        if (!c.success) {
          (d == null || L(d / 1e3, r)) && l++;
          continue;
        }
        var m = c.value.webMessageInfo,
          p = o(
            "WAWebLabyrinthShadowNormalize",
          ).normalizeLabyrinthShadowMessage({
            dbChatId: n,
            labyrinthChatId: t,
            webMessageInfo: m,
          });
        p != null
          ? a.push(p)
          : L(Number((u = m.messageTimestamp) != null ? u : 0), r) && i++;
      }
      return { messages: a, notStoredByHistorySync: i, undecryptable: l };
    }
    function S(e) {
      return e.reduce(function (e, t) {
        var n;
        return e == null ? t.t : Math.min(e, (n = t.t) != null ? n : e);
      }, null);
    }
    function R(e, t) {
      var n;
      return L((n = e.t) != null ? n : 0, t);
    }
    function L(e, t) {
      return e >= t.startSec && e <= t.endSec;
    }
    l.compareLabyrinthShadow = e;
  },
  98,
);
