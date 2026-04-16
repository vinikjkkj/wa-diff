__d(
  "WAWebBroadcastListAction",
  [
    "fbt",
    "WAJids",
    "WALogger",
    "WATimeUtils",
    "WAWebAudienceExpressionTypes",
    "WAWebBizBroadcastsContactVerifier",
    "WAWebBizBroadcastsFileProcessor",
    "WAWebBroadcastListIdUtils",
    "WAWebBroadcastListStorageUtils",
    "WAWebBroadcastListSync",
    "WAWebBroadcastMetadataCollection",
    "WAWebChatCollection",
    "WAWebContactGetters",
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
      m = d || (d = o("react")),
      p = "update",
      _ = "delete";
    function f(e) {
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
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.filter(function (e) {
            return e.lid == null;
          });
          if (n.length === 0) return t;
          try {
            var a = n.map(function (e) {
                return o(
                  "WAWebBizBroadcastsFileProcessor",
                ).normalizePhoneNumber(e.phone);
              }),
              i = yield o(
                "WAWebBizBroadcastsContactVerifier",
              ).verifyWhatsAppUsers(a);
            return t.map(function (e) {
              if (e.lid != null) return e;
              var t = o("WAWebBizBroadcastsFileProcessor").normalizePhoneNumber(
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
        h.apply(this, arguments)
      );
    }
    function y(e, t, n, r, o) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a, i) {
            if (t.length !== 0) {
              var l = yield g(t),
                c = o("WATimeUtils").unixTime(),
                d = l.flatMap(function (e) {
                  var t = o(
                      "WAWebBizBroadcastsFileProcessor",
                    ).normalizePhoneNumber(e.phone),
                    n = e.lid;
                  if (n == null) return [];
                  var r = {
                    lidJid: n,
                    pnJid: t !== "" ? o("WAJids").toPhoneUserJid(t) : void 0,
                  };
                  return [r];
                });
              try {
                var _ =
                    a != null
                      ? a
                      : o(
                          "WAWebAudienceExpressionTypes",
                        ).createExplicitExpression(
                          d.flatMap(function (e) {
                            return e.lidJid != null ? [e.lidJid] : [];
                          }),
                        ),
                  f = r("WAWebBroadcastListSync").getBroadcastListMutation(
                    e,
                    d,
                    n,
                    c,
                    _,
                  );
                yield o(
                  "WAWebBroadcastListStorageUtils",
                ).updateBroadcastListStorage(
                  {
                    audienceExpression: _,
                    id: e,
                    isWebCreatedList: i,
                    listName: n,
                    timestamp: c,
                  },
                  [f],
                );
              } catch (e) {
                throw (
                  o("WALogger").ERROR(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[broadcast:list-action] ",
                        " failed: ",
                        "",
                      ])),
                    p,
                    e,
                  ),
                  o("WAWebToastManager").ToastManager.open(
                    m.jsx(o("WAWebToast.react").Toast, {
                      action: { actionText: s._(/*BTDS*/ "OK"), dismiss: !0 },
                      msg: s._(
                        /*BTDS*/ "Failed to update broadcast audience. Please try again.",
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
        C.apply(this, arguments)
      );
    }
    function b(e) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WATimeUtils").unixTime();
          try {
            var n = r("WAWebBroadcastListSync").getDeleteBroadcastListMutation(
              e,
              t,
            );
            yield o(
              "WAWebBroadcastListStorageUtils",
            ).removeBroadcastListStorage(e, [n]);
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
              e
            );
          }
        })),
        v.apply(this, arguments)
      );
    }
    function S(e, t) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
            s = f(l);
          return y(e, s, t);
        })),
        R.apply(this, arguments)
      );
    }
    function L(e, t) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n,
            r = o("WAWebWidFactory").createWid(e),
            a = o("WAWebChatCollection").ChatCollection.get(r),
            i = (n = a == null ? void 0 : a.name.trim()) != null ? n : "",
            l = f(t);
          yield y(e, l, i);
        })),
        E.apply(this, arguments)
      );
    }
    function k(e, t, n) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = t.trim(),
            a = o("WAWebBroadcastListIdUtils").createBroadcastListJid(
              function (e) {
                var t = o("WAWebWidFactory").createWid(e);
                return o("WAWebChatCollection").ChatCollection.get(t) != null;
              },
            );
          return (yield y(a, e, r, n, !0), a);
        })),
        I.apply(this, arguments)
      );
    }
    function T(e, t) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          t === void 0 && (t = "");
          var n = f(e),
            r = yield k(n, t);
          return r;
        })),
        D.apply(this, arguments)
      );
    }
    ((l.editBroadcastListAction = y),
      (l.deleteBroadcastListAction = b),
      (l.renameBroadcastListAction = S),
      (l.updateBroadcastRecipientsAction = L),
      (l.createBroadcastListAction = k),
      (l.createBroadcastListFromContactModel = T));
  },
  226,
);
