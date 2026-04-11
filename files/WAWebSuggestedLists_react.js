__d(
  "WAWebSuggestedLists.react",
  [
    "fbt",
    "WAWebCellFrame.react",
    "WAWebCheckBox.react",
    "WAWebFlex.react",
    "WAWebListIcon.react",
    "WAWebListUtils",
    "WAWebNoop",
    "WAWebSectionHeader.react",
    "WAWebSuggestedListsUtils",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = {
        sectionHeader: {
          height: "xng8ra",
          paddingBottom: "x18d9i69",
          $$css: !0,
        },
        noShrink: { flexShrink: "x2lah0s", $$css: !0 },
      };
    function d(e) {
      var t = o("react-compiler-runtime").c(11),
        n = e.filterText,
        a = e.onSelect,
        i = e.selectedSuggestionIds,
        l = e.suggestedListTheme,
        d,
        m;
      if (t[0] !== n || t[1] !== a || t[2] !== i || t[3] !== l) {
        m = Symbol.for("react.early_return_sentinel");
        e: {
          var p = o("WAWebSuggestedListsUtils").getSuggestedLists(
            n != null ? n : "",
          );
          if (p.length === 0) {
            m = null;
            break e;
          }
          var _;
          t[6] === Symbol.for("react.memo_cache_sentinel")
            ? ((_ = u.jsx(o("WAWebFlex.react").FlexRow, {
                align: "center",
                xstyle: c.noShrink,
                children: u.jsx(r("WAWebSectionHeader.react"), {
                  header: s._(/*BTDS*/ "Suggestions"),
                  xstyle: c.sectionHeader,
                }),
              })),
              (t[6] = _))
            : (_ = t[6]);
          var f;
          (t[7] !== a || t[8] !== i || t[9] !== l
            ? ((f = function (t) {
                var e,
                  n =
                    (e = i == null ? void 0 : i.has(t.predefinedId)) != null
                      ? e
                      : !1,
                  s = u.jsx(r("WAWebCellFrame.react"), {
                    theme: "lists-assign-modal",
                    customImage: !0,
                    image: u.jsx("div", {
                      className: "x78zum5 x1okw0bk x6s0dn4 x13jy36j xsfy40s",
                      children: u.jsx("div", {
                        className: "x78zum5 xl56j7k x6s0dn4 xvy4d1p xxk0z11",
                        children: u.jsx(r("WAWebListIcon.react"), {
                          color: o("WAWebListUtils").colorIndexToHex(
                            t.colorIndex,
                          ),
                        }),
                      }),
                    }),
                    primary: t.name,
                  }),
                  d =
                    l === "list-assign-modal"
                      ? u.jsx("div", {
                          role: "checkbox",
                          "aria-checked": n,
                          tabIndex: 0,
                          className:
                            "xh8yej3 x1ypdohk x6ikm8r x10wlt62 x78zum5 xdt5ytf xl56j7k xnnlda6",
                          onClick: function () {
                            return a(t);
                          },
                          onKeyDown: function (n) {
                            (n.key === "Enter" || n.key === " ") &&
                              (n.preventDefault(), a(t));
                          },
                          children: u.jsxs("div", {
                            className: "x1n2onr6",
                            children: [
                              s,
                              u.jsx("div", {
                                "aria-hidden": "true",
                                className:
                                  "x10l6tqk xdg88n9 xlgexem x78zum5 x6s0dn4 x5yr21d x13vifvy",
                                children: u.jsx(
                                  o("WAWebCheckBox.react").CheckBox,
                                  { checked: n, onChange: r("WAWebNoop") },
                                ),
                              }),
                            ],
                          }),
                        })
                      : l === "list-assign-inline-edit"
                        ? u.jsx("div", {
                            role: "button",
                            tabIndex: 0,
                            className:
                              "xh8yej3 x1ypdohk x6ikm8r x10wlt62 x78zum5 xdt5ytf xl56j7k xnnlda6",
                            onClick: function () {
                              return a(t);
                            },
                            onKeyDown: function (n) {
                              (n.key === "Enter" || n.key === " ") && a(t);
                            },
                            children: s,
                          })
                        : l === "list-creation-drawer"
                          ? u.jsx("div", {
                              role: "button",
                              tabIndex: 0,
                              className:
                                "xh8yej3 x1ypdohk xsdox4t x6ikm8r x10wlt62 x78zum5 xdt5ytf xl56j7k",
                              onKeyDown: function (n) {
                                (n.key === "Enter" || n.key === " ") &&
                                  (n.preventDefault(), a(t));
                              },
                              children: u.jsx(r("WAWebCellFrame.react"), {
                                theme: "label-selection-new-label",
                                onClick: function () {
                                  return a(t);
                                },
                                image: u.jsx("div", {
                                  className: "x78zum5 x6s0dn4 xl56j7k",
                                  children: u.jsx(r("WAWebListIcon.react"), {
                                    color: o("WAWebListUtils").colorIndexToHex(
                                      t.colorIndex,
                                    ),
                                    size: 16,
                                  }),
                                }),
                                primary: t.name,
                              }),
                            })
                          : (function () {
                              throw Error(
                                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                                  l,
                              );
                            })();
                return u.jsx(
                  o("WAWebFlex.react").FlexRow,
                  { align: "center", xstyle: c.noShrink, children: d },
                  t.predefinedId,
                );
              }),
              (t[7] = a),
              (t[8] = i),
              (t[9] = l),
              (t[10] = f))
            : (f = t[10]),
            (d = u.jsxs(u.Fragment, { children: [_, p.map(f)] })));
        }
        ((t[0] = n),
          (t[1] = a),
          (t[2] = i),
          (t[3] = l),
          (t[4] = d),
          (t[5] = m));
      } else ((d = t[4]), (m = t[5]));
      return m !== Symbol.for("react.early_return_sentinel") ? m : d;
    }
    l.default = d;
  },
  226,
);
