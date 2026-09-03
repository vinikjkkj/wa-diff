__d(
  "WAWebContactManagerFilterRegistry",
  [
    "WAWebBoolFunc",
    "WAWebChatCollection",
    "WAWebContactManagerCustomerProfileDecoders",
    "WAWebContactManagerDateRangeUtils",
    "WAWebContactManagerLastMessageCutoff",
    "WAWebContactManagerSearchUtils",
    "WAWebLabelCollection",
    "WAWebLeadStage",
    "WAWebListItemParentType",
    "WAWebNullFunc",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [
      "leadStage",
      "acquisitionSource",
      "label",
      "lastMessage",
      "lastMessageCustomRange",
    ];
    function s(e) {
      return e === "leadStage"
        ? u
        : e === "acquisitionSource"
          ? c
          : e === "label"
            ? d
            : e === "lastMessage"
              ? m
              : e === "lastMessageCustomRange"
                ? p
                : (function () {
                    throw Error(
                      "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                        e,
                    );
                  })();
    }
    var u = {
        isClientActive: function (t) {
          return (
            t.leadStages.length > 1 ||
            (t.leadStages.length === 1 &&
              o(
                "WAWebContactManagerCustomerProfileDecoders",
              ).toLeadStageFilterText(t.leadStages[0]) == null)
          );
        },
        matcher: function (t) {
          return function (e) {
            var n = o("WAWebLeadStage").getLeadStageFromNumber(e.leadStage);
            return n != null && t.leadStages.includes(n);
          };
        },
        serverFilter: function (t) {
          if (t.leadStages.length !== 1) return null;
          var e = o(
            "WAWebContactManagerCustomerProfileDecoders",
          ).toLeadStageFilterText(t.leadStages[0]);
          return e == null ? null : { fieldName: "lead_stage", filterText: e };
        },
      },
      c = {
        isClientActive: o("WAWebBoolFunc").returnFalse,
        matcher: function () {
          return o("WAWebBoolFunc").returnTrue;
        },
        serverFilter: function (t) {
          if (t.acquisitionSource == null) return null;
          var e = o(
            "WAWebContactManagerCustomerProfileDecoders",
          ).toAcquisitionSourceFilterText(t.acquisitionSource);
          return e == null
            ? null
            : { fieldName: "acquisition_source", filterText: e };
        },
      },
      d = {
        isClientActive: function (t) {
          return t.labelId != null;
        },
        matcher: function (t) {
          var e = t.labelId;
          return e == null
            ? o("WAWebBoolFunc").returnTrue
            : function (t) {
                var n = o(
                  "WAWebLabelCollection",
                ).LabelCollection.getLabelsForModel(
                  String(t.chatJid),
                  o("WAWebListItemParentType").LabelItemParentType.Chat,
                );
                return e ===
                  o("WAWebContactManagerSearchUtils").NO_LABEL_FILTER_ID
                  ? n.length === 0
                  : n.includes(e);
              };
        },
        serverFilter: o("WAWebNullFunc").returnNull,
      },
      m = {
        isClientActive: function (t) {
          return t.lastMessageRange != null;
        },
        matcher: function (t) {
          var e = t.lastMessageRange;
          if (e == null) return o("WAWebBoolFunc").returnTrue;
          var n = o(
            "WAWebContactManagerLastMessageCutoff",
          ).lastMessageCutoffTimestamp(e);
          return function (e) {
            var t = _(e);
            return t != null && t >= n;
          };
        },
        serverFilter: o("WAWebNullFunc").returnNull,
      },
      p = {
        isClientActive: function (t) {
          return t.lastMessageCustomRange != null;
        },
        matcher: function (t) {
          var e = t.lastMessageCustomRange;
          if (e == null) return o("WAWebBoolFunc").returnTrue;
          var n = o(
              "WAWebContactManagerDateRangeUtils",
            ).getCustomRangeSecondsBounds(e.start, e.end),
            r = n.endSec,
            a = n.startSec;
          return function (e) {
            var t = _(e);
            return t != null && t >= a && t <= r;
          };
        },
        serverFilter: o("WAWebNullFunc").returnNull,
      };
    function _(e) {
      var t;
      return (t = o("WAWebChatCollection").ChatCollection.get(e.chatJid)) ==
        null
        ? void 0
        : t.t;
    }
    ((l.CONTACT_MANAGER_FILTER_KEYS = e), (l.getFilterSpec = s));
  },
  98,
);
