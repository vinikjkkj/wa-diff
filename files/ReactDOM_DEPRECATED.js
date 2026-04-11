__d(
  "ReactDOM_DEPRECATED",
  ["ReactDOMCompatibilityLayer", "cr:1293", "err", "setupReactRefresh"],
  function (t, n, r, o, a, i, l) {
    var e;
    n("setupReactRefresh");
    function s() {
      throw r("err")("This React API is not available on Workplace.");
    }
    var u = (e = n("cr:1293").findDOMNode) != null ? e : s;
    ((l.findDOMNode_DEPRECATED = u),
      (l.render_DEPRECATED = o("ReactDOMCompatibilityLayer").render_DEPRECATED),
      (l.unmountComponentAtNode_DEPRECATED = o(
        "ReactDOMCompatibilityLayer",
      ).unmountComponentAtNode_DEPRECATED));
  },
  98,
);
