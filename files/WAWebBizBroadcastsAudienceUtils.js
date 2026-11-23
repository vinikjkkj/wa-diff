__d(
  "WAWebBizBroadcastsAudienceUtils",
  [
    "fbt",
    "WALogger",
    "WAWebAudienceExpressionTypes",
    "WAWebBizBroadcastAudienceDuplicateCheck",
    "WAWebBizBroadcastsAudienceSelectionStrings",
    "WAWebBizBroadcastsAudienceStrings",
    "WAWebBizBroadcastsCreationStrings",
    "WAWebBizBroadcastsRecipientUtils",
    "WAWebBroadcastListAction",
    "WAWebChatCollection",
    "WAWebChatGetters",
    "WAWebChatGroupUtils",
    "WAWebFbtCommon",
    "WAWebWidToJid",
    "WDSToastImperativeHost",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = 100;
    function c() {
      var e = o("WAWebChatCollection").ChatCollection.filter(function (e) {
        return o("WAWebChatGetters").getIsBroadcast(e) && !e.id.isStatus();
      });
      return e.map(function (e) {
        var t, n, r, a, i, l;
        return babelHelpers.extends(
          {
            audienceExpression:
              (t =
                (n = e.broadcastMetadata) == null
                  ? void 0
                  : n.audienceExpression) != null
                ? t
                : o("WAWebAudienceExpressionTypes").DEFAULT_AUDIENCE_EXPRESSION,
            broadcastJid: o("WAWebWidToJid").widToBroadcastJid(e.id),
          },
          ((r = e.broadcastMetadata) == null ? void 0 : r.customAudienceFbid) !=
            null
            ? { customAudienceFbid: e.broadcastMetadata.customAudienceFbid }
            : {},
          {
            lastBroadcastTimestamp: null,
            name:
              (a = o("WAWebChatGroupUtils").getBroadcastChatTitle(e)) != null
                ? a
                : "",
            recipientCount:
              (i =
                (l = e.broadcastMetadata) == null
                  ? void 0
                  : l.recipients.length) != null
                ? i
                : 0,
          },
        );
      });
    }
    function d(e) {
      var t = e.action,
        n = e.audienceListItem,
        a = e.onRefreshAudienceList,
        i = n.broadcastJid,
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
      o("WDSToastImperativeHost").showWDSToast({
        action:
          a == null
            ? void 0
            : {
                label: r("WAWebFbtCommon")("Undo"),
                onPress: function () {
                  o("WAWebBroadcastListAction")
                    .deleteBroadcastListAction(i)
                    .then(function () {
                      return a();
                    });
                },
              },
        message: l,
      });
    }
    function m() {
      o("WDSToastImperativeHost").showWDSToast({
        message: o(
          "WAWebBizBroadcastsCreationStrings",
        ).getAudienceCreatedToastLabel(),
      });
    }
    function p(e, t, n, a) {
      o("WDSToastImperativeHost").showWDSToast({
        action: {
          label: r("WAWebFbtCommon")("Undo"),
          onPress: function () {
            o("WAWebBroadcastListAction")
              .editBroadcastListAction(e, n, t)
              .then(function () {
                return a();
              });
          },
        },
        message: o(
          "WAWebBizBroadcastsCreationStrings",
        ).getAudienceUpdatedToastLabel(),
      });
    }
    function _(e, t) {
      o("WDSToastImperativeHost").showWDSToast({
        action: { label: r("WAWebFbtCommon")("Undo"), onPress: t },
        message: o(
          "WAWebBizBroadcastsAudienceSelectionStrings",
        ).getEditErrorSuccessToastLabel(e),
      });
    }
    function f(e, t) {
      o("WDSToastImperativeHost").showWDSToast({
        action: { label: r("WAWebFbtCommon")("Undo"), onPress: t },
        message: o(
          "WAWebBizBroadcastsAudienceSelectionStrings",
        ).getDeleteAllErrorsSuccessToastLabel(e),
      });
    }
    function g(e, t) {
      o("WDSToastImperativeHost").showWDSToast({
        action: { label: r("WAWebFbtCommon")("Undo"), onPress: t },
        message: o(
          "WAWebBizBroadcastsAudienceSelectionStrings",
        ).getDeleteErrorSuccessToastLabel(e),
      });
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
          var a = o(
            "WAWebBizBroadcastsRecipientUtils",
          ).getRecipientPickerDisplayName(r);
          a !== "" && t.push(a);
        }
      }
      if (t.length === 0) return "";
      var i = e.length - t.length;
      return i > 0
        ? s
            ._(/*BTDS*/ "", [
              s._param("names", t.join(", ")),
              s._param("count", i),
            ])
            .toString()
        : t.join(", ");
    }
    async function C(t, n) {
      var a = [],
        i = [],
        l = o(
          "WAWebBizBroadcastAudienceDuplicateCheck",
        ).createImportAudienceDuplicateCheck(),
        s = l.countSavedAudience,
        u = l.markSaveFailed;
      return (
        await t.reduce(async function (t, l) {
          return (
            await t,
            b(l, s, n)
              .then(function (e) {
                i.push(e);
              })
              .catch(function (t) {
                (u(),
                  a.push(l),
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
        }, Promise.resolve()),
        { failedAudiences: a, savedAudiences: i }
      );
    }
    async function b(e, t, n) {
      var r = e.contacts.map(function (e) {
          return { lid: e.lid, phone: e.phone };
        }),
        a = e.name.trim(),
        i = await o("WAWebBroadcastListAction").createBroadcastListAction({
          broadcastListName: a,
          contacts: r,
          creationDuplicateCheck: { countSavedAudience: t, entryPoint: n },
        });
      return {
        audienceExpression: o("WAWebAudienceExpressionTypes")
          .DEFAULT_AUDIENCE_EXPRESSION,
        broadcastJid: i,
        lastBroadcastTimestamp: null,
        name: a,
        recipientCount: r.length,
      };
    }
    ((l.MAX_AUDIENCE_NAME_LENGTH = u),
      (l.getBroadcastChatsAsAudiences = c),
      (l.showCreateAudienceSuccessToast = d),
      (l.showAudienceCreatedWithoutChatToast = m),
      (l.showUpdateAudienceSuccessToast = p),
      (l.showImportAudienceEditContactSuccessToast = _),
      (l.showImportAudienceDeleteAllContactsSuccessToast = f),
      (l.showImportAudienceDeleteErrorSuccessToast = g),
      (l.buildAudienceNameForCard = h),
      (l.buildAudienceNameFromRecipients = y),
      (l.persistAudienceDraftsSequentially = C));
  },
  226,
);
