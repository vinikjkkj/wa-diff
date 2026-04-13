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
    "WAWebUISpacing",
    "react",
    "react-compiler-runtime",
    "useWAWebGdprDelete",
    "useWAWebGdprDownload",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = {
        availability: {
          marginInlineStart: "xymharo",
          marginInlineEnd: "x2pibh5",
          $$css: !0,
        },
      };
    function d(e) {
      var t = o("react-compiler-runtime").c(38),
        n = e.gdprStatus,
        a = e.onDeleteSuccess,
        i = e.report,
        l = n.creation,
        d = n.documentMessage,
        p = n.expiration,
        _ = o("WALongInt").maybeNumberOrThrowIfTooLarge(d.fileLength),
        f = o("useWAWebGdprDownload").useGdprDownload(),
        g = f[0],
        h = f[1],
        y = o("useWAWebGdprDelete").useGdprDelete(i),
        C = y[0],
        b = y[1],
        v;
      t[0] !== p
        ? ((v = s._(
            /*BTDS*/ "Your report is available to download until {availability_date}",
            [
              s._param(
                "availability_date",
                r("WAWeb-moment").unix(p).format("MMMM D, YYYY"),
              ),
            ],
          )),
          (t[0] = p),
          (t[1] = v))
        : (v = t[1]);
      var S = v,
        R;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((R = {
            className: "x178xt8z x13fuv20 xx42vgk xso031l x1q0q8m5 x120ee7l",
          }),
          (t[2] = R))
        : (R = t[2]);
      var L = o("WAWebDrawerButton.react").DrawerButtonSimple,
        E = "dark",
        k;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((k = u.jsx(o("WAWebIcDownloadIcon.react").IcDownloadIcon, {})),
          (t[3] = k))
        : (k = t[3]);
      var I;
      t[4] !== d || t[5] !== h || t[6] !== i
        ? ((I = function () {
            return h(d, i);
          }),
          (t[4] = d),
          (t[5] = h),
          (t[6] = i),
          (t[7] = I))
        : (I = t[7]);
      var T;
      t[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((T = u.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
            children: s._(/*BTDS*/ "Download report"),
          })),
          (t[8] = T))
        : (T = t[8]);
      var D = o("WAWebText.react").WAWebTextMuted,
        x =
          _ != null
            ? s._(/*BTDS*/ "{availability_date} \u00b7 {file_size}", [
                s._param(
                  "availability_date",
                  r("WAWeb-moment").unix(l).format("MMMM D, YYYY"),
                ),
                s._param(
                  "file_size",
                  o("WAWebL10nFilesize").getL10nFilesize(_),
                ),
              ])
            : s._(/*BTDS*/ "{availability_date}", [
                s._param(
                  "availability_date",
                  r("WAWeb-moment").unix(l).format("MMMM D, YYYY"),
                ),
              ]),
        $;
      t[9] !== D || t[10] !== x
        ? (($ = u.jsx(D, { children: x })),
          (t[9] = D),
          (t[10] = x),
          (t[11] = $))
        : ($ = t[11]);
      var P;
      t[12] !== L ||
      t[13] !== g ||
      t[14] !== k ||
      t[15] !== I ||
      t[16] !== T ||
      t[17] !== $
        ? ((P = u.jsxs(L, {
            color: E,
            disabled: g,
            icon: k,
            onClick: I,
            children: [T, $],
          })),
          (t[12] = L),
          (t[13] = g),
          (t[14] = k),
          (t[15] = I),
          (t[16] = T),
          (t[17] = $),
          (t[18] = P))
        : (P = t[18]);
      var N;
      t[19] !== P || t[20] !== R
        ? ((N = u.jsx("div", babelHelpers.extends({}, R, { children: P }))),
          (t[19] = P),
          (t[20] = R),
          (t[21] = N))
        : (N = t[21]);
      var M;
      t[22] === Symbol.for("react.memo_cache_sentinel")
        ? ((M = { className: "xso031l x1q0q8m5 x120ee7l" }), (t[22] = M))
        : (M = t[22]);
      var w;
      t[23] === Symbol.for("react.memo_cache_sentinel")
        ? ((w = u.jsx(o("WAWebDeleteIcon.react").DeleteIcon, {})), (t[23] = w))
        : (w = t[23]);
      var A;
      t[24] !== b || t[25] !== C || t[26] !== a
        ? ((A = function () {
            o("WAWebModalManager").ModalManager.open(
              u.jsx(
                r("WAWebGdprRequestAccountInfoSettingsDrawerConfirmPopup"),
                {
                  okDisabled: C,
                  okSpinner: C,
                  onCancel: m,
                  onOK: function () {
                    return b().then(function (e) {
                      e.success &&
                        (o("WAWebModalManager").ModalManager.close(), a());
                    });
                  },
                },
              ),
            );
          }),
          (t[24] = b),
          (t[25] = C),
          (t[26] = a),
          (t[27] = A))
        : (A = t[27]);
      var F;
      t[28] === Symbol.for("react.memo_cache_sentinel")
        ? ((F = u.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
            children: s._(/*BTDS*/ "Delete and request new report"),
          })),
          (t[28] = F))
        : (F = t[28]);
      var O;
      t[29] !== C || t[30] !== A
        ? ((O = u.jsx(
            "div",
            babelHelpers.extends({}, M, {
              children: u.jsx(o("WAWebDrawerButton.react").DrawerButtonSimple, {
                color: "dark",
                disabled: C,
                icon: w,
                onClick: A,
                children: F,
              }),
            }),
          )),
          (t[29] = C),
          (t[30] = A),
          (t[31] = O))
        : (O = t[31]);
      var B;
      t[32] !== S
        ? ((B = o("WAWebNewsletterCommonGatingUtils").isNewsletterEnabled()
            ? u.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
                color: "secondary",
                size: "16",
                xstyle: [c.availability, o("WAWebUISpacing").uiMargin.top18],
                children: S,
              })
            : u.jsx(o("WAWebText.react").WAWebTextMuted, {
                xstyle: [c.availability, o("WAWebUISpacing").uiMargin.top30],
                children: S,
              })),
          (t[32] = S),
          (t[33] = B))
        : (B = t[33]);
      var W;
      return (
        t[34] !== N || t[35] !== O || t[36] !== B
          ? ((W = u.jsxs(u.Fragment, { children: [N, O, B] })),
            (t[34] = N),
            (t[35] = O),
            (t[36] = B),
            (t[37] = W))
          : (W = t[37]),
        W
      );
    }
    function m() {
      return o("WAWebModalManager").ModalManager.close();
    }
    l.default = d;
  },
  226,
);
