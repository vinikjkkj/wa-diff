__d(
  "WAWebSetUserDisclosureStageQueryJob",
  [
    "Promise",
    "WAComms",
    "WASmaxUserNoticeSetResultRPC",
    "WATimeUtils",
    "WAWebBackendErrors",
    "WAWebTos",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = {
        5: "ACCEPTED",
        105: "SHOWN",
        155: "ACCEPTED",
        160: "SOFT_OPT_IN",
        "-1": "UNKNOWN",
      };
    function u(e, t) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r) {
          var a = { trackableId: t, trackableResult: r },
            i = yield o("WASmaxUserNoticeSetResultRPC").makeSetResultRequest(a),
            l = yield o("WAComms").sendSmaxStanza(i),
            u = yield o(
              "WASmaxUserNoticeSetResultRPC",
            ).parseSetResultResponseSuccess(l, i);
          if (u.success) {
            var c = o("WATimeUtils").unixTime(),
              d = s[r];
            return (
              o("WAWebTos").TosManager.setState(t.toString(), d, c),
              (e || (e = n("Promise"))).resolve(!0)
            );
          }
          var m = yield o(
            "WASmaxUserNoticeSetResultRPC",
          ).parseSetResultResponseClientError(l, i);
          if (m.success) {
            var p =
                m.value.errorIQErrorBadRequestOrRateOverlimitMixinGroup.value,
              _ = p.code,
              f = p.text;
            throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
              Number(_),
              f,
            );
          }
          var g = yield o(
            "WASmaxUserNoticeSetResultRPC",
          ).parseSetResultResponseServerError(l, i);
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
    l.SetUserDisclosureStageQueryJob = u;
  },
  98,
);
