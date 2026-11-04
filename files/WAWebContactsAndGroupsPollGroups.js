__d(
  "WAWebContactsAndGroupsPollGroups",
  [
    "Promise",
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
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
    "compactMap",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = 2,
      m = o(
        "WAWebContactsAndGroupsSession",
      ).createContactsAndGroupsSessionValue(null),
      p = null,
      _ = !1,
      f = new Map(),
      g = new (r("WAWebEventEmitter"))();
    function h() {
      return m.get();
    }
    function y(e) {
      return e.remote.toString() + "_" + e.id;
    }
    function C(t) {
      var n,
        a = o(
          "WAWebContactsAndGroupsLastSeen",
        ).getContactsAndGroupsLastSeenBeforeThisVisit();
      if (!(((n = m.get()) == null ? void 0 : n.lastSeen) === a || p === a)) {
        p = a;
        var i = t - o("WAWebContactsAndGroupsThisWeek").THIS_WEEK_IN_SECONDS,
          l = o("WAWebChatCollection").ChatCollection.filter(function (e) {
            return (
              o("WAWebContactsAndGroupsThisWeek").happenedThisWeek(e.t, t) &&
              S(e)
            );
          });
        o("WAWebPonyfillsIdleCallback").requestIdleCallback(function () {
          D(l, i)
            .then(function (e) {
              p === a &&
                ((p = null),
                m.set({
                  lastSeen: a,
                  polls: new Map(
                    e.map(function (e) {
                      return [y(e.msgKey), e];
                    }),
                  ),
                  since: i,
                }),
                g.trigger("change"),
                $());
            })
            .catch(function (t) {
              (p === a && (p = null),
                o("WALogger")
                  .WARN(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "requestMyGroupPolls: loading my group polls failed",
                      ])),
                  )
                  .catching(r("getErrorSafe")(t)),
                $());
            });
        });
      }
    }
    function b(e) {
      !e.fromMe || !e.remote.isGroup() || (f.set(y(e), e), $());
    }
    function v(e) {
      return r("compactMap")(e, function (e) {
        var t = o("WAWebChatCollection").ChatCollection.get(e.msgKey.remote);
        return t != null ? R(t, e) : null;
      }).sort(function (e, t) {
        return t.t - e.t;
      });
    }
    function S(e) {
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
    function R(e, t) {
      var n,
        r = (n = e.groupMetadata) == null ? void 0 : n.participants;
      if (r == null || t.hideVoterNames || !S(e)) return null;
      var a = L(t.votes),
        i = E(t.options, a);
      if (i == null || i.name.trim() === "") return null;
      var l = new Set();
      return (
        a.forEach(function (e) {
          var t = e.selectedOptionLocalIds.includes(i.localId)
            ? k(r, e.sender)
            : null;
          t != null && l.add(t);
        }),
        l.size < d || l.size >= r.filter(I).length
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
    function L(e) {
      var t = new Map();
      return (
        e.forEach(function (e) {
          var n = T(e.sender),
            r = t.get(n);
          (r == null || e.senderTimestampMs > r.senderTimestampMs) &&
            t.set(n, e);
        }),
        Array.from(t.values())
      );
    }
    function E(e, t) {
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
    function k(e, t) {
      var n,
        r = o("WAWebApiContact").getAlternateUserWid(t),
        a = (n = e.get(t)) != null ? n : r != null ? e.get(r) : null;
      return a != null && I(a) ? a : null;
    }
    function I(e) {
      var t = e.id;
      return !o("WAWebUserPrefsMeUser").isMeAccount(t) && !t.isBot();
    }
    function T(e) {
      var t = e.isLid() ? e : o("WAWebApiContact").getAlternateUserWid(e);
      return (t != null ? t : e).toString();
    }
    function D(e, t) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var a = yield (c || (c = n("Promise"))).all(
            e.map(function (e) {
              return o("WAWebContactsAndGroupsDBGroupPolls")
                .getMyGroupPollsSince(e.id, t)
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
            }),
          );
          return a.flat();
        })),
        x.apply(this, arguments)
      );
    }
    function $() {
      _ ||
        p != null ||
        f.size === 0 ||
        ((_ = !0),
        o("WAWebPonyfillsIdleCallback").requestIdleCallback(function () {
          P().finally(function () {
            ((_ = !1), $());
          });
        }));
    }
    function P() {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = Array.from(f.values());
          if ((f.clear(), m.get() != null)) {
            var t = yield (c || (c = n("Promise"))).all(e.map(M)),
              r = m.get();
            if (r != null) {
              var o = new Map(r.polls);
              (e.forEach(function (e, n) {
                var a = t[n];
                if (a != null) {
                  var i = a.poll;
                  i != null && i.t >= r.since ? o.set(y(e), i) : o.delete(y(e));
                }
              }),
                m.set(babelHelpers.extends({}, r, { polls: o })),
                g.trigger("change"));
            }
          }
        })),
        N.apply(this, arguments)
      );
    }
    function M(e) {
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
    ((l.myGroupPollsChanges = g),
      (l.getMyGroupPollsVisit = h),
      (l.getPollGroupKey = y),
      (l.requestMyGroupPolls = C),
      (l.refreshMyGroupPoll = b),
      (l.getPollGroups = v),
      (l.canCreateGroupFromPollIn = S));
  },
  98,
);
