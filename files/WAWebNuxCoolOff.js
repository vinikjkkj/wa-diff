__d(
  "WAWebNuxCoolOff",
  [
    "WAWeb-moment",
    "WAWebBannerEventWamEvent",
    "WAWebCurrentMoment",
    "WAWebNux",
    "WAWebUserPrefsStore",
    "WAWebWamEnumBannerOperations",
  ],
  function (t, n, r, o, a, i, l) {
    var e = {
        COOL_OFF_DURATION_IN_DAYS: 4,
        VIEWS_BEFORE_COOL_OFF_IN_DAYS: 2,
        CLICKS_BEFORE_COOL_OFF: 1,
        MAX_DISMISSES: 1,
        MAX_CLICKS: 2,
        MAX_VIEWS_IN_DAYS: 4,
        COOL_OFF_START_STORAGE_KEY: o("WAWebNux").CoolOffPeriodKeys.DEFAULT,
        storageAccessors: c(),
      },
      s = function (t) {
        if (typeof t == "object" && t != null) {
          var e =
              typeof t.startDate == "string"
                ? r("WAWeb-moment")(t.startDate)
                : null,
            n = typeof t.duration == "number" ? t.duration : null;
          if (e != null && n != null) return { startDate: e, duration: n };
        }
      },
      u = (function () {
        function t(t, n) {
          ((this.key = o("WAWebNux").asCoolOffNuxType(t)),
            (this.config = babelHelpers.extends({}, e, n)),
            (this.nux = this.$1()),
            (this.coolOffData = this.$2()));
        }
        var n = t.prototype;
        return (
          (n.$3 = function () {
            return {
              viewDaysBeforeCoolOff: 0,
              totalViewDays: 0,
              clicks: 0,
              dismisses: 0,
              lastViewedDay: r("WAWeb-moment")(0),
            };
          }),
          (n.$1 = function () {
            var e = this.config.storageAccessors.getNuxOptions(this.key);
            if (e != null) {
              var t = typeof e.clicks == "number" ? e.clicks : null,
                n = typeof e.dismisses == "number" ? e.dismisses : null,
                o = typeof e.totalViewDays == "number" ? e.totalViewDays : null,
                a =
                  typeof e.viewDaysBeforeCoolOff == "number"
                    ? e.viewDaysBeforeCoolOff
                    : null,
                i =
                  typeof e.lastViewedDay == "string"
                    ? r("WAWeb-moment")(e.lastViewedDay)
                    : null;
              if (t != null && n != null && a != null && o != null && i != null)
                return {
                  clicks: t,
                  dismisses: n,
                  viewDaysBeforeCoolOff: a,
                  totalViewDays: o,
                  lastViewedDay: i,
                };
            }
            var l = this.$3();
            return (this.$4(l), l);
          }),
          (n.$2 = function () {
            var e = this.config.storageAccessors.getCoolOffData(
                this.config.COOL_OFF_START_STORAGE_KEY,
              ),
              t = s(e);
            return t != null ? t : this.$5(r("WAWeb-moment")(0));
          }),
          (n.$5 = function (t) {
            var e = {
              startDate: t,
              duration: this.config.COOL_OFF_DURATION_IN_DAYS,
            };
            return (
              this.config.storageAccessors.setCoolOffData(
                this.config.COOL_OFF_START_STORAGE_KEY,
                babelHelpers.extends({}, e, { startDate: e.startDate }),
              ),
              e
            );
          }),
          (n.$6 = function (t) {
            var e = this.$5(t);
            this.coolOffData = e;
          }),
          (n.$4 = function (t) {
            this.config.storageAccessors.setNuxOptions(
              this.key,
              babelHelpers.extends({}, t, { lastViewedDay: t.lastViewedDay }),
            );
          }),
          (n.$7 = function (t) {
            this.$4(Object.assign(this.nux, t));
          }),
          (n.$8 = function () {
            var e = o("WAWebCurrentMoment").getCurrentMoment(),
              t = e.diff(this.coolOffData.startDate, "days", !0);
            return t >= 0 && t < this.coolOffData.duration;
          }),
          (n.$9 = function (t) {
            if (this.config.metricField) {
              var e = {
                bannerType: this.config.metricField,
                bannerOperation: t,
              };
              (this.config.bannerId != null &&
                (e.bannerId = this.config.bannerId),
                new (o("WAWebBannerEventWamEvent").BannerEventWamEvent)(
                  e,
                ).commit());
            }
          }),
          (n.shouldShow = function () {
            var e = this.nux,
              t = e.clicks,
              n = e.dismisses,
              r = e.totalViewDays,
              o = this.config,
              a = o.MAX_CLICKS,
              i = o.MAX_DISMISSES,
              l = o.MAX_VIEWS_IN_DAYS;
            return r < l && n < i && t < a && !this.$8();
          }),
          (n.show = function () {
            var e = this.nux,
              t = e.lastViewedDay,
              n = e.totalViewDays,
              a = e.viewDaysBeforeCoolOff,
              i = o("WAWebCurrentMoment").getCurrentMoment();
            t.isSame(i, "day") ||
              (a++,
              n++,
              a === this.config.VIEWS_BEFORE_COOL_OFF_IN_DAYS &&
                ((a = 0), this.$6(r("WAWeb-moment")(i).add(1, "days"))),
              this.$7({
                viewDaysBeforeCoolOff: a,
                totalViewDays: n,
                lastViewedDay: i,
              }),
              this.$9(
                o("WAWebWamEnumBannerOperations").BANNER_OPERATIONS.SHOWN,
              ),
              this.config.logImpression && this.config.logImpression());
          }),
          (n.click = function () {
            var e = this.nux.clicks + 1;
            (e === this.config.CLICKS_BEFORE_COOL_OFF &&
              this.startCoolOffToday(),
              this.$7({ clicks: e }),
              this.$9(
                o("WAWebWamEnumBannerOperations").BANNER_OPERATIONS.CLICK,
              ));
          }),
          (n.dismiss = function () {
            (this.$7({ dismisses: this.nux.dismisses + 1 }),
              this.$6(o("WAWebCurrentMoment").getCurrentMoment()),
              this.$9(
                o("WAWebWamEnumBannerOperations").BANNER_OPERATIONS.DISMISS,
              ));
          }),
          (n.startCoolOffToday = function () {
            this.$6(o("WAWebCurrentMoment").getCurrentMoment());
          }),
          t
        );
      })();
    function c() {
      return {
        getNuxOptions: function (t) {
          return r("WAWebUserPrefsStore").getUser(t);
        },
        setNuxOptions: function (t, n) {
          r("WAWebUserPrefsStore").setUser(
            t,
            babelHelpers.extends({}, n, {
              lastViewedDay: n.lastViewedDay.toISOString(),
            }),
          );
        },
        getCoolOffData: function (t) {
          return r("WAWebUserPrefsStore").getUser(t);
        },
        setCoolOffData: function (t, n) {
          r("WAWebUserPrefsStore").setUser(
            t,
            babelHelpers.extends({}, n, {
              startDate: n.startDate.toISOString(),
            }),
          );
        },
      };
    }
    function d() {
      var e = Object.keys(o("WAWebNux").CoolOffPeriodKeys);
      e.forEach(function (e) {
        r("WAWebUserPrefsStore").setUser(o("WAWebNux").CoolOffPeriodKeys[e]);
      });
    }
    function m(e, t) {
      var n = new u(e, t);
      return n.shouldShow();
    }
    function p(e) {
      r("WAWebUserPrefsStore").setUser(o("WAWebNux").asCoolOffNuxType(e));
    }
    ((l.CoolOffNux = u),
      (l.resetCoolOffNuxDate = d),
      (l.shouldShowNUX = m),
      (l.resetNuxCoolOff = p));
  },
  98,
);
