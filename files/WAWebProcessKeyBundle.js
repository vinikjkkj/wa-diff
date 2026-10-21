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
      p,
      _;
    function f(e) {
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
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        h.apply(this, arguments)
      );
    }
    function y(e, t, n) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r, a) {
          var i = 0,
            l = !1,
            s = f(t),
            u = s.companionBundle,
            m = s.depletedPrekeyCount,
            p = s.primaryBundle;
          yield g([].concat(p, u));
          var h = yield b(p),
            y = function (s, u) {
              var t = s.aeaEvidence,
                d = babelHelpers.objectWithoutPropertiesLoose(s, e);
              return o("WAWebSignal")
                .Session.createSignalSession(d, r)
                .then(
                  n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                    (i++, (yield S(u, a)) && (l = !0));
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
                      s.wid,
                      String(e),
                    )
                    .sendLogs("createSignalSession-fail");
                });
            };
          return (
            yield (_ || (_ = n("Promise"))).all(
              p.map(function (e, t) {
                var r = h[t];
                return (n("cr:510") == null
                  ? void 0
                  : n("cr:510").isAeaKeyResponseRejected(r)) === !0
                  ? (o("WALogger").LOG(
                      d ||
                        (d = babelHelpers.taggedTemplateLiteralLoose([
                          "[aea] rejected key response for ",
                          "",
                        ])),
                      e.wid.toLogString(),
                    ),
                    (l = !0),
                    null)
                  : y(e, r);
              }),
            ),
            yield _.all(
              u.map(function (e) {
                return y(e, null);
              }),
            ),
            {
              depletedPrekeyCount: m,
              processedPrekeyCount: i,
              hasResolvedAeaPrimary: l,
            }
          );
        })),
        C.apply(this, arguments)
      );
    }
    function b(e) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return (_ || (_ = n("Promise"))).all(
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
                            m ||
                              (m = babelHelpers.taggedTemplateLiteralLoose([
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
        v.apply(this, arguments)
      );
    }
    function S(e, t) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (e == null || n("cr:510") == null) return !1;
          try {
            return yield n("cr:510").commitAeaKeyResponse(e, t);
          } catch (e) {
            return (
              o("WALogger")
                .WARN(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "[aea] failed to store key response result",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("aea-key-response-commit-fail"),
              !1
            );
          }
        })),
        R.apply(this, arguments)
      );
    }
    ((l.processKeyBundles = y),
      (l.prepareAeaKeyResponses = b),
      (l.commitAeaKeyResponse = S));
  },
  98,
);
