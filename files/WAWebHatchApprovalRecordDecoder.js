__d(
  "WAWebHatchApprovalRecordDecoder",
  ["WALogger", "WAWebHatchJsonReaders"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = "pending";
    function c(t) {
      var n = d(t),
        r = o("WAWebHatchJsonReaders").readStringOrEmpty(n, "approval_id");
      if (o("WAWebHatchJsonReaders").isBlankText(r))
        return (
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "hatch-approval: dropping record with no approval id",
                ])),
            )
            .sendLogs("hatch-approval-no-approval-id"),
          null
        );
      var a = o("WAWebHatchJsonReaders").readStringOrEmpty(n, "decision"),
        i = o("WAWebHatchJsonReaders").readStringOrEmpty(t, "lifecycle"),
        l = o("WAWebHatchJsonReaders").isBlankText(i)
          ? o("WAWebHatchJsonReaders").readStringOrEmpty(n, "status")
          : i;
      return !o("WAWebHatchJsonReaders").isBlankText(a) ||
        (!o("WAWebHatchJsonReaders").isBlankText(l) && l !== u)
        ? {
            approvalId: r,
            resolvedDecision: o("WAWebHatchJsonReaders").isBlankText(a) ? l : a,
            record: null,
          }
        : { approvalId: r, resolvedDecision: null, record: m(n, r) };
    }
    function d(e) {
      var t,
        n,
        r =
          (t =
            (n = o("WAWebHatchJsonReaders").readObject(e, "record")) != null
              ? n
              : o("WAWebHatchJsonReaders").readObject(e, "approval_record")) !=
          null
            ? t
            : o("WAWebHatchJsonReaders").readObject(e, "approval");
      return r != null ? r : e;
    }
    function m(e, t) {
      var n = p(o("WAWebHatchJsonReaders").readArray(e, "decision_options"));
      if (n.length === 0)
        return (
          o("WALogger")
            .WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "hatch-approval: dropping record without decision options approvalId=",
                  "",
                ])),
              t,
            )
            .sendLogs("hatch-approval-no-decision-options"),
          null
        );
      var r = o("WAWebHatchJsonReaders").readField(e, "display"),
        a = o("WAWebHatchJsonReaders").readField(e, "payload");
      return {
        approvalId: t,
        isExclusive:
          o("WAWebHatchJsonReaders").readBool(e, "is_exclusive") === !0,
        permissionQuestion: o("WAWebHatchJsonReaders").readStringOrEmpty(
          o("WAWebHatchJsonReaders").readField(r, "permission_question"),
          "text",
        ),
        purposeSummary: o("WAWebHatchJsonReaders").readStringOrEmpty(
          r,
          "purpose_summary",
        ),
        richExplanation: o("WAWebHatchJsonReaders").readStringOrEmpty(
          r,
          "rich_explanation",
        ),
        detailRows: _(o("WAWebHatchJsonReaders").readArray(r, "detail_rows")),
        payloadType: f(o("WAWebHatchJsonReaders").readStringOrEmpty(a, "type")),
        iconUrl: o("WAWebHatchJsonReaders").readStringOrEmpty(r, "icon_url"),
        decisionOptions: n,
      };
    }
    function p(e) {
      if (e == null) return [];
      var t = [];
      for (var n of e) {
        var r = o("WAWebHatchJsonReaders").readStringOrEmpty(n, "kind"),
          a = o("WAWebHatchJsonReaders").readStringOrEmpty(n, "label_text");
        o("WAWebHatchJsonReaders").isBlankText(r) ||
          o("WAWebHatchJsonReaders").isBlankText(a) ||
          t.push({
            kind: r,
            labelText: a,
            alwaysScope: o("WAWebHatchJsonReaders").readStringOrEmpty(
              o("WAWebHatchJsonReaders").readField(n, "label"),
              "scope",
            ),
          });
      }
      return t;
    }
    function _(e) {
      if (e == null) return [];
      var t = [];
      for (var n of e) {
        var r = o("WAWebHatchJsonReaders").readStringOrEmpty(n, "label"),
          a = o("WAWebHatchJsonReaders").readStringOrEmpty(n, "value");
        !o("WAWebHatchJsonReaders").isBlankText(r) &&
          !o("WAWebHatchJsonReaders").isBlankText(a) &&
          t.push({ label: r, value: a });
      }
      return t;
    }
    function f(e) {
      return e === "connector"
        ? "connector"
        : e === "network"
          ? "network"
          : e === "device"
            ? "device"
            : e === "browser_action"
              ? "browser_action"
              : e === "browser_checkout"
                ? "browser_checkout"
                : e === "stripe_link_checkout"
                  ? "stripe_link_checkout"
                  : e === "shopify_checkout"
                    ? "shopify_checkout"
                    : e === "outgoing_media"
                      ? "outgoing_media"
                      : "unknown";
    }
    l.decodeHatchApprovalRecordEvent = c;
  },
  98,
);
