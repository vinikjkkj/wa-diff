__d(
  "WAWebBizAiBatchThreadStateUpdates",
  ["WALogger", "WAWebLidMigrationUtils"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      var t = [],
        n = [],
        r = [];
      for (var o of e) {
        var a = c(o);
        a == null ? n.push(o) : (t.push(o), r.push(a));
      }
      return { entries: t, rejected: n, updates: r };
    }
    function u(t, n) {
      return n.length !== t.length
        ? (o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[Maiba] batch thread state update returned ",
                  " results for ",
                  " entries",
                ])),
              n.length,
              t.length,
            )
            .sendLogs("biz-ai-batch-thread-state-result-mismatch"),
          t.map(function (e) {
            return { entry: e, isSuccess: !1 };
          }))
        : t.map(function (e, t) {
            return d(e, n[t]);
          });
    }
    function c(e) {
      var t,
        n,
        r = e.chat.id;
      if (!r.isUser()) return null;
      var a =
          (t = o("WAWebLidMigrationUtils").toLid(r)) == null ? void 0 : t.user,
        i = (n = o("WAWebLidMigrationUtils").toPn(r)) == null ? void 0 : n.user;
      return a == null && i == null
        ? null
        : {
            ai_replies_status: e.exclude ? "MUTED" : "UNMUTED",
            consumer_lid: a != null ? a : "",
            phone_number: i != null ? i : "",
          };
    }
    function d(e, t) {
      return t.success !== !0
        ? { entry: e, isSuccess: !1 }
        : {
            entry: e,
            isSuccess: !0,
            updateTimestampMs: m(t.update_timestamp_ms),
          };
    }
    function m(e) {
      if (e == null || e === "") return null;
      var t = Number(e);
      return Number.isFinite(t) ? t : null;
    }
    ((l.buildBatchThreadStateUpdates = s), (l.zipBatchThreadStateResults = u));
  },
  98,
);
