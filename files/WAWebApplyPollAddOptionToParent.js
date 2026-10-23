__d(
  "WAWebApplyPollAddOptionToParent",
  [
    "Promise",
    "WALogger",
    "WAWebBackendApi",
    "WAWebCastToPollCreationMsg",
    "WAWebDBMessageDelete",
    "WAWebDBMessageSerialization",
    "WAWebDBPollsRemoveVoteOptions",
    "WAWebLoadPendingPollVoteResolver",
    "WAWebModelStorageUtils",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebPollsGatingUtils",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _;
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (e.length === 0) return [];
          var t = M(e),
            n = yield o("WAWebModelStorageUtils")
              .getStorage()
              .lock(["message", "poll-votes"], function (e) {
                var n = e[0],
                  r = e[1];
                return h(n, r, t);
              });
          return (
            yield V(yield E(n)),
            yield I(n),
            yield $(n.map(N)),
            n.flatMap(L)
          );
        })),
        g.apply(this, arguments)
      );
    }
    function h(e, t, n) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, r) {
          var a = Array.from(r.keys()),
            i = yield e.bulkGet(a),
            l = a.flatMap(function (e, t) {
              var n = C(e, i[t]),
                o = r.get(e);
              return n != null && o != null
                ? [{ parentMsg: n, results: o }]
                : [];
            }),
            s = yield b(
              e,
              l.flatMap(function (e) {
                var t,
                  n = e.parentMsg;
                return (t = n.pollOptions) != null ? t : [];
              }),
            ),
            u = l.map(function (e) {
              var t = e.parentMsg,
                n = e.results;
              return {
                parentMsg: t,
                results: n,
                merged: w(t, n, s),
                appliedAddOptionOrders: s,
              };
            }),
            c = u.flatMap(function (e) {
              var t = e.merged;
              return t != null
                ? [o("WAWebDBMessageSerialization").dbRowFromMessage(t.msg)]
                : [];
            });
          return (
            c.length > 0 && (yield e.bulkCreateOrMerge(c)),
            yield (_ || (_ = n("Promise"))).all(
              u.map(function (e) {
                var n = e.merged,
                  r = e.parentMsg;
                return n != null && n.removedOptions.length > 0
                  ? o(
                      "WAWebDBPollsRemoveVoteOptions",
                    ).removeOptionsFromStoredVotes(
                      t,
                      r.id,
                      new Set(
                        n.removedOptions.map(function (e) {
                          return e.localId;
                        }),
                      ),
                    )
                  : null;
              }),
            ),
            u
          );
        })),
        y.apply(this, arguments)
      );
    }
    function C(t, n) {
      if (n == null)
        return (
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[applyPollAddOptionsToParent] parent msg not found ",
                  "",
                ])),
              t,
            )
            .sendLogs("poll_add_option_parent_not_found"),
          null
        );
      var a = o("WAWebDBMessageSerialization").messageFromDbRow(n);
      return a.type !== o("WAWebMsgType").MSG_TYPE.POLL_CREATION
        ? (o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[applyPollAddOptionsToParent] parent not poll creation msg",
                ])),
            )
            .sendLogs("poll_add_option_parent_not_poll"),
          null)
        : r("WAWebCastToPollCreationMsg")(a);
    }
    function b(e, t) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = new Map(),
            r = [];
          for (var o of t) {
            var a = o.addOptionMsgKey,
              i = o.addOptionMsgT;
            a != null && (i != null ? n.set(a, S(a, i)) : r.push(a));
          }
          if (r.length === 0) return n;
          var l = yield e.bulkGet(r);
          return (
            r.forEach(function (e, t) {
              var r = l[t];
              r != null && n.set(e, S(e, r.t));
            }),
            n
          );
        })),
        v.apply(this, arguments)
      );
    }
    function S(e, t) {
      return { t: t, stanzaId: r("WAWebMsgKey").fromString(e).id };
    }
    function R(e) {
      var t,
        n,
        r = e.merged,
        o = e.parentMsg;
      return (t =
        (n = r == null ? void 0 : r.msg.pollOptions) != null
          ? n
          : o.pollOptions) != null
        ? t
        : [];
    }
    function L(e) {
      var t = new Set(
        R(e).map(function (e) {
          return e.addOptionMsgKey;
        }),
      );
      return e.results.filter(function (e) {
        var n = e.decryptedAddOption;
        return !t.has(n.id.toString());
      });
    }
    function E(e) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield (_ || (_ = n("Promise"))).allSettled(
              e.map(function (e) {
                var t = e.merged,
                  n = e.parentMsg;
                return t != null && t.removedOptions.length > 0
                  ? o("WAWebBackendApi").frontendSendAndReceive(
                      "removePollVoteOptions",
                      {
                        parentMsgKey: n.id,
                        optionLocalIds: t.removedOptions.map(function (e) {
                          return e.localId;
                        }),
                      },
                    )
                  : null;
              }),
            ),
            r = e.filter(function (e, n) {
              return t[n].status === "fulfilled";
            });
          return (
            r.length < e.length &&
              o("WALogger")
                .ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "applyPollAddOptionsToParent: frontend vote update failed",
                    ])),
                )
                .sendLogs("poll_add_option_remove_vote_options_failed"),
            r
          );
        })),
        k.apply(this, arguments)
      );
    }
    function I(e) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.flatMap(function (e) {
            var t,
              n = new Set(
                R(e).map(function (e) {
                  return e.addOptionMsgKey;
                }),
              );
            return ((t = e.parentMsg.pollOptions) != null ? t : []).flatMap(
              function (e) {
                var t = e.addOptionMsgKey;
                return t != null && !n.has(t) ? [t] : [];
              },
            );
          });
          yield D(t);
        })),
        T.apply(this, arguments)
      );
    }
    function D(e) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (e.length !== 0) {
            try {
              yield o("WAWebDBMessageDelete").removeMessagesFromHistory(
                Array.from(e),
                { deleteAssociatedMsgs: !1 },
              );
            } catch (e) {
              o("WALogger")
                .ERROR(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[polls] failed to remove poll add-option messages",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("poll-add-option-remove-msgs-failed");
              return;
            }
            var t = yield (_ || (_ = n("Promise"))).allSettled(
                e.map(function (e) {
                  return o("WAWebBackendApi").frontendSendAndReceive(
                    "deleteMessageFromCollectionForSync",
                    { msgKey: e },
                  );
                }),
              ),
              a = t.filter(function (e) {
                return e.status === "rejected";
              }).length;
            a > 0 &&
              o("WALogger")
                .ERROR(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "[polls] failed to remove ",
                      " poll add-option messages from the chat",
                    ])),
                  a,
                )
                .sendLogs("poll-add-option-remove-msgs-frontend-failed");
          }
        })),
        x.apply(this, arguments)
      );
    }
    function $(e) {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.filter(function (e) {
            var t = e.addedOptions,
              n = e.droppedOptions;
            return t.length > 0 || n.length > 0;
          });
          if (t.length !== 0)
            try {
              var a = yield r("WAWebLoadPendingPollVoteResolver")(),
                i = a.resolvePendingVotesForAddedOptions;
              yield (_ || (_ = n("Promise"))).all(
                t.map(function (e) {
                  return i(e);
                }),
              );
            } catch (e) {
              o("WALogger")
                .ERROR(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "[polls] failed to load the parked poll vote resolver",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("poll-add-option-resolve-votes-load-failed");
            }
        })),
        P.apply(this, arguments)
      );
    }
    function N(e) {
      var t = e.appliedAddOptionOrders,
        n = e.merged,
        o = e.parentMsg,
        a = e.results,
        i = R(e),
        l = new Set(
          i.map(function (e) {
            return e.addOptionMsgKey;
          }),
        ),
        s = new Set(
          i.map(function (e) {
            return e.name;
          }),
        ),
        u = [],
        c = [];
      for (var d of a) {
        var m = d.decryptedAddOption,
          p = { name: m.pollAddedOption.name, t: m.t };
        l.has(m.id.toString()) ? u.push(p) : s.has(p.name) || c.push(p);
      }
      for (var _ of (f = n == null ? void 0 : n.removedOptions) != null
        ? f
        : []) {
        var f,
          g = _.addOptionMsgKey,
          h = _.name;
        if (!s.has(h)) {
          var y;
          c.push({
            name: h,
            t: g != null ? ((y = t.get(g)) == null ? void 0 : y.t) : null,
          });
        }
      }
      return {
        parentMsg: n != null ? r("WAWebCastToPollCreationMsg")(n.msg) : o,
        addedOptions: u,
        droppedOptions: c,
      };
    }
    function M(e) {
      var t = new Map();
      for (var n of e) {
        var r = n.parentMsg.id.toString(),
          o = t.get(r);
        o != null ? o.push(n) : t.set(r, [n]);
      }
      return t;
    }
    function w(e, t, n) {
      var r,
        o = (r = e.pollOptions) != null ? r : [],
        a = o.filter(function (e) {
          return e.addOptionMsgKey == null;
        }),
        i = [].concat(A(o, n), F(o, t)).sort(O),
        l = W(B(a, i), a.length),
        s = [].concat(a, q(l, o));
      if (U(o, s)) return null;
      var u = new Set(
        s.map(function (e) {
          return e.localId;
        }),
      );
      return {
        msg: babelHelpers.extends({}, e, { pollOptions: s }),
        removedOptions: o.filter(function (e) {
          return !u.has(e.localId);
        }),
      };
    }
    function A(e, t) {
      return e.flatMap(function (e) {
        var n,
          r,
          o = e.addOptionMsgKey,
          a = e.localId,
          i = e.name;
        return o != null
          ? [
              {
                name: i,
                addOptionMsgKey: o,
                addOptionMsgT: (n = t.get(o)) == null ? void 0 : n.t,
                localId: a,
                order: (r = t.get(o)) != null ? r : { t: -1 / 0, stanzaId: "" },
              },
            ]
          : [];
      });
    }
    function F(e, t) {
      var n = new Set(
          e.map(function (e) {
            return e.addOptionMsgKey;
          }),
        ),
        r = [];
      for (var o of t) {
        var a,
          i = o.decryptedAddOption,
          l = i.id.toString();
        n.has(l) ||
          (n.add(l),
          r.push({
            name: i.pollAddedOption.name,
            addOptionMsgKey: l,
            addOptionMsgT: i.t,
            localId: null,
            order: { t: (a = i.t) != null ? a : 1 / 0, stanzaId: i.id.id },
          }));
      }
      return r;
    }
    function O(e, t) {
      return e.order.t !== t.order.t
        ? e.order.t < t.order.t
          ? -1
          : 1
        : e.order.stanzaId === t.order.stanzaId
          ? 0
          : e.order.stanzaId < t.order.stanzaId
            ? -1
            : 1;
    }
    function B(e, t) {
      var n = new Set(
        e.map(function (e) {
          return e.name;
        }),
      );
      return t.filter(function (e) {
        var t = e.name;
        return n.has(t) ? !1 : (n.add(t), !0);
      });
    }
    function W(e, t) {
      return e.slice(
        0,
        Math.max(0, o("WAWebPollsGatingUtils").getMaxPollOptionCount() - t),
      );
    }
    function q(e, t) {
      var n = new Map(
          t.map(function (e) {
            return [e.name, e.localId];
          }),
        ),
        r =
          Math.max.apply(
            Math,
            [-1].concat(
              t.map(function (e) {
                return e.localId;
              }),
            ),
          ) + 1;
      return e.map(function (e) {
        var t,
          o = e.addOptionMsgKey,
          a = e.addOptionMsgT,
          i = e.localId,
          l = e.name;
        return {
          name: l,
          localId: (t = i != null ? i : n.get(l)) != null ? t : r++,
          addOptionMsgKey: o,
          addOptionMsgT: a,
        };
      });
    }
    function U(e, t) {
      return (
        e.length === t.length &&
        e.every(function (e, n) {
          return (
            e.localId === t[n].localId &&
            e.name === t[n].name &&
            e.addOptionMsgKey === t[n].addOptionMsgKey
          );
        })
      );
    }
    function V(e) {
      return H.apply(this, arguments);
    }
    function H() {
      return (
        (H = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = new Map();
          for (var r of e) {
            var a = r.merged,
              i = r.parentMsg;
            if (a != null) {
              var l = i.id.remote.toString(),
                s = a.msg,
                u = t.get(l);
              u != null ? u.push(s) : t.set(l, [s]);
            }
          }
          var c = yield (_ || (_ = n("Promise"))).allSettled(
            Array.from(
              t,
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    var t = e[0],
                      n = e[1],
                      r = o("WAWebWidFactory").createWid(t);
                    yield o("WAWebBackendApi").frontendSendAndReceive(
                      "processMultipleMessages",
                      {
                        chatId: r,
                        msgObjs: n,
                        meta: { add: "last", isHistory: !1 },
                        processMessagesOrigin: "pollAddOptionMessage",
                      },
                    );
                  },
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            ),
          );
          for (var d of c)
            d.status === "rejected" &&
              o("WALogger")
                .ERROR(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "applyPollAddOptionsToParent: frontend notification failed",
                    ])),
                )
                .sendLogs("poll_add_option_notify_failed");
        })),
        H.apply(this, arguments)
      );
    }
    ((l.applyPollAddOptionsToParent = f),
      (l.removePollAddOptionMsgs = D),
      (l.groupResultsByParent = M),
      (l.mergeAddOptionsIntoParent = w));
  },
  98,
);
