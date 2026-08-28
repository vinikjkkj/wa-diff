__d(
  "MAIBAScorecardIssueCardUtil",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      if (e == null)
        return {
          collapsible: !1,
          cta_label: "",
          cta_prompt: "",
          expanded: !0,
          number: 0,
          text: "",
          title: "",
        };
      var t =
          typeof e.number == "number"
            ? e.number
            : (typeof e.number == "string" && parseInt(e.number, 10)) || 0,
        n = typeof e.title == "string" ? e.title : "",
        r = e.collapsible === !0,
        o = e.expanded !== !1,
        a = typeof e.text == "string" ? e.text : "",
        i = typeof e.cta_label == "string" ? e.cta_label : "",
        l = typeof e.cta_prompt == "string" ? e.cta_prompt : "";
      return {
        collapsible: r,
        cta_label: i,
        cta_prompt: l,
        expanded: o,
        number: t,
        text: a,
        title: n,
      };
    }
    i.parseIssueCardState = e;
  },
  66,
);
