__d(
  "WAWebEventUtils",
  [
    "WALogger",
    "WATimeUtils",
    "WAWeb-moment",
    "WAWebABProps",
    "WAWebEventResponseCollection",
    "WAWebFrontendMsgGetters",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebProtobufsE2E.pb",
    "WAWebUserPrefsMeUser",
    "WAWebVoipOngoingCallCollection",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e) {
      return o("WATimeUtils").castToUnixTime(
        Math.min(o("WATimeUtils").MAX_INT, e),
      );
    }
    function c(e, t) {
      return t != null && t !== 0
        ? !o("WATimeUtils").isInFuture(u(t))
        : !o("WATimeUtils").isInFuture(u(e));
    }
    function d(e) {
      var t = u(e);
      return o("WATimeUtils").isInFuture(t)
        ? o("WATimeUtils").secondsUntil(t) < 1800
        : o("WATimeUtils").unixTime() - t < 1440 * 60;
    }
    function m(e) {
      var t = e.eventInvalidated,
        n = e.isEventCanceled,
        r = e.isEventPassed,
        o = e.isSentByMe;
      return t || n || (r && !o);
    }
    function p() {
      var e = o("WATimeUtils").unixTime(),
        t = 1800,
        n = 1440 * 60,
        r = e + n,
        a = Math.ceil(r / t) * t;
      return o("WATimeUtils").castToUnixTime(a);
    }
    function _(e) {
      var t = 3600;
      return o("WATimeUtils").castToUnixTime(e + 2 * t);
    }
    function f(e) {
      var t = r("WAWeb-moment")().format("YYYY-MM-DD"),
        n = e
          ? r("WAWeb-moment")().add(1, "year")
          : r("WAWeb-moment").unix(o("WATimeUtils").MAX_INT).subtract(2, "day"),
        a = n.format("YYYY-MM-DD");
      return [t, a];
    }
    function g(e) {
      if (e != null) return e.includes("/video/") ? "video" : "voice";
    }
    function h(e) {
      return g(e) === "video";
    }
    function y(e) {
      if (e.type !== o("WAWebMsgType").MSG_TYPE.EVENT_CREATION) return !1;
      var t = o("WAWebFrontendMsgGetters").getAsEventCreation(e);
      return !(t == null || t.isEventCanceled === !0);
    }
    function C(e) {
      var t = o("WAWebFrontendMsgGetters").getAsEventCreation(e);
      return t == null
        ? null
        : t.eventEndTime != null
          ? t.eventEndTime
          : t.eventStartTime != null
            ? t.eventStartTime + 1800
            : null;
    }
    function b(e, t) {
      var n = C(e);
      return n == null ? !0 : n <= t;
    }
    function v(e, t) {
      return y(e) ? !b(e, t) : !1;
    }
    function S(e) {
      try {
        var t,
          n = o(
            "WAWebEventResponseCollection",
          ).EventResponseCollection.getModelsArray(),
          r = n.filter(function (t) {
            var n;
            return (n = t.parentMsgKey) == null ? void 0 : n.equals(e.id);
          }),
          a = r.find(function (e) {
            return o("WAWebUserPrefsMeUser").isMeAccount(e.sender);
          });
        return (t = a == null ? void 0 : a.eventResponse) != null
          ? t
          : o("WAWebProtobufsE2E.pb")
              .Message$EventResponseMessage$EventResponseType.UNKNOWN;
      } catch (e) {
        return o("WAWebProtobufsE2E.pb")
          .Message$EventResponseMessage$EventResponseType.UNKNOWN;
      }
    }
    function R() {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            var t = o("WATimeUtils").unixTime(),
              n = o("WAWebABProps").getABPropConfigValue(
                "schedule_call_show_upcoming_banner_time_interval_mins",
              ),
              r = n * 60,
              a = o("WAWebMsgCollection").MsgCollection.getModelsArray(),
              i = o(
                "WAWebVoipOngoingCallCollection",
              ).WAWebVoipOngoingCallCollection.getModelsArray(),
              l = a
                .filter(function (e) {
                  if (!v(e, t)) return !1;
                  var n = o("WAWebFrontendMsgGetters").getAsEventCreation(e);
                  if (n == null || n.eventJoinLink == null) return !1;
                  if (n.eventStartTime != null) {
                    var a = n.eventStartTime - t;
                    if (a > r) return !1;
                  }
                  var l = n.eventJoinLink,
                    s = i.some(function (e) {
                      if (!o("WAWebMsgGetters").getIsCallLink(e)) return !1;
                      var t = o("WAWebMsgGetters").getCallLinkToken(e);
                      return t == null ? !1 : l.includes(t);
                    });
                  if (s) return !1;
                  var u = S(e);
                  return (
                    u !==
                    o("WAWebProtobufsE2E.pb")
                      .Message$EventResponseMessage$EventResponseType.NOT_GOING
                  );
                })
                .sort(function (e, t) {
                  var n,
                    r,
                    a = o("WAWebFrontendMsgGetters").getAsEventCreation(e),
                    i = o("WAWebFrontendMsgGetters").getAsEventCreation(t),
                    l =
                      (n = a == null ? void 0 : a.eventStartTime) != null
                        ? n
                        : 0,
                    s =
                      (r = i == null ? void 0 : i.eventStartTime) != null
                        ? r
                        : 0;
                  return l - s;
                });
            return l;
          } catch (t) {
            return (
              o("WALogger").WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "Failed to fetch upcoming events: ",
                    "",
                  ])),
                String(t),
              ),
              []
            );
          }
        })),
        L.apply(this, arguments)
      );
    }
    function E() {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            var e = o("WATimeUtils").unixTime(),
              t = o("WAWebMsgCollection").MsgCollection.getModelsArray(),
              n = t
                .filter(function (t) {
                  if (!v(t, e)) return !1;
                  var n = o("WAWebFrontendMsgGetters").getAsEventCreation(t);
                  return !(n == null || n.eventJoinLink == null);
                })
                .sort(function (e, t) {
                  var n,
                    r,
                    a = o("WAWebFrontendMsgGetters").getAsEventCreation(e),
                    i = o("WAWebFrontendMsgGetters").getAsEventCreation(t),
                    l =
                      (n = a == null ? void 0 : a.eventStartTime) != null
                        ? n
                        : 0,
                    s =
                      (r = i == null ? void 0 : i.eventStartTime) != null
                        ? r
                        : 0;
                  return l - s;
                });
            return n;
          } catch (e) {
            return (
              o("WALogger").WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "Failed to fetch upcoming events: ",
                    "",
                  ])),
                String(e),
              ),
              []
            );
          }
        })),
        k.apply(this, arguments)
      );
    }
    ((l.eventTimeToUnixTime = u),
      (l.shouldShowEventAsPassed = c),
      (l.eventIsJoinable = d),
      (l.shouldDisableInteractionForEvent = m),
      (l.getInitialEventStartTime = p),
      (l.getInitialEventEndTime = _),
      (l.getEventDateBoundaries = f),
      (l.getEventCallLinkType = g),
      (l.isEventVideoCallLink = h),
      (l.getUpcomingEventsForCallsTab = R),
      (l.getUpcomingEvents = E));
  },
  98,
);
