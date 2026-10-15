__d(
  "WAWebContactImportContactVerifier",
  [
    "WAJids",
    "WALogger",
    "WAWebContactSyncLogger",
    "WAWebPerformanceUtils",
    "WAWebUsync",
    "WAWebUsyncUser",
    "asyncToGeneratorRuntime",
    "isEmptyObject",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    function d(e, t) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var a = n.errorCode,
            i = n.logTag,
            l = n.requestOrigin,
            u = new (o("WAWebUsync").USyncQuery)()
              .withMode("query")
              .withContext("interactive");
          (n.withBusinessProtocol === !0 && u.withBusinessProtocol(),
            n.withPictureProtocol === !0 && u.withPictureProtocol(),
            n.includeVerifiedPhoneJid === !0
              ? u
                  .withContactProtocol(o("WAWebUsync").USYNC_ADDRESSING_MODE.PN)
                  .withLidProtocol()
              : u.withContactProtocol(
                  o("WAWebUsync").USYNC_ADDRESSING_MODE.LID,
                ));
          var c = self.performance.now();
          t.forEach(function (e) {
            u.withUser(new (o("WAWebUsyncUser").USyncUser)().withPhone(e));
          });
          var d = o(
              "WAWebContactSyncLogger",
            ).contactSyncLogger.createEventContext({
              protocols: u.protocols,
              requestedCount: t.length,
              requestOrigin: l,
              syncType: o("WAWebContactSyncLogger").getSyncTypeString(
                "interactive",
                "query",
              ),
            }),
            m = yield o(
              "WAWebContactSyncLogger",
            ).contactSyncLogger.executeWithLogging(
              d,
              function () {
                return u.execute();
              },
              a,
            );
          m.error &&
            !r("isEmptyObject")(m.error) &&
            (o("WALogger")
              .WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[",
                    "] USync errors for ",
                    " numbers",
                  ])),
                i,
                t.length,
              )
              .sendLogs("business-broadcast-contact-verify-errors"),
            Object.entries(m.error).forEach(function (e) {
              var t = e[0],
                n = e[1];
            }));
          var p = o("WAWebPerformanceUtils").getElapsedTimeMs(c);
          return (
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[",
                  "] done in ",
                  " for ",
                  " numbers",
                ])),
              i,
              p,
              t.length,
            ),
            m.error && m.error.all
              ? o("WAWebContactSyncLogger").contactSyncLogger.logFailure(
                  d,
                  m.error.all.errorCode,
                  m,
                  a,
                )
              : o("WAWebContactSyncLogger").contactSyncLogger.logSuccess(d, m),
            m
          );
        })),
        m.apply(this, arguments)
      );
    }
    function p(e, t) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield d(
              e,
              babelHelpers.extends({}, t, {
                logTag: "contact-import:contact-verifier",
                withBusinessProtocol: !0,
                withPictureProtocol: !0,
              }),
            ),
            r = {},
            a = 0;
          return (
            n.list &&
              n.list.length > 0 &&
              n.list.forEach(function (e) {
                var n, o;
                if (!e.id) {
                  a++;
                  return;
                }
                var i = (n = e.contact) == null ? void 0 : n.content;
                if (i != null) {
                  var l = ((o = e.contact) == null ? void 0 : o.type) === "in";
                  if (l) {
                    var s,
                      u = e.id.isLid() ? e.pn : e.id,
                      c = t.includeVerifiedPhoneJid === !0 ? y(u) : null;
                    r[i] = babelHelpers.extends(
                      {
                        isWhatsAppUser: !0,
                        lid: (s = h(e.id, e.lid)) != null ? s : void 0,
                      },
                      c != null ? { verifiedPhoneJid: c } : {},
                    );
                  } else r[i] = { isWhatsAppUser: !1 };
                }
              }),
            a > 0 &&
              o("WALogger")
                .WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[contact-verifier] verifyWhatsAppUsers: ",
                      " no id",
                    ])),
                  a,
                )
                .sendLogs("business-broadcast-contact-verify-no-id"),
            r
          );
        })),
        _.apply(this, arguments)
      );
    }
    function f(e, t) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield d(
              e,
              babelHelpers.extends({}, t, {
                logTag: "contact-import:lid-resolver",
              }),
            ),
            r = {},
            a = 0;
          return (
            n.list &&
              n.list.length > 0 &&
              n.list.forEach(function (e) {
                var t, n;
                if (!e.id) {
                  a++;
                  return;
                }
                var o = (t = e.contact) == null ? void 0 : t.content,
                  i = ((n = e.contact) == null ? void 0 : n.type) === "in";
                if (i && o != null) {
                  var l = h(e.id, e.lid);
                  l != null && (r[o] = l);
                }
              }),
            a > 0 &&
              o("WALogger").WARN(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[lid-resolver] resolveLidsFromPhones: ",
                    " no id",
                  ])),
                a,
              ),
            r
          );
        })),
        g.apply(this, arguments)
      );
    }
    function h(e, t) {
      return e.isLid()
        ? o("WAJids").toLidUserJid(e.user)
        : typeof t == "string"
          ? t
          : null;
    }
    function y(e) {
      if (e == null) return null;
      var t = o("WAJids").interpretAndValidateJid(e.toJid());
      return t.jidType === "phoneUser" ? t.userJid : null;
    }
    ((l.verifyWhatsAppUsers = p), (l.resolveLidsFromPhones = f));
  },
  98,
);
