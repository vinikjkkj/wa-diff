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
      var n, r, a, i;
      if (!o("WAWebHatchJsonReaders").isObject(e))
        return { kind: "dropped", reason: "malformed" };
      var l = o("WAWebHatchJsonReaders").readObject(e, "details"),
        s = o("WAWebHatchJsonReaders").readObject(l, "goal"),
        u = o("WAWebHatchJsonReaders").trimToNull(
          o("WAWebHatchJsonReaders").readTrimmedString(e, "message_id"),
        ),
        c = o("WAWebHatchJsonReaders").trimToNull(
          o("WAWebHatchJsonReaders").readTrimmedString(s, "id"),
        ),
        d =
          (n =
            u != null
              ? u
              : o("WAWebHatchJsonReaders").trimToNull(
                  o("WAWebHatchJsonReaders").readTrimmedString(l, "message_id"),
                )) != null
            ? n
            : c;
      if (d == null) return { kind: "dropped", reason: "no_id" };
      var m =
        (r = f(o("WAWebHatchJsonReaders").readTrimmedString(e, "timestamp"))) !=
        null
          ? r
          : t;
      return m == null
        ? { kind: "dropped", reason: "no_time" }
        : {
            kind: "row",
            record: {
              appliedTsMs: t,
              finishMessage: o("WAWebHatchJsonReaders").trimToNull(
                o("WAWebHatchJsonReaders").readTrimmedString(
                  l,
                  "finish_message",
                ),
              ),
              goalId: c,
              icon: o("WAWebHatchJsonReaders").trimToNull(
                o("WAWebHatchJsonReaders").readTrimmedString(s, "icon"),
              ),
              messageId: u,
              rowKey: d,
              status: p(
                o("WAWebHatchJsonReaders").readTrimmedString(e, "status"),
              ),
              subtitle:
                (a = g([e, "subtitle"], [s, "subtitle"])) != null ? a : h(l),
              taskLabel: o("WAWebHatchJsonReaders").trimToNull(
                o("WAWebHatchJsonReaders").readTrimmedString(e, "task_label"),
              ),
              timestampMs: m,
              title:
                (i = g(
                  [e, "title"],
                  [s, "name"],
                  [e, "status_title"],
                  [s, "status_title"],
                )) != null
                  ? i
                  : "",
              type: _(o("WAWebHatchJsonReaders").readTrimmedString(e, "type")),
            },
          };
    }
    function d(e) {
      var t = o("WAWebHatchJsonReaders").readField(e, "payload");
      return o("WATypeUtils").isString(t)
        ? b(t)
        : o("WATypeUtils").isString(e)
          ? b(e)
          : e;
    }
    function m(e) {
      return e.title === "" ? e.rowKey : e.title;
    }
    function p(t) {
      var n;
      return (n = e.get(C(t))) != null ? n : "unrecognized";
    }
    function _(e) {
      var t;
      return (t = s.get(C(e))) != null ? t : "unrecognized";
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
      var t = o("WAWebHatchJsonReaders")
        .readObjects(e, "files")
        .map(y)
        .filter(Boolean);
      return t.length > 0 ? t.join(", ") : null;
    }
    function y(e) {
      var t = o("WAWebHatchJsonReaders")
        .readTrimmedString(e, "path")
        .split("/")
        .filter(function (e) {
          return e.trim() !== "";
        });
      return t.length > 0 ? t[t.length - 1] : null;
    }
    function C(e) {
      return e.trim().toLowerCase().replace(/ /g, "_");
    }
    function b(e) {
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
