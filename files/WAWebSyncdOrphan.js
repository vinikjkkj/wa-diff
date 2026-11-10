__d(
  "WAWebSyncdOrphan",
  [
    "Promise",
    "WALogger",
    "WAPromiseLoop",
    "WAWebABProps",
    "WAWebGetSyncAction",
    "WAWebHistorySyncLidChatGating",
    "WAWebMiscGatingUtils",
    "WAWebStorageCrashAnnotations",
    "WAWebSyncdCollectionHandler",
    "WAWebSyncdConst",
    "WAWebSyncdCrashAnnotations",
    "WAWebSyncdDbCallbacksApi",
    "WAWebSyncdDisabled",
    "WAWebSyncdGetChat",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
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
      C,
      b = 500,
      v = [
        o("WAWebSyncdConst").SyncActionState.Orphan,
        o("WAWebSyncdConst").SyncActionState.Unsupported,
      ];
    function S(e, t, n) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, r) {
          if (o("WAWebSyncdDisabled").isSyncdDisabled())
            return (C || (C = n("Promise"))).resolve();
          yield (C || (C = n("Promise"))).all([
            L(e),
            k(t),
            o("WAWebSyncdDbCallbacksApi")
              .bulkGetAccountLid(t)
              .then(function (e) {
                return T(e.filter(Boolean));
              }),
            r != null && r.length > 0 ? Q(r) : void 0,
          ]);
        })),
        R.apply(this, arguments)
      );
    }
    function L(e) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebSyncdDbCallbacksApi").getAdditionalLidMsgKeys(
              e,
            ),
            n = o("WAWebHistorySyncLidChatGating").isForcedHistoryLidChat()
              ? yield o(
                  "WAWebSyncdDbCallbacksApi",
                ).getAdditionalHistoryChatIdMsgKeys(e)
              : [];
          yield x(e.concat(t, n), o("WAWebSyncdConst").SyncModelType.Msg);
        })),
        E.apply(this, arguments)
      );
    }
    function k(e) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebHistorySyncLidChatGating").isForcedHistoryLidChat()
            ? yield o("WAWebSyncdDbCallbacksApi").getAdditionalHistoryChatIds(e)
            : [];
          yield x(e.concat(t), o("WAWebSyncdConst").SyncModelType.Chat);
        })),
        I.apply(this, arguments)
      );
    }
    function T(e) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield x(e, o("WAWebSyncdConst").SyncModelType.Account);
        })),
        D.apply(this, arguments)
      );
    }
    function x(e, t) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (o("WAWebSyncdDisabled").isSyncdDisabled())
            return (C || (C = n("Promise"))).resolve();
          var r = yield o(
            "WAWebGetSyncAction",
          ).getSyncActionsByModelInfosInTransaction(
            e.map(function (e) {
              return [e, t, o("WAWebSyncdConst").SyncActionState.Orphan];
            }),
          );
          yield o("WAWebSyncdCollectionHandler").applyIndividualMutations(r);
        })),
        $.apply(this, arguments)
      );
    }
    function P() {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (o("WAWebSyncdDisabled").isSyncdDisabled())
            return (C || (C = n("Promise"))).resolve();
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "syncd: start applyAllOrphansAndUnsupported",
              ])),
          );
          var e = o(
            "WAWebSyncdCrashAnnotations",
          ).annotateCrashWithOrphanApplyStart();
          try {
            if (
              o("WAWebABProps").getABPropConfigValue(
                "web_syncd_batched_orphan_apply",
              )
            )
              yield M();
            else {
              o("WAWebStorageCrashAnnotations").annotateCrashWithIdbReadCaller(
                "SyncdOrphan.applyAllOrphansAndUnsupported",
                v,
              );
              var t =
                yield o(
                  "WAWebGetSyncAction",
                ).getSyncActionsByActionStatesInTransaction(v);
              yield o("WAWebSyncdCollectionHandler").applyIndividualMutations(
                t,
              );
            }
          } finally {
            o("WAWebSyncdCrashAnnotations").annotateCrashWithOrphanApplyEnd(e);
          }
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "syncd: end applyAllOrphansAndUnsupported",
              ])),
          );
        })),
        N.apply(this, arguments)
      );
    }
    function M() {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield A();
          e.sort(function (e, t) {
            return e.timestamp - t.timestamp;
          });
          var t = e.flatMap(function (e, t) {
              return e.action === o("WAWebSyncdConst").Actions.Star ? [t] : [];
            }),
            r = 0,
            a = 0;
          (yield K(
            e.length,
            (function () {
              var i = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (n) {
                  for (
                    var i = n + b, l = e.slice(n, i);
                    r < t.length && t[r] < i;
                  )
                    r++;
                  var s =
                      r < t.length &&
                      l.some(function (e) {
                        return (
                          e.action === o("WAWebSyncdConst").Actions.ClearChat
                        );
                      })
                        ? yield W(
                            l,
                            t.slice(r).map(function (t) {
                              return e[t];
                            }),
                          )
                        : [],
                    u = yield O(
                      l.map(function (e) {
                        return e.index;
                      }),
                    );
                  ((a += u.length),
                    yield o(
                      "WAWebSyncdCollectionHandler",
                    ).applyIndividualMutations(u, s, n > 0 && i < e.length));
                },
              );
              return function (e) {
                return i.apply(this, arguments);
              };
            })(),
          ),
            o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "syncd: applied ",
                  " of ",
                  " orphan and unsupported actions in batches of ",
                  "",
                ])),
              a,
              e.length,
              b,
            ));
        })),
        w.apply(this, arguments)
      );
    }
    function A() {
      return F.apply(this, arguments);
    }
    function F() {
      return (
        (F = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          o("WAWebStorageCrashAnnotations").annotateCrashWithIdbReadCaller(
            "SyncdOrphan.applyAllOrphansAndUnsupported",
            v,
          );
          var e =
              yield o(
                "WAWebGetSyncAction",
              ).getSyncActionIndexesByActionStatesInTransaction(v),
            t = [],
            r = 0;
          return (
            yield K(
              e.length,
              (function () {
                var a = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (n) {
                    var a = yield o(
                      "WAWebGetSyncAction",
                    ).getSyncActionsByIndexesInTransaction(e.slice(n, n + b));
                    for (var i of a) {
                      var l = j(i.index);
                      (l == null && r++,
                        t.push({
                          index: i.index,
                          timestamp: i.timestamp,
                          action: l == null ? void 0 : l.action,
                          chat: l == null ? void 0 : l.chat,
                        }));
                    }
                  },
                );
                return function (e) {
                  return a.apply(this, arguments);
                };
              })(),
            ),
            r > 0 &&
              o("WALogger").LOG(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "syncd: ",
                    " orphan and unsupported actions have an unreadable index",
                  ])),
                r,
              ),
            t
          );
        })),
        F.apply(this, arguments)
      );
    }
    function O(e) {
      return B.apply(this, arguments);
    }
    function B() {
      return (
        (B = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (e.length === 0) return [];
          var t =
            yield o("WAWebGetSyncAction").getSyncActionsByIndexesInTransaction(
              e,
            );
          return t.filter(function (e) {
            return v.includes(e.actionState);
          });
        })),
        B.apply(this, arguments)
      );
    }
    function W(e, t) {
      return q.apply(this, arguments);
    }
    function q() {
      return (
        (q = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = e.filter(function (e) {
            return e.action === o("WAWebSyncdConst").Actions.ClearChat;
          });
          if (n.length === 0) return [];
          var r = yield U(n);
          return O(
            t
              .filter(function (e) {
                return (
                  r == null || (e.chat != null && r.has(e.chat.toString()))
                );
              })
              .map(function (e) {
                return e.index;
              }),
          );
        })),
        q.apply(this, arguments)
      );
    }
    function U(e) {
      return V.apply(this, arguments);
    }
    function V() {
      return (
        (V = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = new Map();
          for (var r of e) {
            var a = r.chat;
            if (a == null) return null;
            t.set(a.toString(), a);
          }
          var i = yield (C || (C = n("Promise"))).all(
              Array.from(t.values(), function (e) {
                return o("WAWebSyncdGetChat")
                  .resolveChatForMutationIndex(e)
                  .catch(function (e) {
                    return (z(e), null);
                  });
              }),
            ),
            l = new Set(t.keys());
          for (var s of i)
            if (s == null || (s.success && !H(l, s.chat))) return null;
          return l;
        })),
        V.apply(this, arguments)
      );
    }
    function H(e, t) {
      for (var n of [t.id, t.accountLid])
        if (n != null) {
          var r = G(n);
          if (r == null) return !1;
          e.add(r.toString());
        }
      return !0;
    }
    function G(e) {
      try {
        return o("WAWebWidFactory").createWid(e);
      } catch (e) {
        return null;
      }
    }
    function z(t) {
      try {
        o("WALogger")
          .WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "syncd: could not resolve a cleared chat, passing every later star: ",
                "",
              ])),
            r("getErrorSafe")(t).message,
          )
          .sendLogs("syncd-orphan-apply-cleared-chat-unresolved");
      } catch (e) {}
    }
    function j(e) {
      var t;
      try {
        t = JSON.parse(e);
      } catch (e) {
        return null;
      }
      if (!Array.isArray(t) || typeof t[0] != "string") return null;
      var n = o("WAWebSyncdConst").Actions.cast(t[0]),
        r =
          (n === o("WAWebSyncdConst").Actions.ClearChat ||
            n === o("WAWebSyncdConst").Actions.Star) &&
          typeof t[1] == "string"
            ? G(t[1])
            : null;
      return { action: n, chat: r };
    }
    function K(e, t) {
      return o("WAPromiseLoop").promiseLoop(
        (function () {
          var r = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (n, r) {
              return r >= e ? (n(), r) : (yield t(r), r + b);
            },
          );
          return function (e, t) {
            return r.apply(this, arguments);
          };
        })(),
        0,
      );
    }
    function Q(e) {
      return X.apply(this, arguments);
    }
    function X() {
      return (
        (X = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield x(e, o("WAWebSyncdConst").SyncModelType.Thread);
        })),
        X.apply(this, arguments)
      );
    }
    function Y(e) {
      return J.apply(this, arguments);
    }
    function J() {
      return (
        (J = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield x(e, o("WAWebSyncdConst").SyncModelType.Agent);
        })),
        J.apply(this, arguments)
      );
    }
    function Z(e) {
      return ee.apply(this, arguments);
    }
    function ee() {
      return (
        (ee = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield x(e, o("WAWebSyncdConst").SyncModelType.ChatAssignment);
        })),
        ee.apply(this, arguments)
      );
    }
    function te(e) {
      return ne.apply(this, arguments);
    }
    function ne() {
      return (
        (ne = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield x(e, o("WAWebSyncdConst").SyncModelType.UserStatusMute);
        })),
        ne.apply(this, arguments)
      );
    }
    function re(e, t) {
      return oe.apply(this, arguments);
    }
    function oe() {
      return (
        (oe = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (
            (o("WALogger").LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "syncd: applying all orphans for type ",
                  "",
                ])),
              e,
            ),
            o("WAWebSyncdDisabled").isSyncdDisabled())
          )
            return (C || (C = n("Promise"))).resolve();
          var r =
            yield o(
              "WAWebGetSyncAction",
            ).getOrphanSyncActionsByModelTypeInTransaction(e);
          if (r.length === 0) {
            o("WALogger").LOG(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "syncd: no orphans for type ",
                  " to apply",
                ])),
              e,
            );
            return;
          }
          (t != null && !t()) ||
            (yield o("WAWebSyncdCollectionHandler").applyIndividualMutations(r),
            o("WALogger").LOG(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "syncd: finished applying all orphans for type ",
                  ", count=",
                  "",
                ])),
              e,
              r.length,
            ));
        })),
        oe.apply(this, arguments)
      );
    }
    function ae() {
      return ie.apply(this, arguments);
    }
    function ie() {
      return (
        (ie = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (
            (o("WALogger").LOG(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "syncd: checkOrphanFavoriteStickers",
                ])),
            ),
            !o("WAWebMiscGatingUtils").isFavoriteStickersEnabled())
          ) {
            o("WALogger").LOG(
              g ||
                (g = babelHelpers.taggedTemplateLiteralLoose([
                  "[syncd] checkOrphanFavoriteStickers: not enabled",
                ])),
            );
            return;
          }
          (yield re(
            o("WAWebSyncdConst").SyncModelType.FavoriteSticker,
            function () {
              var e = o("WAWebABProps").getABPropConfigValue(
                "favorite_sticker_sync_after_pairing_enabled_web",
              );
              return (
                o("WALogger").LOG(
                  h ||
                    (h = babelHelpers.taggedTemplateLiteralLoose([
                      "[syncd] checkOrphanFavoriteStickers: syncAfterPairing=",
                      "",
                    ])),
                  e,
                ),
                e
              );
            },
          ),
            o("WALogger").LOG(
              y ||
                (y = babelHelpers.taggedTemplateLiteralLoose([
                  "syncd: checkOrphanFavoriteStickers: finished",
                ])),
            ));
        })),
        ie.apply(this, arguments)
      );
    }
    ((l.ORPHAN_APPLY_BATCH_SIZE = b),
      (l.checkOrphanMutations = S),
      (l.checkOrphanMessages = L),
      (l.checkOrphanChats = k),
      (l.applyAllOrphansAndUnsupported = P),
      (l.checkOrphanAgents = Y),
      (l.checkOrphanChatAssignments = Z),
      (l.checkOrphanUserStatusMutes = te),
      (l.checkOrphanFavoriteStickers = ae));
  },
  98,
);
