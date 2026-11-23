__d(
  "WAWebServerLeadStageRepull",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebApplyServerLeadStageJob",
    "WAWebContactManagerCustomerProfilesQuery",
    "WAWebCustomerManagerGating",
    "WAWebUserPrefsStore",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = "WACustomerManagerLeadStageLastPull",
      c = "WACustomerManagerLeadStageLastActive",
      d = 3 * o("WATimeUtils").DAY_SECONDS,
      m = new Set(["labels_syncing", "no_lead_list"]),
      p = null,
      _ = null;
    function f() {
      !o("WAWebCustomerManagerGating").customerManagerEnabled() ||
        p != null ||
        (h(),
        (p = self.setInterval(function () {
          h();
        }, o("WATimeUtils").HOUR_MILLISECONDS)));
    }
    function g() {
      return (
        _ == null &&
          (_ = C().finally(function () {
            _ = null;
          })),
        _
      );
    }
    async function h() {
      var e = o("WATimeUtils").unixTime(),
        t = v(c);
      (r("WAWebUserPrefsStore").setUser(c, e),
        !(
          !o("WAWebCustomerManagerGating").customerManagerEnabled() || !y(e, t)
        ) && (await g()));
    }
    function y(e, t) {
      var n = v(u);
      return (
        n == null ||
        e - n > d ||
        (t != null && e - t > o("WATimeUtils").DAY_SECONDS)
      );
    }
    async function C() {
      var t = o("WATimeUtils").unixTime();
      try {
        var n = await o(
          "WAWebContactManagerCustomerProfilesQuery",
        ).fetchCompleteCustomerProfileRecords();
        if (n == null) return;
        var a = await b(n);
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
            return m.has(e);
          }))
        )
          return;
        r("WAWebUserPrefsStore").setUser(u, t);
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
    }
    function b(e) {
      var t = [];
      for (var n of e) {
        var r = n.chatJid,
          a = n.leadStage;
        a != null &&
          t.push(
            o("WAWebApplyServerLeadStageJob")
              .applyServerLeadStageJob({
                threadLid: String(r),
                leadStageId: String(a),
              })
              .catch(function () {
                return "failed";
              }),
          );
      }
      return Promise.all(t);
    }
    function v(e) {
      var t = r("WAWebUserPrefsStore").getUser(e);
      return typeof t == "number" ? t : null;
    }
    ((l.startServerLeadStageRepull = f),
      (l.repullServerLeadStages = g),
      (l.maybeRepullServerLeadStages = h));
  },
  98,
);
