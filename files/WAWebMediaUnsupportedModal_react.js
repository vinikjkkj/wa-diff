__d(
  "WAWebMediaUnsupportedModal.react",
  [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebFbtAppName",
    "WAWebFileSaver",
    "WAWebModalManager",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.msg,
        n = function () {
          (o("WAWebModalManager").ModalManager.close(),
            o("WAWebFileSaver").FileSaver.initDownload(t));
        };
      return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        tsNavigationData: { surface: "unknown", viewName: "media-unsupported" },
        onCancel: d,
        onOK: n,
        okText: s._(/*BTDS*/ "Download"),
        cancelText: s._(/*BTDS*/ "Cancel"),
        title: s._(/*BTDS*/ "Download unsupported file?"),
        children: s._(
          /*BTDS*/ "This file can't be opened in {=m1}. Download it to open it with another app on your computer?",
          [
            s._implicitParam(
              "=m1",
              u.jsx(o("WAWebFbtAppName").WAWebAppShortName, {
                children: s._(/*BTDS*/ ""),
              }),
            ),
          ],
        ),
      });
    }
    c.displayName = c.name + " [from " + i.id + "]";
    function d() {
      o("WAWebModalManager").ModalManager.close();
    }
    l.default = c;
  },
  226,
);
