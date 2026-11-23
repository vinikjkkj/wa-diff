__d(
  "MAIBAPreviewPublishValueDisplay",
  [
    "MAIBAPreviewPublishFieldFormatter",
    "MAIBAPreviewPublishFieldLabel",
    "MAIBAPreviewPublishNestedValueFormatter",
    "MAIBAPreviewPublishReviewStrings",
    "MAIBAPreviewPublishStructuredDiff",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 100;
    function s(e) {
      if (typeof e != "string") return e;
      try {
        return JSON.parse(e);
      } catch (t) {
        return e;
      }
    }
    function u(t) {
      var n = t.split("\n").join(" ");
      return n.length > e ? n.slice(0, e) + "..." : n;
    }
    function c(e) {
      if (e == null || e === "") return "-";
      if (Array.isArray(e))
        return o("MAIBAPreviewPublishNestedValueFormatter").formatNestedList(
          e,
          c,
        );
      var t = o("MAIBAPreviewPublishStructuredDiff").asStructuredObject(e);
      if (t != null) {
        var n = Object.entries(t);
        return n.length === 0
          ? "-"
          : n.length === 1 && n[0][0] === "key"
            ? c(n[0][1])
            : n
                .map(function (e) {
                  var t = e[0],
                    n = e[1];
                  return o(
                    "MAIBAPreviewPublishNestedValueFormatter",
                  ).formatLabeledNestedValue(
                    o("MAIBAPreviewPublishFieldLabel").formatFieldLabel(t),
                    c(n),
                  );
                })
                .join("\n");
      }
      return typeof e == "boolean"
        ? o("MAIBAPreviewPublishReviewStrings").getBooleanLabel(e)
        : u(String(e));
    }
    function d(e, t) {
      if (t !== "universal_payer" && t !== "universal_beneficiary") return null;
      var n =
        typeof e == "string"
          ? e
          : typeof e == "number" && Number.isSafeInteger(e)
            ? String(e)
            : null;
      return n == null || !/^\d+$/.test(n)
        ? null
        : /^0+$/.test(n)
          ? "-"
          : o("MAIBAPreviewPublishReviewStrings").getRegionalIdentityIDLabel(n);
    }
    function m(e, t, n) {
      if (e == null) return "-";
      var r = d(e, t);
      if (r != null) return r;
      var a = o("MAIBAPreviewPublishFieldFormatter").formatFieldValue(t, e, {
        currency: n == null ? void 0 : n.currency,
        entityNames: n == null ? void 0 : n.entityNames,
        pixelNames: n == null ? void 0 : n.pixelNames,
        timezoneID: n == null ? void 0 : n.timezoneID,
      });
      return a != null ? a : c(e);
    }
    function p(e, t, n) {
      return Array.isArray(e)
        ? e.length === 0
          ? "-"
          : e.length === 1
            ? m(e[0], t, n)
            : o("MAIBAPreviewPublishNestedValueFormatter").formatNestedList(
                e.map(function (e) {
                  return m(e, t, n);
                }),
                function (e) {
                  return String(e);
                },
              )
        : m(e, t, n);
    }
    function _(e, t, n) {
      var r = s(e);
      return m(r, t, n);
    }
    ((l.parseStoredValue = s),
      (l.structuredDisplayValue = c),
      (l.displayDecodedValue = m),
      (l.displayLeafSide = p),
      (l.displayValue = _));
  },
  98,
);
