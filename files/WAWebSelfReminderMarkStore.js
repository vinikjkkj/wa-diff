__d(
  "WAWebSelfReminderMarkStore",
  [
    "WATimeUtils",
    "WAWebScheduledMsgConstants",
    "WAWebUserPrefsIndexedDBStorage",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = s(e, "string");
      return typeof t == "symbol" ? t : t + "";
    }
    function s(e, t) {
      if (typeof e != "object" || !e) return e;
      var n =
        e[typeof Symbol == "function" ? Symbol.toPrimitive : "@@toPrimitive"];
      if (n !== void 0) {
        var r = n.call(e, t || "default");
        if (typeof r != "object") return r;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }
    var u = "WASelfReminderMarks",
      c =
        o("WAWebScheduledMsgConstants")
          .SCHEDULED_MSG_REVEAL_KEY_RETENTION_DAYS *
        o("WATimeUtils").DAY_SECONDS,
      d = Promise.resolve();
    async function m() {
      return Object.values(await y());
    }
    async function p(e) {
      return (await y())[e];
    }
    function _(e, t) {
      return h(async function () {
        var n,
          r = await y();
        await o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
          u,
          babelHelpers.extends({}, r, ((n = {}), (n[e] = t), n)),
        );
      });
    }
    function f(t) {
      return h(async function () {
        var n = await y();
        if (n[t] == null) return !1;
        var r = n[t],
          o = babelHelpers.objectWithoutPropertiesLoose(n, [t].map(e));
        return (await C(o), !0);
      });
    }
    function g(e) {
      return h(async function () {
        var t = await y(),
          n = Object.fromEntries(
            Object.entries(t).filter(function (t) {
              var n = t[1];
              return e - n.scheduledTimestampS <= c;
            }),
          );
        Object.keys(n).length !== Object.keys(t).length && (await C(n));
      });
    }
    function h(e) {
      var t = d.then(e);
      return (
        (d = t.then(
          function () {},
          function () {},
        )),
        t
      );
    }
    async function y() {
      var e;
      return (
        await o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.init(),
        (e = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(u)) != null
          ? e
          : {}
      );
    }
    function C(e) {
      return Object.keys(e).length === 0
        ? o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.remove(u)
        : o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(u, e);
    }
    ((l.getSelfReminderMarks = m),
      (l.getSelfReminderMark = p),
      (l.addSelfReminderMark = _),
      (l.removeSelfReminderMark = f),
      (l.pruneExpiredSelfReminderMarks = g));
  },
  98,
);
