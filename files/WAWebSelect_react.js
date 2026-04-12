__d(
  "WAWebSelect.react",
  [
    "WAWebDropdownV2.react",
    "WAWebMenuSearch.react",
    "WAWebSelectButton.react",
    "WAWebSelectMenuItem.react",
    "WAWebToArray",
    "WDSText.react",
    "compactMap",
    "react",
    "useMergeRefs",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["ref"],
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.Children,
      m = c.useRef,
      p = c.useState;
    function _(t) {
      var n = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = a.ariaRoleDescription,
        l = a.children,
        s = a.customLabel,
        c = a.defaultLabel,
        _ = a.includeSearchInput,
        f = a.label,
        g = a.menuMaxHeight,
        h = a.menuMinWidth,
        y = a.popoverControllerRef,
        C = a.testid,
        b = a.theme,
        v = a.width,
        S;
      typeof v == "number" && (S = h != null ? Math.max(h, v) : v);
      var R = new Map(
          r("compactMap")(d.toArray(l), function (e) {
            var t = e.props,
              n = t.optionId,
              r = t.primary;
            return n == null ? null : [n, { optionId: n, label: r }];
          }),
        ),
        L = function (t) {
          var e, n;
          if ((s != null && (n = s(t)), n == null && t != null && t.size)) {
            var o = r("compactMap")(Array.from(t), function (e) {
                var t,
                  n = (t = R.get(e)) == null ? void 0 : t.label;
                return n != null ? [n, ", "] : null;
              }),
              a = o.flat().slice(0, -1);
            n = a.length ? a : null;
          }
          return (e = n != null ? n : c) != null ? e : "";
        },
        E = m(null),
        k = r("useMergeRefs")(n, E),
        I = o("WAWebToArray").toArray(a.initialSelection),
        T = p(I),
        D = T[0],
        x = T[1],
        $ = p(L(new Set(I))),
        P = $[0],
        N = $[1],
        M = function (t, n, r) {
          var e = L(r);
          (N(e),
            x(Array.from(r)),
            a.multiselect === !0
              ? a.onChange == null || a.onChange(t, r.has(t), new Set(r))
              : a.onChange == null || a.onChange(t));
        },
        w =
          a.multiselect === !0
            ? { multiselect: !0, initialSelection: D }
            : { multiselect: !1, initialSelection: D[0] },
        A = f != null && b === "about-20-screen",
        F = u.jsx(o("WAWebSelectButton.react").SelectButton, {
          ref: k,
          ariaRoleDescription: i,
          label: P,
          theme: b,
          width: v,
          testid: void 0,
          children: u.jsxs(o("WAWebDropdownV2.react").DropdownV2Menu, {
            target: E,
            controllerRef: y,
            position: o("WAWebDropdownV2.react").PopoverPosition.Bottom,
            alignment: o("WAWebDropdownV2.react").PopoverAlignment.Start,
            maxHeight: g,
            minWidth: S,
            initHandling: "click",
            initialActiveOptionId: D[0],
            children: [
              _ === !0
                ? u.jsx(o("WAWebMenuSearch.react").MenuSearchInput, {})
                : null,
              u.jsx(
                o("WAWebSelectMenuItem.react").SelectMenuItemGroup,
                babelHelpers.extends({}, w, { onSelect: M, children: l }),
              ),
            ],
          }),
        });
      return A
        ? u.jsxs("div", {
            className: "x1n2onr6 x1xmf6yo xh8yej3",
            children: [
              u.jsx("div", {
                className:
                  "x10l6tqk x13vifvy x4brfc7 x1cb1t30 x1280gxy x181vq82 x1uc92m x1vjfegm x47corl",
                children: u.jsx(r("WDSText.react"), {
                  type: "Body3",
                  colorName: "contentDeemphasized",
                  children: f,
                }),
              }),
              F,
            ],
          })
        : F;
    }
    ((_.displayName = _.name + " [from " + i.id + "]"), (l.Select = _));
  },
  98,
);
