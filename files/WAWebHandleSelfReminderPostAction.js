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
    "WAWebNoop",
    "WAWebSelfReminderAlert.react",
    "WAWebSelfReminderGating",
    "WAWebSelfReminderMarkStore",
    "WAWebUpdateUnreadChatAction",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f;
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t;
          if (
            !(
              !e.id.fromMe ||
              e.isScheduledMsg === !0 ||
              !o("WAWebCmd").Cmd.isOfflineDeliveryEnd
            )
          ) {
            var n = yield o("WAWebSelfReminderMarkStore").getSelfReminderMark(
              e.id.id,
            );
            if (n != null) {
              if (!b(e.t, n.scheduledTimestampS)) {
                var r;
                o("WALogger").LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[self_reminder] marked message added before its time, waiting: t=",
                      " scheduled=",
                      " now=",
                      "",
                    ])),
                  (r = e.t) != null ? r : 0,
                  n.scheduledTimestampS,
                  o("WATimeUtils").unixTime(),
                );
                return;
              }
              yield v(e.id, (t = e.body) != null ? t : "");
            }
          }
        })),
        h.apply(this, arguments)
      );
    }
    function y() {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
                if (
                  s != null &&
                  s.isScheduledMsg !== !0 &&
                  b(s.t, l.scheduledTimestampS)
                ) {
                  var u;
                  i.push(v(s.id, (u = s.body) != null ? u : ""));
                }
              }
              yield (f || (f = n("Promise"))).all(i);
            }
          }
        })),
        C.apply(this, arguments)
      );
    }
    function b(e, t) {
      return e != null && e >= t;
    }
    function v(e, t) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          try {
            var n = o("WAWebChatCollection").ChatCollection.get(e.remote);
            if (n == null) {
              o("WALogger").WARN(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[self_reminder] chat not loaded, keeping the mark for catch-up",
                  ])),
              );
              return;
            }
            if (
              !(yield o("WAWebSelfReminderMarkStore").removeSelfReminderMark(
                e.id,
              ))
            )
              return;
            o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[self_reminder] reminder posted, alerting: now=",
                  "",
                ])),
              o("WATimeUtils").unixTime(),
            );
            try {
              o("WAWebSelfReminderAlert.react").alertSelfReminder({
                chat: n,
                msgKey: e,
                text: t,
              });
            } catch (e) {
              o("WALogger")
                .ERROR(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "[self_reminder] alerting failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("self-reminder-alert-failed");
            }
            if (n.active) return;
            yield L(n);
          } catch (e) {
            o("WALogger")
              .ERROR(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[self_reminder] completing reminder failed",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("self-reminder-complete-failed");
          }
        })),
        S.apply(this, arguments)
      );
    }
    var R = 1e4;
    function L(e) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = function () {
              return o("WAWebUpdateUnreadChatAction").markUnread(e, {
                allowAction: !1,
                showToast: !1,
                unread: !0,
              });
            },
            a = (f || (f = n("Promise"))).resolve(),
            i = (function () {
              var o = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* () {
                  (yield (f || (f = n("Promise"))).resolve(),
                    yield a.catch(r("WAWebNoop")),
                    e.unreadCount === 0 && !e.active && (yield t()));
                },
              );
              return function () {
                return o.apply(this, arguments);
              };
            })(),
            l = function () {
              e.unreadCount !== 0 ||
                e.active ||
                (u(),
                o("WALogger").LOG(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "[self_reminder] unread count reset after the reminder posted, marking again",
                    ])),
                ),
                i().catch(k));
            },
            s = window.setTimeout(function () {
              return u();
            }, R);
          function u() {
            (window.clearTimeout(s), e.off("change:unreadCount", l));
          }
          (e.on("change:unreadCount", l), (a = t()));
          try {
            yield a;
          } catch (e) {
            throw (u(), e);
          }
          o("WALogger").LOG(
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose([
                "[self_reminder] marked unread, unread count ",
                "",
              ])),
            e.unreadCount,
          );
        })),
        E.apply(this, arguments)
      );
    }
    function k(t) {
      o("WALogger")
        .ERROR(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[self_reminder] marking the chat unread again failed",
            ])),
        )
        .catching(r("getErrorSafe")(t))
        .sendLogs("self-reminder-mark-unread-failed");
    }
    ((l.handleSelfReminderMsgAdded = g), (l.processPostedSelfReminders = y));
  },
  98,
);
