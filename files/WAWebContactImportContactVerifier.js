__d(
  "WAWebContactImportContactVerifier",
  [
    "WAJids",
    "WALogger",
    "WAWebContactSyncLogger",
    "WAWebPerformanceUtils",
    "WAWebUsync",
    "WAWebUsyncUser",
    "WAWebWid",
    "isEmptyObject",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    async function d(t, n) {
      var a = n.errorCode,
        i = n.logTag,
        l = n.requestOrigin,
        u = new (o("WAWebUsync").USyncQuery)()
          .withMode("query")
          .withContext("interactive");
      (n.withBusinessProtocol === !0 && u.withBusinessProtocol(),
        n.withPictureProtocol === !0 && u.withPictureProtocol(),
        u.withContactProtocol(o("WAWebUsync").USYNC_ADDRESSING_MODE.LID));
      var c = self.performance.now();
      t.forEach(function (e) {
        u.withUser(new (o("WAWebUsyncUser").USyncUser)().withPhone(e));
      });
      var d = o("WAWebContactSyncLogger").contactSyncLogger.createEventContext({
          protocols: u.protocols,
          requestedCount: t.length,
          requestOrigin: l,
          syncType: o("WAWebContactSyncLogger").getSyncTypeString(
            "interactive",
            "query",
          ),
        }),
        m = await o(
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
    }
    async function m(e, t) {
      var n = await d(
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
            var t, n;
            if (!e.id) {
              a++;
              return;
            }
            var i = (t = e.contact) == null ? void 0 : t.content;
            if (i != null) {
              var l = ((n = e.contact) == null ? void 0 : n.type) === "in";
              if (l) {
                var s = e.id.isLid()
                  ? o("WAJids").toLidUserJid(e.id.user)
                  : e.lid;
                r[i] = { isWhatsAppUser: !0, lid: s };
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
    }
    async function p(e, t) {
      var n = await d(
          e,
          babelHelpers.extends({}, t, {
            logTag: "contact-import:lid-resolver",
          }),
        ),
        a = {},
        i = 0;
      return (
        n.list &&
          n.list.length > 0 &&
          n.list.forEach(function (e) {
            var t, n;
            if (!e.id) {
              i++;
              return;
            }
            var l = (t = e.contact) == null ? void 0 : t.content,
              s = ((n = e.contact) == null ? void 0 : n.type) === "in";
            if (s && l != null) {
              var u = e.id.isLid()
                ? o("WAJids").toLidUserJid(e.id.user)
                : e.lid;
              u != null &&
                r("WAWebWid").isStringLid(String(u)) &&
                (a[l] = String(u));
            }
          }),
        i > 0 &&
          o("WALogger").WARN(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "[lid-resolver] resolveLidsFromPhones: ",
                " no id",
              ])),
            i,
          ),
        a
      );
    }
    ((l.verifyWhatsAppUsers = m), (l.resolveLidsFromPhones = p));
  },
  98,
);
