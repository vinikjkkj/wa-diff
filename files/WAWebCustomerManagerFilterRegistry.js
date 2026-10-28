__d(
  "WAWebCustomerManagerFilterRegistry",
  [
    "WAWebBizLabelUtils",
    "WAWebBoolFunc",
    "WAWebChatGetters",
    "WAWebCustomerManagerChatResolver",
    "WAWebCustomerManagerCustomerProfileDecoders",
    "WAWebCustomerManagerDateRangeUtils",
    "WAWebCustomerManagerLastMessageRangeSecondsBounds",
    "WAWebCustomerManagerSearchUtils",
    "WAWebCustomerProfileAcquisitionSource",
    "WAWebLabelCollection",
    "WAWebLeadListConstants",
    "WAWebListItemParentType",
    "WAWebNullFunc",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = [
        "leadStage",
        "acquisitionSource",
        "label",
        "lastMessage",
        "lastMessageCustomRange",
        "unread",
      ];
    function u(e) {
      return e === "leadStage"
        ? c
        : e === "acquisitionSource"
          ? d
          : e === "label"
            ? m
            : e === "lastMessage"
              ? p
              : e === "lastMessageCustomRange"
                ? _
                : e === "unread"
                  ? f
                  : (function () {
                      throw Error(
                        "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                          e,
                      );
                    })();
    }
    var c = {
        isClientActive: o("WAWebBoolFunc").returnFalse,
        matcher: function () {
          return o("WAWebBoolFunc").returnTrue;
        },
        serverFilter: (e = o("WAWebNullFunc")).returnNull,
      },
      d = {
        isClientActive: function (t) {
          return (
            t.acquisitionSource ===
            o("WAWebCustomerProfileAcquisitionSource")
              .PROFILE_ACQUISITION_SOURCE_UNKNOWN
          );
        },
        matcher: function () {
          return function (e) {
            return (
              e.acquisitionSource == null ||
              e.acquisitionSource ===
                o("WAWebCustomerProfileAcquisitionSource")
                  .PROFILE_ACQUISITION_SOURCE_UNKNOWN
            );
          };
        },
        serverFilter: function (t) {
          var e = (function (e) {
            if (
              e == null ||
              e ===
                o("WAWebCustomerProfileAcquisitionSource")
                  .PROFILE_ACQUISITION_SOURCE_UNKNOWN
            )
              return null;
            {
              var t = e;
              return o(
                "WAWebCustomerManagerCustomerProfileDecoders",
              ).toAcquisitionSourceFilterText(t);
            }
          })(t.acquisitionSource);
          return e == null
            ? null
            : { fieldName: "acquisition_source", filterText: e };
        },
      },
      m = {
        isClientActive: function (t) {
          return t.labelId != null && !y(t);
        },
        matcher: function (t) {
          var e = t.labelId;
          if (e == null || y(t)) return o("WAWebBoolFunc").returnTrue;
          var n = new Set();
          if (
            e === o("WAWebCustomerManagerSearchUtils").NO_OTHER_LIST_FILTER_ID
          ) {
            var r = function (t) {
              var e,
                r =
                  (e = o("WAWebLabelCollection").LabelCollection.findFirst(
                    function (e) {
                      return e.predefinedId === t;
                    },
                  )) == null
                    ? void 0
                    : e.id;
              r != null && n.add(r);
            };
            for (var a of o("WAWebCustomerManagerSearchUtils")
              .BOARD_STRUCTURAL_PREDEFINED_IDS)
              r(a);
          }
          return function (t) {
            var r = String(t.chatJid);
            return e === o("WAWebCustomerManagerSearchUtils").NO_LABEL_FILTER_ID
              ? o("WAWebBizLabelUtils").getLabelsForModelAnyAddressingMode(
                  r,
                  o("WAWebListItemParentType").LabelItemParentType.Chat,
                ).length === 0
              : e ===
                  o("WAWebCustomerManagerSearchUtils").NO_OTHER_LIST_FILTER_ID
                ? o("WAWebBizLabelUtils")
                    .getLabelsForModelAnyAddressingMode(
                      r,
                      o("WAWebListItemParentType").LabelItemParentType.Chat,
                    )
                    .every(function (e) {
                      return n.has(e);
                    })
                : o("WAWebBizLabelUtils").hasLabelForModelAnyAddressingMode(
                    r,
                    o("WAWebListItemParentType").LabelItemParentType.Chat,
                    e,
                  );
          };
        },
        serverFilter: e.returnNull,
      },
      p = {
        isClientActive: function (t) {
          return t.lastMessageRange != null;
        },
        matcher: function (t) {
          var e = g({
            lastMessageCustomRange: null,
            lastMessageRange: t.lastMessageRange,
          });
          return function (t) {
            return e(h(t));
          };
        },
        serverFilter: e.returnNull,
      },
      _ = {
        isClientActive: function (t) {
          return t.lastMessageCustomRange != null;
        },
        matcher: function (t) {
          var e = g({
            lastMessageCustomRange: t.lastMessageCustomRange,
            lastMessageRange: null,
          });
          return function (t) {
            return e(h(t));
          };
        },
        serverFilter: e.returnNull,
      },
      f = {
        isClientActive: function (t) {
          return t.unreadOnly === !0;
        },
        matcher: function (t) {
          return t.unreadOnly !== !0
            ? o("WAWebBoolFunc").returnTrue
            : function (e) {
                var t = o(
                  "WAWebCustomerManagerChatResolver",
                ).resolveCustomerManagerChat(e.chatJid);
                return t != null && o("WAWebChatGetters").getHasUnread(t);
              };
        },
        serverFilter: e.returnNull,
      };
    function g(e, t) {
      t === void 0 && (t = new Date());
      var n =
          e.lastMessageRange == null
            ? null
            : o(
                "WAWebCustomerManagerLastMessageRangeSecondsBounds",
              ).lastMessageRangeSecondsBounds(e.lastMessageRange, t),
        r = e.lastMessageCustomRange,
        a =
          r == null
            ? null
            : o(
                "WAWebCustomerManagerDateRangeUtils",
              ).getCustomRangeSecondsBounds(r.start, r.end);
      return n == null && a == null
        ? o("WAWebBoolFunc").returnTrue
        : function (e) {
            return (
              e != null &&
              (n == null ||
                (e >= n.startSec && (n.endSec == null || e <= n.endSec))) &&
              (a == null || (e >= a.startSec && e <= a.endSec))
            );
          };
    }
    function h(e) {
      var t;
      return (t = o(
        "WAWebCustomerManagerChatResolver",
      ).resolveCustomerManagerChat(e.chatJid)) == null
        ? void 0
        : t.t;
    }
    function y(e) {
      var t,
        n = e.labelId;
      return (
        n != null &&
        e.leadStages.length === 1 &&
        ((t = o("WAWebLabelCollection").LabelCollection.get(n)) == null
          ? void 0
          : t.predefinedId) ===
          o("WAWebLeadListConstants").LEAD_LIST_PREDEFINED_ID
      );
    }
    ((l.CUSTOMER_MANAGER_FILTER_KEYS = s),
      (l.getFilterSpec = u),
      (l.createLastMessageTimeMatcher = g));
  },
  98,
);
