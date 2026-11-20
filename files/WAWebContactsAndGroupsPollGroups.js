__d(
  "WAWebContactsAndGroupsPollGroups",
  [
    "Promise",
    "WAConcurrentIterate",
    "WALogger",
    "WAWebApiContact",
    "WAWebCanUseGroupFromGroup",
    "WAWebChatCollection",
    "WAWebContactCollection",
    "WAWebContactsAndGroupsDBGroupPolls",
    "WAWebContactsAndGroupsLastSeen",
    "WAWebContactsAndGroupsMyGroups",
    "WAWebContactsAndGroupsSession",
    "WAWebContactsAndGroupsThisWeek",
    "WAWebEventEmitter",
    "WAWebFrontendChatGetters",
    "WAWebPonyfillsIdleCallback",
    "WAWebUserUtils",
    "asyncToGeneratorRuntime",
    "compactMap",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m = 2,
      p = 4,
      _ = (d = o(
        "WAWebContactsAndGroupsSession",
      )).createContactsAndGroupsSessionValue(null),
      f = d.createContactsAndGroupsSessionValue(null),
      g = d.createContactsAndGroupsSessionValue(!1),
      h = d.createContactsAndGroupsSessionValue(null),
      y = new Map(),
      C = d.createContactsAndGroupsSessionValue(y),
      b = new (r("WAWebEventEmitter"))();
    function v() {
      return _.get();
    }
    function S(e) {
      return e.remote.toString() + "_" + e.id;
    }
    function R(t) {
      var n,
        a,
        i = o(
          "WAWebContactsAndGroupsLastSeen",
        ).getContactsAndGroupsLastSeenBeforeThisVisit();
      if (
        !(
          ((n = _.get()) == null ? void 0 : n.lastSeen) === i ||
          ((a = f.get()) == null ? void 0 : a.lastSeen) === i
        )
      ) {
        var l = { lastSeen: i };
        f.set(l);
        var s = t - o("WAWebContactsAndGroupsThisWeek").THIS_WEEK_IN_SECONDS,
          u = o("WAWebChatCollection").ChatCollection.filter(function (e) {
            return (
              o("WAWebContactsAndGroupsThisWeek").happenedThisWeek(e.t, t) &&
              k(e)
            );
          });
        o("WAWebPonyfillsIdleCallback").requestIdleCallback(function () {
          N(u, s)
            .then(function (e) {
              f.get() === l &&
                (f.set(null),
                _.set({
                  lastSeen: i,
                  polls: new Map(
                    e.map(function (e) {
                      return [S(e.msgKey), e];
                    }),
                  ),
                  since: s,
                }),
                b.trigger("change"),
                w());
            })
            .catch(function (t) {
              (f.get() === l && f.set(null),
                o("WALogger")
                  .WARN(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "requestMyGroupPolls: loading my group polls failed",
                      ])),
                  )
                  .catching(r("getErrorSafe")(t)),
                w());
            });
        });
      }
    }
    function L(e) {
      !e.fromMe ||
        !e.remote.isGroup() ||
        (C.set(new Map(C.get()).set(S(e), e)), w());
    }
    function E(e) {
      return r("compactMap")(e, function (e) {
        var t = o("WAWebChatCollection").ChatCollection.get(e.msgKey.remote);
        return t != null ? I(t, e) : null;
      }).sort(function (e, t) {
        return t.t - e.t;
      });
    }
    function k(e) {
      var t,
        n = (t = e.groupMetadata) == null ? void 0 : t.participants;
      return (
        n != null &&
        o("WAWebContactsAndGroupsMyGroups").isMyGroup(e) &&
        !o("WAWebFrontendChatGetters").getIsCommunity(e) &&
        n.iAmMember() &&
        r("WAWebCanUseGroupFromGroup")(n.length, n.iAmAdmin())
      );
    }
    function I(e, t) {
      var n,
        r = (n = e.groupMetadata) == null ? void 0 : n.participants;
      if (r == null || t.hideVoterNames || !k(e)) return null;
      var a = T(t.votes),
        i = D(t.options, a);
      if (i == null || i.name.trim() === "") return null;
      var l = new Set();
      return (
        a.forEach(function (e) {
          var t = e.selectedOptionLocalIds.includes(i.localId)
            ? x(r, e.sender)
            : null;
          t != null && l.add(t);
        }),
        l.size < m || l.size >= r.filter($).length
          ? null
          : {
              chat: e,
              msgKey: t.msgKey,
              optionName: i.name,
              question: t.question,
              t: t.t,
              voters: Array.from(l, function (e) {
                var t = e.id;
                return o("WAWebContactCollection").ContactCollection.gadd(t);
              }),
            }
      );
    }
    function T(e) {
      var t = new Map();
      return (
        e.forEach(function (e) {
          var n = P(e.sender),
            r = t.get(n);
          (r == null || e.senderTimestampMs > r.senderTimestampMs) &&
            t.set(n, e);
        }),
        Array.from(t.values())
      );
    }
    function D(e, t) {
      var n = null,
        r = 0;
      return (
        e.forEach(function (e) {
          var o = t.filter(function (t) {
            return t.selectedOptionLocalIds.includes(e.localId);
          }).length;
          o > r && ((n = e), (r = o));
        }),
        n
      );
    }
    function x(e, t) {
      var n,
        r = o("WAWebApiContact").getAlternateUserWid(t),
        a = (n = e.get(t)) != null ? n : r != null ? e.get(r) : null;
      return a != null && $(a) ? a : null;
    }
    function $(e) {
      var t = e.id;
      return !o("WAWebUserUtils").isMeAccount(t) && !t.isBot();
    }
    function P(e) {
      var t = e.isLid() ? e : o("WAWebApiContact").getAlternateUserWid(e);
      return (t != null ? t : e).toString();
    }
    function N(e, t) {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield o("WAConcurrentIterate").concurrentIterate(
            e.length,
            function (n) {
              return o("WAWebContactsAndGroupsDBGroupPolls")
                .getMyGroupPollsSince(e[n].id, t)
                .catch(function (e) {
                  return (
                    o("WALogger")
                      .WARN(
                        u ||
                          (u = babelHelpers.taggedTemplateLiteralLoose([
                            "loadMyGroupPolls: reading the polls of a group failed",
                          ])),
                      )
                      .catching(r("getErrorSafe")(e)),
                    []
                  );
                });
            },
            p,
          );
          return n.flat();
        })),
        M.apply(this, arguments)
      );
    }
    function w() {
      g.get() ||
        f.get() != null ||
        _.get() == null ||
        C.get().size === 0 ||
        (g.set(!0),
        o("WAWebPonyfillsIdleCallback").requestIdleCallback(function () {
          A().finally(function () {
            (g.set(!1), w());
          });
        }));
    }
    function A() {
      return F.apply(this, arguments);
    }
    function F() {
      return (
        (F = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (_.get() != null) {
            var e = O(),
              t = Array.from(C.get().values());
            C.set(y);
            var r = yield (c || (c = n("Promise"))).all(t.map(B)),
              o = _.get();
            if (!(o == null || h.get() !== e)) {
              var a = new Map(o.polls);
              (t.forEach(function (e, t) {
                var n = r[t];
                if (n != null) {
                  var i = n.poll;
                  i != null && i.t >= o.since ? a.set(S(e), i) : a.delete(S(e));
                }
              }),
                _.set(babelHelpers.extends({}, o, { polls: a })),
                b.trigger("change"));
            }
          }
        })),
        F.apply(this, arguments)
      );
    }
    function O() {
      var e,
        t = (e = h.get()) != null ? e : {};
      return (h.set(t), t);
    }
    function B(e) {
      return o("WAWebContactsAndGroupsDBGroupPolls")
        .getMyGroupPoll(e)
        .then(
          function (e) {
            return { poll: e };
          },
          function (e) {
            return (
              o("WALogger")
                .WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "refreshPendingPolls: reading a group poll failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e)),
              null
            );
          },
        );
    }
    ((l.myGroupPollsChanges = b),
      (l.getMyGroupPollsVisit = v),
      (l.getPollGroupKey = S),
      (l.requestMyGroupPolls = R),
      (l.refreshMyGroupPoll = L),
      (l.getPollGroups = E));
  },
  98,
);
