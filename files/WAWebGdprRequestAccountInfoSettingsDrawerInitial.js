__d(
  "WAWebGdprRequestAccountInfoSettingsDrawerInitial",
  [
    "fbt",
    "WAFilteredCatch",
    "WAWebCmd",
    "WAWebDrawerButton.react",
    "WAWebGdprConstants",
    "WAWebGdprErrors",
    "WAWebGdprRequestAccountInfoSettingsFooterNotice",
    "WAWebGdprRequestOverrideModal.react",
    "WAWebModalManager",
    "WAWebSettingsDocumentIcon.react",
    "react",
    "react-compiler-runtime",
    "useWAWebGdprRequest",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(22),
        n = e.newsletterBodyText,
        a = e.onRequestSuccess,
        i = e.otherPendingRequestsExist,
        l = e.report,
        s = o("useWAWebGdprRequest").useGdprRequest(l, i),
        c = s[0],
        _ = s[1],
        f;
      t[0] !== _ || t[1] !== a
        ? ((f = function (t) {
            return _(t).then(function (e) {
              e.success && a();
            });
          }),
          (t[0] = _),
          (t[1] = a),
          (t[2] = f))
        : (f = t[2]);
      var g = f,
        h;
      t[3] !== g || t[4] !== l
        ? ((h = function () {
            return g().catch(
              o("WAFilteredCatch").filteredCatch(
                o("WAWebGdprErrors").PendingGdprRequestsError,
                function () {
                  o("WAWebModalManager").ModalManager.open(
                    u.jsx(r("WAWebGdprRequestOverrideModal.react"), {
                      onConfirm: function () {
                        return g(!0).then(d);
                      },
                      requestedReport: l,
                    }),
                  );
                },
              ),
            );
          }),
          (t[3] = g),
          (t[4] = l),
          (t[5] = h))
        : (h = t[5]);
      var y = h,
        C;
      t[6] !== l ? ((C = m(l)), (t[6] = l), (t[7] = C)) : (C = t[7]);
      var b = C,
        v;
      t[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = "x178xt8z x13fuv20 xx42vgk xso031l x1q0q8m5 x120ee7l"),
          (t[8] = v))
        : (v = t[8]);
      var S;
      t[9] !== l ? ((S = p(l)), (t[9] = l), (t[10] = S)) : (S = t[10]);
      var R;
      t[11] === Symbol.for("react.memo_cache_sentinel")
        ? ((R = u.jsx(
            o("WAWebSettingsDocumentIcon.react").SettingsDocumentIcon,
            {},
          )),
          (t[11] = R))
        : (R = t[11]);
      var L;
      t[12] !== b || t[13] !== y || t[14] !== c || t[15] !== S
        ? ((L = u.jsx(o("WAWebDrawerButton.react").DrawerButtonSimple, {
            className: v,
            color: "dark",
            disabled: c,
            testid: S,
            icon: R,
            onClick: y,
            children: b,
          })),
          (t[12] = b),
          (t[13] = y),
          (t[14] = c),
          (t[15] = S),
          (t[16] = L))
        : (L = t[16]);
      var E;
      t[17] !== n
        ? ((E = u.jsx(r("WAWebGdprRequestAccountInfoSettingsFooterNotice"), {
            newsletterBodyText: n,
            isPending: !1,
          })),
          (t[17] = n),
          (t[18] = E))
        : (E = t[18]);
      var k;
      return (
        t[19] !== L || t[20] !== E
          ? ((k = u.jsxs(u.Fragment, { children: [L, E] })),
            (t[19] = L),
            (t[20] = E),
            (t[21] = k))
          : (k = t[21]),
        k
      );
    }
    function d() {
      o("WAWebCmd").Cmd.trigger("refresh_gdpr");
    }
    function m(e) {
      switch (e) {
        case o("WAWebGdprConstants").ReportType.Account:
          return s._(/*BTDS*/ "Request report");
        case o("WAWebGdprConstants").ReportType.Newsletters:
          return s._(/*BTDS*/ "Request Channels report");
      }
    }
    function p(e) {
      switch (e) {
        case o("WAWebGdprConstants").ReportType.Account:
          return "request-gdpr-report-button-account";
        case o("WAWebGdprConstants").ReportType.Newsletters:
          return "request-gdpr-report-button-channels";
      }
    }
    l.default = c;
  },
  226,
);
