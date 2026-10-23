__d(
  "WAWebProcessKeyBundle",
  [
    "Promise",
    "WAJids",
    "WALogger",
    "WAWebSignal",
    "WAWebSignalCommonUtils",
    "WAWebSignalProtocolStore",
    "WAWebUserPrefsMeUser",
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
      _,
      f,
      g;
    function h(e) {
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
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        C.apply(this, arguments)
      );
    }
    function b(e, t, n) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r, a) {
          var i = 0,
            l = !1,
            s = [],
            u = h(t),
            p = u.companionBundle,
            _ = u.depletedPrekeyCount,
            f = u.primaryBundle;
          yield y([].concat(f, p));
          var C = new Set(),
            b = yield L(f, C),
            v = function (s, u) {
              var t = s.aeaEvidence,
                d = babelHelpers.objectWithoutPropertiesLoose(s, e);
              return o("WAWebSignal")
                .Session.createSignalSession(d, r)
                .then(
                  n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                    (i++, (yield k(u, a)) && (l = !0));
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
            yield (g || (g = n("Promise"))).all(
              f.map(
                (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e, t) {
                      var i =
                        (a == null ? void 0 : a.isMonitoredSend) === !0 &&
                        o("WAWebUserPrefsMeUser").isMeAccount(e.wid);
                      if (
                        C.has(t) &&
                        a != null &&
                        a.isMonitoredSend !== !1 &&
                        !i &&
                        n("cr:510") != null &&
                        (yield n(
                          "cr:510",
                        ).isAeaEnforcedForUnevaluatedKeyResponse(e.wid, a))
                      )
                        return (
                          o("WALogger").LOG(
                            d ||
                              (d = babelHelpers.taggedTemplateLiteralLoose([
                                "[aea] no session for ",
                                ": its key response couldn't be evaluated",
                              ])),
                            e.wid.toLogString(),
                          ),
                          s.push(e.wid),
                          null
                        );
                      var u = b[t];
                      return (n("cr:510") == null
                        ? void 0
                        : n("cr:510").shouldRejectAeaKeyResponse(u, a)) === !0
                        ? (o("WALogger").LOG(
                            m ||
                              (m = babelHelpers.taggedTemplateLiteralLoose([
                                "[aea] rejected key response for ",
                                "",
                              ])),
                            e.wid.toLogString(),
                          ),
                          (l = !0),
                          a != null &&
                            a.isMonitoredSend !== !1 &&
                            !i &&
                            !(yield S(e.wid, r)) &&
                            s.push(e.wid),
                          null)
                        : v(e, u);
                    },
                  );
                  return function (t, n) {
                    return e.apply(this, arguments);
                  };
                })(),
              ),
            ),
            yield g.all(
              p.map(function (e) {
                return v(e, null);
              }),
            ),
            {
              depletedPrekeyCount: _,
              processedPrekeyCount: i,
              hasResolvedAeaPrimary: l,
              aeaSkippedPrimaries: s,
            }
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
          try {
            var n = yield o("WAWebSignal").Session.hasSignalSessions([e], t),
              a = n[0];
            return a === !0;
          } catch (t) {
            return (
              o("WALogger")
                .WARN(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "[aea] failed to read the session of ",
                      "",
                    ])),
                  e.toLogString(),
                )
                .catching(r("getErrorSafe")(t))
                .sendLogs("aea-primary-session-read-fail"),
              !1
            );
          }
        })),
        R.apply(this, arguments)
      );
    }
    function L(e, t) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return (g || (g = n("Promise"))).all(
            e.map(
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e, a) {
                    if (n("cr:510") == null) return null;
                    try {
                      return yield n("cr:510").prepareAeaKeyResponse(e);
                    } catch (e) {
                      return (
                        o("WALogger")
                          .WARN(
                            _ ||
                              (_ = babelHelpers.taggedTemplateLiteralLoose([
                                "[aea] failed to evaluate key response",
                              ])),
                          )
                          .catching(r("getErrorSafe")(e))
                          .sendLogs("aea-key-response-prepare-fail"),
                        t == null || t.add(a),
                        null
                      );
                    }
                  },
                );
                return function (t, n) {
                  return e.apply(this, arguments);
                };
              })(),
            ),
          );
        })),
        E.apply(this, arguments)
      );
    }
    function k(e, t) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (e == null || n("cr:510") == null) return !1;
          try {
            return yield n("cr:510").commitAeaKeyResponse(e, t);
          } catch (e) {
            return (
              o("WALogger")
                .WARN(
                  f ||
                    (f = babelHelpers.taggedTemplateLiteralLoose([
                      "[aea] failed to store key response result",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("aea-key-response-commit-fail"),
              !1
            );
          }
        })),
        I.apply(this, arguments)
      );
    }
    ((l.processKeyBundles = b),
      (l.prepareAeaKeyResponses = L),
      (l.commitAeaKeyResponse = k));
  },
  98,
);
