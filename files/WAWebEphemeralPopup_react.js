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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(27),
        n = e.initialDuration,
        a = e.onDurationSelected,
        i = c(n),
        l = i[0],
        m = i[1],
        f = r("useWAWebNux")(o("WAWebNux").NUX.EPHEMERAL),
        g = f[0],
        h = f[1],
        y = r("useWAWebNux")(o("WAWebNux").NUX.EPHEMERAL_AFTER_READ),
        C = y[0],
        b;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = function (t) {
            m(t);
          }),
          (t[0] = b))
        : (b = t[0]);
      var v = b,
        S;
      t[1] !== h
        ? ((S = function () {
            h();
          }),
          (t[1] = h),
          (t[2] = S))
        : (S = t[2]);
      var R = S,
        L = _,
        E;
      t[3] !== l || t[4] !== a
        ? ((E = function () {
            (a(l), o("WAWebModalManager").ModalManager.closeSupportOrModal());
          }),
          (t[3] = l),
          (t[4] = a),
          (t[5] = E))
        : (E = t[5]);
      var k = E,
        I = p,
        T;
      if (g) {
        var D;
        (t[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((D = u.jsx(r("WAWebEphemeralNux.react"), { fromMe: !0 })),
            (t[6] = D))
          : (D = t[6]),
          (T = D));
      } else {
        var x;
        t[7] === Symbol.for("react.memo_cache_sentinel")
          ? ((x = o("WAWebAfterReadUtils").isAfterReadOptionAvailable()
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
                })),
            (t[7] = x))
          : (x = t[7]);
        var $;
        t[8] !== l
          ? (($ = o("WAWebEphemeralityDurations")
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
                    checked: n === l,
                    onChange: function () {
                      return v(n);
                    },
                  },
                  n,
                );
              })),
            (t[8] = l),
            (t[9] = $))
          : ($ = t[9]);
        var P;
        t[10] !== l || t[11] !== C
          ? ((P =
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
                          checked: n === l,
                          onChange: function () {
                            (v(n),
                              C &&
                                o("WAWebAfterReadUtils").isAfterReadDuration(
                                  n,
                                ) &&
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
              })),
            (t[10] = l),
            (t[11] = C),
            (t[12] = P))
          : (P = t[12]);
        var N;
        (t[13] !== $ || t[14] !== P
          ? ((N = u.jsxs(u.Fragment, { children: [x, $, P] })),
            (t[13] = $),
            (t[14] = P),
            (t[15] = N))
          : (N = t[15]),
          (T = N));
      }
      var M;
      t[16] === Symbol.for("react.memo_cache_sentinel")
        ? ((M = { surface: "unknown", viewName: "ephemeral-settings" }),
          (t[16] = M))
        : (M = t[16]);
      var w;
      t[17] !== g
        ? ((w = g ? void 0 : s._(/*BTDS*/ "Disappearing messages")),
          (t[17] = g),
          (t[18] = w))
        : (w = t[18]);
      var A = g ? R : k,
        F = g ? L : I,
        O;
      t[19] !== g
        ? ((O = g ? s._(/*BTDS*/ "Learn more") : s._(/*BTDS*/ "Cancel")),
          (t[19] = g),
          (t[20] = O))
        : (O = t[20]);
      var B;
      return (
        t[21] !== T || t[22] !== w || t[23] !== A || t[24] !== F || t[25] !== O
          ? ((B = u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              tsNavigationData: M,
              testid: void 0,
              title: w,
              onOK: A,
              onCancel: F,
              cancelText: O,
              children: T,
            })),
            (t[21] = T),
            (t[22] = w),
            (t[23] = A),
            (t[24] = F),
            (t[25] = O),
            (t[26] = B))
          : (B = t[26]),
        B
      );
    }
    function p() {
      o("WAWebModalManager").ModalManager.closeSupportOrModal();
    }
    function _() {
      o("WAWebExternalLink.react").openExternalLink(
        o("WAWebFaqUrl").getEphemeralFaqUrl(),
      );
    }
    l.default = m;
  },
  226,
);
