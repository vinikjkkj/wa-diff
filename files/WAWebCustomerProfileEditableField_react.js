__d(
  "WAWebCustomerProfileEditableField.react",
  [
    "fbt",
    "WAWebFlex.react",
    "WAWebUimUie.react",
    "WDSButton.react",
    "WDSIconIcCheck.react",
    "WDSIconIcClose.react",
    "WDSIconIcEdit.react",
    "WDSText.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useCallback,
      m = c.useEffect,
      p = c.useRef,
      _ = c.useState,
      f = {
        row: {
          paddingTop: "x16ovd2e",
          paddingBottom: "x12xbjc7",
          paddingInlineStart: "x12w63v0",
          paddingInlineEnd: "xvtqlqk",
          $$css: !0,
        },
        editButtonContainer: {
          marginInlineStart: "xvc5jky",
          opacity: "xg01cxk",
          flexShrink: "x2lah0s",
          $$css: !0,
        },
        editButtonVisible: { opacity: "x1hc1fzr", $$css: !0 },
        iconContainer: {
          color: "xhslqc4",
          height: "x1nqnulx",
          paddingTop: "x16ovd2e",
          paddingInlineEnd: "x1nzty39",
          paddingBottom: "x12xbjc7",
          paddingInlineStart: "x12w63v0",
          width: "x1xvr5cs",
          $$css: !0,
        },
        editFieldRow: { alignItems: "x6s0dn4", $$css: !0 },
        fieldContainer: {
          flexGrow: "x1iyjqo2",
          minWidth: "xeuugli",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          $$css: !0,
        },
        editActions: {
          columnGap: "x1trrmfo",
          marginTop: "x1380le5",
          width: "xh8yej3",
          $$css: !0,
        },
      };
    function g(e) {
      var t = e.icon,
        n = e.label,
        a = e.onSave,
        i = e.placeholder,
        l = e.value,
        c = _(!1),
        g = c[0],
        h = c[1],
        y = _(!1),
        C = y[0],
        b = y[1],
        v = _(l),
        S = v[0],
        R = v[1],
        L = p(null);
      m(
        function () {
          if (g) {
            var e;
            (e = L.current) == null || e.focus();
          }
        },
        [g],
      );
      var E = d(
          function () {
            (R(l), h(!0));
          },
          [l],
        ),
        k = d(function () {
          b(!0);
        }, []),
        I = d(function () {
          b(!1);
        }, []),
        T = d(
          function () {
            var e = S.trim();
            (e !== l && a(e), h(!1));
          },
          [S, l, a],
        ),
        D = d(function () {
          h(!1);
        }, []),
        x = d(
          function (e) {
            e.key === "Enter"
              ? (e.preventDefault(), T())
              : e.key === "Escape" && (e.stopPropagation(), D());
          },
          [T, D],
        ),
        $ = d(
          function () {
            D();
          },
          [D],
        );
      if (g) {
        var P;
        return u.jsx(o("WAWebUimUie.react").UIE, {
          displayName: "EditableFieldEdit",
          escapable: !0,
          requestDismiss: $,
          children: u.jsxs((P = o("WAWebFlex.react")).FlexColumn, {
            align: "stretch",
            xstyle: f.row,
            children: [
              u.jsxs(P.FlexRow, {
                xstyle: f.editFieldRow,
                gap: 12,
                children: [
                  u.jsx(P.FlexItem, {
                    align: "center",
                    justify: "center",
                    xstyle: f.iconContainer,
                    children: t,
                  }),
                  u.jsx(P.FlexColumn, {
                    xstyle: f.fieldContainer,
                    children: u.jsxs("fieldset", {
                      className:
                        "xnj1f2r x2uibgs xkveyfu x12llq9 xlr9sxt xvvg52n xwd4zgb xq8v1ta x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x178xt8z x1lun4ml xso031l xpilrb4 x9f619 xdj266r x14z9mp xat24cr x1lziwak x16ovd2e x12xbjc7 x1iw51ew xde1mab xh8yej3",
                      children: [
                        u.jsx("legend", {
                          className: "xhslqc4 x1pg5gke x181vq82 x1uc92m",
                          children: n,
                        }),
                        u.jsx("input", {
                          className:
                            "x11g6tue x1v8p93f x16stqrj x1ejq31n x1sy0etr x972fbf x1qhh985 xv5lvn5 x1o3jo1z xstzfhl x18oe1m7 x14e42zd x10w94by x14ug900 xjb2p0i x1qlqyl8 x15bjb6t x1a2a7pz xexx8yu x18d9i69 x1c1uobl xyri2b xh8yej3",
                          ref: L,
                          value: S,
                          placeholder: i != null ? String(i) : void 0,
                          onChange: function (t) {
                            return R(t.target.value);
                          },
                          onKeyDown: x,
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              u.jsxs(o("WAWebFlex.react").FlexRow, {
                justify: "end",
                xstyle: f.editActions,
                children: [
                  u.jsx(r("WDSButton.react"), {
                    Icon: r("WDSIconIcClose.react"),
                    size: "small",
                    variant: "tonal",
                    onPress: D,
                    "aria-label": s._(/*BTDS*/ "Cancel"),
                  }),
                  u.jsx(r("WDSButton.react"), {
                    Icon: r("WDSIconIcCheck.react"),
                    size: "small",
                    variant: "filled",
                    onPress: T,
                    "aria-label": s._(/*BTDS*/ "Confirm"),
                  }),
                ],
              }),
            ],
          }),
        });
      }
      return u.jsx("div", {
        role: "group",
        onMouseEnter: k,
        onMouseLeave: I,
        className: "xlr9sxt xvvg52n xwd4zgb xq8v1ta x150mmf0 xqf2s3x x1ubxc9n",
        children: u.jsxs(o("WAWebFlex.react").FlexRow, {
          align: "center",
          gap: 12,
          xstyle: f.row,
          children: [
            u.jsx(o("WAWebFlex.react").FlexItem, {
              align: "center",
              justify: "center",
              xstyle: f.iconContainer,
              children: t,
            }),
            u.jsx(o("WAWebFlex.react").FlexColumn, {
              xstyle: f.fieldContainer,
              children:
                l !== ""
                  ? u.jsxs(u.Fragment, {
                      children: [
                        u.jsx(r("WDSText.react"), {
                          type: "Body3",
                          colorName: "contentDeemphasized",
                          children: n,
                        }),
                        u.jsx(r("WDSText.react"), {
                          type: "Body2",
                          colorName: "contentDefault",
                          maxLines: 1,
                          children: l,
                        }),
                      ],
                    })
                  : u.jsx(r("WDSText.react"), {
                      type: "Body2",
                      colorName: "contentDeemphasized",
                      maxLines: 1,
                      children: i != null ? i : "",
                    }),
            }),
            u.jsx(o("WAWebFlex.react").FlexItem, {
              align: "center",
              justify: "center",
              xstyle: [f.editButtonContainer, C && f.editButtonVisible],
              children: u.jsx("button", {
                className:
                  "x6s0dn4 x11g6tue x1v8p93f x16stqrj x1ejq31n x1sy0etr x972fbf x1qhh985 xv5lvn5 x1o3jo1z xstzfhl x18oe1m7 x14e42zd x10w94by xt8t1vi x1xc408v x129tdwq x15urzxu xhslqc4 x1ypdohk x78zum5 xzpcc6d xl56j7k xexx8yu xyri2b x18d9i69 x1c1uobl x1xephfl x1nsvvxn",
                onClick: E,
                "aria-label": s._(/*BTDS*/ "Edit {fieldLabel}", [
                  s._param("fieldLabel", n),
                ]),
                children: u.jsx(r("WDSIconIcEdit.react"), {
                  width: 20,
                  height: 20,
                }),
              }),
            }),
          ],
        }),
      });
    }
    ((g.displayName = g.name + " [from " + i.id + "]"), (l.default = g));
  },
  226,
);
