__d(
  "WAWebBizBroadcastsContactVerifier",
  [
    "WAJids",
    "WALogger",
    "WAWebContactSyncLogger",
    "WAWebPerformanceUtils",
    "WAWebUsernameGatingUtils",
    "WAWebUsync",
    "WAWebUsyncUser",
    "WAWebWid",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    function d(e, t) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var r = n.logTag,
            a = new (o("WAWebUsync").USyncQuery)()
              .withMode("query")
              .withContext("interactive");
          (n.withBusinessProtocol === !0 && a.withBusinessProtocol(),
            n.withPictureProtocol === !0 && a.withPictureProtocol(),
            o("WAWebUsernameGatingUtils").usernameContactUsyncLidBased()
              ? a.withContactProtocol(o("WAWebUsync").USYNC_ADDRESSING_MODE.LID)
              : (a.withContactProtocol(
                  o("WAWebUsync").USYNC_ADDRESSING_MODE.PN,
                ),
                a.withLidProtocol()));
          var i = self.performance.now();
          t.forEach(function (e) {
            a.withUser(new (o("WAWebUsyncUser").USyncUser)().withPhone(e));
          });
          var l = o(
              "WAWebContactSyncLogger",
            ).contactSyncLogger.createEventContext({
              protocols: a.protocols,
              requestedCount: t.length,
              requestOrigin: o("WAWebContactSyncLogger").SYNC_REQUEST_ORIGIN
                .BUSINESS_BROADCAST,
              syncType: o("WAWebContactSyncLogger").getSyncTypeString(
                "interactive",
                "query",
              ),
            }),
            u = yield o(
              "WAWebContactSyncLogger",
            ).contactSyncLogger.executeWithLogging(l, function () {
              return a.execute();
            });
          u.error &&
            Object.keys(u.error).length > 0 &&
            (o("WALogger")
              .WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[",
                    "] USync errors for ",
                    " numbers",
                  ])),
                r,
                t.length,
              )
              .sendLogs("business-broadcast-contact-verify-errors"),
            Object.entries(u.error).forEach(function (e) {
              var t = e[0],
                n = e[1];
            }));
          var c = o("WAWebPerformanceUtils").getElapsedTimeMs(i);
          return (
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[",
                  "] done in ",
                  " for ",
                  " numbers",
                ])),
              r,
              c,
              t.length,
            ),
            u.error && u.error.all
              ? o("WAWebContactSyncLogger").contactSyncLogger.logFailure(
                  l,
                  u.error.all.errorCode,
                  u,
                )
              : o("WAWebContactSyncLogger").contactSyncLogger.logSuccess(l, u),
            u
          );
        })),
        m.apply(this, arguments)
      );
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield d(e, {
              logTag: "broadcast:contact-verifier",
              withBusinessProtocol: !0,
              withPictureProtocol: !0,
            }),
            n = {},
            r = 0;
          return (
            t.list &&
              t.list.length > 0 &&
              t.list.forEach(function (e) {
                var t, a;
                if (!e.id) {
                  r++;
                  return;
                }
                var i = (t = e.contact) == null ? void 0 : t.content;
                if (i != null) {
                  var l = ((a = e.contact) == null ? void 0 : a.type) === "in";
                  if (l) {
                    var s = e.id.isLid()
                      ? o("WAJids").toLidUserJid(e.id.user)
                      : e.lid;
                    n[i] = { isWhatsAppUser: !0, lid: s };
                  } else n[i] = { isWhatsAppUser: !1 };
                }
              }),
            r > 0 &&
              o("WALogger")
                .WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[broadcast:contact-verifier] verifyWhatsAppUsers: ",
                      " users had no id, skipped",
                    ])),
                  r,
                )
                .sendLogs("business-broadcast-contact-verify-no-id"),
            n
          );
        })),
        _.apply(this, arguments)
      );
    }
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield d(e, { logTag: "broadcast:lid-resolver" }),
            n = {},
            a = 0;
          return (
            t.list &&
              t.list.length > 0 &&
              t.list.forEach(function (e) {
                var t, i;
                if (!e.id) {
                  a++;
                  return;
                }
                var l = (t = e.contact) == null ? void 0 : t.content,
                  s = ((i = e.contact) == null ? void 0 : i.type) === "in";
                if (s && l != null) {
                  var u = e.id.isLid()
                    ? o("WAJids").toLidUserJid(e.id.user)
                    : e.lid;
                  u != null &&
                    r("WAWebWid").isStringLid(String(u)) &&
                    (n[l] = String(u));
                }
              }),
            a > 0 &&
              o("WALogger").WARN(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[broadcast:lid-resolver] resolveLidsFromPhones: ",
                    " users had no id, skipped",
                  ])),
                a,
              ),
            n
          );
        })),
        g.apply(this, arguments)
      );
    }
    ((l.verifyWhatsAppUsers = p), (l.resolveLidsFromPhones = f));
  },
  98,
);
