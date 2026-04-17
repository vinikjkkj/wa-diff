__d(
  "WAWebSignupFlowLogger",
  [
    "JSResourceForInteraction",
    "Promise",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebFsApiSignupFlowWamEvent",
    "WAWebPsApiSignupFlowWamEvent",
    "WAWebUnifiedSession",
    "WAWebWamEnumSignupUserJourneyOperation",
    "WAWebWamEnumThreadCreationTime",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 7 * o("WATimeUtils").DAY_SECONDS,
      u = 30 * o("WATimeUtils").DAY_SECONDS;
    function c(e) {
      if (e != null) {
        var t = o("WATimeUtils").unixTime() - e;
        return t <= o("WATimeUtils").DAY_SECONDS
          ? o("WAWebWamEnumThreadCreationTime").THREAD_CREATION_TIME
              .LESS_THAN_1_DAY_AGO
          : t <= s
            ? o("WAWebWamEnumThreadCreationTime").THREAD_CREATION_TIME
                .LESS_THAN_7_DAYS_AGO
            : t <= u
              ? o("WAWebWamEnumThreadCreationTime").THREAD_CREATION_TIME
                  .LESS_THAN_30_DAYS_AGO
              : o("WAWebWamEnumThreadCreationTime").THREAD_CREATION_TIME
                  .MORE_THAN_30_DAYS_AGO;
      }
    }
    function d(e) {
      if (e == null || e === "") return 0;
      var t = e.replace(/@.*$/, ""),
        n = Number(t);
      return Number.isFinite(n) ? n : 0;
    }
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.businessLid,
            n = e.businessPhoneNumber,
            r = e.chatTimestamp,
            a = e.operation,
            i = e.signupId,
            l = e.threadIdHmac;
          if (
            o("WAWebABProps").getABPropConfigValue(
              "inapp_signup_m1_logging_enabled",
            )
          ) {
            var s = c(r);
            new (o("WAWebPsApiSignupFlowWamEvent").PsApiSignupFlowWamEvent)({
              signupUserJourneyOperation: a,
              businessPhoneNumber: n != null ? n : 0,
              businessLid: t != null ? t : void 0,
              signupDeepLinkId: i != null ? i : "",
              threadCreationTime: s != null ? s : void 0,
            }).commit();
            var u = o(
              "WAWebUnifiedSession",
            ).UnifiedSessionManager.getSessionId();
            new (o("WAWebFsApiSignupFlowWamEvent").FsApiSignupFlowWamEvent)({
              signupUserJourneyOperation: a,
              threadCreationTime: s != null ? s : void 0,
              threadIdHmac: l != null ? l : void 0,
              unifiedSessionId: u != null ? u : void 0,
            }).commit();
          }
        })),
        p.apply(this, arguments)
      );
    }
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (e == null) return { businessPhoneNumber: 0, businessLid: null };
          if (e.isLid())
            try {
              var t = yield r("JSResourceForInteraction")(
                  "WAWebLidMigrationUtils",
                )
                  .__setRef("WAWebSignupFlowLogger")
                  .load(),
                n = t.toPn,
                o = n(e);
              return {
                businessPhoneNumber: d(o == null ? void 0 : o.user),
                businessLid: Number(e.user) || null,
              };
            } catch (t) {
              return {
                businessPhoneNumber: 0,
                businessLid: Number(e.user) || null,
              };
            }
          return { businessPhoneNumber: d(e.user), businessLid: null };
        })),
        f.apply(this, arguments)
      );
    }
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var o = t.businessWid,
            a = t.chatTimestamp,
            i = t.operation,
            l = t.signupId,
            s = o == null ? void 0 : o.toString(),
            u = yield (e || (e = n("Promise"))).all([
              _(o),
              s != null
                ? r("JSResourceForInteraction")("WAWebChatThreadLogging")
                    .__setRef("WAWebSignupFlowLogger")
                    .load()
                    .then(function (e) {
                      var t = e.getChatThreadIDHMAC;
                      return t(s);
                    })
                : null,
            ]),
            c = u[0],
            d = c.businessLid,
            p = c.businessPhoneNumber,
            f = u[1];
          return m({
            operation: i,
            signupId: l,
            businessPhoneNumber: p,
            businessLid: d,
            chatTimestamp: a,
            threadIdHmac: f,
          });
        })),
        h.apply(this, arguments)
      );
    }
    ((l.SIGNUP_USER_JOURNEY_OPERATION = o(
      "WAWebWamEnumSignupUserJourneyOperation",
    ).SIGNUP_USER_JOURNEY_OPERATION),
      (l.computeThreadCreationTime = c),
      (l.parseBusinessPhoneNumber = d),
      (l.logSignupFlowEvent = m),
      (l.logSignupFlowOp = g));
  },
  98,
);
