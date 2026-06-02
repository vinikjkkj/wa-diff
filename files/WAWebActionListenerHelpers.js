__d(
  "WAWebActionListenerHelpers",
  [
    "fbt",
    "WAFilteredCatch",
    "WALogger",
    "WAWebActionToast.react",
    "WAWebBackendErrors",
    "WAWebChatEphemerality",
    "WAWebChatGetters",
    "WAWebChatSendMessages",
    "WAWebChatThreadLogging",
    "WAWebMessageDeleteActionsWamEvent",
    "WAWebMiscErrors",
    "WAWebMsgDataFromModel",
    "WAWebMsgGetters",
    "WAWebOTPLoggingHelper",
    "WAWebSnackbarDeleteUndoWamEvent",
    "WAWebToastManager",
    "WAWebWamChatPSALogger",
    "WAWebWamEnumDeleteActionType",
    "WAWebWamEnumSnackbarActionType",
    "WAWebWamMsgUtils",
    "isStringNullOrEmpty",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d,
      m = d || (d = o("react")),
      p = 4e3;
    function _(t) {
      switch (t) {
        case 1:
          return s._(/*BTDS*/ "Alerts and sounds off for 1 hour");
        case 8:
          return s._(/*BTDS*/ "Alerts and sounds off for 8 hours");
        case 24:
          return s._(/*BTDS*/ "Alerts and sounds off for 1 day");
        case 168:
          return s._(/*BTDS*/ "Alerts and sounds off for 1 week");
        default:
          return (
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[DoNotDisturbSettings] non-standard mute duration: ",
                  "",
                ])),
              t,
            ),
            s._(/*BTDS*/ "Alerts and sounds off")
          );
      }
    }
    function f(e, t, n, a) {
      if (
        (a === void 0 && (a = "LEFT"),
        !t ||
          t.some(function (e) {
            return !e.id;
          }))
      )
        return Promise.reject(new (o("WAWebMiscErrors").ActionError)());
      var i = r("isStringNullOrEmpty")(n)
          ? o("WAWebActionToast.react").genId()
          : n,
        l = t.length;
      if (o("WAWebChatGetters").getIsPSA(e)) {
        var c = 0;
        for (c; c < l; c++) o("WAWebWamChatPSALogger").logChatPSAStar(t[c]);
      }
      var d = new (o("WAWebActionToast.react").ActionType)(
          s._(/*BTDS*/ '_j{"*":"Starring messages","_1":"Starring message"}', [
            s._plural(l),
          ]),
        ),
        p = o("WAWebChatSendMessages")
          .sendStarMsgs(e, t, !0)
          .then(function () {
            return new (o("WAWebActionToast.react").ActionType)(
              s._(
                /*BTDS*/ '_j{"*":"{count} messages starred","_1":"1 message starred"}',
                [s._plural(l, "count")],
              ),
              {
                actionText: s._(/*BTDS*/ "Undo"),
                actionHandler: function () {
                  return g(e, t, i, a);
                },
              },
            );
          })
          .catch(
            o("WAFilteredCatch").filteredCatch(
              o("WAWebBackendErrors").ServerStatusCodeError,
              function (t) {
                if (t.status >= 400)
                  return o("WAWebChatEphemerality").isEphemeralSettingOn(e)
                    ? new (o("WAWebActionToast.react").ActionType)(
                        s._(
                          /*BTDS*/ '_j{"*":"Couldn\'t star messages because the messages may have expired","_1":"Couldn\'t star message because the message may have expired"}',
                          [s._plural(l)],
                        ),
                      )
                    : new (o("WAWebActionToast.react").ActionType)(
                        s._(
                          /*BTDS*/ '_j{"*":"Couldn\'t star messages","_1":"Couldn\'t star message"}',
                          [s._plural(l)],
                        ),
                      );
              },
            ),
          )
          .catch(function (n) {
            return (
              o("WALogger").WARN(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "chatAction:sendStarMsgs dropped",
                  ])),
              ),
              new (o("WAWebActionToast.react").ActionType)(
                s._(
                  /*BTDS*/ '_j{"*":"Couldn\'t star messages","_1":"Couldn\'t star message"}',
                  [s._plural(l)],
                ),
                {
                  actionText: s._(/*BTDS*/ "Try again."),
                  actionHandler: function () {
                    return f(e, t, i, a);
                  },
                },
              )
            );
          });
      return (
        o("WAWebToastManager").ToastManager.open(
          m.jsx(o("WAWebActionToast.react").ActionToast, {
            id: i,
            toastPosition: a,
            initialAction: d,
            pendingAction: p,
          }),
        ),
        p
      );
    }
    function g(e, t, n, a) {
      if (
        (a === void 0 && (a = "LEFT"),
        !t ||
          t.some(function (e) {
            return !e.id;
          }))
      )
        return Promise.reject(new (o("WAWebMiscErrors").ActionError)());
      var i = r("isStringNullOrEmpty")(n)
          ? o("WAWebActionToast.react").genId()
          : n,
        l = t.length,
        u = new (o("WAWebActionToast.react").ActionType)(
          s._(
            /*BTDS*/ '_j{"*":"Unstarring messages","_1":"Unstarring message"}',
            [s._plural(l)],
          ),
        ),
        d = o("WAWebChatSendMessages")
          .sendStarMsgs(e, t, !1)
          .then(function () {
            return new (o("WAWebActionToast.react").ActionType)(
              s._(
                /*BTDS*/ '_j{"*":"{count} messages unstarred","_1":"1 message unstarred"}',
                [s._plural(l, "count")],
              ),
              {
                actionText: s._(/*BTDS*/ "Undo"),
                actionHandler: function () {
                  return f(e, t, i, a);
                },
              },
            );
          })
          .catch(
            o("WAFilteredCatch").filteredCatch(
              o("WAWebBackendErrors").ServerStatusCodeError,
              function (t) {
                if (t.status >= 400)
                  return o("WAWebChatEphemerality").isEphemeralSettingOn(e)
                    ? new (o("WAWebActionToast.react").ActionType)(
                        s._(
                          /*BTDS*/ '_j{"*":"Couldn\'t unstar messages because the messages may have expired","_1":"Couldn\'t unstar message because the message may have expired"}',
                          [s._plural(l)],
                        ),
                      )
                    : new (o("WAWebActionToast.react").ActionType)(
                        s._(
                          /*BTDS*/ '_j{"*":"Couldn\'t unstar messages","_1":"Couldn\'t unstar message"}',
                          [s._plural(l)],
                        ),
                      );
              },
            ),
          )
          .catch(function (n) {
            return (
              o("WALogger").WARN(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "chatAction:sendUnstarMsgs dropped",
                  ])),
              ),
              new (o("WAWebActionToast.react").ActionType)(
                s._(
                  /*BTDS*/ '_j{"*":"Couldn\'t unstar messages","_1":"Couldn\'t unstar message"}',
                  [s._plural(l)],
                ),
                {
                  actionText: s._(/*BTDS*/ "Try again."),
                  actionHandler: function () {
                    return g(e, t, i, a);
                  },
                },
              )
            );
          });
      return (
        o("WAWebToastManager").ToastManager.open(
          m.jsx(o("WAWebActionToast.react").ActionToast, {
            id: i,
            toastPosition: a,
            initialAction: u,
            pendingAction: d,
          }),
        ),
        d
      );
    }
    function h(e) {
      var t = Array.from(
        new Set(
          e.map(function (e) {
            return o("WAWebWamMsgUtils").getWamMediaType(e);
          }),
        ),
      );
      return t.length === 1 ? t[0] : void 0;
    }
    async function y(e, t, n) {
      if (t.type === "message") {
        if (o("WAWebChatGetters").getIsPSA(e)) {
          var r = 0;
          for (r; r < t.list.length; r++)
            o("WAWebWamChatPSALogger").logChatPSADelete(t.list[r]);
        }
        t.list
          .filter(o("WAWebMsgGetters").getIsAuthenticationMessage)
          .forEach(function (e) {
            o("WAWebOTPLoggingHelper").logOTPMessageDeleted(
              o("WAWebMsgDataFromModel").msgDataFromMsgModel(e),
            );
          });
      }
      new (o("WAWebMessageDeleteActionsWamEvent").MessageDeleteActionsWamEvent)(
        {
          deleteActionType: n
            ? o("WAWebWamEnumDeleteActionType").DELETE_ACTION_TYPE
                .DELETE_FOR_EVERYONE
            : o("WAWebWamEnumDeleteActionType").DELETE_ACTION_TYPE
                .DELETE_FOR_ME,
          isAGroup: o("WAWebChatGetters").getIsGroup(e),
          messagesDeleted: t.list.length,
          threadId: await o("WAWebChatThreadLogging").getChatThreadID(
            e.id.toJid(),
          ),
          mediaType: h(t.list),
        },
      ).commit();
    }
    async function C(e, t, n) {
      new (o("WAWebSnackbarDeleteUndoWamEvent").SnackbarDeleteUndoWamEvent)({
        snackbarActionType:
          n === "shown"
            ? o("WAWebWamEnumSnackbarActionType").SNACKBAR_ACTION_TYPE
                .SNACKBAR_SHOWN
            : o("WAWebWamEnumSnackbarActionType").SNACKBAR_ACTION_TYPE
                .MESSAGE_UNDELETE,
        isAGroup: o("WAWebChatGetters").getIsGroup(e),
        messagesUndeleted: t.list.length,
        threadId: await o("WAWebChatThreadLogging").getChatThreadID(
          e.id.toJid(),
        ),
        mediaType: h(t.list),
      }).commit();
    }
    ((l.MESSAGE_DELETE_DELAY_DURATION = p),
      (l.getMuteAllDurationLabel = _),
      (l.handleSendStarMsgs = f),
      (l.handleSendUnstarMsgs = g),
      (l.logMessageDeleteActionsMetric = y),
      (l.logSnackbarDeleteUndoMetric = C));
  },
  226,
);
