__d(
  "WAWebGroupAgentPrivacyNotice",
  [
    "Promise",
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
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = "privacynotice",
      d = "genericprivacynotice",
      m = "thirdpartyprivacynotice",
      p = "metaaiopennotice",
      _ = "metaaiteenotice",
      f = { hasAgentWithoutProfile: !1, hasMuse: !1, thirdPartyAgent: null };
    function g(e, t) {
      return B(
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
        c,
      );
    }
    function h(e, t) {
      return B(
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
        d,
      );
    }
    function y(e, t, n) {
      return B(
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
        m,
      );
    }
    function C(e) {
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
                suffix: p,
              }
            : null,
          o("WAWebBotGroupGatingUtils").isTEEGroupBotParticipantAddEnabled() &&
          i
            ? {
                msg: o(
                  "WAWebGroupSystemMsg",
                ).genGroupTransitionToTeeBotGroupNotificationMsg(t.chatId),
                suffix: _,
              }
            : null,
        ].filter(Boolean);
      return l.map(function (e) {
        var n = e.msg,
          r = e.suffix;
        return o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled()
          ? B(n, t, r)
          : n;
      });
    }
    function b(e) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = e.addedParticipants,
            r = e.meta;
          if (
            !o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled() ||
            !n.some(function (e) {
              var t = e.id;
              return o("WAWebUserPrefsMeUser").isMeAccount(t);
            })
          )
            return C({ meta: r, participants: n });
          var a = yield o("WAWebGroupsParticipantsApi").getParticipants(
              r.chatId,
            ),
            i = (
              (t = a == null ? void 0 : a.participants) != null ? t : []
            ).map(function (e) {
              return {
                id: o("WAWebWidFactory").createWid(e),
                isAdmin: !1,
                isSuperAdmin: !1,
              };
            });
          return C({ meta: r, participants: [].concat(n, i) });
        })),
        v.apply(this, arguments)
      );
    }
    function S(e, t) {
      return o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled()
        ? [].concat(e, t)
        : [].concat(t, e);
    }
    function R(e) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.meta,
            n = e.participants;
          if (!o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled())
            return [];
          var r = yield I({
            chatId: t.chatId,
            meta: t,
            participantIds: n.map(function (e) {
              var t = e.id;
              return t;
            }),
          });
          return [].concat(r, C({ meta: t, participants: n }));
        })),
        L.apply(this, arguments)
      );
    }
    function E(e) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = e.addedParticipantIds,
            r = e.chatId,
            a = e.meta;
          if (!o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled())
            return [];
          var i = yield o("WAWebGroupsParticipantsApi").getParticipants(r),
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
          return N({ addedIds: n, chatId: r, meta: a, prevIds: s });
        })),
        k.apply(this, arguments)
      );
    }
    function I(e) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.chatId,
            n = e.meta,
            r = e.participantIds;
          if (!o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled())
            return [];
          var a = yield F(r);
          return [
            A({ chatId: t, meta: n, types: a }),
            a.thirdPartyAgent != null ? y(t, a.thirdPartyAgent, n) : null,
          ].filter(Boolean);
        })),
        T.apply(this, arguments)
      );
    }
    function D(e) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          if (
            !(
              !t.isGroup() ||
              !o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled()
            )
          )
            try {
              var a,
                i = yield (u || (u = n("Promise"))).all([
                  o("WAWebGroupsParticipantsApi").getParticipants(t),
                  o("WAWebSchemaChat").getChatTable().get(t.toString()),
                ]),
                l = i[0],
                s = i[1];
              if (
                !o(
                  "WAWebGroupsParticipantsApi",
                ).checkMyMembershipForParticipantRecord(l) ||
                (s == null ? void 0 : s.isReadOnly) === !0
              )
                return;
              var c = (
                  (a = l == null ? void 0 : l.participants) != null ? a : []
                ).map(function (e) {
                  return o("WAWebWidFactory").createWid(e);
                }),
                d = c.map(function (e) {
                  return { id: e, isAdmin: !1, isSuperAdmin: !1 };
                }),
                m = yield I({ chatId: t, participantIds: c }),
                p = [].concat(
                  m,
                  C({ meta: { author: null, chatId: t }, participants: d }),
                );
              yield u.all(
                p.map(function (e) {
                  return o(
                    "WAWebHandleSingleMsgWorkerCompatible",
                  ).handleSingleMsg({
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
        })),
        x.apply(this, arguments)
      );
    }
    function $(e) {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.currentParticipantIds,
            r = e.groupWid,
            a = e.prevParticipantIds;
          if (
            !o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled() ||
            a == null
          )
            return !1;
          var i = new Set(a),
            l = t.filter(function (e) {
              return !i.has(e.toString());
            });
          if (l.length === 0) return !1;
          var s = yield N({
            addedIds: l,
            chatId: r,
            prevIds: a.map(function (e) {
              return o("WAWebWidFactory").createWid(e);
            }),
          });
          return (
            yield (u || (u = n("Promise"))).all(
              s.map(function (e) {
                return o(
                  "WAWebHandleSingleMsgWorkerCompatible",
                ).handleSingleMsg({
                  chatId: r,
                  newMsg: e,
                  handleSingleMsgOrigin: "botGroup",
                });
              }),
            ),
            s.length > 0
          );
        })),
        P.apply(this, arguments)
      );
    }
    function N(e) {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.addedIds,
            r = e.chatId,
            a = e.meta,
            i = e.prevIds,
            l = yield (u || (u = n("Promise"))).all([F(t), F(i)]),
            s = l[0],
            c = l[1],
            d =
              t.some(function (e) {
                return o("WAWebUserPrefsMeUser").isMeAccount(e);
              }) &&
              !i.some(function (e) {
                return o("WAWebUserPrefsMeUser").isMeAccount(e);
              }),
            m = w({ addedTypes: s, addsMe: d, prevTypes: c }),
            p =
              s.thirdPartyAgent != null && c.thirdPartyAgent == null
                ? s.thirdPartyAgent
                : null,
            _ = p != null ? p : d ? c.thirdPartyAgent : null;
          return [
            A({ chatId: r, meta: a, types: m }),
            _ != null ? y(r, _, a) : null,
          ].filter(Boolean);
        })),
        M.apply(this, arguments)
      );
    }
    function w(e) {
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
          ? f
          : t;
    }
    function A(e) {
      var t = e.chatId,
        n = e.meta,
        r = e.types;
      return r.hasMuse ? g(t, n) : r.hasAgentWithoutProfile ? h(t, n) : null;
    }
    function F(e) {
      return O.apply(this, arguments);
    }
    function O() {
      return (
        (O = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.filter(function (e) {
            return o("WAWebBotUtils").isWidStandardGroupAgentFbidWid(e);
          });
          if (t.length === 0) return f;
          try {
            var n = yield o("WAWebSchemaBotProfile")
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
              babelHelpers.extends({}, f, { hasAgentWithoutProfile: !0 })
            );
          }
        })),
        O.apply(this, arguments)
      );
    }
    function B(e, t, n) {
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
    ((l.genGroupAgentPrivacyNoticeMsg = g),
      (l.genMetaAiGroupNoticeMsgs = C),
      (l.genMetaAiGroupNoticeMsgsForAdd = b),
      (l.orderGroupAgentNoticesAndRows = S),
      (l.genGroupAgentNoticeMsgsForCreate = R),
      (l.genGroupAgentPrivacyNoticeMsgsForAdd = E),
      (l.genGroupAgentPrivacyNoticeMsgsForParticipants = I),
      (l.insertGroupAgentPrivacyNoticeAfterClearIfRequired = D),
      (l.insertGroupAgentPrivacyNoticeForMetadataIfRequired = $));
  },
  98,
);
