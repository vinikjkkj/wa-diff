__d(
  "WAWebBizBroadcastTos",
  [
    "WAExponentialBackoff",
    "WALogger",
    "WASmaxUserNoticeGetDisclosureStageByIdsRPC",
    "WATimeUtils",
    "WAWaitForComms",
    "WAWebPDFNTypes",
    "WAWebSetUserDisclosureStageJob",
    "WAWebTos",
    "WAWebUserPrefsStore",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = "20250915",
      u = "biz_broadcast_soft_opt_in",
      c = 160,
      d = {
        maxTimeout: 16e3,
        minTimeout: 1e3,
        retries: 3,
        signal: new AbortController().signal,
      },
      m = !1,
      p = !1,
      _ = "pending";
    function f() {
      if (!p) {
        p = !0;
        var e = r("WAWebUserPrefsStore").getUser("TOS_STATE_" + s),
          t = r("WAWebUserPrefsStore").getUser(u);
        ((e === "ACCEPTED" || t === !0) &&
          ((m = !0), t !== !0 && r("WAWebUserPrefsStore").setUser(u, !0)),
          m
            ? (_ = "success")
            : y().then(
                function () {
                  _ = "success";
                },
                function () {
                  _ = "error";
                },
              ));
      }
      return s;
    }
    function g() {
      var e = r("WAWebUserPrefsStore").getUser("TOS_STATE_" + s);
      return (
        e === "ACCEPTED" ||
        o("WAWebTos").TosManager.getState(f()) === "ACCEPTED" ||
        m ||
        r("WAWebUserPrefsStore").getUser(u) === !0
      );
    }
    function h() {
      ((m = !0),
        o("WAWebTos").TosManager.setState(
          f(),
          "ACCEPTED",
          o("WATimeUtils").unixTime(),
        ),
        r("WAWebUserPrefsStore").setUser("TOS_STATE_" + s, "ACCEPTED"),
        r("WAWebUserPrefsStore").setUser(u, !0));
    }
    function y() {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          (yield o("WAWaitForComms").waitForComms(),
            yield o("WAExponentialBackoff").exponentialBackoff(
              d,
              (function () {
                var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (t) {
                    try {
                      var n = o("WATimeUtils").unixTime(),
                        a = yield o(
                          "WASmaxUserNoticeGetDisclosureStageByIdsRPC",
                        ).sendGetDisclosureStageByIdsRPC({
                          getDisclosureStageByIdArgs: [
                            {
                              getDisclosureStageByIdId: Number(s),
                              getDisclosureStageByIdT: n,
                            },
                          ],
                        });
                      if (
                        a.name ===
                        "GetDisclosureStageByIdsResponseClientSuccess"
                      ) {
                        var i = a.value.notice.find(function (e) {
                          return e.id === Number(s);
                        });
                        i != null &&
                          (i.stage === c ||
                            i.stage ===
                              o("WAWebPDFNTypes").DISCLOSURE_STAGE.ACCEPTED) &&
                          h();
                      }
                    } catch (n) {
                      return (
                        o("WALogger")
                          .WARN(
                            e ||
                              (e = babelHelpers.taggedTemplateLiteralLoose([
                                "[biz-broadcast-tos] sync error",
                              ])),
                          )
                          .catching(
                            n instanceof Error ? n : r("err")(String(n)),
                          )
                          .sendLogs("business-broadcast-tos-sync-error"),
                        t(n instanceof Error ? n : r("err")(String(n)))
                      );
                    }
                  },
                );
                return function (e) {
                  return t.apply(this, arguments);
                };
              })(),
            ));
        })),
        C.apply(this, arguments)
      );
    }
    function b() {
      var e = r("WAWebUserPrefsStore").getUser("TOS_STATE_" + s);
      return {
        isSoftOptInAccepted: m,
        persistedState: typeof e == "string" ? e : null,
        syncResult: _,
        tosManagerState: o("WAWebTos").TosManager.getState(f()),
      };
    }
    function v() {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          (h(),
            yield o("WAWebSetUserDisclosureStageJob").setUserDisclosureStage(
              Number(s),
              o("WAWebPDFNTypes").DISCLOSURE_STAGE.ACCEPTED,
            ));
        })),
        S.apply(this, arguments)
      );
    }
    ((l.getBizBroadcastTosId = f),
      (l.isBizBroadcastTosAccepted = g),
      (l.getBizBroadcastTosDebugInfo = b),
      (l.acceptBizBroadcastTos = v));
  },
  98,
);
