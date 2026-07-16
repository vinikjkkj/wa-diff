__d(
  "WAWebBroadcastListAction",
  [
    "fbt",
    "WAJids",
    "WALogger",
    "WATimeUtils",
    "WAWebAudienceExpressionTypes",
    "WAWebBroadcastListIdUtils",
    "WAWebBroadcastListStorageUtils",
    "WAWebBroadcastListSync",
    "WAWebBroadcastMetadataCollection",
    "WAWebChatCollection",
    "WAWebContactGetters",
    "WAWebContactImportContactVerifier",
    "WAWebContactImportFileProcessor",
    "WAWebContactSyncErrorCodes",
    "WAWebContactSyncLogger",
    "WAWebDeleteChatSync",
    "WAWebFrontendContactGetters",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d,
      m,
      p = m || (m = o("react")),
      _ = "update",
      f = "delete";
    function g(e) {
      var t = e.map(function (e) {
        var t = o("WAWebContactGetters").getUserid(e);
        return {
          lid: t != null ? o("WAJids").toLidUserJid(t) : void 0,
          phone: o("WAWebFrontendContactGetters").getFormattedPhoneAndType(e)
            .displayName,
        };
      });
      return t;
    }
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.filter(function (e) {
            return e.lid == null;
          });
          if (n.length === 0) return t;
          try {
            var a = n.map(function (e) {
                return o(
                  "WAWebContactImportFileProcessor",
                ).normalizePhoneNumber(e.phone);
              }),
              i = yield o(
                "WAWebContactImportContactVerifier",
              ).verifyWhatsAppUsers(a, {
                errorCode: o("WAWebContactSyncErrorCodes").BIZ_BROADCAST_VERIFY,
                requestOrigin: o("WAWebContactSyncLogger").SYNC_REQUEST_ORIGIN
                  .BUSINESS_BROADCAST,
              });
            return t.map(function (e) {
              if (e.lid != null) return e;
              var t = o("WAWebContactImportFileProcessor").normalizePhoneNumber(
                  e.phone,
                ),
                n = i[t];
              return (n == null ? void 0 : n.isWhatsAppUser) === !0 &&
                n.lid != null
                ? babelHelpers.extends({}, e, { lid: String(n.lid) })
                : e;
            });
          } catch (n) {
            return (
              o("WALogger")
                .WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[broadcast:list-action] USync LID resolve failed",
                    ])),
                )
                .catching(r("getErrorSafe")(n))
                .sendLogs("business-broadcast-lid-resolve-failed"),
              t
            );
          }
        })),
        y.apply(this, arguments)
      );
    }
    function C(e, t, n, r, o) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a, i) {
            if (t.length !== 0) {
              var l = yield h(t),
                d = o("WATimeUtils").unixTime(),
                m = l.flatMap(function (e) {
                  var t = o(
                      "WAWebContactImportFileProcessor",
                    ).normalizePhoneNumber(e.phone),
                    n = e.lid;
                  if (n == null) return [];
                  var r = {
                    lidJid: n,
                    pnJid: t !== "" ? o("WAJids").toPhoneUserJid(t) : void 0,
                  };
                  return [r];
                });
              m.length === 0 &&
                o("WALogger")
                  .ERROR(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[broadcast:list-action] failed: no participants for jid ",
                        "",
                      ])),
                    e,
                  )
                  .sendLogs("business-broadcast-no-participants");
              try {
                var f =
                    a != null
                      ? a
                      : o(
                          "WAWebAudienceExpressionTypes",
                        ).createExplicitExpression(
                          m.flatMap(function (e) {
                            return e.lidJid != null ? [e.lidJid] : [];
                          }),
                        ),
                  g = r("WAWebBroadcastListSync").getBroadcastListMutation(
                    e,
                    m,
                    n,
                    d,
                    f,
                  );
                yield o(
                  "WAWebBroadcastListStorageUtils",
                ).updateBroadcastListStorage(
                  {
                    audienceExpression: f,
                    id: e,
                    isWebCreatedList: i,
                    listName: n,
                    timestamp: d,
                  },
                  [g],
                );
              } catch (e) {
                throw (
                  o("WALogger").ERROR(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "[broadcast:list-action] ",
                        " failed: ",
                        "",
                      ])),
                    _,
                    e,
                  ),
                  o("WAWebToastManager").ToastManager.open(
                    p.jsx(o("WAWebToast.react").Toast, {
                      action: { actionText: s._(/*BTDS*/ "OK"), dismiss: !0 },
                      msg: s._(
                        /*BTDS*/ "Couldn't update broadcast audience. Please try again.",
                      ),
                      id: o("WAWebToast.react").genId(),
                    }),
                  ),
                  e
                );
              }
            }
          },
        )),
        b.apply(this, arguments)
      );
    }
    function v(e) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WATimeUtils").unixTime(),
            n = o("WAWebWidFactory").createWid(e);
          try {
            var a = r("WAWebBroadcastListSync").getDeleteBroadcastListMutation(
                e,
                t,
              ),
              i = yield r("WAWebDeleteChatSync").getDeleteChatMutation(
                o("WATimeUtils").unixTimeMs(),
                n,
              );
            yield o(
              "WAWebBroadcastListStorageUtils",
            ).removeBroadcastListStorage(e, [a, i]);
          } catch (e) {
            throw (
              o("WALogger").ERROR(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[broadcast:list-action] ",
                    " failed: ",
                    "",
                  ])),
                f,
                e,
              ),
              e
            );
          }
        })),
        S.apply(this, arguments)
      );
    }
    function R(e, t) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n,
            a = o("WAWebWidFactory").createWid(e),
            i = r("WAWebBroadcastMetadataCollection").get(a),
            l =
              (n =
                i == null
                  ? void 0
                  : i.recipients.map(function (e) {
                      return e.contact;
                    })) != null
                ? n
                : [],
            s = g(l);
          return C(e, s, t);
        })),
        L.apply(this, arguments)
      );
    }
    function E(e, t) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n,
            r = o("WAWebWidFactory").createWid(e),
            a = o("WAWebChatCollection").ChatCollection.get(r),
            i = (n = a == null ? void 0 : a.name.trim()) != null ? n : "",
            l = g(t);
          yield C(e, l, i);
        })),
        k.apply(this, arguments)
      );
    }
    function I(e) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.audienceExpression,
            n = e.broadcastListName,
            r = e.contacts,
            a = n.trim(),
            i = o("WAWebBroadcastListIdUtils").createBroadcastListJid(
              function (e) {
                var t = o("WAWebWidFactory").createWid(e);
                return o("WAWebChatCollection").ChatCollection.get(t) != null;
              },
            );
          return (yield C(i, r, a, t, !0), i);
        })),
        T.apply(this, arguments)
      );
    }
    function D(e, t) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          t === void 0 && (t = "");
          var n = g(e),
            r = yield I({ broadcastListName: t, contacts: n });
          return r;
        })),
        x.apply(this, arguments)
      );
    }
    ((l.editBroadcastListAction = C),
      (l.deleteBroadcastListAction = v),
      (l.renameBroadcastListAction = R),
      (l.updateBroadcastRecipientsAction = E),
      (l.createBroadcastListAction = I),
      (l.createBroadcastListFromContactModel = D));
  },
  226,
);
