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
      var t = e.gdprStatus,
        n = t.creation,
        a = t.documentMessage,
        i = t.expiration,
        l = e.onDeleteSuccess,
        d = e.report,
        m = o("WALongInt").maybeNumberOrThrowIfTooLarge(a.fileLength),
        p = o("useWAWebGdprDownload").useGdprDownload(),
        _ = p[0],
        f = p[1],
        g = o("useWAWebGdprDelete").useGdprDelete(d),
        h = g[0],
        y = g[1],
        C = s._(
          /*BTDS*/ "Your report is available to download until {availability_date}",
          [
            s._param(
              "availability_date",
              r("WAWeb-moment").unix(i).format("MMMM D, YYYY"),
            ),
          ],
        );
      return u.jsxs(u.Fragment, {
        children: [
          u.jsx("div", {
            className: "x178xt8z x13fuv20 xx42vgk xso031l x1q0q8m5 x120ee7l",
            children: u.jsxs(o("WAWebDrawerButton.react").DrawerButtonSimple, {
              color: "dark",
              disabled: _,
              icon: u.jsx(o("WAWebIcDownloadIcon.react").IcDownloadIcon, {}),
              onClick: function () {
                return f(a, d);
              },
              children: [
                u.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
                  children: s._(/*BTDS*/ "Download report"),
                }),
                u.jsx(o("WAWebText.react").WAWebTextMuted, {
                  children:
                    m != null
                      ? s._(/*BTDS*/ "{availability_date} \u00b7 {file_size}", [
                          s._param(
                            "availability_date",
                            r("WAWeb-moment").unix(n).format("MMMM D, YYYY"),
                          ),
                          s._param(
                            "file_size",
                            o("WAWebL10nFilesize").getL10nFilesize(m),
                          ),
                        ])
                      : s._(/*BTDS*/ "{availability_date}", [
                          s._param(
                            "availability_date",
                            r("WAWeb-moment").unix(n).format("MMMM D, YYYY"),
                          ),
                        ]),
                }),
              ],
            }),
          }),
          u.jsx("div", {
            className: "xso031l x1q0q8m5 x120ee7l",
            children: u.jsx(o("WAWebDrawerButton.react").DrawerButtonSimple, {
              color: "dark",
              disabled: h,
              icon: u.jsx(o("WAWebDeleteIcon.react").DeleteIcon, {}),
              onClick: function () {
                o("WAWebModalManager").ModalManager.open(
                  u.jsx(
                    r("WAWebGdprRequestAccountInfoSettingsDrawerConfirmPopup"),
                    {
                      okDisabled: h,
                      okSpinner: h,
                      onCancel: function () {
                        return o("WAWebModalManager").ModalManager.close();
                      },
                      onOK: function () {
                        return y().then(function (e) {
                          e.success &&
                            (o("WAWebModalManager").ModalManager.close(), l());
                        });
                      },
                    },
                  ),
                );
              },
              children: u.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
                children: s._(/*BTDS*/ "Delete and request new report"),
              }),
            }),
          }),
          o("WAWebNewsletterCommonGatingUtils").isNewsletterEnabled()
            ? u.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
                color: "secondary",
                size: "16",
                xstyle: [c.availability, o("WAWebUISpacing").uiMargin.top18],
                children: C,
              })
            : u.jsx(o("WAWebText.react").WAWebTextMuted, {
                xstyle: [c.availability, o("WAWebUISpacing").uiMargin.top30],
                children: C,
              }),
        ],
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
