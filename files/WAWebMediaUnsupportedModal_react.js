__d(
  "WAWebMediaUnsupportedModal.react",
  [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebFbtAppName",
    "WAWebFileSaver",
    "WAWebModalManager",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(9),
        n = e.msg,
        r;
      t[0] !== n
        ? ((r = function () {
            (o("WAWebModalManager").ModalManager.close(),
              o("WAWebFileSaver").FileSaver.initDownload(n));
          }),
          (t[0] = n),
          (t[1] = r))
        : (r = t[1]);
      var a = r,
        i;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = { surface: "unknown", viewName: "media-unsupported" }),
          (t[2] = i))
        : (i = t[2]);
      var l, c, m, p;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = s._(/*BTDS*/ "Download")),
          (c = s._(/*BTDS*/ "Cancel")),
          (m = s._(/*BTDS*/ "Download unsupported file?")),
          (p = s._(
            /*BTDS*/ "This file can't be opened in {=m1}. Download it to open it with another app on your computer?",
            [
              s._implicitParam(
                "=m1",
                u.jsx(o("WAWebFbtAppName").WAWebAppShortName, {
                  children: s._(/*BTDS*/ ""),
                }),
              ),
            ],
          )),
          (t[3] = l),
          (t[4] = c),
          (t[5] = m),
          (t[6] = p))
        : ((l = t[3]), (c = t[4]), (m = t[5]), (p = t[6]));
      var _;
      return (
        t[7] !== a
          ? ((_ = u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              tsNavigationData: i,
              onCancel: d,
              onOK: a,
              okText: l,
              cancelText: c,
              title: m,
              children: p,
            })),
            (t[7] = a),
            (t[8] = _))
          : (_ = t[8]),
        _
      );
    }
    function d() {
      o("WAWebModalManager").ModalManager.close();
    }
    l.default = c;
  },
  226,
);
