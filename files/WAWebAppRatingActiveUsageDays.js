__d(
  "WAWebAppRatingActiveUsageDays",
  [
    "WALogger",
    "WAWebNux",
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsNuxPreferences",
    "WAWebUserPrefsStore",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f;
    function g(e) {
      return new Date(e).toISOString().split("T")[0];
    }
    function h() {
      var e = new Date(),
        t = new Date(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate());
      return t.getTime();
    }
    function y(e) {
      var t = new Date(e),
        n = new Date(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate());
      return n.getTime();
    }
    function C() {
      var e = r("WAWebUserPrefsStore").getUser(
        o("WAWebUserPrefsKeys").KEYS.ACTIVE_USAGE_DAYS_SINCE_DIALOG_OPENED,
      );
      if (e != null && typeof e == "object" && !Array.isArray(e)) {
        var t = e;
        if (typeof t.counter == "number" && typeof t.last_date == "number") {
          var n = t.counter,
            a = t.last_date;
          return { counter: n, last_date: a };
        }
      }
      return { counter: 0, last_date: h() };
    }
    function b(e) {
      r("WAWebUserPrefsStore").setUser(
        o("WAWebUserPrefsKeys").KEYS.ACTIVE_USAGE_DAYS_SINCE_DIALOG_OPENED,
        e,
      );
    }
    function v() {
      var e = C();
      return e.counter;
    }
    function S() {
      var t = h(),
        n = o("WAWebUserPrefsNuxPreferences").getNuxAcknowledgedTimestamp(
          o("WAWebNux").NuxSyncKey.LAST_DATE_DIALOG_OPENED,
        ),
        r = C(),
        a = g(t),
        i = JSON.stringify(
          babelHelpers.extends({}, r, { last_date: g(r.last_date) }),
        );
      if (
        (o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[ActiveUsageDays] reload day=",
              " dialogTs=",
              " data=",
              "",
            ])),
          a,
          n,
          i,
        ),
        n == null)
      ) {
        if (
          (o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[ActiveUsageDays] no dialogTs, counter=",
                "",
              ])),
            r.counter,
          ),
          t > r.last_date)
        ) {
          var l = r.counter + 1;
          (o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[ActiveUsageDays] counter++ ",
                "\u2192",
                "",
              ])),
            r.counter,
            l,
          ),
            b({ counter: l, last_date: t }));
        } else {
          var v = g(t),
            S = g(r.last_date);
          o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "[ActiveUsageDays] no update day=",
                " last=",
                "",
              ])),
            v,
            S,
          );
        }
        return;
      }
      var R = y(n),
        L = g(R);
      if (
        (o("WALogger").LOG(
          d ||
            (d = babelHelpers.taggedTemplateLiteralLoose([
              "[ActiveUsageDays] dialogDate=",
              "",
            ])),
          L,
        ),
        R > r.last_date)
      ) {
        var E = g(r.last_date);
        (o("WALogger").LOG(
          m ||
            (m = babelHelpers.taggedTemplateLiteralLoose([
              "[ActiveUsageDays] dialog newer ",
              ">",
              ", reset",
            ])),
          L,
          E,
        ),
          b({ counter: 0, last_date: t }));
        return;
      }
      if (t > r.last_date)
        if (t > R) {
          var k = r.counter + 1;
          (o("WALogger").LOG(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "[ActiveUsageDays] counter++ ",
                "\u2192",
                "",
              ])),
            r.counter,
            k,
          ),
            b({ counter: k, last_date: t }));
        } else
          (o("WALogger").LOG(
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose([
                "[ActiveUsageDays] date\u2264dialog, updating last_date",
              ])),
          ),
            b({ counter: r.counter, last_date: t }));
      else {
        var I = g(t),
          T = g(r.last_date);
        o("WALogger").LOG(
          f ||
            (f = babelHelpers.taggedTemplateLiteralLoose([
              "[ActiveUsageDays] no update day=",
              " last=",
              "",
            ])),
          I,
          T,
        );
      }
    }
    function R() {
      b({ counter: 0, last_date: h() });
    }
    ((l.getCurrentDayTimestamp = h),
      (l.getActiveUsageDaysSinceDialogOpened = v),
      (l.updateActiveUsageDaysSinceDialogOpened = S),
      (l.resetActiveUsageDaysSinceDialogOpened = R));
  },
  98,
);
