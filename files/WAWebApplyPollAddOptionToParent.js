__d(
  "WAWebApplyPollAddOptionToParent",
  [
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
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p;
    async function _(e) {
      if (e.length === 0) return [];
      var t = k(e),
        n = await o("WAWebModelStorageUtils")
          .getStorage()
          .lock(["message", "poll-votes"], function (e) {
            var n = e[0],
              r = e[1];
            return f(n, r, t);
          });
      return (await w(await v(n)), await S(n), await L(n.map(E)), n.flatMap(b));
    }
    async function f(e, t, n) {
      var r = Array.from(n.keys()),
        a = await e.bulkGet(r),
        i = r.flatMap(function (e, t) {
          var r = g(e, a[t]),
            o = n.get(e);
          return r != null && o != null ? [{ parentMsg: r, results: o }] : [];
        }),
        l = await h(
          e,
          i.flatMap(function (e) {
            var t,
              n = e.parentMsg;
            return (t = n.pollOptions) != null ? t : [];
          }),
        ),
        s = i.map(function (e) {
          var t = e.parentMsg,
            n = e.results;
          return {
            parentMsg: t,
            results: n,
            merged: I(t, n, l),
            appliedAddOptionOrders: l,
          };
        }),
        u = s.flatMap(function (e) {
          var t = e.merged;
          return t != null
            ? [o("WAWebDBMessageSerialization").dbRowFromMessage(t.msg)]
            : [];
        });
      return (
        u.length > 0 && (await e.bulkCreateOrMerge(u)),
        await Promise.all(
          s.map(function (e) {
            var n = e.merged,
              r = e.parentMsg;
            return n != null && n.removedOptions.length > 0
              ? o("WAWebDBPollsRemoveVoteOptions").removeOptionsFromStoredVotes(
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
        s
      );
    }
    function g(t, n) {
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
    async function h(e, t) {
      var n = new Map(),
        r = [];
      for (var o of t) {
        var a = o.addOptionMsgKey,
          i = o.addOptionMsgT;
        a != null && (i != null ? n.set(a, y(a, i)) : r.push(a));
      }
      if (r.length === 0) return n;
      var l = await e.bulkGet(r);
      return (
        r.forEach(function (e, t) {
          var r = l[t];
          r != null && n.set(e, y(e, r.t));
        }),
        n
      );
    }
    function y(e, t) {
      return { t, stanzaId: r("WAWebMsgKey").fromString(e).id };
    }
    function C(e) {
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
    function b(e) {
      var t = new Set(
        C(e).map(function (e) {
          return e.addOptionMsgKey;
        }),
      );
      return e.results.filter(function (e) {
        var n = e.decryptedAddOption;
        return !t.has(n.id.toString());
      });
    }
    async function v(e) {
      var t = await Promise.allSettled(
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
        n = e.filter(function (e, n) {
          return t[n].status === "fulfilled";
        });
      return (
        n.length < e.length &&
          o("WALogger")
            .ERROR(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "applyPollAddOptionsToParent: frontend vote update failed",
                ])),
            )
            .sendLogs("poll_add_option_remove_vote_options_failed"),
        n
      );
    }
    async function S(e) {
      var t = e.flatMap(function (e) {
        var t,
          n = new Set(
            C(e).map(function (e) {
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
      await R(t);
    }
    async function R(e) {
      if (e.length !== 0) {
        try {
          await o("WAWebDBMessageDelete").removeMessagesFromHistory(
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
        var t = await Promise.allSettled(
            e.map(function (e) {
              return o("WAWebBackendApi").frontendSendAndReceive(
                "deleteMessageFromCollectionForSync",
                { msgKey: e },
              );
            }),
          ),
          n = t.filter(function (e) {
            return e.status === "rejected";
          }).length;
        n > 0 &&
          o("WALogger")
            .ERROR(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "[polls] failed to remove ",
                  " poll add-option messages from the chat",
                ])),
              n,
            )
            .sendLogs("poll-add-option-remove-msgs-frontend-failed");
      }
    }
    async function L(e) {
      var t = e.filter(function (e) {
        var t = e.addedOptions,
          n = e.droppedOptions;
        return t.length > 0 || n.length > 0;
      });
      if (t.length !== 0)
        try {
          var n = await r("WAWebLoadPendingPollVoteResolver")(),
            a = n.resolvePendingVotesForAddedOptions;
          await Promise.all(
            t.map(function (e) {
              return a(e);
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
    }
    function E(e) {
      var t = e.appliedAddOptionOrders,
        n = e.merged,
        o = e.parentMsg,
        a = e.results,
        i = C(e),
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
    function k(e) {
      var t = new Map();
      for (var n of e) {
        var r = n.parentMsg.id.toString(),
          o = t.get(r);
        o != null ? o.push(n) : t.set(r, [n]);
      }
      return t;
    }
    function I(e, t, n) {
      var r,
        o = (r = e.pollOptions) != null ? r : [],
        a = o.filter(function (e) {
          return e.addOptionMsgKey == null;
        }),
        i = [].concat(T(o, n), D(o, t)).sort(x),
        l = P($(a, i), a.length),
        s = [].concat(a, N(l, o));
      if (M(o, s)) return null;
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
    function T(e, t) {
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
    function D(e, t) {
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
    function x(e, t) {
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
    function $(e, t) {
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
    function P(e, t) {
      return e.slice(
        0,
        Math.max(0, o("WAWebPollsGatingUtils").getMaxPollOptionCount() - t),
      );
    }
    function N(e, t) {
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
    function M(e, t) {
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
    async function w(e) {
      var t = e.flatMap(function (e) {
        var t = e.merged,
          n = e.parentMsg;
        return (t == null ? void 0 : t.msg.pollOptions) != null
          ? [{ parentMsgKey: n.id, pollOptions: t.msg.pollOptions }]
          : [];
      });
      if (t.length !== 0)
        try {
          await o("WAWebBackendApi").frontendSendAndReceive(
            "updatePollOptions",
            { updates: t },
          );
        } catch (e) {
          o("WALogger")
            .ERROR(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "applyPollAddOptionsToParent: frontend notification failed",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("poll_add_option_notify_failed");
        }
    }
    ((l.applyPollAddOptionsToParent = _),
      (l.removePollAddOptionMsgs = R),
      (l.groupResultsByParent = k),
      (l.mergeAddOptionsIntoParent = I));
  },
  98,
);
