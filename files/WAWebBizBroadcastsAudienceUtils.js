__d(
  "WAWebBizBroadcastsAudienceUtils",
  [
    "fbt",
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
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = 100;
    function d() {
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
    function m(e, t, n) {
      var a = e.broadcastJid,
        i = o("WAWebToast.react").genId(),
        l =
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
        u.jsx(o("WAWebToast.react").Toast, {
          id: i,
          msg: l,
          action: {
            actionText: r("WAWebFbtCommon")("Undo"),
            onAction: function () {
              (async function () {
                await o("WAWebBroadcastListAction")
                  .deleteBroadcastListAction(a)
                  .then(function () {
                    return n();
                  })
                  .finally(function () {
                    return o("WAWebToastManager").ToastManager.close(i);
                  });
              })();
            },
          },
        }),
      );
    }
    function p(e, t, n, a) {
      var i = o("WAWebToast.react").genId();
      o("WAWebToastManager").ToastManager.open(
        u.jsx(o("WAWebToast.react").Toast, {
          id: i,
          msg: o(
            "WAWebBizBroadcastsCreationStrings",
          ).getAudienceUpdatedToastLabel(),
          action: {
            actionText: r("WAWebFbtCommon")("Undo"),
            onAction: function () {
              (async function () {
                await o("WAWebBroadcastListAction")
                  .editBroadcastListAction(e, n, t)
                  .then(function () {
                    return a();
                  })
                  .finally(function () {
                    return o("WAWebToastManager").ToastManager.close(i);
                  });
              })();
            },
          },
        }),
      );
    }
    function _(e, t) {
      var n = o("WAWebToast.react").genId();
      o("WAWebToastManager").ToastManager.open(
        u.jsx(o("WAWebToast.react").Toast, {
          id: n,
          msg: o(
            "WAWebBizBroadcastsAudienceSelectionStrings",
          ).getEditErrorSuccessToastLabel(e),
          action: { actionText: r("WAWebFbtCommon")("Undo"), onAction: t },
        }),
      );
    }
    function f(e, t) {
      var n = o("WAWebToast.react").genId();
      o("WAWebToastManager").ToastManager.open(
        u.jsx(o("WAWebToast.react").Toast, {
          id: n,
          msg: o(
            "WAWebBizBroadcastsAudienceSelectionStrings",
          ).getDeleteAllErrorsSuccessToastLabel(e),
          action: { actionText: r("WAWebFbtCommon")("Undo"), onAction: t },
        }),
      );
    }
    function g(e, t) {
      var n = o("WAWebToast.react").genId();
      o("WAWebToastManager").ToastManager.open(
        u.jsx(o("WAWebToast.react").Toast, {
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
    function h(e, t) {
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
    function y(e) {
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
    ((l.MAX_AUDIENCE_NAME_LENGTH = c),
      (l.getBroadcastChatsAsAudiences = d),
      (l.showCreateAudienceSuccessToast = m),
      (l.showUpdateAudienceSuccessToast = p),
      (l.showImportAudienceEditContactSuccessToast = _),
      (l.showImportAudienceDeleteAllContactsSuccessToast = f),
      (l.showImportAudienceDeleteErrorSuccessToast = g),
      (l.buildAudienceNameForCard = h),
      (l.buildAudienceNameFromRecipients = y));
  },
  226,
);
