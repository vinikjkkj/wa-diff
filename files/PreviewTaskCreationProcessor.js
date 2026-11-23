__d(
  "PreviewTaskCreationProcessor",
  [
    "fbt",
    "MAIBATaskCreationPreview.react",
    "MAIBATaskCreationPreviewUtils",
    "MAIBATaskCreationStatusTitle.react",
    "MAIBATaskCreationSuccess.react",
    "actionabilityProcessorShared",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("actionabilityProcessorShared").statusOf(e),
        n = t === "FAILED",
        a =
          o("MAIBATaskCreationPreviewUtils").parseTaskCreationStateKey(
            e.tool_call_args,
            null,
          ) != null,
        i = o("MAIBATaskCreationPreviewUtils").parseTaskCreationPreviewResult(
          e.tool_result,
        ),
        l = o("MAIBATaskCreationPreviewUtils").parseTaskCreationSuccessResult(
          e.tool_call_args,
          e.tool_result,
        ),
        c = null;
      t === "COMPLETED" && typeof e.tool_result == "string" && i != null
        ? (c = u.jsx(r("MAIBATaskCreationPreview.react"), {
            rawResult: e.tool_result,
          }))
        : t === "COMPLETED" &&
          l != null &&
          (c = u.jsx(r("MAIBATaskCreationSuccess.react"), {
            rawArgs: e.tool_call_args,
            rawResult: e.tool_result,
          }));
      var d, m;
      if (n) d = a ? s._(/*BTDS*/ "") : s._(/*BTDS*/ "");
      else if (l != null) d = s._(/*BTDS*/ "");
      else if (i != null) {
        var p;
        ((d = s._(/*BTDS*/ "")),
          (m = u.jsx(r("MAIBATaskCreationStatusTitle.react"), {
            confirmationToken:
              (p = o("MAIBATaskCreationPreviewUtils").parseTaskCreationStateKey(
                null,
                e.tool_result,
              )) != null
                ? p
                : i.confirmation_token,
          })));
      } else d = s._(/*BTDS*/ "");
      return {
        content: c,
        isInitiallyExpanded: !n,
        key: o("actionabilityProcessorShared").keyOf(e),
        status: t,
        title: d,
        titleElement: m,
      };
    }
    function d(e) {
      var t = o("actionabilityProcessorShared").statusOf(e),
        n =
          o("MAIBATaskCreationPreviewUtils").parseTaskCreationStateKey(
            e.tool_call_args,
            null,
          ) != null;
      return t === "RUNNING"
        ? !n
        : t === "FAILED"
          ? !0
          : t === "COMPLETED" && n
            ? !1
            : t === "COMPLETED" &&
              (o(
                "MAIBATaskCreationPreviewUtils",
              ).parseTaskCreationPreviewResult(e.tool_result) != null ||
                o(
                  "MAIBATaskCreationPreviewUtils",
                ).parseTaskCreationSuccessResult(
                  e.tool_call_args,
                  e.tool_result,
                ) != null);
    }
    var m = {
        getSteps: function (t) {
          return t.filter(d).map(c);
        },
      },
      p = m;
    l.default = p;
  },
  226,
);
