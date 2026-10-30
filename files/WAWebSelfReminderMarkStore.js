__d(
  "WAWebSelfReminderMarkStore",
  [
    "Promise",
    "WATimeUtils",
    "WAWebScheduledMsgConstants",
    "WAWebUserPrefsIndexedDBStorage",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      var t = u(e, "string");
      return typeof t == "symbol" ? t : t + "";
    }
    function u(e, t) {
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
    var c = "WASelfReminderMarks",
      d =
        o("WAWebScheduledMsgConstants")
          .SCHEDULED_MSG_REVEAL_KEY_RETENTION_DAYS *
        o("WATimeUtils").DAY_SECONDS,
      m = (e || (e = n("Promise"))).resolve();
    function p() {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return Object.values(yield v());
        })),
        _.apply(this, arguments)
      );
    }
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return (yield v())[e];
        })),
        g.apply(this, arguments)
      );
    }
    function h(e, t) {
      return b(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var n,
            r = yield v();
          yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
            c,
            babelHelpers.extends({}, r, ((n = {}), (n[e] = t), n)),
          );
        }),
      );
    }
    function y(e) {
      return b(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var t = yield v();
          if (t[e] == null) return !1;
          var n = t[e],
            r = babelHelpers.objectWithoutPropertiesLoose(t, [e].map(s));
          return (yield R(r), !0);
        }),
      );
    }
    function C(e) {
      return b(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var t = yield v(),
            n = Object.fromEntries(
              Object.entries(t).filter(function (t) {
                var n = t[1];
                return e - n.scheduledTimestampS <= d;
              }),
            );
          Object.keys(n).length !== Object.keys(t).length && (yield R(n));
        }),
      );
    }
    function b(e) {
      var t = m.then(e);
      return (
        (m = t.then(
          function () {},
          function () {},
        )),
        t
      );
    }
    function v() {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e;
          return (
            yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.init(),
            (e = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(c)) !=
            null
              ? e
              : {}
          );
        })),
        S.apply(this, arguments)
      );
    }
    function R(e) {
      return Object.keys(e).length === 0
        ? o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.remove(c)
        : o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(c, e);
    }
    ((l.getSelfReminderMarks = p),
      (l.getSelfReminderMark = f),
      (l.addSelfReminderMark = h),
      (l.removeSelfReminderMark = y),
      (l.pruneExpiredSelfReminderMarks = C));
  },
  98,
);
