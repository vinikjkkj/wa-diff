__d(
  "WAWebGdprRequestAccountInfoSettingsDrawerAvailable",
  [
    "fbt",
    "WALongInt",
    "WAWeb-moment",
    "WAWebDeleteIcon.react",
    "WAWebDrawerButton.react",
    "WAWebGdprRequestAccountInfoSettingsDrawerConfirmPopup",
    "WAWebIcDownloadIcon.react",
    "WAWebL10nFilesize",
    "WAWebModalManager",
    "WAWebNewsletterCommonGatingUtils",
    "WAWebText.react",
    "WAWebText_DONOTUSE.react",
    "react",
    "react-compiler-runtime",
    "useWAWebGdprDelete",
    "useWAWebGdprDownload",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = {
        marginTop18: { marginTop: "xhrpt6u", $$css: !0 },
        marginTop30: { marginTop: "x11fxgd9", $$css: !0 },
      },
      d = {
        availability: {
          marginInlineStart: "xymharo",
          marginInlineEnd: "x2pibh5",
          $$css: !0,
        },
      };
    function m(e) {
      var t = o("react-compiler-runtime").c(38),
        n = e.gdprStatus,
        a = e.onDeleteSuccess,
        i = e.report,
        l = n.creation,
        m = n.documentMessage,
        _ = n.expiration,
        f = o("WALongInt").maybeNumberOrThrowIfTooLarge(m.fileLength),
        g = o("useWAWebGdprDownload").useGdprDownload(),
        h = g[0],
        y = g[1],
        C = o("useWAWebGdprDelete").useGdprDelete(i),
        b = C[0],
        v = C[1],
        S;
      t[0] !== _
        ? ((S = s._(
            /*BTDS*/ "Your report is available to download until {availability_date}",
            [
              s._param(
                "availability_date",
                r("WAWeb-moment").unix(_).format("MMMM D, YYYY"),
              ),
            ],
          )),
          (t[0] = _),
          (t[1] = S))
        : (S = t[1]);
      var R = S,
        L;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((L = {
            className: "x178xt8z x13fuv20 xx42vgk xso031l x1q0q8m5 x120ee7l",
          }),
          (t[2] = L))
        : (L = t[2]);
      var E = o("WAWebDrawerButton.react").DrawerButtonSimple,
        k = "dark",
        I;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((I = u.jsx(o("WAWebIcDownloadIcon.react").IcDownloadIcon, {})),
          (t[3] = I))
        : (I = t[3]);
      var T;
      t[4] !== m || t[5] !== y || t[6] !== i
        ? ((T = function () {
            return y(m, i);
          }),
          (t[4] = m),
          (t[5] = y),
          (t[6] = i),
          (t[7] = T))
        : (T = t[7]);
      var D;
      t[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((D = u.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
            children: s._(/*BTDS*/ "Download report"),
          })),
          (t[8] = D))
        : (D = t[8]);
      var x = o("WAWebText.react").WAWebTextMuted,
        $ =
          f != null
            ? s._(/*BTDS*/ "{availability_date} \u00b7 {file_size}", [
                s._param(
                  "availability_date",
                  r("WAWeb-moment").unix(l).format("MMMM D, YYYY"),
                ),
                s._param(
                  "file_size",
                  o("WAWebL10nFilesize").getL10nFilesize(f),
                ),
              ])
            : s._(/*BTDS*/ "{availability_date}", [
                s._param(
                  "availability_date",
                  r("WAWeb-moment").unix(l).format("MMMM D, YYYY"),
                ),
              ]),
        P;
      t[9] !== x || t[10] !== $
        ? ((P = u.jsx(x, { children: $ })),
          (t[9] = x),
          (t[10] = $),
          (t[11] = P))
        : (P = t[11]);
      var N;
      t[12] !== E ||
      t[13] !== h ||
      t[14] !== I ||
      t[15] !== T ||
      t[16] !== D ||
      t[17] !== P
        ? ((N = u.jsxs(E, {
            color: k,
            disabled: h,
            icon: I,
            onClick: T,
            children: [D, P],
          })),
          (t[12] = E),
          (t[13] = h),
          (t[14] = I),
          (t[15] = T),
          (t[16] = D),
          (t[17] = P),
          (t[18] = N))
        : (N = t[18]);
      var M;
      t[19] !== N || t[20] !== L
        ? ((M = u.jsx("div", babelHelpers.extends({}, L, { children: N }))),
          (t[19] = N),
          (t[20] = L),
          (t[21] = M))
        : (M = t[21]);
      var w;
      t[22] === Symbol.for("react.memo_cache_sentinel")
        ? ((w = { className: "xso031l x1q0q8m5 x120ee7l" }), (t[22] = w))
        : (w = t[22]);
      var A;
      t[23] === Symbol.for("react.memo_cache_sentinel")
        ? ((A = u.jsx(o("WAWebDeleteIcon.react").DeleteIcon, {})), (t[23] = A))
        : (A = t[23]);
      var F;
      t[24] !== v || t[25] !== b || t[26] !== a
        ? ((F = function () {
            o("WAWebModalManager").ModalManager.open(
              u.jsx(
                r("WAWebGdprRequestAccountInfoSettingsDrawerConfirmPopup"),
                {
                  okDisabled: b,
                  okSpinner: b,
                  onCancel: p,
                  onOK: function () {
                    return v().then(function (e) {
                      e.success &&
                        (o("WAWebModalManager").ModalManager.close(), a());
                    });
                  },
                },
              ),
            );
          }),
          (t[24] = v),
          (t[25] = b),
          (t[26] = a),
          (t[27] = F))
        : (F = t[27]);
      var O;
      t[28] === Symbol.for("react.memo_cache_sentinel")
        ? ((O = u.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
            children: s._(/*BTDS*/ "Delete and request new report"),
          })),
          (t[28] = O))
        : (O = t[28]);
      var B;
      t[29] !== b || t[30] !== F
        ? ((B = u.jsx(
            "div",
            babelHelpers.extends({}, w, {
              children: u.jsx(o("WAWebDrawerButton.react").DrawerButtonSimple, {
                color: "dark",
                disabled: b,
                icon: A,
                onClick: F,
                children: O,
              }),
            }),
          )),
          (t[29] = b),
          (t[30] = F),
          (t[31] = B))
        : (B = t[31]);
      var W;
      t[32] !== R
        ? ((W = o("WAWebNewsletterCommonGatingUtils").isNewsletterEnabled()
            ? u.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
                color: "secondary",
                size: "16",
                xstyle: [d.availability, c.marginTop18],
                children: R,
              })
            : u.jsx(o("WAWebText.react").WAWebTextMuted, {
                xstyle: [d.availability, c.marginTop30],
                children: R,
              })),
          (t[32] = R),
          (t[33] = W))
        : (W = t[33]);
      var q;
      return (
        t[34] !== M || t[35] !== B || t[36] !== W
          ? ((q = u.jsxs(u.Fragment, { children: [M, B, W] })),
            (t[34] = M),
            (t[35] = B),
            (t[36] = W),
            (t[37] = q))
          : (q = t[37]),
        q
      );
    }
    function p() {
      return o("WAWebModalManager").ModalManager.close();
    }
    l.default = m;
  },
  226,
);
