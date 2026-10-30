__d(
  "WAWebBroadcastListAction",
  [
    "fbt",
    "WAJids",
    "WALogger",
    "WATimeUtils",
    "WAWebAudienceExpressionTypes",
    "WAWebBizBroadcastProListUtils",
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
    "WAWebNoop",
    "WAWebWidFactory",
    "WDSToastImperativeHost",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d,
      m = "update",
      p = "delete";
    function _(e) {
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
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
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
                ? babelHelpers.extends({}, e, { lid: n.lid })
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
        g.apply(this, arguments)
      );
    }
    function h(e, t, n, r, o) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, o) {
            return C({
              audienceExpression: r,
              contacts: t,
              id: e,
              isWebCreatedList: o,
              listName: n,
            });
          },
        )),
        y.apply(this, arguments)
      );
    }
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.audienceExpression,
            n = e.contacts,
            a = e.customAudienceFbid,
            i = e.id,
            l = e.isWebCreatedList,
            d = e.listName,
            p = a == null ? void 0 : a.trim(),
            _ = p != null && p.length > 0 ? p : void 0,
            g = _ != null ? { customAudienceFbid: _ } : {},
            h = o("WAWebBizBroadcastProListUtils").isBizBroadcastProList(_);
          if (!(n.length === 0 && !h)) {
            var y = yield f(n),
              C = o("WATimeUtils").unixTimeMs(),
              b = y.flatMap(function (e) {
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
            b.length === 0 &&
              n.length > 0 &&
              o("WALogger")
                .ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[broadcast:list-action] failed: no participants for jid ",
                      "",
                    ])),
                  i,
                )
                .sendLogs("business-broadcast-no-participants");
            try {
              var v =
                  t != null
                    ? t
                    : o(
                        "WAWebAudienceExpressionTypes",
                      ).createExplicitExpression(
                        b.flatMap(function (e) {
                          return e.lidJid != null ? [e.lidJid] : [];
                        }),
                      ),
                S = r("WAWebBroadcastListSync").getBroadcastListMutation(
                  babelHelpers.extends({}, g, {
                    expression: v,
                    id: i,
                    listName: d,
                    participants: b,
                    timestamp: C,
                  }),
                );
              yield o(
                "WAWebBroadcastListStorageUtils",
              ).updateBroadcastListStorage(
                babelHelpers.extends({ audienceExpression: v }, g, {
                  id: i,
                  isBizBroadcastPro: h,
                  isWebCreatedList: l,
                  listName: d,
                  shouldInsertInitialSystemMessages: !0,
                  timestamp: o("WATimeUtils").castMilliSecondsToUnixTime(C),
                }),
                [S],
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
                  m,
                  e,
                ),
                h ||
                  o("WDSToastImperativeHost").showWDSToast({
                    action: {
                      label: s._(/*BTDS*/ "OK"),
                      onPress: r("WAWebNoop"),
                    },
                    message: s._(
                      /*BTDS*/ "Couldn't update broadcast audience. Please try again.",
                    ),
                  }),
                e
              );
            }
          }
        })),
        b.apply(this, arguments)
      );
    }
    function v(e) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WATimeUtils").unixTimeMs(),
            n = o("WAWebWidFactory").createWid(e);
          try {
            var a = r("WAWebBroadcastListSync").getDeleteBroadcastListMutation(
                e,
                t,
              ),
              i = yield r("WAWebDeleteChatSync").getDeleteChatMutation(t, n);
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
                p,
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
            s = _(l);
          return h(e, s, t);
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
            l = _(t);
          yield h(e, l, i);
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
            a = e.customAudienceFbid,
            i = n.trim(),
            l = o("WAWebBroadcastListIdUtils").createBroadcastListJid(
              function (e) {
                var t = o("WAWebWidFactory").createWid(e);
                return o("WAWebChatCollection").ChatCollection.get(t) != null;
              },
            );
          return (
            yield C({
              audienceExpression: t,
              contacts: r,
              customAudienceFbid: a,
              id: l,
              isWebCreatedList: !0,
              listName: i,
            }),
            l
          );
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
          var n = _(e),
            r = yield I({ broadcastListName: t, contacts: n });
          return r;
        })),
        x.apply(this, arguments)
      );
    }
    ((l.editBroadcastListAction = h),
      (l.deleteBroadcastListAction = v),
      (l.renameBroadcastListAction = R),
      (l.updateBroadcastRecipientsAction = E),
      (l.createBroadcastListAction = I),
      (l.createBroadcastListFromContactModel = D));
  },
  226,
);
