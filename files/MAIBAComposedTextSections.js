__d(
  "MAIBAComposedTextSections",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t;
      return (
        ((t = e.block_type) == null ? void 0 : t.startsWith("HEADER_")) === !0
      );
    }
    function l(e, t) {
      var n = [],
        r = [];
      for (var o of e)
        t(o)
          ? r.push({ body: [], heading: o })
          : r.length > 0
            ? r[r.length - 1].body.push(o)
            : n.push(o);
      return { lead: n, sections: r };
    }
    ((i.isMAIBAComposedTextHeading = e),
      (i.splitMAIBAComposedTextAtHeadings = l));
  },
  66,
);
