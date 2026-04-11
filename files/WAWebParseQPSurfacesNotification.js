__d(
  "WAWebParseQPSurfacesNotification",
  [
    "WALogger",
    "WASmaxQpSurfacesQPNotificationRPC",
    "WATimeUtils",
    "WAWebProtobufsQuickPromotionSurfaces.pb",
    "decodeProtobuf",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = ["qpConfigFilterRules"],
      u = ["qpConfigFilterRules"];
    function c(t) {
      var n = o("WASmaxQpSurfacesQPNotificationRPC").receiveQPNotificationRPC(
          t,
        ),
        r = n.makeQPNotificationResponseAck,
        a = n.parsedRequest,
        i = a.surfacesQPSurfacesMixin,
        l = a.t,
        c = i.surface,
        d = c.map(function (t) {
          var n = t.promotion.reduce(function (t, n) {
            var r = n.qpConfigFilterRules;
            if (r == null) {
              var a = n.qpConfigFilterRules,
                i = babelHelpers.objectWithoutPropertiesLoose(n, s);
              return (t.push(i), t);
            }
            try {
              var l = o("decodeProtobuf").decodeProtobuf(
                  o("WAWebProtobufsQuickPromotionSurfaces.pb")
                    .QP$FilterClauseSpec,
                  r.elementValue,
                ),
                c = n.qpConfigFilterRules,
                d = babelHelpers.objectWithoutPropertiesLoose(n, u),
                m = babelHelpers.extends({}, d, { qpConfigFilterRules: l });
              t.push(m);
            } catch (t) {
              o("WALogger").WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "loadQuickPromotions: malformed filter rules, skipping",
                  ])),
              );
            }
            return t;
          }, []);
          return { id: t.id, promotions: n };
        });
      return {
        surfaces: d,
        ts: o("WATimeUtils").castToUnixTime(l),
        makeAck: r,
      };
    }
    l.parseQPSurfacesNotification = c;
  },
  98,
);
