__d(
  "WAWebLabyrinthShadowCompareController",
  [
    "Promise",
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
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.context,
            n = e.keys,
            r = e.previousUnresolved,
            a = e.threads,
            i = self.performance.now(),
            l = yield d(n, a),
            s = self.performance.now(),
            u = (yield m(l)).map(function (e) {
              return g(f(e), t);
            }),
            p = yield h(u, t, !1),
            _ = self.performance.now(),
            C = yield h(u, t, !0),
            b = self.performance.now(),
            v = c(C);
          return {
            carryOver:
              r == null
                ? null
                : o(
                    "WAWebLabyrinthShadowCarryOver",
                  ).getLabyrinthShadowCarryOver(r, v),
            chats: C.map(function (e, t) {
              var n = e.report;
              return y(p[t].report, n);
            }),
            timings: { compareMs: _ - s, decryptMs: s - i, recheckMs: b - _ },
            unresolved: o(
              "WAWebLabyrinthShadowCarryOver",
            ).getLabyrinthShadowUnresolved(v),
          };
        })),
        u.apply(this, arguments)
      );
    }
    function c(e) {
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
    function d(e, t) {
      return o("WAPromiseReduce").promiseReduce(
        Array.from(t),
        (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (t, n) {
              if (!n.success) return (t.push(n), t);
              var r = n.value.plainChatJid,
                a = yield o(
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
          );
          return function (e, n) {
            return t.apply(this, arguments);
          };
        })(),
        [],
      );
    }
    function m(e) {
      return o("WAPromiseReduce").promiseReduce(
        Array.from(e),
        (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t) {
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
                i = yield p(a);
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
          );
          return function (t, n) {
            return e.apply(this, arguments);
          };
        })(),
        [],
      );
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (!r("WAWebWid").isWid(e)) return null;
          var t = yield o("WAWebApiChatCommon").getChatMaybeByHistory(e);
          if (t != null) return t;
          var n = o("WAWebWidFactory").createWid(e),
            a = n.isLid() ? o("WAWebLidMigrationUtils").toPn(n) : null;
          return a == null
            ? null
            : o("WAWebApiChatCommon").getChatMaybeByHistory(a.toString());
        })),
        _.apply(this, arguments)
      );
    }
    function f(e) {
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
    function g(e, t) {
      if (e.kind === "report") return e;
      var n = e.chatRow,
        r = e.dbChatId,
        o = e.threads;
      return {
        chatRow: n,
        dbChatId: r,
        decoded: R(o, r, t),
        kind: "local-chat",
      };
    }
    function h(e, t, r) {
      return o("WAPromiseReduce").promiseReduce(
        Array.from(e),
        (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, n) {
              return (
                e.push(
                  n.kind === "report"
                    ? { fingerprints: null, report: n.report }
                    : yield C(n, t, r),
                ),
                e
              );
            },
          );
          return function (t, n) {
            return e.apply(this, arguments);
          };
        })(),
        [],
      );
    }
    function y(e, t) {
      return e.kind !== "compared" || t.kind !== "compared"
        ? t
        : babelHelpers.extends({}, t, {
            baselineMovedDuringRun:
              JSON.stringify(e.comparison) !== JSON.stringify(t.comparison),
          });
    }
    function C(e, t, n) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = e.chatRow,
            a = e.dbChatId,
            i = e.decoded,
            l = yield o(
              "WAWebLabyrinthShadowBaseline",
            ).readLabyrinthShadowBaseline(a),
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
              return T(e, t);
            }),
            d = c.filter(
              o("WAWebLabyrinthShadowRecord").isLabyrinthShadowComparableLocal,
            ),
            m = i.messages.filter(function (e) {
              return T(e, t);
            }),
            p = m.filter(
              o("WAWebLabyrinthShadowRecord").isLabyrinthShadowComparable,
            ),
            _ = d.map(u),
            f = p.map(u),
            g = o(
              "WAWebLabyrinthShadowCompare",
            ).compareLabyrinthShadowIdentities(_, f),
            h = t.pairingSec,
            y = E(d, u),
            C = E(p, u),
            b = {
              baselineMovedDuringRun: !1,
              chatId: a.toString(),
              comparison: g,
              historySyncCoverageStartSec: s,
              kind: "compared",
              labyrinthOldestSec: I(i.messages),
              localSincePairing:
                h == null
                  ? 0
                  : Array.from(y.values()).filter(function (e) {
                      return e >= h;
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
                    ((t = C.get(
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
          return { fingerprints: n ? yield v(_, f, g) : null, report: b };
        })),
        b.apply(this, arguments)
      );
    }
    function v(e, t, n) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r, a) {
          var i = new Set(
              []
                .concat(t, r)
                .map(
                  o("WAWebLabyrinthShadowMessageIdentity")
                    .getLabyrinthShadowIdentityKey,
                ),
            ),
            l = new Map(
              yield (e || (e = n("Promise"))).all(
                Array.from(
                  i,
                  (function () {
                    var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                      function* (e) {
                        return [
                          e,
                          yield o(
                            "WAWebLabyrinthShadowCarryOver",
                          ).getLabyrinthShadowFingerprint(e),
                        ];
                      },
                    );
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })(),
                ),
              ),
            ),
            s = function (t) {
              return t.flatMap(function (e) {
                var t = l.get(
                  o(
                    "WAWebLabyrinthShadowMessageIdentity",
                  ).getLabyrinthShadowIdentityKey(e),
                );
                return t == null ? [] : [t];
              });
            },
            u = new Set(
              r.map(
                o("WAWebLabyrinthShadowMessageIdentity")
                  .getLabyrinthShadowIdentityKey,
              ),
            );
          return {
            inBoth: s(
              t.filter(function (e) {
                return u.has(
                  o(
                    "WAWebLabyrinthShadowMessageIdentity",
                  ).getLabyrinthShadowIdentityKey(e),
                );
              }),
            ),
            onlyInLabyrinth: s(a.onlyInLabyrinth),
            onlyLocal: s(a.onlyLocal),
          };
        })),
        S.apply(this, arguments)
      );
    }
    function R(e, t, n) {
      var r = e.map(function (e) {
        var r = e.messages,
          a = e.plainChatJid;
        return k(r, o("WAWebWidFactory").createWid(a), t, n);
      });
      return {
        messages: r.flatMap(function (e) {
          return e.messages;
        }),
        notStoredByHistorySync: L(r, "notStoredByHistorySync"),
        undecryptable: L(r, "undecryptable"),
      };
    }
    function L(e, t) {
      return e.reduce(function (e, n) {
        return e + n[t];
      }, 0);
    }
    function E(e, t) {
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
    function k(e, t, n, r) {
      var a = [],
        i = 0,
        l = 0;
      for (var s of e) {
        var u,
          c = s.restoreResult,
          d = s.timestampMs;
        if (!c.success) {
          (d == null || D(d / 1e3, r)) && l++;
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
          : D(Number((u = m.messageTimestamp) != null ? u : 0), r) && i++;
      }
      return { messages: a, notStoredByHistorySync: i, undecryptable: l };
    }
    function I(e) {
      return e.reduce(function (e, t) {
        var n;
        return e == null ? t.t : Math.min(e, (n = t.t) != null ? n : e);
      }, null);
    }
    function T(e, t) {
      var n;
      return D((n = e.t) != null ? n : 0, t);
    }
    function D(e, t) {
      return e >= t.startSec && e <= t.endSec;
    }
    l.compareLabyrinthShadow = s;
  },
  98,
);
