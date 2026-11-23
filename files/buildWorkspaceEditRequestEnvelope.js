__d(
  "buildWorkspaceEditRequestEnvelope",
  ["maibaEscapeAttr"],
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
    function s(t, n, o) {
      var a =
          o.workspaceType != null && o.workspaceType !== ""
            ? ' workspace_type="' + r("maibaEscapeAttr")(o.workspaceType) + '"'
            : "",
        i = t.map(function (e) {
          return (
            '  <section level="' +
            e.level +
            '" ad_object_id="' +
            r("maibaEscapeAttr")(e.adObjectID) +
            '" ' +
            ('kind="' +
              r("maibaEscapeAttr")(e.field) +
              '">' +
              r("maibaEscapeAttr")(e.prompt) +
              "</section>")
          );
        }),
        l = n.map(function (t) {
          var n =
              t.originalValue == null
                ? ""
                : ' from="' + r("maibaEscapeAttr")(e(t.originalValue)) + '"',
            o = ' to="' + r("maibaEscapeAttr")(e(t.value)) + '"';
          return (
            '  <field level="' +
            t.level +
            '" ad_object_id="' +
            r("maibaEscapeAttr")(t.adObjectID) +
            '" ' +
            ('path="' + r("maibaEscapeAttr")(t.field) + '"' + n + o + " />")
          );
        });
      return [
        '<workspace-edit-request draft_id="' +
          r("maibaEscapeAttr")(o.draftID) +
          '"' +
          a +
          ">",
      ]
        .concat(i, l, ["</workspace-edit-request>"])
        .join("\n");
    }
    l.default = s;
  },
  98,
);
