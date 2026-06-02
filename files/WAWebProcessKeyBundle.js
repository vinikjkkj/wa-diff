__d(
  "WAWebProcessKeyBundle",
  [
    "WAJids",
    "WALogger",
    "WAWebSignal",
    "WAWebSignalCommonUtils",
    "WAWebSignalProtocolStore",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(e) {
      var t = 0,
        n = [],
        a = [];
      for (var i of e)
        (i.wid.device != null && i.wid.device !== o("WAJids").DEFAULT_DEVICE_ID
          ? a.push(i)
          : n.push(i),
          !i.key && !i.wid.isBot() && t++);
      if (n.length === 0 && a.length === 0)
        throw r("err")("establishE2ESession: no keys in the response");
      return { primaryBundle: n, companionBundle: a, depletedPrekeyCount: t };
    }
    async function d(t) {
      try {
        var n = t.map(function (e) {
          return o("WAWebSignalCommonUtils")
            .createSignalAddress(e.wid)
            .toString();
        });
        (await o("WAWebSignalProtocolStore")
          .getPersistSignalProtocolStore()
          .bulkLoadIdentityKey(n),
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "establishE2ESession: warmed up identity cache: ",
                " records",
              ])),
            n.length,
          ));
      } catch (e) {
        o("WALogger").WARN(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "establishE2ESession: failed to warm up identity cache: ",
              "",
            ])),
          e,
        );
      }
    }
    async function m(e, t) {
      var n = 0,
        r = c(e),
        a = r.companionBundle,
        i = r.depletedPrekeyCount,
        l = r.primaryBundle;
      await d([].concat(l, a));
      var s = function (r) {
        return o("WAWebSignal")
          .Session.createSignalSession(r, t)
          .then(function () {
            n++;
          })
          .catch(function (e) {
            o("WALogger")
              .WARN(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "createSignalSession: failed for device ",
                    " with error ",
                    "",
                  ])),
                r.wid,
                String(e),
              )
              .sendLogs("createSignalSession-fail");
          });
      };
      return (
        await Promise.all(l.map(s)),
        await Promise.all(a.map(s)),
        { depletedPrekeyCount: i, processedPrekeyCount: n }
      );
    }
    ((l.splitKeyBundles = c),
      (l.warmUpIdentityCache = d),
      (l.processKeyBundles = m));
  },
  98,
);
