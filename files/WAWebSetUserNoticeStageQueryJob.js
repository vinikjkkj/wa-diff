__d(
  "WAWebSetUserNoticeStageQueryJob",
  [
    "Promise",
    "WAComms",
    "WASmaxInUserNoticeSetResponseClientError",
    "WASmaxInUserNoticeSetResponseServerError",
    "WASmaxInUserNoticeSetResponseSuccess",
    "WASmaxOutUserNoticeSetRequest",
    "WATimeUtils",
    "WAWebBackendErrors",
    "WAWebTos",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = {
        0: "UNKNOWN",
        1: "UNKNOWN",
        2: "UNKNOWN",
        3: "UNKNOWN",
        4: "UNKNOWN",
        5: "ACCEPTED",
      };
    function u(e, t) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r) {
          var a = { stageMixinArgs: { noticeId: t, noticeStage: r } },
            i = o("WASmaxOutUserNoticeSetRequest").makeSetRequest(a),
            l = yield o("WAComms").sendSmaxStanza(i),
            u = yield o(
              "WASmaxInUserNoticeSetResponseSuccess",
            ).parseSetResponseSuccess(l, i);
          if (u.success) {
            var c = o("WATimeUtils").unixTime(),
              d = s[r];
            return (
              o("WAWebTos").TosManager.setState(t.toString(), d, c),
              (e || (e = n("Promise"))).resolve(!0)
            );
          }
          var m = yield o(
            "WASmaxInUserNoticeSetResponseClientError",
          ).parseSetResponseClientError(l, i);
          if (m.success) {
            var p = m.value.errorIQErrorBadRequestMixin,
              _ = p.code,
              f = p.text;
            throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
              Number(_),
              f,
            );
          }
          var g = yield o(
            "WASmaxInUserNoticeSetResponseServerError",
          ).parseSetResponseServerError(l, i);
          if (g.success) {
            var h = g.value.errorIQErrorInternalServerErrorMixin,
              y = h.code,
              C = h.text;
            throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
              Number(y),
              C,
            );
          }
          return (e || (e = n("Promise"))).resolve(!1);
        })),
        c.apply(this, arguments)
      );
    }
    l.SetUserNoticeStageQueryJob = u;
  },
  98,
);
