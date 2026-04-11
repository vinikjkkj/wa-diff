__d(
  "WAWebBizBroadcastsAudienceUtils",
  [
    "WAWebAudienceExpressionTypes",
    "WAWebBizBroadcastsAudienceSelectionStrings",
    "WAWebBizBroadcastsCreationStrings",
    "WAWebBroadcastListAction",
    "WAWebChatCollection",
    "WAWebChatGetters",
    "WAWebChatGroupUtils",
    "WAWebFbtCommon",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = 100;
    function c() {
      var e = o("WAWebChatCollection").ChatCollection.filter(function (e) {
        return o("WAWebChatGetters").getIsBroadcast(e);
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
    function d(e, t, a) {
      var i = e.broadcastJid,
        l = o("WAWebToast.react").genId(),
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
        s.jsx(o("WAWebToast.react").Toast, {
          id: l,
          msg: u,
          action: {
            actionText: r("WAWebFbtCommon")("Undo"),
            onAction: function () {
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                yield o("WAWebBroadcastListAction")
                  .deleteBroadcastListAction(i)
                  .then(function () {
                    return a();
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
    function m(e, t, a, i) {
      var l = o("WAWebToast.react").genId();
      o("WAWebToastManager").ToastManager.open(
        s.jsx(o("WAWebToast.react").Toast, {
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
    function p(e, t) {
      var n = o("WAWebToast.react").genId();
      o("WAWebToastManager").ToastManager.open(
        s.jsx(o("WAWebToast.react").Toast, {
          id: n,
          msg: o(
            "WAWebBizBroadcastsAudienceSelectionStrings",
          ).getEditErrorSuccessToastLabel(e),
          action: { actionText: r("WAWebFbtCommon")("Undo"), onAction: t },
        }),
      );
    }
    function _(e, t) {
      var n = o("WAWebToast.react").genId();
      o("WAWebToastManager").ToastManager.open(
        s.jsx(o("WAWebToast.react").Toast, {
          id: n,
          msg: o(
            "WAWebBizBroadcastsAudienceSelectionStrings",
          ).getDeleteAllErrorsSuccessToastLabel(e),
          action: { actionText: r("WAWebFbtCommon")("Undo"), onAction: t },
        }),
      );
    }
    function f(e, t) {
      var n = o("WAWebToast.react").genId();
      o("WAWebToastManager").ToastManager.open(
        s.jsx(o("WAWebToast.react").Toast, {
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
    ((l.MAX_AUDIENCE_NAME_LENGTH = u),
      (l.getBroadcastChatsAsAudiences = c),
      (l.showCreateAudienceSuccessToast = d),
      (l.showUpdateAudienceSuccessToast = m),
      (l.showImportAudienceEditContactSuccessToast = p),
      (l.showImportAudienceDeleteAllContactsSuccessToast = _),
      (l.showImportAudienceDeleteErrorSuccessToast = f));
  },
  98,
);
