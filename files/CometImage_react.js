__d(
  "CometImage.react",
  [
    "BaseImage.react",
    "CometImageFromIXValue.react",
    "mergeRefs",
    "react",
    "useFeedImageErrorEventLoggerCbs",
    "xplatToDOMRef",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [
        "alt",
        "cornerRadius",
        "objectFit",
        "onError",
        "onLoad",
        "ref",
        "sizes",
        "src",
        "srcSet",
        "testid",
        "xstyle",
      ],
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useMemo,
      m = c.useRef,
      p = {
        large: {
          borderStartStartRadius: "x18j4a18",
          borderStartEndRadius: "x1d6rl2j",
          borderEndEndRadius: "xqog63t",
          borderEndStartRadius: "x1xruleh",
          $$css: !0,
        },
        medium: {
          borderStartStartRadius: "xrroz7o",
          borderStartEndRadius: "x1okz81u",
          borderEndEndRadius: "x1p6h7c5",
          borderEndStartRadius: "x1eu9zdd",
          $$css: !0,
        },
        none: {
          borderStartStartRadius: "x15mokao",
          borderStartEndRadius: "x1ga7v0g",
          borderEndEndRadius: "x16uus16",
          borderEndStartRadius: "xbiv7yw",
          $$css: !0,
        },
        small: {
          borderStartStartRadius: "xmgxbu6",
          borderStartEndRadius: "x1pxtg5o",
          borderEndEndRadius: "xewcwo2",
          borderEndStartRadius: "x19f9av2",
          $$css: !0,
        },
      };
    function _(t) {
      var n = t.alt,
        a = t.cornerRadius,
        i = a === void 0 ? "none" : a,
        l = t.objectFit,
        s = t.onError,
        c = t.onLoad,
        _ = t.ref,
        f = t.sizes,
        g = t.src,
        h = t.srcSet,
        y = t.testid,
        C = t.xstyle,
        b = babelHelpers.objectWithoutPropertiesLoose(t, e),
        v = m(null),
        S = d(
          function () {
            return r("mergeRefs")(v, _);
          },
          [v, _],
        ),
        R = r("useFeedImageErrorEventLoggerCbs")({
          onError: s,
          onLoad: c,
          src: g,
        }),
        L = R._onError,
        E = R._onLoad,
        k = [p[i], C];
      if (typeof g == "string") {
        var I = u.jsx(
          r("BaseImage.react"),
          babelHelpers.extends({}, b, {
            alt: n,
            objectFit: l,
            onError: L,
            onLoad: E,
            ref: o("xplatToDOMRef").xplatToDOMRef(S),
            sizes: f,
            src: g,
            srcSet: h,
            testid: void 0,
            xstyle: k,
          }),
        );
        return I;
      }
      return u.jsx(r("CometImageFromIXValue.react"), {
        alt: n,
        objectFit: l,
        ref: S,
        source: g,
        testid: void 0,
        xstyle: k,
      });
    }
    ((_.displayName = _.name + " [from " + i.id + "]"), (l.default = _));
  },
  98,
);
