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
      m = !1;
    function p() {
      if (!m) {
        m = !0;
        var e = r("WAWebUserPrefsStore").getUser("TOS_STATE_" + s);
        (e === "ACCEPTED" && (d = !0), d || g());
      }
      return s;
    }
    function _() {
      return o("WAWebTos").TosManager.getState(p()) === "ACCEPTED" || d;
    }
    function f() {
      ((d = !0),
        o("WAWebTos").TosManager.setState(
          p(),
          "ACCEPTED",
          o("WATimeUtils").unixTime(),
        ));
    }
    function g() {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
                          f();
                      }
                    } catch (n) {
                      return (
                        o("WALogger")
                          .WARN(
                            e ||
                              (e = babelHelpers.taggedTemplateLiteralLoose([
                                "[business-broadcast-tos-sync-error] biz broadcast tos sync error",
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
        h.apply(this, arguments)
      );
    }
    function y() {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          (yield o("WAWebSetUserDisclosureStageJob").setUserDisclosureStage(
            Number(s),
            o("WAWebPDFNTypes").DISCLOSURE_STAGE.ACCEPTED,
          ),
            f());
        })),
        C.apply(this, arguments)
      );
    }
    ((l.getBizBroadcastTosId = p),
      (l.isBizBroadcastTosAccepted = _),
      (l.acceptBizBroadcastTos = y));
  },
  98,
);
