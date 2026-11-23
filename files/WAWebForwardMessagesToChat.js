__d(
  "WAWebForwardMessagesToChat",
  [
    "WALogger",
    "WAPromiseProps",
    "WAWebBizCoexUtils",
    "WAWebBlockContactAction",
    "WAWebChatForwardMessage",
    "WAWebChatGetters",
    "WAWebChatGroupUtils",
    "WAWebContactGetters",
    "WAWebFormatForwardErrorChatAction",
    "WAWebForwardAssociatedChildren",
    "WAWebForwardContentMsgs",
    "WAWebForwardErrorChatAction",
    "WAWebForwardReachGating",
    "WAWebForwardReachScore",
    "WAWebFrontendChatGetters",
    "WAWebHatchJarvisForwardSend",
    "WAWebLimitSharingGatingUtils",
    "WAWebLogNewsletterMessageForward",
    "WAWebMsgActionCapability",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebNewsletterGatingUtils",
    "WAWebUserUtils",
    "WAWebWamChatPSALogger",
    "WAWebWid",
    "compactMap",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s(e) {
      var t = e.appendedText,
        n = e.chats,
        a = e.includeCaption,
        i = a === void 0 ? !1 : a,
        l = e.msgs,
        s = o("WAWebForwardContentMsgs").getForwardContentMsgs(l);
      for (var d of s)
        (o("WAWebMsgGetters").getIsPSA(d) &&
          o("WAWebWamChatPSALogger").logChatPSAForward(d),
          o(
            "WAWebNewsletterGatingUtils",
          ).isNewsletterMessageForwardLoggingEnabled() &&
            o("WAWebMsgGetters").getHasOriginatedFromNewsletter(d) &&
            o("WAWebLogNewsletterMessageForward").logNewsletterMessageForward(
              d,
              n,
            ));
      var _ = o(
          "WAWebHatchJarvisForwardSend",
        ).createHatchJarvisForwardSendSession(),
        f = n.filter(function (e) {
          return (
            e.canSend &&
            !o("WAWebLimitSharingGatingUtils").isChatAcp2Restricted(e)
          );
        }),
        g = o("WAWebForwardReachGating").isForwardReachFeatureEnabled(),
        h = f.map(function (e) {
          return babelHelpers.extends(
            { chat: e, countsAsReach: g && m(e) },
            u(
              o("WAWebForwardContentMsgs").getForwardContentMsgsForDestination(
                l,
                o("WAWebForwardAssociatedChildren").getForwardDestination(e),
              ),
            ),
          );
        }),
        y = g ? p(l, h) : void 0,
        C = await Promise.all(
          h.map(async function (e) {
            var n = e.chat,
              r = e.countsAsReach,
              a = e.msgsThatCanBeforwarded,
              l = e.msgsThatCannotBeForwarded;
            return (
              o("WAWebChatGetters").getIsUser(n) &&
                n.contact.isContactBlocked &&
                (await o("WAWebBlockContactAction").unblockContact(n.contact)),
              o("WAPromiseProps").promiseProps({
                chat: n,
                undelivered: o("WAWebChatForwardMessage").forwardMessages({
                  chat: n,
                  hatchJarvisSession: _,
                  msgs: a,
                  forwardReachScores: y != null && c(n, r) ? y : void 0,
                  multicast: !0,
                  includeCaption: i,
                  appendedText: t,
                }),
                msgsThatCanBeforwarded: a,
                msgsThatCannotBeForwarded: l,
              })
            );
          }),
        ),
        b = r("compactMap")(C, function (e) {
          var t = e.chat,
            n = e.msgsThatCanBeforwarded,
            o = e.msgsThatCannotBeForwarded,
            a = e.undelivered,
            i = null;
          return (
            (a.length || o.length) &&
              (i = r("WAWebFormatForwardErrorChatAction")({
                chat: t,
                undelivered: a,
                canForward: n,
                cannotForward: o,
              })),
            i != null && i !== "" ? { chat: t, reason: i } : null
          );
        });
      if (b.length) throw new (r("WAWebForwardErrorChatAction"))(b);
      return !0;
    }
    function u(e) {
      var t = [],
        n = [];
      for (var r of e) {
        var a =
          o("WAWebMsgActionCapability").canForwardMsg(r) &&
          (o("WAWebMsgCollection").MsgCollection.get(r.id) != null ||
            o("WAWebMsgGetters").getIsEphemeral(r));
        a ? t.push(r) : n.push(r);
      }
      return { msgsThatCanBeforwarded: t, msgsThatCannotBeForwarded: n };
    }
    function c(e, t) {
      return t && !d(e.contact);
    }
    function d(e) {
      return (
        o("WAWebContactGetters").getIsHosted(e) === !0 ||
        o("WAWebBizCoexUtils").isCloudApiContact(e)
      );
    }
    function m(e) {
      return r("WAWebWid").isNewsletter(e.id) ||
        e.id.isStatus() ||
        r("WAWebWid").isBot(e.id) ||
        r("WAWebWid").isAiHub(e.id) ||
        o("WAWebUserUtils").isMeAccount(e.id)
        ? !1
        : o("WAWebChatGetters").getIsUser(e) ||
            o("WAWebChatGetters").getIsGroup(e);
    }
    function p(t, n) {
      try {
        var a = _(t, n);
        return a.length === 0 ? void 0 : (f(a), g(a));
      } catch (t) {
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[forward reach] score computation failed",
              ])),
          )
          .catching(r("getErrorSafe")(t))
          .sendLogs("forward-reach-score-fail");
        return;
      }
    }
    function _(e, t) {
      return Array.from(h(e, t), function (e) {
        var t = e[0],
          n = e[1];
        return { source: t, destinationCount: n.length, outgoing: y(t, n) };
      });
    }
    function f(e) {
      for (var t of e) {
        var n = t.destinationCount,
          r = t.outgoing,
          a = t.source;
        o("WAWebForwardReachScore").recordForwardReachScore(r, n, R(a));
      }
    }
    function g(e) {
      var t = new Map();
      for (var n of e) {
        var r = n.outgoing,
          a = n.source,
          i = o("WAWebForwardReachScore").roundForwardReachScore(r);
        for (var l of [a].concat(
          o("WAWebForwardContentMsgs").getForwardContentMsgs([a]),
        ))
          t.set(l.id.toString(), i);
      }
      return t;
    }
    function h(e, t) {
      var n = new Map();
      for (var r of e)
        for (var a of o("WAWebForwardContentMsgs").getForwardContentMsgs([r]))
          n.set(a.id.toString(), r);
      var i = new Map();
      for (var l of t) {
        var s = l.chat,
          u = l.countsAsReach,
          c = l.msgsThatCanBeforwarded;
        if (u)
          for (var d of c) {
            var m,
              p = (m = n.get(d.id.toString())) != null ? m : d,
              _ = i.get(p);
            _ == null ? i.set(p, [s]) : _.includes(s) || _.push(s);
          }
      }
      return i;
    }
    function y(e, t) {
      var n = C(t);
      if (n != null)
        return o("WAWebForwardReachScore").computeOutgoingForwardReachScore({
          inherited: L(e),
          oneToOneCount: t.length - n.length,
          groupMemberCountsExcludingSender: n,
        });
    }
    function C(e) {
      var t = [];
      for (var n of e)
        if (o("WAWebChatGetters").getIsGroup(n)) {
          var r = b(n);
          if (r == null) return null;
          t.push(r);
        }
      return t;
    }
    function b(e) {
      var t = e.groupMetadata;
      if (t == null) return null;
      var n = v(e)
        ? o("WAWebChatGroupUtils").getGroupParticipantsCount(t)
        : t.participants.length;
      return n > 0 ? n - 1 : null;
    }
    function v(e) {
      return (
        o("WAWebFrontendChatGetters").getIsCAG(e) ||
        o("WAWebFrontendChatGetters").getIsCommunity(e)
      );
    }
    var S = "passed";
    function R(e) {
      var t;
      return (
        ((t = o("WAWebMsgGetters").getForwardedAiBotMessageInfo(e)) == null
          ? void 0
          : t.validationStatus) === S
      );
    }
    function L(e) {
      return o("WAWebMsgGetters").getIsNewsletterMsg(e) ||
        o("WAWebMsgGetters").getIsStatus(e) ||
        !e.isForwarded
        ? 0
        : o("WAWebMsgGetters").getForwardReachScore(e);
    }
    l.forwardMessagesToChats = s;
  },
  98,
);
