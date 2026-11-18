__d(
  "WAWebForwardMessagesToChat",
  [
    "Promise",
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
    "asyncToGeneratorRuntime",
    "compactMap",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.appendedText,
            a = e.chats,
            i = e.includeCaption,
            l = i === void 0 ? !1 : i,
            u = e.msgs,
            c = o("WAWebForwardContentMsgs").getForwardContentMsgs(u);
          for (var p of c)
            (o("WAWebMsgGetters").getIsPSA(p) &&
              o("WAWebWamChatPSALogger").logChatPSAForward(p),
              o(
                "WAWebNewsletterGatingUtils",
              ).isNewsletterMessageForwardLoggingEnabled() &&
                o("WAWebMsgGetters").getHasOriginatedFromNewsletter(p) &&
                o(
                  "WAWebLogNewsletterMessageForward",
                ).logNewsletterMessageForward(p, a));
          var g = o(
              "WAWebHatchJarvisForwardSend",
            ).createHatchJarvisForwardSendSession(),
            h = a.filter(function (e) {
              return (
                e.canSend &&
                !o("WAWebLimitSharingGatingUtils").isChatAcp2Restricted(e)
              );
            }),
            y = o("WAWebForwardReachGating").isForwardReachFeatureEnabled(),
            C = h.map(function (e) {
              return babelHelpers.extends(
                { chat: e, countsAsReach: y && _(e) },
                d(
                  o(
                    "WAWebForwardContentMsgs",
                  ).getForwardContentMsgsForDestination(
                    u,
                    o("WAWebForwardAssociatedChildren").getForwardDestination(
                      e,
                    ),
                  ),
                ),
              );
            }),
            b = y ? f(u, C) : void 0,
            v = yield (s || (s = n("Promise"))).all(
              C.map(
                (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e) {
                      var n = e.chat,
                        r = e.countsAsReach,
                        a = e.msgsThatCanBeforwarded,
                        i = e.msgsThatCannotBeForwarded;
                      return (
                        o("WAWebChatGetters").getIsUser(n) &&
                          n.contact.isContactBlocked &&
                          (yield o("WAWebBlockContactAction").unblockContact(
                            n.contact,
                          )),
                        o("WAPromiseProps").promiseProps({
                          chat: n,
                          undelivered: o(
                            "WAWebChatForwardMessage",
                          ).forwardMessages({
                            chat: n,
                            hatchJarvisSession: g,
                            msgs: a,
                            forwardReachScores:
                              b != null && m(n, r) ? b : void 0,
                            multicast: !0,
                            includeCaption: l,
                            appendedText: t,
                          }),
                          msgsThatCanBeforwarded: a,
                          msgsThatCannotBeForwarded: i,
                        })
                      );
                    },
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              ),
            ),
            S = r("compactMap")(v, function (e) {
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
          if (S.length) throw new (r("WAWebForwardErrorChatAction"))(S);
          return !0;
        })),
        c.apply(this, arguments)
      );
    }
    function d(e) {
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
    function m(e, t) {
      return o("WAWebUserUtils").isMeAccount(e.id) ? !0 : t && !p(e.contact);
    }
    function p(e) {
      return (
        o("WAWebContactGetters").getIsHosted(e) === !0 ||
        o("WAWebBizCoexUtils").isCloudApiContact(e)
      );
    }
    function _(e) {
      return r("WAWebWid").isNewsletter(e.id) ||
        e.id.isStatus() ||
        r("WAWebWid").isBot(e.id) ||
        r("WAWebWid").isAiHub(e.id) ||
        o("WAWebUserUtils").isMeAccount(e.id)
        ? !1
        : o("WAWebChatGetters").getIsUser(e) ||
            o("WAWebChatGetters").getIsGroup(e);
    }
    function f(t, n) {
      try {
        var a = g(t, n);
        return a.length === 0 ? void 0 : (h(a), y(a));
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
    function g(e, t) {
      return Array.from(C(e, t), function (e) {
        var t = e[0],
          n = e[1];
        return { source: t, destinationCount: n.length, outgoing: b(t, n) };
      });
    }
    function h(e) {
      for (var t of e) {
        var n = t.destinationCount,
          r = t.outgoing,
          a = t.source;
        o("WAWebForwardReachScore").recordForwardReachScore(r, n, E(a));
      }
    }
    function y(e) {
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
    function C(e, t) {
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
    function b(e, t) {
      var n = v(t);
      if (n != null)
        return o("WAWebForwardReachScore").computeOutgoingForwardReachScore({
          inherited: k(e),
          oneToOneCount: t.length - n.length,
          groupMemberCountsExcludingSender: n,
        });
    }
    function v(e) {
      var t = [];
      for (var n of e)
        if (o("WAWebChatGetters").getIsGroup(n)) {
          var r = S(n);
          if (r == null) return null;
          t.push(r);
        }
      return t;
    }
    function S(e) {
      var t = e.groupMetadata;
      if (t == null) return null;
      var n = R(e)
        ? o("WAWebChatGroupUtils").getGroupParticipantsCount(t)
        : t.participants.length;
      return n > 0 ? n - 1 : null;
    }
    function R(e) {
      return (
        o("WAWebFrontendChatGetters").getIsCAG(e) ||
        o("WAWebFrontendChatGetters").getIsCommunity(e)
      );
    }
    var L = "passed";
    function E(e) {
      var t;
      return ((t = o("WAWebMsgGetters").getForwardedAiBotMessageInfo(e)) == null
        ? void 0
        : t.validationStatus) === L
        ? !0
        : e.isForwarded !== !0 && o("WAWebMsgGetters").getIsBotResponse(e);
    }
    function k(e) {
      return o("WAWebMsgGetters").getIsNewsletterMsg(e) ||
        o("WAWebMsgGetters").getIsStatus(e) ||
        !e.isForwarded
        ? 0
        : o("WAWebMsgGetters").getForwardReachScore(e);
    }
    l.forwardMessagesToChats = u;
  },
  98,
);
