__d(
  "WAWebHatchActivityRecord",
  ["WATypeUtils", "WAWebHatchJsonReaders"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Map([
        ["blocked", "blocked"],
        ["completed", "completed"],
        ["error", "error"],
        ["failed", "failed"],
        ["finished", "completed"],
        ["pending", "pending"],
        ["running", "running"],
        ["stopped", "stopped"],
        ["success", "success"],
      ]),
      s = new Map([
        ["email_sent", "email_sent"],
        ["file_created", "file_created"],
        ["file_updated", "file_updated"],
        ["goal", "goal"],
        ["message_sent", "message_sent"],
        ["reminder_set", "reminder_set"],
        ["task_running", "task_running"],
        ["web_search", "web_search"],
      ]),
      u =
        /^(\d{4}-\d{2}-\d{2})[Tt](\d{2}:\d{2}:\d{2})(?:\.\d+)?(?:([Zz])|([+-]\d{2}:\d{2}))$/;
    function c(e, t) {
      var n, r, a;
      if (!o("WAWebHatchJsonReaders").isObject(e))
        return { kind: "dropped", reason: "malformed" };
      var i = o("WAWebHatchJsonReaders").readObject(e, "details"),
        l = o("WAWebHatchJsonReaders").readObject(i, "goal"),
        s = o("WAWebHatchJsonReaders").trimToNull(
          o("WAWebHatchJsonReaders").readTrimmedString(e, "message_id"),
        ),
        u = o("WAWebHatchJsonReaders").trimToNull(
          o("WAWebHatchJsonReaders").readTrimmedString(l, "id"),
        ),
        c =
          (n =
            s != null
              ? s
              : o("WAWebHatchJsonReaders").trimToNull(
                  o("WAWebHatchJsonReaders").readTrimmedString(i, "message_id"),
                )) != null
            ? n
            : u;
      if (c == null) return { kind: "dropped", reason: "no_id" };
      var d =
        (r = f(o("WAWebHatchJsonReaders").readTrimmedString(e, "timestamp"))) !=
        null
          ? r
          : t;
      return d == null
        ? { kind: "dropped", reason: "no_time" }
        : {
            kind: "row",
            record: {
              appliedTsMs: t,
              finishMessage: o("WAWebHatchJsonReaders").trimToNull(
                o("WAWebHatchJsonReaders").readTrimmedString(
                  i,
                  "finish_message",
                ),
              ),
              goalId: u,
              icon: o("WAWebHatchJsonReaders").trimToNull(
                o("WAWebHatchJsonReaders").readTrimmedString(l, "icon"),
              ),
              messageId: s,
              rowKey: c,
              status: p(
                o("WAWebHatchJsonReaders").readTrimmedString(e, "status"),
              ),
              subtitle: g([e, "subtitle"], [l, "subtitle"]),
              taskLabel: o("WAWebHatchJsonReaders").trimToNull(
                o("WAWebHatchJsonReaders").readTrimmedString(e, "task_label"),
              ),
              timestampMs: d,
              title:
                (a = g(
                  [e, "title"],
                  [l, "name"],
                  [e, "status_title"],
                  [l, "status_title"],
                )) != null
                  ? a
                  : "",
              type: _(o("WAWebHatchJsonReaders").readTrimmedString(e, "type")),
            },
          };
    }
    function d(e) {
      var t = o("WAWebHatchJsonReaders").readField(e, "payload");
      return o("WATypeUtils").isString(t)
        ? y(t)
        : o("WATypeUtils").isString(e)
          ? y(e)
          : e;
    }
    function m(e) {
      return e.title === "" ? e.rowKey : e.title;
    }
    function p(t) {
      var n;
      return (n = e.get(h(t))) != null ? n : "unrecognized";
    }
    function _(e) {
      var t;
      return (t = s.get(h(e))) != null ? t : "unrecognized";
    }
    function f(e) {
      var t = u.exec(e);
      if (t == null) return null;
      var n = t[1],
        r = t[2],
        o = t[3],
        a = t[4],
        i = Date.parse(n + "T" + r + (o != null ? "Z" : a));
      return Number.isNaN(i) ? null : i;
    }
    function g() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      for (var r of t) {
        var a = r[0],
          i = r[1],
          l = o("WAWebHatchJsonReaders").trimToNull(
            o("WAWebHatchJsonReaders").readTrimmedString(a, i),
          );
        if (l != null) return l;
      }
      return null;
    }
    function h(e) {
      return e.trim().toLowerCase().replace(/ /g, "_");
    }
    function y(e) {
      try {
        return JSON.parse(e);
      } catch (e) {
        return null;
      }
    }
    ((l.decodeHatchActivityRecord = c),
      (l.unwrapHatchActivityStreamPayload = d),
      (l.hatchActivityDisplayTitle = m),
      (l.parseHatchActivityStatus = p),
      (l.parseHatchActivityType = _),
      (l.parseHatchRfc3339 = f));
  },
  98,
);
