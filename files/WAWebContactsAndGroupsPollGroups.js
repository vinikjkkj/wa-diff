__d(
  "WAWebContactsAndGroupsPollGroups",
  [
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
    "compactMap",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = 2,
      m = 4,
      p = (c = o(
        "WAWebContactsAndGroupsSession",
      )).createContactsAndGroupsSessionValue(null),
      _ = c.createContactsAndGroupsSessionValue(null),
      f = c.createContactsAndGroupsSessionValue(!1),
      g = c.createContactsAndGroupsSessionValue(null),
      h = new Map(),
      y = c.createContactsAndGroupsSessionValue(h),
      C = new (r("WAWebEventEmitter"))();
    function b() {
      return p.get();
    }
    function v(e) {
      return e.remote.toString() + "_" + e.id;
    }
    function S(t) {
      var n,
        a,
        i = o(
          "WAWebContactsAndGroupsLastSeen",
        ).getContactsAndGroupsLastSeenBeforeThisVisit();
      if (
        !(
          ((n = p.get()) == null ? void 0 : n.lastSeen) === i ||
          ((a = _.get()) == null ? void 0 : a.lastSeen) === i
        )
      ) {
        var l = { lastSeen: i };
        _.set(l);
        var s = t - o("WAWebContactsAndGroupsThisWeek").THIS_WEEK_IN_SECONDS,
          u = o("WAWebChatCollection").ChatCollection.filter(function (e) {
            return (
              o("WAWebContactsAndGroupsThisWeek").happenedThisWeek(e.t, t) &&
              E(e)
            );
          });
        o("WAWebPonyfillsIdleCallback").requestIdleCallback(function () {
          P(u, s)
            .then(function (e) {
              _.get() === l &&
                (_.set(null),
                p.set({
                  lastSeen: i,
                  polls: new Map(
                    e.map(function (e) {
                      return [v(e.msgKey), e];
                    }),
                  ),
                  since: s,
                }),
                C.trigger("change"),
                N());
            })
            .catch(function (t) {
              (_.get() === l && _.set(null),
                o("WALogger")
                  .WARN(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "requestMyGroupPolls: loading my group polls failed",
                      ])),
                  )
                  .catching(r("getErrorSafe")(t)),
                N());
            });
        });
      }
    }
    function R(e) {
      !e.fromMe ||
        !e.remote.isGroup() ||
        (y.set(new Map(y.get()).set(v(e), e)), N());
    }
    function L(e) {
      return r("compactMap")(e, function (e) {
        var t = o("WAWebChatCollection").ChatCollection.get(e.msgKey.remote);
        return t != null ? k(t, e) : null;
      }).sort(function (e, t) {
        return t.t - e.t;
      });
    }
    function E(e) {
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
    function k(e, t) {
      var n,
        r = (n = e.groupMetadata) == null ? void 0 : n.participants;
      if (r == null || t.hideVoterNames || !E(e)) return null;
      var a = I(t.votes),
        i = T(t.options, a);
      if (i == null || i.name.trim() === "") return null;
      var l = new Set();
      return (
        a.forEach(function (e) {
          var t = e.selectedOptionLocalIds.includes(i.localId)
            ? D(r, e.sender)
            : null;
          t != null && l.add(t);
        }),
        l.size < d || l.size >= r.filter(x).length
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
    function I(e) {
      var t = new Map();
      return (
        e.forEach(function (e) {
          var n = $(e.sender),
            r = t.get(n);
          (r == null || e.senderTimestampMs > r.senderTimestampMs) &&
            t.set(n, e);
        }),
        Array.from(t.values())
      );
    }
    function T(e, t) {
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
    function D(e, t) {
      var n,
        r = o("WAWebApiContact").getAlternateUserWid(t),
        a = (n = e.get(t)) != null ? n : r != null ? e.get(r) : null;
      return a != null && x(a) ? a : null;
    }
    function x(e) {
      var t = e.id;
      return !o("WAWebUserUtils").isMeAccount(t) && !t.isBot();
    }
    function $(e) {
      var t = e.isLid() ? e : o("WAWebApiContact").getAlternateUserWid(e);
      return (t != null ? t : e).toString();
    }
    async function P(e, t) {
      var n = await o("WAConcurrentIterate").concurrentIterate(
        e.length,
        function (n) {
          return o("WAWebContactsAndGroupsDBGroupPolls")
            .getMyGroupPollsSince(e[n].id, t)
            .catch(function (e) {
              return (
                o("WALogger")
                  .WARN(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "loadMyGroupPolls: reading the polls of a group failed",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e)),
                []
              );
            });
        },
        m,
      );
      return n.flat();
    }
    function N() {
      f.get() ||
        _.get() != null ||
        p.get() == null ||
        y.get().size === 0 ||
        (f.set(!0),
        o("WAWebPonyfillsIdleCallback").requestIdleCallback(function () {
          M().finally(function () {
            (f.set(!1), N());
          });
        }));
    }
    async function M() {
      if (p.get() != null) {
        var e = w(),
          t = Array.from(y.get().values());
        y.set(h);
        var n = await Promise.all(t.map(A)),
          r = p.get();
        if (!(r == null || g.get() !== e)) {
          var o = new Map(r.polls);
          (t.forEach(function (e, t) {
            var a = n[t];
            if (a != null) {
              var i = a.poll;
              i != null && i.t >= r.since ? o.set(v(e), i) : o.delete(v(e));
            }
          }),
            p.set(babelHelpers.extends({}, r, { polls: o })),
            C.trigger("change"));
        }
      }
    }
    function w() {
      var e,
        t = (e = g.get()) != null ? e : {};
      return (g.set(t), t);
    }
    function A(e) {
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
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "refreshPendingPolls: reading a group poll failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e)),
              null
            );
          },
        );
    }
    ((l.myGroupPollsChanges = C),
      (l.getMyGroupPollsVisit = b),
      (l.getPollGroupKey = v),
      (l.requestMyGroupPolls = S),
      (l.refreshMyGroupPoll = R),
      (l.getPollGroups = L));
  },
  98,
);
