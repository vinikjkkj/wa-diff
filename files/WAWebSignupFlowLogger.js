__d(
  "WAWebSignupFlowLogger",
  [
    "JSResourceForInteraction",
    "Promise",
    "WALogger",
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
      s,
      u = 7 * o("WATimeUtils").DAY_SECONDS,
      c = 30 * o("WATimeUtils").DAY_SECONDS;
    function d(e) {
      if (e != null) {
        var t = o("WATimeUtils").unixTime() - e;
        return t <= o("WATimeUtils").DAY_SECONDS
          ? o("WAWebWamEnumThreadCreationTime").THREAD_CREATION_TIME
              .LESS_THAN_1_DAY_AGO
          : t <= u
            ? o("WAWebWamEnumThreadCreationTime").THREAD_CREATION_TIME
                .LESS_THAN_7_DAYS_AGO
            : t <= c
              ? o("WAWebWamEnumThreadCreationTime").THREAD_CREATION_TIME
                  .LESS_THAN_30_DAYS_AGO
              : o("WAWebWamEnumThreadCreationTime").THREAD_CREATION_TIME
                  .MORE_THAN_30_DAYS_AGO;
      }
    }
    function m(e) {
      if (e == null || e === "") return 0;
      var t = e.replace(/@.*$/, ""),
        n = Number(t);
      return Number.isFinite(n) ? n : 0;
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
            var s = d(r);
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
        _.apply(this, arguments)
      );
    }
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
                businessPhoneNumber: m(o == null ? void 0 : o.user),
                businessLid: Number(e.user) || null,
              };
            } catch (t) {
              return {
                businessPhoneNumber: 0,
                businessLid: Number(e.user) || null,
              };
            }
          return { businessPhoneNumber: m(e.user), businessLid: null };
        })),
        g.apply(this, arguments)
      );
    }
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var a = t.businessWid,
            i = t.chatTimestamp,
            l = t.operation,
            u = t.signupId,
            c = a == null ? void 0 : a.toString(),
            d = yield (s || (s = n("Promise"))).all([
              f(a),
              c != null
                ? r("JSResourceForInteraction")("WAWebChatThreadLogging")
                    .__setRef("WAWebSignupFlowLogger")
                    .load()
                    .then(function (e) {
                      var t = e.getChatThreadIDHMAC;
                      return t(c);
                    })
                    .catch(function () {
                      return (
                        o("WALogger").WARN(
                          e ||
                            (e = babelHelpers.taggedTemplateLiteralLoose([
                              "[signup] getChatThreadIDHMAC failed",
                            ])),
                        ),
                        null
                      );
                    })
                : null,
            ]),
            m = d[0],
            _ = m.businessLid,
            g = m.businessPhoneNumber,
            h = d[1];
          return p({
            operation: l,
            signupId: u,
            businessPhoneNumber: g,
            businessLid: _,
            chatTimestamp: i,
            threadIdHmac: h,
          });
        })),
        y.apply(this, arguments)
      );
    }
    ((l.SIGNUP_USER_JOURNEY_OPERATION = o(
      "WAWebWamEnumSignupUserJourneyOperation",
    ).SIGNUP_USER_JOURNEY_OPERATION),
      (l.computeThreadCreationTime = d),
      (l.parseBusinessPhoneNumber = m),
      (l.logSignupFlowEvent = p),
      (l.logSignupFlowOp = h));
  },
  98,
);
