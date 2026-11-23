__d(
  "WAWebSetUserDisclosureStageQueryJob",
  [
    "WAComms",
    "WASmaxUserNoticeSetResultRPC",
    "WATimeUtils",
    "WAWebBackendErrors",
    "WAWebTos",
  ],
  function (t, n, r, o, a, i, l) {
    var e = {
      5: "ACCEPTED",
      105: "SHOWN",
      155: "ACCEPTED",
      160: "SOFT_OPT_IN",
      "-1": "UNKNOWN",
    };
    async function s(t, n) {
      var r = { trackableId: t, trackableResult: n },
        a = await o("WASmaxUserNoticeSetResultRPC").makeSetResultRequest(r),
        i = await o("WAComms").sendSmaxStanza(a),
        l = await o(
          "WASmaxUserNoticeSetResultRPC",
        ).parseSetResultResponseSuccess(i, a);
      if (l.success) {
        var s = o("WATimeUtils").unixTime(),
          u = e[n];
        return (
          o("WAWebTos").TosManager.setState(t.toString(), u, s),
          Promise.resolve(!0)
        );
      }
      var c = await o(
        "WASmaxUserNoticeSetResultRPC",
      ).parseSetResultResponseClientError(i, a);
      if (c.success) {
        var d = c.value.errorIQErrorBadRequestOrRateOverlimitMixinGroup.value,
          m = d.code,
          p = d.text;
        throw new (o("WAWebBackendErrors").ServerStatusCodeError)(Number(m), p);
      }
      var _ = await o(
        "WASmaxUserNoticeSetResultRPC",
      ).parseSetResultResponseServerError(i, a);
      if (_.success) {
        var f = _.value.errorIQErrorInternalServerErrorMixin,
          g = f.code,
          h = f.text;
        throw new (o("WAWebBackendErrors").ServerStatusCodeError)(Number(g), h);
      }
      return Promise.resolve(!1);
    }
    l.SetUserDisclosureStageQueryJob = s;
  },
  98,
);
