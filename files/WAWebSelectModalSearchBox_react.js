__d(
  "WAWebSelectModalSearchBox.react",
  [
    "WAWebChatListSearch.react",
    "WAWebKeyboardHotKeys.react",
    "react",
    "react-compiler-runtime",
    "useWAWebDebouncedCallback",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["ref"],
      s = [
        "ariaLabel",
        "enabled",
        "onDown",
        "onEnter",
        "onFocus",
        "searchType",
        "setSearchText",
        "xstyle",
      ],
      u,
      c = u || (u = o("react"));
    function d(t) {
      var n = o("react-compiler-runtime").c(26),
        a,
        i;
      n[0] !== t
        ? ((i = t.ref),
          (a = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i))
        : ((a = n[1]), (i = n[2]));
      var l, u, d, m, p, _, f, g, h;
      if (n[3] !== a) {
        var y = a;
        ((l = y.ariaLabel),
          (g = y.enabled),
          (d = y.onDown),
          (m = y.onEnter),
          (p = y.onFocus),
          (_ = y.searchType),
          (f = y.setSearchText),
          (h = y.xstyle),
          (u = babelHelpers.objectWithoutPropertiesLoose(y, s)),
          (n[3] = a),
          (n[4] = l),
          (n[5] = u),
          (n[6] = d),
          (n[7] = m),
          (n[8] = p),
          (n[9] = _),
          (n[10] = f),
          (n[11] = g),
          (n[12] = h));
      } else
        ((l = n[4]),
          (u = n[5]),
          (d = n[6]),
          (m = n[7]),
          (p = n[8]),
          (_ = n[9]),
          (f = n[10]),
          (g = n[11]),
          (h = n[12]));
      var C = g === void 0 ? !0 : g,
        b;
      n[13] !== f
        ? ((b = function (t) {
            f(t);
          }),
          (n[13] = f),
          (n[14] = b))
        : (b = n[14]);
      var v = r("useWAWebDebouncedCallback")(b, 100),
        S;
      return (
        n[15] !== l ||
        n[16] !== C ||
        n[17] !== v ||
        n[18] !== u ||
        n[19] !== d ||
        n[20] !== m ||
        n[21] !== p ||
        n[22] !== i ||
        n[23] !== _ ||
        n[24] !== h
          ? ((S = C
              ? c.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
                  "aria-label": l,
                  handlers: { down: d },
                  onFocus: p,
                  xstyle: h,
                  children: c.jsx(
                    o("WAWebChatListSearch.react").ListSearch,
                    babelHelpers.extends(
                      {
                        ref: i,
                        onSearch: v,
                        onEnter: m,
                        type: _,
                        ariaLabel: l,
                      },
                      u,
                    ),
                  ),
                })
              : null),
            (n[15] = l),
            (n[16] = C),
            (n[17] = v),
            (n[18] = u),
            (n[19] = d),
            (n[20] = m),
            (n[21] = p),
            (n[22] = i),
            (n[23] = _),
            (n[24] = h),
            (n[25] = S))
          : (S = n[25]),
        S
      );
    }
    l.default = d;
  },
  98,
);
