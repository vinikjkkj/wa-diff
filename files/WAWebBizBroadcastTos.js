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
      u = 160,
      c = {
        maxTimeout: 16e3,
        minTimeout: 1e3,
        retries: 3,
        signal: new AbortController().signal,
      },
      d = !1,
      m = !1,
      p = "pending";
    function _() {
      if (!m) {
        m = !0;
        var e = r("WAWebUserPrefsStore").getUser("TOS_STATE_" + s);
        (e === "ACCEPTED" && (d = !0),
          d
            ? (p = "success")
            : h().then(
                function () {
                  p = "success";
                },
                function () {
                  p = "error";
                },
              ));
      }
      return s;
    }
    function f() {
      var e = r("WAWebUserPrefsStore").getUser("TOS_STATE_" + s);
      return (
        e === "ACCEPTED" ||
        o("WAWebTos").TosManager.getState(_()) === "ACCEPTED" ||
        d
      );
    }
    function g() {
      ((d = !0),
        o("WAWebTos").TosManager.setState(
          _(),
          "ACCEPTED",
          o("WATimeUtils").unixTime(),
        ));
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
                          (i.stage === u ||
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
        isSoftOptInAccepted: d,
        persistedState: typeof e == "string" ? e : null,
        syncResult: p,
        tosManagerState: o("WAWebTos").TosManager.getState(_()),
      };
    }
    function b() {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          (yield o("WAWebSetUserDisclosureStageJob").setUserDisclosureStage(
            Number(s),
            o("WAWebPDFNTypes").DISCLOSURE_STAGE.ACCEPTED,
          ),
            g());
        })),
        v.apply(this, arguments)
      );
    }
    ((l.getBizBroadcastTosId = _),
      (l.isBizBroadcastTosAccepted = f),
      (l.getBizBroadcastTosDebugInfo = C),
      (l.acceptBizBroadcastTos = b));
  },
  98,
);
