__d(
  "WAWebBizBroadcastsAudienceUtils",
  [
    "fbt",
    "Promise",
    "WALogger",
    "WAWebAudienceExpressionTypes",
    "WAWebBizBroadcastsAudienceSelectionStrings",
    "WAWebBizBroadcastsAudienceStrings",
    "WAWebBizBroadcastsCreationStrings",
    "WAWebBizBroadcastsRecipientUtils",
    "WAWebBroadcastListAction",
    "WAWebChatCollection",
    "WAWebChatGetters",
    "WAWebChatGroupUtils",
    "WAWebFbtCommon",
    "WAWebFrontendContactGetters",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d = c || (c = o("react")),
      m = 100;
    function p() {
      var e = o("WAWebChatCollection").ChatCollection.filter(function (e) {
        return o("WAWebChatGetters").getIsBroadcast(e) && !e.id.isStatus();
      });
      return e.map(function (e) {
        var t, n, r, a, i;
        return {
          audienceExpression:
            (t =
              (n = e.broadcastMetadata) == null
                ? void 0
                : n.audienceExpression) != null
              ? t
              : o("WAWebAudienceExpressionTypes").DEFAULT_AUDIENCE_EXPRESSION,
          broadcastJid: o("WAWebWidToJid").widToBroadcastJid(e.id),
          lastBroadcastTimestamp: null,
          name:
            (r = o("WAWebChatGroupUtils").getBroadcastChatTitle(e)) != null
              ? r
              : "",
          recipientCount:
            (a =
              (i = e.broadcastMetadata) == null
                ? void 0
                : i.recipients.length) != null
              ? a
              : 0,
        };
      });
    }
    function _(e) {
      var t = e.action,
        a = e.audienceListItem,
        i = e.onRefreshAudienceList,
        l = a.broadcastJid,
        s = o("WAWebToast.react").genId(),
        u =
          t === "create"
            ? o(
                "WAWebBizBroadcastsCreationStrings",
              ).getAudienceCreatedToastLabel()
            : t === "import"
              ? o(
                  "WAWebBizBroadcastsCreationStrings",
                ).getAudienceImportedToastLabel()
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      t,
                  );
                })();
      o("WAWebToastManager").ToastManager.open(
        d.jsx(o("WAWebToast.react").Toast, {
          id: s,
          msg: u,
          action:
            i == null
              ? null
              : {
                  actionText: r("WAWebFbtCommon")("Undo"),
                  onAction: function () {
                    n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                      yield o("WAWebBroadcastListAction")
                        .deleteBroadcastListAction(l)
                        .then(function () {
                          return i();
                        })
                        .finally(function () {
                          return o("WAWebToastManager").ToastManager.close(s);
                        });
                    })();
                  },
                },
        }),
      );
    }
    function f(e, t, a, i) {
      var l = o("WAWebToast.react").genId();
      o("WAWebToastManager").ToastManager.open(
        d.jsx(o("WAWebToast.react").Toast, {
          id: l,
          msg: o(
            "WAWebBizBroadcastsCreationStrings",
          ).getAudienceUpdatedToastLabel(),
          action: {
            actionText: r("WAWebFbtCommon")("Undo"),
            onAction: function () {
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                yield o("WAWebBroadcastListAction")
                  .editBroadcastListAction(e, a, t)
                  .then(function () {
                    return i();
                  })
                  .finally(function () {
                    return o("WAWebToastManager").ToastManager.close(l);
                  });
              })();
            },
          },
        }),
      );
    }
    function g(e, t) {
      var n = o("WAWebToast.react").genId();
      o("WAWebToastManager").ToastManager.open(
        d.jsx(o("WAWebToast.react").Toast, {
          id: n,
          msg: o(
            "WAWebBizBroadcastsAudienceSelectionStrings",
          ).getEditErrorSuccessToastLabel(e),
          action: { actionText: r("WAWebFbtCommon")("Undo"), onAction: t },
        }),
      );
    }
    function h(e, t) {
      var n = o("WAWebToast.react").genId();
      o("WAWebToastManager").ToastManager.open(
        d.jsx(o("WAWebToast.react").Toast, {
          id: n,
          msg: o(
            "WAWebBizBroadcastsAudienceSelectionStrings",
          ).getDeleteAllErrorsSuccessToastLabel(e),
          action: { actionText: r("WAWebFbtCommon")("Undo"), onAction: t },
        }),
      );
    }
    function y(e, t) {
      var n = o("WAWebToast.react").genId();
      o("WAWebToastManager").ToastManager.open(
        d.jsx(o("WAWebToast.react").Toast, {
          id: n,
          msg: o(
            "WAWebBizBroadcastsAudienceSelectionStrings",
          ).getDeleteErrorSuccessToastLabel(e),
          action: {
            actionText: r("WAWebFbtCommon")("Undo"),
            onAction: function () {
              return t();
            },
          },
        }),
      );
    }
    function C(e, t) {
      if (e == null) return "";
      var n = o("WAWebBizBroadcastsAudienceStrings").getDurationLabelForDays(t);
      return e === "inactive_chats"
        ? o("WAWebBizBroadcastsAudienceStrings")
            .getInactiveChatsAudienceName(n)
            .toString()
        : e === "active_chats"
          ? o("WAWebBizBroadcastsAudienceStrings")
              .getActiveChatsAudienceName(n)
              .toString()
          : "";
    }
    function b(e) {
      if (e == null || e.length === 0) return "";
      var t = [];
      for (var n of e) {
        if (t.length >= 3) break;
        var r = o("WAWebBizBroadcastsRecipientUtils").getContactByUserId(n);
        if (r != null) {
          var a = o("WAWebFrontendContactGetters").getDisplayName(r);
          a != null && a !== "" && t.push(a);
        }
      }
      if (t.length === 0) return "";
      var i = e.length - t.length;
      return i > 0
        ? s
            ._(/*BTDS*/ "{names} and {count} more", [
              s._param("names", t.join(", ")),
              s._param("count", i),
            ])
            .toString()
        : t.join(", ");
    }
    function v(e) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var a = [],
            i = [];
          return (
            yield t.reduce(
              (function () {
                var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (t, n) {
                    return (
                      yield t,
                      R(n)
                        .then(function (e) {
                          i.push(e);
                        })
                        .catch(function (t) {
                          (a.push(n),
                            o("WALogger")
                              .ERROR(
                                e ||
                                  (e = babelHelpers.taggedTemplateLiteralLoose([
                                    "Failed to save smart-import audience",
                                  ])),
                              )
                              .catching(r("getErrorSafe")(t))
                              .sendLogs(
                                "business-broadcast-smart-import-segment-save-failed",
                              ));
                        })
                    );
                  },
                );
                return function (e, n) {
                  return t.apply(this, arguments);
                };
              })(),
              (u || (u = n("Promise"))).resolve(),
            ),
            { failedAudiences: a, savedAudiences: i }
          );
        })),
        S.apply(this, arguments)
      );
    }
    function R(e) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.contacts.map(function (e) {
              var t;
              return {
                lid: (t = e.lid) == null ? void 0 : t.toString(),
                phone: e.phone,
              };
            }),
            n = e.name.trim(),
            r = yield o("WAWebBroadcastListAction").createBroadcastListAction({
              broadcastListName: n,
              contacts: t,
            });
          return {
            audienceExpression: o("WAWebAudienceExpressionTypes")
              .DEFAULT_AUDIENCE_EXPRESSION,
            broadcastJid: r,
            lastBroadcastTimestamp: null,
            name: n,
            recipientCount: t.length,
          };
        })),
        L.apply(this, arguments)
      );
    }
    ((l.MAX_AUDIENCE_NAME_LENGTH = m),
      (l.getBroadcastChatsAsAudiences = p),
      (l.showCreateAudienceSuccessToast = _),
      (l.showUpdateAudienceSuccessToast = f),
      (l.showImportAudienceEditContactSuccessToast = g),
      (l.showImportAudienceDeleteAllContactsSuccessToast = h),
      (l.showImportAudienceDeleteErrorSuccessToast = y),
      (l.buildAudienceNameForCard = C),
      (l.buildAudienceNameFromRecipients = b),
      (l.persistAudienceDraftsSequentially = v));
  },
  226,
);
