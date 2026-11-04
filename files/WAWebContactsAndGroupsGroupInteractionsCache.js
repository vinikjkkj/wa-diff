__d(
  "WAWebContactsAndGroupsGroupInteractionsCache",
  [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebChatCollection",
    "WAWebChatGroupUtils",
    "WAWebContactsAndGroupsGroupInteractions",
    "WAWebContactsAndGroupsGroupTimelineJob",
    "WAWebContactsAndGroupsSession",
    "WAWebContactsAndGroupsThisWeek",
    "WAWebMsgCollection",
    "WAWebMuteGetters",
    "WAWebPonyfillsIdleCallback",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = 200,
      d = new Map(),
      m = new Map(),
      p = o(
        "WAWebContactsAndGroupsSession",
      ).createContactsAndGroupsSessionValue(d),
      _ = o(
        "WAWebContactsAndGroupsSession",
      ).createContactsAndGroupsSessionValue(m),
      f = new Set();
    function g() {
      return _.get();
    }
    function h(e) {
      return (
        f.add(e),
        function () {
          f.delete(e);
        }
      );
    }
    function y() {
      var t = { cancelWait: null, isAborted: !1 };
      return (
        b(t).catch(function (t) {
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "contacts and groups: reading group interactions failed",
                ])),
            )
            .catching(r("getErrorSafe")(t));
        }),
        o("WAWebMsgCollection").MsgCollection.on("add", k),
        function () {
          ((t.isAborted = !0),
            t.cancelWait == null || t.cancelWait(),
            o("WAWebMsgCollection").MsgCollection.off("add", k));
        }
      );
    }
    function C(e, t) {
      return (
        e.id.isGroup() &&
        o("WAWebContactsAndGroupsThisWeek").happenedThisWeek(e.t, t) &&
        !e.archive &&
        !e.isLocked &&
        !o("WAWebMuteGetters").getIsMuted(e.mute) &&
        o("WAWebChatGroupUtils").canSendToGroup(e) &&
        !o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(e)
      );
    }
    function b(e) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WATimeUtils").unixTime(),
            n = $(t)
              .filter(function (e) {
                var t;
                return (
                  ((t = p.get().get(e.id.toString())) == null
                    ? void 0
                    : t.chatTime) !== e.t
                );
              })
              .sort(function (e, t) {
                var n, r;
                return (
                  ((n = t.t) != null ? n : 0) - ((r = e.t) != null ? r : 0)
                );
              });
          (yield S(n, 0, t, e)) && x(t);
        })),
        v.apply(this, arguments)
      );
    }
    function S(e, t, n, r) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var a,
              i = e[t];
            if (i == null) return !0;
            var l = (a = i.t) != null ? a : 0,
              s = yield L(i, null, [], n, r);
            return s == null
              ? !1
              : (T(i.id.toString(), {
                  chatTime: l,
                  lastMsg: s[0],
                  times: o(
                    "WAWebContactsAndGroupsGroupInteractions",
                  ).getGroupInteractionTimes(s),
                }),
                S(e, t + 1, n, r));
          },
        )),
        R.apply(this, arguments)
      );
    }
    function L(e, t, n, r, o) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, a) {
            if ((yield D(a), a.isAborted)) return null;
            var i = yield o(
              "WAWebContactsAndGroupsGroupTimelineJob",
            ).queryGroupTimelinePageJob({
              beforeInternalId: t,
              groupId: e.id,
              limit: c,
              sinceTs:
                r - o("WAWebContactsAndGroupsThisWeek").THIS_WEEK_IN_SECONDS,
            });
            return a.isAborted
              ? null
              : (n.push.apply(n, i.msgs),
                i.nextBeforeInternalId == null
                  ? n
                  : L(e, i.nextBeforeInternalId, n, r, a));
          },
        )),
        E.apply(this, arguments)
      );
    }
    function k(e) {
      try {
        I(e);
      } catch (e) {
        o("WALogger")
          .WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "contacts and groups: updating group interactions failed",
              ])),
          )
          .catching(r("getErrorSafe")(e));
      }
    }
    function I(e) {
      var t,
        n,
        r = e.id.remote.toString(),
        a = e.isNewMsg ? p.get().get(r) : null;
      if (
        !(
          a == null ||
          !o("WAWebContactsAndGroupsGroupTimelineJob").isGroupTimelineMsgType(
            (t = e.futureproofType) != null ? t : e.type,
          )
        )
      ) {
        var i = o("WAWebChatCollection").ChatCollection.get(e.id.remote),
          l = o("WATimeUtils").unixTime();
        if (!(i == null || !C(i, l))) {
          var s = {
              author: e.author,
              fromMe: e.id.fromMe,
              mentionedJidList: (n = e.mentionedJidList) != null ? n : [],
              quotedParticipant: e.quotedParticipant,
              t: e.t,
            },
            u = a.lastMsg,
            c = u == null || s.t >= u.t,
            d = new Map(a.times);
          (o(
            "WAWebContactsAndGroupsGroupInteractions",
          ).mergeGroupInteractionTimes(
            d,
            o(
              "WAWebContactsAndGroupsGroupInteractions",
            ).getGroupInteractionTimes(c && u != null ? [u, s] : [s]),
          ),
            T(r, {
              chatTime: Math.max(a.chatTime, e.t),
              lastMsg: c ? s : u,
              times: d,
            }),
            x(l));
        }
      }
    }
    function T(e, t) {
      p.set(new Map(p.get()).set(e, t));
    }
    function D(e) {
      return new (u || (u = n("Promise")))(function (t) {
        var n = o("WAWebPonyfillsIdleCallback").requestIdleCallback(
          function () {
            return t();
          },
        );
        e.cancelWait = function () {
          (o("WAWebPonyfillsIdleCallback").cancelIdleCallback(n), t());
        };
      });
    }
    function x(e) {
      var t = p.get(),
        n = new Map();
      ($(e).forEach(function (e) {
        var r = t.get(e.id.toString());
        r != null &&
          o(
            "WAWebContactsAndGroupsGroupInteractions",
          ).mergeGroupInteractionTimes(n, r.times);
      }),
        P(n, _.get()) ||
          (_.set(n),
          f.forEach(function (e) {
            return e();
          })));
    }
    function $(e) {
      return o("WAWebChatCollection").ChatCollection.filter(function (t) {
        return C(t, e);
      });
    }
    function P(e, t) {
      return (
        e.size === t.size &&
        Array.from(e).every(function (e) {
          var n = e[0],
            r = e[1];
          return t.get(n) === r;
        })
      );
    }
    ((l.getGroupInteractionTimesSnapshot = g),
      (l.subscribeToGroupInteractionTimes = h),
      (l.startGroupInteractionScan = y),
      (l.isEligibleGroup = C));
  },
  98,
);
