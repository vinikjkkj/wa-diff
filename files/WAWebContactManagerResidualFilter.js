__d(
  "WAWebContactManagerResidualFilter",
  [
    "WAWebChatCollection",
    "WAWebContactManagerDateRangeUtils",
    "WAWebContactManagerSearchUtils",
    "WAWebLabelCollection",
    "WAWebLeadStage",
    "WAWebListItemParentType",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 86400;
    function s(e, t) {
      var n = e;
      if (t.leadStages.length > 0) {
        var r = t.leadStages;
        n = n.filter(function (e) {
          var t = o("WAWebLeadStage").getLeadStageFromNumber(e.leadStage);
          return t != null && r.includes(t);
        });
      }
      if (t.acquisitionSource != null) {
        var a = t.acquisitionSource;
        n = n.filter(function (e) {
          return e.acquisitionSource === a;
        });
      }
      if (t.labelId != null) {
        var i = t.labelId;
        n = n.filter(function (e) {
          return u(String(e.chatJid), i);
        });
      }
      if (t.lastMessageRange != null) {
        var l = d(t.lastMessageRange);
        n = n.filter(function (e) {
          var t = c(e);
          return t != null && t >= l;
        });
      }
      if (t.lastMessageCustomRange != null) {
        var s = o(
            "WAWebContactManagerDateRangeUtils",
          ).getCustomRangeSecondsBounds(
            t.lastMessageCustomRange.start,
            t.lastMessageCustomRange.end,
          ),
          m = s.endSec,
          p = s.startSec;
        n = n.filter(function (e) {
          var t = c(e);
          return t != null && t >= p && t <= m;
        });
      }
      return n;
    }
    function u(e, t) {
      var n = o("WAWebLabelCollection").LabelCollection.getLabelsForModel(
        e,
        o("WAWebListItemParentType").LabelItemParentType.Chat,
      );
      return t === o("WAWebContactManagerSearchUtils").NO_LABEL_FILTER_ID
        ? n.length === 0
        : n.includes(t);
    }
    function c(e) {
      var t;
      return (t = o("WAWebChatCollection").ChatCollection.get(e.chatJid)) ==
        null
        ? void 0
        : t.t;
    }
    function d(t) {
      var n = new Date(),
        r = Math.floor(n.getTime() / 1e3);
      return t === "last_7_days"
        ? r - 7 * e
        : t === "last_14_days"
          ? r - 14 * e
          : t === "last_30_days"
            ? r - 30 * e
            : t === "last_3_months"
              ? m(n, 3)
              : t === "last_year"
                ? p(n, 1)
                : (function () {
                    throw Error(
                      "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                        t,
                    );
                  })();
    }
    function m(e, t) {
      return _(e, e.getFullYear(), e.getMonth() - t);
    }
    function p(e, t) {
      return _(e, e.getFullYear() - t, e.getMonth());
    }
    function _(e, t, n) {
      var r = new Date(t, n + 1, 0).getDate(),
        o = Math.min(e.getDate(), r);
      return Math.floor(new Date(t, n, o).getTime() / 1e3);
    }
    l.filterCustomersByResidual = s;
  },
  98,
);
