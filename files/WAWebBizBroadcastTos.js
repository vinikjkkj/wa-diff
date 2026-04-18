__d(
  "WAWebBizBroadcastTos",
  [
    "WAExponentialBackoff",
    "WALogger",
    "WASmaxUserNoticeGetDisclosureStageByIdsRPC",
    "WATimeUtils",
    "WAWaitForComms",
    "WAWebEventEmitter",
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
      c = {
        maxTimeout: 16e3,
        minTimeout: 1e3,
        retries: 3,
        signal: new AbortController().signal,
      },
      d = !1,
      m = "pending",
      p = new (r("WAWebEventEmitter"))();
    function _() {
      return (
        d ||
          ((d = !0),
          f()
            ? (m = "success")
            : h().then(
                function () {
                  m = "success";
                },
                function () {
                  m = "error";
                },
              )),
        s
      );
    }
    function f() {
      var e = r("WAWebUserPrefsStore").getUser("TOS_STATE_" + s);
      return (
        e === "ACCEPTED" ||
        r("WAWebUserPrefsStore").getUser(u) === !0 ||
        e === "SOFT_OPT_IN"
      );
    }
    function g() {
      (r("WAWebUserPrefsStore").setUser("TOS_STATE_" + s, "SOFT_OPT_IN"),
        r("WAWebUserPrefsStore").setUser(u, !0),
        p.trigger("change"));
    }
    function h() {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          (yield o("WAWaitForComms").waitForComms(),
            yield o("WAExponentialBackoff").exponentialBackoff(
              c,
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
                          (i.stage ===
                            o("WAWebPDFNTypes").DISCLOSURE_STAGE.SOFT_OPT_IN ||
                            i.stage ===
                              o("WAWebPDFNTypes").DISCLOSURE_STAGE.ACCEPTED) &&
                          g();
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
        y.apply(this, arguments)
      );
    }
    function C() {
      var e = r("WAWebUserPrefsStore").getUser("TOS_STATE_" + s);
      return {
        isSoftOptInAccepted: r("WAWebUserPrefsStore").getUser(u) === !0,
        persistedState: typeof e == "string" ? e : null,
        syncResult: m,
        tosManagerState: o("WAWebTos").TosManager.getState(_()),
      };
    }
    function b() {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          (g(),
            yield o("WAWebSetUserDisclosureStageJob").setUserDisclosureStage(
              Number(s),
              o("WAWebPDFNTypes").DISCLOSURE_STAGE.SOFT_OPT_IN,
            ));
        })),
        v.apply(this, arguments)
      );
    }
    ((l.bizBroadcastTosEmitter = p),
      (l.getBizBroadcastTosId = _),
      (l.isBizBroadcastTosAccepted = f),
      (l.getBizBroadcastTosDebugInfo = C),
      (l.acceptBizBroadcastTos = b));
  },
  98,
);
