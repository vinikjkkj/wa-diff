__d(
  "MAIBAA2UIDataBinding",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      if (e == null) return "";
      if (e.literalString != null) return e.literalString;
      if (e.path != null) {
        var n = e.path.split("/").filter(Boolean),
          r = t;
        for (var o of n)
          if (r != null && typeof r == "object") {
            var a = r[o];
            if (a != null) r = a;
            else return "";
          } else return "";
        return typeof r == "string"
          ? r
          : typeof r == "number" || typeof r == "boolean"
            ? String(r)
            : "";
      }
      return "";
    }
    function l(e, t) {
      if (e == null) return !1;
      if (e.literalBoolean != null) return e.literalBoolean;
      if (e.path != null) {
        var n = e.path.split("/").filter(Boolean),
          r = t;
        for (var o of n)
          if (r != null && typeof r == "object") {
            var a = r[o];
            if (a != null) r = a;
            else return !1;
          } else return !1;
        if (typeof r == "boolean") return r;
      }
      return !1;
    }
    function s(e) {
      return e.AdLibraryPreviewCard != null
        ? "AdLibraryPreviewCard"
        : e.AdLibraryPreviewCarousel != null
          ? "AdLibraryPreviewCarousel"
          : e.AssetReference != null
            ? "AssetReference"
            : e.DataViz != null
              ? "DataViz"
              : e.Text != null
                ? "Text"
                : e.Button != null
                  ? "Button"
                  : e.Row != null
                    ? "Row"
                    : e.Column != null
                      ? "Column"
                      : e.Card != null
                        ? "Card"
                        : e.Divider != null
                          ? "Divider"
                          : e.Image != null
                            ? "Image"
                            : e.InlineRichText != null
                              ? "InlineRichText"
                              : e.Checkbox != null
                                ? "Checkbox"
                                : e.TextField != null
                                  ? "TextField"
                                  : e.ScorecardIssueCard != null
                                    ? "ScorecardIssueCard"
                                    : e.Tabs != null
                                      ? "Tabs"
                                      : "Unknown";
    }
    ((i.resolveStringValue = e),
      (i.resolveBooleanValue = l),
      (i.getComponentType = s));
  },
  66,
);
