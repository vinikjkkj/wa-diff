__d(
  "MAIBACreativeSuggestionsEditRequest",
  ["AdsAutoBetOverlayVersioning", "maibaEscapeAttr"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = null;
      for (var r of e)
        r.type === "text" && r.value.trim() !== "" && (n = r.value);
      var a = e.some(function (e) {
        return (
          e.id === o("AdsAutoBetOverlayVersioning").LOGO_ID &&
          e.type === "image"
        );
      });
      return t === "logo"
        ? a
          ? { kind: "logo" }
          : { kind: "logo_removed" }
        : t === "text"
          ? n == null
            ? { kind: "text_removed" }
            : { kind: "text", text: n }
          : n != null
            ? { kind: "text", text: n }
            : a
              ? { kind: "logo" }
              : null;
    }
    function s(e, t) {
      var n = function (t) {
        return String(Math.round(t * 10) / 10);
      };
      return (
        e.trim() +
        "\n\nApply this edit only within the selected image region: " +
        ("left " + n(t.leftPercent) + "%, ") +
        ("top " + n(t.topPercent) + "%, ") +
        ("width " + n(t.widthPercent) + "%, ") +
        ("height " + n(t.heightPercent) + "%. ") +
        "Preserve everything outside that region."
      );
    }
    function u(e) {
      var t,
        n,
        o,
        a = (t = (n = e.prompt) == null ? void 0 : n.trim()) != null ? t : "",
        i = a === "" ? "" : ' prompt="' + r("maibaEscapeAttr")(a) + '"',
        l =
          e.targetAspectRatio == null
            ? ""
            : ' target_aspect_ratio="' + e.targetAspectRatio + '"',
        s = (o = e.productMediaIDs) != null ? o : [],
        u =
          s.length === 0
            ? ""
            : ' product_media_ids="' + r("maibaEscapeAttr")(s.join(",")) + '"',
        c =
          e.overlayElementsBase64 == null || e.overlayElementsBase64 === ""
            ? ""
            : ' overlay_elements_base64="' +
              r("maibaEscapeAttr")(e.overlayElementsBase64) +
              '"',
        d =
          e.overlayEditKind == null
            ? ""
            : ' overlay_edit_kind="' + e.overlayEditKind + '"',
        m =
          e.workspaceID == null || e.workspaceID === ""
            ? ""
            : ' workspace_id="' + r("maibaEscapeAttr")(e.workspaceID) + '"',
        p =
          e.workspaceVersion == null
            ? ""
            : ' workspace_version="' + e.workspaceVersion + '"',
        _ =
          e.unitID == null || e.unitID === ""
            ? ""
            : ' unit_id="' + r("maibaEscapeAttr")(e.unitID) + '"',
        f =
          e.ideaID == null || e.ideaID === ""
            ? ""
            : ' idea_id="' + r("maibaEscapeAttr")(e.ideaID) + '"',
        g =
          e.adgroupID == null || e.adgroupID === ""
            ? ""
            : ' adgroup_id="' + r("maibaEscapeAttr")(e.adgroupID) + '"';
      return (
        '<workspace-edit-request workspace_type="creative_suggestions" ' +
        ('ad_account_id="' + r("maibaEscapeAttr")(e.accountID) + '" ') +
        ('creative_id="' + r("maibaEscapeAttr")(e.creativeID) + '" ') +
        ('action="' + e.action + '"' + i + l) +
        ("" + c + d) +
        ("" + u + m + p) +
        ("" + _ + g + f + "></workspace-edit-request>")
      );
    }
    ((l.getCreativeSuggestionsOverlayCommit = e),
      (l.buildCreativeSuggestionsRegionPrompt = s),
      (l.buildCreativeSuggestionsEditRequest = u));
  },
  98,
);
