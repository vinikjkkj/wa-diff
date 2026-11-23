__d(
  "WAWebGetUserDisclosuresQueryJob",
  ["WASmaxUserNoticeGetDisclosuresRPC", "WATimeUtils", "WAWebBackendErrors"],
  function (t, n, r, o, a, i, l) {
    async function e() {
      var e = o("WATimeUtils").unixTime(),
        t = await o("WASmaxUserNoticeGetDisclosuresRPC").sendGetDisclosuresRPC({
          getUserDisclosuresT: e,
        });
      switch (t.name) {
        case "GetDisclosuresResponseClientSuccess":
          return t.value.notice;
        case "GetDisclosuresResponseClientError": {
          var n = t.value.errorIQErrorBadRequestMixin,
            r = n.code,
            a = n.text;
          throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
            Number(r),
            a,
          );
        }
        case "GetDisclosuresResponseServerError": {
          var i = t.value.errorUserNoticeServerError.value,
            l = i.code,
            s = i.text;
          throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
            Number(l),
            s,
          );
        }
      }
    }
    l.queryAllUserDisclosures = e;
  },
  98,
);
