__d(
  "WAWebWorkerHandleInfoBulletin",
  [
    "WADeprecatedWapParser",
    "WALogger",
    "WAWebHandleInfoBulletinTypes",
    "WAWebHandleRoutingInfo",
    "WAWebOfflineHandler",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = new (r("WADeprecatedWapParser"))("infoBulletinParser", function (e) {
        if (
          (e.assertTag("ib"),
          e.assertFromServer(),
          e.hasChild(o("WAWebHandleInfoBulletinTypes").INFO_TYPE.ROUTING))
        ) {
          var t = e.child(o("WAWebHandleInfoBulletinTypes").INFO_TYPE.ROUTING);
          return {
            type: o("WAWebHandleInfoBulletinTypes").INFO_TYPE.ROUTING,
            edgeRouting: t.child("routing_info").contentBytes(),
            domain: t.hasChild("dns_domain")
              ? t
                  .child("dns_domain")
                  .contentEnum(o("WAWebHandleRoutingInfo").DOMAINS)
              : null,
          };
        } else {
          if (e.hasChild(o("WAWebHandleInfoBulletinTypes").INFO_TYPE.OFFLINE))
            return {
              count: e
                .child(o("WAWebHandleInfoBulletinTypes").INFO_TYPE.OFFLINE)
                .attrInt("count"),
              type: o("WAWebHandleInfoBulletinTypes").INFO_TYPE.OFFLINE,
            };
          if (
            e.hasChild(
              o("WAWebHandleInfoBulletinTypes").INFO_TYPE.OFFLINE_PREVIEW,
            )
          ) {
            var n;
            return {
              count: {
                count: e
                  .child(
                    (n = o("WAWebHandleInfoBulletinTypes")).INFO_TYPE
                      .OFFLINE_PREVIEW,
                  )
                  .attrInt("count"),
                message: e
                  .child(n.INFO_TYPE.OFFLINE_PREVIEW)
                  .attrInt("message"),
                receipt: e
                  .child(n.INFO_TYPE.OFFLINE_PREVIEW)
                  .attrInt("receipt"),
                notification: e
                  .child(n.INFO_TYPE.OFFLINE_PREVIEW)
                  .attrInt("notification"),
                call: e.child(n.INFO_TYPE.OFFLINE_PREVIEW).attrInt("call"),
              },
              type: n.INFO_TYPE.OFFLINE_PREVIEW,
            };
          }
        }
        return null;
      });
    async function c(t) {
      var n = u.parse(t);
      if (n.error)
        throw (
          o("WALogger").ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "Parsing Error: ",
                "",
              ])),
            n.error.toString(),
          ),
          n.error
        );
      var r = n.success;
      if (!r) {
        o("WALogger").WARN(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "[worker] handleInfoBulletin unrecognized info bulletin",
            ])),
        );
        return;
      }
      e: {
        var a = r;
        if (
          ((typeof a == "object" && a !== null) || typeof a == "function") &&
          "type" in a &&
          a.type === o("WAWebHandleInfoBulletinTypes").INFO_TYPE.ROUTING &&
          "edgeRouting" in a &&
          "domain" in a
        ) {
          var i = a.edgeRouting,
            l = a.domain;
          return (
            await o("WAWebHandleRoutingInfo").handleRoutingInfo({
              type: o("WAWebHandleInfoBulletinTypes").INFO_TYPE.ROUTING,
              edgeRouting: i,
              domain: l,
            }),
            "NO_ACK"
          );
          break e;
        }
        if (
          ((typeof a == "object" && a !== null) || typeof a == "function") &&
          "type" in a &&
          a.type === o("WAWebHandleInfoBulletinTypes").INFO_TYPE.OFFLINE &&
          "count" in a
        ) {
          var c = a.count;
          return (
            await o(
              "WAWebOfflineHandler",
            ).OfflineMessageHandler.processOfflineIb(c),
            "NO_ACK"
          );
          break e;
        }
        if (
          ((typeof a == "object" && a !== null) || typeof a == "function") &&
          "type" in a &&
          a.type ===
            o("WAWebHandleInfoBulletinTypes").INFO_TYPE.OFFLINE_PREVIEW &&
          "count" in a
        ) {
          var d = a.count;
          return (
            await o(
              "WAWebOfflineHandler",
            ).OfflineMessageHandler.processOfflinePreviewIb(d),
            "NO_ACK"
          );
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            a,
        );
      }
    }
    l.default = c;
  },
  98,
);
