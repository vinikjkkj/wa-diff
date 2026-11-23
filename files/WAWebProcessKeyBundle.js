__d(
  "WAWebProcessKeyBundle",
  [
    "WAJids",
    "WALogger",
    "WAWebSignal",
    "WAWebSignalCommonUtils",
    "WAWebSignalProtocolStore",
    "WAWebUserUtils",
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
      f;
    function g(e) {
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
    async function h(e) {
      try {
        var t = e.map(function (e) {
          return o("WAWebSignalCommonUtils")
            .createSignalAddress(e.wid)
            .toString();
        });
        (await o("WAWebSignalProtocolStore")
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
    }
    async function y(t, r, a) {
      var i = 0,
        l = !1,
        s = [],
        u = g(t),
        p = u.companionBundle,
        _ = u.depletedPrekeyCount,
        f = u.primaryBundle;
      await h([].concat(f, p));
      var y = new Set(),
        S = await b(f, y),
        R = function (n, s) {
          var t = n.aeaEvidence,
            u = babelHelpers.objectWithoutPropertiesLoose(n, e);
          return o("WAWebSignal")
            .Session.createSignalSession(u, r)
            .then(async function () {
              (i++, (await v(s, a)) && (l = !0));
            })
            .catch(function (e) {
              o("WALogger")
                .WARN(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
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
        await Promise.all(
          f.map(async function (e, t) {
            var i =
              (a == null ? void 0 : a.isMonitoredSend) === !0 &&
              o("WAWebUserUtils").isMeAccount(e.wid);
            if (
              y.has(t) &&
              a != null &&
              a.isMonitoredSend !== !1 &&
              !i &&
              n("cr:510") != null &&
              (await n("cr:510").isAeaEnforcedForUnevaluatedKeyResponse(
                e.wid,
                a,
              ))
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
            var u = S[t];
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
                  !(await C(e.wid, r)) &&
                  s.push(e.wid),
                null)
              : R(e, u);
          }),
        ),
        await Promise.all(
          p.map(function (e) {
            return R(e, null);
          }),
        ),
        {
          depletedPrekeyCount: _,
          processedPrekeyCount: i,
          hasResolvedAeaPrimary: l,
          aeaSkippedPrimaries: s,
        }
      );
    }
    async function C(e, t) {
      try {
        var n = await o("WAWebSignal").Session.hasSignalSessions([e], t),
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
    }
    async function b(e, t) {
      return Promise.all(
        e.map(async function (e, a) {
          if (n("cr:510") == null) return null;
          try {
            return await n("cr:510").prepareAeaKeyResponse(e);
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
        }),
      );
    }
    async function v(e, t) {
      if (e == null || n("cr:510") == null) return !1;
      try {
        return await n("cr:510").commitAeaKeyResponse(e, t);
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
    }
    ((l.processKeyBundles = y),
      (l.prepareAeaKeyResponses = b),
      (l.commitAeaKeyResponse = v));
  },
  98,
);
