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
      c,
      d = 200,
      m = new Map(),
      p = new Map(),
      _ = o(
        "WAWebContactsAndGroupsSession",
      ).createContactsAndGroupsSessionValue(m),
      f = o(
        "WAWebContactsAndGroupsSession",
      ).createContactsAndGroupsSessionValue(p),
      g = new WeakMap(),
      h = new Set(),
      y = null;
    function C() {
      return f.get();
    }
    function b(e) {
      return (
        h.add(e),
        function () {
          h.delete(e);
        }
      );
    }
    function v(e, t) {
      var n,
        r = o("WAWebContactsAndGroupsGroupInteractions").getPersonKey(e),
        a = r == null ? null : (n = g.get(t)) == null ? void 0 : n.get(r);
      return a == null ? null : o("WAWebChatCollection").ChatCollection.get(a);
    }
    function S() {
      var t = { cancelWait: null, isAborted: !1 };
      return (
        E(t).catch(function (t) {
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "contacts and groups: reading group interactions failed",
                ])),
            )
            .catching(r("getErrorSafe")(t));
        }),
        o("WAWebMsgCollection").MsgCollection.on("add", $),
        o("WAWebChatCollection").ChatCollection.on("change:archive", R),
        o("WAWebChatCollection").ChatCollection.on("change:isLocked", R),
        o("WAWebChatCollection").ChatCollection.on("change:muteExpiration", R),
        function () {
          ((t.isAborted = !0),
            t.cancelWait == null || t.cancelWait(),
            y != null && w(),
            o("WAWebMsgCollection").MsgCollection.off("add", $),
            o("WAWebChatCollection").ChatCollection.off("change:archive", R),
            o("WAWebChatCollection").ChatCollection.off("change:isLocked", R),
            o("WAWebChatCollection").ChatCollection.off(
              "change:muteExpiration",
              R,
            ));
        }
      );
    }
    function R(e) {
      e.id.isGroup() &&
        _.get().has(e.id.toString()) &&
        A(o("WATimeUtils").unixTime());
    }
    function L(e, t) {
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
    function E(e) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WATimeUtils").unixTime(),
            n = F(t)
              .filter(function (e) {
                var t;
                return (
                  ((t = _.get().get(e.id.toString())) == null
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
          (yield I(n, 0, t, e)) && A(t);
        })),
        k.apply(this, arguments)
      );
    }
    function I(e, t, n, r) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var a,
              i = e[t];
            if (i == null) return !0;
            var l = (a = i.t) != null ? a : 0,
              s = yield D(i, null, [], n, r);
            return s == null
              ? !1
              : (N(i.id.toString(), {
                  chatTime: l,
                  lastMsg: s[0],
                  times: o(
                    "WAWebContactsAndGroupsGroupInteractions",
                  ).getGroupInteractionTimes(s),
                }),
                I(e, t + 1, n, r));
          },
        )),
        T.apply(this, arguments)
      );
    }
    function D(e, t, n, r, o) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, a) {
            if ((yield M(a), a.isAborted)) return null;
            var i = yield o(
              "WAWebContactsAndGroupsGroupTimelineJob",
            ).queryGroupTimelinePageJob({
              beforeInternalId: t,
              groupId: e.id,
              limit: d,
              sinceTs:
                r - o("WAWebContactsAndGroupsThisWeek").THIS_WEEK_IN_SECONDS,
            });
            return a.isAborted
              ? null
              : (n.push.apply(n, i.msgs),
                i.nextBeforeInternalId == null
                  ? n
                  : D(e, i.nextBeforeInternalId, n, r, a));
          },
        )),
        x.apply(this, arguments)
      );
    }
    function $(e) {
      try {
        P(e);
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
    function P(e) {
      var t,
        n,
        r = e.id.remote.toString(),
        a = e.isNewMsg ? _.get().get(r) : null;
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
        if (!(i == null || !L(i, l))) {
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
            N(r, {
              chatTime: Math.max(a.chatTime, e.t),
              lastMsg: c ? s : u,
              times: d,
            }),
            y == null &&
              (y = o("WAWebPonyfillsIdleCallback").requestIdleCallback(w)));
        }
      }
    }
    function N(e, t) {
      _.set(new Map(_.get()).set(e, t));
    }
    function M(e) {
      return new (c || (c = n("Promise")))(function (t) {
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
    function w() {
      try {
        A(o("WATimeUtils").unixTime());
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
    function A(e) {
      y != null &&
        (o("WAWebPonyfillsIdleCallback").cancelIdleCallback(y), (y = null));
      var t = _.get(),
        n = new Map(),
        r = new Map();
      F(e).forEach(function (e) {
        var o,
          a = e.id.toString();
        (o = t.get(a)) == null ||
          o.times.forEach(function (e, t) {
            var o;
            e > ((o = n.get(t)) != null ? o : 0) && (n.set(t, e), r.set(t, a));
          });
      });
      var a = f.get();
      (!O(n, a) || !B(r, g.get(a))) &&
        (g.set(n, r),
        f.set(n),
        h.forEach(function (e) {
          return e();
        }));
    }
    function F(e) {
      return o("WAWebChatCollection").ChatCollection.filter(function (t) {
        return L(t, e);
      });
    }
    function O(e, t) {
      return (
        e.size === t.size &&
        Array.from(e).every(function (e) {
          var n = e[0],
            r = e[1];
          return t.get(n) === r;
        })
      );
    }
    function B(e, t) {
      return t == null
        ? e.size === 0
        : e.size === t.size &&
            Array.from(e).every(function (e) {
              var n = e[0],
                r = e[1];
              return t.get(n) === r;
            });
    }
    ((l.getGroupInteractionTimesSnapshot = C),
      (l.subscribeToGroupInteractionTimes = b),
      (l.getGroupOfInteraction = v),
      (l.startGroupInteractionScan = S),
      (l.isEligibleGroup = L));
  },
  98,
);
