__d(
  "WAWebCommerceQuantityControls.story",
  [
    "WAWebCommonQuantityControls.react",
    "WAWebShowroomUtils",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.useState;
    function c(e) {
      var t = o("react-compiler-runtime").c(8),
        n = e.initQuantity,
        a = e.isCollapsed,
        i = u(n),
        l = i[0],
        c = i[1],
        d,
        m;
      t[0] !== l
        ? ((d = function () {
            return c(l + 1);
          }),
          (m = function () {
            return c(l - 1);
          }),
          (t[0] = l),
          (t[1] = d),
          (t[2] = m))
        : ((d = t[1]), (m = t[2]));
      var p;
      return (
        t[3] !== a || t[4] !== l || t[5] !== d || t[6] !== m
          ? ((p = s.jsx(r("WAWebCommonQuantityControls.react"), {
              quantity: l,
              isCollapsed: a,
              onAddOneClick: d,
              onRemoveOneClick: m,
            })),
            (t[3] = a),
            (t[4] = l),
            (t[5] = d),
            (t[6] = m),
            (t[7] = p))
          : (p = t[7]),
        p
      );
    }
    var d = {
      storyName: "WAWebCommerceQuantityControls",
      component: r("WAWebCommonQuantityControls.react"),
      description:
        "Commerce product catalog widget for product quantity controls.",
      examples: [
        {
          title: "Quantity of 0",
          description: "Shows state with 0 quantity",
          templateStyle: o("WAWebShowroomUtils").compactPreview,
          example: function () {
            return s.jsx(c, { initQuantity: 0 });
          },
        },
        {
          title: "Quantity of 7",
          description:
            "Shows state with extended controls and one-digit number",
          templateStyle: o("WAWebShowroomUtils").compactPreview,
          example: function () {
            return s.jsx(c, { initQuantity: 7 });
          },
        },
        {
          title: "Quantity of 99",
          description:
            "Shows state with extended controls and two-digit number",
          templateStyle: o("WAWebShowroomUtils").compactPreview,
          example: function () {
            return s.jsx(c, { initQuantity: 99 });
          },
        },
        {
          title: "Quantity of 0 collapsed",
          description: "Shows state in collapsed mode and 0 quantity",
          templateStyle: o("WAWebShowroomUtils").compactPreview,
          example: function () {
            return s.jsx(c, { initQuantity: 0, isCollapsed: !0 });
          },
        },
        {
          title: "Quantity of 7 collapsed",
          description: "Shows state in collapsed mode and one-digit number",
          templateStyle: o("WAWebShowroomUtils").compactPreview,
          example: function () {
            return s.jsx(c, { initQuantity: 7, isCollapsed: !0 });
          },
        },
        {
          title: "Quantity of 99 collapsed",
          description: "Shows state in collapsed mode and two-digit number",
          templateStyle: o("WAWebShowroomUtils").compactPreview,
          example: function () {
            return s.jsx(c, { initQuantity: 99, isCollapsed: !0 });
          },
        },
      ],
    };
    l.default = d;
  },
  98,
);
