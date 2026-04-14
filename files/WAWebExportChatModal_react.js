__d(
  "WAWebExportChatModal.react",
  [
    "fbt",
    "WAAbortError",
    "WAWebExportChatAction",
    "WAWebFlex.react",
    "WAWebModal.react",
    "WAWebNoop",
    "WAWebProgressBar.react",
    "WAWebToast.react",
    "WAWebToastManager",
    "WDSBaseRadio.react",
    "WDSButton.react",
    "WDSButtonGroup.react",
    "WDSText.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useCallback,
      m = c.useRef,
      p = c.useState,
      _ = {
        radioLabel: { paddingInlineStart: "xdx6fka", $$css: !0 },
        sectionLabel: { marginBottom: "xefnzgg", $$css: !0 },
      },
      f = {
        loading: function () {
          return s._(/*BTDS*/ "Loading messages...");
        },
        downloading_media: function () {
          return s._(/*BTDS*/ "Downloading media...");
        },
        formatting: function () {
          return s._(/*BTDS*/ "Generating export file...");
        },
        saving: function () {
          return s._(/*BTDS*/ "Saving file...");
        },
      };
    function g(e) {
      var t = e.chat,
        n = e.onClose,
        a = p("config"),
        i = a[0],
        l = a[1],
        c = p(!1),
        g = c[0],
        h = c[1],
        y = p("all"),
        C = y[0],
        b = y[1],
        v = p(""),
        S = v[0],
        R = v[1],
        L = p(""),
        E = L[0],
        k = L[1],
        I = p("loading"),
        T = I[0],
        D = I[1],
        x = p(0),
        $ = x[0],
        P = x[1],
        N = p(1),
        M = N[0],
        w = N[1],
        A = m(null),
        F = d(
          function () {
            var e = new AbortController();
            ((A.current = e), l("exporting"), P(0), w(1));
            var r, a;
            (C === "custom" &&
              (S !== "" &&
                (r = Math.floor(new Date(S + "T00:00:00").getTime() / 1e3)),
              E !== "" &&
                (a = Math.floor(new Date(E + "T23:59:59").getTime() / 1e3))),
              o("WAWebExportChatAction")
                .exportChat({
                  chat: t,
                  includeMedia: g,
                  startDate: r,
                  endDate: a,
                  signal: e.signal,
                  onProgress: function (t, n, r) {
                    (D(t), P(n), w(r));
                  },
                })
                .then(function (e) {
                  (o("WAWebToastManager").ToastManager.open(
                    u.jsx(o("WAWebToast.react").Toast, {
                      msg: s._(
                        /*BTDS*/ '_j{"*":"{count} messages exported","_1":"{count} message exported"}',
                        [
                          s._plural(e.messageCount),
                          s._param("count", e.messageCount),
                        ],
                      ),
                      id: o("WAWebToast.react").genId("export-chat-success"),
                    }),
                    o("WAWebToastManager").ToastPosition.CENTER,
                  ),
                    n());
                })
                .catch(function (e) {
                  e instanceof o("WAAbortError").AbortError || l("error");
                }));
          },
          [t, C, E, g, n, S],
        ),
        O = d(
          function () {
            (A.current != null && A.current.abort(), n());
          },
          [n],
        ),
        B = d(function (e) {
          h(e === "with_media");
        }, []),
        W = d(function (e) {
          b(e === "custom" ? "custom" : "all");
        }, []),
        q = d(function (e) {
          R(e.target.value);
        }, []),
        U = d(function (e) {
          k(e.target.value);
        }, []),
        V = new Date().toISOString().slice(0, 10);
      if (i === "config") {
        var H = u.jsx("div", {
          children: u.jsx(r("WDSButtonGroup.react"), {
            width: "hug",
            primaryButtonProps: { label: s._(/*BTDS*/ "Export"), onPress: F },
            tertiaryButtonProps: {
              label: s._(/*BTDS*/ "Cancel"),
              onPress: n,
              variant: "borderless",
            },
          }),
        });
        return u.jsxs(o("WAWebModal.react").Modal, {
          title: s._(/*BTDS*/ "Export chat"),
          actions: H,
          testid: void 0,
          children: [
            u.jsxs("div", {
              className: "x14mdic9",
              children: [
                u.jsx(r("WDSText.react"), {
                  type: "Body2",
                  colorName: "contentDeemphasized",
                  xstyle: _.sectionLabel,
                  children: s._(/*BTDS*/ "Export mode"),
                }),
                u.jsxs(o("WAWebFlex.react").FlexColumn, {
                  role: "radiogroup",
                  children: [
                    u.jsxs("label", {
                      htmlFor: "export-mode-text",
                      className: "x6s0dn4 x78zum5 x1wxaq2x x16ovd2e x12xbjc7",
                      children: [
                        u.jsx(r("WDSBaseRadio.react"), {
                          id: "export-mode-text",
                          value: "text_only",
                          name: "export-mode",
                          checked: !g,
                          onChange: B,
                        }),
                        u.jsx(r("WDSText.react"), {
                          type: "Body1",
                          colorName: "contentDefault",
                          xstyle: _.radioLabel,
                          children: s._(/*BTDS*/ "Without media"),
                        }),
                      ],
                    }),
                    u.jsxs("label", {
                      htmlFor: "export-mode-media",
                      className: "x6s0dn4 x78zum5 x1wxaq2x x16ovd2e x12xbjc7",
                      children: [
                        u.jsx(r("WDSBaseRadio.react"), {
                          id: "export-mode-media",
                          value: "with_media",
                          name: "export-mode",
                          checked: g,
                          onChange: B,
                        }),
                        u.jsx(r("WDSText.react"), {
                          type: "Body1",
                          colorName: "contentDefault",
                          xstyle: _.radioLabel,
                          children: s._(/*BTDS*/ "With media"),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            u.jsxs("div", {
              className: "x14mdic9",
              children: [
                u.jsx(r("WDSText.react"), {
                  type: "Body2",
                  colorName: "contentDeemphasized",
                  xstyle: _.sectionLabel,
                  children: s._(/*BTDS*/ "Date range"),
                }),
                u.jsxs(o("WAWebFlex.react").FlexColumn, {
                  role: "radiogroup",
                  children: [
                    u.jsxs("label", {
                      htmlFor: "date-range-all",
                      className: "x6s0dn4 x78zum5 x1wxaq2x x16ovd2e x12xbjc7",
                      children: [
                        u.jsx(r("WDSBaseRadio.react"), {
                          id: "date-range-all",
                          value: "all",
                          name: "date-range",
                          checked: C === "all",
                          onChange: W,
                        }),
                        u.jsx(r("WDSText.react"), {
                          type: "Body1",
                          colorName: "contentDefault",
                          xstyle: _.radioLabel,
                          children: s._(/*BTDS*/ "All messages"),
                        }),
                      ],
                    }),
                    u.jsxs("label", {
                      htmlFor: "date-range-custom",
                      className: "x6s0dn4 x78zum5 x1wxaq2x x16ovd2e x12xbjc7",
                      children: [
                        u.jsx(r("WDSBaseRadio.react"), {
                          id: "date-range-custom",
                          value: "custom",
                          name: "date-range",
                          checked: C === "custom",
                          onChange: W,
                        }),
                        u.jsx(r("WDSText.react"), {
                          type: "Body1",
                          colorName: "contentDefault",
                          xstyle: _.radioLabel,
                          children: s._(/*BTDS*/ "Custom date range"),
                        }),
                      ],
                    }),
                  ],
                }),
                C === "custom" &&
                  u.jsxs("div", {
                    className:
                      "x6s0dn4 x78zum5 x1qvou4u x1s70e7g x16ovd2e x1m4z3lf",
                    children: [
                      u.jsx(r("WDSText.react"), {
                        type: "Body2",
                        colorName: "contentDeemphasized",
                        children: s._(/*BTDS*/ "From"),
                      }),
                      u.jsx("input", {
                        "aria-label": s._(/*BTDS*/ "Start date"),
                        "data-testid": void 0,
                        max: E !== "" ? E : V,
                        onChange: q,
                        type: "date",
                        value: S,
                        className:
                          "xjbqb8w x1pyc6se x1mlb2bo x16pkwpw xqe4bef xyi3aci xwf5gio x1p453bz x1suzm8a x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x178xt8z x1lun4ml xso031l xpilrb4 x14ug900 x1f6kntn x16ovd2e x12xbjc7 xdx6fka xvtqlqk",
                      }),
                      u.jsx(r("WDSText.react"), {
                        type: "Body2",
                        colorName: "contentDeemphasized",
                        children: s._(/*BTDS*/ "To"),
                      }),
                      u.jsx("input", {
                        "aria-label": s._(/*BTDS*/ "End date"),
                        "data-testid": void 0,
                        max: V,
                        min: S !== "" ? S : void 0,
                        onChange: U,
                        type: "date",
                        value: E,
                        className:
                          "xjbqb8w x1pyc6se x1mlb2bo x16pkwpw xqe4bef xyi3aci xwf5gio x1p453bz x1suzm8a x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x178xt8z x1lun4ml xso031l xpilrb4 x14ug900 x1f6kntn x16ovd2e x12xbjc7 xdx6fka xvtqlqk",
                      }),
                    ],
                  }),
              ],
            }),
          ],
        });
      }
      if (i === "exporting") {
        var G,
          z = M > 0 ? Math.round(($ / M) * 100) : 0,
          j = (G = f[T]) != null ? G : f.loading,
          K = j(),
          Q = M > 0;
        return u.jsxs(o("WAWebModal.react").Modal, {
          title: s._(/*BTDS*/ "Exporting chat..."),
          onOverlayClick: r("WAWebNoop"),
          testid: void 0,
          children: [
            u.jsxs("div", {
              className:
                "x6s0dn4 x78zum5 xdt5ytf x1f0uite xs2akgl xl56j7k xi3av73 xl7twdi xvg22vi",
              children: [
                Q && u.jsx(r("WAWebProgressBar.react"), { value: z, max: 100 }),
                u.jsx(r("WDSText.react"), {
                  type: "Body2",
                  colorName: "contentDeemphasized",
                  children: K,
                }),
                T === "loading" &&
                  $ > 0 &&
                  u.jsx(r("WDSText.react"), {
                    type: "Body2",
                    colorName: "contentDeemphasized",
                    children: s._(
                      /*BTDS*/ '_j{"*":"{count} messages loaded","_1":"{count} message loaded"}',
                      [s._plural($), s._param("count", $)],
                    ),
                  }),
                T === "downloading_media" &&
                  M > 0 &&
                  u.jsx(r("WDSText.react"), {
                    type: "Body2",
                    colorName: "contentDeemphasized",
                    children: s._(/*BTDS*/ "{current} of {total}", [
                      s._param("current", $),
                      s._param("total", M),
                    ]),
                  }),
              ],
            }),
            u.jsx(o("WAWebFlex.react").FlexRow, {
              justify: "end",
              children: u.jsx(r("WDSButton.react"), {
                label: s._(/*BTDS*/ "Cancel"),
                variant: "borderless",
                onPress: O,
              }),
            }),
          ],
        });
      }
      if (i === "error") {
        var X = u.jsx("div", {
          children: u.jsx(r("WDSButtonGroup.react"), {
            width: "hug",
            primaryButtonProps: { label: s._(/*BTDS*/ "Retry"), onPress: F },
            tertiaryButtonProps: {
              label: s._(/*BTDS*/ "Close"),
              onPress: n,
              variant: "borderless",
            },
          }),
        });
        return u.jsx(o("WAWebModal.react").Modal, {
          title: s._(/*BTDS*/ "Export failed"),
          actions: X,
          testid: void 0,
          children: u.jsx(r("WDSText.react"), {
            type: "Body1",
            colorName: "contentDeemphasized",
            children: s._(
              /*BTDS*/ "Something went wrong while exporting this chat. Please try again.",
            ),
          }),
        });
      }
      return null;
    }
    ((g.displayName = g.name + " [from " + i.id + "]"), (l.default = g));
  },
  226,
);
