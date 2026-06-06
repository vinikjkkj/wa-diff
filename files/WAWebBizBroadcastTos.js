__d(
  "WAWebBizBroadcastTos",
  [
    "WAComms",
    "WAExponentialBackoff",
    "WALogger",
    "WAPromiseTimeout",
    "WASmaxUserNoticeGetDisclosureStageByIdsRPC",
    "WATimeUtils",
    "WAWebEventEmitter",
    "WAWebPDFNTypes",
    "WAWebSetUserDisclosureStageJob",
    "WAWebTos",
    "WAWebUserPrefsStore",
    "err",
    "getErrorSafe",
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
    async function h() {
      await o("WAExponentialBackoff").exponentialBackoff(c, async function (t) {
        try {
          var n = o("WATimeUtils").unixTime();
          await o("WAPromiseTimeout").promiseTimeout(
            o("WAComms").waitForConnection(),
            3e4,
            "waitForConnection timed out",
          );
          var a = await o(
            "WASmaxUserNoticeGetDisclosureStageByIdsRPC",
          ).sendGetDisclosureStageByIdsRPC({
            getDisclosureStageByIdArgs: [
              {
                getDisclosureStageByIdId: Number(s),
                getDisclosureStageByIdT: n,
              },
            ],
          });
          if (a.name === "GetDisclosureStageByIdsResponseClientSuccess") {
            var i = a.value.notice.find(function (e) {
              return e.id === Number(s);
            });
            i != null &&
              (i.stage === o("WAWebPDFNTypes").DISCLOSURE_STAGE.SOFT_OPT_IN ||
                i.stage === o("WAWebPDFNTypes").DISCLOSURE_STAGE.ACCEPTED) &&
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
              .catching(r("getErrorSafe")(n)),
            t(n instanceof Error ? n : r("err")(String(n)))
          );
        }
      });
    }
    function y() {
      var e = r("WAWebUserPrefsStore").getUser("TOS_STATE_" + s);
      return {
        isSoftOptInAccepted: r("WAWebUserPrefsStore").getUser(u) === !0,
        persistedState: typeof e == "string" ? e : null,
        syncResult: m,
        tosManagerState: o("WAWebTos").TosManager.getState(_()),
      };
    }
    async function C() {
      (g(),
        await o("WAWebSetUserDisclosureStageJob").setUserDisclosureStage(
          Number(s),
          o("WAWebPDFNTypes").DISCLOSURE_STAGE.SOFT_OPT_IN,
        ));
    }
    ((l.bizBroadcastTosEmitter = p),
      (l.getBizBroadcastTosId = _),
      (l.isBizBroadcastTosAccepted = f),
      (l.getBizBroadcastTosDebugInfo = y),
      (l.acceptBizBroadcastTos = C));
  },
  98,
);
