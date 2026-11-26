__d(
  "WAWebCometComposedTextV2URParserLoadable",
  [
    "JSResourceForInteraction",
    "WAWebLazyLoadFailureSignal.react",
    "WAWebLazyLoadedRetriable",
    "WAWebSpinner.react",
    "react",
    "react-loadable",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["contentKey", "onContentCommit"],
      s = ["onContentError"],
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.createContext,
      p = d.useContext,
      _ = d.useEffectEvent,
      f = d.useLayoutEffect,
      g = d.useMemo,
      h = d.useRef,
      y = {},
      C = r("WAWebLazyLoadedRetriable")(async function () {
        var e = await r("JSResourceForInteraction")(
          "CometComposedTextV2URParser.react",
        )
          .__setRef("WAWebCometComposedTextV2URParserLoadable")
          .load();
        return e;
      }, "CometComposedTextV2URParser"),
      b = m(null),
      v = r("react-loadable")({
        loader: C,
        loading: function (t) {
          var e = t.error;
          return c.jsx(R, { hasFailed: e != null });
        },
        render: function (n, r) {
          var t = r.contentKey,
            o = r.onContentCommit,
            a = babelHelpers.objectWithoutPropertiesLoose(r, e);
          return c.jsxs(c.Fragment, {
            children: [
              c.jsx(n, babelHelpers.extends({}, a)),
              o != null
                ? c.jsx(L, { contentKey: t, onContentCommit: o })
                : null,
            ],
          });
        },
      });
    function S(e) {
      var t = e.onContentError,
        n = babelHelpers.objectWithoutPropertiesLoose(e, s),
        r = n.contentKey,
        o = g(
          function () {
            return t == null ? null : { contentKey: r, onContentError: t };
          },
          [r, t],
        );
      return c.jsx(b.Provider, {
        value: o,
        children: c.jsx(v, babelHelpers.extends({}, n)),
      });
    }
    S.displayName = S.name + " [from " + i.id + "]";
    function R(e) {
      var t = e.hasFailed,
        n = p(b);
      return c.jsxs(c.Fragment, {
        children: [
          c.jsx(o("WAWebSpinner.react").Spinner, { size: 24, stroke: 4 }),
          t && n != null
            ? c.jsx(r("WAWebLazyLoadFailureSignal.react"), {
                contentKey: n.contentKey,
                onLoadFailure: n.onContentError,
              })
            : null,
        ],
      });
    }
    R.displayName = R.name + " [from " + i.id + "]";
    function L(e) {
      var t = e.contentKey,
        n = e.onContentCommit,
        r = _(n),
        o = h(y);
      return (
        f(
          function () {
            o.current !== t && ((o.current = t), r());
          },
          [t],
        ),
        null
      );
    }
    ((L.displayName = L.name + " [from " + i.id + "]"),
      (l.requireBundle = C),
      (l.CometComposedTextV2URParserLoadable = S));
  },
  98,
);
