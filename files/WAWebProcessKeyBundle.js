__d(
  "WAWebProcessKeyBundle",
  [
    "Promise",
    "WAJids",
    "WALogger",
    "WAWebSignal",
    "WAWebSignalCommonUtils",
    "WAWebSignalProtocolStore",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    function d(e) {
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
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          try {
            var n = t.map(function (e) {
              return o("WAWebSignalCommonUtils")
                .createSignalAddress(e.wid)
                .toString();
            });
            (yield o("WAWebSignalProtocolStore")
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
        })),
        p.apply(this, arguments)
      );
    }
    function _(e, t) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var r = 0,
            a = d(e),
            i = a.companionBundle,
            l = a.depletedPrekeyCount,
            s = a.primaryBundle;
          yield m([].concat(s, i));
          var p = function (n) {
            return o("WAWebSignal")
              .Session.createSignalSession(n, t)
              .then(function () {
                r++;
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
                    n.wid,
                    String(e),
                  )
                  .sendLogs("createSignalSession-fail");
              });
          };
          return (
            yield (c || (c = n("Promise"))).all(s.map(p)),
            yield c.all(i.map(p)),
            { depletedPrekeyCount: l, processedPrekeyCount: r }
          );
        })),
        f.apply(this, arguments)
      );
    }
    ((l.splitKeyBundles = d),
      (l.warmUpIdentityCache = m),
      (l.processKeyBundles = _));
  },
  98,
);
