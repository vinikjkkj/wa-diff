__d(
  "WebBloksAssetRenderer",
  [
    "CometVisualCompletionAttributes",
    "URI",
    "WebBloksStyle",
    "coerceImageishSprited",
    "coerceImageishURL",
    "getImageSourceURLFromImageish",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["ref"],
      s = ["src"],
      u = ["src", "style"],
      c,
      d,
      m = d || (d = o("react"));
    function p(e) {
      return e instanceof (c || (c = r("URI"))) ? e.toString() : e;
    }
    function _(t) {
      var n = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = o("WebBloksStyle").classNames(a.className, "img"),
        l = p(a.src);
      if (l == null) {
        var c = a.src,
          d = babelHelpers.objectWithoutPropertiesLoose(a, s);
        return m.jsx("img", babelHelpers.extends({}, d, { className: i }));
      }
      var _ = r("coerceImageishSprited")(l),
        f =
          _ && a.alt != null && String(a.alt) !== ""
            ? m.jsx("u", { children: a.alt })
            : null;
      if (typeof l == "string")
        return m.jsx(
          "img",
          babelHelpers.extends({}, a, { className: i, src: l }),
        );
      if (_) {
        var g = a.src,
          h = a.style,
          y = babelHelpers.objectWithoutPropertiesLoose(a, u);
        return m.jsx(
          "i",
          babelHelpers.extends(
            {},
            y,
            r("CometVisualCompletionAttributes").CSS_IMG,
            {
              className: o("WebBloksStyle").classNames(
                i,
                _.type === "css" ? _.className : void 0,
              ),
              ref: n,
              style:
                _.type === "cssless" ? babelHelpers.extends({}, h, _.style) : h,
              children: f,
            },
          ),
        );
      }
      var C = r("getImageSourceURLFromImageish")(l),
        b = r("coerceImageishURL")(l);
      return a.width === void 0 && a.height === void 0 && b
        ? m.jsx(
            "img",
            babelHelpers.extends({}, a, {
              className: i,
              height: b.height,
              src: C,
              ref: n,
              width: b.width,
            }),
          )
        : m.jsx(
            "img",
            babelHelpers.extends({}, a, { className: i, ref: n, src: C }),
          );
    }
    ((_.displayName = _.name + " [from " + i.id + "]"), (l.default = _));
  },
  98,
);
