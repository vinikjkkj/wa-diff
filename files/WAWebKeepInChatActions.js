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
      d = c || (c = o("react")),
      m = n("$InternalEnum")({
        EXPIRED: "msg_is_expired",
        CANCELLED: "user_cancelled_operation",
        EMPTY: "no_applicable_messages",
        EXITED_SENDER: "exited_sender",
        EXITED_ME_USER: "exited_me_user",
        SENDER_SUPERPOWER: "sender_superpower",
      }),
      p = (function (e) {
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
    function _(e, t, n) {
      return y([e], t, n);
    }
    function f(e, t, n) {
      return S([e], t, n);
    }
    function g(e, t, n) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, a) {
          var i =
              a === !0
                ? function (e) {
                    return o("WAWebModalManager").ModalManager.openSupportModal(
                      e,
                    );
                  }
                : function (e) {
                    return o("WAWebModalManager").ModalManager.open(e);
                  },
            l = e.find(function (e) {
              return (
                o("WAWebChatGetters").getIsGroup(
                  o("WAWebFrontendMsgGetters").getChat(e),
                ) && !o("WAWebMsgModelPropUtils").iAmGroupParticipant(e)
              );
            });
          if (l != null)
            return (
              i(
                d.jsx(
                  o("WAWebKeepInChatWarningKicExitedModal")
                    .WarningKICMeUserExitedModal,
                  { action: "keep", message: l },
                ),
              ),
              (u || (u = n("Promise"))).reject(new p(m.EXITED_ME_USER))
            );
          var s = yield L(e);
          if (s != null)
            return (
              i(
                d.jsx(
                  o("WAWebKeepInChatWarningKicExitedModal")
                    .WarningKICSenderExitedModal,
                  { action: "keep", message: s },
                ),
              ),
              (u || (u = n("Promise"))).reject(new p(m.EXITED_SENDER))
            );
          var c = e.find(function (e) {
            return o("WAWebKeepInChatMsgUtils").isExpired(e);
          });
          if (c)
            return (
              i(
                d.jsx(r("WAWebKeepInChatWarningKeepExpiredModal"), {
                  expiredMessage: c,
                }),
              ),
              (u || (u = n("Promise"))).reject(new p(m.EXPIRED))
            );
          var _ = e.map(function (e) {
              return o(
                "WAWebKeepInChatMsgUtils",
              ).keepIsLockedForMeSenderSuperpower(e);
            }),
            f = _.some(function (e) {
              return e;
            });
          if (f) {
            var g = _.findIndex(function (e) {
              return e;
            });
            return (
              i(
                d.jsx(r("WAWebKeepInChatWarningCannotKeepSenderSuperpower"), {
                  message: e[g],
                }),
              ),
              (u || (u = n("Promise"))).reject(new p(m.SENDER_SUPERPOWER))
            );
          }
          yield (u || (u = n("Promise"))).all(
            e.map(function (e) {
              return o("WAWebKeepInChatMsgAction").keepMessage(e, t);
            }),
          );
        })),
        h.apply(this, arguments)
      );
    }
    function y(e, t, n) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
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
              k(e[0], o("WAWebProtobufsE2E.pb").KeepType.KEEP_FOR_ALL),
              i(
                d.jsx(
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
          if (!l.length) throw new p(m.EMPTY);
          yield g(l, t, n);
        })),
        C.apply(this, arguments)
      );
    }
    function b(e, t, n) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, r) {
          yield (u || (u = n("Promise"))).all(
            e.map(function (e) {
              return o("WAWebKeepInChatMsgAction").undoKeepMessage(e, t, r);
            }),
          );
        })),
        v.apply(this, arguments)
      );
    }
    function S(e, t, n) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a, i) {
          var l = o("WAWebFrontendMsgGetters").getChat(t[0]),
            c =
              i === !0
                ? function (e) {
                    return o("WAWebModalManager").ModalManager.openSupportModal(
                      e,
                    );
                  }
                : function (e) {
                    return o("WAWebModalManager").ModalManager.open(e);
                  };
          if (
            (o("WAWebKicNux.react").shouldShowKicNux(l) &&
              (yield o("WAWebKicNux.react").openKicNux(
                l,
                o("WAWebWamEnumTriggerType").TRIGGER_TYPE
                  .KEEP_MESSAGE_FIRST_TIME,
              )),
            !r("WAWebNetworkStatus").online)
          )
            return (
              k(t[0], o("WAWebProtobufsE2E.pb").KeepType.UNDO_KEEP_FOR_ALL),
              c(
                d.jsx(
                  o("WAWebKeepInChatWarningKeepOfflineModal")
                    .WarningKeepOfflineModal,
                  {},
                ),
              )
            );
          var _ = t.find(function (e) {
              return o("WAWebKeepInChatMsgUtils").isExpired(e);
            }),
            f = t.some(function (e) {
              return o("WAWebMsgGetters").getIsSentByMe(e);
            }),
            g = t.some(function (e) {
              return o("WAWebKeepInChatMsgUtils").isPastUnkeepExpirationLimit(
                e,
              );
            }),
            h = t.find(function (e) {
              return (
                o("WAWebChatGetters").getIsGroup(
                  o("WAWebFrontendMsgGetters").getChat(e),
                ) && !o("WAWebMsgModelPropUtils").iAmGroupParticipant(e)
              );
            }),
            y = yield L(t);
          return new (u || (u = n("Promise")))(function (n, i) {
            var l = function () {
                n(b(t, { deleteExpired: !0 }, a));
              },
              u = function () {
                var n = t[0];
                if (!n) {
                  o("WALogger")
                    .ERROR(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "Attempting to DFM an empty array of messages",
                        ])),
                    )
                    .sendLogs("unkeep-DFM-empty-array");
                  return;
                }
                var r = t.every(function (e) {
                  return (
                    o("WAWebFrontendMsgGetters").getChat(e) ===
                    o("WAWebFrontendMsgGetters").getChat(n)
                  );
                });
                if (!r) {
                  o("WALogger")
                    .ERROR(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "Attempting to DFM an array of messages with mismatched chats",
                        ])),
                    )
                    .sendLogs("unkeep-DFM-chat-mismatch");
                  return;
                }
                o("WAWebCmd").Cmd.sendDeleteMsgs(
                  o("WAWebFrontendMsgGetters").getChat(n),
                  { type: "message", list: t },
                  !1,
                  null,
                  null,
                );
              };
            if (h != null)
              c(
                d.jsx(
                  o("WAWebKeepInChatWarningKicExitedModal")
                    .WarningKICMeUserExitedModal,
                  {
                    action: "unkeep",
                    onClose: function () {
                      return i(new p(m.EXITED_ME_USER));
                    },
                    message: h,
                  },
                ),
              );
            else if (y != null)
              c(
                d.jsx(
                  o("WAWebKeepInChatWarningKicExitedModal")
                    .WarningKICSenderExitedModal,
                  {
                    action: "unkeep",
                    onClose: function () {
                      return i(new p(m.EXITED_SENDER));
                    },
                    message: y,
                  },
                ),
              );
            else if (_)
              c(
                g
                  ? d.jsx(r("WAWebKeepInChatWarningUnkeepLimitExpiredModal"), {
                      onDeleteForMe: u,
                      expiredMessage: _,
                    })
                  : d.jsx(r("WAWebKeepInChatWarningUnkeepExpiredModal"), {
                      onConfirm: l,
                      onCancel: function () {
                        return i(new p(m.CANCELLED));
                      },
                      expiredMessage: _,
                    }),
              );
            else if (f)
              c(
                d.jsx(r("WAWebKeepInChatWarningUnkeepOwnMsgModal"), {
                  onConfirm: l,
                  onCancel: function () {
                    return i(new p(m.CANCELLED));
                  },
                }),
              );
            else return l();
          });
        })),
        R.apply(this, arguments)
      );
    }
    function L(e) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield (u || (u = n("Promise"))).all(
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
        E.apply(this, arguments)
      );
    }
    function k(e, t) {
      var n = o("WAWebEphemeralKeepInChatWamUtils").getBaseErrorLog(e, t);
      (n.set({
        kicErrorCode: o("WAWebWamEnumKicErrorCodeType").KIC_ERROR_CODE_TYPE
          .OFFLINE,
      }),
        n.commit());
    }
    ((l.KeepProcessErrorReason = m),
      (l.KeepProcessError = p),
      (l.runKeepInChatUX = _),
      (l.runUndoKeepInChatUX = f),
      (l.runBulkKeepInChatUX = y),
      (l.runBulkUndoKeepInChatUX = S));
  },
  98,
);
