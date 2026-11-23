__d(
  "WAWebQbmIncomingMessageLogger",
  [
    "WALogger",
    "WAWebABProps",
    "WAWebApiVerifiedBusinessName",
    "WAWebChatThreadLogging",
    "WAWebInAppSignupInfoStore",
    "WAWebLidAwareContactsDB",
    "WAWebMsgGetters",
    "WAWebNullFunc",
    "WAWebP2PPillsThreadOriginStore",
    "WAWebQBMLoggerBuilder",
    "WAWebQbmIncomingMessageWamEvent",
    "WAWebUserPrefsNotifications",
    "WAWebWamEnumChatsFolderType",
    "WAWebWamEnumContactType",
    "WAWebWamEnumQbmFlag",
    "compactMap",
    "getErrorSafe",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d =
        ((e = {}),
        (e[(c = o("WAWebWamEnumQbmFlag")).QBM_FLAG.OTHER] = "OTHER"),
        (e[c.QBM_FLAG.TRANSACTIONAL] = "TRANSACTIONAL"),
        (e[c.QBM_FLAG.PROMOTIONAL] = "NON_TRANSACTIONAL"),
        (e[c.QBM_FLAG.OTP] = "OTP"),
        (e[c.QBM_FLAG.MARKETING_MESSAGE_SMB] = "MARKETING_MESSAGE_SMB"),
        e);
    function m(e) {
      var t = o("WAWebMsgGetters").getBizSource(e);
      return o("WAWebMsgGetters").isBizSourceFromMarketingMessage(t)
        ? o("WAWebWamEnumQbmFlag").QBM_FLAG.MARKETING_MESSAGE_SMB
        : (function (e) {
            return e === "UTILITY"
              ? o("WAWebWamEnumQbmFlag").QBM_FLAG.TRANSACTIONAL
              : e === "MARKETING"
                ? o("WAWebWamEnumQbmFlag").QBM_FLAG.PROMOTIONAL
                : e === "AUTHENTICATION"
                  ? o("WAWebWamEnumQbmFlag").QBM_FLAG.OTP
                  : o("WAWebWamEnumQbmFlag").QBM_FLAG.OTHER;
          })(o("WAWebMsgGetters").getHsmTag(e));
    }
    async function p(e, t) {
      var n = f(e, t);
      if (n.length !== 0) {
        var a = r("compactMap")(n, function (e) {
            var t,
              n = e.msg;
            return (t = n.from) != null ? t : null;
          }),
          i = await Promise.all([
            r("WAWebLidAwareContactsDB").bulkGet(
              n.map(function (e) {
                var t,
                  n,
                  r = e.msg;
                return (t = (n = r.from) == null ? void 0 : n.toJid()) != null
                  ? t
                  : "";
              }),
            ),
            o("WAWebApiVerifiedBusinessName")
              .bulkGetVerifiedBusinessNameRecordsLidAware(a)
              .catch(function (e) {
                return (
                  o("WALogger")
                    .WARN(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "[WAM:QBM_INCOMING_MESSAGE] verified business name lookup failed",
                        ])),
                    )
                    .catching(r("getErrorSafe")(e))
                    .sendLogs(
                      "qbm-incoming-verified-business-name-lookup-failed",
                    ),
                  a.map(o("WAWebNullFunc").returnNull)
                );
              }),
          ]),
          l = i[0],
          u = i[1],
          c = new Map(
            a.map(function (e, t) {
              return [e.toString(), u[t]];
            }),
          ),
          d = n.map(function (e, t) {
            var n = e.msg;
            return y(l[t], n.from == null ? null : c.get(n.from.toString()));
          }),
          m = await Promise.all([
            o("WAWebP2PPillsThreadOriginStore").getPillQbmFieldsForThreads(
              n.map(function (e, t) {
                var n = e.chat;
                return d[t] != null
                  ? n == null
                    ? void 0
                    : n.accountLid
                  : null;
              }),
            ),
            Promise.all(
              n.map(function (e, t) {
                var n = e.chat,
                  r = e.msg;
                return d[t] != null ? _(r, n) : null;
              }),
            ),
          ]),
          p = m[0],
          g = m[1];
        (o("WAWebABProps").getABPropConfigValue(
          "inapp_signup_m1_logging_enabled",
        ) &&
          (await o(
            "WAWebInAppSignupInfoStore",
          ).ensureInAppSignupInfoHydrated()),
          n.forEach(function (e, t) {
            var n = e.chat,
              r = e.msg;
            h(r, n, l[t], d[t], p[t], g[t]);
          }));
      }
    }
    async function _(e, t) {
      try {
        var n = await Promise.all([
            o("WAWebChatThreadLogging").getMessageIDHMAC(e.id.toString()),
            t != null
              ? o("WAWebChatThreadLogging").getChatThreadIDHMAC(t.id)
              : null,
          ]),
          a = n[0],
          i = n[1];
        return {
          messageIdHmac: a != null ? a : void 0,
          threadIdHmac: i != null ? i : void 0,
        };
      } catch (e) {
        return (
          o("WALogger")
            .WARN(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[WAM:QBM_INCOMING_MESSAGE] id hmac failed",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("qbm-incoming-id-hmac-failed"),
          {}
        );
      }
    }
    function f(e, t) {
      var n = e.map(function (e, n) {
          return { msg: e, chat: t[n] };
        }),
        o = n.filter(function (e) {
          var t = e.msg;
          return g(t);
        });
      return o.length === n.length || !r("gkx")("21649") ? n : o;
    }
    function g(e) {
      var t = e.from;
      return (
        !o("WAWebMsgGetters").getIsSentByMe(e) &&
        t != null &&
        !t.isGroup() &&
        !t.isStatus()
      );
    }
    function h(e, t, n, r, a, i) {
      var l, s;
      if (!(!g(e) || r == null)) {
        var u = r.contactType,
          c = r.isBizIntent,
          p = o("WAWebQBMLoggerBuilder").getQbmMessageTypeStrForLoggingFromData(
            e,
          );
        if (o("WAWebQBMLoggerBuilder").isQbmMessageTypeLoggingEnabled(p)) {
          var _ =
              (t == null ? void 0 : t.archive) === !0
                ? o("WAWebWamEnumChatsFolderType").CHATS_FOLDER_TYPE.ARCHIVED
                : o("WAWebWamEnumChatsFolderType").CHATS_FOLDER_TYPE.INBOX,
            f = m(e);
          new (o("WAWebQbmIncomingMessageWamEvent").QbmIncomingMessageWamEvent)(
            babelHelpers.extends(
              {
                contactType: u,
                chatsFolderType: _,
                isMuted:
                  (t == null ? void 0 : t.muteExpiration) != null &&
                  t.muteExpiration > 0,
                qbmFlag: f,
                qbmFlagStr: d[f],
                hsmTagStr:
                  (l = o("WAWebMsgGetters").getHsmTag(e)) != null ? l : "",
                messageTypeStr: p,
                notificationEnabled: o(
                  "WAWebUserPrefsNotifications",
                ).getGlobalNotifications(),
                isBizIntent: c,
                isInsubContact:
                  (n == null ? void 0 : n.isAddressBookContact) === 1,
              },
              o("WAWebQBMLoggerBuilder").getIasQbmFields(
                (s = t == null ? void 0 : t.id) != null ? s : null,
              ),
              a,
              i,
            ),
          ).commit();
        }
      }
    }
    function y(e, t) {
      return t != null
        ? {
            contactType: t.isApi
              ? o("WAWebWamEnumContactType").CONTACT_TYPE.ENTERPRISE
              : o("WAWebWamEnumContactType").CONTACT_TYPE.SMB,
            isBizIntent: !0,
          }
        : e == null || (!e.isBusiness && !e.isEnterprise)
          ? null
          : {
              contactType: e.isEnterprise
                ? o("WAWebWamEnumContactType").CONTACT_TYPE.ENTERPRISE
                : o("WAWebWamEnumContactType").CONTACT_TYPE.SMB,
              isBizIntent: e.isBusiness,
            };
    }
    l.logQbmIncomingMessages = p;
  },
  98,
);
