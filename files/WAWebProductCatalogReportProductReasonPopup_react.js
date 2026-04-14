__d(
  "WAWebProductCatalogReportProductReasonPopup.react",
  [
    "fbt",
    "WAWebButton.react",
    "WAWebKeyboardHotKeys.react",
    "WAWebModal.react",
    "WAWebRadio.react",
    "WAWebToast.react",
    "WAWebToastManager",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["ref"],
      u,
      c = u || (u = o("react")),
      d = u.useState,
      m = {
        ILLEGAL: "ILLEGAL",
        KNOCKOFF: "KNOCKOFF",
        NO_MATCH: "NO_MATCH",
        OTHER: "OTHER",
        SCAM: "SCAM",
        SPAM: "SPAM",
      },
      p = [m.NO_MATCH, m.SPAM, m.ILLEGAL, m.SCAM, m.KNOCKOFF, m.OTHER];
    function _(t) {
      var n = t.ref,
        r = babelHelpers.objectWithoutPropertiesLoose(t, e),
        a = r.onCancel,
        i = r.onTellUsMoreSubmit,
        l = d(null),
        u = l[0],
        m = l[1],
        _ = function () {
          a == null || a();
        },
        g = function (t) {
          m(t);
        },
        h = function () {
          o("WAWebToastManager").ToastManager.open(
            c.jsx(o("WAWebToast.react").Toast, {
              msg: s._(/*BTDS*/ "Please select a reason."),
            }),
          );
        },
        y = function () {
          if (u == null || !p.includes(u)) return h();
          i(u);
        },
        C = s._(/*BTDS*/ "Tell us more"),
        b = c.jsx("div", {
          className: "x78zum5",
          children: c.jsx("ul", {
            className: "x1n2onr6 x98rzlu",
            children: p.map(function (e) {
              return c.jsx(
                "li",
                {
                  children: c.jsx(o("WAWebRadio.react").RadioWithLabel, {
                    name: e,
                    value: e,
                    label: c.jsx(f, { reason: e }),
                    checked: u === e,
                    onChange: function () {
                      return g(e);
                    },
                  }),
                },
                "ReportProductReasonPopup-" + e + "-option",
              );
            }),
          }),
        }),
        v = c.jsx(
          o("WAWebButton.react").Button,
          {
            testid: void 0,
            type: "primary",
            onClick: y,
            disabled: !u,
            children: s._(/*BTDS*/ "Submit"),
          },
          "ReportProductReasonPopup-submitButton",
        ),
        S = c.jsx(
          o("WAWebButton.react").Button,
          {
            type: "secondary",
            testid: void 0,
            onClick: _,
            children: s._(/*BTDS*/ "Cancel"),
          },
          "ReportProductReasonPopup-cancelButton",
        ),
        R = { escape: _ },
        L = c.jsxs("div", { className: "x78zum5 x1s70e7g", children: [S, v] });
      return c.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
        ref: n,
        handlers: R,
        children: c.jsx(o("WAWebModal.react").Modal, {
          title: C,
          actions: L,
          children: b,
        }),
      });
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f(e) {
      var t = e.reason;
      return t === "NO_MATCH"
        ? s._(/*BTDS*/ "The pictures or descriptions don't match the item")
        : t === "SPAM"
          ? s._(/*BTDS*/ "This is spam")
          : t === "ILLEGAL"
            ? s._(/*BTDS*/ "This is abusive, harmful or illegal")
            : t === "SCAM"
              ? s._(/*BTDS*/ "This is fraud or a scam")
              : t === "KNOCKOFF"
                ? s._(
                    /*BTDS*/ "This appears to be a knockoff or counterfeit item",
                  )
                : t === "OTHER"
                  ? s._(/*BTDS*/ "Other")
                  : (function () {
                      throw Error(
                        "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                          t,
                      );
                    })();
    }
    ((f.displayName = f.name + " [from " + i.id + "]"), (l.default = _));
  },
  226,
);
