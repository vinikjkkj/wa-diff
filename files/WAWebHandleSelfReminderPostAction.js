__d(
  "WAWebHandleSelfReminderPostAction",
  [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebAddonQueryUtils",
    "WAWebChatCollection",
    "WAWebCmd",
    "WAWebMsgKey",
    "WAWebSelfReminderAlert.react",
    "WAWebSelfReminderGating",
    "WAWebSelfReminderMarkStore",
    "WAWebUpdateUnreadChatAction",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d;
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t;
          !e.id.fromMe ||
            !o("WAWebUserPrefsMeUser").isMeAccount(e.id.remote) ||
            e.isScheduledMsg === !0 ||
            !o("WAWebCmd").Cmd.isOfflineDeliveryEnd ||
            ((yield o("WAWebSelfReminderMarkStore").getSelfReminderMark(
              e.id.id,
            )) != null &&
              (yield g(e.id, (t = e.body) != null ? t : "")));
        })),
        p.apply(this, arguments)
      );
    }
    function _() {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (o("WAWebSelfReminderGating").isSelfReminderEnabled()) {
            yield o("WAWebSelfReminderMarkStore").pruneExpiredSelfReminderMarks(
              o("WATimeUtils").unixTime(),
            );
            var e = yield o(
              "WAWebSelfReminderMarkStore",
            ).getSelfReminderMarks();
            if (e.length !== 0) {
              var t = e.map(function (e) {
                  return r("WAWebMsgKey").fromString(e.msgKey);
                }),
                a = yield o("WAWebAddonQueryUtils").getParentMsgsByMsgKey(t),
                i = [];
              for (var l of e) {
                var s = a.get(l.msgKey);
                if (s != null && s.isScheduledMsg !== !0) {
                  var u;
                  i.push(g(s.id, (u = s.body) != null ? u : ""));
                }
              }
              yield (d || (d = n("Promise"))).all(i);
            }
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
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          try {
            var a = o("WAWebChatCollection").ChatCollection.get(t.remote);
            if (a == null) {
              o("WALogger").WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[self_reminder] self chat not loaded, keeping the mark for catch-up",
                  ])),
              );
              return;
            }
            if (
              !(yield o("WAWebSelfReminderMarkStore").removeSelfReminderMark(
                t.id,
              ))
            )
              return;
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[self_reminder] reminder posted, alerting",
                ])),
            );
            try {
              o("WAWebSelfReminderAlert.react").alertSelfReminder({
                chat: a,
                msgKey: t,
                text: n,
              });
            } catch (e) {
              o("WALogger")
                .ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[self_reminder] alerting failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("self-reminder-alert-failed");
            }
            if (a.active) return;
            yield o("WAWebUpdateUnreadChatAction").markUnread(a, {
              allowAction: !1,
              showToast: !1,
              unread: !0,
            });
          } catch (e) {
            o("WALogger")
              .ERROR(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[self_reminder] completing reminder failed",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("self-reminder-complete-failed");
          }
        })),
        h.apply(this, arguments)
      );
    }
    ((l.handleSelfReminderMsgAdded = m), (l.processPostedSelfReminders = _));
  },
  98,
);
