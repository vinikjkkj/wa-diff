__d(
  "WAWebQbmIncomingMessageLogger",
  [
    "Promise",
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
      d,
      m =
        ((e = {}),
        (e[(d = o("WAWebWamEnumQbmFlag")).QBM_FLAG.OTHER] = "OTHER"),
        (e[d.QBM_FLAG.TRANSACTIONAL] = "TRANSACTIONAL"),
        (e[d.QBM_FLAG.PROMOTIONAL] = "NON_TRANSACTIONAL"),
        (e[d.QBM_FLAG.OTP] = "OTP"),
        (e[d.QBM_FLAG.MARKETING_MESSAGE_SMB] = "MARKETING_MESSAGE_SMB"),
        e);
    function p(e) {
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
    function _(e, t) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var a = y(e, t);
          if (a.length !== 0) {
            var i = r("compactMap")(a, function (e) {
                var t,
                  n = e.msg;
                return (t = n.from) != null ? t : null;
              }),
              l = yield (c || (c = n("Promise"))).all([
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
              u = l[0],
              d = l[1],
              m = new Map(
                i.map(function (e, t) {
                  return [e.toString(), d[t]];
                }),
              ),
              p = a.map(function (e, t) {
                var n = e.msg;
                return v(
                  u[t],
                  n.from == null ? null : m.get(n.from.toString()),
                );
              }),
              _ = yield c.all([
                o("WAWebP2PPillsThreadOriginStore").getPillQbmFieldsForThreads(
                  a.map(function (e, t) {
                    var n = e.chat;
                    return p[t] != null
                      ? n == null
                        ? void 0
                        : n.accountLid
                      : null;
                  }),
                ),
                c.all(
                  a.map(function (e, t) {
                    var n = e.chat,
                      r = e.msg;
                    return p[t] != null ? g(r, n) : null;
                  }),
                ),
              ]),
              f = _[0],
              h = _[1];
            (o("WAWebABProps").getABPropConfigValue(
              "inapp_signup_m1_logging_enabled",
            ) &&
              (yield o(
                "WAWebInAppSignupInfoStore",
              ).ensureInAppSignupInfoHydrated()),
              a.forEach(function (e, t) {
                var n = e.chat,
                  r = e.msg;
                b(r, n, u[t], p[t], f[t], h[t]);
              }));
          }
        })),
        f.apply(this, arguments)
      );
    }
    function g(e, t) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          try {
            var a = yield (c || (c = n("Promise"))).all([
                o("WAWebChatThreadLogging").getMessageIDHMAC(e.id.toString()),
                t != null
                  ? o("WAWebChatThreadLogging").getChatThreadIDHMAC(t.id)
                  : null,
              ]),
              i = a[0],
              l = a[1];
            return {
              messageIdHmac: i != null ? i : void 0,
              threadIdHmac: l != null ? l : void 0,
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
        })),
        h.apply(this, arguments)
      );
    }
    function y(e, t) {
      var n = e.map(function (e, n) {
          return { msg: e, chat: t[n] };
        }),
        o = n.filter(function (e) {
          var t = e.msg;
          return C(t);
        });
      return o.length === n.length || !r("gkx")("21649") ? n : o;
    }
    function C(e) {
      var t = e.from;
      return (
        !o("WAWebMsgGetters").getIsSentByMe(e) &&
        t != null &&
        !t.isGroup() &&
        !t.isStatus()
      );
    }
    function b(e, t, n, r, a, i) {
      var l, s;
      if (!(!C(e) || r == null)) {
        var u = r.contactType,
          c = r.isBizIntent,
          d = o("WAWebQBMLoggerBuilder").getQbmMessageTypeStrForLoggingFromData(
            e,
          );
        if (o("WAWebQBMLoggerBuilder").isQbmMessageTypeLoggingEnabled(d)) {
          var _ =
              (t == null ? void 0 : t.archive) === !0
                ? o("WAWebWamEnumChatsFolderType").CHATS_FOLDER_TYPE.ARCHIVED
                : o("WAWebWamEnumChatsFolderType").CHATS_FOLDER_TYPE.INBOX,
            f = p(e);
          new (o("WAWebQbmIncomingMessageWamEvent").QbmIncomingMessageWamEvent)(
            babelHelpers.extends(
              {
                contactType: u,
                chatsFolderType: _,
                isMuted:
                  (t == null ? void 0 : t.muteExpiration) != null &&
                  t.muteExpiration > 0,
                qbmFlag: f,
                qbmFlagStr: m[f],
                hsmTagStr:
                  (l = o("WAWebMsgGetters").getHsmTag(e)) != null ? l : "",
                messageTypeStr: d,
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
    function v(e, t) {
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
    l.logQbmIncomingMessages = _;
  },
  98,
);
