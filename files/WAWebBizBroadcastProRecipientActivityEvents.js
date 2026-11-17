__d(
  "WAWebBizBroadcastProRecipientActivityEvents",
  [
    "WALogger",
    "WAWebChatCollection",
    "WAWebCmd",
    "WAWebHistorySyncProgressModel",
    "WAWebUIListener",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
    "WAWebWidToJid",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s() {
      var e, t;
      return (e =
        (t = o("WAWebUserPrefsMeUser").getMaybeMeDeviceLid(!1)) == null
          ? void 0
          : t.toString()) != null
        ? e
        : "";
    }
    function u() {
      var e = o("WAWebHistorySyncProgressModel").getHistorySyncProgressModel();
      return (
        !e.incomplete &&
        (e.remainingPausedSeconds == null || e.remainingPausedSeconds <= 0)
      );
    }
    function c(e) {
      return e !== "" && e === s() && u();
    }
    function d(e) {
      var t,
        n = function (n) {
          return e(m(n), !1);
        },
        r = function (n, r, a) {
          if (n.id.isRegularUser()) {
            var t = m(n),
              i = a == null ? [] : [o("WAWebWidToJid").userLidtoLidUserJid(a)];
            e(t == null ? null : [].concat(t, i), !1);
          }
        },
        a = function (n) {
          return e(p(n), !0);
        },
        i = function (n) {
          var t = [];
          for (var r of n) {
            var o = p(r);
            if (o == null) {
              e(null, !1);
              return;
            }
            t.push.apply(t, o);
          }
          e(t, !1);
        },
        l = function () {
          return e(null, !1);
        },
        s = o("WAWebHistorySyncProgressModel").getHistorySyncProgressModel(),
        u = "change:incomplete change:remainingPausedSeconds";
      ((t = o("WAWebChatCollection")).ChatCollection.on("add", n),
        t.ChatCollection.on("remove", n),
        t.ChatCollection.on("change:lastReceivedKey", n),
        t.ChatCollection.on("change:msgsChanged", n),
        t.ChatCollection.on("change:accountLid", r),
        t.ChatCollection.on("reset", l),
        o("WAWebCmd").Cmd.on("chat_history_cleared_from_bridge", a),
        o("WAWebCmd").Cmd.on("new_history_sync_chunk_processed_from_bridge", i),
        o("WAWebCmd").Cmd.on("on_initial_chat_synced_from_bridge", l));
      var c = new (o("WAWebUIListener").Listener)(s, u, l);
      return (
        c.engage(),
        window.addEventListener("focus", l),
        function () {
          var e;
          ((e = o("WAWebChatCollection")).ChatCollection.off("add", n),
            e.ChatCollection.off("remove", n),
            e.ChatCollection.off("change:lastReceivedKey", n),
            e.ChatCollection.off("change:msgsChanged", n),
            e.ChatCollection.off("change:accountLid", r),
            e.ChatCollection.off("reset", l),
            o("WAWebCmd").Cmd.off("chat_history_cleared_from_bridge", a),
            o("WAWebCmd").Cmd.off(
              "new_history_sync_chunk_processed_from_bridge",
              i,
            ),
            o("WAWebCmd").Cmd.off("on_initial_chat_synced_from_bridge", l),
            c.disengage(),
            window.removeEventListener("focus", l));
        }
      );
    }
    function m(e) {
      if (!e.id.isRegularUser()) return [];
      var t = e.accountLid;
      return t == null ? null : [o("WAWebWidToJid").userLidtoLidUserJid(t)];
    }
    function p(t) {
      try {
        var n = o("WAWebWidFactory").createWid(t);
        if (!n.isRegularUser()) return [];
        var a = o("WAWebChatCollection").ChatCollection.get(n);
        return a != null ? m(a) : null;
      } catch (t) {
        return (
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "Failed to resolve chat identity for Pro audience activity",
                ])),
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("bb-pro-recipient-activity-chat-id-resolution-failed"),
          null
        );
      }
    }
    ((l.getProRecipientActivityAccountKey = s),
      (l.isProRecipientActivityHistoryReady = u),
      (l.isProRecipientActivityReadAvailable = c),
      (l.subscribeProRecipientActivityEvents = d));
  },
  98,
);
