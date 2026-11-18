__d(
  "WAWebDebugCustomerManagerEducationBanner",
  [
    "WAWeb-moment",
    "WAWebCurrentMoment",
    "WAWebCustomerManagerEducationBannerNux",
    "WAWebCustomerManagerGating",
    "WAWebDebugResetSuggestedActions",
    "WAWebNux",
    "WAWebNuxAction",
    "WAWebNuxCoolOff",
    "WAWebNuxSync",
    "WAWebUserPrefsNuxPreferences",
    "WAWebUserPrefsStore",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebNux").asCoolOffNuxType(
      o("WAWebNux").NuxKeyTypes.COOL_OFF_NUX.CUSTOMER_MANAGER_EDUCATION_BANNER,
    );
    function s() {
      var t,
        n,
        a = r("WAWebUserPrefsStore").getUser(e),
        i = f(a),
        l = _(a, i),
        s = o(
          "WAWebCustomerManagerGating",
        ).customerManagerEducationBannerMaxViewDays(),
        c = o("WAWebUserPrefsNuxPreferences").nuxExistsInNuxSync(
          o("WAWebNux").NuxSyncKey.CUSTOMER_MANAGER_EDUCATION_BANNER,
        ),
        d = o("WAWebUserPrefsNuxPreferences").shouldShowNUX(
          o("WAWebNux").NUX.CUSTOMER_MANAGER_INTRO,
        );
      return {
        daysCounted:
          (t = i == null ? void 0 : i.totalViewDays) != null ? t : null,
        dismissedHere: i == null ? null : i.dismisses > 0,
        introNuxPending: d,
        lastCountedDay:
          (n = i == null ? void 0 : i.lastViewedDay) != null ? n : null,
        maxViewDays: s,
        pausedToday: u(),
        record: l,
        retiredOnAllDevices: c,
        summary: g(l, i, s, c, d),
      };
    }
    function u() {
      var e = r("WAWebUserPrefsStore").getUser(
        o("WAWebNux").CoolOffPeriodKeys.CUSTOMER_MANAGER_EDUCATION_BANNER,
      );
      if (typeof e != "object" || e == null) return !1;
      var t = e.duration,
        n = e.startDate;
      if (typeof t != "number" || typeof n != "string") return !1;
      var a = o("WAWebCurrentMoment")
        .getCurrentMoment()
        .diff(r("WAWeb-moment")(n), "days", !0);
      return a >= 0 && a < t;
    }
    function c() {
      var t = f(r("WAWebUserPrefsStore").getUser(e));
      return t == null
        ? {
            advanced: !1,
            state: s(),
            summary:
              "No usable record, so there is no day to advance. Open Customer Manager once to start the count, then try again.",
          }
        : o(
              "WAWebCustomerManagerEducationBannerNux",
            ).shouldShowCustomerManagerEducationBanner()
          ? (r("WAWebUserPrefsStore").setUser(
              e,
              babelHelpers.extends({}, t, {
                lastViewedDay: o("WAWebCurrentMoment")
                  .getCurrentMoment()
                  .subtract(1, "days")
                  .toISOString(),
              }),
            ),
            { advanced: !0, state: s(), summary: d(t.totalViewDays + 1) })
          : {
              advanced: !1,
              state: s(),
              summary:
                "The banner is finished, so there is no day left to advance. Run the reset to bring it back.",
            };
    }
    function d(e) {
      var t = o(
        "WAWebCustomerManagerGating",
      ).customerManagerEducationBannerMaxViewDays();
      return e > t
        ? "All " +
            t +
            " view-days are already spent. Reopen Customer Manager to see the banner retire on every device and the suggested actions take its place."
        : e === t
          ? "Reopen Customer Manager to spend day " +
            e +
            " of " +
            t +
            ". That is the last one, so the banner stays up for the whole of that day however many times you leave and come back. Advance one more day to see it retire on every device and the suggested actions take its place."
          : "Reopen Customer Manager to spend day " + e + " of " + t + ".";
    }
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = (e == null ? void 0 : e.includeIntroNux) === !0;
          (o("WAWebNuxCoolOff").resetNuxCoolOff(
            o("WAWebNux").NuxKeyTypes.COOL_OFF_NUX
              .CUSTOMER_MANAGER_EDUCATION_BANNER,
          ),
            r("WAWebUserPrefsStore").setUser(
              o("WAWebNux").CoolOffPeriodKeys.CUSTOMER_MANAGER_EDUCATION_BANNER,
            ));
          var n = null;
          try {
            yield r("WAWebNuxSync").unAcknowledgeNux(
              o("WAWebNux").NuxSyncKey.CUSTOMER_MANAGER_EDUCATION_BANNER,
            );
          } catch (e) {
            n = r("getErrorSafe")(e).name;
          }
          return (
            yield o(
              "WAWebDebugResetSuggestedActions",
            ).resetSuggestedActionsForDebug(),
            t &&
              (yield o("WAWebNuxAction").resetNux(
                o("WAWebNux").NUX.CUSTOMER_MANAGER_INTRO,
              )),
            {
              clearedIntroNux: t,
              retirementCleared: n == null,
              state: s(),
              summary:
                n == null
                  ? "Reopen Customer Manager to see the banner from day 0."
                  : "Cleared on this browser, but the retirement did not reach the server, so the business\u2019s other devices still have the banner retired. Reopen Customer Manager to see it here, and run this again once the connection is back.",
              syncError: n,
            }
          );
        })),
        p.apply(this, arguments)
      );
    }
    function _(e, t) {
      return e == null ? "missing" : t == null ? "malformed" : "ok";
    }
    function f(e) {
      if (typeof e != "object" || e == null) return null;
      var t = e.clicks,
        n = e.dismisses,
        r = e.lastViewedDay,
        o = e.totalViewDays,
        a = e.viewDaysBeforeCoolOff;
      return typeof t != "number" ||
        typeof n != "number" ||
        typeof o != "number" ||
        typeof a != "number" ||
        typeof r != "string"
        ? null
        : {
            clicks: t,
            dismisses: n,
            lastViewedDay: r,
            totalViewDays: o,
            viewDaysBeforeCoolOff: a,
          };
    }
    function g(e, t, n, a, i) {
      return a
        ? "Retired on every device. Run the reset to bring it back."
        : e === "malformed"
          ? "The stored record is malformed. The banner will silently treat it as never seen the next time it reads it, which looks like a bug but is not one."
          : t == null
            ? i
              ? "Never seen here. The intro popup is still pending, so that shows first and the banner follows."
              : "Never seen here. It shows on the next Customer Manager open."
            : t.dismisses > 0
              ? "Closed with the X on this browser."
              : t.totalViewDays >= n
                ? r("WAWeb-moment")(t.lastViewedDay).isSame(
                    o("WAWebCurrentMoment").getCurrentMoment(),
                    "day",
                  )
                  ? "Day " +
                    t.totalViewDays +
                    " of " +
                    n +
                    ", its last. It holds the slot for the rest of today however many times you leave and come back; the first open after today retires it."
                  : "Out of days on this browser (" +
                    t.totalViewDays +
                    " of " +
                    n +
                    "), but not retired on the server."
                : i
                  ? "Day " +
                    t.totalViewDays +
                    " of " +
                    n +
                    ". The intro popup is still pending, so no day is counted until it is closed."
                  : "Day " + t.totalViewDays + " of " + n + ".";
    }
    ((l.getCustomerManagerEducationBannerDebugState = s),
      (l.advanceCustomerManagerEducationBannerDebugDay = c),
      (l.resetCustomerManagerEducationBannerForDebug = m));
  },
  98,
);
