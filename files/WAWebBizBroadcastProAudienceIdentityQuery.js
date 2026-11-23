__d(
  "WAWebBizBroadcastProAudienceIdentityQuery",
  [
    "WAJids",
    "WALogger",
    "WAWebLidAwareContactsDB",
    "WAWebRunInBatches",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 256;
    async function u(e) {
      var t = new Map(),
        n = new Set();
      for (var a of e)
        a.isLid()
          ? t.set(a.toString(), o("WAJids").toLidUserJid(a.user))
          : n.add(a.toString());
      return (
        await o("WAWebRunInBatches").runInBatches(
          Array.from(n),
          async function (e) {
            var n = await r(
                "WAWebLidAwareContactsDB",
              ).anyOfPhysicalPhoneMappingRows(e),
              o = c(n);
            for (var a of e) {
              var i,
                l = (i = o.get(a)) == null ? void 0 : i.accountLid;
              l != null && t.set(a, l);
            }
          },
          { batchSize: s },
        ),
        t
      );
    }
    function c(e) {
      var t = new Map();
      for (var n of e) {
        var r = n.phoneNumber;
        r != null && t.set(r, d(t.get(r), m(n)));
      }
      return t;
    }
    function d(e, t) {
      return e == null
        ? t
        : e.timestamp == null || t.timestamp == null
          ? { accountLid: null, timestamp: null }
          : t.timestamp > e.timestamp
            ? t
            : t.timestamp < e.timestamp
              ? e
              : {
                  accountLid:
                    e.accountLid === t.accountLid ? e.accountLid : null,
                  timestamp: e.timestamp,
                };
    }
    function m(e) {
      var t = e.phoneNumberCreatedAt;
      return t == null || !Number.isFinite(t)
        ? { accountLid: null, timestamp: null }
        : { accountLid: p(e.id), timestamp: t };
    }
    function p(t) {
      try {
        return o("WAJids").toLidUserJid(
          o("WAWebWidFactory").createUserLidOrThrow(t).user,
        );
      } catch (t) {
        return (
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "Rejected a stored BB Pro audience LID",
                ])),
            )
            .sendLogs("bb-pro-audience-stored-lid-invalid"),
          null
        );
      }
    }
    l.resolveProAudienceLids = u;
  },
  98,
);
