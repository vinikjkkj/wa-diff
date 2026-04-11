__d(
  "WAWebClock",
  [
    "fbt",
    "$InternalEnum",
    "WALogger",
    "WAWeb-moment",
    "WAWebClockDurationFormatters",
    "WAWebClockPaymentStrings",
    "WAWebEventEmitter",
    "WAWebL10N",
    "WAWebL10NConstants",
    "WAWebL10nGetRenderedLocale",
    "WAWebUserPrefsLocales",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d = 6e4,
      m = 1e3,
      p = ["fi", "id", "ms", "ms-my"],
      _ = "America/Belem",
      f = "America/Porto_Velho",
      g = "skew_change",
      h = "hour24_format_change",
      y = -1,
      C = n("$InternalEnum")({
        DeviceTimeFormat: 2,
        PhoneTimeFormat: 1,
        LocaleTimeFormat: 0,
      }),
      b = (function (t) {
        function n() {
          var n;
          if (
            ((n = t.call(this) || this),
            (n.$ClockImpl$p_1 = !1),
            (n.skewMS = 0),
            (n.skew = 0),
            Intl.DateTimeFormat && Intl.DateTimeFormat().resolvedOptions)
          ) {
            var r = Intl.DateTimeFormat().resolvedOptions().timeZone;
            switch (
              (r
                ? o("WALogger").LOG(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "Intl.DateTimeFormat().resolvedOptions().timeZone is ",
                        "",
                      ])),
                    r,
                  )
                : o("WALogger").LOG(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "Intl.DateTimeFormat().resolvedOptions().timeZone missing",
                      ])),
                  ),
              r)
            ) {
              case "America/Sao_Paulo":
                n.timeZoneHardCode = _;
                break;
              case "America/Campo_Grande":
              case "America/Cuiaba":
                n.timeZoneHardCode = f;
                break;
            }
          }
          return (n.initIs24HourBasedOnLocale(), n);
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.getIs24Hour = function () {
            return this.$ClockImpl$p_1;
          }),
          (a.setIs24Hour = function (t, n) {
            if (n !== C.LocaleTimeFormat && t != null) {
              var e = this.getIs24Hour();
              (n === C.DeviceTimeFormat
                ? o("WAWebUserPrefsLocales").setDeviceHour24(t)
                : n === C.PhoneTimeFormat &&
                  o("WAWebUserPrefsLocales").setPhoneHour24(t),
                !(
                  n === C.PhoneTimeFormat &&
                  o("WAWebUserPrefsLocales").getDeviceHour24() != null
                ) && ((this.$ClockImpl$p_1 = t), e !== t && this.trigger(h)));
            }
          }),
          (a.initIs24HourBasedOnLocale = function () {
            var e = o("WAWebUserPrefsLocales").getDeviceHour24(),
              t = o("WAWebUserPrefsLocales").getPhoneHour24();
            e != null
              ? this.setIs24Hour(e, C.DeviceTimeFormat)
              : t != null
                ? this.setIs24Hour(t, C.PhoneTimeFormat)
                : (this.$ClockImpl$p_1 = o(
                    "WAWebL10NConstants",
                  ).LOCALES_THAT_PREFER_24HOUR_TIME.has(
                    r("WAWebL10N").getNormalizedLocale(),
                  ));
          }),
          (a.setSkew = function (t) {
            Math.abs(t) > d &&
              o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "Setting large clockskew: ",
                    "ms",
                  ])),
                t,
              );
            var e = this.skewMS;
            ((this.skewMS = t),
              (this.skew = Math.round(t / 1e3)),
              Math.abs(e - this.skewMS) > m && this.trigger(g));
          }),
          (a.getSkew = function () {
            return this.skew;
          }),
          (a.getServerTimeMs = function () {
            return Date.now() + this.skewMS;
          }),
          (a.getServerTime = function () {
            return new Date(this.getServerTimeMs());
          }),
          (a.convertGlobalToLocalUnixTime = function (t) {
            return t + this.skew;
          }),
          (a.timePassedFromNowMoment = function (t, n) {
            var e = n.omitSuffix;
            return r("WAWeb-moment").unix(t).fromNow(e);
          }),
          (a.timePassedFromNowIntl = function (t, n) {
            var e = n.style,
              o = r("WAWeb-moment")(),
              a = r("WAWeb-moment").unix(t),
              i = a.diff(o, "days"),
              l = a.diff(o, "hours"),
              s = a.diff(o, "minutes"),
              u = a.diff(o, "seconds"),
              c = r("WAWebL10N").getNormalizedLocale(),
              d = new Intl.RelativeTimeFormat(c, { style: e });
            return i !== 0
              ? d.format(i, "day")
              : l !== 0
                ? d.format(l, "hour")
                : s !== 0
                  ? d.format(s, "minute")
                  : d.format(u, "second");
          }),
          (a.relativeStr = function (t) {
            var e = t + this.skew;
            return e >= r("WAWeb-moment")().startOf("day").unix()
              ? this.$ClockImpl$p_2(e)
              : this.$ClockImpl$p_3(e, !1);
          }),
          (a.relativeDateStr = function (t) {
            return this.$ClockImpl$p_3(t + this.skew, !1);
          }),
          (a.relativeDateAndTimeStr = function (t) {
            return this.$ClockImpl$p_3(t + this.skew, !0);
          }),
          (a.monthStr = function (t) {
            var e = t + this.skew,
              n = e * 1e3;
            return e >= r("WAWeb-moment")().startOf("month").unix() &&
              e <= r("WAWeb-moment")().endOf("month").unix()
              ? s._(/*BTDS*/ "This month")
              : e >= r("WAWeb-moment")().startOf("year").unix() &&
                  e <= r("WAWeb-moment")().endOf("year").unix()
                ? Intl.DateTimeFormat(r("WAWeb-moment").locale(), {
                    month: "long",
                  }).format(n)
                : Intl.DateTimeFormat(r("WAWeb-moment").locale(), {
                    month: "long",
                    year: "numeric",
                  }).format(n);
          }),
          (a.monthYearStr = function (t) {
            var e = t + this.skew,
              n = e * 1e3;
            return Intl.DateTimeFormat(r("WAWeb-moment").locale(), {
              month: "short",
              year: "numeric",
            }).format(n);
          }),
          (a.timeStr = function (t) {
            var e = this.getIs24Hour();
            if (this.shouldUseIntlDateTimeFormat()) {
              var n = (t + this.skew) * 1e3,
                o = { hour12: !e, hour: "numeric", minute: "numeric" },
                a = { year: "numeric", month: "numeric", day: "numeric" };
              this.timeZoneHardCode != null &&
                ((o = babelHelpers.extends({}, o, {
                  timeZone: this.timeZoneHardCode,
                })),
                (a = babelHelpers.extends({}, a, {
                  timeZone: this.timeZoneHardCode,
                })));
              var i = Intl.DateTimeFormat(r("WAWeb-moment").locale(), o).format(
                  n,
                ),
                l = Intl.DateTimeFormat(r("WAWeb-moment").locale(), a).format(
                  n,
                );
              return i + ", " + l;
            }
            return r("WAWeb-moment")
              .unix(t + this.skew)
              .format(e ? "HH" + this.$ClockImpl$p_4() + "mm, l" : "LT, l");
          }),
          (a.timestampStr = function (t) {
            return this.$ClockImpl$p_2(t + this.skew);
          }),
          (a.timestampStrFormat = function () {
            return this.getIs24Hour()
              ? "HH" + this.$ClockImpl$p_4() + "mm"
              : "LT";
          }),
          (a.timestampHour = function (t) {
            var e = t + this.skew,
              n = r("WAWeb-moment").unix(e).hour();
            return this.getIs24Hour() ? n : n % 12;
          }),
          (a.textStatusExpiryStr = function (t) {
            var e = t + this.skew,
              n = this.$ClockImpl$p_2(e),
              r = this.$ClockImpl$p_3(e, !1);
            return s._(/*BTDS*/ "Until {date} at {time}", [
              s._param("date", r),
              s._param("time", n),
            ]);
          }),
          (a.newsletterDescriptionCreatedStr = function (t) {
            var e = this.daysDeltaAbs(t),
              n = t + this.skew,
              r = this.$ClockImpl$p_2(n);
            if (e === 0)
              return s._(/*BTDS*/ "Created today at {time}", [
                s._param("time", r),
              ]);
            if (e === 1)
              return s._(/*BTDS*/ "Created yesterday at {time}", [
                s._param("time", r),
              ]);
            if (e < 7) {
              var o = this.$ClockImpl$p_3(n, !1);
              return s._(/*BTDS*/ "Created {day} at {time}", [
                s._param("day", o),
                s._param("time", r),
              ]);
            }
            var a = this.$ClockImpl$p_3(n, !1);
            return s._(/*BTDS*/ "Created {date} at {time}", [
              s._param("date", a),
              s._param("time", r),
            ]);
          }),
          (a.broadcastCreatedStr = function (t) {
            var e = t + this.skew,
              n = this.$ClockImpl$p_2(e),
              r = this.$ClockImpl$p_5(e);
            return s._(/*BTDS*/ "Created {monthDay}, {time}", [
              s._param("monthDay", r),
              s._param("time", n),
            ]);
          }),
          (a.broadcastCampaignCreatedStr = function (t) {
            var e = t + this.skew,
              n = this.$ClockImpl$p_2(e),
              r = this.$ClockImpl$p_5(e);
            return s._(/*BTDS*/ "Created on {monthDay}, {time}", [
              s._param("monthDay", r),
              s._param("time", n),
            ]);
          }),
          (a.createdStr = function (t) {
            var e = this.daysDeltaAbs(t),
              n = t + this.skew,
              r = this.$ClockImpl$p_2(n);
            if (e === 0)
              return s._(/*BTDS*/ "Created today at {time}", [
                s._param("time", r),
              ]);
            if (e === 1)
              return s._(/*BTDS*/ "Created yesterday at {time}", [
                s._param("time", r),
              ]);
            if (e < 7) {
              var o = this.$ClockImpl$p_3(n, !1);
              return s._(/*BTDS*/ "Created {day} at {time}", [
                s._param("day", o),
                s._param("time", r),
              ]);
            }
            var a = this.$ClockImpl$p_3(n, !1);
            return s._(/*BTDS*/ "Created {date} at {time}", [
              s._param("date", a),
              s._param("time", r),
            ]);
          }),
          (a.addedStr = function (t) {
            var e = this.daysDeltaAbs(t),
              n = t + this.skew,
              r = this.$ClockImpl$p_2(n);
            if (e === 0)
              return s._(/*BTDS*/ "Added today at {time}", [
                s._param("time", r),
              ]);
            if (e === 1)
              return s._(/*BTDS*/ "Added yesterday at {time}", [
                s._param("time", r),
              ]);
            if (e < 7) {
              var o = this.$ClockImpl$p_3(n, !1);
              return s._(/*BTDS*/ "Added {day} at {time}", [
                s._param("day", o),
                s._param("time", r),
              ]);
            }
            var a = this.$ClockImpl$p_3(n, !1);
            return s._(/*BTDS*/ "Added {date} at {time}", [
              s._param("date", a),
              s._param("time", r),
            ]);
          }),
          (a.updatedStr = function (t) {
            var e = this.daysDeltaAbs(t),
              n = t + this.skew,
              r = this.$ClockImpl$p_2(n);
            if (e === 0)
              return s._(/*BTDS*/ "Updated today at {time}", [
                s._param("time", r),
              ]);
            if (e === 1)
              return s._(/*BTDS*/ "Updated yesterday at {time}", [
                s._param("time", r),
              ]);
            if (e < 7) {
              var o = this.$ClockImpl$p_3(n, !1);
              return s._(/*BTDS*/ "Updated {day} at {time}", [
                s._param("day", o),
                s._param("time", r),
              ]);
            }
            var a = this.$ClockImpl$p_3(n, !1);
            return s._(/*BTDS*/ "Updated {date} at {time}", [
              s._param("date", a),
              s._param("time", r),
            ]);
          }),
          (a.groupCreatedByStr = function (t, n, r) {
            var e = this.daysDeltaAbs(t),
              o = t + this.skew,
              a = this.$ClockImpl$p_2(o);
            if (e === 0)
              return r
                ? s._(/*BTDS*/ "Group created by you, today at {time}", [
                    s._param("time", a),
                  ])
                : s._(/*BTDS*/ "Group created by {name}, today at {time}", [
                    s._param("name", n),
                    s._param("time", a),
                  ]);
            if (e === 1)
              return r
                ? s._(/*BTDS*/ "Group created by you, yesterday at {time}", [
                    s._param("time", a),
                  ])
                : s._(/*BTDS*/ "Group created by {name}, yesterday at {time}", [
                    s._param("name", n),
                    s._param("time", a),
                  ]);
            if (e < 7) {
              var i = this.$ClockImpl$p_6(t);
              return r
                ? s._(/*BTDS*/ "Group created by you, {on_day} at {time}", [
                    s._param("on_day", i),
                    s._param("time", a),
                  ])
                : s._(/*BTDS*/ "Group created by {name}, {on_day} at {time}", [
                    s._param("name", n),
                    s._param("on_day", i),
                    s._param("time", a),
                  ]);
            }
            var l = this.$ClockImpl$p_3(o, !1);
            return r
              ? s._(/*BTDS*/ "Group created by you, on {date} at {time}", [
                  s._param("date", l),
                  s._param("time", a),
                ])
              : s._(/*BTDS*/ "Group created by {name}, on {date} at {time}", [
                  s._param("name", n),
                  s._param("date", l),
                  s._param("time", a),
                ]);
          }),
          (a.createdByOnDateStr = function (t, n, r, o) {
            var e = this.$ClockImpl$p_7(t);
            return n
              ? s._(/*BTDS*/ "Created by you on {date}", [s._param("date", e)])
              : r
                ? s._(/*BTDS*/ "Created by {name} on {date}", [
                    s._param("name", o),
                    s._param("date", e),
                  ])
                : s._(/*BTDS*/ "Created on {date}", [s._param("date", e)]);
          }),
          (a.groupCreatedStr = function (t, n, r) {
            if (t == null || isNaN(t))
              return r || n == null || n === ""
                ? null
                : s._(/*BTDS*/ "Created by {name}", [s._param("name", n)]);
            var e = this.daysDeltaAbs(t),
              o = t + this.skew;
            if (e === 0)
              return r || n == null || n === ""
                ? s._(/*BTDS*/ "Created today")
                : s._(/*BTDS*/ "Created today by {name}", [
                    s._param("name", n),
                  ]);
            if (e === 1)
              return r || n == null || n === ""
                ? s._(/*BTDS*/ "Created yesterday")
                : s._(/*BTDS*/ "Created yesterday by {name}", [
                    s._param("name", n),
                  ]);
            if (e < 7) {
              var a = this.$ClockImpl$p_6(t);
              return r || n == null || n === ""
                ? s._(/*BTDS*/ "Created {on_day}", [s._param("on_day", a)])
                : s._(/*BTDS*/ "Created {on_day} by {name}", [
                    s._param("on_day", a),
                    s._param("name", n),
                  ]);
            }
            var i = this.$ClockImpl$p_3(o, !1);
            return r || n == null || n === ""
              ? s._(/*BTDS*/ "Created {date}", [s._param("date", i)])
              : s._(/*BTDS*/ "Created {date} by {name}", [
                  s._param("date", i),
                  s._param("name", n),
                ]);
          }),
          (a.suggestedOnDateStr = function (t) {
            var e = r("WAWeb-moment").unix(t).format("l");
            return s._(/*BTDS*/ "Suggested on {date}", [s._param("date", e)]);
          }),
          (a.communityCreatedByStr = function (t, n, r) {
            var e = this.daysDeltaAbs(t),
              o = t + this.skew,
              a = this.$ClockImpl$p_2(o);
            if (e === 0)
              return r
                ? s._(/*BTDS*/ "Created by you, today at {time}", [
                    s._param("time", a),
                  ])
                : s._(/*BTDS*/ "Created by {name}, today at {time}", [
                    s._param("name", n),
                    s._param("time", a),
                  ]);
            if (e === 1)
              return r
                ? s._(/*BTDS*/ "Created by you, yesterday at {time}", [
                    s._param("time", a),
                  ])
                : s._(/*BTDS*/ "Created by {name}, yesterday at {time}", [
                    s._param("name", n),
                    s._param("time", a),
                  ]);
            if (e < 7) {
              var i = this.$ClockImpl$p_6(t);
              return r
                ? s._(/*BTDS*/ "Created by you, {on-day} at {time}", [
                    s._param("on-day", i),
                    s._param("time", a),
                  ])
                : s._(/*BTDS*/ "Created by {name}, {on-day} at {time}", [
                    s._param("name", n),
                    s._param("on-day", i),
                    s._param("time", a),
                  ]);
            }
            var l = this.$ClockImpl$p_3(o, !1);
            return r
              ? s._(/*BTDS*/ "Created by you, on {date} at {time}", [
                  s._param("date", l),
                  s._param("time", a),
                ])
              : s._(/*BTDS*/ "Created by {name}, on {date} at {time}", [
                  s._param("name", n),
                  s._param("date", l),
                  s._param("time", a),
                ]);
          }),
          (a.statusTimePassedString = function (t) {
            try {
              return this.timePassedFromNowIntl(t, { style: "long" });
            } catch (e) {
              return this.timePassedFromNowMoment(t, { omitSuffix: !1 });
            }
          }),
          (a.$ClockImpl$p_6 = function (t) {
            var e = t + this.skew;
            return o("WAWebClockPaymentStrings").dayNameStr(e);
          }),
          (a.untilStr = function (t) {
            return this.$ClockImpl$p_8(
              t,
              s._(/*BTDS*/ "Always"),
              function (e) {
                return s._(/*BTDS*/ "Until today at {time}", [
                  s._param("time", e),
                ]);
              },
              function (e) {
                return s._(/*BTDS*/ "Until tomorrow at {time}", [
                  s._param("time", e),
                ]);
              },
              function (e, t) {
                return s._(/*BTDS*/ "Until {day} at {time}", [
                  s._param("day", e),
                  s._param("time", t),
                ]);
              },
              function (e, t) {
                return s._(/*BTDS*/ "Until {date} at {time}", [
                  s._param("date", e),
                  s._param("time", t),
                ]);
              },
            );
          }),
          (a.$ClockImpl$p_8 = function (t, n, r, o, a, i) {
            if (t === y) return n;
            var e = this.daysDeltaAbs(t),
              l = t + this.skew,
              s = this.$ClockImpl$p_2(l);
            if (e === 0) return r(s);
            if (e === 1) return o(s);
            if (e < 7) {
              var u = this.$ClockImpl$p_3(l, !1);
              return a(u, s);
            }
            var c = this.$ClockImpl$p_3(l, !1);
            return i(c, s);
          }),
          (a.mutedUntilStr = function (t) {
            return this.$ClockImpl$p_8(
              t,
              s._(/*BTDS*/ "Muted always"),
              function (e) {
                return s._(/*BTDS*/ "Muted until today at {time}", [
                  s._param("time", e),
                ]);
              },
              function (e) {
                return s._(/*BTDS*/ "Muted until tomorrow at {time}", [
                  s._param("time", e),
                ]);
              },
              function (e, t) {
                return s._(/*BTDS*/ "Muted until {day} at {time}", [
                  s._param("day", e),
                  s._param("time", t),
                ]);
              },
              function (e, t) {
                return s._(/*BTDS*/ "Muted until {date} at {time}", [
                  s._param("date", e),
                  s._param("time", t),
                ]);
              },
            );
          }),
          (a.lastSeenStr = function (t) {
            var e = this.daysDeltaAbs(t),
              n = t + this.skew,
              r = this.$ClockImpl$p_2(n);
            if (e === 0)
              return s._(/*BTDS*/ "last seen today at {time}", [
                s._param("time", r),
              ]);
            if (e === 1)
              return s._(/*BTDS*/ "last seen yesterday at {time}", [
                s._param("time", r),
              ]);
            if (e < 7) {
              var o = this.$ClockImpl$p_3(n, !1);
              return s._(/*BTDS*/ "last seen {date} at {time}", [
                s._param("date", o),
                s._param("time", r),
              ]);
            }
            var a = this.$ClockImpl$p_3(n, !1);
            return s._(/*BTDS*/ "last seen {date} at {time}", [
              s._param("date", a),
              s._param("time", r),
            ]);
          }),
          (a.daysDeltaAbs = function (t, n) {
            return o("WAWebClockDurationFormatters").daysDeltaAbs(t, n);
          }),
          (a.durationStr = function (t) {
            return o("WAWebClockDurationFormatters").durationStr(t);
          }),
          (a.callDurationStr = function (t) {
            return o("WAWebClockDurationFormatters").callDurationStr(t);
          }),
          (a.callDurationStrSimple = function (t) {
            return o("WAWebClockDurationFormatters").callDurationStrSimple(t);
          }),
          (a.relativeShortStr = function (t) {
            return o("WAWebClockDurationFormatters").relativeShortStr(t);
          }),
          (a.timeLeftStr = function (t) {
            return o("WAWebClockDurationFormatters").timeLeftStr(t);
          }),
          (a.shortDurationString = function (t) {
            return o("WAWebClockDurationFormatters").shortDurationString(t);
          }),
          (a.enforcementTimeLeftStr = function (t) {
            return o("WAWebClockDurationFormatters").enforcementTimeLeftStr(t);
          }),
          (a.paymentTimestampStr = function (t) {
            var e = t + this.skew;
            return o("WAWebClockPaymentStrings").paymentTimestampStr(e);
          }),
          (a.pastParticipantOnDateAtTime = function (t, n) {
            var e = this.daysDeltaAbs(t),
              r = t + this.skew,
              o = this.$ClockImpl$p_2(r);
            if (e === 0)
              return s._(/*BTDS*/ "{action} today at {time}", [
                s._param("action", n),
                s._param("time", o),
              ]);
            if (e === 1)
              return s._(/*BTDS*/ "{action} yesterday at {time}", [
                s._param("action", n),
                s._param("time", o),
              ]);
            var a = this.$ClockImpl$p_3(r, !1);
            return s._(/*BTDS*/ "{action} {date} at {time}", [
              s._param("action", n),
              s._param("date", a),
              s._param("time", o),
            ]);
          }),
          (a.membershipApprovalRequestSectionDate = function (t) {
            var e = this.daysDeltaAbs(t),
              n = t + this.skew;
            if (e === 0) return { key: "today", date: s._(/*BTDS*/ "Today") };
            if (e === 1)
              return { date: s._(/*BTDS*/ "Yesterday"), key: "yesterday" };
            var o = r("WAWeb-moment").unix(n).format("LL");
            return { date: o, key: o };
          }),
          (a.dsaDisplayDate = function (t) {
            if (this.shouldUseIntlDateTimeFormat()) {
              var e = (t + this.skew) * 1e3,
                n = { year: "numeric", month: "short", day: "numeric" };
              return Intl.DateTimeFormat(r("WAWeb-moment").locale(), n).format(
                e,
              );
            }
            return r("WAWeb-moment")
              .unix(t + this.skew)
              .format("ll");
          }),
          (a.periodCoveredDateStr = function (t, n) {
            var e = r("WAWeb-moment").unix(n),
              o = r("WAWeb-moment").unix(t),
              a = this.$ClockImpl$p_9();
            return o.format(a) + " - " + e.format(a);
          }),
          (a.lastUpdatedDateStr = function (t) {
            var e = r("WAWeb-moment").unix(t),
              n = this.$ClockImpl$p_9(),
              o = this.timestampStrFormat();
            return e.format(n + ", " + o);
          }),
          (a.$ClockImpl$p_9 = function () {
            switch (
              o("WAWebL10nGetRenderedLocale").WAWebL10nGetRenderedLocale()
            ) {
              case "de_DE":
              case "sk_SK":
                return "Do MMM";
              default:
                return "DD MMM";
            }
          }),
          (a.$ClockImpl$p_2 = function (t) {
            var e = this.getIs24Hour();
            if (this.shouldUseIntlDateTimeFormat()) {
              var n = { hour12: !e, hour: "numeric", minute: "numeric" };
              this.timeZoneHardCode != null &&
                (n = babelHelpers.extends({}, n, {
                  timeZone: this.timeZoneHardCode,
                }));
              var o = Intl.DateTimeFormat(r("WAWeb-moment").locale(), n).format(
                t * 1e3,
              );
              return e ? o.replace(/^24/, "00") : o.replace(/^0/, "12");
            }
            return r("WAWeb-moment").unix(t).format(this.timestampStrFormat());
          }),
          (a.$ClockImpl$p_7 = function (t) {
            if (this.shouldUseIntlDateTimeFormat()) {
              var e = { year: "numeric", month: "numeric", day: "numeric" };
              this.timeZoneHardCode != null &&
                (e = babelHelpers.extends({}, e, {
                  timeZone: this.timeZoneHardCode,
                }));
              var n = Intl.DateTimeFormat(r("WAWeb-moment").locale(), e).format(
                t * 1e3,
              );
              return n;
            }
            return r("WAWeb-moment").unix(t).format("l");
          }),
          (a.$ClockImpl$p_5 = function (t) {
            if (this.shouldUseIntlDateTimeFormat()) {
              var e = { month: "short", day: "numeric" };
              return (
                this.timeZoneHardCode != null &&
                  (e = babelHelpers.extends({}, e, {
                    timeZone: this.timeZoneHardCode,
                  })),
                Intl.DateTimeFormat(r("WAWeb-moment").locale(), e).format(
                  t * 1e3,
                )
              );
            }
            return r("WAWeb-moment").unix(t).format("MMM D");
          }),
          (a.$ClockImpl$p_3 = function (t, n) {
            var e = r("WAWeb-moment")().startOf("day"),
              o = r("WAWeb-moment").unix(t).startOf("day"),
              a = e.diff(o, "days"),
              i = this.$ClockImpl$p_2(t);
            if (a === 0)
              return n
                ? s._(/*BTDS*/ "Today at {time}", [s._param("time", i)])
                : s._(/*BTDS*/ "Today");
            if (a === 1)
              return n
                ? s._(/*BTDS*/ "Yesterday at {time}", [s._param("time", i)])
                : s._(/*BTDS*/ "Yesterday");
            if (!n && Math.abs(a) < 7)
              return r("WAWeb-moment").unix(t).format("dddd");
            var l = this.$ClockImpl$p_7(t);
            return n
              ? s._(/*BTDS*/ "{date} at {time}", [
                  s._param("date", l),
                  s._param("time", i),
                ])
              : l;
          }),
          (a.$ClockImpl$p_4 = function () {
            var e = r("WAWeb-moment").locale();
            return p.includes(e) ? "." : ":";
          }),
          (a.shouldUseIntlDateTimeFormat = function () {
            return (
              Intl.DateTimeFormat &&
              !o("WAWebL10NConstants").LOCALE_DATE_TIME_CUSTOMIZATIONS[
                r("WAWeb-moment").locale()
              ] &&
              !o("WAWebL10NConstants").SHOULD_USE_MOMENT_LOCALE_FORMAT.has(
                r("WAWeb-moment").locale(),
              )
            );
          }),
          (a.tryAgainInStr = function (t) {
            return o("WAWebClockDurationFormatters").tryAgainInStr(t);
          }),
          n
        );
      })(r("WAWebEventEmitter")),
      v = new b();
    ((l.SKEW_CHANGE_EVENT = g),
      (l.HOUR24_FORMAT_CHANGE_EVENT = h),
      (l.MUTE_ALWAYS_EXPIRATION_SENTINEL = y),
      (l.TimeFormatSource = C),
      (l.Clock = v));
  },
  226,
);
