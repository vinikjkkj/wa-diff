__d(
  "WAWebKeepInChatActions",
  [
    "$InternalEnum",
    "Promise",
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
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p = m || (m = o("react")),
      _ = n("$InternalEnum")({
        EXPIRED: "msg_is_expired",
        CANCELLED: "user_cancelled_operation",
        EMPTY: "no_applicable_messages",
        EXITED_SENDER: "exited_sender",
        EXITED_ME_USER: "exited_me_user",
        SENDER_SUPERPOWER: "sender_superpower",
      }),
      f = (function (e) {
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
    function g(e, t, n) {
      return b([e], t, n);
    }
    function h(e, t, n) {
      return L([e], t, n);
    }
    function y(e, t, n) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a, i) {
          var l =
              i === !0
                ? function (e) {
                    return o("WAWebModalManager").ModalManager.openSupportModal(
                      e,
                    );
                  }
                : function (e) {
                    return o("WAWebModalManager").ModalManager.open(e);
                  },
            s = t.find(function (e) {
              return (
                o("WAWebChatGetters").getIsGroup(
                  o("WAWebFrontendMsgGetters").getChat(e),
                ) && !o("WAWebMsgModelPropUtils").iAmGroupParticipant(e)
              );
            });
          if (s != null)
            return (
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[KIC] User exited group before keeping message",
                    ])),
                )
                .sendLogs("user-exited-keep"),
              (d || (d = n("Promise"))).reject(new f(_.EXITED_ME_USER))
            );
          var u = yield k(t);
          if (u != null)
            return (
              l(
                p.jsx(
                  o("WAWebKeepInChatWarningKicExitedModal")
                    .WarningKICSenderExitedModal,
                  { action: "keep", message: u },
                ),
              ),
              (d || (d = n("Promise"))).reject(new f(_.EXITED_SENDER))
            );
          var c = t.find(function (e) {
            return o("WAWebKeepInChatMsgUtils").isExpired(e);
          });
          if (c)
            return (
              l(
                p.jsx(r("WAWebKeepInChatWarningKeepExpiredModal"), {
                  expiredMessage: c,
                }),
              ),
              (d || (d = n("Promise"))).reject(new f(_.EXPIRED))
            );
          var m = t.map(function (e) {
              return o(
                "WAWebKeepInChatMsgUtils",
              ).keepIsLockedForMeSenderSuperpower(e);
            }),
            g = m.some(function (e) {
              return e;
            });
          if (g) {
            var h = m.findIndex(function (e) {
              return e;
            });
            return (
              l(
                p.jsx(r("WAWebKeepInChatWarningCannotKeepSenderSuperpower"), {
                  message: t[h],
                }),
              ),
              (d || (d = n("Promise"))).reject(new f(_.SENDER_SUPERPOWER))
            );
          }
          yield (d || (d = n("Promise"))).all(
            t.map(function (e) {
              return o("WAWebKeepInChatMsgAction").keepMessage(e, a);
            }),
          );
        })),
        C.apply(this, arguments)
      );
    }
    function b(e, t, n) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var a = o("WAWebFrontendMsgGetters").getChat(e[0]),
            i =
              n === !0
                ? function (e) {
                    return o("WAWebModalManager").ModalManager.openSupportModal(
                      e,
                    );
                  }
                : function (e) {
                    return o("WAWebModalManager").ModalManager.open(e);
                  };
          if (
            (o("WAWebKicNux.react").shouldShowKicNux(a) &&
              (yield o("WAWebKicNux.react").openKicNux(
                a,
                o("WAWebWamEnumTriggerType").TRIGGER_TYPE
                  .KEEP_MESSAGE_FIRST_TIME,
              )),
            !r("WAWebNetworkStatus").online)
          )
            return (
              T(e[0], o("WAWebProtobufsE2E.pb").KeepType.KEEP_FOR_ALL),
              i(
                p.jsx(
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
          if (!l.length) throw new f(_.EMPTY);
          yield y(l, t, n);
        })),
        v.apply(this, arguments)
      );
    }
    function S(e, t, n) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, r) {
          yield (d || (d = n("Promise"))).all(
            e.map(function (e) {
              return o("WAWebKeepInChatMsgAction").undoKeepMessage(e, t, r);
            }),
          );
        })),
        R.apply(this, arguments)
      );
    }
    function L(e, t, n) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, a) {
          var i = o("WAWebFrontendMsgGetters").getChat(e[0]),
            l =
              a === !0
                ? function (e) {
                    return o("WAWebModalManager").ModalManager.openSupportModal(
                      e,
                    );
                  }
                : function (e) {
                    return o("WAWebModalManager").ModalManager.open(e);
                  };
          if (
            (o("WAWebKicNux.react").shouldShowKicNux(i) &&
              (yield o("WAWebKicNux.react").openKicNux(
                i,
                o("WAWebWamEnumTriggerType").TRIGGER_TYPE
                  .KEEP_MESSAGE_FIRST_TIME,
              )),
            !r("WAWebNetworkStatus").online)
          )
            return (
              T(e[0], o("WAWebProtobufsE2E.pb").KeepType.UNDO_KEEP_FOR_ALL),
              l(
                p.jsx(
                  o("WAWebKeepInChatWarningKeepOfflineModal")
                    .WarningKeepOfflineModal,
                  {},
                ),
              )
            );
          var m = e.find(function (e) {
              return o("WAWebKeepInChatMsgUtils").isExpired(e);
            }),
            g = e.some(function (e) {
              return o("WAWebMsgGetters").getIsSentByMe(e);
            }),
            h = e.some(function (e) {
              return o("WAWebKeepInChatMsgUtils").isPastUnkeepExpirationLimit(
                e,
              );
            }),
            y = e.find(function (e) {
              return (
                o("WAWebChatGetters").getIsGroup(
                  o("WAWebFrontendMsgGetters").getChat(e),
                ) && !o("WAWebMsgModelPropUtils").iAmGroupParticipant(e)
              );
            }),
            C = yield k(e);
          return new (d || (d = n("Promise")))(function (n, a) {
            var i = function () {
                n(S(e, { deleteExpired: !0 }, t));
              },
              d = function () {
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
            if (y != null) {
              (o("WALogger")
                .ERROR(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[KIC] User exited group before unkeeping message",
                    ])),
                )
                .sendLogs("user-exited-unkeep"),
                a(new f(_.EXITED_ME_USER)));
              return;
            } else if (C != null)
              l(
                p.jsx(
                  o("WAWebKeepInChatWarningKicExitedModal")
                    .WarningKICSenderExitedModal,
                  {
                    action: "unkeep",
                    onClose: function () {
                      return a(new f(_.EXITED_SENDER));
                    },
                    message: C,
                  },
                ),
              );
            else if (m)
              l(
                h
                  ? p.jsx(r("WAWebKeepInChatWarningUnkeepLimitExpiredModal"), {
                      onDeleteForMe: d,
                      expiredMessage: m,
                    })
                  : p.jsx(r("WAWebKeepInChatWarningUnkeepExpiredModal"), {
                      onConfirm: i,
                      onCancel: function () {
                        return a(new f(_.CANCELLED));
                      },
                      expiredMessage: m,
                    }),
              );
            else if (g)
              l(
                p.jsx(r("WAWebKeepInChatWarningUnkeepOwnMsgModal"), {
                  onConfirm: i,
                  onCancel: function () {
                    return a(new f(_.CANCELLED));
                  },
                }),
              );
            else return i();
          });
        })),
        E.apply(this, arguments)
      );
    }
    function k(e) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield (d || (d = n("Promise"))).all(
            e.map(
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    if (
                      !o("WAWebChatGetters").getIsGroup(
                        o("WAWebFrontendMsgGetters").getChat(e),
                      )
                    )
                      return null;
                    var t = yield o(
                      "WAWebKeepInChatMsgUtils",
                    ).senderIsGroupParticipant(e);
                    return t ? null : e;
                  },
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            ),
          );
          return t.find(function (e) {
            return e != null;
          });
        })),
        I.apply(this, arguments)
      );
    }
    function T(e, t) {
      var n = o("WAWebEphemeralKeepInChatWamUtils").getBaseErrorLog(e, t);
      (n.set({
        kicErrorCode: o("WAWebWamEnumKicErrorCodeType").KIC_ERROR_CODE_TYPE
          .OFFLINE,
      }),
        n.commit());
    }
    ((l.KeepProcessErrorReason = _),
      (l.KeepProcessError = f),
      (l.runKeepInChatUX = g),
      (l.runUndoKeepInChatUX = h),
      (l.runBulkKeepInChatUX = b),
      (l.runBulkUndoKeepInChatUX = L));
  },
  98,
);
