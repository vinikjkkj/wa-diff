__d(
  "WAWebServerLeadStageRepull",
  [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebApplyServerLeadStageJob",
    "WAWebContactManagerCustomerProfilesQuery",
    "WAWebCustomerManagerGating",
    "WAWebUserPrefsStore",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = "WACustomerManagerLeadStageLastPull",
      d = "WACustomerManagerLeadStageLastActive",
      m = 3 * o("WATimeUtils").DAY_SECONDS,
      p = new Set(["labels_syncing", "no_lead_list"]),
      _ = null,
      f = null;
    function g() {
      !o("WAWebCustomerManagerGating").customerManagerEnabled() ||
        _ != null ||
        (y(),
        (_ = self.setInterval(function () {
          y();
        }, o("WATimeUtils").HOUR_MILLISECONDS)));
    }
    function h() {
      return (
        f == null &&
          (f = v().finally(function () {
            f = null;
          })),
        f
      );
    }
    function y() {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = o("WATimeUtils").unixTime(),
            t = L(d);
          (r("WAWebUserPrefsStore").setUser(d, e),
            !(
              !o("WAWebCustomerManagerGating").customerManagerEnabled() ||
              !b(e, t)
            ) && (yield h()));
        })),
        C.apply(this, arguments)
      );
    }
    function b(e, t) {
      var n = L(c);
      return (
        n == null ||
        e - n > m ||
        (t != null && e - t > o("WATimeUtils").DAY_SECONDS)
      );
    }
    function v() {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var t = o("WATimeUtils").unixTime();
          try {
            var n = yield o(
              "WAWebContactManagerCustomerProfilesQuery",
            ).fetchCompleteCustomerProfileRecords();
            if (n == null) return;
            var a = yield R(n);
            if (
              (o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[customer_manager] lead stage re-pull: ",
                    "",
                  ])),
                a.join(","),
              ),
              a.some(function (e) {
                return p.has(e);
              }))
            )
              return;
            r("WAWebUserPrefsStore").setUser(c, t);
          } catch (e) {
            o("WALogger")
              .WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[customer_manager] lead stage re-pull failed",
                  ])),
              )
              .catching(r("getErrorSafe")(e));
          }
        })),
        S.apply(this, arguments)
      );
    }
    function R(e) {
      var t = [];
      for (var r of e) {
        var a = r.chatJid,
          i = r.leadStage;
        i != null &&
          t.push(
            o("WAWebApplyServerLeadStageJob")
              .applyServerLeadStageJob({
                threadLid: String(a),
                leadStageId: String(i),
              })
              .catch(function () {
                return "failed";
              }),
          );
      }
      return (u || (u = n("Promise"))).all(t);
    }
    function L(e) {
      var t = r("WAWebUserPrefsStore").getUser(e);
      return typeof t == "number" ? t : null;
    }
    ((l.startServerLeadStageRepull = g),
      (l.repullServerLeadStages = h),
      (l.maybeRepullServerLeadStages = y));
  },
  98,
);
