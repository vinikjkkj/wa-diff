__d(
  "WAWebApiStatus",
  [
    "Promise",
    "WAJids",
    "WALogger",
    "WATimeUtils",
    "WAWebAck",
    "WAWebDBMessageSerialization",
    "WAWebDBMessageStoreUtils",
    "WAWebDBMessageUtils",
    "WAWebDbEncryptionKey",
    "WAWebLidStatusMigrationUtils",
    "WAWebMsgGetters",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebNewsletterGatingUtils",
    "WAWebSchemaMessage",
    "WAWebViewMode.flow",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "countWhere",
    "justknobx",
    "lodash",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d;
    function m() {
      return o("WAWebDbEncryptionKey")
        .DbEncKeyStore.waitForFinalDbMsgEncKey()
        .then(function () {
          var t = [p(), _(), f()];
          return (d || (d = n("Promise"))).all(t).then(
            (function () {
              var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (t) {
                  var n = t.flat(1),
                    a = [],
                    i = [],
                    l = r("justknobx")._("4912"),
                    u = 0,
                    c = 0;
                  (n.forEach(function (e) {
                    e.author
                      ? e.viewMode ===
                          o("WAWebViewMode.flow").ViewModeType.HIDDEN && l
                        ? c++
                        : o("WATimeUtils").happenedWithin(
                              o("WATimeUtils").castToUnixTime(e.t),
                              o("WATimeUtils").DAY_SECONDS,
                            ) && e.type !== o("WAWebMsgType").MSG_TYPE.REVOKED
                          ? e.type !== o("WAWebMsgType").MSG_TYPE.PROTOCOL &&
                            i.push(
                              o("WAWebDBMessageSerialization").messageFromDbRow(
                                e,
                              ),
                            )
                          : a.push(e.id)
                      : u++;
                  }),
                    u > 0 &&
                      o("WALogger").WARN(
                        e ||
                          (e = babelHelpers.taggedTemplateLiteralLoose([
                            "",
                            " status messages have null author",
                          ])),
                        u,
                      ),
                    c > 0 &&
                      o("WALogger").WARN(
                        s ||
                          (s = babelHelpers.taggedTemplateLiteralLoose([
                            "",
                            " status messages have hidden viewMode",
                          ])),
                        c,
                      ),
                    yield o("WAWebSchemaMessage")
                      .getMessageTable()
                      .bulkRemove(a));
                  var d = i.map(function (e) {
                      return babelHelpers.extends({}, e, {
                        id: new (r("WAWebMsgKey"))({
                          id: e.id.id,
                          remote: e.id.remote,
                          fromMe: e.id.fromMe,
                          participant:
                            e.id.participant == null
                              ? void 0
                              : o("WAWebLidStatusMigrationUtils").matWidConvert(
                                  e.id.participant,
                                ),
                        }),
                        from: o("WAWebLidStatusMigrationUtils").matWidConvert(
                          e.from,
                        ),
                        author:
                          e.author == null
                            ? void 0
                            : o("WAWebLidStatusMigrationUtils").matWidConvert(
                                e.author,
                              ),
                      });
                    }),
                    m = r("lodash").groupBy(d, function (e) {
                      var t;
                      return e.from.isStatus() && e.author != null
                        ? e.author.toString()
                        : (t = o("WAWebMsgGetters").getSender(e)) != null
                          ? t
                          : e.from.toString();
                    }),
                    p = [];
                  for (var _ in m) {
                    var f = m[_],
                      g = r("countWhere")(f, function (e) {
                        return e.ack < o("WAWebAck").ACK.READ;
                      }),
                      h = f[f.length - 1].t;
                    p.push({
                      id: o("WAWebWidFactory").createWid(_),
                      unreadCount: g,
                      totalCount: f.length,
                      t: h,
                      statusMsgs: f,
                    });
                  }
                  return p;
                },
              );
              return function (e) {
                return t.apply(this, arguments);
              };
            })(),
          );
        });
    }
    function p() {
      var e = o("WAWebWidFactory").createWid(o("WAJids").STATUS_JID);
      return o("WAWebDBMessageStoreUtils").queryChatMessageHelper(
        o("WAWebDBMessageUtils").beginningOfChat(e),
        o("WAWebDBMessageUtils").endOfChat(e),
        { lowerInclusive: !1, upperInclusive: !1 },
      );
    }
    function _() {
      try {
        if (r("justknobx")._("550"))
          return o("WAWebDBMessageStoreUtils").queryGroupStatusMsgsHelper();
      } catch (e) {
        o("WALogger")
          .ERROR(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "getAllGroupStatusesPromise: ",
                "",
              ])),
            e,
          )
          .sendLogs("query-group-status");
      }
      return (d || (d = n("Promise"))).resolve([]);
    }
    function f() {
      try {
        if (o("WAWebNewsletterGatingUtils").isNewsletterStatusReceiverEnabled())
          return o(
            "WAWebDBMessageStoreUtils",
          ).queryNewsletterStatusMsgsHelper();
      } catch (e) {
        o("WALogger")
          .ERROR(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "getAllNewsletterStatusesPromise: ",
                "",
              ])),
            e,
          )
          .sendLogs("query-newsletter-status");
      }
      return (d || (d = n("Promise"))).resolve([]);
    }
    l.getAllStatuses = m;
  },
  98,
);
