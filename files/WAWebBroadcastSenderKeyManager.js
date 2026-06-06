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
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p;
    async function _(e) {
      var t,
        n,
        r = await o("WAWebSchemaBroadcastMetadata")
          .getBroadcastMetadataTable()
          .get(e);
      return {
        rotateKey:
          (t = r == null ? void 0 : r.senderKeyRotate) != null ? t : !1,
        senderKey: new Set(
          (n = r == null ? void 0 : r.senderKeyDevices) != null ? n : [],
        ),
      };
    }
    async function f(t, n, r) {
      (r === void 0 && (r = []),
        !(!n && r.length === 0) &&
          (o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[broadcast:senderkey] updateBroadcastSenderKeyState: broadcastListId=",
                ", isRotation=",
                ", devices=",
                "",
              ])),
            t,
            String(n),
            r.length,
          ),
          await o("WAWebModelStorageUtils")
            .getStorage()
            .lock(["broadcast-metadata"], async function (e) {
              var a,
                i,
                l,
                u = e[0],
                c = await u.get(t);
              if (!(n && c != null && c.senderKeyRotate)) {
                var d;
                if (n) d = [];
                else {
                  var m,
                    p =
                      c != null && c.senderKeyRotate
                        ? new Set()
                        : new Set(
                            (m = c == null ? void 0 : c.senderKeyDevices) !=
                              null
                              ? m
                              : [],
                          );
                  (r.forEach(function (e) {
                    return p.add(e.toString());
                  }),
                    (d = Array.from(p)));
                }
                (await u.createOrReplace({
                  id: t,
                  audienceExpression:
                    (a = c == null ? void 0 : c.audienceExpression) != null
                      ? a
                      : o("WAWebAudienceExpressionTypes")
                          .DEFAULT_AUDIENCE_EXPRESSION,
                  recipients:
                    (i = c == null ? void 0 : c.recipients) != null ? i : [],
                  labels: (l = c == null ? void 0 : c.labels) != null ? l : [],
                  senderKeyDevices: d,
                  senderKeyRotate: n,
                }),
                  o("WALogger").LOG(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[broadcast:senderkey] updateBroadcastSenderKeyState: ",
                        "",
                      ])),
                    n
                      ? "marked for rotation"
                      : "updated " + r.length + " devices, total=" + d.length,
                  ));
              }
            })));
    }
    function g(e, t) {
      try {
        var n = o("WAWebWidFactory").createWid(e);
        return n.isSameAccountAndAddressingMode(t);
      } catch (t) {
        return (
          o("WALogger")
            .LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[broadcast:senderkey] Failed to parse device WID: ",
                  "",
                ])),
              e,
            )
            .verbose(),
          !1
        );
      }
    }
    async function h(e) {
      var t = o("WAWebWidFactory").asUserWidOrThrow(e);
      await o("WAWebModelStorageUtils")
        .getStorage()
        .lock(["broadcast-metadata"], async function (e) {
          var n = e[0],
            r = await n.all(),
            a = r.filter(function (e) {
              var n;
              if (e.senderKeyRotate) return !1;
              var r = (n = e.senderKeyDevices) != null ? n : [];
              return r.some(function (e) {
                return g(e, t);
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
            await n.bulkCreateOrReplace(
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
        });
    }
    async function y(e, t) {
      await f(t, !1, e);
    }
    async function C(e, t) {
      var n = e.toString();
      await o("WAWebModelStorageUtils")
        .getStorage()
        .lock(["broadcast-metadata"], async function (r) {
          var a,
            i = r[0],
            l = await i.get(t),
            s = (a = l == null ? void 0 : l.senderKeyDevices) != null ? a : [];
          s.includes(n) &&
            (o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "[broadcast:senderkey] Removing device from sender key tracking (retry received), deviceType=",
                  "",
                ])),
              o("WAWebBroadcastDeviceClassifier").classifyBroadcastDevice(e),
            ),
            await i.merge(t, {
              senderKeyDevices: s.filter(function (e) {
                return e !== n;
              }),
            }));
        });
    }
    async function b(e, t, n, r) {
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
        i = await _(n);
      if (i.rotateKey || i.senderKey.size === 0)
        return o("WAWebBroadcastKeyDistribution").handleFullDistribution(
          e,
          a,
          i,
        );
      var l = o("WAWebBroadcastKeyDistribution").handlePartialDistribution(
          e,
          a,
          i,
        ),
        s = l.participantList,
        u = l.senderKeyHitCount,
        c = l.skDistribList,
        d = o("WAWebBroadcastKeyDistribution").checkAndHandleSecurityRotation(
          e,
          a,
          u,
          i.senderKey.size,
        );
      return d != null
        ? (await f(n, !0), d)
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
          { rotateKey: i.rotateKey, skDistribList: c, participantList: s });
    }
    ((l.getBroadcastSenderKeyMap = _),
      (l.markBroadcastHasSenderKey = y),
      (l.markBroadcastSenderKeyRotateForUser = h),
      (l.markForgetBroadcastSenderKey = C),
      (l.getBroadcastSkDistribList = b));
  },
  98,
);
