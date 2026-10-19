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
    "cr:510",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["aeaEvidence"],
      s,
      u,
      c,
      d,
      m,
      p;
    function _(e) {
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
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            var t = e.map(function (e) {
              return o("WAWebSignalCommonUtils")
                .createSignalAddress(e.wid)
                .toString();
            });
            (yield o("WAWebSignalProtocolStore")
              .getPersistSignalProtocolStore()
              .bulkLoadIdentityKey(t),
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "establishE2ESession: warmed up identity cache: ",
                    " records",
                  ])),
                t.length,
              ));
          } catch (e) {
            o("WALogger").WARN(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "establishE2ESession: failed to warm up identity cache: ",
                  "",
                ])),
              e,
            );
          }
        })),
        g.apply(this, arguments)
      );
    }
    function h(e, t) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r) {
          var a = 0,
            i = !1,
            l = _(t),
            s = l.companionBundle,
            u = l.depletedPrekeyCount,
            d = l.primaryBundle;
          yield f([].concat(d, s));
          var m = yield C(d),
            g = function (l, s) {
              var t = l.aeaEvidence,
                u = babelHelpers.objectWithoutPropertiesLoose(l, e);
              return o("WAWebSignal")
                .Session.createSignalSession(u, r)
                .then(
                  n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                    (a++, (yield v(s)) && (i = !0));
                  }),
                )
                .catch(function (e) {
                  o("WALogger")
                    .WARN(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "createSignalSession: failed for device ",
                          " with error ",
                          "",
                        ])),
                      l.wid,
                      String(e),
                    )
                    .sendLogs("createSignalSession-fail");
                });
            };
          return (
            yield (p || (p = n("Promise"))).all(
              d.map(function (e, t) {
                return g(e, m[t]);
              }),
            ),
            yield p.all(
              s.map(function (e) {
                return g(e, null);
              }),
            ),
            {
              depletedPrekeyCount: u,
              processedPrekeyCount: a,
              hasResolvedAeaPrimary: i,
            }
          );
        })),
        y.apply(this, arguments)
      );
    }
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return (p || (p = n("Promise"))).all(
            e.map(
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    if (n("cr:510") == null) return null;
                    try {
                      return yield n("cr:510").prepareAeaKeyResponse(e);
                    } catch (e) {
                      return (
                        o("WALogger")
                          .WARN(
                            d ||
                              (d = babelHelpers.taggedTemplateLiteralLoose([
                                "[aea] failed to evaluate key response",
                              ])),
                          )
                          .catching(r("getErrorSafe")(e))
                          .sendLogs("aea-key-response-prepare-fail"),
                        null
                      );
                    }
                  },
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            ),
          );
        })),
        b.apply(this, arguments)
      );
    }
    function v(e) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (e == null || n("cr:510") == null) return !1;
          try {
            return yield n("cr:510").commitAeaKeyResponse(e);
          } catch (e) {
            return (
              o("WALogger")
                .WARN(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "[aea] failed to store key response result",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("aea-key-response-commit-fail"),
              !1
            );
          }
        })),
        S.apply(this, arguments)
      );
    }
    ((l.processKeyBundles = h),
      (l.prepareAeaKeyResponses = C),
      (l.commitAeaKeyResponse = v));
  },
  98,
);
