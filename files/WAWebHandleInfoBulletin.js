__d(
  "WAWebHandleInfoBulletin",
  [
    "WADeprecatedWapParser",
    "WALogger",
    "WASmaxClientExpirationClientExpirationRPC",
    "WATimeUtils",
    "WAWebDirtyBitsConsts",
    "WAWebHandleInfoBulletinTypes.flow",
    "WAWebHandleReportServerSyncNotification",
    "WAWebHandleRoutingInfo",
    "WAWebHandleServerClientExpiration",
    "WAWebMessageDedupUtils",
    "WAWebOfflineHandler",
    "WAWebParseThreadMetadata",
    "WAWebThreadMetadata",
    "WAWebTos",
    "asyncToGeneratorRuntime",
    "cr:1175",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = (e = n("cr:1175")) != null ? e : {},
      m = d.handleDirtyBits,
      p = new (r("WADeprecatedWapParser"))("infoBulletinParser", function (e) {
        if (
          (e.assertTag("ib"),
          e.assertFromServer(),
          e.hasChild(o("WAWebHandleInfoBulletinTypes.flow").INFO_TYPE.DIRTY))
        ) {
          var t = [],
            n = [],
            r = [];
          return (
            e.forEachChildWithTag(
              o("WAWebHandleInfoBulletinTypes.flow").INFO_TYPE.DIRTY,
              function (e) {
                var a = {
                  type: e.attrString("type"),
                  timestamp: e.attrInt("timestamp"),
                };
                if (a.type === "account_sync") {
                  var i = e.mapChildren(function (e) {
                    return e.tag();
                  });
                  (i.forEach(function (e) {
                    Object.prototype.hasOwnProperty.call(
                      o("WAWebDirtyBitsConsts").SUPPORTED_DIRTY_PROTOCOLS,
                      e,
                    ) && r.push(e);
                  }),
                    n.push(a));
                } else
                  Object.prototype.hasOwnProperty.call(
                    o("WAWebDirtyBitsConsts").SUPPORTED_DIRTY_TYPE,
                    a.type,
                  )
                    ? n.push(a)
                    : t.push(a);
              },
            ),
            {
              type: o("WAWebHandleInfoBulletinTypes.flow").INFO_TYPE.DIRTY,
              supported: n,
              unsupported: t,
              protocols: r,
            }
          );
        } else if (
          e.hasChild(o("WAWebHandleInfoBulletinTypes.flow").INFO_TYPE.ROUTING)
        ) {
          var a = e.child(
            o("WAWebHandleInfoBulletinTypes.flow").INFO_TYPE.ROUTING,
          );
          return {
            type: o("WAWebHandleInfoBulletinTypes.flow").INFO_TYPE.ROUTING,
            edgeRouting: a.child("routing_info").contentBytes(),
            domain: a.hasChild("dns_domain")
              ? a
                  .child("dns_domain")
                  .contentEnum(o("WAWebHandleRoutingInfo").DOMAINS)
              : null,
          };
        } else {
          if (
            e.hasChild(o("WAWebHandleInfoBulletinTypes.flow").INFO_TYPE.OFFLINE)
          )
            return {
              count: e
                .child(o("WAWebHandleInfoBulletinTypes.flow").INFO_TYPE.OFFLINE)
                .attrInt("count"),
              type: o("WAWebHandleInfoBulletinTypes.flow").INFO_TYPE.OFFLINE,
            };
          if (
            e.hasChild(
              o("WAWebHandleInfoBulletinTypes.flow").INFO_TYPE
                .OFFLINE_PRIORITY_COMPLETE,
            )
          )
            return {
              type: o("WAWebHandleInfoBulletinTypes.flow").INFO_TYPE
                .OFFLINE_PRIORITY_COMPLETE,
            };
          if (
            e.hasChild(
              o("WAWebHandleInfoBulletinTypes.flow").INFO_TYPE.OFFLINE_PREVIEW,
            )
          ) {
            var i;
            return {
              count: {
                count: e
                  .child(
                    (i = o("WAWebHandleInfoBulletinTypes.flow")).INFO_TYPE
                      .OFFLINE_PREVIEW,
                  )
                  .attrInt("count"),
                message: e
                  .child(i.INFO_TYPE.OFFLINE_PREVIEW)
                  .attrInt("message"),
                receipt: e
                  .child(i.INFO_TYPE.OFFLINE_PREVIEW)
                  .attrInt("receipt"),
                notification: e
                  .child(i.INFO_TYPE.OFFLINE_PREVIEW)
                  .attrInt("notification"),
                call: e.child(i.INFO_TYPE.OFFLINE_PREVIEW).attrInt("call"),
              },
              type: i.INFO_TYPE.OFFLINE_PREVIEW,
            };
          } else if (
            e.hasChild(o("WAWebHandleInfoBulletinTypes.flow").INFO_TYPE.TOS)
          ) {
            var l = [];
            return (
              e.child("tos").forEachChildWithTag("notice", function (e) {
                l.push(e.attrString("id"));
              }),
              {
                type: o("WAWebHandleInfoBulletinTypes.flow").INFO_TYPE.TOS,
                noticeIds: l,
              }
            );
          } else {
            if (
              e.hasChild(
                o("WAWebHandleInfoBulletinTypes.flow").INFO_TYPE.THREAD_META,
              )
            )
              return {
                type: o("WAWebHandleInfoBulletinTypes.flow").INFO_TYPE
                  .THREAD_META,
                threadMeta: o("WAWebParseThreadMetadata").parseThreadMetadata(
                  e,
                ),
              };
            if (
              e.hasChild(
                o("WAWebHandleInfoBulletinTypes.flow").INFO_TYPE
                  .CLIENT_EXPIRATION,
              )
            ) {
              var s = o(
                  "WASmaxClientExpirationClientExpirationRPC",
                ).receiveClientExpirationRPC(e.getNode()),
                u = s.parsedRequest.clientExpirationT,
                c = u != null ? o("WATimeUtils").castToUnixTime(u) : null;
              return {
                type: o("WAWebHandleInfoBulletinTypes.flow").INFO_TYPE
                  .CLIENT_EXPIRATION,
                newClientExpirationTime: c,
              };
            }
          }
        }
        return null;
      });
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = p.parse(e);
          if (t.error)
            throw (
              o("WALogger").ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "Parsing Error: ",
                    "",
                  ])),
                t.error.toString(),
              ),
              t.error
            );
          var n = t.success;
          if (!n) {
            o("WALogger").WARN(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "handleInfoBulletin unrecognized info bulletin",
                ])),
            );
            return;
          }
          switch (n.type) {
            case o("WAWebHandleInfoBulletinTypes.flow").INFO_TYPE.DIRTY:
              if (!m) {
                o("WALogger").WARN(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "handleInfoBulletin dirty bits not supported",
                    ])),
                );
                return;
              }
              return (yield m(n), "NO_ACK");
            case o("WAWebHandleInfoBulletinTypes.flow").INFO_TYPE.ROUTING:
              return (
                yield o("WAWebHandleRoutingInfo").handleRoutingInfo(n),
                "NO_ACK"
              );
            case o("WAWebHandleInfoBulletinTypes.flow").INFO_TYPE.OFFLINE:
              return (
                o("WAWebOfflineHandler").OfflineMessageHandler.processOfflineIb(
                  n.count,
                ),
                o(
                  "WAWebHandleReportServerSyncNotification",
                ).reportOfflineNotifications(),
                o("WAWebMessageDedupUtils").maybeClearPendingMessages(n.count),
                "NO_ACK"
              );
            case o("WAWebHandleInfoBulletinTypes.flow").INFO_TYPE
              .OFFLINE_PREVIEW:
              return (
                yield o(
                  "WAWebOfflineHandler",
                ).OfflineMessageHandler.processOfflinePreviewIb(n.count),
                "NO_ACK"
              );
            case o("WAWebHandleInfoBulletinTypes.flow").INFO_TYPE.TOS:
              return (
                o("WAWebTos").TosManager.maybeUpdateServer(n.noticeIds),
                "NO_ACK"
              );
            case o("WAWebHandleInfoBulletinTypes.flow").INFO_TYPE.THREAD_META:
              return (
                o("WAWebThreadMetadata").setOfflineThreadMeta(n.threadMeta),
                "NO_ACK"
              );
            case o("WAWebHandleInfoBulletinTypes.flow").INFO_TYPE
              .CLIENT_EXPIRATION:
              return (
                o(
                  "WAWebHandleServerClientExpiration",
                ).handleServerClientExpiration(n.newClientExpirationTime),
                "NO_ACK"
              );
            default:
              return;
          }
        })),
        f.apply(this, arguments)
      );
    }
    l.default = _;
  },
  98,
);
