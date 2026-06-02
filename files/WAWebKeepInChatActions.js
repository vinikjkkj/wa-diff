__d(
  "WAWebKeepInChatActions",
  [
    "$InternalEnum",
    "WACustomError",
    "WALogger",
    "WAWebChatGetters",
    "WAWebCmd",
    "WAWebEphemeralKeepInChatWamUtils",
    "WAWebFrontendMsgGetters",
    "WAWebKeepInChatMsgAction",
    "WAWebKeepInChatMsgUtils",
    "WAWebKeepInChatWarningCannotKeepSenderSuperpower",
    "WAWebKeepInChatWarningKeepExpiredModal",
    "WAWebKeepInChatWarningKeepOfflineModal",
    "WAWebKeepInChatWarningKicExitedModal",
    "WAWebKeepInChatWarningUnkeepExpiredModal",
    "WAWebKeepInChatWarningUnkeepLimitExpiredModal",
    "WAWebKeepInChatWarningUnkeepOwnMsgModal",
    "WAWebKicNux.react",
    "WAWebModalManager",
    "WAWebMsgGetters",
    "WAWebMsgModelPropUtils",
    "WAWebNetworkStatus",
    "WAWebProtobufsE2E.pb",
    "WAWebWamEnumKicErrorCodeType",
    "WAWebWamEnumTriggerType",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m = d || (d = o("react")),
      p = n("$InternalEnum")({
        EXPIRED: "msg_is_expired",
        CANCELLED: "user_cancelled_operation",
        EMPTY: "no_applicable_messages",
        EXITED_SENDER: "exited_sender",
        EXITED_ME_USER: "exited_me_user",
        SENDER_SUPERPOWER: "sender_superpower",
      }),
      _ = (function (e) {
        function t(t) {
          var n;
          return (
            (n = e.call(this, t) || this),
            (n.name = "KeepProcessError"),
            (n.reason = t),
            n
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(o("WACustomError").CustomError);
    function f(e, t, n) {
      return y([e], t, n);
    }
    function g(e, t, n) {
      return b([e], t, n);
    }
    async function h(t, n, a) {
      var i =
          a === !0
            ? function (e) {
                return o("WAWebModalManager").ModalManager.openSupportModal(e);
              }
            : function (e) {
                return o("WAWebModalManager").ModalManager.open(e);
              },
        l = t.find(function (e) {
          return (
            o("WAWebChatGetters").getIsGroup(
              o("WAWebFrontendMsgGetters").getChat(e),
            ) && !o("WAWebMsgModelPropUtils").iAmGroupParticipant(e)
          );
        });
      if (l != null)
        return (
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[KIC] User exited group before keeping message",
                ])),
            )
            .sendLogs("user-exited-keep"),
          Promise.reject(new _(p.EXITED_ME_USER))
        );
      var s = await v(t);
      if (s != null)
        return (
          i(
            m.jsx(
              o("WAWebKeepInChatWarningKicExitedModal")
                .WarningKICSenderExitedModal,
              { action: "keep", message: s },
            ),
          ),
          Promise.reject(new _(p.EXITED_SENDER))
        );
      var u = t.find(function (e) {
        return o("WAWebKeepInChatMsgUtils").isExpired(e);
      });
      if (u)
        return (
          i(
            m.jsx(r("WAWebKeepInChatWarningKeepExpiredModal"), {
              expiredMessage: u,
            }),
          ),
          Promise.reject(new _(p.EXPIRED))
        );
      var c = t.map(function (e) {
          return o("WAWebKeepInChatMsgUtils").keepIsLockedForMeSenderSuperpower(
            e,
          );
        }),
        d = c.some(function (e) {
          return e;
        });
      if (d) {
        var f = c.findIndex(function (e) {
          return e;
        });
        return (
          i(
            m.jsx(r("WAWebKeepInChatWarningCannotKeepSenderSuperpower"), {
              message: t[f],
            }),
          ),
          Promise.reject(new _(p.SENDER_SUPERPOWER))
        );
      }
      await Promise.all(
        t.map(function (e) {
          return o("WAWebKeepInChatMsgAction").keepMessage(e, n);
        }),
      );
    }
    async function y(e, t, n) {
      var a = o("WAWebFrontendMsgGetters").getChat(e[0]),
        i =
          n === !0
            ? function (e) {
                return o("WAWebModalManager").ModalManager.openSupportModal(e);
              }
            : function (e) {
                return o("WAWebModalManager").ModalManager.open(e);
              };
      if (
        (o("WAWebKicNux.react").shouldShowKicNux(a) &&
          (await o("WAWebKicNux.react").openKicNuxAndWaitForClose(
            a,
            o("WAWebWamEnumTriggerType").TRIGGER_TYPE.KEEP_MESSAGE_FIRST_TIME,
          )),
        !r("WAWebNetworkStatus").online)
      )
        return (
          S(e[0], o("WAWebProtobufsE2E.pb").KeepType.KEEP_FOR_ALL),
          i(
            m.jsx(
              o("WAWebKeepInChatWarningKeepOfflineModal")
                .WarningKeepOfflineModal,
              {},
            ),
          )
        );
      var l = e.filter(function (e) {
        return (
          !o("WAWebMsgGetters").getIsKept(e) &&
          o("WAWebKeepInChatMsgUtils").canShowKeepOption(e)
        );
      });
      if (!l.length) throw new _(p.EMPTY);
      await h(l, t, n);
    }
    async function C(e, t, n) {
      await Promise.all(
        e.map(function (e) {
          return o("WAWebKeepInChatMsgAction").undoKeepMessage(e, t, n);
        }),
      );
    }
    async function b(e, t, n) {
      var a = o("WAWebFrontendMsgGetters").getChat(e[0]),
        i =
          n === !0
            ? function (e) {
                return o("WAWebModalManager").ModalManager.openSupportModal(e);
              }
            : function (e) {
                return o("WAWebModalManager").ModalManager.open(e);
              };
      if (
        (o("WAWebKicNux.react").shouldShowKicNux(a) &&
          (await o("WAWebKicNux.react").openKicNuxAndWaitForClose(
            a,
            o("WAWebWamEnumTriggerType").TRIGGER_TYPE.KEEP_MESSAGE_FIRST_TIME,
          )),
        !r("WAWebNetworkStatus").online)
      )
        return (
          S(e[0], o("WAWebProtobufsE2E.pb").KeepType.UNDO_KEEP_FOR_ALL),
          i(
            m.jsx(
              o("WAWebKeepInChatWarningKeepOfflineModal")
                .WarningKeepOfflineModal,
              {},
            ),
          )
        );
      var l = e.find(function (e) {
          return o("WAWebKeepInChatMsgUtils").isExpired(e);
        }),
        d = e.some(function (e) {
          return o("WAWebMsgGetters").getIsSentByMe(e);
        }),
        f = e.some(function (e) {
          return o("WAWebKeepInChatMsgUtils").isPastUnkeepExpirationLimit(e);
        }),
        g = e.find(function (e) {
          return (
            o("WAWebChatGetters").getIsGroup(
              o("WAWebFrontendMsgGetters").getChat(e),
            ) && !o("WAWebMsgModelPropUtils").iAmGroupParticipant(e)
          );
        }),
        h = await v(e);
      return new Promise(function (n, a) {
        var y = function () {
            n(C(e, { deleteExpired: !0 }, t));
          },
          b = function () {
            var t = e[0];
            if (!t) {
              o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "Attempting to DFM an empty array of messages",
                    ])),
                )
                .sendLogs("unkeep-DFM-empty-array");
              return;
            }
            var n = e.every(function (e) {
              return (
                o("WAWebFrontendMsgGetters").getChat(e) ===
                o("WAWebFrontendMsgGetters").getChat(t)
              );
            });
            if (!n) {
              o("WALogger")
                .ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "Attempting to DFM an array of messages with mismatched chats",
                    ])),
                )
                .sendLogs("unkeep-DFM-chat-mismatch");
              return;
            }
            o("WAWebCmd").Cmd.sendDeleteMsgs(
              o("WAWebFrontendMsgGetters").getChat(t),
              { type: "message", list: e },
              !1,
              null,
              null,
            );
          };
        if (g != null) {
          (o("WALogger")
            .ERROR(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[KIC] User exited group before unkeeping message",
                ])),
            )
            .sendLogs("user-exited-unkeep"),
            a(new _(p.EXITED_ME_USER)));
          return;
        } else if (h != null)
          i(
            m.jsx(
              o("WAWebKeepInChatWarningKicExitedModal")
                .WarningKICSenderExitedModal,
              {
                action: "unkeep",
                onClose: function () {
                  return a(new _(p.EXITED_SENDER));
                },
                message: h,
              },
            ),
          );
        else if (l)
          i(
            f
              ? m.jsx(r("WAWebKeepInChatWarningUnkeepLimitExpiredModal"), {
                  onDeleteForMe: b,
                  expiredMessage: l,
                })
              : m.jsx(r("WAWebKeepInChatWarningUnkeepExpiredModal"), {
                  onConfirm: y,
                  onCancel: function () {
                    return a(new _(p.CANCELLED));
                  },
                  expiredMessage: l,
                }),
          );
        else if (d)
          i(
            m.jsx(r("WAWebKeepInChatWarningUnkeepOwnMsgModal"), {
              onConfirm: y,
              onCancel: function () {
                return a(new _(p.CANCELLED));
              },
            }),
          );
        else return y();
      });
    }
    async function v(e) {
      var t = await Promise.all(
        e.map(async function (e) {
          if (
            !o("WAWebChatGetters").getIsGroup(
              o("WAWebFrontendMsgGetters").getChat(e),
            )
          )
            return null;
          var t = await o("WAWebKeepInChatMsgUtils").senderIsGroupParticipant(
            e,
          );
          return t ? null : e;
        }),
      );
      return t.find(function (e) {
        return e != null;
      });
    }
    function S(e, t) {
      var n = o("WAWebEphemeralKeepInChatWamUtils").getBaseErrorLog(e, t);
      (n.set({
        kicErrorCode: o("WAWebWamEnumKicErrorCodeType").KIC_ERROR_CODE_TYPE
          .OFFLINE,
      }),
        n.commit());
    }
    ((l.KeepProcessErrorReason = p),
      (l.runKeepInChatUX = f),
      (l.runUndoKeepInChatUX = g),
      (l.runBulkKeepInChatUX = y),
      (l.runBulkUndoKeepInChatUX = b));
  },
  98,
);
