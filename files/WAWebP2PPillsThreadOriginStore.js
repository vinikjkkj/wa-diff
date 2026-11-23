__d(
  "WAWebP2PPillsThreadOriginStore",
  [
    "WALogger",
    "WAWebABProps",
    "WAWebSchemaP2PPillsThreadOrigin",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = {};
    async function c(t, n) {
      try {
        if (
          !o(
            "WAWebSchemaP2PPillsThreadOrigin",
          ).canUseP2PPillsThreadOriginTable()
        )
          return;
        await o("WAWebSchemaP2PPillsThreadOrigin")
          .getP2PPillsThreadOriginTable()
          .createOrReplace({ accountLid: t.toString(), pillEntryPoint: n });
      } catch (t) {
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[p2p-pills] save thread origin failed",
              ])),
          )
          .catching(r("getErrorSafe")(t))
          .sendLogs("p2p-pills-thread-origin-save-failed");
      }
    }
    async function d(e) {
      var t = await m([e]),
        n = t[0];
      return n;
    }
    async function m(e) {
      var t = e.map(function (e) {
          var t;
          return (t = e == null ? void 0 : e.toString()) != null ? t : null;
        }),
        n = t.filter(Boolean);
      if (n.length === 0)
        return t.map(function () {
          return u;
        });
      try {
        if (
          !o(
            "WAWebSchemaP2PPillsThreadOrigin",
          ).canUseP2PPillsThreadOriginTable()
        )
          return t.map(function () {
            return u;
          });
        var a = await o("WAWebSchemaP2PPillsThreadOrigin")
            .getP2PPillsThreadOriginTable()
            .bulkGet(n),
          i = new Map();
        return (
          a.forEach(function (e) {
            e != null && i.set(e.accountLid, e.pillEntryPoint);
          }),
          i.size === 0 ||
          !o("WAWebABProps").getABPropConfigValue("p2p_pills_enabled")
            ? t.map(function () {
                return u;
              })
            : t.map(function (e) {
                var t = e != null ? i.get(e) : null;
                return t != null ? { isFromPill: !0, pillEntryPoint: t } : u;
              })
        );
      } catch (e) {
        return (
          o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[p2p-pills] read thread origin failed",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("p2p-pills-thread-origin-read-failed"),
          t.map(function () {
            return u;
          })
        );
      }
    }
    ((l.savePillThreadOrigin = c),
      (l.getPillQbmFields = d),
      (l.getPillQbmFieldsForThreads = m));
  },
  98,
);
