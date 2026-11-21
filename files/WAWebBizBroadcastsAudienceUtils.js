__d(
  "WAWebBizBroadcastsAudienceUtils",
  [
    "fbt",
    "Promise",
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
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = 100;
    function d() {
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
    function m(e) {
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
    function p() {
      o("WDSToastImperativeHost").showWDSToast({
        message: o(
          "WAWebBizBroadcastsCreationStrings",
        ).getAudienceCreatedToastLabel(),
      });
    }
    function _(e, t, n, a) {
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
    function f(e, t) {
      o("WDSToastImperativeHost").showWDSToast({
        action: { label: r("WAWebFbtCommon")("Undo"), onPress: t },
        message: o(
          "WAWebBizBroadcastsAudienceSelectionStrings",
        ).getEditErrorSuccessToastLabel(e),
      });
    }
    function g(e, t) {
      o("WDSToastImperativeHost").showWDSToast({
        action: { label: r("WAWebFbtCommon")("Undo"), onPress: t },
        message: o(
          "WAWebBizBroadcastsAudienceSelectionStrings",
        ).getDeleteAllErrorsSuccessToastLabel(e),
      });
    }
    function h(e, t) {
      o("WDSToastImperativeHost").showWDSToast({
        action: { label: r("WAWebFbtCommon")("Undo"), onPress: t },
        message: o(
          "WAWebBizBroadcastsAudienceSelectionStrings",
        ).getDeleteErrorSuccessToastLabel(e),
      });
    }
    function y(e, t) {
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
    function C(e) {
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
            ._(/*BTDS*/ "{names} and {count} more", [
              s._param("names", t.join(", ")),
              s._param("count", i),
            ])
            .toString()
        : t.join(", ");
    }
    function b(e, t) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a) {
          var i = [],
            l = [],
            s = o(
              "WAWebBizBroadcastAudienceDuplicateCheck",
            ).createImportAudienceDuplicateCheck(),
            c = s.countSavedAudience,
            d = s.markSaveFailed;
          return (
            yield t.reduce(
              (function () {
                var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (t, n) {
                    return (
                      yield t,
                      S(n, c, a)
                        .then(function (e) {
                          l.push(e);
                        })
                        .catch(function (t) {
                          (d(),
                            i.push(n),
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
            { failedAudiences: i, savedAudiences: l }
          );
        })),
        v.apply(this, arguments)
      );
    }
    function S(e, t, n) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = e.contacts.map(function (e) {
              return { lid: e.lid, phone: e.phone };
            }),
            a = e.name.trim(),
            i = yield o("WAWebBroadcastListAction").createBroadcastListAction({
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
        })),
        R.apply(this, arguments)
      );
    }
    ((l.MAX_AUDIENCE_NAME_LENGTH = c),
      (l.getBroadcastChatsAsAudiences = d),
      (l.showCreateAudienceSuccessToast = m),
      (l.showAudienceCreatedWithoutChatToast = p),
      (l.showUpdateAudienceSuccessToast = _),
      (l.showImportAudienceEditContactSuccessToast = f),
      (l.showImportAudienceDeleteAllContactsSuccessToast = g),
      (l.showImportAudienceDeleteErrorSuccessToast = h),
      (l.buildAudienceNameForCard = y),
      (l.buildAudienceNameFromRecipients = C),
      (l.persistAudienceDraftsSequentially = b));
  },
  226,
);
