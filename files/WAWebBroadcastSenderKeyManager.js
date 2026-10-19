__d(
  "WAWebBroadcastSenderKeyManager",
  [
    "WALogger",
    "WAWebAudienceExpressionTypes",
    "WAWebBroadcastDeviceClassifier",
    "WAWebBroadcastKeyDistribution",
    "WAWebModelStorageUtils",
    "WAWebSchemaBroadcastMetadata",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d;
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        p.apply(this, arguments)
      );
    }
    function _(e, t, n) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r, a) {
          (a === void 0 && (a = []),
            !(!r && a.length === 0) &&
              (o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[broadcast:senderkey] updateBroadcastSenderKeyState: broadcastListId=",
                    ", isRotation=",
                    ", devices=",
                    "",
                  ])),
                t,
                String(r),
                a.length,
              ),
              yield o("WAWebModelStorageUtils")
                .getStorage()
                .lock(
                  ["broadcast-metadata"],
                  (function () {
                    var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                      function* (e) {
                        var n,
                          i,
                          l,
                          u = e[0],
                          c = yield u.get(t);
                        if (!(r && c != null && c.senderKeyRotate)) {
                          var d;
                          if (r) d = [];
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
                            (a.forEach(function (e) {
                              return p.add(e.toString());
                            }),
                              (d = Array.from(p)));
                          }
                          (yield u.createOrReplace({
                            id: t,
                            audienceExpression:
                              (n = c == null ? void 0 : c.audienceExpression) !=
                              null
                                ? n
                                : o("WAWebAudienceExpressionTypes")
                                    .DEFAULT_AUDIENCE_EXPRESSION,
                            customAudienceFbid:
                              c == null ? void 0 : c.customAudienceFbid,
                            recipients:
                              (i = c == null ? void 0 : c.recipients) != null
                                ? i
                                : [],
                            labels:
                              (l = c == null ? void 0 : c.labels) != null
                                ? l
                                : [],
                            senderKeyDevices: d,
                            senderKeyRotate: r,
                          }),
                            o("WALogger").LOG(
                              s ||
                                (s = babelHelpers.taggedTemplateLiteralLoose([
                                  "[broadcast:senderkey] updateBroadcastSenderKeyState: ",
                                  "",
                                ])),
                              r
                                ? "marked for rotation"
                                : "updated " +
                                    a.length +
                                    " devices, total=" +
                                    d.length,
                            ));
                        }
                      },
                    );
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })(),
                )));
        })),
        f.apply(this, arguments)
      );
    }
    function g(e, t) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          yield _(t, !1, e);
        })),
        h.apply(this, arguments)
      );
    }
    function y(e, t) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
                      (o("WALogger").LOG(
                        u ||
                          (u = babelHelpers.taggedTemplateLiteralLoose([
                            "[broadcast:senderkey] Removing device from sender key tracking (retry received), deviceType=",
                            "",
                          ])),
                        o(
                          "WAWebBroadcastDeviceClassifier",
                        ).classifyBroadcastDevice(e),
                      ),
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
        C.apply(this, arguments)
      );
    }
    function b(e, t, n, r) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
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
              i = yield m(n);
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
              p = l.skDistribList,
              f = o(
                "WAWebBroadcastKeyDistribution",
              ).checkAndHandleSecurityRotation({
                allDeviceList: e,
                extendedRecipients: a,
                senderKeyHitCount: u,
                storedKeyCount: i.senderKey.size,
              });
            return f != null
              ? (yield _(n, !0), f)
              : (o("WALogger").LOG(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "[broadcast:senderkey] getBroadcastSkDistribList: distributing to ",
                      " devices, ",
                      " already have keys",
                    ])),
                  p.length,
                  s.length,
                ),
                {
                  rotateKey: i.rotateKey,
                  skDistribList: p,
                  participantList: s,
                });
          },
        )),
        v.apply(this, arguments)
      );
    }
    ((l.getBroadcastSenderKeyMap = m),
      (l.markBroadcastHasSenderKey = g),
      (l.markForgetBroadcastSenderKey = y),
      (l.getBroadcastSkDistribList = b));
  },
  98,
);
