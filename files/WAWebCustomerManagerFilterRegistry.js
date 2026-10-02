__d(
  "WAWebCustomerManagerFilterRegistry",
  [
    "WAWebBizLabelUtils",
    "WAWebBoolFunc",
    "WAWebCustomerManagerChatResolver",
    "WAWebCustomerManagerCustomerProfileDecoders",
    "WAWebCustomerManagerDateRangeUtils",
    "WAWebCustomerManagerLastMessageRangeSecondsBounds",
    "WAWebCustomerManagerSearchUtils",
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
        isClientActive: o("WAWebBoolFunc").returnFalse,
        matcher: function () {
          return o("WAWebBoolFunc").returnTrue;
        },
        serverFilter: function (t) {
          if (t.acquisitionSource == null) return null;
          var e = o(
            "WAWebCustomerManagerCustomerProfileDecoders",
          ).toAcquisitionSourceFilterText(t.acquisitionSource);
          return e == null
            ? null
            : { fieldName: "acquisition_source", filterText: e };
        },
      },
      m = {
        isClientActive: function (t) {
          return t.labelId != null && !g(t);
        },
        matcher: function (t) {
          var e = t.labelId;
          if (e == null || g(t)) return o("WAWebBoolFunc").returnTrue;
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
            var r = o("WAWebBizLabelUtils").getLabelsForModelAnyAddressingMode(
              String(t.chatJid),
              o("WAWebListItemParentType").LabelItemParentType.Chat,
            );
            return e === o("WAWebCustomerManagerSearchUtils").NO_LABEL_FILTER_ID
              ? r.length === 0
              : e ===
                  o("WAWebCustomerManagerSearchUtils").NO_OTHER_LIST_FILTER_ID
                ? r.every(function (e) {
                    return n.has(e);
                  })
                : r.includes(e);
          };
        },
        serverFilter: e.returnNull,
      },
      p = {
        isClientActive: function (t) {
          return t.lastMessageRange != null;
        },
        matcher: function (t) {
          var e = t.lastMessageRange;
          if (e == null) return o("WAWebBoolFunc").returnTrue;
          var n = o(
              "WAWebCustomerManagerLastMessageRangeSecondsBounds",
            ).lastMessageRangeSecondsBounds(e),
            r = n.endSec,
            a = n.startSec;
          return function (e) {
            var t = f(e);
            return t != null && t >= a && (r == null || t <= r);
          };
        },
        serverFilter: e.returnNull,
      },
      _ = {
        isClientActive: function (t) {
          return t.lastMessageCustomRange != null;
        },
        matcher: function (t) {
          var e = t.lastMessageCustomRange;
          if (e == null) return o("WAWebBoolFunc").returnTrue;
          var n = o(
              "WAWebCustomerManagerDateRangeUtils",
            ).getCustomRangeSecondsBounds(e.start, e.end),
            r = n.endSec,
            a = n.startSec;
          return function (e) {
            var t = f(e);
            return t != null && t >= a && t <= r;
          };
        },
        serverFilter: e.returnNull,
      };
    function f(e) {
      var t;
      return (t = o(
        "WAWebCustomerManagerChatResolver",
      ).resolveCustomerManagerChat(e.chatJid)) == null
        ? void 0
        : t.t;
    }
    function g(e) {
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
    ((l.CUSTOMER_MANAGER_FILTER_KEYS = s), (l.getFilterSpec = u));
  },
  98,
);
