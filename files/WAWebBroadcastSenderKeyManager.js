__d(
  "WAWebBroadcastSenderKeyManager",
  [
    "WALogger",
    "WAWebAudienceExpressionTypes",
    "WAWebBroadcastDeviceClassifier",
    "WAWebBroadcastKeyDistribution",
    "WAWebModelStorageUtils",
    "WAWebSchemaBroadcastMetadata",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p;
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n,
            r = yield o("WAWebSchemaBroadcastMetadata")
              .getBroadcastMetadataTable()
              .get(e);
          return {
            rotateKey:
              (t = r == null ? void 0 : r.senderKeyRotate) != null ? t : !1,
            senderKey: new Set(
              (n = r == null ? void 0 : r.senderKeyDevices) != null ? n : [],
            ),
          };
        })),
        f.apply(this, arguments)
      );
    }
    function g(e, t, n) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, r) {
          (r === void 0 && (r = []),
            !(!t && r.length === 0) &&
              (o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[broadcast:senderkey] updateBroadcastSenderKeyState: broadcastListId=",
                    ", isRotation=",
                    ", devices=",
                    "",
                  ])),
                e,
                String(t),
                r.length,
              ),
              yield o("WAWebModelStorageUtils")
                .getStorage()
                .lock(
                  ["broadcast-metadata"],
                  (function () {
                    var a = n("asyncToGeneratorRuntime").asyncToGenerator(
                      function* (n) {
                        var a,
                          i,
                          l,
                          s = n[0],
                          c = yield s.get(e);
                        if (!(t && c != null && c.senderKeyRotate)) {
                          var d;
                          if (t) d = [];
                          else {
                            var m,
                              p =
                                c != null && c.senderKeyRotate
                                  ? new Set()
                                  : new Set(
                                      (m =
                                        c == null
                                          ? void 0
                                          : c.senderKeyDevices) != null
                                        ? m
                                        : [],
                                    );
                            (r.forEach(function (e) {
                              return p.add(e.toString());
                            }),
                              (d = Array.from(p)));
                          }
                          (yield s.createOrReplace({
                            id: e,
                            audienceExpression:
                              (a = c == null ? void 0 : c.audienceExpression) !=
                              null
                                ? a
                                : o("WAWebAudienceExpressionTypes")
                                    .DEFAULT_AUDIENCE_EXPRESSION,
                            recipients:
                              (i = c == null ? void 0 : c.recipients) != null
                                ? i
                                : [],
                            labels:
                              (l = c == null ? void 0 : c.labels) != null
                                ? l
                                : [],
                            senderKeyDevices: d,
                            senderKeyRotate: t,
                          }),
                            o("WALogger").LOG(
                              u ||
                                (u = babelHelpers.taggedTemplateLiteralLoose([
                                  "[broadcast:senderkey] updateBroadcastSenderKeyState: ",
                                  "",
                                ])),
                              t
                                ? "marked for rotation"
                                : "updated " +
                                    r.length +
                                    " devices, total=" +
                                    d.length,
                            ));
                        }
                      },
                    );
                    return function (e) {
                      return a.apply(this, arguments);
                    };
                  })(),
                )));
        })),
        h.apply(this, arguments)
      );
    }
    function y(t, n) {
      try {
        var r = o("WAWebWidFactory").createWid(t);
        return r.isSameAccountAndAddressingMode(n);
      } catch (n) {
        return (
          o("WALogger")
            .LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[broadcast:senderkey] Failed to parse device WID: ",
                  "",
                ])),
              t,
            )
            .verbose(),
          !1
        );
      }
    }
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebWidFactory").asUserWidOrThrow(e);
          yield o("WAWebModelStorageUtils")
            .getStorage()
            .lock(
              ["broadcast-metadata"],
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    var n = e[0],
                      r = yield n.all(),
                      a = r.filter(function (e) {
                        var n;
                        if (e.senderKeyRotate) return !1;
                        var r = (n = e.senderKeyDevices) != null ? n : [];
                        return r.some(function (e) {
                          return y(e, t);
                        });
                      });
                    a.length !== 0 &&
                      (o("WALogger").LOG(
                        c ||
                          (c = babelHelpers.taggedTemplateLiteralLoose([
                            "[broadcast:senderkey] markBroadcastSenderKeyRotateForUser: marking ",
                            " broadcast lists for rotation due to identity change of ",
                            "",
                          ])),
                        a.length,
                        t.toString(),
                      ),
                      yield n.bulkCreateOrReplace(
                        a.map(function (e) {
                          var t;
                          return {
                            id: e.id,
                            audienceExpression:
                              (t = e.audienceExpression) != null
                                ? t
                                : o("WAWebAudienceExpressionTypes")
                                    .DEFAULT_AUDIENCE_EXPRESSION,
                            recipients: e.recipients,
                            labels: e.labels,
                            senderKeyDevices: [],
                            senderKeyRotate: !0,
                          };
                        }),
                      ));
                  },
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            );
        })),
        b.apply(this, arguments)
      );
    }
    function v(e, t) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          yield g(t, !1, e);
        })),
        S.apply(this, arguments)
      );
    }
    function R(e, t) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var r = e.toString();
          yield o("WAWebModelStorageUtils")
            .getStorage()
            .lock(
              ["broadcast-metadata"],
              (function () {
                var a = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (n) {
                    var a,
                      i = n[0],
                      l = yield i.get(t),
                      s =
                        (a = l == null ? void 0 : l.senderKeyDevices) != null
                          ? a
                          : [];
                    s.includes(r) &&
                      (o("WALogger")
                        .LOG(
                          d ||
                            (d = babelHelpers.taggedTemplateLiteralLoose([
                              "[broadcast:senderkey] Removing device from sender key tracking (retry received), deviceType=",
                              "",
                            ])),
                          o(
                            "WAWebBroadcastDeviceClassifier",
                          ).classifyBroadcastDevice(e),
                        )
                        .sendLogs("broadcast-senderkey-device-forget"),
                      yield i.merge(t, {
                        senderKeyDevices: s.filter(function (e) {
                          return e !== r;
                        }),
                      }));
                  },
                );
                return function (e) {
                  return a.apply(this, arguments);
                };
              })(),
            );
        })),
        L.apply(this, arguments)
      );
    }
    function E(e, t, n, r) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            o("WALogger").LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "[broadcast:senderkey] getBroadcastSkDistribList: broadcastListId=",
                  ", recipients=",
                  ", devices=",
                  "",
                ])),
              n,
              t.length,
              e.length,
            );
            var a = [].concat(t, [r]),
              i = yield _(n);
            if (i.rotateKey || i.senderKey.size === 0)
              return o("WAWebBroadcastKeyDistribution").handleFullDistribution(
                e,
                a,
                i,
              );
            var l = o(
                "WAWebBroadcastKeyDistribution",
              ).handlePartialDistribution(e, a, i),
              s = l.participantList,
              u = l.senderKeyHitCount,
              c = l.skDistribList,
              d = o(
                "WAWebBroadcastKeyDistribution",
              ).checkAndHandleSecurityRotation(e, a, u, i.senderKey.size);
            return d != null
              ? (yield g(n, !0), d)
              : (o("WALogger").LOG(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "[broadcast:senderkey] getBroadcastSkDistribList: distributing to ",
                      " devices, ",
                      " already have keys",
                    ])),
                  c.length,
                  s.length,
                ),
                {
                  rotateKey: i.rotateKey,
                  skDistribList: c,
                  participantList: s,
                });
          },
        )),
        k.apply(this, arguments)
      );
    }
    ((l.getBroadcastSenderKeyMap = _),
      (l.markBroadcastHasSenderKey = v),
      (l.markBroadcastSenderKeyRotateForUser = C),
      (l.markForgetBroadcastSenderKey = R),
      (l.getBroadcastSkDistribList = E));
  },
  98,
);
