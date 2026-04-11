__d(
  "WAWebGdprRequestOverrideModal.react",
  [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebGdprConstants",
    "WAWebModalManager",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useCallback;
    function d(e) {
      switch (e) {
        case o("WAWebGdprConstants").ReportType.Newsletters: {
          var t = s._(/*BTDS*/ "Cancel account info request?"),
            n = s._(/*BTDS*/ "{=m0}{=m1}", [
              s._implicitParam(
                "=m0",
                u.jsx("p", {
                  children: s._(
                    /*BTDS*/ "Your earlier request for account info is in progress. It will be canceled if you make a request for a channels report now.",
                  ),
                }),
              ),
              s._implicitParam(
                "=m1",
                u.jsx("p", {
                  className: "x1de0gy",
                  children: s._(
                    /*BTDS*/ "Wait for your first request to complete before making another request.",
                  ),
                }),
              ),
            ]);
          return [t, n];
        }
        case o("WAWebGdprConstants").ReportType.Account: {
          var r = s._(/*BTDS*/ "Cancel channels activity request?"),
            a = s._(/*BTDS*/ "{=m0}{=m1}", [
              s._implicitParam(
                "=m0",
                u.jsx("p", {
                  children: s._(
                    /*BTDS*/ "Your earlier request for channels activity is in progress. It will be canceled if you make a request for account info now.",
                  ),
                }),
              ),
              s._implicitParam(
                "=m1",
                u.jsx("p", {
                  className: "x1de0gy",
                  children: s._(
                    /*BTDS*/ "Wait for your first request to complete before making another request.",
                  ),
                }),
              ),
            ]);
          return [r, a];
        }
      }
    }
    function m(e) {
      var t = o("react-compiler-runtime").c(11),
        n = e.onConfirm,
        r;
      t[0] !== n
        ? ((r = function () {
            n().finally(p);
          }),
          (t[0] = n),
          (t[1] = r))
        : (r = t[1]);
      var a = r,
        i;
      t[2] !== e.requestedReport
        ? ((i = d(e.requestedReport)), (t[2] = e.requestedReport), (t[3] = i))
        : (i = t[3]);
      var l = i,
        c = l[0],
        m = l[1],
        f;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = { surface: "unknown", viewName: "gdpr-request-override" }),
          (t[4] = f))
        : (f = t[4]);
      var g;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = s._(/*BTDS*/ "Yes, cancel")), (t[5] = g))
        : (g = t[5]);
      var h;
      t[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = s._(/*BTDS*/ "No, don't cancel")), (t[6] = h))
        : (h = t[6]);
      var y;
      return (
        t[7] !== m || t[8] !== a || t[9] !== c
          ? ((y = u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              tsNavigationData: f,
              title: c,
              onOK: a,
              okText: g,
              onCancel: _,
              cancelText: h,
              children: m,
            })),
            (t[7] = m),
            (t[8] = a),
            (t[9] = c),
            (t[10] = y))
          : (y = t[10]),
        y
      );
    }
    function p() {
      return o("WAWebModalManager").ModalManager.close();
    }
    function _() {
      o("WAWebModalManager").ModalManager.close();
    }
    l.default = m;
  },
  226,
);
