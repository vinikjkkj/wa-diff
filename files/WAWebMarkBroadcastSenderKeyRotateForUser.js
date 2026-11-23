__d(
  "WAWebMarkBroadcastSenderKeyRotateForUser",
  [
    "WALogger",
    "WAWebAudienceExpressionTypes",
    "WAWebModelStorageUtils",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(t, n) {
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
    async function c(e) {
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
                return u(e, t);
              });
            });
          a.length !== 0 &&
            (o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
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
                  customAudienceFbid: e.customAudienceFbid,
                  recipients: e.recipients,
                  labels: e.labels,
                  senderKeyDevices: [],
                  senderKeyRotate: !0,
                };
              }),
            ));
        });
    }
    l.markBroadcastSenderKeyRotateForUser = c;
  },
  98,
);
