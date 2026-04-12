__d(
  "WAWebEphemeralPopup.react",
  [
    "fbt",
    "WAWebAfterReadNux.react",
    "WAWebAfterReadUtils",
    "WAWebConfirmPopup.react",
    "WAWebEphemeralNux.react",
    "WAWebEphemeralityDurations",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebModalManager",
    "WAWebNux",
    "WAWebRadio.react",
    "WAWebText_DONOTUSE.react",
    "react",
    "useWAWebNux",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useState,
      d = {
        afterReadHeader: {
          marginBottom: "xefnzgg",
          marginTop: "x98l61r",
          $$css: !0,
        },
        subtitle: { color: "xhslqc4", fontSize: "x1pg5gke", $$css: !0 },
        explanation: { marginBottom: "xcytdqz", $$css: !0 },
      };
    function m(e) {
      var t = e.initialDuration,
        n = e.onDurationSelected,
        a = c(t),
        i = a[0],
        l = a[1],
        m = r("useWAWebNux")(o("WAWebNux").NUX.EPHEMERAL),
        p = m[0],
        _ = m[1],
        f = r("useWAWebNux")(o("WAWebNux").NUX.EPHEMERAL_AFTER_READ),
        g = f[0],
        h = function (t) {
          l(t);
        },
        y = function () {
          _();
        },
        C = function () {
          o("WAWebExternalLink.react").openExternalLink(
            o("WAWebFaqUrl").getEphemeralFaqUrl(),
          );
        },
        b = function () {
          (n(i), o("WAWebModalManager").ModalManager.closeSupportOrModal());
        },
        v = function () {
          o("WAWebModalManager").ModalManager.closeSupportOrModal();
        },
        S;
      return (
        p
          ? (S = u.jsx(r("WAWebEphemeralNux.react"), { fromMe: !0 }))
          : (S = u.jsxs(u.Fragment, {
              children: [
                o("WAWebAfterReadUtils").isAfterReadOptionAvailable()
                  ? u.jsxs(u.Fragment, {
                      children: [
                        u.jsx(o("WAWebText_DONOTUSE.react").TextParagraph, {
                          xstyle: d.afterReadHeader,
                          children: s._(/*BTDS*/ "Message timer"),
                        }),
                        u.jsx(o("WAWebText_DONOTUSE.react").TextParagraph, {
                          xstyle: d.subtitle,
                          children: s._(
                            /*BTDS*/ "New messages in this chat will disappear for everyone after the selected duration.",
                          ),
                        }),
                      ],
                    })
                  : u.jsx(o("WAWebText_DONOTUSE.react").TextParagraph, {
                      xstyle: d.explanation,
                      children: s._(
                        /*BTDS*/ "All new messages in this chat will disappear after the selected duration.",
                      ),
                    }),
                o("WAWebEphemeralityDurations")
                  .getDefaultEphemeralityDurations(
                    o("WAWebAfterReadUtils").isAfterReadOptionAvailable(),
                  )
                  .map(function (e) {
                    var t = e.label,
                      n = e.value;
                    return u.jsx(
                      o("WAWebRadio.react").RadioWithLabel,
                      {
                        name: "duration",
                        value: n,
                        label: t,
                        checked: n === i,
                        onChange: function () {
                          return h(n);
                        },
                      },
                      n,
                    );
                  }),
                o("WAWebAfterReadUtils").isAfterReadOptionAvailable() &&
                  u.jsxs(u.Fragment, {
                    children: [
                      u.jsx(o("WAWebText_DONOTUSE.react").TextParagraph, {
                        xstyle: d.afterReadHeader,
                        children: s._(/*BTDS*/ "After reading"),
                      }),
                      u.jsx(o("WAWebText_DONOTUSE.react").TextParagraph, {
                        xstyle: d.subtitle,
                        children: s._(
                          /*BTDS*/ "New messages in this chat will disappear after they're sent or read.",
                        ),
                      }),
                      o("WAWebEphemeralityDurations")
                        .getAfterReadEphemeralityDurations("desc")
                        .map(function (e) {
                          var t = e.label,
                            n = e.value;
                          return u.jsx(
                            o("WAWebRadio.react").RadioWithLabel,
                            {
                              name: "duration",
                              value: n,
                              label: t,
                              checked: n === i,
                              onChange: function () {
                                (h(n),
                                  g &&
                                    o(
                                      "WAWebAfterReadUtils",
                                    ).isAfterReadDuration(n) &&
                                    o(
                                      "WAWebModalManager",
                                    ).ModalManager.openSupportModal(
                                      u.jsx(r("WAWebAfterReadNux.react"), {
                                        duration: n,
                                      }),
                                    ));
                              },
                            },
                            n,
                          );
                        }),
                    ],
                  }),
              ],
            })),
        u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
          tsNavigationData: {
            surface: "unknown",
            viewName: "ephemeral-settings",
          },
          testid: void 0,
          title: p ? void 0 : s._(/*BTDS*/ "Disappearing messages"),
          onOK: p ? y : b,
          onCancel: p ? C : v,
          cancelText: p ? s._(/*BTDS*/ "Learn more") : s._(/*BTDS*/ "Cancel"),
          children: S,
        })
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);
