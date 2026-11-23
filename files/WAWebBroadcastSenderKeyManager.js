__d(
  "WAWebBroadcastSenderKeyManager",
  [
    "WALogger",
    "WAWebAudienceExpressionTypes",
    "WAWebBroadcastDeviceClassifier",
    "WAWebBroadcastKeyDistribution",
    "WAWebModelStorageUtils",
    "WAWebSchemaBroadcastMetadata",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d;
    async function m(e) {
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
    async function p(t, n, r) {
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
                  customAudienceFbid: c == null ? void 0 : c.customAudienceFbid,
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
    async function _(e, t) {
      await p(t, !1, e);
    }
    async function f(e, t) {
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
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
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
    async function g(e, t, n, r) {
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
        i = await m(n);
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
        _ = l.skDistribList,
        f = o("WAWebBroadcastKeyDistribution").checkAndHandleSecurityRotation({
          allDeviceList: e,
          extendedRecipients: a,
          senderKeyHitCount: u,
          storedKeyCount: i.senderKey.size,
        });
      return f != null
        ? (await p(n, !0), f)
        : (o("WALogger").LOG(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "[broadcast:senderkey] getBroadcastSkDistribList: distributing to ",
                " devices, ",
                " already have keys",
              ])),
            _.length,
            s.length,
          ),
          { rotateKey: i.rotateKey, skDistribList: _, participantList: s });
    }
    ((l.getBroadcastSenderKeyMap = m),
      (l.markBroadcastHasSenderKey = _),
      (l.markForgetBroadcastSenderKey = f),
      (l.getBroadcastSkDistribList = g));
  },
  98,
);
