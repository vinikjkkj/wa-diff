__d(
  "WAWebBizBroadcastTos",
  [
    "Promise",
    "WAExponentialBackoff",
    "WALogger",
    "WASmaxUserNoticeGetDisclosureStageByIdsRPC",
    "WATimeUtils",
    "WAWebBackendEventBus",
    "WAWebEventEmitter",
    "WAWebPDFNTypes",
    "WAWebSetUserDisclosureStageJob",
    "WAWebSocketConstants",
    "WAWebTos",
    "WAWebUserPrefsStore",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = "20250915",
      c = "biz_broadcast_soft_opt_in",
      d = {
        maxTimeout: 16e3,
        minTimeout: 1e3,
        retries: 3,
        signal: new AbortController().signal,
      },
      m = !1;
    function p() {
      return o("WAWebBackendEventBus").BackendEventBus.socketState ===
        o("WAWebSocketConstants").SOCKET_STATE.CONNECTED
        ? (s || (s = n("Promise"))).resolve()
        : new (s || (s = n("Promise")))(function (e) {
            var t = function (r) {
              r === o("WAWebSocketConstants").SOCKET_STATE.CONNECTED &&
                (o("WAWebBackendEventBus").BackendEventBus.off(
                  o("WAWebBackendEventBus").BackendEvent.SET_SOCKET_STATE,
                  t,
                ),
                e());
            };
            o("WAWebBackendEventBus").BackendEventBus.onSetSocketState(t);
          });
    }
    var _ = "pending",
      f = new (r("WAWebEventEmitter"))();
    function g() {
      return (
        m ||
          ((m = !0),
          h()
            ? (_ = "success")
            : C().then(
                function () {
                  _ = "success";
                },
                function () {
                  _ = "error";
                },
              )),
        u
      );
    }
    function h() {
      var e = r("WAWebUserPrefsStore").getUser("TOS_STATE_" + u);
      return (
        e === "ACCEPTED" ||
        r("WAWebUserPrefsStore").getUser(c) === !0 ||
        e === "SOFT_OPT_IN"
      );
    }
    function y() {
      (r("WAWebUserPrefsStore").setUser("TOS_STATE_" + u, "SOFT_OPT_IN"),
        r("WAWebUserPrefsStore").setUser(c, !0),
        f.trigger("change"));
    }
    function C() {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          (yield p(),
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
                              getDisclosureStageByIdId: Number(u),
                              getDisclosureStageByIdT: n,
                            },
                          ],
                        });
                      if (
                        a.name ===
                        "GetDisclosureStageByIdsResponseClientSuccess"
                      ) {
                        var i = a.value.notice.find(function (e) {
                          return e.id === Number(u);
                        });
                        i != null &&
                          (i.stage ===
                            o("WAWebPDFNTypes").DISCLOSURE_STAGE.SOFT_OPT_IN ||
                            i.stage ===
                              o("WAWebPDFNTypes").DISCLOSURE_STAGE.ACCEPTED) &&
                          y();
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
        b.apply(this, arguments)
      );
    }
    function v() {
      var e = r("WAWebUserPrefsStore").getUser("TOS_STATE_" + u);
      return {
        isSoftOptInAccepted: r("WAWebUserPrefsStore").getUser(c) === !0,
        persistedState: typeof e == "string" ? e : null,
        syncResult: _,
        tosManagerState: o("WAWebTos").TosManager.getState(g()),
      };
    }
    function S() {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          (y(),
            yield o("WAWebSetUserDisclosureStageJob").setUserDisclosureStage(
              Number(u),
              o("WAWebPDFNTypes").DISCLOSURE_STAGE.SOFT_OPT_IN,
            ));
        })),
        R.apply(this, arguments)
      );
    }
    ((l.bizBroadcastTosEmitter = f),
      (l.getBizBroadcastTosId = g),
      (l.isBizBroadcastTosAccepted = h),
      (l.getBizBroadcastTosDebugInfo = v),
      (l.acceptBizBroadcastTos = S));
  },
  98,
);
