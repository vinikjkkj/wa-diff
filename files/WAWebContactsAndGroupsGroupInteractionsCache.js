__d(
  "WAWebContactsAndGroupsGroupInteractionsCache",
  [
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
      f = new WeakMap(),
      g = new Set(),
      h = null;
    function y() {
      return _.get();
    }
    function C(e) {
      return (
        g.add(e),
        function () {
          g.delete(e);
        }
      );
    }
    function b(e, t) {
      var n,
        r = o("WAWebContactsAndGroupsGroupInteractions").getPersonKey(e),
        a = r == null ? null : (n = f.get(t)) == null ? void 0 : n.get(r);
      return a == null ? null : o("WAWebChatCollection").ChatCollection.get(a);
    }
    function v() {
      var t = { cancelWait: null, isAborted: !1 };
      return (
        L(t).catch(function (t) {
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "contacts and groups: reading group interactions failed",
                ])),
            )
            .catching(r("getErrorSafe")(t));
        }),
        o("WAWebMsgCollection").MsgCollection.on("add", I),
        o("WAWebChatCollection").ChatCollection.on("change:archive", S),
        o("WAWebChatCollection").ChatCollection.on("change:isLocked", S),
        o("WAWebChatCollection").ChatCollection.on("change:muteExpiration", S),
        function () {
          ((t.isAborted = !0),
            t.cancelWait == null || t.cancelWait(),
            h != null && $(),
            o("WAWebMsgCollection").MsgCollection.off("add", I),
            o("WAWebChatCollection").ChatCollection.off("change:archive", S),
            o("WAWebChatCollection").ChatCollection.off("change:isLocked", S),
            o("WAWebChatCollection").ChatCollection.off(
              "change:muteExpiration",
              S,
            ));
        }
      );
    }
    function S(e) {
      e.id.isGroup() &&
        p.get().has(e.id.toString()) &&
        P(o("WATimeUtils").unixTime());
    }
    function R(e, t) {
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
    async function L(e) {
      var t = o("WATimeUtils").unixTime(),
        n = N(t)
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
            return ((n = t.t) != null ? n : 0) - ((r = e.t) != null ? r : 0);
          });
      (await E(n, 0, t, e)) && P(t);
    }
    async function E(e, t, n, r) {
      var a,
        i = e[t];
      if (i == null) return !0;
      var l = (a = i.t) != null ? a : 0,
        s = await k(i, null, [], n, r);
      return s == null
        ? !1
        : (D(i.id.toString(), {
            chatTime: l,
            lastMsg: s[0],
            times: o(
              "WAWebContactsAndGroupsGroupInteractions",
            ).getGroupInteractionTimes(s),
          }),
          E(e, t + 1, n, r));
    }
    async function k(e, t, n, r, a) {
      if ((await x(a), a.isAborted)) return null;
      var i = await o(
        "WAWebContactsAndGroupsGroupTimelineJob",
      ).queryGroupTimelinePageJob({
        beforeInternalId: t,
        groupId: e.id,
        limit: c,
        sinceTs: r - o("WAWebContactsAndGroupsThisWeek").THIS_WEEK_IN_SECONDS,
      });
      return a.isAborted
        ? null
        : (n.push.apply(n, i.msgs),
          i.nextBeforeInternalId == null
            ? n
            : k(e, i.nextBeforeInternalId, n, r, a));
    }
    function I(e) {
      try {
        T(e);
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
    function T(e) {
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
        if (!(i == null || !R(i, l))) {
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
            D(r, {
              chatTime: Math.max(a.chatTime, e.t),
              lastMsg: c ? s : u,
              times: d,
            }),
            h == null &&
              (h = o("WAWebPonyfillsIdleCallback").requestIdleCallback($)));
        }
      }
    }
    function D(e, t) {
      p.set(new Map(p.get()).set(e, t));
    }
    function x(e) {
      return new Promise(function (t) {
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
    function $() {
      try {
        P(o("WATimeUtils").unixTime());
      } catch (e) {
        o("WALogger")
          .WARN(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "contacts and groups: updating group interactions failed",
              ])),
          )
          .catching(r("getErrorSafe")(e));
      }
    }
    function P(e) {
      h != null &&
        (o("WAWebPonyfillsIdleCallback").cancelIdleCallback(h), (h = null));
      var t = p.get(),
        n = new Map(),
        r = new Map();
      N(e).forEach(function (e) {
        var o,
          a = e.id.toString();
        (o = t.get(a)) == null ||
          o.times.forEach(function (e, t) {
            var o;
            e > ((o = n.get(t)) != null ? o : 0) && (n.set(t, e), r.set(t, a));
          });
      });
      var a = _.get();
      (!M(n, a) || !w(r, f.get(a))) &&
        (f.set(n, r),
        _.set(n),
        g.forEach(function (e) {
          return e();
        }));
    }
    function N(e) {
      return o("WAWebChatCollection").ChatCollection.filter(function (t) {
        return R(t, e);
      });
    }
    function M(e, t) {
      return (
        e.size === t.size &&
        Array.from(e).every(function (e) {
          var n = e[0],
            r = e[1];
          return t.get(n) === r;
        })
      );
    }
    function w(e, t) {
      return t == null
        ? e.size === 0
        : e.size === t.size &&
            Array.from(e).every(function (e) {
              var n = e[0],
                r = e[1];
              return t.get(n) === r;
            });
    }
    ((l.getGroupInteractionTimesSnapshot = y),
      (l.subscribeToGroupInteractionTimes = C),
      (l.getGroupOfInteraction = b),
      (l.startGroupInteractionScan = v),
      (l.isEligibleGroup = R));
  },
  98,
);
