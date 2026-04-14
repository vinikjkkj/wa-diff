__d(
  "WAWebLabelsLabelListNewLabel.react",
  [
    "fbt",
    "WAWebCellFrame.react",
    "WAWebLabelEditInput.react",
    "WAWebListUtils",
    "WAWebListsGatingUtils",
    "WAWebListsUtil",
    "WAWebMobilePlatforms",
    "WAWebPlusIcon.react",
    "WAWebSuggestedLists.react",
    "WAWebWamEnumLabelOperations",
    "WAWebWamSmbListEventReporter",
    "WDSIconIcAdd.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useState;
    function d(e) {
      var t = e.entryPoint,
        n = e.onEditingChange,
        a = e.onNewLabelAdded,
        i = c(!1),
        l = i[0],
        d = i[1],
        m = c(""),
        p = m[0],
        _ = m[1],
        f = c(0),
        g = f[0],
        h = f[1],
        y = c(!1),
        C = y[0],
        b = y[1],
        v = c(null),
        S = v[0],
        R = v[1],
        L = o("WAWebListsGatingUtils").isListsEnabled(),
        E = o("WAWebMobilePlatforms").isSMB(),
        k = function () {
          (d(!1), _(""), R(null), b(!1), n == null || n(!1));
        };
      if (l) {
        var I = function (t) {
            (k(), a == null || a(t));
          },
          T = function (t) {
            (_(t),
              C && t !== (S == null ? void 0 : S.name) && (b(!1), R(null)));
          },
          D = function (n) {
            (R({ name: n.name, colorIndex: n.colorIndex }),
              h(function (e) {
                return e + 1;
              }),
              _(n.name),
              b(!0),
              o("WAWebWamSmbListEventReporter").logSmbListEvent({
                labelOperation: o("WAWebWamEnumLabelOperations")
                  .LABEL_OPERATIONS.SUGGESTION_CLICKED,
                updateEntryPoint: t != null ? t : void 0,
                predefinedId: n.predefinedId,
              }));
          },
          x;
        return (
          L
            ? (x = E ? "create-new-list-smb" : "create-new-list-consumer")
            : (x = "label-selection-new-label"),
          u.jsxs(u.Fragment, {
            children: [
              u.jsx(
                "div",
                babelHelpers.extends(
                  {},
                  {
                    0: { className: "xh8yej3 xuzvuw4" },
                    1: { className: "xh8yej3 xnnlda6 xjkvuk6" },
                  }[!!L << 0],
                  {
                    children: u.jsx(
                      r("WAWebLabelEditInput.react"),
                      {
                        label: null,
                        initialName: S == null ? void 0 : S.name,
                        initialColorIndex: S == null ? void 0 : S.colorIndex,
                        onSave: I,
                        onCancel: k,
                        onTextChange: T,
                        rowTheme: x,
                        entryPoint: t,
                      },
                      g,
                    ),
                  },
                ),
              ),
              L &&
                E &&
                !C &&
                u.jsx(r("WAWebSuggestedLists.react"), {
                  filterText: p,
                  onSelect: D,
                  suggestedListTheme: "list-assign-inline-edit",
                }),
            ],
          })
        );
      }
      var $ = function () {
          if (o("WAWebListUtils").isListFlowMaxListsCountReached()) {
            o("WAWebListsUtil").showMaxListsModal(L);
            return;
          }
          (d(!0), n == null || n(!0));
        },
        P = L
          ? u.jsx(r("WDSIconIcAdd.react"), {
              viewBox: { x: 3, y: 3, width: 18, height: 18 },
            })
          : u.jsx(o("WAWebPlusIcon.react").PlusIcon, {}),
        N = u.jsx(
          "div",
          babelHelpers.extends(
            {},
            {
              0: {
                className:
                  "x78zum5 x6s0dn4 xl56j7k x100vrsf x1vqgdyp x1c9tyrk xeusxvb x1pahc9y x1ertn4p x111a3t xhyrrhw",
              },
              1: {
                className:
                  "x78zum5 x6s0dn4 xl56j7k x100vrsf x16wdlz0 xt8t1vi x1xc408v x129tdwq x15urzxu xfn3atn x1pse0pq x1m2oepg",
              },
            }[!!L << 0],
            { "data-testid": void 0, children: P },
          ),
        ),
        M = L ? s._(/*BTDS*/ "New list") : s._(/*BTDS*/ "New label"),
        w = L ? "lists-assign-modal" : "label-selection-new-label";
      return u.jsx(
        "div",
        babelHelpers.extends(
          { role: "button", tabIndex: 0 },
          {
            0: { className: "xh8yej3 xuzvuw4 x1ypdohk" },
            1: { className: "xh8yej3 x1ypdohk xnnlda6 xjkvuk6" },
          }[!!L << 0],
          {
            onKeyDown: $,
            onClick: $,
            children: u.jsx(r("WAWebCellFrame.react"), {
              theme: w,
              image: N,
              primary: M,
            }),
          },
        ),
      );
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
