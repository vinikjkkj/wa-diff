__d(
  "WAWebGroupAgentPrivacyNotice",
  [
    "WALogger",
    "WAWebBotGroupGatingUtils",
    "WAWebBotProduct",
    "WAWebBotUtils",
    "WAWebCommonMsgSubtypeTypes",
    "WAWebContactSystemMsg",
    "WAWebGroupAgentPrivacyNoticeParams",
    "WAWebGroupAgentRemovalSystemMsgs",
    "WAWebGroupSystemMsg",
    "WAWebGroupsParticipantsApi",
    "WAWebHandleSingleMsgWorkerCompatible",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebSchemaBotProfile",
    "WAWebSchemaChat",
    "WAWebUserUtils",
    "WAWebWidFactory",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = "privacynotice",
      c = "genericprivacynotice",
      d = "thirdpartyprivacynotice",
      m = "metaaiopennotice",
      p = "metaaiteenotice",
      _ = { hasAgentWithoutProfile: !1, hasMuse: !1, thirdPartyAgent: null };
    function f(e, t) {
      return x(
        o("WAWebContactSystemMsg").genNotificationMsg(e, {
          type: "notification_template",
          kind: o("WAWebMsgType").MsgKind.NotificationTemplate,
          subtype: o("WAWebCommonMsgSubtypeTypes").MsgSubtype
            .GroupTransitionToBotGroupSystemMsg,
          templateParams: [
            o("WAWebGroupAgentPrivacyNoticeParams")
              .GROUP_AGENT_PRIVACY_NOTICE_PARAM,
          ],
        }),
        t,
        u,
      );
    }
    function g(e, t) {
      return x(
        o("WAWebContactSystemMsg").genNotificationMsg(e, {
          type: "notification_template",
          kind: o("WAWebMsgType").MsgKind.NotificationTemplate,
          subtype: o("WAWebCommonMsgSubtypeTypes").MsgSubtype
            .GroupTransitionToBotGroupSystemMsg,
          templateParams: [
            o("WAWebGroupAgentPrivacyNoticeParams")
              .GENERIC_GROUP_AGENT_PRIVACY_NOTICE_PARAM,
          ],
        }),
        t,
        c,
      );
    }
    function h(e, t, n) {
      return x(
        o("WAWebContactSystemMsg").genNotificationMsg(e, {
          type: "notification_template",
          kind: o("WAWebMsgType").MsgKind.NotificationTemplate,
          subtype: o("WAWebCommonMsgSubtypeTypes").MsgSubtype
            .GroupTransitionToBotGroupSystemMsg,
          templateParams: [
            o("WAWebGroupAgentPrivacyNoticeParams")
              .THIRD_PARTY_GROUP_AGENT_PRIVACY_NOTICE_PARAM,
            t,
          ],
        }),
        n,
        d,
      );
    }
    function y(e) {
      var t = e.meta,
        n = e.participants,
        r = o("WAWebBotUtils").participantListIncludeOpenOrTeeGroupBotWid(n),
        a = r.includeOpenMetabot,
        i = r.includeTeeMetabot,
        l = [
          o("WAWebBotGroupGatingUtils").isOpenGroupBotParticipantAddEnabled() &&
          a
            ? {
                msg: o(
                  "WAWebGroupSystemMsg",
                ).genGroupTransitionToBotGroupNotificationMsg(t.chatId),
                suffix: m,
              }
            : null,
          o("WAWebBotGroupGatingUtils").isTEEGroupBotParticipantAddEnabled() &&
          i
            ? {
                msg: o(
                  "WAWebGroupSystemMsg",
                ).genGroupTransitionToTeeBotGroupNotificationMsg(t.chatId),
                suffix: p,
              }
            : null,
        ].filter(Boolean);
      return l.map(function (e) {
        var n = e.msg,
          r = e.suffix;
        return o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled()
          ? x(n, t, r)
          : n;
      });
    }
    async function C(e) {
      var t,
        n = e.addedParticipants,
        r = e.meta;
      if (
        !o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled() ||
        !n.some(function (e) {
          var t = e.id;
          return o("WAWebUserUtils").isMeAccount(t);
        })
      )
        return y({ meta: r, participants: n });
      var a = await o("WAWebGroupsParticipantsApi").getParticipants(r.chatId),
        i = ((t = a == null ? void 0 : a.participants) != null ? t : []).map(
          function (e) {
            return {
              id: o("WAWebWidFactory").createWid(e),
              isAdmin: !1,
              isSuperAdmin: !1,
            };
          },
        );
      return y({ meta: r, participants: [].concat(n, i) });
    }
    function b(e, t) {
      return o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled()
        ? [].concat(e, t)
        : [].concat(t, e);
    }
    async function v(e) {
      var t = e.meta,
        n = e.participants;
      if (!o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled())
        return [];
      var r = await R({
        chatId: t.chatId,
        meta: t,
        participantIds: n.map(function (e) {
          var t = e.id;
          return t;
        }),
      });
      return [].concat(r, y({ meta: t, participants: n }));
    }
    async function S(e) {
      var t,
        n = e.addedParticipantIds,
        r = e.chatId,
        a = e.meta;
      if (!o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled())
        return [];
      var i = await o("WAWebGroupsParticipantsApi").getParticipants(r),
        l = new Set(
          n.map(function (e) {
            return e.toString();
          }),
        ),
        s = ((t = i == null ? void 0 : i.participants) != null ? t : [])
          .filter(function (e) {
            return !l.has(e);
          })
          .map(function (e) {
            return o("WAWebWidFactory").createWid(e);
          });
      return k({ addedIds: n, chatId: r, meta: a, prevIds: s });
    }
    async function R(e) {
      var t = e.chatId,
        n = e.meta,
        r = e.participantIds;
      if (!o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled())
        return [];
      var a = await D(r);
      return [
        T({ chatId: t, meta: n, types: a }),
        a.thirdPartyAgent != null ? h(t, a.thirdPartyAgent, n) : null,
      ].filter(Boolean);
    }
    async function L(t) {
      if (
        !(
          !t.isGroup() ||
          !o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled()
        )
      )
        try {
          var n,
            a = await Promise.all([
              o("WAWebGroupsParticipantsApi").getParticipants(t),
              o("WAWebSchemaChat").getChatTable().get(t.toString()),
            ]),
            i = a[0],
            l = a[1];
          if (
            !o(
              "WAWebGroupsParticipantsApi",
            ).checkMyMembershipForParticipantRecord(i) ||
            (l == null ? void 0 : l.isReadOnly) === !0
          )
            return;
          var s = (
              (n = i == null ? void 0 : i.participants) != null ? n : []
            ).map(function (e) {
              return o("WAWebWidFactory").createWid(e);
            }),
            u = s.map(function (e) {
              return { id: e, isAdmin: !1, isSuperAdmin: !1 };
            }),
            c = await R({ chatId: t, participantIds: s }),
            d = [].concat(
              c,
              y({ meta: { author: null, chatId: t }, participants: u }),
            );
          await Promise.all(
            d.map(function (e) {
              return o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg({
                chatId: t,
                newMsg: e,
                handleSingleMsgOrigin: "botGroup",
              });
            }),
          );
        } catch (t) {
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[groupAgentPrivacyNotice] insert after clear chat failed",
                ])),
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("group-agent-privacy-notice-clear-chat-error");
        }
    }
    async function E(e) {
      var t = e.currentParticipantIds,
        n = e.groupWid,
        r = e.prevParticipantIds;
      if (
        !o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled() ||
        r == null
      )
        return !1;
      var a = new Set(r),
        i = t.filter(function (e) {
          return !a.has(e.toString());
        });
      if (i.length === 0) return !1;
      var l = await k({
        addedIds: i,
        chatId: n,
        prevIds: r.map(function (e) {
          return o("WAWebWidFactory").createWid(e);
        }),
      });
      return (
        await Promise.all(
          l.map(function (e) {
            return o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg({
              chatId: n,
              newMsg: e,
              handleSingleMsgOrigin: "botGroup",
            });
          }),
        ),
        l.length > 0
      );
    }
    async function k(e) {
      var t = e.addedIds,
        n = e.chatId,
        r = e.meta,
        a = e.prevIds,
        i = await Promise.all([D(t), D(a)]),
        l = i[0],
        s = i[1],
        u =
          t.some(function (e) {
            return o("WAWebUserUtils").isMeAccount(e);
          }) &&
          !a.some(function (e) {
            return o("WAWebUserUtils").isMeAccount(e);
          }),
        c = I({ addedTypes: l, addsMe: u, prevTypes: s }),
        d =
          l.thirdPartyAgent != null && s.thirdPartyAgent == null
            ? l.thirdPartyAgent
            : null,
        m = d != null ? d : u ? s.thirdPartyAgent : null;
      return [
        T({ chatId: n, meta: r, types: c }),
        m != null ? h(n, m, r) : null,
      ].filter(Boolean);
    }
    function I(e) {
      var t = e.addedTypes,
        n = e.addsMe,
        r = e.prevTypes;
      return n
        ? {
            hasAgentWithoutProfile:
              t.hasAgentWithoutProfile || r.hasAgentWithoutProfile,
            hasMuse: t.hasMuse || r.hasMuse,
            thirdPartyAgent: null,
          }
        : r.hasMuse
          ? _
          : t;
    }
    function T(e) {
      var t = e.chatId,
        n = e.meta,
        r = e.types;
      return r.hasMuse ? f(t, n) : r.hasAgentWithoutProfile ? g(t, n) : null;
    }
    async function D(e) {
      var t = e.filter(function (e) {
        return o("WAWebBotUtils").isWidStandardGroupAgentFbidWid(e);
      });
      if (t.length === 0) return _;
      try {
        var n = await o("WAWebSchemaBotProfile")
            .getBotProfileTable()
            .bulkGet(
              t.map(function (e) {
                return e.toString();
              }),
            ),
          a = !1,
          i = !1,
          l = null;
        return (
          n.forEach(function (e, n) {
            var r = o("WAWebBotProduct").botProductFromServerValue(
              e == null ? void 0 : e.product,
            );
            (e == null ? void 0 : e.product) == null || e.product === ""
              ? (a = !0)
              : o("WAWebBotProduct").isMuseAgentProduct(t[n], r)
                ? (i = !0)
                : r === o("WAWebBotProduct").BotProduct.THIRD_PARTY &&
                  l == null &&
                  (l = t[n]);
          }),
          { hasAgentWithoutProfile: a, hasMuse: i, thirdPartyAgent: l }
        );
      } catch (e) {
        return (
          o("WALogger")
            .WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[groupAgentPrivacyNotice] bot profile read failed",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("group-agent-privacy-notice-profile-read-failed"),
          babelHelpers.extends({}, _, { hasAgentWithoutProfile: !0 })
        );
      }
    }
    function x(e, t, n) {
      var a = t == null ? void 0 : t.externalId;
      if (t == null || a == null) return e;
      var i = t.chatId,
        l = t.ts;
      return babelHelpers.extends({}, e, {
        id: new (r("WAWebMsgKey"))({
          fromMe: e.id.fromMe,
          remote: i,
          id:
            "" +
            a +
            o("WAWebGroupAgentRemovalSystemMsgs").toSystemMsgIdPart(n) +
            (l != null ? l : ""),
        }),
        t: l != null ? l : e.t,
      });
    }
    ((l.genMetaAiGroupNoticeMsgs = y),
      (l.genMetaAiGroupNoticeMsgsForAdd = C),
      (l.orderGroupAgentNoticesAndRows = b),
      (l.genGroupAgentNoticeMsgsForCreate = v),
      (l.genGroupAgentPrivacyNoticeMsgsForAdd = S),
      (l.genGroupAgentPrivacyNoticeMsgsForParticipants = R),
      (l.insertGroupAgentPrivacyNoticeAfterClearIfRequired = L),
      (l.insertGroupAgentPrivacyNoticeForMetadataIfRequired = E));
  },
  98,
);
