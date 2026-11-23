__d(
  "buildWorkspaceDraftSavedEnvelope",
  ["Instant", "maibaEscapeAttr"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      if (e == null) return "";
      if (typeof e == "object")
        try {
          var t = JSON.stringify(e);
          return t != null ? t : String(e);
        } catch (t) {
          return String(e);
        }
      return String(e);
    }
    function s(e) {
      return e === "start_time" || e === "stop_time";
    }
    function u(e, t, n) {
      return s(e)
        ? t == null || t === 0
          ? e === "stop_time"
            ? " " + n + '_semantic="continuous"'
            : ""
          : typeof t != "number" || !Number.isFinite(t)
            ? ""
            : " " + n + '_iso_utc="' + o("Instant").toISOString(t) + '"'
        : "";
    }
    function c(t, n) {
      var o =
          n.workspaceType != null && n.workspaceType !== ""
            ? ' workspace_type="' + r("maibaEscapeAttr")(n.workspaceType) + '"'
            : "",
        a = t.map(function (t) {
          var o =
              t.originalValue == null
                ? ""
                : ' from="' + r("maibaEscapeAttr")(e(t.originalValue)) + '"',
            a =
              t.originalValue == null
                ? ""
                : u(t.field, t.originalValue, "from"),
            i = ' to="' + r("maibaEscapeAttr")(e(t.value)) + '"',
            l = u(t.field, t.value, "to"),
            s = t.igDailyBudgetInCents,
            c =
              n.product === "ig" &&
              t.level === "L3" &&
              (t.field === "daily_budget" || t.field === "lifetime_budget") &&
              s != null &&
              Number.isSafeInteger(s) &&
              s > 0
                ? ' to_ig_daily_budget_in_cents="' + s + '"'
                : "";
          return (
            '  <field level="' +
            t.level +
            '" ad_object_id="' +
            r("maibaEscapeAttr")(t.adObjectID) +
            '" ' +
            ('path="' + r("maibaEscapeAttr")(t.field) + '"' + o) +
            ("" + a + i + l + c + " />")
          );
        });
      return [
        '<draft-saved draft_id="' +
          r("maibaEscapeAttr")(n.draftID) +
          '"' +
          o +
          ' lane="direct" mode="silent">',
      ]
        .concat(a, ["</draft-saved>"])
        .join("\n");
    }
    l.default = c;
  },
  98,
);
