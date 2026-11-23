__d(
  "WAWebHandleSelfReminderPostAction",
  [
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
    "WAWebSlashCommandsUsageLogger",
    "WAWebUpdateUnreadChatAction",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _;
    async function f(t) {
      var n;
      if (
        !(
          !t.id.fromMe ||
          t.isScheduledMsg === !0 ||
          !o("WAWebCmd").Cmd.isOfflineDeliveryEnd
        )
      ) {
        var r = await o("WAWebSelfReminderMarkStore").getSelfReminderMark(
          t.id.id,
        );
        if (r != null) {
          if (!h(t.t, r.scheduledTimestampS)) {
            var a;
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[self_reminder] marked message added before its time, waiting: t=",
                  " scheduled=",
                  " now=",
                  "",
                ])),
              (a = t.t) != null ? a : 0,
              r.scheduledTimestampS,
              o("WATimeUtils").unixTime(),
            );
            return;
          }
          await y(t.id, (n = t.body) != null ? n : "");
        }
      }
    }
    async function g() {
      if (o("WAWebSelfReminderGating").isSelfReminderEnabled()) {
        await o("WAWebSelfReminderMarkStore").pruneExpiredSelfReminderMarks(
          o("WATimeUtils").unixTime(),
        );
        var e = await o("WAWebSelfReminderMarkStore").getSelfReminderMarks();
        if (e.length !== 0) {
          var t = e.map(function (e) {
              return r("WAWebMsgKey").fromString(e.msgKey);
            }),
            n = await o("WAWebAddonQueryUtils").getParentMsgsByMsgKey(t),
            a = [];
          for (var i of e) {
            var l = n.get(i.msgKey);
            if (
              l != null &&
              l.isScheduledMsg !== !0 &&
              h(l.t, i.scheduledTimestampS)
            ) {
              var s;
              a.push(y(l.id, (s = l.body) != null ? s : ""));
            }
          }
          await Promise.all(a);
        }
      }
    }
    function h(e, t) {
      return e != null && e >= t;
    }
    async function y(e, t) {
      try {
        var n = o("WAWebChatCollection").ChatCollection.get(e.remote);
        if (n == null) {
          o("WALogger").WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[self_reminder] chat not loaded, keeping the mark for catch-up",
              ])),
          );
          return;
        }
        if (
          !(await o("WAWebSelfReminderMarkStore").removeSelfReminderMark(e.id))
        )
          return;
        o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "[self_reminder] reminder posted, alerting: now=",
              "",
            ])),
          o("WATimeUtils").unixTime(),
        );
        try {
          (o("WAWebSelfReminderAlert.react").alertSelfReminder({
            chat: n,
            msgKey: e,
            text: t,
          }),
            o("WAWebSlashCommandsUsageLogger").logReminderUsage(
              "reminder_fired",
              n,
            ));
        } catch (e) {
          o("WALogger")
            .ERROR(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[self_reminder] alerting failed",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("self-reminder-alert-failed");
        }
        if (n.active) return;
        await b(n);
      } catch (e) {
        o("WALogger")
          .ERROR(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "[self_reminder] completing reminder failed",
              ])),
          )
          .catching(r("getErrorSafe")(e))
          .sendLogs("self-reminder-complete-failed");
      }
    }
    var C = 1e4;
    async function b(e) {
      var t = function () {
          return o("WAWebUpdateUnreadChatAction").markUnread(e, {
            allowAction: !1,
            showToast: !1,
            unread: !0,
          });
        },
        n = Promise.resolve(),
        a = async function () {
          (await Promise.resolve(),
            await n.catch(r("WAWebNoop")),
            e.unreadCount === 0 && !e.active && (await t()));
        },
        i = function () {
          e.unreadCount !== 0 ||
            e.active ||
            (s(),
            o("WALogger").LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "[self_reminder] unread count reset after the reminder posted, marking again",
                ])),
            ),
            a().catch(v));
        },
        l = window.setTimeout(function () {
          return s();
        }, C);
      function s() {
        (window.clearTimeout(l), e.off("change:unreadCount", i));
      }
      (e.on("change:unreadCount", i), (n = t()));
      try {
        await n;
      } catch (e) {
        throw (s(), e);
      }
      o("WALogger").LOG(
        p ||
          (p = babelHelpers.taggedTemplateLiteralLoose([
            "[self_reminder] marked unread, unread count ",
            "",
          ])),
        e.unreadCount,
      );
    }
    function v(e) {
      o("WALogger")
        .ERROR(
          _ ||
            (_ = babelHelpers.taggedTemplateLiteralLoose([
              "[self_reminder] marking the chat unread again failed",
            ])),
        )
        .catching(r("getErrorSafe")(e))
        .sendLogs("self-reminder-mark-unread-failed");
    }
    ((l.handleSelfReminderMsgAdded = f), (l.processPostedSelfReminders = g));
  },
  98,
);
