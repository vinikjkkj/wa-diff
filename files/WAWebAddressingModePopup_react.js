__d(
  "WAWebAddressingModePopup.react",
  [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebFbtCommon",
    "WAWebModalManager",
    "WAWebRadio.react",
    "WAWebText_DONOTUSE.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useState,
      d = { explanation: { marginBottom: "xcytdqz", $$css: !0 } };
    function m(e) {
      var t = e.initialAddressingMode,
        n = e.onAddressingModeSelected,
        a = c(t),
        i = a[0],
        l = a[1],
        m = function (t) {
          l(t);
        },
        p = function () {
          (n(i), o("WAWebModalManager").ModalManager.closeSupportOrModal());
        },
        _ = function () {
          o("WAWebModalManager").ModalManager.closeSupportOrModal();
        },
        f = u.jsxs(u.Fragment, {
          children: [
            u.jsx(o("WAWebText_DONOTUSE.react").TextParagraph, {
              xstyle: d.explanation,
              children: s._(
                /*BTDS*/ "Override the addressing mode of the new group.",
              ),
            }),
            u.jsx(
              o("WAWebRadio.react").RadioWithLabel,
              {
                name: "addressing_mode",
                value: "pn",
                label: "pn",
                checked: i === "pn",
                onChange: function () {
                  return m("pn");
                },
              },
              "addressing_mode_pn_radio",
            ),
            u.jsx(
              o("WAWebRadio.react").RadioWithLabel,
              {
                name: "addressing_mode",
                value: "lid",
                label: "lid",
                checked: i === "lid",
                onChange: function () {
                  return m("lid");
                },
              },
              "addressing_mode_lid_radio",
            ),
          ],
        });
      return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        testid: void 0,
        title: "Addressing Mode",
        onOK: p,
        onCancel: _,
        cancelText: r("WAWebFbtCommon")("Cancel"),
        children: f,
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);
