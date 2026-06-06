__d(
  "WAWebSetUserNoticeStageQueryJob",
  [
    "WAComms",
    "WASmaxInUserNoticeSetResponseClientError",
    "WASmaxInUserNoticeSetResponseServerError",
    "WASmaxInUserNoticeSetResponseSuccess",
    "WASmaxOutUserNoticeSetRequest",
    "WATimeUtils",
    "WAWebBackendErrors",
    "WAWebTos",
  ],
  function (t, n, r, o, a, i, l) {
    var e = {
      0: "UNKNOWN",
      1: "UNKNOWN",
      2: "UNKNOWN",
      3: "UNKNOWN",
      4: "UNKNOWN",
      5: "ACCEPTED",
    };
    async function s(t, n) {
      var r = { stageMixinArgs: { noticeId: t, noticeStage: n } },
        a = o("WASmaxOutUserNoticeSetRequest").makeSetRequest(r),
        i = await o("WAComms").sendSmaxStanza(a),
        l = await o(
          "WASmaxInUserNoticeSetResponseSuccess",
        ).parseSetResponseSuccess(i, a);
      if (l.success) {
        var s = o("WATimeUtils").unixTime(),
          u = e[n];
        return (
          o("WAWebTos").TosManager.setState(t.toString(), u, s),
          Promise.resolve(!0)
        );
      }
      var c = await o(
        "WASmaxInUserNoticeSetResponseClientError",
      ).parseSetResponseClientError(i, a);
      if (c.success) {
        var d = c.value.errorIQErrorBadRequestMixin,
          m = d.code,
          p = d.text;
        throw new (o("WAWebBackendErrors").ServerStatusCodeError)(Number(m), p);
      }
      var _ = await o(
        "WASmaxInUserNoticeSetResponseServerError",
      ).parseSetResponseServerError(i, a);
      if (_.success) {
        var f = _.value.errorIQErrorInternalServerErrorMixin,
          g = f.code,
          h = f.text;
        throw new (o("WAWebBackendErrors").ServerStatusCodeError)(Number(g), h);
      }
      return Promise.resolve(!1);
    }
    l.SetUserNoticeStageQueryJob = s;
  },
  98,
);
