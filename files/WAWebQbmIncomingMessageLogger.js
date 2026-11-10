__d(
  "WAWebQbmIncomingMessageLogger",
  [
    "Promise",
    "WALogger",
    "WAWebABProps",
    "WAWebApiVerifiedBusinessName",
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
    "asyncToGeneratorRuntime",
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
    function p(e, t) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var a = f(e, t);
          if (a.length !== 0) {
            var i = r("compactMap")(a, function (e) {
                var t,
                  n = e.msg;
                return (t = n.from) != null ? t : null;
              }),
              l = yield (u || (u = n("Promise"))).all([
                r("WAWebLidAwareContactsDB").bulkGet(
                  a.map(function (e) {
                    var t,
                      n,
                      r = e.msg;
                    return (t = (n = r.from) == null ? void 0 : n.toJid()) !=
                      null
                      ? t
                      : "";
                  }),
                ),
                o("WAWebApiVerifiedBusinessName")
                  .bulkGetVerifiedBusinessNameRecordsLidAware(i)
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
                      i.map(o("WAWebNullFunc").returnNull)
                    );
                  }),
              ]),
              c = l[0],
              d = l[1],
              m = new Map(
                i.map(function (e, t) {
                  return [e.toString(), d[t]];
                }),
              ),
              p = a.map(function (e, t) {
                var n = e.msg;
                return y(
                  c[t],
                  n.from == null ? null : m.get(n.from.toString()),
                );
              }),
              _ = yield o(
                "WAWebP2PPillsThreadOriginStore",
              ).getPillQbmFieldsForThreads(
                a.map(function (e, t) {
                  var n = e.chat;
                  return p[t] != null
                    ? n == null
                      ? void 0
                      : n.accountLid
                    : null;
                }),
              );
            (o("WAWebABProps").getABPropConfigValue(
              "inapp_signup_m1_logging_enabled",
            ) &&
              (yield o(
                "WAWebInAppSignupInfoStore",
              ).ensureInAppSignupInfoHydrated()),
              a.forEach(function (e, t) {
                var n = e.chat,
                  r = e.msg;
                h(r, n, c[t], p[t], _[t]);
              }));
          }
        })),
        _.apply(this, arguments)
      );
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
    function h(e, t, n, r, a) {
      var i, l;
      if (!(!g(e) || r == null)) {
        var s = r.contactType,
          u = r.isBizIntent,
          c = o("WAWebQBMLoggerBuilder").getQbmMessageTypeStrForLoggingFromData(
            e,
          );
        if (c != null) {
          var p =
              (t == null ? void 0 : t.archive) === !0
                ? o("WAWebWamEnumChatsFolderType").CHATS_FOLDER_TYPE.ARCHIVED
                : o("WAWebWamEnumChatsFolderType").CHATS_FOLDER_TYPE.INBOX,
            _ = m(e);
          new (o("WAWebQbmIncomingMessageWamEvent").QbmIncomingMessageWamEvent)(
            babelHelpers.extends(
              {
                contactType: s,
                chatsFolderType: p,
                isMuted:
                  (t == null ? void 0 : t.muteExpiration) != null &&
                  t.muteExpiration > 0,
                qbmFlag: _,
                qbmFlagStr: d[_],
                hsmTagStr:
                  (i = o("WAWebMsgGetters").getHsmTag(e)) != null ? i : "",
                messageTypeStr: c,
                notificationEnabled: o(
                  "WAWebUserPrefsNotifications",
                ).getGlobalNotifications(),
                isBizIntent: u,
                isInsubContact:
                  (n == null ? void 0 : n.isAddressBookContact) === 1,
              },
              o("WAWebQBMLoggerBuilder").getIasQbmFields(
                (l = t == null ? void 0 : t.id) != null ? l : null,
              ),
              a,
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
