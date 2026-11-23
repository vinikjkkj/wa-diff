__d(
  "WAWebSignupFlowLogger",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebChatThreadLogging",
    "WAWebFsApiSignupFlowWamEvent",
    "WAWebPsApiSignupFlowWamEvent",
    "WAWebUnifiedSession",
    "WAWebWamEnumSignupUserJourneyOperation",
    "WAWebWamEnumThreadCreationTime",
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
    async function m(e) {
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
        var u = o("WAWebUnifiedSession").UnifiedSessionManager.getSessionId();
        new (o("WAWebFsApiSignupFlowWamEvent").FsApiSignupFlowWamEvent)({
          signupUserJourneyOperation: a,
          threadCreationTime: s != null ? s : void 0,
          threadIdHmac: l != null ? l : void 0,
          unifiedSessionId: u != null ? u : void 0,
        }).commit();
      }
    }
    async function p(e) {
      if (e == null) return { businessPhoneNumber: 0, businessLid: null };
      if (e.isLid())
        try {
          var t = await r("JSResourceForInteraction")("WAWebLidMigrationUtils")
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
    }
    async function _(t) {
      var n = t.businessWid,
        r = t.chatTimestamp,
        a = t.operation,
        i = t.signupId,
        l = n == null ? void 0 : n.toString(),
        s = await Promise.all([
          p(n),
          l != null
            ? o("WAWebChatThreadLogging")
                .getChatThreadIDHMAC(l)
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
        u = s[0],
        c = u.businessLid,
        d = u.businessPhoneNumber,
        _ = s[1];
      return m({
        operation: a,
        signupId: i,
        businessPhoneNumber: d,
        businessLid: c,
        chatTimestamp: r,
        threadIdHmac: _,
      });
    }
    ((l.SIGNUP_USER_JOURNEY_OPERATION = o(
      "WAWebWamEnumSignupUserJourneyOperation",
    ).SIGNUP_USER_JOURNEY_OPERATION),
      (l.computeThreadCreationTime = c),
      (l.parseBusinessPhoneNumber = d),
      (l.logSignupFlowEvent = m),
      (l.logSignupFlowOp = _));
  },
  98,
);
